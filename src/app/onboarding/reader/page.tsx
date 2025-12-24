import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/layout/header";
import {
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  LayoutGrid,
  Heart,
  Languages,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const genres = [
    {
        name: "Fiction",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdSNayMwJLdSD0wB1nmc_wTfOOKyq1oLWCBRXisK3OlVIMxlD0tR1dCFbD2-CkEm7AlsmoTYetq3-LNwo2Xgn9gwDsz5bWswllih1KOeIBe-sAKWwtP7mgcun4rYm1hvjp1LLdroZz2xTTW8V8jheo0p1GD9FOCp8CnzrmgyqUVh_ZGhGXxgGyjqLpH1w5034H2PriKF8LBX7JC1mOgScPhyKlDxo8qDVPG6XYPwPPJuwmaGk-xHwdj1sfxwHAaBywOVUnyt0GujWP",
        selected: true
    },
    {
        name: "Non-Fiction",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp-ccUMGN7cPIyW3G3ROQAiDea7RY9uC9SFNCrkGeIdkbV2CHZU7if6Yq2pAX4hcGDHO0AQOPNv_kR2xsPU6rE-m46oJ0qLHobOioWcMH3jcS5AAC-BXL9jcgbzK0ww2iNw23N2LMW8sDkaX7UPaEvfNMp11IvGSAxozObRegDMB-HT88dHQq1YmvJtvr8TKuPv4mrisZVkwm6sKLNawwpRxtB46ryLVNPdCk4UIyID3cuVwUQg1cQTncQlFw0MT7xOqRKffpKsJhr",
        selected: false
    },
    {
        name: "BD & Manga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM-XDzhroCDTysn9x-TUNPX3vX5TSvwND3HJLj2uIzK_9S25WTtUaEbsANbaC5tUJijYpORjawvbWob_07pq8mUGSjmWl-ifQMOScX3RxuQfrevO36f4BiW_cX_UZL76hR01ZowsD65ADGcz4OGAAlmk7uK3IHl9-2hdaUjRu9U9Fon_L-RB-kDQSAO44QZpvU2J3LCL63RFqYrHiAOHCye-hzpQycC2Cz0EHI8I1gYVjxxB_8dkpGNr8s-gQO1W4-rzOI2W1omxSa",
        selected: true
    },
    {
        name: "Poésie",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyyJt6jcQPC45U9u5JFT8iVjTweUJVZWdBNMJCbvSuKe8lgtAr8Cw3q0bGSraIGI_M2R0u3x7pZ5ySx1u7ZaUgG-YnirwX_QKY6TUiKvu3ukyT0AnBsBktDMnww_8lsw-GBq-BqezaPDxucLLVNI_ZetuQEAvOHr2x1sn-T6eSZyIzf0H0OfpvJ4-yQzyOFDF0Ux6IkRzw05Xx60oNwWLJzirv_Yj_aqPo8fwGGuVgrtJfvYb5J7gP0UgwC7ELlvlmWj8XKGddwMwv",
        selected: false
    },
    {
        name: "Contes & Folklore",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNAEpRuN9Zk-TgRAK53_j4NFPK7SHtvnfmlff4xXwq6hwFNV5FzE1lQyCqSuBq-xjktOA78u4U0q3SndgRdi1N1qOrSJPHgBrn9Pw3_TCA4hdNnGRlJCcj4uP2AsX4Onkq3JfwIup3ZVKl5C1ZWV9qN0ZypGl1FvR5tGlklK0NMaA9ZmKF7cHV9Ccr5xl5ZrwUQx258O-B08XU2--yd-ZSGLEB5oeG9CFEN_hdYl61A5YjUPbUFuL_Gl3_DLbob5zqb326N9PG6Oq",
        selected: true
    },
    {
        name: "Afrofuturisme",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAge_Ri76ssDA3z-7BNB1AoU2lKg-E7261KdI6xhEVzkiPNvVZwm9LOotzc1ocGV3FbVJSo1iIk1vfumT8dfJrAvMRJvPc19zjQydVscFPzp6RbdUUE72ktfgpew0-BiOxrRS-eAR9K6WX1klONnVCPT5kAqIMP0T3Lqvr2TpSzuLu1ef0yu1wYB792b_o6IchdKPzyeR8qzG21XBjuW0Hen8PWc0STnTSmkEbHnIWyOX3mgAWSn9NS87lq4aDpVF5XMQKPFc4YBINb",
        selected: false
    }
]

const interests = [
    { name: "Histoire Panafricaine", selected: true },
    { name: "Artistes Émergents", selected: false },
    { name: "Romance Contemporaine", selected: false },
    { name: "Thriller Politique", selected: true },
    { name: "Jeunesse", selected: false },
    { name: "Diaspora", selected: false },
    { name: "Cuisine & Culture", selected: false }
]

const languages = ["Français", "English", "Kiswahili"]


export default function ReaderOnboardingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header/>
      <main className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="w-full flex justify-between items-center mb-6 px-4">
              <span className="text-text-muted text-sm font-medium uppercase tracking-wider">
                Configuration du profil
              </span>
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm font-bold">Étape 2</span>
                <span className="text-text-muted text-sm">sur 3</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between gap-3 p-4 mb-4">
              <div className="flex w-full flex-col gap-3">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Personnalisez votre expérience de lecture
                </h1>
                <p className="text-text-muted text-lg font-normal leading-normal max-w-2xl">
                  Sélectionnez vos genres préférés et vos centres d'intérêt pour
                  nous aider à vous recommander des histoires uniques qui vous
                  feront voyager.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
                <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-4 flex items-center gap-2">
                    <LayoutGrid className="text-primary" />
                    Choisissez vos genres favoris (min. 3)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {genres.map(genre => (
                        <div key={genre.name} className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 ${genre.selected ? 'border-primary shadow-[0_0_15px_rgba(242,166,13,0.3)]' : 'border-transparent hover:border-border-dark'} transition-all hover:scale-[1.02]`}>
                           {genre.selected && (
                             <div className="absolute top-3 right-3 z-10 bg-primary rounded-full p-1 text-[#231d10]">
                                <Check className="h-4 w-4 font-bold" />
                            </div>
                           )}
                            <div className={`bg-cover bg-center flex flex-col gap-3 justify-end p-4 aspect-[4/5] h-full ${!genre.selected && 'opacity-80 group-hover:opacity-100'} transition-opacity`} style={{backgroundImage: `linear-gradient(180deg, rgba(35, 29, 16, 0) 0%, rgba(35, 29, 16, 0.9) 100%), url("${genre.image}")`}}>
                                <p className={`${genre.selected ? 'text-primary' : 'text-white'} text-lg font-bold leading-tight`}>{genre.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-8 px-4">
                <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-2 flex items-center gap-2">
                    <Heart className="text-primary" />
                    Vos centres d'intérêt
                </h3>
                <div className="flex flex-wrap gap-3">
                    {interests.map(interest => (
                         <Button key={interest.name} variant={interest.selected ? "default" : "secondary"} className="px-5 py-2.5 h-auto rounded-full text-sm font-bold hover:bg-[#d9950b] transition-all flex items-center gap-2">
                            {interest.name}
                            {interest.selected && <X className="h-4 w-4" />}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="mb-12 px-4">
                <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-2 flex items-center gap-2">
                    <Languages className="text-primary" />
                    Langues de lecture
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                    {languages.map(lang => (
                        <label key={lang} className="flex items-center gap-3 bg-surface-dark p-3 pr-6 rounded-lg border border-border-dark cursor-pointer select-none hover:border-primary/50 transition-colors">
                            <Checkbox defaultChecked={lang === 'Français'} />
                            <span className="text-white font-medium">{lang}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            <div className="border-t border-border-dark p-4 mt-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <Link href="#" className="text-text-muted hover:text-white text-sm font-medium transition-colors order-2 md:order-1">Passer pour l'instant</Link>
                    <Button size="lg" className="w-full md:w-auto order-1 md:order-2">
                        Enregistrer et Explorer
                        <ArrowRight className="ml-2" />
                    </Button>
                </div>
                 <p className="text-xs text-text-muted/60 mt-4 text-center md:text-right">
                        Vos préférences nous aident à personnaliser votre accueil. Vous pourrez les modifier à tout moment.
                    </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


const X = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>
)
