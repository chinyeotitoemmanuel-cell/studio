
import {
  BookOpen,
  ChevronRight,
  Bell,
  BadgeCheck,
  Coins,
  CheckCircle,
  Star,
  Lock,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

function Header() {
  return (
    <header className="w-full border-b border-surface-border bg-white sticky top-0 z-50 shadow-sm">
      <div className="px-4 md:px-10 py-3 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a
            className="flex items-center gap-3 text-text-main hover:opacity-80 transition-opacity"
            href="#"
          >
            <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <BookOpen />
            </div>
            <h2 className="text-text-main text-xl font-bold font-display tracking-tight">
              AfriStory <span className="text-primary font-normal">Pro</span>
            </h2>
          </a>
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-text-muted">
            <span className="opacity-50">Panier</span>
            <ChevronRight className="h-4 w-4 opacity-50" />
            <span className="opacity-50">Paiement</span>
            <ChevronRight className="h-4 w-4 opacity-50" />
            <span className="text-primary font-bold">Confirmation</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex text-right flex-col mr-2">
            <span className="text-xs text-text-muted font-body">
              Connecté en tant que
            </span>
            <span className="text-sm font-bold font-display text-text-main">
              Kwame Osei
            </span>
          </div>
          <div
            className="size-10 rounded-full bg-cover bg-center border-2 border-surface-border shadow-sm"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL8qt8rzWIyXpE-BqJMLgU4ucOTRGH1WeqTaW47K6MyprZNMB6lQ5MNNFhQztp176xkFk0usIHq_vMrzy3sORHmWBI6dez9zn8M8amhAp4AttvI03oqqWOfuZU8kpemKWV8uDJr4d7le8QKbDBK4c9lNWfPllH8Z-0j5jCdatC0Kbhhlon_qp-FtdLWTRLAj6nQ9UhwiwiwD9M7ulrZsZ1W4-QCIa25AOeVBQOq4gnMU9FAELBP4Si3ilM9P93DTGxX11B6cDpwYEF")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-surface-border bg-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2 text-text-main">
              <BookOpen className="text-primary" />
              <span className="text-lg font-bold font-display">AfriStory</span>
            </div>
            <p className="text-text-muted text-sm font-body">
              Empowering the next generation of African visual storytellers.
              Join the movement.
            </p>
          </div>
          <div className="flex gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-text-main font-bold text-sm font-display">
                Communauté
              </h4>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                Règles
              </a>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                Classements
              </a>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                Ateliers
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-text-main font-bold text-sm font-display">
                Plateforme
              </h4>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                AfriStory Pro
              </a>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                À Propos
              </a>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                Carrières
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-text-main font-bold text-sm font-display">
                Légal
              </h4>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                Confidentialité
              </a>
              <a
                className="text-text-muted text-sm hover:text-primary font-body"
                href="#"
              >
                Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-surface-border text-center text-text-muted text-sm font-body">
          © 2023 AfriStory. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center bg-background-light py-8 px-4 md:py-12">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-4 ring-8 ring-primary/5">
              <BadgeCheck className="text-3xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-main font-display mb-3">
              Confirmez votre achat
            </h1>
            <p className="text-text-muted font-body text-sm md:text-base max-w-lg mx-auto">
              Vous êtes sur le point d'acquérir des AfriCoins. Veuillez vérifier
              les détails de votre transaction avant de finaliser.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border border-surface-border rounded-xl shadow-sm overflow-hidden">
                <div className="bg-surface-light border-b border-surface-border px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold font-display text-lg text-text-main">
                    Article sélectionné
                  </h3>
                  <button className="text-xs font-bold text-primary uppercase hover:underline">
                    Modifier
                  </button>
                </div>
                <div className="p-6 flex items-start gap-5">
                  <div className="size-20 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0 shadow-inner">
                    <Coins className="text-4xl text-primary drop-shadow-sm" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold font-display text-xl text-text-main">
                        Pack Légende
                      </h4>
                      <span className="font-bold font-body text-lg">
                        24,99 €
                      </span>
                    </div>
                    <p className="text-text-muted text-sm mb-3">
                      Pack mensuel pour lecteurs passionnés.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-text-main">
                        <CheckCircle className="text-primary text-base" />
                        <span>2500 AfriCoins</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-secondary font-medium">
                        <Star className="text-base" />
                        <span>+ 250 Coins Bonus offerts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-surface-border rounded-xl shadow-sm overflow-hidden">
                <div className="bg-surface-light border-b border-surface-border px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold font-display text-lg text-text-main">
                    Moyen de paiement
                  </h3>
                  <button className="text-xs font-bold text-primary uppercase hover:underline">
                    Modifier
                  </button>
                </div>
                <div className="p-6 flex items-center gap-4">
                  <div className="size-12 bg-gray-900 rounded-md flex items-center justify-center text-white shrink-0">
                    <span className="font-display font-bold italic text-lg">
                      Visa
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-text-main text-sm">
                      Carte Visa Infinite
                    </p>
                    <p className="text-text-muted text-xs">
                      Finissant par •••• 4242
                    </p>
                    <p className="text-text-muted text-xs mt-1">
                      Expire le 09/26
                    </p>
                  </div>
                  <Lock className="text-success" />
                </div>
              </div>
              <div className="px-2">
                <p className="text-xs text-text-muted leading-relaxed">
                  En confirmant cet achat, vous acceptez les{' '}
                  <a className="text-primary hover:underline" href="#">
                    Conditions Générales de Vente
                  </a>{' '}
                  et la{' '}
                  <a className="text-primary hover:underline" href="#">
                    Politique de Confidentialité
                  </a>{' '}
                  d'AfriStory. Le montant sera débité immédiatement.
                </p>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="bg-white border border-surface-border rounded-xl shadow-lg sticky top-24 p-6">
                <h3 className="font-bold font-display text-lg text-text-main mb-6">
                  Récapitulatif
                </h3>
                <div className="space-y-3 mb-6 border-b border-surface-border pb-6">
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Sous-total</span>
                    <span>20,83 €</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>TVA (20%)</span>
                    <span>4,16 €</span>
                  </div>
                  <div className="flex justify-between text-sm text-secondary font-medium">
                    <span>Remise</span>
                    <span>-0,00 €</span>
                  </div>
                </div>
                <div className="flex justify-between items-end mb-8">
                  <span className="font-bold font-display text-lg text-text-main">
                    Total
                  </span>
                  <span className="font-black font-display text-3xl text-primary">
                    24,99 €
                  </span>
                </div>
                <button className="w-full bg-primary hover:bg-yellow-600 text-white font-bold py-4 rounded-lg shadow-md shadow-primary/20 transition-all active:scale-[0.98] mb-4 flex items-center justify-center gap-2 group">
                  <span>Payer maintenant</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full bg-transparent hover:bg-surface-light text-text-muted font-bold py-3 rounded-lg border border-transparent hover:border-surface-border transition-colors text-sm">
                  Annuler la transaction
                </button>
                <div className="mt-6 flex justify-center items-center gap-2 text-[10px] text-text-muted uppercase tracking-wider">
                  <Lock className="text-sm" />
                  <span>Paiement 100% Sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
