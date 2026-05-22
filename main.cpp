/*****************************************************************************
 * ROAD RACER - Jeu de course en vue de côté
 *
 * Un jeu de course rétro style années 80/90 utilisant Raylib 5+.
 * La voiture avance automatiquement vers la droite. Le joueur change de voie
 * avec Haut/Bas et saute avec Espace pour éviter les obstacles.
 *
 * Commandes :
 *   - Flèches HAUT/BAS : Changer de voie
 *   - ESPACE : Sauter
 *   - Manette : D-Pad/Stick + Bouton A/X pour sauter
 *****************************************************************************/

#include "raylib.h"
#include <cstdlib>
#include <ctime>
#include <cmath>
#include <cstdio>

// ---------------------------------------------------------------------------
// Constantes
// ---------------------------------------------------------------------------
const int SCREEN_W = 1024;
const int SCREEN_H = 600;
const int FPS = 60;

// Route et voies (3 voies)
const int NB_VOIES = 3;
const float ROUTE_HAUT = 200.0f;
const float ROUTE_BAS  = 500.0f;
const float HAUTEUR_VOIE = (ROUTE_BAS - ROUTE_HAUT) / NB_VOIES;
const float CENTRE_VOIE[NB_VOIES] = {
    ROUTE_HAUT + HAUTEUR_VOIE * 0.5f,
    ROUTE_HAUT + HAUTEUR_VOIE * 1.5f,
    ROUTE_HAUT + HAUTEUR_VOIE * 2.5f
};

// Joueur
const float JOUEUR_X     = 160.0f;  // position X fixe à l'écran
const float JOUEUR_LARG  = 70.0f;
const float JOUEUR_HAUT  = 28.0f;

// Saut
const float DUREE_SAUT   = 0.45f;
const float HAUTEUR_SAUT = 48.0f;

// Adversaires
const int   MAX_ADV = 5;
const float ADV_LARG = 70.0f;
const float ADV_HAUT = 28.0f;

// Obstacles
const int   MAX_OBST = 4;
const float OBST_TAILLE = 28.0f;

// Vitesse
const float VITESSE_BASE = 200.0f;
const float VITESSE_MAX  = 550.0f;
const float ACCELERATION = 10.0f;

// Apparition
const float SPAWN_BASE  = 1.8f;
const float SPAWN_MIN   = 0.5f;

// Défilement
const float SCROLL_FACTOR = 2.0f;

// ---------------------------------------------------------------------------
// États du jeu
// ---------------------------------------------------------------------------
enum EtatJeu { TITRE, JOUE, GAME_OVER };

// ---------------------------------------------------------------------------
// Structures
// ---------------------------------------------------------------------------
typedef struct {
    int   voie;
    float yVisuel;        // Y interpolé pour le mouvement fluide
    float vitesse;        // vitesse actuelle
    float score;          // distance parcourue
    float inclinaison;    // inclinaison visuelle (degrés) pendant changement de voie
    float timerSaut;      // -1 = pas de saut, 0+ = progression du saut
    float timerStick;     // anti-répétition pour le stick analogique
} Joueur;

typedef struct {
    float x;
    int   voie;
    float vitesse;
    Color couleurCorps;
    Color couleurCabine;
    bool  actif;
} Adversaire;

typedef struct {
    float x;
    int   voie;
    int   type;          // 0 = tonneau, 1 = trou
    bool  actif;
} Obstacle;

// ---------------------------------------------------------------------------
// Variables globales du jeu
// ---------------------------------------------------------------------------
Joueur    joueur;
Adversaire adversaires[MAX_ADV];
Obstacle  obstacles[MAX_OBST];
EtatJeu   etat;
float     scrollOffset;
float     timerApparition;
float     intervalleApparition;
int       manetteID;

// ---------------------------------------------------------------------------
// Fonctions utilitaires
// ---------------------------------------------------------------------------
float Aleatoire(float min, float max) {
    return min + (max - min) * ((float)rand() / (float)RAND_MAX);
}

