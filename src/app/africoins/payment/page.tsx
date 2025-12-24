
import {
  BookOpen,
  Bell,
  ArrowLeft,
  CheckCircle,
  CreditCard,
  Lock,
  Smartphone,
  Wallet,
  Coins,
  BadgeCheck,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

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
              AfriStory <span className="text-primary font-normal">Draft</span>
            </h2>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-text-muted hover:text-primary text-sm font-medium transition-colors font-body"
              href="#"
            >
              Accueil
            </a>
            <a
              className="text-text-muted hover:text-primary text-sm font-medium transition-colors font-body"
              href="#"
            >
              Bibliothèque
            </a>
            <a
              className="text-text-main text-sm font-bold border-b-2 border-primary py-4 font-body"
              href="#"
            >
              Boutique
            </a>
            <a
              className="text-text-muted hover:text-primary text-sm font-medium transition-colors font-body"
              href="#"
            >
              Ateliers
            </a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 md:gap-6 items-center">
          <div className="flex gap-3 items-center">
            <button className="size-10 flex items-center justify-center rounded-full hover:bg-surface-light text-text-muted transition-colors relative">
              <Bell />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div
              className="size-10 rounded-full bg-cover bg-center border-2 border-surface-border cursor-pointer shadow-sm"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL8qt8rzWIyXpE-BqJMLgU4ucOTRGH1WeqTaW47K6MyprZNMB6lQ5MNNFhQztp176xkFk0usIHq_vMrzy3sORHmWBI6dez9zn8M8amhAp4AttvI03oqqWOfuZU8kpemKWV8uDJr4d7le8QKbDBK4c9lNWfPllH8Z-0j5jCdatC0Kbhhlon_qp-FtdLWTRLAj6nQ9UhwiwiwD9M7ulrZsZ1W4-QCIa25AOeVBQOq4gnMU9FAELBP4Si3ilM9P93DTGxX11B6cDpwYEF")',
              }}
            ></div>
          </div>
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

