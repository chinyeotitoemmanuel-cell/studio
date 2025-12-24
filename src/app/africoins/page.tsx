
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
  Lock,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AfriCoinsPage() {
  return (
    <>
      {/* Top Navigation */}
      <div className="relative flex w-full flex-col border-b border-border-dark bg-background-dark">
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-[960px]">
            <header className="flex items-center justify-between whitespace-nowrap px-4 py-4 md:px-10">
              <div className="flex items-center gap-4 text-white">
                <div className="size-8 flex items-center justify-center text-primary">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                  AfriStory
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-4 md:gap-8">
                <div className="hidden md:flex items-center gap-9">
                  <a
                    className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal"
                    href="/"
                  >
                    Accueil
                  </a>
                  <a
                    className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal"
                    href="/library"
                  >
                    Bibliothèque
                  </a>
                  <a
                    className="text-primary text-sm font-medium leading-normal"
                    href="/africoins"
                  >
                    AfriCoins
                  </a>
                  <a
                    className="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal"
                    href="/drafts"
                  >
                    Brouillons
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center justify-center overflow-hidden rounded-full h-10 w-10 hover:bg-white/10 text-white transition-colors">
                    <Bell />
                  </button>
                  <div
                    className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-border-dark"
                    data-alt="User profile avatar with colorful abstract pattern"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjXTErcKgStf0O2IiKiHff4ZD5wyScuNvEqBcdHtD5iKRrXIDES2ztvZyId3bSyPR20cbdN_b0_fIrubv3jgl8fTih4T-RF9vis2iP1cJy9Xz9h2KHDmOt1vhVR_q5jWsNOH0g5LtmjGLFBGQT2Jw6QgVPgPbEh0i5zBYXzrkTeLzE676V7BmfU2hxyPpIgrhHSn6N3WV08vcQjadFWf9NWiDx_qcCN3aRz1GiQyyCOBKq3ufCPPltVLSjCMTJ-jSEscJagccs1iEG")',
                    }}
                  ></div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 justify-center py-8">
        <div className="flex flex-col w-full max-w-[960px] px-4 md:px-10 gap-8">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 items-end">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-[-0.033em]">
                Portefeuille AfriCoins
              </h1>
              <p className="text-[#cbb790] text-base font-body font-normal leading-normal max-w-lg">
                Soutenez directement les créateurs africains. Sécurisé, rapide et stimulant.
                Utilisez les AfriCoins pour débloquer des chapitres premium et faire des dons aux
                artistes.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#cbb790] text-sm">
              <Lock className="h-4 w-4" />
              <span>Paiement sécurisé 256-bit SSL</span>
            </div>
          </div>
          {/* Stats & Balance Widget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Current Balance Card */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-gradient-to-br from-surface-dark to-background-dark border border-border-dark relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 rotate-12 transition-transform group-hover:rotate-45 duration-700">
                <Bitcoin className="text-[120px] text-primary" />
              </div>
              <p className="text-[#cbb790] text-sm font-medium leading-normal flex items-center gap-2">
                <Wallet className="h-5 w-5" /> Solde Actuel
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-white tracking-tight text-4xl font-bold leading-tight">
                  450 <span className="text-primary">AC</span>
                </p>
                <span className="text-white/40 text-sm">≈ $4.50 USD</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex gap-4 text-sm font-medium text-white/80">
                <div className="flex flex-col">
                  <span className="text-xs text-white/40">Dernière recharge</span>
                  <span>24 Oct, 2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/40">Dépensé ce mois-ci</span>
                  <span>120 AC</span>
                </div>
              </div>
            </div>
            {/* What you can do */}
            <div className="md:col-span-2 flex flex-col gap-2 rounded-xl p-6 bg-surface-dark/50 border border-border-dark">
              <p className="text-[#cbb790] text-sm font-medium leading-normal mb-2">
                Ce que vous pouvez faire avec les AfriCoins
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center gap-2 p-3 rounded-lg bg-background-dark/50 hover:bg-background-dark transition-colors cursor-default">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BookOpen />
                  </div>
                  <span className="text-xs text-white font-medium">
                    Débloquer des chapitres
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-3 rounded-lg bg-background-dark/50 hover:bg-background-dark transition-colors cursor-default">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart />
                  </div>
                  <span className="text-xs text-white font-medium">
                    Pourboire aux artistes
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-3 rounded-lg bg-background-dark/50 hover:bg-background-dark transition-colors cursor-default">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award />
                  </div>
                  <span className="text-xs text-white font-medium">
                    Obtenir des badges Pro
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-3 rounded-lg bg-background-dark/50 hover:bg-background-dark transition-colors cursor-default">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Gift />
                  </div>
                  <span className="text-xs text-white font-medium">
                    Offrir à des amis
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing Packages */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-2">
              <PlusCircle className="text-primary" />
              Recharger le compte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Starter */}
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#cbb790] text-sm font-bold uppercase tracking-wider">
                    Pack Découverte
                  </h1>
                  <p className="flex items-baseline gap-1 text-white mt-1">
                    <span className="text-white text-4xl font-bold leading-tight tracking-tight">
                      $1.00
                    </span>
                    <span className="text-white/60 text-sm font-medium leading-tight">
                      pour 100 AC
                    </span>
                  </p>
                </div>
                <Button asChild className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-wide transition-colors border border-white/10">
                  <Link href="/africoins/payment">Acheter le pack Découverte</Link>
                </Button>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    100 AfriCoins
                  </div>
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    Bon pour 5-10 chapitres
                  </div>
                </div>
              </div>
              {/* Best Value */}
              <div className="flex flex-1 flex-col gap-4 rounded-xl border-2 border-primary bg-surface-dark p-6 relative transform md:-translate-y-2 shadow-2xl shadow-primary/10">
                <div className="absolute top-0 right-0 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MEILLEUR PRIX
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-primary text-sm font-bold uppercase tracking-wider">
                    Choix du Lecteur
                  </h1>
                  <p className="flex items-baseline gap-1 text-white mt-1">
                    <span className="text-white text-4xl font-bold leading-tight tracking-tight">
                      $5.00
                    </span>
                    <span className="text-white/60 text-sm font-medium leading-tight">
                      pour 550 AC
                    </span>
                  </p>
                  <span className="text-green-400 text-xs font-bold">
                    Économisez 10% + 50 AC en bonus
                  </span>
                </div>
                 <Button asChild className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold tracking-wide transition-colors shadow-lg shadow-primary/20">
                  <Link href="/africoins/payment">Acheter le bundle</Link>
                </Button>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    550 AfriCoins
                  </div>
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    <span className="font-bold text-white">Bonus : 50 AC Gratuits</span>
                  </div>
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    Débloquez ~50 chapitres
                  </div>
                </div>
              </div>
              {/* Patron */}
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#cbb790] text-sm font-bold uppercase tracking-wider">
                    Pack Mécène
                  </h1>
                  <p className="flex items-baseline gap-1 text-white mt-1">
                    <span className="text-white text-4xl font-bold leading-tight tracking-tight">
                      $10.00
                    </span>
                    <span className="text-white/60 text-sm font-medium leading-tight">
                      pour 1200 AC
                    </span>
                  </p>
                </div>
                 <Button asChild className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-wide transition-colors border border-white/10">
                  <Link href="/africoins/payment">Acheter le pack Mécène</Link>
                </Button>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    1200 AfriCoins
                  </div>
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    <span className="font-bold text-white">Bonus : 200 AC Gratuits</span>
                  </div>
                  <div className="text-sm font-body text-white/80 flex gap-3">
                    <Check className="text-primary text-[20px]" />
                    Soutenez jusqu'à 20 artistes
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Methods */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-2 pt-4">
              <CreditCard className="text-primary" />
              Mode de paiement
            </h2>
            <div className="rounded-xl border border-border-dark bg-surface-dark p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Mobile Money (Priority) */}
                <label className="cursor-pointer relative group">
                  <input
                    defaultChecked
                    className="peer sr-only"
                    name="payment"
                    type="radio"
                  />
                  <div className="h-full p-4 rounded-lg border border-border-dark bg-background-dark hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 transition-all flex flex-col gap-3 items-center text-center">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center p-2">
                      <Smartphone className="text-orange-600 text-2xl" />
                    </div>
                    <span className="text-white font-bold text-sm">
                      Mobile Money
                    </span>
                    <span className="text-xs text-white/50">
                      M-Pesa, Orange, Wave
                    </span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="text-xl" />
                    </div>
                  </div>
                </label>
                {/* Card */}
                <label className="cursor-pointer relative group">
                  <input className="peer sr-only" name="payment" type="radio" />
                  <div className="h-full p-4 rounded-lg border border-border-dark bg-background-dark hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 transition-all flex flex-col gap-3 items-center text-center">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center p-2">
                      <CreditCard className="text-slate-800 text-2xl" />
                    </div>
                    <span className="text-white font-bold text-sm">
                      Carte de crédit
                    </span>
                    <span className="text-xs text-white/50">
                      Visa, Mastercard
                    </span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="text-xl" />
                    </div>
                  </div>
                </label>
                {/* PayPal */}
                <label className="cursor-pointer relative group">
                  <input className="peer sr-only" name="payment" type="radio" />
                  <div className="h-full p-4 rounded-lg border border-border-dark bg-background-dark hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 transition-all flex flex-col gap-3 items-center text-center">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center p-2">
                      <Landmark className="text-blue-600 text-2xl" />
                    </div>
                    <span className="text-white font-bold text-sm">PayPal</span>
                    <span className="text-xs text-white/50">Paiement rapide</span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="text-xl" />
                    </div>
                  </div>
                </label>
                {/* Crypto/Other */}
                <label className="cursor-pointer relative group">
                  <input className="peer sr-only" name="payment" type="radio" />
                  <div className="h-full p-4 rounded-lg border border-border-dark bg-background-dark hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 transition-all flex flex-col gap-3 items-center text-center">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center p-2">
                      <Bitcoin className="text-indigo-600 text-2xl" />
                    </div>
                    <span className="text-white font-bold text-sm">Crypto</span>
                    <span className="text-xs text-white/50">
                      BTC, ETH, Stablecoins
                    </span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="text-xl" />
                    </div>
                  </div>
                </label>
              </div>
              {/* Localization Note */}
              <div className="mt-4 p-3 bg-primary/10 rounded-lg flex items-start gap-3 border border-primary/20">
                <Info className="text-primary text-sm mt-0.5" />
                <p className="text-xs text-[#cbb790] leading-relaxed">
                  Les prix sont affichés en USD mais seront facturés dans votre
                  devise locale (CFA, NGN, KES, ZAR) en fonction des taux de
                  change actuels. Les transactions Mobile Money sont traitées instantanément.
                </p>
              </div>
            </div>
          </div>
          {/* Transaction History */}
          <div className="flex flex-col gap-4 pb-12">
            <div className="flex items-center justify-between pt-4">
              <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-2">
                <History className="text-primary" />
                Activité Récente
              </h2>
              <a className="text-primary text-sm font-bold hover:underline" href="#">
                Voir tout
              </a>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border-dark">
              <table className="w-full text-left text-sm text-white">
                <thead className="bg-surface-dark text-xs uppercase text-[#cbb790]">
                  <tr>
                    <th
                      className="px-6 py-4 font-bold tracking-wider"
                      scope="col"
                    >
                      Date
                    </th>
                    <th
                      className="px-6 py-4 font-bold tracking-wider"
                      scope="col"
                    >
                      Description
                    </th>
                    <th
                      className="px-6 py-4 font-bold tracking-wider text-right"
                      scope="col"
                    >
                      Montant (AC)
                    </th>
                    <th
                      className="px-6 py-4 font-bold tracking-wider text-center"
                      scope="col"
                    >
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark bg-background-dark">
                  <tr className="hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-white/70">
                      24 Oct, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        Achat 'Choix du Lecteur'
                      </div>
                      <div className="text-xs text-white/50">
                        Via Mobile Money (M-Pesa)
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-green-400">
                      +550
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                        Terminé
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-white/70">
                      22 Oct, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        Déblocage Chapitre 5: "La Cité du Soleil"
                      </div>
                      <div className="text-xs text-white/50">Série Kwezi</div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-white/80">
                      -15
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                        Terminé
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-white/70">
                      20 Oct, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        Don à un artiste
                      </div>
                      <div className="text-xs text-white/50">
                        À : Nnedi Okorafor
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-white/80">
                      -50
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                        Terminé
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