int AleatoireInt(int min, int max) {
    return min + rand() % (max - min + 1);
}

Color CouleurAleatoire() {
    static const Color couleurs[] = {
        { 50, 130, 220, 255 },   // bleu
        { 220, 50, 50, 255 },    // rouge
        { 220, 220, 50, 255 },   // jaune
        { 50, 200, 100, 255 },   // vert
        { 200, 100, 200, 255 },  // violet
        { 255, 150, 50, 255 },   // orange
        { 180, 180, 200, 255 },  // gris
        { 100, 200, 200, 255 },  // cyan
    };
    return couleurs[rand() % 8];
}

Color Assombrir(Color c, float facteur) {
    return Color{
        (unsigned char)(c.r * facteur),
        (unsigned char)(c.g * facteur),
        (unsigned char)(c.b * facteur),
        c.a
    };
}

// ---------------------------------------------------------------------------
// Dessin du décor
// ---------------------------------------------------------------------------
void DessinerDecor(float decalage) {
    // --- Ciel avec dégradé ---
    DrawRectangleGradientV(0, 0, SCREEN_W, (int)ROUTE_HAUT,
        { 40, 110, 220, 255 }, { 130, 195, 245, 255 });

    // Soleil
    DrawCircle(880, 55, 35, { 255, 235, 80, 255 });
    DrawCircle(880, 55, 28, { 255, 255, 180, 255 });

    // Nuages (parallaxe lente)
    float nuageX = fmodf(decalage * 0.08f, 500.0f);
    for (int i = 0; i < 5; i++) {
        float cx = i * 500.0f - nuageX;
        if (cx > -150 && cx < SCREEN_W + 100) {
            DrawEllipse((int)cx, 70 + i * 12, 55, 16, { 255, 255, 255, 55 });
            DrawEllipse((int)(cx + 35), 65 + i * 12, 40, 13, { 255, 255, 255, 45 });
        }
    }

    // Montagnes lointaines (parallaxe moyenne)
    float montX = fmodf(decalage * 0.15f, 350.0f);
    for (int i = 0; i < 7; i++) {
        float mx = i * 350.0f - montX;
        if (mx > -200 && mx < SCREEN_W + 100) {
            DrawTriangle(
                Vector2{ mx, ROUTE_HAUT },
                Vector2{ mx + 90, ROUTE_HAUT - 50 - (float)(i % 3) * 18 },
                Vector2{ mx + 180, ROUTE_HAUT },
                { 65, 125, 55, 255 }
            );
        }
    }

    // --- Route ---
    DrawRectangle(0, (int)ROUTE_HAUT, SCREEN_W, (int)(ROUTE_BAS - ROUTE_HAUT),
                  { 50, 50, 55, 255 });

    // Bordure supérieure de la route
    DrawRectangle(0, (int)ROUTE_HAUT - 4, SCREEN_W, 4, { 200, 200, 50, 255 });
    DrawRectangle(0, (int)ROUTE_BAS, SCREEN_W, 4, { 200, 200, 50, 255 });

    // --- Herbe en bas ---
    DrawRectangle(0, (int)ROUTE_BAS + 4, SCREEN_W, SCREEN_H - (int)ROUTE_BAS - 4,
                  { 35, 145, 35, 255 });

    // Petits brins d'herbe (décoratifs)
    for (int i = 0; i < 30; i++) {
        float hx = fmodf(i * 35.0f - decalage * 1.2f, 1050.0f);
        if (hx >= 0 && hx < SCREEN_W) {
            DrawLine((int)hx, (int)ROUTE_BAS + 4, (int)hx, (int)ROUTE_BAS + 4 + (i % 3 + 3),
                     { 45, 165, 45, 255 });
        }
    }

    // --- Lignes de voie (défilement) ---
    float espacement = 130.0f;
    float longMarq   = 65.0f;
    float decalRoute = fmodf(decalage, espacement);

    for (int v = 0; v < NB_VOIES - 1; v++) {
        float yLigne = ROUTE_HAUT + HAUTEUR_VOIE * (v + 1);
        for (int i = 0; i < 15; i++) {
            float x = i * espacement - decalRoute;
            if (x > -longMarq && x < SCREEN_W) {
                DrawRectangle((int)x, (int)yLigne - 1, (int)longMarq, 3,
                              { 255, 255, 255, 160 });
            }
        }
    }

    // Lignes de bordure fines
    DrawRectangle(0, (int)ROUTE_HAUT + 3, SCREEN_W, 2, ColorAlpha(WHITE, 60));
    DrawRectangle(0, (int)ROUTE_BAS - 5, SCREEN_W, 2, ColorAlpha(WHITE, 60));
}

