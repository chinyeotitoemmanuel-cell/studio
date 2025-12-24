
import {
  BookOpen,
  Bell,
  Wallet,
  Bitcoin,
  Heart,
  Award,
  Gift,
  PlusCircle,
  Check,
  CreditCard,
  Smartphone,
  Landmark,
  Info,
  History,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  Diamond,
  Star,
  Coins,
  Gem,
  Building,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';

export default function AfriCoinsPage() {
  return (
    <div className="bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center bg-background-light relative">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-surface-light to-transparent -z-10"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        <div className="w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-light border border-surface-border rounded-full mb-6">
              <span className="size-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary text-[10px] uppercase font-bold tracking-widest font-body">
                Monnaie Virtuelle
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-text-main mb-6 leading-tight font-display tracking-tight">
              Rechargez vos AfriCoins
            </h1>
            <p className="text-text-muted text-lg font-body leading-relaxed">
              Les AfriCoins vous permettent de débloquer des chapitres
              exclusifs, de participer aux événements premium et de soutenir
              directement vos artistes préférés sur AfriStory Pro.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="group cursor-pointer block relative">
                <input
                  className="peer sr-only"
                  name="package"
                  type="radio"
                  value="starter"
                />
                <div className="h-full bg-white border border-surface-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col peer-checked:border-primary peer-checked:bg-yellow-50">
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-text-muted text-xs font-bold tracking-widest uppercase font-body">
                      Découverte
                    </span>
                    <div className="size-6 rounded-full border border-surface-border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
                      <div className="size-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2 relative z-10">
                    <div className="size-12 rounded-full bg-surface-light flex items-center justify-center text-primary border border-surface-border">
                      <Coins className="text-3xl" />
                    </div>
                    <div>
                      <span className="text-3xl font-bold font-display text-text-main block leading-none">
                        100
                      </span>
                      <span className="text-xs text-text-muted uppercase font-bold">
                        AfriCoins
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-surface-border flex justify-between items-center relative z-10">
                    <span className="text-lg font-bold text-text-main font-body">
                      1.000 FCFA
                    </span>
                  </div>
                </div>
              </label>
              <label className="group cursor-pointer block relative">
                <input
                  defaultChecked
                  className="peer sr-only"
                  name="package"
                  type="radio"
                  value="standard"
                />
                <div className="h-full bg-white border border-surface-border rounded-xl p-6 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden flex flex-col ring-1 ring-primary/20 peer-checked:border-primary peer-checked:bg-yellow-50">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-20 font-body tracking-wider uppercase">
                    Populaire
                  </div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-text-muted text-xs font-bold tracking-widest uppercase font-body">
                      Passionné
                    </span>
                    <div className="size-6 rounded-full border border-surface-border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
                      <div className="size-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2 relative z-10">
                    <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <Gem className="text-4xl" />
                    </div>
                    <div>
                      <span className="text-4xl font-bold font-display text-text-main block leading-none">
                        550
                      </span>
                      <span className="text-xs text-text-muted uppercase font-bold">
                        AfriCoins
                      </span>
                    </div>
                  </div>
                  <div className="mb-6 relative z-10">
                    <span className="inline-flex items-center gap-1 text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-md">
                      <PlusCircle className="text-xs" /> +50 Bonus inclus
                    </span>
                  </div>
                  <div className="mt-auto pt-6 border-t border-surface-border flex justify-between items-center relative z-10">
                    <span className="text-xl font-bold text-text-main font-body">
                      5.000 FCFA
                    </span>
                    <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                      Économie 10%
                    </span>
                  </div>
                </div>
              </label>
              <label className="group cursor-pointer block relative">
                <input
                  className="peer sr-only"
                  name="package"
                  type="radio"
                  value="premium"
                />
                <div className="h-full bg-white border border-surface-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col peer-checked:border-primary peer-checked:bg-yellow-50">
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-text-muted text-xs font-bold tracking-widest uppercase font-body">
                      Collectionneur
                    </span>
                    <div className="size-6 rounded-full border border-surface-border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
                      <div className="size-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2 relative z-10">
                    <div className="size-12 rounded-full bg-surface-light flex items-center justify-center text-primary border border-surface-border">
                      <Wallet className="text-3xl" />
                    </div>
                    <div>
                      <span className="text-3xl font-bold font-display text-text-main block leading-none">
                        1200
                      </span>
                      <span className="text-xs text-text-muted uppercase font-bold">
                        AfriCoins
                      </span>
                    </div>
                  </div>
                  <div className="mb-6 relative z-10">
                    <span className="inline-flex items-center gap-1 text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-md">
                      <PlusCircle className="text-xs" /> +200 Bonus inclus
                    </span>
                  </div>
                  <div className="mt-auto pt-6 border-t border-surface-border flex justify-between items-center relative z-10">
                    <span className="text-lg font-bold text-text-main font-body">
                      10.000 FCFA
                    </span>
                     <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                      Économie 15%
                    </span>
                  </div>
                </div>
              </label>
              <label className="group cursor-pointer block relative">
                <input
                  className="peer sr-only"
                  name="package"
                  type="radio"
                  value="ultimate"
                />
                <div className="h-full bg-gradient-to-br from-text-main to-neutral-800 text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col border border-neutral-700 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-text-main">
                  <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-20 font-body tracking-wider uppercase">
                    Best Value
                  </div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-white/70 text-xs font-bold tracking-widest uppercase font-body">
                      Mécène
                    </span>
                    <div className="size-6 rounded-full border border-white/30 flex items-center justify-center peer-checked:bg-white peer-checked:border-white transition-colors">
                      <div className="size-2.5 bg-neutral-800 rounded-full hidden peer-checked:block"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2 relative z-10">
                    <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-primary border border-white/20 backdrop-blur-sm">
                      <Diamond className="text-3xl text-yellow-400" />
                    </div>
                    <div>
                      <span className="text-3xl font-bold font-display text-white block leading-none">
                        3000
                      </span>
                      <span className="text-xs text-white/60 uppercase font-bold">
                        AfriCoins
                      </span>
                    </div>
                  </div>
                  <div className="mb-6 relative z-10">
                    <span className="inline-flex items-center gap-1 text-yellow-300 text-xs font-bold bg-yellow-400/20 px-2 py-1 rounded-md border border-yellow-400/30">
                      <Star className="text-xs" /> +600 Bonus Massif
                    </span>
                  </div>
                  <div className="mt-auto pt-6 border-t border-white/20 flex justify-between items-center relative z-10">
                    <span className="text-lg font-bold text-white font-body">
                      25.000 FCFA
                    </span>
                     <span className="text-xs text-white font-bold bg-white/20 px-2 py-1 rounded">
                      Économie 25%
                    </span>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Diamond className="text-[180px]" />
                  </div>
                </div>
              </label>
            </div>
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="sticky top-24 bg-white border border-surface-border rounded-xl shadow-xl shadow-stone-200/50 overflow-hidden">
                <div className="p-6 bg-surface-light border-b border-surface-border">
                  <h3 className="font-display font-bold text-xl text-text-main flex items-center gap-2">
                    <ShoppingCart className="text-primary" />
                    Récapitulatif
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-3 text-sm font-body">
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">
                        Package sélectionné
                      </span>
                      <span className="font-bold text-text-main">
                        Passionné
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">AfriCoins de base</span>
                      <span className="font-bold text-text-main">500 AC</span>
                    </div>
                    <div className="flex justify-between items-center text-secondary">
                      <span className="flex items-center gap-1">
                        <Gift className="text-sm" /> Bonus
                      </span>
                      <span className="font-bold">+50 AC</span>
                    </div>
                    <div className="pt-3 border-t border-dashed border-surface-border flex justify-between items-center">
                      <span className="text-text-main font-bold">
                        Total à recevoir
                      </span>
                      <div className="flex items-center gap-1 font-bold text-lg text-primary">
                        550 AC
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider block">
                      Moyen de paiement
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="flex flex-col items-center justify-center p-2 border-2 border-primary bg-primary/5 rounded-lg transition-all">
                        <CreditCard className="text-primary mb-1" />
                        <span className="text-[10px] font-bold text-text-main">
                          Carte
                        </span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-2 border border-surface-border hover:border-text-muted rounded-lg text-text-muted hover:text-text-main transition-all">
                        <Landmark className="mb-1" />
                        <span className="text-[10px] font-bold">
                          Virement
                        </span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-2 border border-surface-border hover:border-text-muted rounded-lg text-text-muted hover:text-text-main transition-all">
                        <Smartphone className="mb-1" />
                        <span className="text-[10px] font-bold">Mobile</span>
                      </button>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-sm text-text-muted">
                        Total à payer
                      </span>
                      <span className="text-2xl font-black font-display text-text-main">
                        5.000{' '}
                        <span className="text-sm font-normal text-text-muted font-body">
                          FCFA
                        </span>
                      </span>
                    </div>
                    <Button asChild className="w-full py-4 bg-primary hover:bg-text-main text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5">
                      <Link href="/africoins/payment">
                        <span>Confirmer et Payer</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <p className="text-[10px] text-center text-text-muted mt-3 leading-tight">
                      En validant, vous acceptez les{' '}
                      <a
                        className="underline hover:text-primary"
                        href="#"
                      >
                        Conditions Générales de Vente
                      </a>{' '}
                      d'AfriStory.
                    </p>
                  </div>
                </div>
                <div className="px-6 py-3 bg-surface-light border-t border-surface-border flex items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="h-4 w-8 bg-stone-400 rounded"></div>
                  <div className="h-4 w-8 bg-stone-400 rounded"></div>
                  <div className="h-4 w-8 bg-stone-400 rounded"></div>
                  <div className="h-4 w-8 bg-stone-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-surface-border bg-white mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2 text-text-main">
                <BookOpen className="text-primary" />
                <span className="text-lg font-bold font-display">
                  AfriStory
                </span>
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
    </div>
  );
}