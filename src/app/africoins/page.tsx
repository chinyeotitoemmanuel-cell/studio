
import {
  BookOpen,
  Bell,
  Lock,
  Wallet,
  Bitcoin,
  LockOpen,
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
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';

export default function AfriCoinsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-dark font-display text-white">
      <Header />
      <div className="flex flex-1 justify-center py-8">
        <div className="flex w-full max-w-[960px] flex-col gap-8 px-4 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold leading-tight tracking-[-0.033em] text-white md:text-5xl">
                AfriCoins Wallet
              </h1>
              <p className="max-w-lg font-body text-base font-normal leading-normal text-[#cbb790]">
                Support African creators directly. Secure, fast, and empowering.
                Use AfriCoins to unlock premium chapters and donate to artists.
              </p>
            </div>
            <div className="hidden items-center gap-2 text-sm text-[#cbb790] md:flex">
              <Lock className="h-4 w-4" />
              <span>Secure Payment 256-bit SSL</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="group relative flex flex-col gap-2 overflow-hidden rounded-xl border border-border-dark bg-gradient-to-br from-surface-dark to-background-dark p-6">
              <div className="absolute -right-4 -top-4 rotate-12 opacity-10 transition-transform duration-700 group-hover:rotate-45">
                <Bitcoin className="h-[120px] w-[120px] text-primary" />
              </div>
              <p className="flex items-center gap-2 text-sm font-medium leading-normal text-[#cbb790]">
                <Wallet className="h-5 w-5" /> Current Balance
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold leading-tight tracking-tight text-white">
                  450 <span className="text-primary">AC</span>
                </p>
                <span className="text-sm text-white/40">≈ $4.50 USD</span>
              </div>
              <div className="mt-4 flex gap-4 border-t border-white/5 pt-4 text-sm font-medium text-white/80">
                <div className="flex flex-col">
                  <span className="text-xs text-white/40">Last Top-up</span>
                  <span>Oct 24, 2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/40">Spent this month</span>
                  <span>120 AC</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-border-dark bg-surface-dark/50 p-6 md:col-span-2">
              <p className="mb-2 text-sm font-medium leading-normal text-[#cbb790]">
                What you can do with AfriCoins
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex cursor-default flex-col items-center gap-2 rounded-lg bg-background-dark/50 p-3 text-center transition-colors hover:bg-background-dark">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <LockOpen />
                  </div>
                  <span className="text-xs font-medium text-white">
                    Unlock Chapters
                  </span>
                </div>
                <div className="flex cursor-default flex-col items-center gap-2 rounded-lg bg-background-dark/50 p-3 text-center transition-colors hover:bg-background-dark">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart />
                  </div>
                  <span className="text-xs font-medium text-white">
                    Tip Artists
                  </span>
                </div>
                <div className="flex cursor-default flex-col items-center gap-2 rounded-lg bg-background-dark/50 p-3 text-center transition-colors hover:bg-background-dark">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award />
                  </div>
                  <span className="text-xs font-medium text-white">
                    Get Pro Badges
                  </span>
                </div>
                <div className="flex cursor-default flex-col items-center gap-2 rounded-lg bg-background-dark/50 p-3 text-center transition-colors hover:bg-background-dark">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Gift />
                  </div>
                  <span className="text-xs font-medium text-white">
                    Gift Friends
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold leading-tight text-white">
              <PlusCircle className="text-primary" />
              Top Up Account
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 transition-colors hover:border-primary/50">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-bold uppercase tracking-wider text-[#cbb790]">
                    Starter Pack
                  </h1>
                  <p className="mt-1 flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-bold leading-tight tracking-tight text-white">
                      $1.00
                    </span>
                    <span className="text-sm font-medium leading-tight text-white/60">
                      for 100 AC
                    </span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-white/10 bg-white/5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Buy Starter
                </Button>
                <div className="mt-2 flex flex-col gap-3">
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    100 AfriCoins
                  </div>
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    Good for 5-10 chapters
                  </div>
                </div>
              </div>
              <div className="relative flex flex-1 transform flex-col gap-4 rounded-xl border-2 border-primary bg-surface-dark p-6 shadow-2xl shadow-primary/10 md:-translate-y-2">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-bold text-background-dark">
                  BEST VALUE
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-bold uppercase tracking-wider text-primary">
                    Reader's Choice
                  </h1>
                  <p className="mt-1 flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-bold leading-tight tracking-tight text-white">
                      $5.00
                    </span>
                    <span className="text-sm font-medium leading-tight text-white/60">
                      for 550 AC
                    </span>
                  </p>
                  <span className="text-xs font-bold text-green-400">
                    Save 10% + Bonus 50 AC
                  </span>
                </div>
                <Button className="h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-sm font-bold tracking-wide text-background-dark shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
                  Buy Bundle
                </Button>
                <div className="mt-2 flex flex-col gap-3">
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    550 AfriCoins
                  </div>
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    <span className="font-bold text-white">
                      Bonus: 50 Free AC
                    </span>
                  </div>
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    Unlock ~50 chapters
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 transition-colors hover:border-primary/50">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-bold uppercase tracking-wider text-[#cbb790]">
                    Patron Bundle
                  </h1>
                  <p className="mt-1 flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-bold leading-tight tracking-tight text-white">
                      $10.00
                    </span>
                    <span className="text-sm font-medium leading-tight text-white/60">
                      for 1200 AC
                    </span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-white/10 bg-white/5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Buy Patron
                </Button>
                <div className="mt-2 flex flex-col gap-3">
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    1200 AfriCoins
                  </div>
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    <span className="font-bold text-white">
                      Bonus: 200 Free AC
                    </span>
                  </div>
                  <div className="flex gap-3 font-body text-sm text-white/80">
                    <Check className="text-primary" />
                    Support up to 20 artists
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 pt-4 text-2xl font-bold leading-tight text-white">
              <CreditCard className="text-primary" />
              Payment Method
            </h2>
            <div className="rounded-xl border border-border-dark bg-surface-dark p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <label className="group relative cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-border-dark bg-background-dark p-4 text-center transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white p-2">
                      <Smartphone className="text-2xl text-orange-600" />
                    </div>
                    <span className="text-sm font-bold text-white">
                      Mobile Money
                    </span>
                    <span className="text-xs text-white/50">
                      M-Pesa, Orange, Wave
                    </span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                </label>
                <label className="group relative cursor-pointer">
                  <input type="radio" name="payment" className="peer sr-only" />
                  <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-border-dark bg-background-dark p-4 text-center transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white p-2">
                      <CreditCard className="text-2xl text-slate-800" />
                    </div>
                    <span className="text-sm font-bold text-white">
                      Credit Card
                    </span>
                    <span className="text-xs text-white/50">Visa, Mastercard</span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                </label>
                <label className="group relative cursor-pointer">
                  <input type="radio" name="payment" className="peer sr-only" />
                  <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-border-dark bg-background-dark p-4 text-center transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white p-2">
                      <Landmark className="text-2xl text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-white">PayPal</span>
                    <span className="text-xs text-white/50">Fast checkout</span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                </label>
                <label className="group relative cursor-pointer">
                  <input type="radio" name="payment" className="peer sr-only" />
                  <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-border-dark bg-background-dark p-4 text-center transition-all hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white p-2">
                      <Bitcoin className="text-2xl text-indigo-600" />
                    </div>
                    <span className="text-sm font-bold text-white">Crypto</span>
                    <span className="text-xs text-white/50">
                      BTC, ETH, Stablecoins
                    </span>
                    <div className="absolute top-2 right-2 text-primary opacity-0 peer-checked:opacity-100">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/10 p-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs leading-relaxed text-[#cbb790]">
                  Prices are shown in USD but will be charged in your local
                  currency (CFA, NGN, KES, ZAR) based on current exchange
                  rates. Mobile Money transactions are processed instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pb-12">
            <div className="flex items-center justify-between pt-4">
              <h2 className="flex items-center gap-2 text-2xl font-bold leading-tight text-white">
                <History className="text-primary" />
                Recent Activity
              </h2>
              <Link
                href="#"
                className="text-sm font-bold text-primary hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border-dark">
              <table className="w-full text-left text-sm text-white">
                <thead className="bg-surface-dark text-xs uppercase text-[#cbb790]">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold tracking-wider">
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-right font-bold tracking-wider"
                    >
                      Amount (AC)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center font-bold tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark bg-background-dark">
                  <tr className="transition-colors hover:bg-surface-dark/50">
                    <td className="whitespace-nowrap px-6 py-4 text-white/70">
                      Oct 24, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        Purchased 'Reader's Choice'
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
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-surface-dark/50">
                    <td className="whitespace-nowrap px-6 py-4 text-white/70">
                      Oct 22, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        Unlocked Chapter 5: "The Sun City"
                      </div>
                      <div className="text-xs text-white/50">Kwezi Series</div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-white/80">
                      -15
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-surface-dark/50">
                    <td className="whitespace-nowrap px-6 py-4 text-white/70">
                      Oct 20, 2023
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        Artist Donation
                      </div>
                      <div className="text-xs text-white/50">
                        To: Nnedi Okorafor
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-white/80">
                      -50
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CheckCircle icon
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
  );

