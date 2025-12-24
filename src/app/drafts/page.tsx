'use client';
import {
  Award,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Heart,
  LayoutGrid,
  MessageSquare,
  PlusCircle,
  Search,
  ThumbsUp,
  User,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/header';

export default function DraftsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 pb-8 border-b border-border-dark">
              <div className="flex flex-col gap-4 max-w-3xl">
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    Communauté Amateur
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-dark text-text-muted text-xs font-bold uppercase tracking-wider border border-border-dark">
                    Bêta
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight font-display leading-[1.1]">
                  AfriStory <span className="text-primary italic">Draft</span>
                </h1>
                <p className="text-text-muted text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-body">
                  L'incubateur de talents narratifs. Publiez vos esquisses,
                  recevez des retours constructifs de vos pairs et des{' '}
                  <span className="text-primary">Mentors Pro</span>, et
                  développez votre art dans un espace bienveillant.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <Button className="flex-1 md:flex-none whitespace-nowrap px-6 py-3.5">
                  <PlusCircle />
                  Nouveau Projet
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none whitespace-nowrap border-border-dark px-6 py-3.5"
                >
                  <GraduationCap />
                  Programme Mentor
                </Button>
              </div>
            </div>
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Heart className="text-primary filled text-3xl" />
                  <h2 className="text-white text-2xl font-bold tracking-tight">
                    Coup de Cœur du Mois
                  </h2>
                </div>
                <Link
                  className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1"
                  href="#"
                >
                  Voir les archives <ArrowRight className="text-base" />
                </Link>
              </div>
              <div className="bg-surface-dark rounded-2xl p-6 md:p-8 border border-border-dark flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-primary/30 transition-all shadow-2xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden relative shadow-lg">
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdSNayMwJLdSD0wB1nmc_wTfOOKyq1oLWCBRXisK3OlVIMxlD0tR1dCFbD2-CkEm7AlsmoTYetq3-LNwo2Xgn9gwDsz5bWswllih1KOeIBe-sAKWwtP7mgcun4rYm1hvjp1LLdroZz2xTTW8V8jheo0p1GD9FOCp8CnzrmgyqUVh_ZGhGXxgGyjqLpH1w5034H2PriKF8LBX7JC1mOgScPhyKlDxo8qDVPG6XYPwPPJuwmaGk-xHwdj1sfxwHAaBywOVUnyt0GujWP"
                    alt="Illustration abstraite style fiction africaine"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1">
                    <Award className="text-sm text-primary" />
                    Sélection Communautaire
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center py-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 text-primary border border-primary/20 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                      Concept Art
                    </div>
                    <span className="text-text-muted text-xs flex items-center gap-1">
                      <Clock className="text-sm" /> Publié il y a 2 jours
                    </span>
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-bold font-display mb-4 leading-tight">
                    Neo-Lagos : Études Architecturales
                  </h3>
                  <p className="text-text-muted text-base mb-6 leading-relaxed font-body">
                    "Je travaille sur les arrière-plans de mon prochain webtoon
                    cyberpunk. J'essaie de mélanger l'architecture
                    traditionnelle Yoruba avec des structures brutalistes
                    solaires. J'aimerais particulièrement vos avis sur la
                    palette de couleurs !"
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-6 border-t border-border-dark gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full bg-gray-700 bg-cover border border-border-dark"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaql3BZ8hLjQPTzLBBWDYKiI-MRD1qM5pe8mLSHcUeutMA7oBg7_rz_lpbRjHf5C-HvOqLD0e9CgenqanETi9MnbtOqIpmtPYMAXHv6stwc--tCWZh1oazLDzxvBiW4wlfIZMWgC6DdKJau0m1xyaCCY06Z6yqr81SZrMHGQWggCHI_nL5s-R5rdZVfznNz-UaF48UwJkcb3Ctox3LTXQNsjn_umKjzOK5eXdlEhxpCakyzqlPlEieHWSwY0a9_slMxsdA6j2alZfP"
                        alt="Avatar d'un utilisateur"
                      />
                      <div>
                        <p className="text-white font-bold text-sm">
                          Kofi Mensah
                        </p>
                        <p className="text-text-muted text-xs">
                          Étudiant en Art Graphique
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex -space-x-3">
                        <Image
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-surface-dark bg-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp-ccUMGN7cPIyW3G3ROQAiDea7RY9uC9SFNCrkGeIdkbV2CHZU7if6Yq2pAX4hcGDHO0AQOPNv_kR2xsPU6rE-m46oJ0qLHobOioWcMH3jcS5AAC-BXL9jcgbzK0ww2iNw23N2LMW8sDkaX7UPaEvfNMp11IvGSAxozObRegDMB-HT88dHQq1YmvJtvr8TKuPv4mrisZVkwm6sKLNawwpRxtB46ryLVNPdCk4UIyID3cuVwUQg1cQTncQlFw0MT7xOqRKffpKsJhr"
                          alt="Avatar"
                        />
                        <Image
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-surface-dark bg-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAge_Ri76ssDA3z-7BNB1AoU2lKg-E7261KdI6xhEVzkiPNvVZwm9LOotzc1ocGV3FbVJSo1iIk1vfumT8dfJrAvMRJvPc19zjQydVscFPzp6RbdUUE72ktfgpew0-BiOxrRS-eAR9K6WX1klONnVCPT5kAqIMP0T3Lqvr2TpSzuLu1ef0yu1wYB792b_o6IchdKPzyeR8qzG21XBjuW0Hen8PWc0STnTSmkEbHnIWyOX3mgAWSn9NS87lq4aDpVF5XMQKPFc4YBINb"
                          alt="Avatar"
                        />
                        <div className="size-8 rounded-full border-2 border-surface-dark bg-surface-dark flex items-center justify-center text-[10px] font-bold text-text-muted">
                          +22
                        </div>
                      </div>
                      <span className="text-primary text-sm font-bold flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                        <MessageSquare className="text-lg" />
                        24 Retours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 sticky top-[72px] z-30 bg-background-dark/95 py-4 backdrop-blur-sm border-b border-border-dark/50">
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                  <Button
                    variant="default"
                    className="rounded-full px-5 py-2 whitespace-nowrap shadow-lg shadow-primary/20"
                  >
                    Tout voir
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-2 whitespace-nowrap"
                  >
                    Storyboards
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-2 whitespace-nowrap"
                  >
                    Character Design
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-2 whitespace-nowrap"
                  >
                    Spin-offs
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-2 whitespace-nowrap"
                  >
                    Tutoriels
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted whitespace-nowrap self-end md:self-auto">
                  <span>Trier par:</span>
                  <div className="relative group">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-white font-bold"
                    >
                      Plus récents <ChevronDown className="text-lg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20 flex flex-col h-full">
                  <div className="relative aspect-video bg-gray-800 overflow-hidden">
                    <Image
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM-XDzhroCDTysn9x-TUNPX3vX5TSvwND3HJLj2uIzK_9S25WTtUaEbsANbaC5tUJijYpORjawvbWob_07pq8mUGSjmWl-ifQMOScX3RxuQfrevO36f4BiW_cX_UZL76hR01ZowsD65ADGcz4OGAAlmk7uK3IHl9-2hdaUjRu9U9Fon_L-RB-kDQSAO44QZpvU2J3LCL63RFqYrHiAOHCye-hzpQycC2Cz0EHI8I1gYVjxxB_8dkpGNr8s-gQO1W4-rzOI2W1omxSa"
                      alt="Style art séquentiel et bulles"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-wide">
                      WIP
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                        Saga des Sables - Planche 4
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm line-clamp-2 mb-4 font-body">
                      Essai d'encrage pour la scène de combat au marché. Je
                      galère un peu avec la perspective dynamique de la fuite.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4 flex items-start gap-3 mt-auto">
                      <div className="relative">
                        <Image
                          width={32}
                          height={32}
                          className="rounded-full bg-cover border border-primary"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNAEpRuN9Zk-TgRAK53_j4NFPK7SHtvnfmlff4xXwq6hwFNV5FzE1lQyCqSuBq-xjktOA78u4U0q3SndgRdi1N1qOrSJPHgBrn9Pw3_TCA4hdNnGRlJCcj4uP2AsX4Onkq3JfwIup3ZVKl5C1ZWV9qN0ZypGl1FvR5tGlklK0NMaA9ZmKF7cHV9Ccr5xl5ZrwUQx258O-B08XU2--yd-ZSGLEB5oeG9CFEN_hdYl61A5YjUPbUFuL_Gl3_DLbob5zqb326N9PG6Oq"
                          alt="Avatar Artiste Mentor"
                        />
                        <div
                          className="absolute -bottom-1 -right-1 bg-primary text-[#231d10] rounded-full p-0.5"
                          title="Artiste Mentor"
                        >
                          <Award className="!text-[10px] font-bold block" />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-xs font-bold mb-0.5">
                          Feedback Mentor
                        </p>
                        <p className="text-white text-xs italic leading-tight opacity-90">
                          "Excellent dynamisme ! Attention cependant à
                          l'anatomie du bras gauche en raccourci..."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border-dark/50">
                      <div className="flex items-center gap-2">
                        <Image
                          width={24}
                          height={24}
                          className="rounded-full bg-gray-600 bg-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp-ccUMGN7cPIyW3G3ROQAiDea7RY9uC9SFNCrkGeIdkbV2CHZU7if6Yq2pAX4hcGDHO0AQOPNv_kR2xsPU6rE-m46oJ0qLHobOioWcMH3jcS5AAC-BXL9jcgbzK0ww2iNw23N2LMW8sDkaX7UPaEvfNMp11IvGSAxozObRegDMB-HT88dHQq1YmvJtvr8TKuPv4mrisZVkwm6sKLNawwpRxtB46ryLVNPdCk4UIyID3cuVwUQg1cQTncQlFw0MT7xOqRKffpKsJhr"
                          alt="Avatar"
                        />
                        <span className="text-text-muted text-xs font-medium">
                          Yara D.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-text-muted text-xs">
                        <button
                          className="flex items-center gap-1 hover:text-white transition-colors"
                          title="Soutenir"
                        >
                          <ThumbsUp className="text-base" /> 42
                        </button>
                        <button
                          className="flex items-center gap-1 hover:text-white transition-colors"
                          title="Commentaires"
                        >
                          <MessageSquare className="text-base" /> 8
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20 flex flex-col h-full">
                  <div className="relative aspect-video bg-gray-800 overflow-hidden">
                    <Image
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyyJt6jcQPC45U9u5JFT8iVjTweUJVZWdBNMJCbvSuKe8lgtAr8Cw3q0bGSraIGI_M2R0u3x7pZ5ySx1u7ZaUgG-YnirwX_QKY6TUiKvu3ukyT0AnBsBktDMnww_8lsw-GBq-BqezaPDxucLLVNI_ZetuQEAvOHr2x1sn-T6eSZyIzf0H0OfpvJ4-yQzyOFDF0Ux6IkRzw05Xx60oNwWLJzirv_Yj_aqPo8fwGGuVgrtJfvYb5J7gP0UgwC7ELlvlmWj8XKGddwMwv"
                      alt="Motifs abstraits lyriques et doux"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-wide">
                      Poésie Visuelle
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      Murmures des Ancêtres
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-3 mb-6 font-body">
                      Projet expérimental mêlant calligraphie traditionnelle et
                      illustration vectorielle minimaliste. Je cherche des
                      collaborations pour la mise en musique.
                    </p>
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-border-dark/50">
                      <div className="flex items-center gap-2">
                        <Image
                          width={24}
                          height={24}
                          className="rounded-full bg-gray-600 bg-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAge_Ri76ssDA3z-7BNB1AoU2lKg-E7261KdI6xhEVzkiPNvVZwm9LOotzc1ocGV3FbVJSo1iIk1vfumT8dfJrAvMRJvPc19zjQydVscFPzp6RbdUUE72ktfgpew0-BiOxrRS-eAR9K6WX1klONnVCPT5kAqIMP0T3Lqvr2TpSzuLu1ef0yu1wYB792b_o6IchdKPzyeR8qzG21XBjuW0Hen8PWc0STnTSmkEbHnIWyOX3mgAWSn9NS87lq4aDpVF5XMQKPFc4YBINb"
                          alt="Avatar"
                        />
                        <span className="text-text-muted text-xs font-medium">
                          Tunde O.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-text-muted text-xs">
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <ThumbsUp className="text-base" /> 15
                        </button>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <MessageSquare className="text-base" /> 3
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-black/20 flex flex-col h-full">
                  <div className="relative aspect-video bg-gray-800 overflow-hidden">
                    <Image
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNAEpRuN9Zk-TgRAK53_j4NFPK7SHtvnfmlff4xXwq6hwFNV5FzE1lQyCqSuBq-xjktOA78u4U0q3SndgRdi1N1qOrSJPHgBrn9Pw3_TCA4hdNnGRlJCcj4uP2AsX4Onkq3JfwIup3ZVKl5C1ZWV9qN0ZypGl1FvR5tGlklK0NMaA9ZmKF7cHV9Ccr5xl5ZrwUQx258O-B08XU2--yd-ZSGLEB5oeG9CFEN_hdYl61A5YjUPbUFuL_Gl3_DLbob5zqb326N9PG6Oq"
                      alt="Texture de vieux papier et symboles mythologiques"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-wide">
                      Lore & Worldbuilding
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      Bestiaire du Royaume Oublié
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-3 mb-6 font-body">
                      Recherche de créatures pour mon roman fantasy inspiré des
                      mythes Dogon. Besoin d'avis sur la cohérence biologique de
                      mes chimères !
                    </p>
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-border-dark/50">
                      <div className="flex items-center gap-2">
                        <Image
                          width={24}
                          height={24}
                          className="rounded-full bg-gray-600 bg-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdSNayMwJLdSD0wB1nmc_wTfOOKyq1oLWCBRXisK3OlVIMxlD0tR1dCFbD2-CkEm7AlsmoTYetq3-LNwo2Xgn9gwDsz5bWswllih1KOeIBe-sAKWwtP7mgcun4rYm1hvjp1LLdroZz2xTTW8V8jheo0p1GD9FOCp8CnzrmgyqUVh_ZGhGXxgGyjqLpH1w5034H2PriKF8LBX7JC1mOgScPhyKlDxo8qDVPG6XYPwPPJuwmaGk-xHwdj1sfxwHAaBywOVUnyt0GujWP"
                          alt="Avatar"
                        />
                        <span className="text-text-muted text-xs font-medium">
                          Zahara B.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-text-muted text-xs">
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <ThumbsUp className="text-base" /> 56
                        </button>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <MessageSquare className="text-base" /> 12
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="mt-12 text-center pb-8">
                <Button
                  variant="outline"
                  className="group text-text-muted hover:text-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-surface-dark border border-transparent hover:border-border-dark"
                >
                  Voir plus de projets
                  <ChevronDown className="group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>