// ---------------------------------------------------------------------------
// Dessin d'une voiture (vue de côté)
// ---------------------------------------------------------------------------
void DessinerVoiture(float x, float y, float larg, float haut,
                     Color corps, Color cabine, Color vitre,
                     bool faceDroite, float inclinaison)
{
    // Décalage d'inclinaison (léger déplacement visuel)
    float decX = inclinaison * 0.6f;

    // Corps principal
    DrawRectangle((int)(x - larg * 0.5f + decX), (int)(y - haut * 0.5f),
                  (int)larg, (int)haut, corps);

    // Cabine (sur le dessus, côté avant selon direction)
    float cabLarg = larg * 0.35f;
    float cabHaut = haut * 0.55f;
    float cabX, cabY = y - haut * 0.5f - cabHaut + 2;

    if (faceDroite)
        cabX = x + larg * 0.12f + decX;
    else
        cabX = x - larg * 0.47f + decX;

    DrawRectangle((int)cabX, (int)cabY, (int)cabLarg, (int)cabHaut, cabine);
    DrawRectangle((int)(cabX + 2), (int)(cabY + 2),
                  (int)(cabLarg - 4), (int)(cabHaut - 4), vitre);

    // Roues
    float roueY  = y + haut * 0.42f;
    float rayonR = haut * 0.22f;
    DrawCircle((int)(x - larg * 0.35f + decX), (int)roueY, rayonR, DARKGRAY);
    DrawCircle((int)(x + larg * 0.35f + decX), (int)roueY, rayonR, DARKGRAY);
    DrawCircle((int)(x - larg * 0.35f + decX), (int)roueY, rayonR * 0.45f, GRAY);
    DrawCircle((int)(x + larg * 0.35f + decX), (int)roueY, rayonR * 0.45f, GRAY);

    // Phare avant
    if (faceDroite)
        DrawCircle((int)(x + larg * 0.5f - 2 + decX), (int)(y - haut * 0.25f), 3, YELLOW);
    else
        DrawCircle((int)(x - larg * 0.5f + 2 + decX), (int)(y - haut * 0.25f), 3, RED);

    // Feu arrière
    if (faceDroite)
        DrawCircle((int)(x - larg * 0.5f + 2 + decX), (int)(y - haut * 0.25f), 3, { 200, 50, 50, 255 });
    else
        DrawCircle((int)(x + larg * 0.5f - 2 + decX), (int)(y - haut * 0.25f), 3, YELLOW);
}

// ---------------------------------------------------------------------------
// Dessin des obstacles
// ---------------------------------------------------------------------------
void DessinerObstacle(Obstacle* o) {
    float y = CENTRE_VOIE[o->voie];

    if (o->type == 0) {
        // Tonneau
        DrawCircle((int)o->x, (int)y, OBST_TAILLE * 0.48f, { 170, 110, 50, 255 });
        DrawCircle((int)o->x, (int)y, OBST_TAILLE * 0.38f, { 190, 130, 70, 255 });
        // Cercles métalliques
        DrawEllipse((int)o->x, (int)y - 7, OBST_TAILLE * 0.25f, 3, { 100, 80, 40, 255 });
        DrawEllipse((int)o->x, (int)y + 7, OBST_TAILLE * 0.25f, 3, { 100, 80, 40, 255 });
    } else {
        // Trou
        DrawEllipse((int)o->x, (int)y + 5, OBST_TAILLE * 0.55f, OBST_TAILLE * 0.28f,
                    { 15, 15, 20, 255 });
        DrawEllipse((int)o->x, (int)y + 4, OBST_TAILLE * 0.45f, OBST_TAILLE * 0.2f,
                    { 5, 5, 10, 255 });
    }
}

