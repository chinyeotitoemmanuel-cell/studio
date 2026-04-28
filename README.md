# ==============================================================================
# STICKER REMOVER - APPLICATION DE SUPPRESSION DE STICKERS
# ==============================================================================
# 
# Guide d'installation et d'utilisation
# 
# ==============================================================================

## PRÉREQUIS

- Python 3.8+ installé
- Minimum 4GB de RAM
- Connexion internet (pour les mises à jour)

## INSTALLATION RAPIDE

### Option 1: Script automatique (Windows)

Double-cliquez sur `lancer.bat`

### Option 2: Manuel

1. Ouvrir un terminal
2. Aller dans le dossier ndjon:
   ```
   cd chemin/vers/ndjon
   ```

3. Installer les dépendances:
   ```
   pip install -r backend\requirements.txt
   ```

4. Lancer le serveur:
   ```
   python backend\main.py
   ```

5. Ouvrir http://localhost:8000 dans le navigateur

## UTILISATION

### 1. Uploader une image

- Glissez une photo dans la zone prévue
- Ou cliquez pour sélectionner un fichier

### 2. Dessiner le masque

- Sélectionnez la taille du pinceau
- Dessinez sur les zones à supprimer (stickers, emojis)
- Utilisez "Effacer" pour corriger

### 3. Appliquer l'inpainting

- Cliquez sur "Supprimer"
- Attendez le traitement

### 4. Comparer le résultat

- Basculez entre "Édition" et "Comparer"
- Téléchargez le résultat

## FONCTIONNALITÉS

- [x] Upload d'image (drag & drop)
- [x] Dessin manuel du masque
- [x] Brush size ajustable
- [x] Comparaison avant/après
- [x] Téléchargement HD
- [ ] Détection automatique (en développement)
- [ ] Modèle IA avanzado (LaMa)

## DÉPANNAGE

### Le serveur ne démarre pas

Vérifiez que le port 8000 est libre:
```
netstat -ano | findstr :8000
```

### Erreur de module

Réinstallez les dépendances:
```
pip install --upgrade -r backend\requirements.txt
```

### L'image ne charge pas

Vérifiez le format (JPEG, PNG, WebP) et la taille (< 10MB)

## AMÉLIORATIONS POSSIBLES

### Ajouter LaMa (modèle IA avanzado)

1. Installer PyTorch:
   ```
   pip install torch torchvision
   ```

2. Télécharger le modèle LaMa depuis:
   https://github.com/face-cubing/LaMa

3. Modifier `backend/main.py` pour utiliser LaMa

### Utiliser Replicate (API cloud)

1. Créer un compte sur replicate.com
2. Obtenir une clé API
3. Modifier le code pour appeler l'API Replicate

## CRÉDITS

- Modèle OpenCV inpainting (inclus)
- LaMa: https://github.com/face-cubing/LaMa
- Modèles suggérés: IOPaint, Stable Diffusion

## LICENCE

MIT License

## AUTEUR

Créé pour le projet ndjon