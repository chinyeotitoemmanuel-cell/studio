#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
╔══════════════════════════════════════════════════════════════╗
║                Remover Sticker — Application Mobile         ║
║  Supprime les stickers, emojis et autocollants des photos   ║
║                                                            ║
║  Technologie : KivyMD + OpenCV (inpainting)                ║
║  Auteur : Emmanuel                                         ║
║  Version : 1.0.0                                           ║
╚══════════════════════════════════════════════════════════════╝
"""

import os
import cv2
import numpy as np
from PIL import Image as PILImage

from kivy.clock import Clock
from kivy.lang import Builder
from kivy.core.image import Image as CoreImage
from kivy.graphics import Color, Ellipse, Rectangle
from kivy.utils import platform
from kivy.metrics import dp
from io import BytesIO

from kivymd.app import MDApp
from kivymd.uix.screen import MDScreen
from kivymd.toast import toast

# Plyer pour la caméra et la galerie (fonctionne sur Android)
try:
    from plyer import filechooser, camera
except ImportError:
    filechooser = None
    camera = None


# ===================================================================
# Fonctions utilitaires
# ===================================================================

def charger_image(chemin):
    """Charge une image depuis un fichier et retourne un array numpy (RGB)"""
    try:
        img_pil = PILImage.open(chemin).convert("RGB")
        return np.array(img_pil)
    except Exception as e:
        print(f"Erreur chargement image : {e}")
        return None


def array_to_texture(arr):
    """Convertit un array numpy en texture Kivy pour l'affichage"""
    if arr is None:
        return None
    h, w = arr.shape[:2]
    # RGB → RGBA
    if arr.shape[2] == 3:
        rgba = np.dstack([arr, np.full((h, w), 255, dtype=np.uint8)])
    else:
        rgba = arr
    # Créer la texture
    tex = CoreImage(BytesIO(rgba.tobytes()), size=(w, h), ext="raw").texture
    return tex


def mettre_a_jour_image(widget_img, arr):
    """Met à jour un widget Image avec un array numpy"""
    tex = array_to_texture(arr)
    if tex:
        widget_img.texture = tex


# ===================================================================
# Écran d'accueil
# ===================================================================

class HomeScreen(MDScreen):
    """Écran d'accueil avec choix photo ou caméra"""
    pass


# ===================================================================
# Écran d'édition
# ===================================================================

class EditScreen(MDScreen):
    """Écran d'édition : dessin, inpainting, avant/après, sauvegarde"""

    def on_touch_down(self, touch):
        """Capture le toucher pour dessiner le masque"""
        # Ignorer si on touche hors de la zone image
        zone = self.ids.zone_image
        if not zone.collide_point(*touch.pos):
            return super().on_touch_down(touch)

        app = MDApp.get_running_app()
        if app.image_originale is None:
            return True

        # Convertir en coordonnées locales du canvas
        canvas = self.ids.canvas_dessin
        cx, cy = canvas.to_widget(touch.x, touch.y)

        # Taille du pinceau
        rayon = app.taille_pinceau / 2

        # Dessiner sur le canvas (retour visuel)
        with canvas.canvas:
            Color(rgba=(1, 0.25, 0.25, 0.6))
            Ellipse(pos=(cx - rayon, cy - rayon), size=(rayon * 2, rayon * 2))

        # Enregistrer le point en coordonnées image
        px, py = app.coord_vers_pixel(cx, cy)
        if px >= 0 and py >= 0:
            app.points_dessin.append((px, py, rayon))

        self.ids.lbl_statut.text = f"{len(app.points_dessin)} zones marquees"
        return True

    def on_touch_move(self, touch):
        """Continue le dessin en glissant le doigt"""
        zone = self.ids.zone_image
        if not zone.collide_point(*touch.pos):
            return

        app = MDApp.get_running_app()
        if app.image_originale is None:
            return

        canvas = self.ids.canvas_dessin
        cx, cy = canvas.to_widget(touch.x, touch.y)
        rayon = app.taille_pinceau / 2

        with canvas.canvas:
            Color(rgba=(1, 0.25, 0.25, 0.6))
            Ellipse(pos=(cx - rayon, cy - rayon), size=(rayon * 2, rayon * 2))

        px, py = app.coord_vers_pixel(cx, cy)
        if px >= 0 and py >= 0:
            app.points_dessin.append((px, py, rayon))

        return True


# ===================================================================
# Application principale
# ===================================================================

