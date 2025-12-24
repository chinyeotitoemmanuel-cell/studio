
import {
  Award,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  Info,
  Library,
  Lock,
  MessageSquare,
  Play,
  Search,
  Star,
  UserPlus,
  Users,
  Verified,
  Bell,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";

export default function WorkshopsPage() {
  return (
    <>
      <header className="w-full border-b border-surface-border bg-background-dark sticky top-0 z-50">
        <div className="px-4 md:px-10 py-3 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <a
              className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
              href="#"
            >
              <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <BookOpen />
              </div>
              <h2 className="text-white text-xl font-bold font-display tracking-tight">
                AfriStory <span className="text-primary font-normal">Draft</span>
              </h2>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors"
                href="#"
              >
                Accueil
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors"
                href="#"
              >
                Classements
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors"
                href="#"
              >
                Bibliothèque
              </a>
              <a
                className="text-white text-sm font-bold border-b-2 border-primary py-4"
                href="#"
              >
                Ateliers
              </a>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-6 items-center">
            <div className="hidden md:flex w-full max-w-xs h-10 bg-surface-border/50 rounded-lg items-center px-3 border border-transparent focus-within:border-primary/50 transition-colors">
              <Search className="text-text-muted" />
              <input
                className="bg-transparent border-none focus:ring-0 text-white placeholder:text-text-muted text-sm w-full h-full font-body"
                placeholder="Rechercher un atelier..."
              />
            </div>
            <div className="flex gap-3 items-center">
              <button className="hidden sm:flex h-10 px-5 bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold rounded-lg items-center justify-center transition-colors">
                Connexion
              </button>
              <button className="size-10 flex items-center justify-center rounded-full hover:bg-surface-border text-white transition-colors relative">
                <Bell />
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
              </button>
              <div
                className="size-10 rounded-full bg-cover bg-center border-2 border-surface-border cursor-pointer"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL8qt8rzWIyXpE-BqJMLgU4ucOTRGH1WeqTaW47K6MyprZNMB6lQ5MNNFhQztp176xkFk0usIHq_vMrzy3sORHmWBI6dez9zn8M8amhAp4AttvI03oqqWOfuZU8kpemKWV8uDJr4d7le8QKbDBK4c9lNWfPllH8Z-0j5jCdatC0Kbhhlon_qp-FtdLWTRLAj6nQ9UhwiwiwD9M7ulrZsZ1W4-QCIa25AOeVBQOq4gnMU9FAELBP4Si3ilM9P93DTGxX11B6cDpwYEF")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="w-full px-4 md:px-10 py-6 md:py-10">
          <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden flex flex-col justify-end p-6 md:p-12 group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(35, 29, 16, 1) 0%, rgba(35, 29, 16, 0.7) 50%, rgba(35, 29, 16, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzpwaw6JhNxtvojilc_BP3xYtCOrBwPc-nEjpwusJK79ZHtUqgeAMOi1rRQdbGVhT6LRYXBXaabECIl3IpyLKiA5CzjmOFRLG2heOjKUqaYoVnXMi8Knk8c1jwjiPCIEedVsQwQC0Ibmw9jDm-hTxLbZEYCbURvKugW2ifWbNU2imEktxm47-WHXI2G0mM9Q8q_Y3sniXPgxv45kA4mKXtdePKp6BpWrvA7ijhyaas0Mgpe5vswAWb33dqOWirXrEPJ2t6LlhzLd8y")',
              }}
            ></div>
            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Prochainement
                </span>
                <span className="text-white/80 text-sm font-medium">
                  15 Octobre 2023 - 18:00 GMT
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight font-display tracking-tight">
                Masterclass <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-400">
                  Storytelling Graphique
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light max-w-xl leading-relaxed">
                Apprenez les secrets de la narration visuelle avec la légende
                AfriStory Pro, <strong>Kwame Osei</strong>. De l'esquisse à la
                planche finale.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="h-12 px-8 bg-primary hover:bg-white hover:text-background-dark text-background-dark text-base font-bold rounded-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(242,166,13,0.3)]">
                  <UserPlus />
                  S'inscrire Gratuitement
                </button>
                <button className="h-12 px-6 bg-surface-dark hover:bg-surface-border text-white border border-surface-border text-base font-medium rounded-lg flex items-center gap-2 transition-colors">
                  <Info />
                  Détails du Programme
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <GraduationCap className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  45+
                </h3>
                <p className="text-text-muted text-sm">
                  Masterclasses disponibles
                </p>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Users className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  12k
                </h3>
                <p className="text-text-muted text-sm">Apprenants actifs</p>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Verified className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Pro
                </h3>
                <p className="text-text-muted text-sm">Mentors certifiés</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 py-10">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white flex items-center gap-3">
              <Calendar className="text-secondary h-10 w-10" />
              Programme à Venir
            </h2>
            <p className="text-text-muted leading-relaxed max-w-2xl">
              Développez vos compétences avec nos experts. Des sessions
              interactives pour tous les niveaux, du dessin traditionnel à la
              conception 3D.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="rounded-xl bg-surface-dark overflow-hidden border border-surface-border flex flex-col md:flex-row group hover:border-secondary transition-colors h-full">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqqpuUcoKDHW-XRjdG9F7DCSsryToQtQvtZQDFkXM992uVdaxWA1gKhtxM5vxlF6VvIx6D6uTFyh_eYjho-OposvXGqRhNIWnn17RGilR-E8HVP4A6rcZWvmFM6kGcc_1ztGSrwUN4icq7k8jU_x80JOUCrTTd7Tv8aoOb95QmxyzFKXKuYKXK-FL0rcj25BAhVd1xGE1BkWtjVKNqjP2inwygB-Any8x4_DsdpY34IcWhR1dNRgZ3wK9WVJOs3aNz9HrKx7aGOpPG")',
                    }}
                  ></div>
                  <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-surface-border">
                    <div className="text-center">
                      <span className="block text-secondary font-bold text-lg leading-none">
                        22
                      </span>
                      <span className="block text-text-muted text-xs uppercase">
                        Oct
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs font-bold uppercase rounded">
                      Intermédiaire
                    </span>
                    <span className="text-text-muted text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 2h 30m
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-secondary transition-colors">
                    Character Design : Fusion Tradition &amp; Futurisme
                  </h3>
                  <p className="text-text-muted text-base mb-6 line-clamp-2">
                    Comment intégrer des motifs ancestraux dans des designs de
                    personnages sci-fi sans tomber dans le cliché. Une approche
                    respectueuse et innovante.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover bg-center border border-surface-border"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyHys3IVwHiGaRbW3tLytK6tuACb4CBA-HXbthdopm8BddXrWN45kodeTUmjQJZSla4VdsTZvxazEHAPawxBHrjqqXOxt0RsG84tRKtar_e6lYqZX3pisWoqOOpb7irD5zGyoAnIVNbE76UbRSuOO6HNBEyIu8IVaq0JHhUuuUdVmigwVeb0jPLk2RoPF0MymVIByl46WHtkgv1JyL40IdcNhzUtq6tvLsYOCAcDF8O0_o9mnEPGIEDgyD5sU4I3bjRJ_XcJXKv2FR")',
                        }}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">
                          Zarah Moyo
                        </span>
                        <span className="text-primary text-xs">
                          Concept Artist @AfriPro
                        </span>
                      </div>
                    </div>
                    <button className="px-5 py-2.5 bg-white text-background-dark text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-dark overflow-hidden border border-surface-border flex flex-col md:flex-row group hover:border-secondary transition-colors h-full">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5vwEGVxMzShq0Ln-9YTiWEYe9YjF-tjOqnqKYgUSNwaDbE2BbV6ef5ruBgSXcB7pvDeITukT3bZbNsgF5tYh5ZqBW8tROTnSZFszmvhBbp9Mko-x17uq_KX6-vxxoeOSn7_bGXOROsELKtXGBbtOHoN_PhHRSGMCkn2Vn05MDDjpUFuqoJwPWRQmI5S4k6zYbZEvzoJY64BJD5klyfu-L2057YE27Eas-0FRRVQP3WwHAEEPjeoMv27enrZW-PqgbOEHmC8EP8yVT")',
                    }}
                  ></div>
                  <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-surface-border">
                    <div className="text-center">
                      <span className="block text-secondary font-bold text-lg leading-none">
                        28
                      </span>
                      <span className="block text-text-muted text-xs uppercase">
                        Oct
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs font-bold uppercase rounded">
                      Débutant
                    </span>
                    <span className="text-text-muted text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 1h 45m
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-secondary transition-colors">
                    Environnements Afro-Futuristes : Les Bases
                  </h3>
                  <p className="text-text-muted text-base mb-6 line-clamp-2">
                    Créer des mondes immersifs en utilisant la perspective
                    atmosphérique et l'architecture néo-vernaculaire.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover bg-center border border-surface-border"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmo4YRqd3ouZKU9oj2oiMDNN5jOFVBG9qxVQjkQE7ysA-cFKbDkKcmQxj0mLhNnhbMtEI17UlUERpx9dZQnv_8PtYdxyZ9FlG49YeeG1Aqb0v_nLV0wkVr4W5k7FOqrvEomM2y5PVwtRxkBFxEiglaZueVwSvyiCOL8J4znvw_Q-QMiyrkV7-6zzWL97h_Q4VpvRUUEnK7HK-1rmgfpvclltGlxKuDi9Z-82lSn2JCAs5tJE9FKJBMeEl7mPSI65IcMIWeAgUAYs3p")',
                        }}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">
                          Malik Diop
                        </span>
                        <span className="text-primary text-xs">
                          Env Artist @Ubisoft
                        </span>
                      </div>
                    </div>
                    <button className="px-5 py-2.5 bg-surface-border text-white border border-surface-border text-sm font-bold rounded-lg hover:bg-surface-border/80 transition-colors">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-white font-display mb-4 flex items-center gap-2">
                  <Award className="text-primary" />
                  Mentors du Mois
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <div
                      className="size-12 rounded-full bg-cover bg-center border border-surface-border"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYuYDvDm91UEfAnVissfxiNRACGaW8xSJAflKnMVoMyIEJsvZyR7qPCQyqhZH9jy1RtYyYXhNhBQCes6QW5HmBNwsiMUwADxdrhaMJCNx6rq83_zgbRP40Tet4OurD-4g9wuN1bCdYEgBu_JOQz_IJmL-FJuuTQEFDUbsI4Rj4BECpSATiiSk5mBHnhNGZV5qWb7UrshWikihu3LQ9hxs90LbIH4gYf2MvDZl0TcEKimVdGHm9x2K2SAUsh_v4DWviwhQVv5GmwwYf")',
                      }}
                    ></div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Nia Abara
                      </h4>
                      <p className="text-text-muted text-xs">
                        Spécialité: Comics &amp; Webtoons
                      </p>
                      <div className="flex text-primary text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <div
                      className="size-12 rounded-full bg-cover bg-center border border-surface-border"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmAqB-R2ecPbzR3kUkEAenbPYNlq3pAbIFIvF19dYM4fKUFabMYIAgZDI9Ek3e-aSCouPKEIo0UIAC7ul2j4jWCMY2aOTakmRQKsCMSSb7pdV1jK2ZO4Bs9hO6WhZ1YKmoos1oVLW3xCvInACp98Pc2LFHmV4lgyVouQ9uo0eQ7M4D0l4RRhoIH23F9OPg3HFHJXWh0FGIL6LWK8X4POtAHvCCMhmPyhL_yQVSL3xgj91HOwPPuzaHksUdooxlmLdTIpdWDrhOHETh")',
                      }}
                    ></div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Kofi Mensah
                      </h4>
                      <p className="text-text-muted text-xs">
                        Spécialité: 3D Modeling
                      </p>
                      <div className="flex text-primary text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <div
                      className="size-12 rounded-full bg-cover bg-center border border-surface-border"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMdCle23Vdi2IqNR-xltbd0tmyrVNPGPqHtLznkDUN6iBEPSZOGJhjQHvUonB0SsSvqK4_k7HYDFU1F1UKmrIr6FTeVqUjwTILf1TjDEOi8ba-pSD3w_KCgDxVfKM-e1yNRrubGsO7OHwacnWm8XeV4dro6Wr7WQefSmHmJQIL8EO69aB4vfIw4ihSvxNBZPU3LX_soFMnK7yNRPZ8O22DZUBGaL4RVN_XqJDWjQiVKJsAS4LRGHn4HjwE9P7LFaHqo-cLLY6IB_qd")',
                      }}
                    ></div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Amina Diallo
                      </h4>
                      <p className="text-text-muted text-xs">
                        Spécialité: Animation 2D
                      </p>
                      <div className="flex text-primary text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 py-3 border border-surface-border text-white hover:bg-surface-border rounded-lg text-sm font-bold transition-colors">
                  Devenir Mentor (Pro)
                </button>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 border border-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Besoin d'aide ?
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Rejoignez le salon Discord dédié aux étudiants pour poser vos
                  questions.
                </p>
                <button className="w-full py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                  <MessageSquare />
                  Rejoindre la communauté
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 py-10 bg-surface-dark/30 border-y border-surface-border">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                Replays Récents
              </h2>
              <p className="text-text-muted text-sm">
                Accédez aux enregistrements des masterclasses passées.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-surface-border rounded-lg hover:bg-surface-border text-white transition-colors">
                <ChevronLeft />
              </button>
              <button className="p-2 border border-surface-border rounded-lg hover:bg-surface-border text-white transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden group cursor-pointer hover:border-secondary transition-colors">
              <div
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDogX7hfPE9rvZGPDNlTicXbWIxOzgoKTrWBxCyNYLh__yNrqZ1hqumM1n24P7CTQTuaPUY81A4JmXVCUTHCrdnRh28bHjVpUcCM8J_OSYrgKhNU8-3hpboUkBtxRAnG0711bNsk8FKBXFB6uLqA8CKtb_CMFHPETsvzjkH920ULBqJ89EJxjD8S3YI36Av2nPL31rVmSsf2_JMst1rjro0wEMYdLChbQk5jPZutA7r7I_T7qqlsiTbdlVkpF7b9-a-V-9Sp-qlMD2i")',
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
                  1:45:20
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-white font-bold text-base mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
                  Colorisation Numérique Avancée
                </h4>
                <p className="text-text-muted text-xs mb-3">
                  Par Samuel Okafor
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    Technique
                  </span>
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    Couleur
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden group cursor-pointer hover:border-secondary transition-colors">
              <div
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAC_4TsDwu4JFrM9Q6U3S1AECj7TQdsV4zipaWzfgM8S2xl3Bq1ek8rjCO4Y8jV22hs0XAIMSh8iqDcu4tLi7UPB3HEWLgTQWHzKjE9ZHVv-QZhQGMRytCbSofOZaHKpNl9OB6Ctio5b7mpknIPvDhpZ5oqtqv2AAscgu_i2Oe1dwHmvDBZ22mBTfqcPUKNgw6BieYYeqa4wVRzz2di6ymQDFs6GcG-pIZc09Ea9X3y63Pl2Gya3k9WVbTG1Rnv3ZWIDownCVQ3dhc_")',
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
                  58:12
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-white font-bold text-base mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
                  Anatomie Stylisée
                </h4>
                <p className="text-text-muted text-xs mb-3">Par Sarah Keita</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    Dessin
                  </span>
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    Débutant
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden group cursor-pointer hover:border-secondary transition-colors">
              <div
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2HSo2HVD9hde9b4cgMMosxyOqi1mMI-opq0hv74FTI5yJ5hFxe1TNroShxtN5etMker6rNfj4vhgx85TkVdyL_VC05mGaxecCfWhoBFbLgMEsVM-RQBX-U3ZBCJG2YwSOHLQ_cs930jIqnMMKo7XfXuSjMU5l7UMLO2UNFxdZzJVc1u4D9G4dCupfc-SA083ATPPS6a065SBZT7_5K0o2LmnlGhxgssiQ-GmeR73AcGxJPQWsYVTonWbza703-h-zQO62CM0pbzHM")',
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
                  2:10:05
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-white font-bold text-base mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
                  Blender pour les Artistes 2D
                </h4>
                <p className="text-text-muted text-xs mb-3">
                  Par David Ngannou
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    3D
                  </span>
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    Outils
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden group cursor-pointer hover:border-secondary transition-colors">
              <div
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM4wysVdXvZmnyX9LZg1pK_GckgM4Z0Jk2QnW-BamD1n3MEF9ge0idw5Y9wGBg3MnMJNFAjHF9jATaOb18C5db-WMgLzfEZ8ifz6ZtcX_I2r62ZtQcidWvqzOXARQsTZTAq9NyYfH-X1kNoUuwDrTK1fiyKC9YUwrXj62IADbSeLbRFgyD_Cxr_XNilzMKRd8fzqqf6Nlc80Y4UmcdddWciNOlF9aDUATX3GVkX8j4pJJBbxbj3ycIn4Y5oY_y7_-DF6cQxqbEyR-9")',
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lock className="text-white" />
                  </div>
                </div>
                <span className="absolute top-2 right-2 px-2 py-0.5 bg-primary text-background-dark text-[10px] font-bold rounded">
                  PRO
                </span>
              </div>
              <div className="p-4 opacity-75">
                <h4 className="text-white font-bold text-base mb-1 line-clamp-1">
                  Marketing pour Artistes
                </h4>
                <p className="text-text-muted text-xs mb-3">
                  Par Équipe AfriStory Pro
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-surface-border rounded text-[10px] text-white">
                    Carrière
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background-dark transition-colors text-sm font-bold rounded-lg flex items-center gap-2">
              <Library />
              Accéder à la bibliothèque complète
            </button>
          </div>
        </div>
        <div className="px-4 md:px-10 py-10 mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-display text-white">
              Parcours d'Apprentissage
            </h2>
            <a
              className="text-primary text-sm font-bold hover:underline"
              href="#"
            >
              Voir tous les parcours
            </a>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x">
            <div className="min-w-[280px] snap-start bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-text-muted transition-colors cursor-pointer group flex flex-col">
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBghqRSpPWSnwgmRXsfOUQNdWN4Q95nQdi-LRqRJxKCG8PqegVv67BsPdH6hW9LEkQPknOYhxWO2_54FS0XV7dJY5AHiwJCUwEHDkybIEjsa7UMMRR7jF1wGT7IFgBnzUYEmTJccI0F_AeD3khDeNYmu2V8NRjjGI_uUryNcv5dxc74Ur0Ocv3tkIobyS8K2iJV5Y_66rOi9IR0biI9oNNEHvQNFpdEm_zIyeiD6vA9zegyTuA2YCuTEpXD2XZXxkYRRsVRjc_lGgKz")',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
                <div className="absolute bottom-2 left-4">
                  <span className="px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded uppercase">
                    Populaire
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                  Devenir Auteur de Comics
                </h3>
                <p className="text-text-muted text-xs mb-4 line-clamp-3">
                  Un cursus complet de 12 semaines pour créer votre première
                  bande dessinée.
                </p>
                <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center justify-between">
                  <span className="text-white text-xs font-bold">
                    12 Modules
                  </span>
                  <ArrowRight className="text-primary h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="min-w-[280px] snap-start bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-text-muted transition-colors cursor-pointer group flex flex-col">
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXkFtLhjAmdhNAWaUVQY8eUReAr6lhFza-r5iniKS_tdq1hVSeQYO82Di6uXu8PuN_kkuvy3J1XJGbu5S_msUmYQdsTcWCcRue2IyCtihc6f4SI0T-rjdWspmE_6I9oL0di8ETwgi1af7MMaXyllCfQ5UY5E6iy7WfO5lt8KlsUqIzoOARdE18KxuSA1VBanPe6cyi9lYOKxZP29eRdjok6wUiF0zWrztraXCpOO8UTICtN3SP-_cYOA3D3e_X6-txP02xUUHhYdmw")',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                  Digital Painting Mastery
                </h3>
                <p className="text-text-muted text-xs mb-4 line-clamp-3">
                  Maîtrisez Photoshop et Procreate pour des illustrations
                  professionnelles.
                </p>
                <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center justify-between">
                  <span className="text-white text-xs font-bold">8 Modules</span>
                  <ArrowRight className="text-primary h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="min-w-[280px] snap-start bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-text-muted transition-colors cursor-pointer group flex flex-col">
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA87y2E0Oa5ooUNbJ_ZRWH9d1wFAS1FjLz6vfJpasvyOe7P119Lo50qHMW_DpEKufAklAc8m-SFa6rwrfIyrkavVB-3nsri6Twre0jQKOL2SMuP6xW8jdzVJuhnEKPkpOwM6Z4q4Kht815tEPONWASAls-v5h8bdQY1ko5lxExC4Ki4Ezjw4Da_sZpHmmI29CM5Uc0XJDT7NIZVNn5Wtay5I_TEQgTG180_ac5mWezpl41Ss1bRn-17mJ2waoQmAFD15RCiBfVFKdOV")',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
                <div className="absolute bottom-2 left-4">
                  <span className="px-2 py-1 bg-secondary text-white text-[10px] font-bold rounded uppercase">
                    Nouveau
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                  Initiation à l'Animation 3D
                </h3>
                <p className="text-text-muted text-xs mb-4 line-clamp-3">
                  Découvrez les fondamentaux du mouvement et du rigging.
                </p>
                <div className="mt-auto pt-4 border-t border-surface-border/50 flex items-center justify-between">
                  <span className="text-white text-xs font-bold">
                    10 Modules
                  </span>
                  <ArrowRight className="text-primary h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-surface-border bg-surface-dark mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2 text-white">
                <BookOpen className="text-primary" />
                <span className="text-lg font-bold font-display">
                  AfriStory
                </span>
              </div>
              <p className="text-text-muted text-sm">
                Empowering the next generation of African visual storytellers.
                Join the movement.
              </p>
            </div>
            <div className="flex gap-8 md:gap-16">
              <div className="flex flex-col gap-3">
                <h4 className="text-white font-bold text-sm">Communauté</h4>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  Règles
                </a>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  Classements
                </a>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  Ateliers
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-white font-bold text-sm">Plateforme</h4>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  AfriStory Pro
                </a>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  À Propos
                </a>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  Carrières
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-white font-bold text-sm">Légal</h4>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  Confidentialité
                </a>
                <a
                  className="text-text-muted text-sm hover:text-primary"
                  href="#"
                >
                  Conditions
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-surface-border text-center text-text-muted text-sm">
            © 2023 AfriStory. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
}