// ---------------------------------------------------------------------------
// Vérification de voie occupée
// ---------------------------------------------------------------------------
bool VoieOccupee(int voie, float xMin) {
    for (int i = 0; i < MAX_ADV; i++)
        if (adversaires[i].actif && adversaires[i].voie == voie && adversaires[i].x > xMin)
            return true;
    for (int i = 0; i < MAX_OBST; i++)
        if (obstacles[i].actif && obstacles[i].voie == voie && obstacles[i].x > xMin)
            return true;
    return false;
}

// ---------------------------------------------------------------------------
// Initialisation
// ---------------------------------------------------------------------------
void InitialiserJeu() {
    joueur.voie     = 1;
    joueur.yVisuel  = CENTRE_VOIE[1];
    joueur.vitesse  = VITESSE_BASE;
    joueur.score    = 0;
    joueur.inclinaison = 0;
    joueur.timerSaut   = -1;
    joueur.timerStick  = 0;

    for (int i = 0; i < MAX_ADV; i++) adversaires[i].actif = false;
    for (int i = 0; i < MAX_OBST; i++) obstacles[i].actif  = false;

    scrollOffset        = 0;
    timerApparition     = 0;
    intervalleApparition = SPAWN_BASE;

    // Détection manette
    manetteID = -1;
    for (int i = 0; i < 4; i++) {
        if (IsGamepadAvailable(i)) {
            manetteID = i;
            break;
        }
    }

    etat = TITRE;
}

// ---------------------------------------------------------------------------
// Apparition d'adversaires et obstacles
// ---------------------------------------------------------------------------
void SpawnAdversaire() {
    int voie = AleatoireInt(0, NB_VOIES - 1);
    if (VoieOccupee(voie, JOUEUR_X - 30)) return;

    for (int i = 0; i < MAX_ADV; i++) {
        if (!adversaires[i].actif) {
            adversaires[i].actif   = true;
            adversaires[i].voie    = voie;
            adversaires[i].x       = (float)(SCREEN_W + 60);
            adversaires[i].vitesse = joueur.vitesse * Aleatoire(1.3f, 2.2f);
            Color c = CouleurAleatoire();
            adversaires[i].couleurCorps  = c;
            adversaires[i].couleurCabine = Assombrir(c, 0.7f);
            return;
        }
    }
}

void SpawnObstacle() {
    int voie = AleatoireInt(0, NB_VOIES - 1);
    int type = AleatoireInt(0, 1);
    if (VoieOccupee(voie, JOUEUR_X - 30)) return;

    for (int i = 0; i < MAX_OBST; i++) {
        if (!obstacles[i].actif) {
            obstacles[i].actif = true;
            obstacles[i].voie  = voie;
            obstacles[i].x     = (float)(SCREEN_W + 60);
            obstacles[i].type  = type;
            return;
        }
    }
}

// ---------------------------------------------------------------------------
// Mise à jour : écran titre
// ---------------------------------------------------------------------------
void UpdateTitre() {
    bool start = IsKeyPressed(KEY_SPACE) || IsKeyPressed(KEY_ENTER);
    if (manetteID >= 0) {
        start = start ||
            IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_RIGHT_FACE_DOWN) ||
            IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_RIGHT_FACE_LEFT);
    }
    if (start) {
        InitialiserJeu();
        etat = JOUE;
    }
}

