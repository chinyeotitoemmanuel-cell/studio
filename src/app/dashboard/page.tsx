
import {
  LayoutDashboard,
  BookCopy,
  Edit,
  BarChart,
  CircleDollarSign,
  Settings,
  LogOut,
  Menu,
  Search,
  Plus,
  Bell,
  ChevronDown,
  Eye,
  Wallet,
  Users,
  Heart,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  MoreVertical,
  ImageIcon,
  PlusCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-display text-white">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-surface-border bg-background-dark transition-all duration-300 md:flex">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-xl font-black text-background-dark">A</div>
            <div className="flex flex-col">
              <h1 className="leading-none text-white text-lg font-bold">AfriStory</h1>
              <span className="text-text-secondary text-xs">Espace Créateur</span>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <nav className="custom-scrollbar flex-1 space-y-2 overflow-y-auto px-4">
          <Link href="#" className="group flex items-center gap-3 rounded-lg bg-surface-border px-3 py-2.5 text-white">
            <LayoutDashboard className="text-primary" />
            <span className="text-sm font-medium">Vue d'ensemble</span>
          </Link>
          <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-secondary transition-colors hover:bg-surface-border hover:text-white">
            <BookCopy className="h-5 w-5"/>
            <span className="text-sm font-medium">Contenu Pro</span>
          </Link>
          <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-secondary transition-colors hover:bg-surface-border hover:text-white">
            <Edit className="h-5 w-5" />
            <span className="text-sm font-medium">Brouillons</span>
          </Link>
          <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-secondary transition-colors hover:bg-surface-border hover:text-white">
            <BarChart className="h-5 w-5" />
            <span className="text-sm font-medium">Analytiques</span>
          </Link>
          <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-secondary transition-colors hover:bg-surface-border hover:text-white">
            <CircleDollarSign className="h-5 w-5" />
            <span className="text-sm font-medium">Monétisation</span>
          </Link>
          <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-secondary transition-colors hover:bg-surface-border hover:text-white">
            <Settings className="h-5 w-5" />
            <span className="text-sm font-medium">Paramètres</span>
          </Link>
        </nav>
        {/* User/Logout */}
        <div className="border-t border-surface-border p-4">
          <Button variant="ghost" className="h-10 w-full justify-center gap-2 rounded-lg bg-surface-border px-4 text-sm font-bold text-text-secondary transition-colors hover:bg-red-900/50 hover:text-red-400">
            <LogOut className="h-[18px] w-[18px]" />
            <span>Déconnexion</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="z-10 flex h-16 shrink-0 items-center justify-between border-b border-surface-border bg-background-dark/95 px-6 backdrop-blur">
          <Button variant="ghost" className="mr-4 text-white md:hidden" size="icon">
            <Menu />
          </Button>
          <div className="hidden max-w-md flex-1 md:block">
            <div className="group relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
              <Input
                type="text"
                placeholder="Rechercher une histoire..."
                className="w-full rounded-lg border-none bg-surface-dark py-2 pl-10 pr-4 text-sm text-white placeholder-text-secondary transition-all focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <Button className="hidden h-9 gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 sm:flex">
              <Plus className="h-[18px] w-[18px]" />
              <span className="truncate">Nouvelle Histoire</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative size-9 rounded-lg bg-surface-dark text-white transition-colors hover:bg-surface-border">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 size-2 rounded-full border border-surface-dark bg-red-500"></span>
            </Button>
            <Button variant="ghost" size="icon" className="size-9 overflow-hidden rounded-full border border-surface-border bg-surface-dark p-0 transition-colors hover:border-primary">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQR2Fc2SW7H_h93kHcvfe_05oTSvh9VT9HHbPvJI7NJefkqLRJZVYQCKRly2tyvS6N4DbuB3LG1eAPy-gyiga8IA2DOnD-vME3cOm3UfZmnOcG3DaaUAwhraNPJiE_ju3zc5H0Zub4_8N1c9jJcuF52ju53xGUpxorTUAbWvXSed4xPzCidjjill2xVyzFrGqc2CoReORD3dN1My5XrQB3HJE233ZUCqE_27B-oGZi5mId15ASJWRgSC-JoNmN54hDvZoPGGWiHPOT"
                alt="Artist Profile"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </Button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="custom-scrollbar flex-1 space-y-8 overflow-y-auto p-4 md:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white">Bienvenue, Artiste</h2>
              <p className="mt-1 text-text-secondary">Voici un aperçu de vos performances et de vos activités récentes.</p>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <select className="h-9 cursor-pointer appearance-none rounded-lg border border-surface-border bg-surface-dark py-2 pl-3 pr-8 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary">
                  <option>30 derniers jours</option>
                  <option>7 derniers jours</option>
                  <option>Cette année</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-surface-border/50 bg-surface-dark p-5 transition-colors hover:border-primary/30">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Lecteurs Totaux</span>
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">12.5k</span>
                <span className="mb-1 flex items-center rounded bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-500">
                  <TrendingUp className="mr-0.5 h-3.5 w-3.5" />
                  +5.2%
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-surface-border/50 bg-surface-dark p-5 transition-colors hover:border-primary/30">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Revenu Mensuel</span>
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wallet className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">$450</span>
                <span className="mb-1 flex items-center rounded bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-500">
                  <TrendingUp className="mr-0.5 h-3.5 w-3.5" />
                  +12%
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-surface-border/50 bg-surface-dark p-5 transition-colors hover:border-primary/30">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Abonnés</span>
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">1,203</span>
                <span className="mb-1 flex items-center rounded bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-500">
                  <TrendingUp className="mr-0.5 h-3.5 w-3.5" />
                  +3.4%
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-surface-border/50 bg-surface-dark p-5 transition-colors hover:border-primary/30">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Taux d'Engagement</span>
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">8.5%</span>
                <span className="mb-1 flex items-center rounded bg-red-500/10 px-1.5 py-0.5 text-xs font-medium text-red-500">
                  <TrendingDown className="mr-0.5 h-3.5 w-3.5" />
                  -1.1%
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-surface-border/50 bg-surface-dark p-6 lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Performance Analytique</h3>
                <Button variant="link" className="gap-1 text-sm text-primary hover:underline">
                  Voir détails <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative min-h-[250px] flex-1 w-full">
                <svg preserveAspectRatio="none" viewBox="0 0 800 300" className="h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="gradientPrimary" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f2a60d" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#f2a60d" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <line x1="0" x2="800" y1="225" y2="225" stroke="#493c22" strokeWidth="1" strokeDasharray="4 4"></line>
                  <line x1="0" x2="800" y1="150" y2="150" stroke="#493c22" strokeWidth="1" strokeDasharray="4 4"></line>
                  <line x1="0" x2="800" y1="75" y2="75" stroke="#493c22" strokeWidth="1" strokeDasharray="4 4"></line>
                  <path d="M0 250 Q 100 200, 200 220 T 400 150 T 600 100 T 800 50 L 800 300 L 0 300 Z" fill="url(#gradientPrimary)"></path>
                  <path d="M0 250 Q 100 200, 200 220 T 400 150 T 600 100 T 800 50" fill="none" stroke="#f2a60d" strokeWidth="3" strokeLinecap="round"></path>
                  <circle cx="200" cy="220" r="4" fill="#221c10" stroke="#f2a60d" strokeWidth="2"></circle>
                  <circle cx="400" cy="150" r="4" fill="#221c10" stroke="#f2a60d" strokeWidth="2"></circle>
                  <circle cx="600" cy="100" r="4" fill="#221c10" stroke="#f2a60d" strokeWidth="2"></circle>
                </svg>
                <div className="mt-2 flex justify-between border-t border-surface-border/50 px-2 pt-2 text-xs text-text-secondary">
                  <span>1 Nov</span>
                  <span>8 Nov</span>
                  <span>15 Nov</span>
                  <span>22 Nov</span>
                  <span>29 Nov</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-surface-border/50 bg-surface-dark p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Commentaires</h3>
                <span className="rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">3 nouveaux</span>
              </div>
              <div className="custom-scrollbar -mr-2 max-h-[300px] space-y-4 overflow-y-auto pr-2">
                 {/* Comments list */}
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-surface-border/50 bg-surface-dark">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border/50 p-6">
              <h3 className="text-lg font-bold text-white">Publications Récentes (AfriStory Pro)</h3>
              <Button variant="secondary" size="sm" className="bg-surface-border text-white hover:bg-surface-border/80">Tout voir</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-surface-border/30 text-xs uppercase tracking-wider text-text-secondary">
                    <th className="p-4 font-medium">Titre / Chapitre</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Statut</th>
                    <th className="p-4 font-medium text-right">Vues</th>
                    <th className="p-4 font-medium text-right">Revenus</th>
                    <th className="p-4 font-medium text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/30">
                  <tr className="transition-colors hover:bg-surface-border/10">
                    <td className="p-4"><div className="flex items-center gap-3"><div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-gray-700 shadow-sm"><div className="h-full w-full bg-gradient-to-br from-purple-500 to-indigo-600"></div></div><div><p className="text-sm font-medium text-white">Le Guerrier Solaire</p><p className="text-xs text-text-secondary">Chapitre 4: L'Ascension</p></div></div></td>
                    <td className="p-4 text-sm text-text-secondary">12 Oct 2023</td>
                    <td className="p-4"><span className="inline-flex items-center rounded border border-green-500/20 bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">Publié</span></td>
                    <td className="p-4 text-right text-sm text-white">5.2k</td>
                    <td className="p-4 text-right text-sm font-medium text-white">$45.00</td>
                    <td className="p-4 text-center"><Button variant="ghost" size="icon" className="text-text-secondary hover:text-white"><MoreVertical className="h-5 w-5" /></Button></td>
                  </tr>
                  <tr className="transition-colors hover:bg-surface-border/10">
                     <td className="p-4"><div className="flex items-center gap-3"><div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-gray-700 shadow-sm"><div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-600"></div></div><div><p className="text-sm font-medium text-white">Le Guerrier Solaire</p><p className="text-xs text-text-secondary">Chapitre 5: Le Secret</p></div></div></td>
                     <td className="p-4 text-sm text-text-secondary">20 Oct 2023</td>
                     <td className="p-4"><span className="inline-flex items-center rounded border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Programmé</span></td>
                     <td className="p-4 text-right text-sm text-text-secondary">-</td>
                     <td className="p-4 text-right text-sm text-text-secondary">-</td>
                     <td className="p-4 text-center"><Button variant="ghost" size="icon" className="text-text-secondary hover:text-white"><MoreVertical className="h-5 w-5" /></Button></td>
                  </tr>
                  <tr className="transition-colors hover:bg-surface-border/10">
                    <td className="p-4"><div className="flex items-center gap-3"><div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-gray-700 shadow-sm"><div className="h-full w-full bg-gradient-to-br from-blue-400 to-cyan-600"></div></div><div><p className="text-sm font-medium text-white">Chroniques de Dakar</p><p className="text-xs text-text-secondary">One-shot</p></div></div></td>
                    <td className="p-4 text-sm text-text-secondary">Modifié il y a 2h</td>
                    <td className="p-4"><span className="inline-flex items-center rounded border border-gray-500/20 bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-400">Brouillon</span></td>
                    <td className="p-4 text-right text-sm text-text-secondary">-</td>
                    <td className="p-4 text-right text-sm text-text-secondary">-</td>
                    <td className="p-4 text-center"><Button variant="ghost" size="icon" className="text-text-secondary hover:text-white"><Edit className="h-5 w-5" /></Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Vos Brouillons Récents (AfriStory Draft)</h3>
              <Button variant="link" className="gap-1 text-sm text-primary hover:underline">
                Gérer les brouillons <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
              <div className="group cursor-pointer">
                <div className="relative mb-2 aspect-[3/4] overflow-hidden rounded-lg border border-surface-border bg-surface-dark shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 z-20"><span className="rounded bg-black/50 px-2 py-0.5 text-xs font-bold text-white backdrop-blur-sm">Ch. 2</span></div>
                  <div className="flex h-full w-full items-center justify-center bg-slate-700 text-slate-500"><ImageIcon className="h-10 w-10" /></div>
                  <div className="absolute inset-0 z-30 flex items-center justify-center gap-2 bg-primary/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Button size="icon" className="h-8 w-8 rounded-full bg-white text-primary shadow-lg transition-transform hover:scale-110"><Edit className="h-4 w-4" /></Button>
                  </div>
                </div>
                <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-primary">Projet K</p>
                <p className="truncate text-xs text-text-secondary">Modifié hier</p>
              </div>
              <div className="group cursor-pointer">
                 <div className="relative mb-2 aspect-[3/4] overflow-hidden rounded-lg border border-surface-border bg-surface-dark shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-600"><ImageIcon className="h-10 w-10" /></div>
                    <div className="absolute inset-0 z-30 flex items-center justify-center gap-2 bg-primary/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <Button size="icon" className="h-8 w-8 rounded-full bg-white text-primary shadow-lg transition-transform hover:scale-110"><Edit className="h-4 w-4" /></Button>
                    </div>
                </div>
                <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-primary">Légendes oubliées</p>
                <p className="truncate text-xs text-text-secondary">Il y a 3 jours</p>
              </div>
              <Button variant="ghost" className="group aspect-[3/4] h-auto flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-surface-border text-text-secondary transition-all hover:border-primary/50 hover:bg-surface-border/20 hover:text-primary">
                <PlusCircle className="h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-xs font-medium">Nouveau brouillon</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