class RemoverApp(MDApp):
    """Application Remover Sticker"""

    def build(self):
        self.title = "Remover Sticker"
        self.theme_cls.theme_style = "Dark"
        self.theme_cls.primary_palette = "Green"
        self.theme_cls.accent_palette = "Teal"

        # Données
        self.image_originale = None      # array numpy (H, W, 3)
        self.image_resultat = None       # array après inpainting
        self.affiche_originale = True     # toggle avant/après
        self.points_dessin = []           # liste de (x, y, rayon)
        self.taille_pinceau = 20          # taille par défaut
        self.chemin_image = ""

        return Builder.load_file("remover.kv")

    # --- Navigation ---

    def retour_accueil(self):
        """Revient à l'écran d'accueil et réinitialise"""
        self.root.current = "accueil"
        self.reinitialiser()

    def reinitialiser(self):
        """Réinitialise les données de l'image courante"""
        self.image_originale = None
        self.image_resultat = None
        self.affiche_originale = True
        self.points_dessin = []
        self.chemin_image = ""

        ecran = self.root.get_screen("edition")
        ecran.ids.canvas_dessin.canvas.clear()
        ecran.ids.img_affichage.source = ""
        ecran.ids.lbl_statut.text = "Dessinez sur les zones a supprimer, puis appuyez sur Supprimer"
        ecran.ids.btn_comparer.text = "👁️  Avant"

    # --- Choix de la photo ---

    def prendre_photo(self):
        """Ouvre l'appareil photo (Android)"""
        if platform == "android" and camera:
            try:
                camera.take_picture(on_complete=self.photo_prisee)
                toast("Photo en cours...")
            except Exception as e:
                toast(f"Erreur camera : {e}")
        else:
            toast("Camera non disponible, utilisez la galerie")
            self.choisir_photo()

    def photo_prisee(self, chemin):
        """Callback après la prise de photo"""
        if chemin:
            self.charger_et_afficher(chemin[0] if isinstance(chemin, list) else chemin)
        else:
            toast("Aucune photo prise")

    def choisir_photo(self):
        """Ouvre la galerie pour choisir une photo"""
        if filechooser:
            try:
                filechooser.open_file(
                    on_selection=self.fichier_choisi,
                    filters=["*.png", "*.jpg", "*.jpeg", "*.bmp"]
                )
            except Exception as e:
                toast(f"Erreur galerie : {e}")
        else:
            toast("Galerie non disponible")

    def fichier_choisi(self, selection):
        """Callback après sélection dans la galerie"""
        if selection:
            self.charger_et_afficher(selection[0])
        else:
            toast("Aucune photo selectionnee")

    def charger_et_afficher(self, chemin):
        """Charge une image et passe à l'écran d'édition"""
        arr = charger_image(chemin)
        if arr is None:
            toast("Impossible de charger l'image")
            return

        self.image_originale = arr
        self.image_resultat = None
        self.affiche_originale = True
        self.points_dessin = []
        self.chemin_image = chemin

        ecran = self.root.get_screen("edition")
        ecran.ids.canvas_dessin.canvas.clear()
        mettre_a_jour_image(ecran.ids.img_affichage, arr)
        ecran.ids.lbl_statut.text = "Dessinez sur les zones a supprimer"
        ecran.ids.btn_comparer.text = "👁️  Avant"

        self.root.current = "edition"

    # --- Coordonnées ---

    def coord_vers_pixel(self, wx, wy):
        """Convertit les coordonnées du widget canvas en pixels image"""
        if self.image_originale is None:
            return -1, -1

        h_img, w_img = self.image_originale.shape[:2]
        ecran = self.root.get_screen("edition")
        img_w = ecran.ids.img_affichage.width
        img_h = ecran.ids.img_affichage.height

        # Éviter les divisions par zéro
        if img_w <= 0 or img_h <= 0:
            return 0, 0

        ratio_img = w_img / h_img
        ratio_widget = img_w / img_h

        if ratio_img > ratio_widget:
            # L'image est plus large — ajustée par la largeur
            aff_w = img_w
            aff_h = img_w / ratio_img
            dec_x = 0
            dec_y = (img_h - aff_h) / 2
        else:
            aff_h = img_h
            aff_w = img_h * ratio_img
            dec_x = (img_w - aff_w) / 2
            dec_y = 0

        px = int((wx - dec_x) / aff_w * w_img)
        py = int((wy - dec_y) / aff_h * h_img)

        px = max(0, min(px, w_img - 1))
        py = max(0, min(py, h_img - 1))

        return px, py

    # --- Dessin ---

    def annuler_dessin(self):
        """Efface le dessin en cours"""
        self.points_dessin = []
        ecran = self.root.get_screen("edition")
        ecran.ids.canvas_dessin.canvas.clear()
        ecran.ids.lbl_statut.text = "Dessin annule"

        # Réafficher l'image originale
        if self.image_originale is not None:
            self.affiche_originale = True
            mettre_a_jour_image(ecran.ids.img_affichage, self.image_originale)
            ecran.ids.btn_comparer.text = "👁️  Avant"

    # --- Inpainting ---

    def supprimer_zones(self):
        """Supprime les zones marquées par inpainting"""
        if self.image_originale is None:
            toast("Aucune image chargee")
            return

        if not self.points_dessin:
            toast("Dessinez d'abord sur les zones a supprimer")
            return

        h, w = self.image_originale.shape[:2]

        # Créer un masque binaire (blanc = zones à supprimer)
        masque = np.zeros((h, w), dtype=np.uint8)

        for px, py, rayon in self.points_dessin:
            cv2.circle(masque, (px, py), int(rayon), 255, -1)

        # Appliquer l'inpainting
        try:
            rayon_inpaint = max(3, int(self.taille_pinceau * 0.6))
            resultat = cv2.inpaint(self.image_originale, masque, rayon_inpaint, cv2.INPAINT_TELEA)
            self.image_resultat = resultat
            self.affiche_originale = False

            ecran = self.root.get_screen("edition")
            mettre_a_jour_image(ecran.ids.img_affichage, resultat)
            ecran.ids.btn_comparer.text = "👁️  Apres"
            ecran.ids.lbl_statut.text = f"✓ {len(self.points_dessin)} zones supprimees"
            toast("Suppression effectuee !")

        except Exception as e:
            toast(f"Erreur d'inpainting : {e}")

    # --- Comparaison avant/après ---

    def basculer_comparaison(self):
        """Bascule entre l'image originale et le résultat"""
        if self.image_resultat is None:
            toast("Appliquez d'abord la suppression")
            return

        ecran = self.root.get_screen("edition")

        if self.affiche_originale:
            mettre_a_jour_image(ecran.ids.img_affichage, self.image_resultat)
            ecran.ids.btn_comparer.text = "👁️  Apres"
            self.affiche_originale = False
        else:
            mettre_a_jour_image(ecran.ids.img_affichage, self.image_originale)
            ecran.ids.btn_comparer.text = "👁️  Avant"
            self.affiche_originale = True

    # --- Sauvegarde ---

    def sauvegarder(self):
        """Sauvegarde l'image nettoyée"""
        img_a_sauver = None

        if self.image_resultat is not None and not self.affiche_originale:
            img_a_sauver = self.image_resultat
        elif self.image_resultat is not None:
            img_a_sauver = self.image_resultat
        elif self.image_originale is not None:
            img_a_sauver = self.image_originale
        else:
            toast("Aucune image a sauvegarder")
            return

        try:
            # Déterminer le dossier de sauvegarde
            if platform == "android":
                from android.permissions import request_permissions, Permission
                request_permissions([Permission.WRITE_EXTERNAL_STORAGE, Permission.READ_EXTERNAL_STORAGE])

                dossiers = [
                    "/storage/emulated/0/Pictures",
                    "/storage/emulated/0/DCIM",
                    "/storage/emulated/0/Download",
                ]
                dossier_save = None
                for d in dossiers:
                    if os.path.exists(d):
                        dossier_save = d
                        break
                if not dossier_save:
                    dossier_save = os.path.expanduser("~")
            else:
                dossier_save = os.path.expanduser("~")

            # Nom de fichier avec timestamp
            from datetime import datetime
            horodatage = datetime.now().strftime("%Y%m%d_%H%M%S")
            nom_fichier = f"remover_sticker_{horodatage}.png"
            chemin_save = os.path.join(dossier_save, nom_fichier)

            # Sauvegarder
            img_pil = PILImage.fromarray(cv2.cvtColor(img_a_sauver, cv2.COLOR_RGB2BGR))
            img_pil.save(chemin_save)

            toast(f"Sauvegardee : {nom_fichier}")

        except Exception as e:
            toast(f"Erreur sauvegarde : {e}")

    # --- Événements ---

    def on_start(self):
        """Appelé au démarrage de l'application"""
        # Lier le slider de taille du pinceau
        ecran = self.root.get_screen("edition")
        slider = ecran.ids.slider_taille
        slider.bind(value=self.sur_taille_changee)

    def sur_taille_changee(self, instance, valeur):
        """Met à jour la taille du pinceau"""
        self.taille_pinceau = int(valeur)
        ecran = self.root.get_screen("edition")
        ecran.ids.lbl_taille.text = str(int(valeur))


# ===================================================================
# Point d'entrée
# ===================================================================

if __name__ == "__main__":
    RemoverApp().run()