// ---------------------------------------------------------------------------
// Mise à jour : jeu
// ---------------------------------------------------------------------------
void UpdateJeu(float dt) {
    if (dt > 0.05f) dt = 0.05f;

    // Vitesse progressive
    joueur.vitesse += ACCELERATION * dt;
    if (joueur.vitesse > VITESSE_MAX) joueur.vitesse = VITESSE_MAX;

    // Score
    joueur.score += joueur.vitesse * dt;

    // Défilement
    scrollOffset += joueur.vitesse * SCROLL_FACTOR * dt;

    // --- Changement de voie ---
    int nouvelleVoie = joueur.voie;

    if (IsKeyPressed(KEY_UP))    nouvelleVoie--;
    if (IsKeyPressed(KEY_DOWN))  nouvelleVoie++;

    if (manetteID >= 0) {
        if (IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_LEFT_FACE_UP))    nouvelleVoie--;
        if (IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_LEFT_FACE_DOWN))  nouvelleVoie++;

        // Stick analogique avec anti-répétition
        joueur.timerStick -= dt;
        if (joueur.timerStick <= 0) {
            float axeY = GetGamepadAxisMovement(manetteID, GAMEPAD_AXIS_LEFT_Y);
            if (axeY < -0.6f) { nouvelleVoie--; joueur.timerStick = 0.22f; }
            if (axeY >  0.6f) { nouvelleVoie++; joueur.timerStick = 0.22f; }
        }
    }

    nouvelleVoie = (nouvelleVoie < 0) ? 0 : (nouvelleVoie >= NB_VOIES ? NB_VOIES - 1 : nouvelleVoie);

    if (nouvelleVoie != joueur.voie) {
        joueur.inclinaison = (nouvelleVoie < joueur.voie) ? -14.0f : 14.0f;
        joueur.voie = nouvelleVoie;
    }

    // Retour progressif de l'inclinaison
    joueur.inclinaison *= 0.9f;
    if (fabsf(joueur.inclinaison) < 0.5f) joueur.inclinaison = 0;

    // Interpolation fluide du Y
    float yCible = CENTRE_VOIE[joueur.voie];
    joueur.yVisuel += (yCible - joueur.yVisuel) * 12.0f * dt;

    // --- Saut ---
    bool sautPresse = IsKeyPressed(KEY_SPACE);
    if (manetteID >= 0) {
        sautPresse = sautPresse ||
            IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_RIGHT_FACE_DOWN) ||
            IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_RIGHT_FACE_LEFT);
    }
    if (sautPresse && joueur.timerSaut < 0)
        joueur.timerSaut = 0;

    if (joueur.timerSaut >= 0) {
        joueur.timerSaut += dt;
        if (joueur.timerSaut >= DUREE_SAUT)
            joueur.timerSaut = -1;
    }

    // --- Apparition des obstacles/adversaires ---
    timerApparition += dt;
    if (timerApparition >= intervalleApparition) {
        timerApparition = 0;
        float progression = (joueur.vitesse - VITESSE_BASE) / (VITESSE_MAX - VITESSE_BASE);
        intervalleApparition = SPAWN_BASE - progression * 1.2f;
        if (intervalleApparition < SPAWN_MIN) intervalleApparition = SPAWN_MIN;

        if (rand() % 100 < 60)
            SpawnAdversaire();
        else
            SpawnObstacle();
    }

    // --- Mouvement des adversaires ---
    for (int i = 0; i < MAX_ADV; i++) {
        if (!adversaires[i].actif) continue;
        adversaires[i].x -= adversaires[i].vitesse * dt;
        if (adversaires[i].x < -120)
            adversaires[i].actif = false;
    }

    // --- Mouvement des obstacles ---
    for (int i = 0; i < MAX_OBST; i++) {
        if (!obstacles[i].actif) continue;
        obstacles[i].x -= joueur.vitesse * SCROLL_FACTOR * dt;
        if (obstacles[i].x < -60)
            obstacles[i].actif = false;
    }

    // --- Collisions ---
    float distCollisionAdv  = (JOUEUR_LARG + ADV_LARG) * 0.4f;
    float distCollisionObst = (JOUEUR_LARG + OBST_TAILLE) * 0.4f;

    // Adversaires
    for (int i = 0; i < MAX_ADV; i++) {
        if (!adversaires[i].actif) continue;
        if (adversaires[i].voie != joueur.voie) continue;
        if (fabsf(adversaires[i].x - JOUEUR_X) < distCollisionAdv) {
            etat = GAME_OVER;
            return;
        }
    }

    // Obstacles (pas de collision si en saut)
    for (int i = 0; i < MAX_OBST; i++) {
        if (!obstacles[i].actif) continue;
        if (obstacles[i].voie != joueur.voie) continue;
        if (joueur.timerSaut >= 0) continue;
        if (fabsf(obstacles[i].x - JOUEUR_X) < distCollisionObst) {
            etat = GAME_OVER;
            return;
        }
    }
}

