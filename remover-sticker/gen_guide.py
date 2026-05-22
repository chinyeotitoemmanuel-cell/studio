#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from fpdf import FPDF

W = 190  # largeur disponible
G = 10   # marge gauche

pdf = FPDF(orientation="P", unit="mm", format="A4")
pdf.set_margins(G, G, G)
pdf.add_page()

C_VERT = (0, 180, 100)
C_BLEU = (0, 120, 255)
C_BLANC = (255, 255, 255)
C_GRIS = (150, 150, 150)
C_GRIS_F = (120, 120, 120)

pdf.set_fill_color(20, 20, 25)
pdf.rect(0, 0, 210, 297, "F")

def titre_principal(t):
    pdf.set_font("Helvetica", "B", 28)
    pdf.set_text_color(*C_VERT)
    pdf.cell(W, 18, t, align="C", new_x="LMARGIN", new_y="NEXT")

def sous_titre(t):
    pdf.set_font("Helvetica", "", 14)
    pdf.set_text_color(*C_BLANC)
    pdf.cell(W, 10, t, align="C", new_x="LMARGIN", new_y="NEXT")

def section(t):
    pdf.set_font("Helvetica", "B", 14)
    pdf.set_text_color(*C_VERT)
    pdf.cell(W, 10, t, new_x="LMARGIN", new_y="NEXT")

def sous_section(t):
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(*C_BLEU)
    pdf.cell(W, 8, t, new_x="LMARGIN", new_y="NEXT")

def texte(t, taille=10):
    pdf.set_font("Helvetica", "", taille)
    pdf.set_text_color(*C_BLANC)
    pdf.multi_cell(W, 6, t)

def texte_gris(t, taille=9):
    pdf.set_font("Helvetica", "I", taille)
    pdf.set_text_color(*C_GRIS)
    pdf.multi_cell(W, 5, t)

# === Contenu ===
titre_principal("Remover Sticker")
sous_titre("Guide d'utilisation")
pdf.set_font("Helvetica", "I", 10)
pdf.set_text_color(*C_GRIS)
pdf.cell(W, 8, "Version 1.0.0", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.ln(10)

section("Presentation")
texte("Remover Sticker est une application mobile qui permet de supprimer les stickers, "
      "emojis et autocollants presents sur vos photos. Elle utilise OpenCV pour reconstruire "
      "les zones masquees de maniere realiste (inpainting).")
pdf.ln(2)
texte("Tout le traitement est effectue LOCALEMENT sur votre appareil. "
      "Aucune photo n'est envoyee sur Internet.")
pdf.ln(6)

section("Installation")
texte("1. Telechargez le fichier APK depuis le site web.")
texte("2. Ouvrez le fichier APK sur votre appareil Android.")
texte("3. Autorisez l'installation depuis des sources inconnues si necessaire.")
texte("4. Lancez l'application Remover Sticker.")
pdf.ln(3)
texte_gris("Note : L'application necessite Android 7.0 (API 24) minimum et les permissions "
           "Camera + Stockage.")
pdf.ln(6)

section("Utilisation")

sous_section("Etape 1 : Choisir une photo")
texte("Sur l'ecran d'accueil, vous avez deux options :")
texte("   - 'Prendre une photo' : ouvre l'appareil photo")
texte("   - 'Choisir dans la galerie' : ouvre la galerie")
pdf.ln(3)

sous_section("Etape 2 : Marquer les zones a supprimer")
texte("Utilisez votre doigt pour dessiner sur les stickers ou emojis que vous souhaitez supprimer.")
texte("Ajustez la taille du pinceau avec le curseur en bas de l'ecran.")
texte("Les zones marquees apparaissent en rouge.")
pdf.ln(3)

sous_section("Etape 3 : Supprimer les zones")
texte("Appuyez sur le bouton 'Supprimer' (vert) pour lancer la suppression.")
texte("L'application reconstruit automatiquement les zones masquees.")
pdf.ln(3)

sous_section("Etape 4 : Avant / Apres")
texte("Utilisez le bouton 'Avant / Apres' pour comparer le resultat avec l'image originale.")
pdf.ln(3)

sous_section("Etape 5 : Sauvegarder")
texte("Appuyez sur l'icone de sauvegarde (disquette) en haut a droite.")
texte("L'image est sauvegardee dans le dossier Pictures.")
pdf.ln(6)

section("Conseils d'utilisation")
texte("- Marquez TOUTE la zone du sticker, pas seulement le centre.")
texte("- Pour les stickers sur un fond uni, un petit marquage suffit.")
texte("- Si le resultat n'est pas parfait, reappliquez sur les zones restantes.")
texte("- Utilisez un pinceau plus fin pour les stickers de petite taille.")
texte("- Le bouton 'Annuler' (rouge) efface tout le marquage en cours.")
pdf.ln(6)

section("Depannage")
pdf.set_font("Helvetica", "B", 10)
pdf.set_text_color(*C_BLANC)
pdf.cell(W, 6, "L'application ne s'ouvre pas ?", new_x="LMARGIN", new_y="NEXT")
texte("Verifiez que vous avez bien autorise les permissions (Camera et Stockage) "
      "dans les parametres Android.")
pdf.ln(2)
pdf.set_font("Helvetica", "B", 10)
pdf.cell(W, 6, "Le resultat n'est pas parfait ?", new_x="LMARGIN", new_y="NEXT")
texte("Reessayez avec un marquage plus precis ou une taille de pinceau differente.")
pdf.ln(6)

# Footer
pdf.set_font("Helvetica", "I", 8)
pdf.set_text_color(*C_GRIS_F)
pdf.cell(W, 5, "Remover Sticker v1.0.0 - Application open-source - Emmanuel 2026", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.cell(W, 5, "Technologies : Python, KivyMD, OpenCV, Pillow", align="C")

path = "C:\\Users\\DELL\\Desktop\\EMMANUEL\\ndjon\\remover-sticker\\guide_utilisation.pdf"
pdf.output(path)
print(f"PDF cree : {path}")
