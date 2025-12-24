
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  Edit,
  Info,
  Languages,
  Mail,
  UserPlus,
  Search,
  Share2,
  ShoppingBag,
  Verified,
  Eye,
  Heart,
  ChevronDown,
  User,
  Library,
  Wallet,
  Settings,
  LogOut,
  Pen,
  History,
  TrendingUp,
  Rocket,
  PanelTop,
  Bookmark,
  ChevronRight,
  Plus,
  Minus,
  AtSign,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#493c22] bg-white/90 dark:bg-[#231d10]/95 backdrop-blur-md px-6 lg:px-10 py-3 sticky top-0 w-full shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-slate-900 dark:text-white cursor-pointer group">
          <div className="size-8 text-primary transition-transform group-hover:scale-110">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display">
            AfriStory
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Explorer
          </a>
          <a
            className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Draft
          </a>
          <a
            className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Pro
          </a>
          <a
            className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Communauté
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-[#cbb790]">
            <Search className="h-5 w-5" />
          </span>
          <input
            className="w-full sm:w-64 bg-slate-100 dark:bg-[#493c22] text-slate-900 dark:text-white rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary border-none placeholder:text-slate-400 dark:placeholder:text-[#cbb790]/70"
            placeholder="Rechercher des histoires, auteurs..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-3 border-l border-slate-200 dark:border-[#493c22] pl-6">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-xs font-medium text-slate-500 dark:text-[#cbb790]">
              Solde
            </span>
            <span className="text-sm font-bold text-primary font-display">
              2,450 AC
            </span>
          </div>
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/50 cursor-pointer hover:ring-primary transition-all"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC52iNmmR2nZq_5lgSSYhJ8Hq1zT0TRIhqURg-7EiBUOAofOamA1JD_9aV22mGGCuFOLg8CGGdAz-RsliFTJIMzsr_IqtxnEtrTelGlc8LEmtQpfHOInAU3_jIrBImTb9_bo4Qyg6ugpiNo8Oa_ChVOYCeBWY6r2y_fKtcusi4FghDWmv9JM-2UPNPYtV1n3pyfql8OMkqX1EMV86KS0nCEo3mTfv47LMBoO_SbWLChQ_BkKtkwydRRx8rL6W7WXm_IAc-C2w55d4ML")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default function ProfilePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-text-main min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
      <div className="fixed inset-0 pointer-events-none bg-pattern z-0"></div>
      <Header />
      <div className="relative z-0 flex flex-1 w-full max-w-[1440px] mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8 gap-8">
        <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-6">
          <div className="bg-white dark:bg-[#2d261a] p-6 rounded-xl border border-slate-200 dark:border-[#493c22] shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className="h-24 w-24 rounded-full bg-cover bg-center ring-4 ring-primary/20"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2vHOUHtQRuO70ehbA1IbudKwKiIagDx4YDoG-BDaUpuaZ8-U57C8U1Ir17vH05pu2PhuqN3iB3bqUsTCjDb5kPOMUV7J2ALvBwynMA-CJ0rRtHvjMKEDysNvG1T2z5emXPB-u4bRxCPpFP8nL8rpNTkzqIKFPAODQ2ESj5nWXe79NvwyZlOjX3zFub2jUurkGhBqXHb7XiVcglEeAayJ-wqXj4IiZnTK0IN-Luw0uPHjanEXqvmWD_pEDjPd5uKo094P6Sw-IErI_")',
                }}
              ></div>
              <div className="absolute bottom-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-[#2d261a]">
                PRO
              </div>
            </div>
            <h1 className="text-slate-900 dark:text-white text-xl font-bold font-display">
              Kwame Osei
            </h1>
            <p className="text-slate-500 dark:text-[#cbb790] text-sm mt-1">
              Membre depuis Mars 2023
            </p>
            <div className="mt-4 w-full pt-4 border-t border-slate-200 dark:border-[#493c22]/50 grid grid-cols-2 gap-2 text-center">
              <div>
                <span className="block text-lg font-bold text-slate-900 dark:text-white font-display">
                  124
                </span>
                <span className="text-xs text-slate-500 dark:text-[#cbb790]">
                  Lus
                </span>
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 dark:text-white font-display">
                  42
                </span>
                <span className="text-xs text-slate-500 dark:text-[#cbb790]">
                  Favoris
                </span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white shadow-md shadow-primary/20 transition-all"
              href="#"
            >
              <User className="fill-current" />
              <span className="font-medium">Info Personnelle</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#2d261a] hover:text-slate-900 dark:hover:text-white transition-all group"
              href="#"
            >
              <Library className="group-hover:text-primary transition-colors" />
              <span className="font-medium">Ma Bibliothèque</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#2d261a] hover:text-slate-900 dark:hover:text-white transition-all group"
              href="#"
            >
              <Wallet className="group-hover:text-primary transition-colors" />
              <span className="font-medium">Portefeuille</span>
              <span className="ml-auto bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                New
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#2d261a] hover:text-slate-900 dark:hover:text-white transition-all group"
              href="#"
            >
              <Settings className="group-hover:text-primary transition-colors" />
              <span className="font-medium">Préférences</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all mt-4"
              href="#"
            >
              <LogOut />
              <span className="font-medium">Déconnexion</span>
            </a>
          </nav>
        </aside>
        <main className="flex-1 flex flex-col gap-8 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                Bonjour, Kwame !
              </h1>
              <p className="text-slate-500 dark:text-[#cbb790] mt-2 text-lg">
                Prêt à continuer votre voyage narratif ?
              </p>
            </div>
            <div className="hidden sm:block">
              <button className="bg-[#2d261a] hover:bg-[#3d3324] border border-[#493c22] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Modifier le profil
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#2d261a] p-6 rounded-xl border border-slate-200 dark:border-[#493c22] flex flex-col gap-1 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Book className="h-16 w-16 text-primary" />
              </div>
              <p className="text-slate-500 dark:text-[#cbb790] text-sm font-medium">
                Livres lus ce mois
              </p>
              <p className="text-slate-900 dark:text-white text-3xl font-bold font-display">
                12
              </p>
              <div className="w-full bg-slate-100 dark:bg-[#493c22] h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full w-[65%]"
                ></div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#2d261a] p-6 rounded-xl border border-slate-200 dark:border-[#493c22] flex flex-col gap-1 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <History className="h-16 w-16 text-primary" />
              </div>
              <p className="text-slate-500 dark:text-[#cbb790] text-sm font-medium">
                Commentaires
              </p>
              <p className="text-slate-900 dark:text-white text-3xl font-bold font-display">
                45
              </p>
              <div className="flex items-center gap-1 mt-2 text-xs text-green-500 font-medium">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>+12% vs mois dernier</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d261a] to-[#231d10] p-6 rounded-xl border border-slate-200 dark:border-[#493c22] flex flex-col gap-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5"></div>
              <p className="text-slate-500 dark:text-[#cbb790] text-sm font-medium relative z-10">
                Badge actuel
              </p>
              <div className="flex items-center gap-3 mt-1 relative z-10">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <Rocket className="text-primary" />
                </div>
                <p className="text-slate-900 dark:text-white text-xl font-bold font-display">
                  Explorateur
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 relative z-10">
                5 livres pour le niveau suivant
              </p>
            </div>
          </div>
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <History className="text-primary" />
                Reprendre la lecture
              </h2>
              <a
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                href="#"
              >
                Voir tout
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#2d261a] rounded-xl overflow-hidden border border-slate-200 dark:border-[#493c22] flex shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div
                  className="w-24 h-full bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo5NICvMS4PJtkyWZgXXU_B7dAWEesqFZBwmitDIHbu1bbhDTZFoYEJ0bY9yzBYpuc19d824aW0J8ICNEPebiLGL-my7BjnXyETpgeBYtO_9VJlhNOVvVJmrxKuclU9lnTKFlwoRDbb5nnno7RcoeoOvyrq7lPmaIwmbpP002HosNcWkPKM-xPxupeygSU3rydFNhHutj3FWjuOtexKE-ZCUJDVWflS37o_sntI4kuiBly5wQ5WICd7n2kMXNKLewYoje8Mn7z1_XN")',
                  }}
                ></div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold text-primary tracking-wide uppercase">
                      Afro-Fantasy
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white font-display line-clamp-1 group-hover:text-primary transition-colors">
                      Les Gardiens du Nil
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#cbb790] mt-1">
                      Chapitre 14 / 28
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-slate-100 dark:bg-[#493c22] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-[50%]"></div>
                    </div>
                    <p className="text-[10px] text-right text-slate-400 dark:text-slate-500 mt-1">
                      50%
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#2d261a] rounded-xl overflow-hidden border border-slate-200 dark:border-[#493c22] flex shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div
                  className="w-24 h-full bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlQStffIPS71gw5XzBmrqzD-4lgUiBCoKR2KR4eMSx0WkY-5p1O9E_pchWKxlk2NxxtSgNPXcAsLlPVRDhp2hCUcLw_TBT64rC5XFHXRs3Nu_kAeUyIUIpQSCO-3hJf5m7eDdZJQYsDcvTW7EwluXk02U5mBmi-2zCFZcy-rV8py0zQXs385kl-FQlVyvCnFbOSOTa2JrP4I3xOPsPOlddZs7FVwj8ZR_MayIFA3mc7HqX8C00vsvXAgG3zTYVu_PPPn12yCYCPPUE")',
                  }}
                ></div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold text-primary tracking-wide uppercase">
                      Cyberpunk
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white font-display line-clamp-1 group-hover:text-primary transition-colors">
                      Lagos 2099
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#cbb790] mt-1">
                      Chapitre 3 / 45
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-slate-100 dark:bg-[#493c22] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-[8%]"></div>
                    </div>
                    <p className="text-[10px] text-right text-slate-400 dark:text-slate-500 mt-1">
                      8%
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#2d261a] rounded-xl overflow-hidden border border-slate-200 dark:border-[#493c22] flex shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div
                  className="w-24 h-full bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAwkyN-xiDSPLkNhlS_4MuuKcFOv0rs9hO3tljox4Du_893wpUzdEbuAqr8s8Va0u_cUcahDp0em3vGJZWeOpddh9IIoV3cYDaeJFF_CxSYEqz4SwZ8V24nXXdM4kAC5ikONtzg5uTzPH-Dzvnl0kHG66Xr3IEZUsNAcufLnJdgxzSBQO9MpJg4NqP3Ez5r3pnY3EKBYazGxFicc25Frkhi7SZhxkAuZefkZxVqvRpHy7YOT08bBuwIwAAkUo5eGOQkGE6yfGi-gSu")',
                  }}
                ></div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold text-primary tracking-wide uppercase">
                      Historique
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white font-display line-clamp-1 group-hover:text-primary transition-colors">
                      Terres Rouges
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#cbb790] mt-1">
                      Terminé
                    </p>
                  </div>
                  <div className="mt-3">
                    <button className="text-xs font-medium text-slate-900 dark:text-white bg-slate-100 dark:bg-[#493c22] px-3 py-1 rounded hover:bg-slate-200 dark:hover:bg-primary/20 transition-colors w-full">
                      Relire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#2d261a] p-6 rounded-xl border border-slate-200 dark:border-[#493c22]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Portefeuille AfriCoins
                </h3>
                <Wallet className="text-primary" />
              </div>
              <div className="bg-slate-900 dark:bg-[#231d10] rounded-xl p-5 mb-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-[#493c22] opacity-50 rotate-12">
                  <Bookmark className="w-24 h-24" />
                </div>
                <p className="text-slate-400 dark:text-[#cbb790] text-sm mb-1 relative z-10">
                  Solde Actuel
                </p>
                <p className="text-4xl font-bold text-white font-display tracking-tight relative z-10">
                  2,450 <span className="text-primary text-2xl">AC</span>
                </p>
              </div>
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Plus className="h-5 w-5" />
                  Recharger
                </button>
                <button className="flex-1 bg-transparent border border-slate-200 dark:border-[#493c22] text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-[#493c22] font-medium py-2.5 rounded-lg transition-colors">
                  Historique
                </button>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate-500 dark:text-[#cbb790]">
                  Dernières Transactions
                </p>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#231d10]/50 border border-transparent dark:border-[#493c22]/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500/10 p-1.5 rounded text-red-500">
                      <Minus className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        Achat: "Les Gardiens"
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        Auj, 14:30
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-red-500">- 50 AC</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#231d10]/50 border border-transparent dark:border-[#493c22]/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/10 p-1.5 rounded text-green-500">
                      <Plus className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        Rechargement
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        Hier, 09:15
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-green-500">+ 1000 AC</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#2d261a] p-6 rounded-xl border border-slate-200 dark:border-[#493c22]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Mes Informations
                </h3>
                <button className="text-primary text-sm font-medium hover:underline">
                  Modifier
                </button>
              </div>
              <form className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-500 dark:text-[#cbb790] uppercase tracking-wide">
                    Nom d'utilisateur
                  </label>
                  <div className="flex items-center bg-slate-50 dark:bg-[#231d10] border border-slate-200 dark:border-[#493c22] rounded-lg px-4 h-11">
                    <AtSign className="text-slate-400 h-5 w-5 mr-3" />
                    <input
                      className="bg-transparent border-none text-slate-900 dark:text-white text-sm w-full focus:ring-0 p-0"
                      readOnly
                      type="text"
                      value="KwameOsei"
                    />
                    <Lock className="text-slate-400 h-4 w-4" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-500 dark:text-[#cbb790] uppercase tracking-wide">
                    Email
                  </label>
                  <div className="flex items-center bg-slate-50 dark:bg-[#231d10] border border-slate-200 dark:border-[#493c22] rounded-lg px-4 h-11">
                    <Mail className="text-slate-400 h-5 w-5 mr-3" />
                    <input
                      className="bg-transparent border-none text-slate-900 dark:text-white text-sm w-full focus:ring-0 p-0"
                      type="email"
                      value="kwame.osei@example.com"
                    />
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-[#493c22]/50">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display mb-3">
                    Préférences de Lecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <label className="cursor-pointer">
                      <input
                        checked
                        className="peer sr-only"
                        type="checkbox"
                      />
                      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#231d10] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#493c22] peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none">
                        Afro-Futurism
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        checked
                        className="peer sr-only"
                        type="checkbox"
                      />
                      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#231d10] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#493c22] peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none">
                        Fantasy
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" type="checkbox" />
                      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#231d10] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#493c22] peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none">
                        Romance
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        checked
                        className="peer sr-only"
                        type="checkbox"
                      />
                      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#231d10] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#493c22] peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none">
                        Sci-Fi
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" type="checkbox" />
                      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#231d10] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#493c22] peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none">
                        Thriller
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </body>
</html>