// ---------------------------------------------------------------------------
// Mise à jour : game over
// ---------------------------------------------------------------------------
void UpdateGameOver() {
    bool restart = IsKeyPressed(KEY_SPACE) || IsKeyPressed(KEY_ENTER);
    if (manetteID >= 0) {
        restart = restart ||
            IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_RIGHT_FACE_DOWN) ||
            IsGamepadButtonPressed(manetteID, GAMEPAD_BUTTON_RIGHT_FACE_LEFT);
    }
    if (restart) {
        InitialiserJeu();
    }
}

// ---------------------------------------------------------------------------
// Dessin : écran titre
// ---------------------------------------------------------------------------
void DrawTitre() {
    // Décor animé en fond
    DessinerDecor(GetTime() * 60);

    // Voiture décorative qui traverse l'écran
    float carX = fmodf(GetTime() * 120, SCREEN_W + 200) - 100;
    DessinerVoiture(carX, CENTRE_VOIE[1], JOUEUR_LARG, JOUEUR_HAUT,
                    { 220, 50, 50, 200 }, { 180, 40, 40, 200 },
                    { 150, 200, 240, 150 }, true, 0);

    // Overlay sombre
    DrawRectangle(0, 0, SCREEN_W, SCREEN_H, ColorAlpha(BLACK, 0.55f));

    // Titre
    const char* titre = "ROAD RACER";
    int tTitre = 85;
    DrawText(titre, (SCREEN_W - MeasureText(titre, tTitre)) / 2, 160, tTitre, YELLOW);

    // Sous-titre
    const char* sous = "VUE DE COTE";
    int tSous = 28;
    DrawText(sous, (SCREEN_W - MeasureText(sous, tSous)) / 2, 255, tSous, LIGHTGRAY);

    // Texte clignotant
    int alpha = (int)(130 + 125 * sinf(GetTime() * 3));
    Color cStart = { 255, 255, 255, (unsigned char)alpha };
    const char* startTxt = "APPUYEZ SUR ESPACE POUR JOUER";
    int tStart = 24;
    DrawText(startTxt, (SCREEN_W - MeasureText(startTxt, tStart)) / 2, 360, tStart, cStart);

    // Commandes
    const char* cmd1 = "Fleches HAUT/BAS : changer de voie  |  ESPACE : sauter";
    int tCmd = 16;
    DrawText(cmd1, (SCREEN_W - MeasureText(cmd1, tCmd)) / 2, 440, tCmd, GRAY);
    if (manetteID >= 0) {
        const char* cmd2 = "Manette : D-Pad/Stick + Bouton A/X pour sauter";
        DrawText(cmd2, (SCREEN_W - MeasureText(cmd2, tCmd)) / 2, 465, tCmd, GRAY);
    }
}

