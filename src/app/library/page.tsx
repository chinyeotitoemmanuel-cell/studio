
import {
  ArrowRight,
  Bell,
  BookOpen,
  Filter,
  Heart,
  MoreVertical,
  Play,
  PlusCircle,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  BookCopy,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Header() {
  return (
     <header className="w-full border-b border-surface-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="px-4 md:px-10 py-3 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
                <a className="flex items-center gap-3 text-text-main hover:opacity-80 transition-opacity" href="#">
                    <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                        <BookOpen />
                    </div>
                    <h2 className="text-text-main text-xl font-bold font-display tracking-tight">AfriStory</h2>
                </a>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a className="text-text-muted hover:text-primary transition-colors" href="#">Découvrir</a>
                    <a className="text-primary font-bold" href="#">Ma Bibliothèque</a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#">Auteurs</a>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <button className="text-text-muted hover:text-primary transition-colors md:hidden">
                    <Search />
                </button>
                <div className="hidden md:flex text-right flex-col mr-2">
                    <span className="text-xs text-text-muted font-body">Lecteur</span>
                    <span className="text-sm font-bold font-display text-text-main">Kwame Osei</span>
                </div>
                <div className="size-10 rounded-full bg-cover bg-center border-2 border-surface-border shadow-sm cursor-pointer" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL8qt8rzWIyXpE-BqJMLgU4ucOTRGH1WeqTaW47K6MyprZNMB6lQ5MNNFhQztp176xkFk0usIHq_vMrzy3sORHmWBI6dez9zn8M8amhAp4AttvI03oqqWOfuZU8kpemKWV8uDJr4d7le8QKbDBK4c9lNWfPllH8Z-0j5jCdatC0Kbhhlon_qp-FtdLWTRLAj6nQ9UhwiwiwD9M7ulrZsZ1W4-QCIa25AOeVBQOq4gnMU9FAELBP4Si3ilM9P93DTGxX11B6cDpwYEF")'}}></div>
            </div>
        </div>
    </header>
  )
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
                        <p className="text-text-muted text-sm font-body">Empowering the next generation of African visual storytellers. Join the movement.</p>
                    </div>
                    <div className="flex gap-8 md:gap-16">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-text-main font-bold text-sm font-display">Communauté</h4>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">Règles</a>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">Classements</a>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">Ateliers</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-text-main font-bold text-sm font-display">Plateforme</h4>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">AfriStory Pro</a>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">À Propos</a>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">Carrières</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-text-main font-bold text-sm font-display">Légal</h4>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">Confidentialité</a>
                            <a className="text-text-muted text-sm hover:text-primary font-body" href="#">Conditions</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-surface-border text-center text-text-muted text-sm font-body">
                    © 2023 AfriStory. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}

export default function LibraryPage() {
  const libraryItems = [
    {
      title: "L'Aube des Masques",
      author: 'Amara Diop',
      progress: 65,
      type: 'in-progress',
      cover: {
        from: 'from-purple-900',
        via: 'via-indigo-900',
        to: 'to-slate-900',
        title: "L'Aube des Masques",
        subtitle: 'Tome 1',
      },
    },
    {
      title: 'Chroniques du Sahel',
      author: "Fatou N'Diaye",
      progress: 15,
      type: 'in-progress',
      cover: {
        from: 'from-stone-800',
        to: 'to-stone-600',
        icon: <Sparkles className="text-primary/50" />,
        title: 'Chroniques du Sahel',
      },
    },
    {
      title: 'Sunjata Reborn',
      author: 'Collectif Yelen',
      progress: 0,
      type: 'new',
      cover: {
        from: 'from-primary',
        to: 'to-orange-600',
        title: 'Sunjata Reborn',
        isNew: true,
      },
    },
    {
      title: "Les Larmes d'Or",
      author: 'Kofi Mensah',
      progress: 88,
      type: 'pro',
      cover: {
        image:
          'https://images.unsplash.com/photo-1614726365723-49cfae9e09cd?q=80&w=300&auto=format&fit=crop',
        isPro: true,
        title: "Les Larmes d'Or",
      },
    },
    {
      title: 'Neo-Lagos Confidential',
      author: 'Chidi Okeke',
      progress: 0,
      type: 'favorite',
      cover: {
        from: 'from-teal-800',
        to: 'to-teal-950',
        title: 'Neo-Lagos Confidential',
        isFavorite: true,
      },
    },
  ];

  return (
    <div className="bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
      <Header />
      <main className="flex-1 w-full bg-background-light py-8 px-4 md:py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-main font-display mb-2">Ma Bibliothèque</h1>
              <p className="text-text-muted font-body text-sm md:text-base max-w-lg">
                Gérez votre collection personnelle, suivez vos lectures et retrouvez vos coups de cœur.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted h-5 w-5" />
                <Input
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-surface-border bg-white text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-shadow shadow-sm"
                  placeholder="Rechercher dans votre bibliothèque..."
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-surface-border shadow-sm p-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 md:border-b-0 border-b border-surface-border mb-4 md:mb-4 scrollbar-hide">
              <Button variant="default" className="px-4 py-1.5 rounded-full bg-text-main text-white text-sm font-bold whitespace-nowrap shadow-sm transition-transform hover:scale-105 h-auto">Tout voir</Button>
              <Button variant="ghost" className="px-4 py-1.5 rounded-full bg-surface-light border border-transparent hover:border-surface-border text-text-muted hover:text-text-main text-sm font-medium whitespace-nowrap transition-colors h-auto">Favoris</Button>
              <Button variant="ghost" className="px-4 py-1.5 rounded-full bg-surface-light border border-transparent hover:border-surface-border text-text-muted hover:text-text-main text-sm font-medium whitespace-nowrap transition-colors h-auto">Abonnements</Button>
              <Button variant="ghost" className="px-4 py-1.5 rounded-full bg-surface-light border border-transparent hover:border-surface-border text-text-muted hover:text-text-main text-sm font-medium whitespace-nowrap transition-colors h-auto">Achetés</Button>
              <Button variant="ghost" className="px-4 py-1.5 rounded-full bg-surface-light border border-transparent hover:border-surface-border text-text-muted hover:text-text-main text-sm font-medium whitespace-nowrap transition-colors h-auto">AfriStory Pro</Button>
            </div>
            <div className="h-px bg-surface-border w-full hidden md:block mb-4"></div>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* ... filter selects */}
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto border-t md:border-t-0 border-surface-border pt-4 md:pt-0 mt-2 md:mt-0">
                {/* ... sort select */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
            {libraryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`relative aspect-[2/3] rounded-lg shadow-md mb-4 overflow-hidden border border-surface-border group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 ${
                    item.cover.image ? 'bg-white' : `bg-gradient-to-br ${item.cover.from} ${item.cover.via || ''} ${item.cover.to}`
                  }`}
                >
                  {item.cover.image ? (
                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: `url(${item.cover.image})`}}></div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                     {item.cover.icon &&  <div className="size-12 border-2 border-primary/50 rounded-full mb-2 flex items-center justify-center">
                        {item.cover.icon}
                      </div>}
                      <h3 className="text-white font-display font-bold text-xl leading-tight mb-1">
                        {item.cover.title}
                      </h3>
                      {item.cover.subtitle && (
                        <span className="text-indigo-200 text-xs font-body italic">
                          {item.cover.subtitle}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="icon"
                      className="bg-white text-text-main rounded-full h-12 w-12 shadow-lg hover:scale-110 transition-transform"
                    >
                      {item.progress > 0 ? <Play fill="currentColor"/> : <BookCopy />}
                    </Button>
                  </div>

                  {item.cover.isNew && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded shadow-sm text-text-main uppercase tracking-wide">
                      Nouveau
                    </div>
                  )}
                   {item.cover.isPro && (
                     <div className="absolute top-2 left-2 bg-black text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/30 flex items-center gap-1">
                        <Star className="w-3 h-3"/> PRO
                    </div>
                  )}
                   {item.cover.isFavorite && (
                    <div className="absolute top-2 right-2 text-white bg-red-500/20 p-1 rounded-full backdrop-blur-sm">
                        <Heart className="text-red-500 h-4 w-4" fill="currentColor"/>
                    </div>
                  )}


                  {item.progress > 0 && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold font-display text-text-main truncate group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-text-muted hover:text-secondary">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-text-muted mb-2">{item.author}</p>
                  {item.progress > 0 ? (
                     <span className="inline-flex items-center text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{item.progress}% LU</span>
                  ) : (
                    <span className="inline-flex items-center text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">À COMMENCER</span>
                  )}
                </div>
              </div>
            ))}
             <div className="group cursor-pointer">
                <div className="relative aspect-[2/3] bg-surface-light border border-dashed border-text-muted/30 rounded-lg mb-4 overflow-hidden flex flex-col items-center justify-center hover:bg-surface-border transition-colors">
                    <PlusCircle className="text-4xl text-text-muted/50 mb-2" />
                    <p className="text-xs font-bold text-text-muted uppercase">Explorer le catalogue</p>
                </div>
                <div>
                    <h4 className="font-bold font-display text-text-muted truncate">Découvrir plus</h4>
                    <p className="text-xs text-text-muted/70">Des milliers d'histoires</p>
                </div>
            </div>
          </div>

          <div className="mt-16 bg-white border border-surface-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="text-4xl text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold font-display text-text-main mb-2">Vos auteurs favoris ont publié de nouvelles œuvres !</h3>
                <p className="text-text-muted text-sm mb-4">Ne manquez pas les dernières sorties de la communauté AfriStory Draft et Pro.</p>
            </div>
            <Button className="bg-text-main hover:bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center gap-2">
                <span>Voir les nouveautés</span>
                <ArrowRight className="h-4 w-4" />
            </Button>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    