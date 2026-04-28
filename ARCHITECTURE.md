# ==============================================================================
# ARCHITECTURE DU PROJET - STICKER REMOVER
# ==============================================================================
# Application web de suppression de stickers/emojis sur photos
# Stack: Python (FastAPI) + HTML/JS/Tailwind + LaMa Inpainting
# 
# Structure:
# -----------
# ndjon/
# ├── backend/
# │   ├── main.py           # Serveur FastAPI principal
# │   ├── inpainting.py    # Module de traitement LaMa
# │   └── requirements.txt # Dépendances Python
# ├── frontend/
# │   ├── index.html      # Application web principale
# │   ├── style.css      # Styles Tailwind
# │   └── app.js         # Logique JavaScript
# ├── models/            # Modèles IA (téléchargés automatiquement)
# ├── uploads/          # Images uploadées
# └── run.py           # Script de lancement
#
# ==============================================================================
# DÉPENDANCES
# ==============================================================================
# - FastAPI: Serveur web
# - Uvicorn: Serveur ASGI
# - OpenCV: Traitement d'image
# - NumPy: Calculs numériques
# - Pillow: Manipulation d'images
# - LaMa: Modèle d'inpainting (STAM)
# - Torch: Backend deep learning
#
# ==============================================================================
# MODÈLES IA
# ==============================================================================
# Option 1: LaMa (STAM) - Le plus puissant pour l'inpainting
#    - Téléchargeable depuis: https://github.com/face-cubing/LaMa
#    - Plus lent mais très précis
#
# Option 2: SD Inpainting - Plus rapide
#    - Stable Diffusion Inpainting
#    - Plus rapide mais moins précis pour les visages
#
# Option 3: Replicate API - Solution cloud
#    - Utilise l'API Replicate avec IOPaint
#    - Pas besoin de GPU local
#
# ==============================================================================
# API ENDPOINTS
# ==============================================================================
# POST /upload - Upload d'image
# POST /inpaint - Traitement inpainting
# GET /result/{filename} - Résultat final
# DELETE /clear - Nettoyer les fichiers temporaires
#
# ==============================================================================
# FRONTEND
# ==============================================================================
# - Interface style "app mobile" (dark mode)
# - Canvas pour dessin du masque
# - Brush sizes ajustables (5px - 50px)
# - Compare avant/après (slider interactif)
# - Drag & Drop + bouton upload
# - Loading animations
# - Export haute qualité
#
# ==============================================================================
# FLUX DE TRAITEMENT
# ==============================================================================
# 1. User upload image
# 2. User dessine masque sur les zones à supprimer
# 3. Backend reçoit image + masque
# 4. Backend applique LaMa inpainting
# 5. Backend retourne image résultante
# 6. Frontend affiche comparaison
# 7. User peut télécharger
#
# ==============================================================================