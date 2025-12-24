import { Diamond, FilePenLine, MessagesSquare, Handshake, HelpCircle, Palette, Globe, Pin, Search, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/header";

export default function ForumPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-[1200px] flex flex-col px-4 md:px-6 lg:px-8 pb-10">
          <div className="flex flex-wrap gap-2 py-6">
            <Link className="text-text-secondary text-sm font-medium leading-normal hover:text-white" href="/">Accueil</Link>
            <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
            <Link className="text-text-secondary text-sm font-medium leading-normal hover:text-white" href="/profile">Communauté</Link>
            <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
            <span className="text-white text-sm font-medium leading-normal">Forum</span>
          </div>

          <div className="w-full rounded-xl overflow-hidden relative min-h-[220px] flex flex-col justify-end mb-6">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(35, 29, 16, 0.9) 0%, rgba(35, 29, 16, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCQskr92cTJKvrjRKmZfGjopQUvqVtbfADzz-tr_BNH5MQs6Tw4EV-oFUWrmVBw4Up4EiVOHgJZ6t6cm2-1oxKtMMaCphKohAJg1bI_oSfFtUjmnhmKsNMV9B2Npq_8uTvn4CZigha-sDoagM1XHIsfL_9WWniM6_vI7Tvc_1pGMRHn7DlCUgyHDeGYr5Qh_xsmEX0WbKUX2aYmiZfIiyHEEt-vVk38FhM8m34w_ti5zkpBEl8RE8Ey4GZnm2gCWCEyX4QfNf6CcXw")`,
              }}
              data-alt="Abstract afro-futurist geometric pattern with golden lines on dark background"
            ></div>
            <div className="relative z-10 p-6 md:p-8">
              <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-2">Forum Communautaire</h1>
              <p className="text-text-secondary max-w-2xl">Rejoignez la conversation, partagez vos créations et connectez-vous avec d'autres artistes de la communauté AfriStory.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="bg-surface-dark rounded-xl border border-border-color p-4 shadow-sm">
                <div className="mb-6">
                  <div className="relative flex w-full items-stretch rounded-lg h-12 bg-surface-light border border-border-color focus-within:border-primary transition-colors">
                    <div className="text-text-secondary flex items-center justify-center pl-4 pr-2">
                      <Search />
                    </div>
                    <Input className="flex w-full bg-transparent border-none text-white focus:ring-0 placeholder:text-text-secondary px-2 text-base h-auto focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Rechercher des sujets, des tags, des artistes..." />
                  </div>
                </div>

                <div className="flex border-b border-border-color gap-6 overflow-x-auto scrollbar-hide">
                  <Link className="flex items-center gap-2 border-b-[3px] border-b-primary text-white pb-3 px-2 min-w-max" href="#">
                    <Globe className="text-primary" size={20} />
                    <p className="text-sm font-bold tracking-[0.015em]">Espace Public (Draft)</p>
                  </Link>
                  <Link className="flex items-center gap-2 border-b-[3px] border-b-transparent text-text-secondary hover:text-white pb-3 px-2 min-w-max transition-colors" href="#">
                    <Diamond className="text-text-secondary" size={20} />
                    <p className="text-sm font-bold tracking-[0.015em]">Espace Pro (Premium)</p>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-dark p-5 rounded-xl border border-border-color hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                      <MessagesSquare />
                    </div>
                    <span className="text-xs font-medium text-text-secondary bg-surface-light px-2 py-1 rounded-full">124 Sujets</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Discussion Générale</h3>
                  <p className="text-text-secondary text-sm">Échanges libres sur l'art, la culture et les actualités de la plateforme.</p>
                </div>
                <div className="bg-surface-dark p-5 rounded-xl border border-border-color hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                      <Palette />
                    </div>
                    <span className="text-xs font-medium text-text-secondary bg-surface-light px-2 py-1 rounded-full">85 Sujets</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Art &amp; Création</h3>
                  <p className="text-text-secondary text-sm">Partagez vos WIPs, demandez des avis et trouvez l'inspiration.</p>
                </div>
                <div className="bg-surface-dark p-5 rounded-xl border border-border-color hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                      <Handshake />
                    </div>
                    <span className="text-xs font-medium text-text-secondary bg-surface-light px-2 py-1 rounded-full">56 Sujets</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Collabs &amp; Recrutement</h3>
                  <p className="text-text-secondary text-sm">Trouvez un scénariste, un coloriste ou formez une équipe.</p>
                </div>
                <div className="bg-surface-dark p-5 rounded-xl border border-border-color hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                      <HelpCircle />
                    </div>
                    <span className="text-xs font-medium text-text-secondary bg-surface-light px-2 py-1 rounded-full">210 Sujets</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Aide &amp; Support</h3>
                  <p className="text-text-secondary text-sm">Questions techniques sur la plateforme ou sur les outils de dessin.</p>
                </div>
              </div>

              <div className="flex flex-col bg-surface-dark rounded-xl border border-border-color overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border-color bg-surface-light/50">
                  <h3 className="font-bold text-white">Discussions Récentes</h3>
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="text-xs font-medium h-auto px-3 py-1 rounded">Tout</Button>
                    <Button variant="ghost" size="sm" className="text-xs font-medium text-text-secondary bg-transparent hover:bg-surface-light px-3 py-1 rounded h-auto">Populaires</Button>
                    <Button variant="ghost" size="sm" className="text-xs font-medium text-text-secondary bg-transparent hover:bg-surface-light px-3 py-1 rounded h-auto">Non résolus</Button>
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row gap-4 p-4 border-b border-border-color hover:bg-surface-light/30 transition-colors bg-surface-light/10">
                  <div className="flex-shrink-0 pt-1">
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg shadow-primary/20">
                      <Pin size={20} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">Épinglé</span>
                      <h4 className="text-white font-semibold truncate group-hover:text-primary cursor-pointer">Règlement du forum et bonnes pratiques</h4>
                    </div>
                    <p className="text-text-secondary text-sm truncate">Merci de lire ceci avant de poster votre premier message...</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-text-secondary">
                      <span className="flex items-center gap-1">Admin</span>
                      <span className="flex items-center gap-1">Il y a 2 jours</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end justify-center text-xs text-text-secondary gap-1 pl-4 border-l border-border-color/50 min-w-[80px]">
                    <span className="flex items-center gap-1">0</span>
                    <span className="flex items-center gap-1">1.2k</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-6">
              <Button className="w-full h-auto py-4 px-6 rounded-xl shadow-lg shadow-primary/10 transition-all transform hover:scale-[1.02]">
                <FilePenLine />
                Commencer une discussion
              </Button>
              <div className="rounded-xl p-1 bg-gradient-to-br from-[#cbb790] to-[#685631]">
                <div className="bg-background-dark rounded-lg p-5 h-full relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="flex items-center gap-2 mb-3">
                    <Diamond className="text-primary" />
                    <h3 className="font-bold text-white text-lg">AfriStory Pro</h3>
                  </div>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    Débloquez l'accès aux forums exclusifs : contacts éditeurs, conseils juridiques et stratégies de monétisation.
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background-dark font-medium py-2 rounded-lg text-sm transition-colors">
                    Devenir Membre Pro
                  </Button>
                </div>
              </div>
              <div className="bg-surface-dark rounded-xl border border-border-color p-5">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} />
                  Tendances
                </h3>
                <div className="flex flex-col gap-4">
                  <a className="group flex flex-col gap-1" href="#">
                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">#InktoberAfro2024</span>
                    <span className="text-xs text-text-secondary">245 posts cette semaine</span>
                  </a>
                  <div className="h-px bg-border-color w-full"></div>
                  <a className="group flex flex-col gap-1" href="#">
                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Tuto: Clip Studio Paint</span>
                    <span className="text-xs text-text-secondary">112 posts cette semaine</span>
                  </a>
                  <div className="h-px bg-border-color w-full"></div>
                  <a className="group flex flex-col gap-1" href="#">
                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Appel à projets Éditions Y</span>
                    <span className="text-xs text-text-secondary">89 posts cette semaine</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
