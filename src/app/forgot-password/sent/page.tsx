import { BookOpen, HelpCircle, MailCheck, Info, Send } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordSentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <header className="w-full border-b border-surface-border bg-background-dark transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-background-dark transition group-hover:bg-opacity-90">
              <BookOpen className="h-6 w-6 font-bold" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-primary">
              AfriStory
            </h2>
          </Link>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <span className="hidden sm:inline">Besoin d'aide ?</span>
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="relative flex-grow flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-10 left-[10%] h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 right-[10%] h-[25rem] w-[25rem] rounded-full bg-orange-600/5 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
          <div className="w-full rounded-2xl border border-border bg-card p-8 sm:p-10 text-center shadow-xl flex flex-col items-center">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MailCheck className="h-10 w-10" />
            </div>
            <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
              Vérifiez votre boîte mail
            </h1>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Un lien de réinitialisation sécurisé a été envoyé à votre adresse
              email. Suivez les instructions pour créer votre nouveau mot de
              passe.
            </p>
            <div className="mb-8 w-full rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3 text-left">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Vous n'avez rien reçu ? N'oubliez pas de vérifier votre
                  dossier <strong>Spams</strong> ou{' '}
                  <strong>Courriers indésirables</strong>.
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <Button size="lg" asChild>
                <Link href="/login">Retour à la connexion</Link>
              </Button>
              <Button
                variant="ghost"
                className="gap-2 text-muted-foreground hover:text-primary"
              >
                <Send className="h-5 w-5" />
                Renvoyer l'email
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Toujours bloqué ?{' '}
              <Link
                href="#"
                className="font-medium underline transition-colors hover:text-primary"
              >
                Contactez le support
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
