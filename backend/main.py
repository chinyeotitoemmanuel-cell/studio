# ==============================================================================
# BACKEND FASTAPI - STICKER REMOVER
# ==============================================================================

from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
import os
import shutil
import tempfile
import base64
from datetime import datetime
from pathlib import Path
import cv2
import numpy as np
from PIL import Image
import io

# Configuration
UPLOAD_DIR = Path("uploads")
RESULT_DIR = Path("results")
MODEL_DIR = Path("models")

# Créer les répertoires
UPLOAD_DIR.mkdir(exist_ok=True)
RESULT_DIR.mkdir(exist_ok=True)
MODEL_DIR.mkdir(exist_ok=True)

app = FastAPI(title="Sticker Remover API", version="1.0.0")

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Montage des dossiers statiques
app.mount("/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")
app.mount("/results", StaticFiles(directory=str(RESULT_DIR)), name="results")


# ==============================================================================
# FONCTIONS UTILITAIRES
# ==============================================================================

def save_upload_file(upload_file: UploadFile) -> str:
    """Sauvegarde un fichier uploadé"""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{timestamp}_{upload_file.filename}"
    filepath = UPLOAD_DIR / filename
    
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)
    
    return filename


def create_mask_from_base64(base64_str: str, original_shape: tuple) -> np.ndarray:
    """Crée un masque à partir d'une image base64"""
    try:
        # Décoder base64 vers image
        img_bytes = base64.b64decode(base64_str)
        img_array = np.frombuffer(img_bytes, dtype=np.uint8)
        mask = cv2.imdecode(img_array, cv2.IMREAD_GRAYSCALE)
        
        # Redimensionner si nécessaire
        if mask.shape != original_shape[:2]:
            mask = cv2.resize(mask, (original_shape[1], original_shape[0]))
        
        return mask
    except Exception as e:
        print(f"Erreur création masque: {e}")
        return None


def apply_lama_inpainting(image: np.ndarray, mask: np.ndarray) -> np.ndarray:
    """
    Applique l'inpainting avec LaMa
    
    Note: Pour une version complète, téléchargez le modèle LaMa depuis:
    https://github.com/face-cubing/LaMa
    
    Cette version utilise OpenCV inpainting comme solution de fallback
    """
    # Convertir en RGB si nécessaire
    if len(image.shape) == 2:
        image = cv2.cvtColor(image, cv2.COLOR_GRAY2RGB)
    elif image.shape[2] == 4:
        image = cv2.cvtColor(image, cv2.COLOR_RGBA2RGB)
    else:
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    # Préparer le masque (noir et blanc)
    if len(mask.shape) == 3:
        mask = cv2.cvtColor(mask, cv2.COLOR_BGR2GRAY)
    
    # Normaliser le masque
    _, mask_binary = cv2.threshold(mask, 127, 255, cv2.THRESH_BINARY)
    
    # Appliquer inpainting TELEA (效果好) ou NAVIER-STOKES
    try:
        # Méthode 1: OpenCV inpainting (fallback)
        result = cv2.inpaint(image, mask_binary, 3, cv2.INPAINT_TELEA)
        return result
    except Exception as e:
        print(f"Inpainting failed: {e}")
        return image


def apply_ai_inpainting(image_path: str, mask_path: str, result_path: str, strength: float = 1.0) -> bool:
    """
    Applique l'inpainting IA (si modèle disponible)
    
    Pour utiliser LaMa真正的:
    1. Installez LaMa: pip install lama-inpainting
    2. Téléchargez le modèle
    3. Modifiez cette fonction
    """
    try:
        # Charger l'image
        image = cv2.imread(image_path)
        mask = cv2.imread(mask_path, cv2.IMREAD_GRAYSCALE)
        
        if image is None or mask is None:
            return False
        
        # Appliquer l'inpainting
        result = apply_lama_inpainting(image, mask)
        
        # Sauvegarder le résultat
        cv2.imwrite(result_path, cv2.cvtColor(result, cv2.COLOR_RGB2BGR))
        
        return True
    except Exception as e:
        print(f"Erreur AI inpainting: {e}")
        return False