export default function PaymentPage() {
  return (
    <div className="bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
      <Header />
      <main className="flex-1 w-full bg-background-light py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link
              className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider font-display"
              href="/africoins"
            >
              <ArrowLeft className="text-base" />
              Retour aux offres AfriCoins
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-black text-text-main mb-3 font-display tracking-tight">
                  Méthode de Paiement
                </h1>
                <p className="text-text-muted font-body leading-relaxed">
                  Sélectionnez votre moyen de paiement préféré pour finaliser
                  votre achat en toute sécurité.
                </p>
              </header>
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="border-2 border-primary bg-white rounded-xl overflow-hidden shadow-lg shadow-primary/5 transition-all relative">
                  <div className="absolute top-4 right-4 text-primary">
                    <CheckCircle />
                  </div>
                  <label className="cursor-pointer">
                    <div className="p-5 flex items-center gap-4 border-b border-surface-border/50 bg-primary/5">
                      <input
                        defaultChecked
                        className="size-5 text-primary border-text-muted focus:ring-primary bg-white"
                        name="payment_method"
                        type="radio"
                      />
                      <div>
                        <span className="font-bold font-display text-text-main text-lg block">
                          Carte Bancaire
                        </span>
                        <div className="flex gap-2 mt-1 opacity-60">
                          <div className="h-4 w-6 bg-text-main rounded-sm"></div>
                          <div className="h-4 w-6 bg-red-800 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <div className="p-6 md:p-8 space-y-6 bg-white">
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-2 font-display tracking-wider">
                        Numéro de carte
                      </label>
                      <div className="relative group">
                        <Input
                          className="w-full bg-surface-light border-surface-border rounded-lg pl-10 pr-4 py-3 text-text-main focus:ring-1 focus:ring-primary focus:border-primary font-body transition-colors"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                        <CreditCard className="absolute left-3 top-3 text-text-muted group-focus-within:text-primary transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-text-muted mb-2 font-display tracking-wider">
                          Expiration
                        </label>
                        <Input
                          className="w-full bg-surface-light border-surface-border rounded-lg px-4 py-3 text-text-main focus:ring-1 focus:ring-primary focus:border-primary font-body transition-colors"
                          placeholder="MM / AA"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-text-muted mb-2 font-display tracking-wider">
                          CVC
                        </label>
                        <div className="relative group">
                          <Input
                            className="w-full bg-surface-light border-surface-border rounded-lg pl-10 pr-4 py-3 text-text-main focus:ring-1 focus:ring-primary focus:border-primary font-body transition-colors"
                            placeholder="123"
                            type="text"
                          />
                          <Lock className="absolute left-3 top-3 text-text-muted group-focus-within:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-2 font-display tracking-wider">
                        Nom sur la carte
                      </label>
                      <Input
                        className="w-full bg-surface-light border-surface-border rounded-lg px-4 py-3 text-text-main focus:ring-1 focus:ring-primary focus:border-primary font-body transition-colors"
                        placeholder="Ex: Amara Diallo"
                        type="text"
                      />
                    </div>
                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox
                        className="mt-1 rounded border-surface-border bg-surface-light"
                        id="save-card"
                      />
                      <label
                        className="text-sm text-text-muted font-body leading-tight cursor-pointer select-none"
                        htmlFor="save-card"
                      >
                        Sauvegarder cette carte pour mes prochains achats sur
                        AfriStory.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border border-surface-border bg-white rounded-xl hover:border-primary/50 cursor-pointer transition-all shadow-sm">
                  <label className="cursor-pointer w-full h-full block">
                    <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <input
                          className="size-5 text-primary border-text-muted focus:ring-primary bg-surface-light"
                          name="payment_method"
                          type="radio"
                        />
                        <div className="flex flex-col">
                          <span className="font-bold font-display text-text-main text-lg">
                            Mobile Money
                          </span>
                          <span className="text-xs text-text-muted font-body mt-1">
                            M-Pesa, Orange Money, MTN, Wave
                          </span>
                        </div>
                      </div>
                      <Smartphone className="text-text-muted text-2xl" />
                    </div>
                  </label>
                </div>
                <div className="border border-surface-border bg-white rounded-xl hover:border-primary/50 cursor-pointer transition-all shadow-sm">
                  <label className="cursor-pointer w-full h-full block">
                    <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <input
                          className="size-5 text-primary border-text-muted focus:ring-primary bg-surface-light"
                          name="payment_method"
                          type="radio"
                        />
                        <span className="font-bold font-display text-text-main text-lg">
                          PayPal
                        </span>
                      </div>
                      <Wallet className="text-text-muted text-2xl" />
                    </div>
                  </label>
                </div>
              </form>
            </div>
            <div className="lg:w-[380px] shrink-0">
              <div className="bg-white rounded-xl shadow-xl shadow-stone-200/50 border border-surface-border p-6 sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold font-display text-xl text-text-main">
                    Résumé
                  </h3>
                  <span className="text-xs font-bold bg-surface-light text-text-muted px-2 py-1 rounded border border-surface-border">
                    REF-8492
                  </span>
                </div>
                <div className="flex gap-4 mb-6 pb-6 border-b border-surface-border">
                  <div className="size-16 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md shadow-primary/20">
                    <Coins className="text-3xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-text-main font-display text-lg truncate">
                      Pack Conteur
                    </h4>
                    <p className="text-sm text-text-muted font-body">
                      500 AfriCoins
                    </p>
                  </div>
                  <div className="font-bold text-text-main font-body text-lg">
                    9,99€
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm text-text-muted font-body">
                    <span>Sous-total</span>
                    <span>8,33 €</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-muted font-body">
                    <span>TVA (20%)</span>
                    <span>1,66 €</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-text-main font-display pt-4 border-t border-surface-border mt-2">
                    <span>Total à payer</span>
                    <span>9,99 €</span>
                  </div>
                </div>
                <Button asChild className="w-full py-4 bg-primary hover:bg-text-main text-white text-base font-bold rounded-lg transition-colors font-display shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                  <Link href="/africoins/payment/success">
                    <Lock className="group-hover:scale-110 transition-transform" />
                    Payer 9,99 €
                  </Link>
                </Button>
                <p className="text-center text-xs text-text-muted mt-4 font-body italic leading-normal">
                  En confirmant votre achat, vous acceptez les{' '}
                  <a className="underline hover:text-primary" href="#">
                    Conditions Générales de Vente
                  </a>{' '}
                  d'AfriStory.
                </p>
                <div className="mt-8 pt-6 border-t border-surface-border flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-text-muted font-display uppercase tracking-widest">
                    <BadgeCheck className="text-base text-green-600" />
                    Paiement Sécurisé
                  </div>
                  <div className="flex gap-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="h-6 w-10 bg-text-main rounded"></div>
                    <div className="h-6 w-10 bg-text-main rounded"></div>
                    <div className="h-6 w-10 bg-text-main rounded"></div>
                  </div>
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
