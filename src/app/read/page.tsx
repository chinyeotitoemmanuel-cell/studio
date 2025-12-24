import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Edit,
  Heart,
  MessageCircle,
  MoreVertical,
  Settings,
  ThumbsUp,
  Timer,
  BookCopy,
  FontSize,
  SkipBack,
  SkipForward,
  Bell,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReadPage() {
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
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors font-body"
                href="#"
              >
                Accueil
              </a>
              <a
                className="text-white text-sm font-bold border-b-2 border-primary py-4 font-body"
                href="#"
              >
                Bibliothèque
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors font-body"
                href="#"
              >
                Classements
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors font-body"
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
                className="bg-transparent border-none focus:ring-0 text-white placeholder:text-text-muted text-sm w-full h-full font-body italic"
                placeholder="Rechercher une oeuvre..."
              />
            </div>
            <div className="flex gap-3 items-center">
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
      <div className="sticky top-[64px] z-40 bg-white/95 backdrop-blur-md border-b border-surface-border shadow-sm">
        <div className="max-w-[1000px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 min-w-0">
            <button className="text-text-muted hover:text-text-main transition-colors">
              <ArrowLeft />
            </button>
            <div className="flex flex-col min-w-0">
              <h3 className="text-text-main font-bold font-display text-base leading-none truncate">L'Héritage des Étoiles</h3>
              <span className="text-primary text-xs font-body italic truncate">Chapitre 4 : La Cité d'Or</span>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 text-text-muted hover:text-text-main hover:bg-surface-light rounded-full transition-all" title="Précédent">
              <ChevronLeft />
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-light hover:bg-surface-border rounded-lg text-xs font-bold text-text-main transition-colors border border-surface-border">
                <FontSize className="h-4 w-4" />
                <span className="hidden sm:inline">Affichage</span>
              </button>
            </div>
            <button className="p-2 text-text-muted hover:text-text-main hover:bg-surface-light rounded-full transition-all" title="Suivant">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <main className="flex-1 w-full flex flex-col items-center bg-background-light">
        <article className="w-full max-w-[800px] px-6 py-10 md:py-16 bg-white shadow-xl shadow-stone-200/50 my-8 rounded-sm">
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-light border border-surface-border rounded-full mb-6">
              <span className="size-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-secondary text-[10px] uppercase font-bold tracking-widest font-body">Afro-Futurisme / Fantasy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-text-main mb-6 leading-tight font-display tracking-tight">
                Le Gardien du Temple
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-text-muted font-body italic">
              <span className="flex items-center gap-1"><Edit className="h-4 w-4" /> Par Kwame Osei</span>
              <span className="size-1 bg-surface-border rounded-full"></span>
              <span className="flex items-center gap-1"><Timer className="h-4 w-4" /> 12 min de lecture</span>
            </div>
          </header>
          <figure className="w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden mb-12 shadow-lg border border-surface-border group relative">
            <Image
              alt="Futuristic African temple environment"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpwaw6JhNxtvojilc_BP3xYtCOrBwPc-nEjpwusJK79ZHtUqgeAMOi1rRQdbGVhT6LRYXBXaabECIl3IpyLKiA5CzjmOFRLG2heOjKUqaYoVnXMi8Knk8c1jwjiPCIEedVsQwQC0Ibmw9jDm-hTxLbZEYCbURvKugW2ifWbNU2imEktxm47-WHXI2G0mM9Q8q_Y3sniXPgxv45kA4mKXtdePKp6BpWrvA7ijhyaas0Mgpe5vswAWb33dqOWirXrEPJ2t6LlhzLd8y"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
          </figure>
          <div className="prose prose-lg prose-stone max-w-none font-body text-text-main leading-loose md:text-xl">
            <p className="first-letter:text-6xl first-letter:font-display first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none text-text-main">
                Le vent soufflait sur les plaines de Zaria, portant avec lui l'odeur de la terre rouge et des orages électriques à venir. Depuis le sommet de la Tour du Conseil, Zahra observait les nuages de poussière qui s'accumulaient à l'horizon, obscurcissant les néons holographiques de la cité basse.
            </p>
            <p className="text-text-main">
                « Ils arrivent », murmura-t-elle, ajustant ses lunettes technomagiques. Les verres teintés affichèrent une série de runes lumineuses, analysant les fluctuations énergétiques de l'atmosphère. Ce n'était pas une tempête ordinaire. C'était le souffle des Anciens, une énergie brute et indomptée que l'on croyait disparue depuis l'Ère des Silences.
            </p>
            <figure className="my-10 border-l-4 border-secondary pl-6 italic bg-surface-light p-4 rounded-r-lg">
              <p className="text-text-muted font-serif">
                    "Lorsque le ciel se teinte d'améthyste, les gardiens doivent s'éveiller, car le sommeil de l'histoire touche à sa fin."
                    <br/>
                    <span className="text-sm not-italic text-primary mt-2 block font-sans">— Prophétie du Troisième Cycle</span>
              </p>
            </figure>
            <p className="text-text-main">
                Zahra se retourna vers la salle de commande. Les écrans flottaient dans la pénombre, projetant une lueur bleutée sur les visages inquiets de son équipe. Malik, son second, pianotait frénétiquement sur son interface tactile, tentant de stabiliser les boucliers énergétiques du secteur Nord.
            </p>
            <div className="my-12 relative w-full h-[400px] rounded-lg overflow-hidden border border-surface-border bg-surface-light">
              <Image alt="Zahra character design" fill className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqqpuUcoKDHW-XRjdG9F7DCSsryToQtQvtZQDFkXM992uVdaxWA1gKhtxM5vxlF6VvIx6D6uTFyh_eYjho-OposvXGqRhNIWnn17RGilR-E8HVP4A6rcZWvmFM6kGcc_1ztGSrwUN4icq7k8jU_x80JOUCrTTd7Tv8aoOb95QmxyzFKXKuYKXK-FL0rcj25BAhVd1xGE1BkWtjVKNqjP2inwygB-Any8x4_DsdpY34IcWhR1dNRgZ3wK9WVJOs3aNz9HrKx7aGOpPG"/>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent text-center text-xs text-text-muted font-body">Zahra, Gardienne du Secteur Nord</figcaption>
            </div>
            <p className="text-text-main">
                « Les relevés sont formels, Zahra », annonça Malik sans lever les yeux. « La signature thermique correspond à celle du Temple Oublié. Quelqu'un a brisé le sceau. »
            </p>
            <p className="text-text-main">
                Un silence lourd s'installa. Briser le sceau n'était pas seulement un crime contre le Conseil, c'était une invitation au chaos. Les légendes racontaient que le Temple abritait non seulement des artefacts de l'ancien monde, mais aussi une intelligence artificielle consciente, capable de réécrire la réalité elle-même.
            </p>
            <p className="text-text-main">
                Zahra serra les poings. Ses gants en nano-tissage crépitèrent doucement, réagissant à son adrénaline. « Préparez le vaisseau », ordonna-t-elle d'une voix calme mais ferme. « Nous partons immédiatement. Si le Gardien s'éveille, je veux être la première personne qu'il verra. »
            </p>
            <p className="text-text-main">
                Alors qu'elle se dirigeait vers la baie d'amarrage, les lumières de la ville semblèrent vaciller, comme si la cité elle-même retenait son souffle. L'aventure ne faisait que commencer, et dans l'ombre des gratte-ciels bio-organiques, quelque chose d'ancien ouvrait lentement les yeux.
            </p>
          </div>
          <div className="mt-12 text-center text-text-muted font-display italic text-2xl">
            ***
          </div>
          <div className="mt-16 bg-surface-light border border-surface-border p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-6 items-center">
            <div className="size-20 rounded-full bg-cover bg-center border-2 border-primary shrink-0 shadow-lg shadow-primary/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyHys3IVwHiGaRbW3tLytK6tuACb4CBA-HXbthdopm8BddXrWN45kodeTUmjQJZSla4VdsTZvxazEHAPawxBHrjqqXOxt0RsG84tRKtar_e6lYqZX3pisWoqOOpb7irD5zGyoAnIVNbE76UbRSuOO6HNBEyIu8IVaq0JHhUuuUdVmigwVeb0jPLk2RoPF0MymVIByl46WHtkgv1JyL40IdcNhzUtq6tvLsYOCAcDF8O0_o9mnEPGIEDgyD5sU4I3bjRJ_XcJXKv2FR")'}}></div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-text-main font-bold font-display text-xl mb-2">Note de l'auteur</h4>
              <p className="text-text-muted font-body text-sm leading-relaxed mb-4">
                    Merci d'avoir lu ce chapitre ! La tension monte... Que pensez-vous qu'ils vont trouver dans le Temple ? N'hésitez pas à laisser un commentaire, vos théories m'inspirent énormément pour la suite !
                </p>
              <button className="text-primary hover:text-text-main text-sm font-bold font-display uppercase tracking-wider transition-colors flex items-center justify-center md:justify-start gap-2">
                <Heart /> Soutenir l'auteur
                </button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4">
            <button className="group p-4 rounded-xl border border-surface-border bg-white hover:bg-surface-light transition-all flex flex-col items-start shadow-sm">
              <span className="text-text-muted text-xs uppercase font-bold mb-1 group-hover:text-primary transition-colors">Chapitre Précédent</span>
              <span className="text-text-main font-display font-bold text-lg leading-tight">Chapitre 3 : Le Signal</span>
            </button>
            <button className="group p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all flex flex-col items-end text-right shadow-sm">
              <span className="text-secondary text-xs uppercase font-bold mb-1">Chapitre Suivant</span>
              <span className="text-text-main font-display font-bold text-lg leading-tight">Chapitre 5 : L'Intrusion</span>
            </button>
          </div>
          <div className="mt-20 pt-10 border-t border-surface-border">
            <h3 className="text-2xl font-bold text-text-main font-display mb-8">Commentaires <span className="text-text-muted text-lg font-normal">(128)</span></h3>
            <div className="flex gap-4 mb-10">
              <div className="size-10 rounded-full bg-cover bg-center border border-surface-border shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL8qt8rzWIyXpE-BqJMLgU4ucOTRGH1WeqTaW47K6MyprZNMB6lQ5MNNFhQztp176xkFk0usIHq_vMrzy3sORHmWBI6dez9zn8M8amhAp4AttvI03oqqWOfuZU8kpemKWV8uDJr4d7le8QKbDBK4c9lNWfPllH8Z-0j5jCdatC0Kbhhlon_qp-FtdLWTRLAj6nQ9UhwiwiwD9M7ulrZsZ1W4-QCIa25AOeVBQOq4gnMU9FAELBP4Si3ilM9P93DTGxX11B6cDpwYEF")'}}></div>
              <div className="flex-1">
                <textarea className="w-full bg-surface-light border border-surface-border rounded-lg p-3 text-text-main text-sm focus:ring-1 focus:ring-primary focus:border-primary font-body placeholder:italic placeholder:text-text-muted resize-none h-24" placeholder="Partagez vos impressions sur ce chapitre..."></textarea>
                <div className="flex justify-end mt-2">
                  <button className="px-5 py-2 bg-primary hover:bg-text-main text-white text-sm font-bold rounded-lg transition-colors font-display shadow-md shadow-primary/20">
                            Publier
                        </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="size-10 rounded-full bg-cover bg-center border border-surface-border shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYuYDvDm91UEfAnVissfxiNRACGaW8xSJAflKnMVoMyIEJsvZyR7qPCQyqhZH9jy1RtYyYXhNhBQCes6QW5HmBNwsiMUwADxdrhaMJCNx6rq83_zgbRP40Tet4OurD-4g9wuN1bCdYEgBu_JOQz_IJmL-FJuuTQEFDUbsI4Rj4BECpSATiiSk5mBHnhNGZV5qWb7UrshWikihu3LQ9hxs90LbIH4gYf2MvDZl0TcEKimVdGHm9x2K2SAUsh_v4DWviwhQVv5GmwwYf")'}}></div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-text-main font-bold text-sm font-display">Nia Abara</span>
                    <span className="text-text-muted text-xs">Il y a 2 heures</span>
                  </div>
                  <p className="text-text-main text-sm font-body leading-relaxed">
                            L'ambiance de la "Tour du Conseil" est incroyable. J'adore comment tu décris la technologie qui réagit aux émotions de Zahra. Hâte de voir le Temple !
                        </p>
                  <div className="flex gap-4 mt-2">
                    <button className="flex items-center gap-1 text-text-muted hover:text-primary text-xs transition-colors">
                      <ThumbsUp className="h-4 w-4" /> 24
                    </button>
                    <button className="text-text-muted hover:text-text-main text-xs transition-colors">Répondre</button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-10 rounded-full bg-cover bg-center border border-surface-border shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmAqB-R2ecPbzR3kUkEAenbPYNlq3pAbIFIvF19dYM4fKUFabMYIAgZDI9Ek3e-aSCouPKEIo0UIAC7ul2j4jWCMY2aOTakmRQKsCMSSb7pdV1jK2ZO4Bs9hO6WhZ1YKmoos1oVLW3xCvInACp98Pc2LFHmV4lgyVouQ9uo0eQ7M4D0l4RRhoIH23F9OPg3HFHJXWh0FGIL6LWK8X4POtAHvCCMhmPyhL_yQVSL3xgj91HOwPPuzaHksUdooxlmLdTIpdWDrhOHETh")'}}></div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-text-main font-bold text-sm font-display">Kofi Mensah</span>
                    <span className="text-text-muted text-xs">Il y a 5 heures</span>
                  </div>
                  <p className="text-text-main text-sm font-body leading-relaxed">
                            Est-ce que Malik est digne de confiance ? J'ai un mauvais pressentiment à son sujet... 🤔
                        </p>
                  <div className="flex gap-4 mt-2">
                    <button className="flex items-center gap-1 text-text-muted hover:text-primary text-xs transition-colors">
                      <ThumbsUp className="h-4 w-4" /> 15
                    </button>
                    <button className="text-text-muted hover:text-text-main text-xs transition-colors">Répondre</button>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 mt-8 border border-surface-border text-text-muted hover:text-text-main hover:bg-surface-light transition-colors text-sm font-bold uppercase tracking-wider rounded-lg font-display">
                Charger plus de commentaires
            </button>
          </div>
        </article>
      </main>
      <footer class="border-t border-surface-border bg-white mt-auto">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 py-12">
          <div class="flex flex-col md:flex-row justify-between gap-8">
            <div class="flex flex-col gap-4 max-w-sm">
              <div class="flex items-center gap-2 text-text-main">
                <span class="material-symbols-outlined text-primary">auto_stories</span>
                <span class="text-lg font-bold font-display">AfriStory</span>
              </div>
              <p class="text-text-muted text-sm font-body">Empowering the next generation of African visual storytellers. Join the movement.</p>
            </div>
            <div class="flex gap-8 md:gap-16">
              <div class="flex flex-col gap-3">
                <h4 class="text-text-main font-bold text-sm font-display">Communauté</h4>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">Règles</a>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">Classements</a>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">Ateliers</a>
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-text-main font-bold text-sm font-display">Plateforme</h4>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">AfriStory Pro</a>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">À Propos</a>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">Carrières</a>
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-text-main font-bold text-sm font-display">Légal</h4>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">Confidentialité</a>
                <a class="text-text-muted text-sm hover:text-primary font-body" href="#">Conditions</a>
              </div>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-surface-border text-center text-text-muted text-sm font-body">
            © 2023 AfriStory. Tous droits réservés.
          </div>
        </div>
      </footer>
    

</body></html>