// ---------------------------------------------------------------------------
// Dessin : jeu
// ---------------------------------------------------------------------------
void DrawJeu() {
    DessinerDecor(scrollOffset);

    // Dessiner les obstacles
    for (int i = 0; i < MAX_OBST; i++)
        if (obstacles[i].actif)
            DessinerObstacle(&obstacles[i]);

    // Dessiner les adversaires
    for (int i = 0; i < MAX_ADV; i++) {
        if (!adversaires[i].actif) continue;
        DessinerVoiture(
            adversaires[i].x, CENTRE_VOIE[adversaires[i].voie],
            ADV_LARG, ADV_HAUT,
            adversaires[i].couleurCorps,
            adversaires[i].couleurCabine,
            { 150, 200, 240, 130 },
            false, 0
        );
    }

    // --- Joueur ---
    float yJoueur = joueur.yVisuel;
    float sautOffset = 0;

    if (joueur.timerSaut >= 0) {
        float progression = joueur.timerSaut / DUREE_SAUT;
        sautOffset = -HAUTEUR_SAUT * sinf(PI * progression);
    }

    DessinerVoiture(
        JOUEUR_X, yJoueur + sautOffset,
        JOUEUR_LARG, JOUEUR_HAUT,
        { 220, 50, 50, 255 },
        { 180, 40, 40, 255 },
        { 150, 200, 240, 180 },
        true, joueur.inclinaison
    );

    // Ombre portée pendant le saut
    if (joueur.timerSaut >= 0) {
        float progression = joueur.timerSaut / DUREE_SAUT;
        int alphaOmbre = (int)(70 * (1.0f - sinf(PI * progression)));
        DrawEllipse((int)JOUEUR_X, (int)yJoueur + 15, 28, 5,
                    { 0, 0, 0, (unsigned char)alphaOmbre });
    }

    // Effet de vitesse (traînées sur les côtés)
    for (int i = 0; i < 3; i++) {
        float tx = JOUEUR_X - 50 - i * 18 - fmodf(scrollOffset * 0.5f, 18);
        if (tx > 0) {
            int alphaLine = (int)(40 - i * 10);
            DrawLine((int)tx, (int)(yJoueur + sautOffset - 5 + i * 5),
                     (int)(tx - 8), (int)(yJoueur + sautOffset - 5 + i * 5),
                     { 255, 255, 255, (unsigned char)alphaLine });
        }
    }

    // --- HUD ---
    char buffer[64];

    // Score
    snprintf(buffer, sizeof(buffer), "SCORE : %d", (int)joueur.score);
    DrawText(buffer, 20, 20, 28, WHITE);

    // Vitesse
    snprintf(buffer, sizeof(buffer), "VITESSE : %.0f km/h", joueur.vitesse * 0.5f);
    DrawText(buffer, 20, 52, 16, LIGHTGRAY);

    // Barre de vitesse
    float ratioV = (joueur.vitesse - VITESSE_BASE) / (VITESSE_MAX - VITESSE_BASE);
    if (ratioV < 0) ratioV = 0;
    DrawRectangle(20, 78, 180, 7, ColorAlpha(DARKGRAY, 150));
    Color couleurBarre = ratioV < 0.5f ? GREEN : (ratioV < 0.8f ? ORANGE : RED);
    DrawRectangle(20, 78, (int)(180 * ratioV), 7, couleurBarre);

    // Indicateur de saut
    if (joueur.timerSaut < 0)
        DrawText("[ESPACE] SAUT", SCREEN_W - 195, 20, 18, GREEN);
    else
        DrawText("SAUT EN COURS", SCREEN_W - 195, 20, 18, ORANGE);

    // Indicateurs de voie (repères latéraux)
    DrawRectangle(0, (int)CENTRE_VOIE[0] - 2, 6, 4, (joueur.voie == 0) ? WHITE : ColorAlpha(WHITE, 25));
    DrawRectangle(0, (int)CENTRE_VOIE[1] - 2, 6, 4, (joueur.voie == 1) ? WHITE : ColorAlpha(WHITE, 25));
    DrawRectangle(0, (int)CENTRE_VOIE[2] - 2, 6, 4, (joueur.voie == 2) ? WHITE : ColorAlpha(WHITE, 25));

    // Nombre d'adversaires évités
    snprintf(buffer, sizeof(buffer), "EVITES : %d", (int)(joueur.score / 500));
    DrawText(buffer, SCREEN_W - 195, 44, 14, GRAY);
}

