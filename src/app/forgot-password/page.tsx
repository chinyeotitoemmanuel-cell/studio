import { BookOpen, HelpCircle, LockReset, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPasswordPage() {
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
            variant="link"
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

        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_15px_rgba(242,166,13,0.1)]">
              <LockReset className="h-10 w-10" />
            </div>
            <h1 className="mb-3 text-3xl font-black tracking-tight text-foreground">
              Mot de passe oublié ?
            </h1>
            <p className="mx-auto max-w-xs text-base leading-relaxed text-muted-foreground">
              Entrez l'adresse e-mail associée à votre compte AfriStory pour
              recevoir un lien de réinitialisation.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl border border-surface-border bg-card p-8 shadow-2xl">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <form action="#" className="flex flex-col gap-6">
              <div>
                <label
                  className="mb-2 block text-sm font-bold text-foreground"
                  htmlFor="email"
                >
                  Adresse e-mail
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    className="block w-full rounded-xl border-surface-border bg-background py-3.5 pl-11 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:ring-primary sm:text-sm"
                    id="email"
                    name="email"
                    placeholder="exemple@afristory.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30"
              >
                <span>Envoyer le lien</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              asChild
              className="inline-flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-muted-foreground hover:bg-primary/5 hover:text-primary"
            >
              <Link href="/signup">
                <ArrowLeft className="h-5 w-5" />
                Retour à la connexion
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
