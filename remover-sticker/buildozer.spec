[app]

# Nom de l'application
title = Remover Sticker

# Nom du package (identifiant unique)
package.name = removersticker
package.domain = org.emmanuel

# Version
version = 1.0.0
version.code = 1

# Fichier source principal
source.dir = .
source.include_exts = py,png,jpg,jpeg,kv,ttf

# Fichier à exécuter
main.py = main.py

# Fichiers requis
requirements = python3,kivy,kivymd,opencv,opencv-contrib,numpy,pillow,plyer,android

# Orientation de l'écran
orientation = portrait

# Permissions Android
android.permissions = CAMERA, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE

# API cible Android
android.api = 33
android.minapi = 21

# SDK et NDK (adapter selon votre installation)
android.sdk_path = ~/Android/Sdk
android.ndk_path = ~/Android/Sdk/ndk/27.0.12077973
android.ndk = 27.0.12077973
android.sdk = 33

# Commande de build
android.gradle_dependencies = 'androidx.core:core:1.12.0'
android.accept_sdk_license = True

# Icône (optionnel, mettre un fichier icon.png dans le dossier)
# icon.filename = icon.png

# Mode debug (True = .apk debug, False = .apk release)
debug = True

[buildozer]

# Télécharger automatiquement le SDK/NDK si manquant
log_level = 2
warn_on_root = True