// ---------------------------------------------------------------------------
// Dessin : game over
// ---------------------------------------------------------------------------
void DrawGameOver() {
    DessinerDecor(scrollOffset);
    DrawRectangle(0, 0, SCREEN_W, SCREEN_H, ColorAlpha(BLACK, 0.7f));

    // Explosion visuelle (cercles rouges)
    float temps = GetTime();
    for (int i = 0; i < 3; i++) {
        float ox = JOUEUR_X + sinf(temps * 5 + i * 2) * 20;
        float oy = CENTRE_VOIE[joueur.voie] + cosf(temps * 4 + i * 3) * 10;
        int r = (int)(30 + 20 * sinf(temps * 6 + i * 1.5f));
        DrawCircle((int)ox, (int)oy, (float)r,
                   { 255, 100, 50, (unsigned char)(60 + 40 * (int)(sinf(temps * 4 + i) * 0.5f + 0.5f)) });
    }

    // GAME OVER
    const char* go = "GAME OVER";
    int tGO = 85;
    DrawText(go, (SCREEN_W - MeasureText(go, tGO)) / 2, 180, tGO, RED);

    // Score final
    char scoreTxt[64];
    snprintf(scoreTxt, sizeof(scoreTxt), "SCORE : %d", (int)joueur.score);
    int tScore = 40;
    DrawText(scoreTxt, (SCREEN_W - MeasureText(scoreTxt, tScore)) / 2, 285, tScore, YELLOW);

    // Record
    snprintf(scoreTxt, sizeof(scoreTxt), "DISTANCE : %.0f m", joueur.score * 0.1f);
    int tDist = 22;
    DrawText(scoreTxt, (SCREEN_W - MeasureText(scoreTxt, tDist)) / 2, 335, tDist, LIGHTGRAY);

    // Recommencer
    int alpha = (int)(130 + 125 * sinf(temps * 3));
    Color cReplay = { 255, 255, 255, (unsigned char)alpha };
    const char* replay = "APPUYEZ SUR ESPACE POUR RECOMMENCER";
    int tReplay = 22;
    DrawText(replay, (SCREEN_W - MeasureText(replay, tReplay)) / 2, 410, tReplay, cReplay);
}

// ---------------------------------------------------------------------------
// Point d'entrée
// ---------------------------------------------------------------------------
int main() {
    srand((unsigned int)time(NULL));

    InitWindow(SCREEN_W, SCREEN_H, "ROAD RACER");
    SetTargetFPS(FPS);
    SetExitKey(KEY_NULL);

    InitialiserJeu();

    while (!WindowShouldClose()) {
        float dt = GetFrameTime();

        // Vérifier la manette
        if (manetteID < 0) {
            for (int i = 0; i < 4; i++) {
                if (IsGamepadAvailable(i)) {
                    manetteID = i;
                    break;
                }
            }
        }

        // Mise à jour selon l'état
        switch (etat) {
            case TITRE:     UpdateTitre();                break;
            case JOUE:      UpdateJeu(dt);                break;
            case GAME_OVER: UpdateGameOver();             break;
        }

        if (IsKeyPressed(KEY_ESCAPE)) break;

        // Dessin
        BeginDrawing();
        ClearBackground(BLACK);

        switch (etat) {
            case TITRE:     DrawTitre();     break;
            case JOUE:      DrawJeu();       break;
            case GAME_OVER: DrawGameOver();  break;
        }

        EndDrawing();
    }

    CloseWindow();
    return 0;
}
