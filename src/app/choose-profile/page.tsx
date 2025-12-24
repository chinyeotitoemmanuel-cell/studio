import Link from 'next/link';
import {
  BookOpen,
  HelpCircle,
  Brush,
  CheckCircle2,
  Library,
  ArrowRight,
  Palette,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';

export default function ChooseProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <header className="w-full border-b border-surface-border bg-background-dark transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-background-dark">
              <BookOpen className="h-6 w-6 font-bold" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white">
              AfriStory
            </h2>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
            <HelpCircle />
          </Button>
        </div>
      </header>

      <main className="relative flex-grow flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-10 left-[10%] h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 right-[10%] h-[25rem] w-[25rem] rounded-full bg-orange-600/5 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10">
          <div className="max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Bienvenue sur AfriStory. <br />
              <span className="text-primary">Qui êtes-vous ?</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choisissez votre chemin pour commencer l'aventure. Vous pourrez
              ajuster vos préférences plus tard.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {/* Creator Card */}
            <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
                <Palette className="h-[120px] w-[120px] text-primary" />
              </div>
              <div className="z-10 mb-6 flex flex-col gap-4">
                <div className="mb-2 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Brush className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="mb-1 text-sm font-bold uppercase tracking-widest text-primary">
                    Je suis un Créateur
                  </h2>
                  <h3 className="mb-2 text-3xl font-bold text-foreground">
                    AfriStory Pro
                  </h3>
                  <p className="text-muted-foreground">
                    Publiez, partagez et monétisez votre talent auprès d'une
                    audience passionnée.
                  </p>
                </div>
              </div>
              <div className="z-10 mb-8 flex-grow flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Publication d'œuvres illimitée</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Outils de monétisation directs</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Tableau de bord analytics complet</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Protection des droits d'auteur</span>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-auto w-full bg-secondary text-secondary-foreground tracking-wide group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-2 group-hover:ring-primary/50 group-hover:ring-offset-2 dark:group-hover:ring-offset-card"
              >
                <span>Choisir Artiste</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Reader Card */}
            <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
                <Library className="h-[120px] w-[120px] text-blue-500" />
              </div>
              <div className="z-10 mb-6 flex flex-col gap-4">
                <div className="mb-2 flex size-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                  <Library className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="mb-1 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Je suis un Lecteur
                  </h2>
                  <h3 className="mb-2 text-3xl font-bold text-foreground">
                    AfriStory Draft
                  </h3>
                  <p className="text-muted-foreground">
                    Plongez dans des milliers d'histoires et soutenez vos
                    artistes préférés.
                  </p>
                </div>
              </div>
              <div className="z-10 mb-8 flex-grow flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Accès gratuit à la bibliothèque Draft</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Interactions et commentaires</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Soutien direct aux artistes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Listes de lecture personnalisées</span>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-auto w-full bg-secondary text-secondary-foreground tracking-wide group-hover:bg-blue-600 group-hover:text-white group-hover:ring-2 group-hover:ring-blue-500/50 group-hover:ring-offset-2 dark:group-hover:ring-offset-card"
              >
                <span>Choisir Lecteur</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore sûr ?{' '}
              <Link
                href="#"
                className="underline transition-colors hover:text-primary"
              >
                Comparez les profils en détail
              </Link>{' '}
              ou{' '}
              <Link
                href="#"
                className="underline transition-colors hover:text-primary"
              >
                contactez le support
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}