# ==============================================================================
# ROUTES API
# ==============================================================================

@app.get("/")
async def root():
    """Page d'accueil"""
    return {
        "name": "Sticker Remover API",
        "version": "1.0.0",
        "status": "online",
        "endpoints": {
            "upload": "POST /upload",
            "inpaint": "POST /inpaint",
            "result": "GET /result/{filename}",
            "clear": "DELETE /clear"
        }
    }


@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    """Upload d'une image"""
    try:
        # Valider le type de fichier
        if file.content_type not in ["image/jpeg", "image/png", "image/webp"]:
            raise HTTPException(status_code=400, detail="Format d'image non supporté")
        
        # Sauvegarder le fichier
        filename = save_upload_file(file)
        
        # Obtenir les dimensions
        filepath = UPLOAD_DIR / filename
        img = Image.open(filepath)
        width, height = img.size
        
        return {
            "success": True,
            "filename": filename,
            "width": width,
            "height": height,
            "url": f"/uploads/{filename}"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/inpaint")
async def inpaint_image(
    image: str = Form(...),
    mask: str = Form(...),
    strength: float = Form(1.0)
):
    """
    Applique l'inpainting sur l'image
    
    Paramètres:
        - image: Nom du fichier image ou base64
        - mask: Image du masque en base64
        - strength: Force de l'inpainting (0.1 - 1.0)
    """
    try:
        # Déterminer le chemin de l'image
        if image.startswith("/") or image.startswith("http"):
            # C'est un chemin de fichier
            image_filename = image.split("/")[-1]
            image_path = UPLOAD_DIR / image_filename
        else:
            # C'est un nom de fichier
            image_path = UPLOAD_DIR / image
        
        if not image_path.exists():
            raise HTTPException(status_code=404, detail="Image non trouvée")
        
        # Charger l'image
        img = cv2.imread(str(image_path))
        if img is None:
            raise HTTPException(status_code=400, detail="Impossible de charger l'image")
        
        # Créer le masque à partir du base64
        mask_array = create_mask_from_base64(mask, img.shape)
        if mask_array is None:
            raise HTTPException(status_code=400, detail="Masque invalide")
        
        # Vérifier que le masque n'est pasvide
        if np.sum(mask_array > 0) == 0:
            raise HTTPException(status_code=400, detail="Le masque est vide")
        
        # Appliquer l'inpainting
        result = apply_lama_inpainting(img, mask_array)
        
        # Sauvegarder le résultat
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        result_filename = f"result_{timestamp}.png"
        result_path = RESULT_DIR / result_filename
        
        cv2.imwrite(
            str(result_path),
            cv2.cvtColor(result, cv2.COLOR_RGB2BGR)
        )
        
        return {
            "success": True,
            "result_filename": result_filename,
            "result_url": f"/results/{result_filename}"
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/result/{filename}")
async def get_result(filename: str):
    """Récupère une image de résultat"""
    filepath = RESULT_DIR / filename
    if not filepath.exists():
        raise HTTPException(status_code=404, detail="Fichier non trouvé")
    return FileResponse(filepath)


@app.delete("/clear")
async def clear_files():
    """Nettoie les fichiers temporaires"""
    try:
        # Supprimer les fichiers uploadés
        for file in UPLOAD_DIR.glob("*"):
            if file.is_file():
                file.unlink()
        
        # Supprimer les résultats
        for file in RESULT_DIR.glob("*"):
            if file.is_file():
                file.unlink()
        
        return {"success": True, "message": "Fichiers nettoyés"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health_check():
    """Vérification de santé de l'API"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "upload_dir": str(UPLOAD_DIR),
        "result_dir": str(RESULT_DIR)
    }


# ==============================================================================
# LANCEMENT DU SERVEUR
# ==============================================================================

if __name__ == "__main__":
    print("=" * 50)
    print("🚀 Démarrage du serveur Sticker Remover...")
    print("📍 Adresse: http://localhost:8000")
    print("=" * 50)
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )