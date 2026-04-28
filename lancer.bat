# ==============================================================================
# SCRIPT DE LANCEMENT - STICKER REMOVER
# ==============================================================================
# Application web de suppression de stickers/emojis
# ==============================================================================

@echo off
chcp 65001 >nul
title Sticker Remover

echo.
echo ========================================
echo   LANCEMENT STICKER REMOVER
echo ========================================
echo.

REM Vérifier si Python est installé
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Python n'est pas installé
    echo Veuillez installer Python depuis python.org
    pause
    exit /b 1
)

REM Créer les dossiers
if not exist "uploads" mkdir uploads
if not exist "results" mkdir results
if not exist "backend" mkdir backend

REM Installer les dépendances
echo [1/3] Installation des dépendances...
pip install -r backend\requirements.txt >nul 2>&1

REM Lancer le serveur
echo [2/3] Lancement du serveur...
echo.
timeout /t 2 /nobreak >nul
start "" python backend\main.py

REM Ouvrir le navigateur
echo [3/3] Ouverture du navigateur...
timeout /t 3 /nobreak >nul
start http://localhost:8000

echo.
echo ========================================
echo   Application prête!
echo   Adresse: http://localhost:8000
echo ========================================
echo.
pause