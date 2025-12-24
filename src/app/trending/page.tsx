
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Library,
  TrendingUp,
  Verified,
  Edit,
  Settings,
  Menu,
  Bolt,
  MenuBook,
  Heart,
  Star,
  PlusCircle,
  Eye,
  ChevronDown,
} from "lucide-react";
import { Header } from "@/components/layout/header";


export default function TrendingPage() {

    const leaderboardData = [
    {
      rank: 4,
      title: "The River Gods",
      author: "Fatima B.",
      category: "Sci-Fi",
      views: "6.8k",
      likes: "2.1k",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCTw7TKZTR-xf-dNRTQXELz1sVfzgilCfati4w_VxwIJQIXztIrJyS226Jdv5IWo4yGwe9ePDRG-k4bNjdp_-isZkahFUKeOvS1BynViuGeBRVbACDSzIXWjngaoUqLTjhcJXp69rs0r0WM_ampzmIY3W4cVT2pZSLUhGfDTPJ9FaS0lxN_peag-6DoQmKfAQzDZlJQd3kYaeqsHA3qc81d00ZGqJUqg94pVDJluYQBN_PBL5HCQwm6d7rWRRo2GDJYwzJrp5l8QX8"
    },
    {
      rank: 5,
      title: "Solar Punk Nairobi",
      author: "Wole K.",
      category: "Pro",
      views: "5.4k",
      likes: "1.8k",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuARLidHB9W8P30i_pAB-CGF_ZXF28uKNL3FJRpYW2_x14qKFD0Bt3gBvT6f5TsZRFTSg-ulVOO_Hnm-mnSf46mJRNapTIC5H9D8WMizJRRqgwBUWV0Rp5i2R1_m5pHdvOBlgm-AifTxIxK6F1O5S-LhzB2_COlodv5R3zw1Cj_2yippdKxm_y3bAIHLnVZbyy0hXAdWWKNmwpRfS4Fs3vi-vcL-IxnjZS--n5LQ-ShpBNzWDKPnXifbPu15lep7uiZiupW2S9hzcWPf",
      isPro: true
    },
    {
      rank: 6,
      title: "Beneath the Baobab",
      author: "Amina Y.",
      category: "Fantasy",
      views: "4.9k",
      likes: "1.2k",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHGWThCbsuChWM4IZI57A62E-r3Sb1woRIvHAO99SeIPqrPKwhP-8tiYUNhPQjEc3EwggJBrcX6JDy-aB22bCfr4rhXxnMIUTHFU0-Fl8AilaoTJUlLvlbesXG7YrcnSXFhM9oRtenU4f6giPOegnu5iJulJVJ_x2Rf8pgfhXQQF5vpEDGYR8rBcRlAqtam_GviXe80FdGb26gv95NN306jC1JGxuHLKh-cwrCxnGquSnOQo8bT-NPYZ6x1UV7jPUV4sn29iKE2F7B"
    },
    {
      rank: 7,
      title: "Digital Drums",
      author: "Tunde R.",
      category: "Pro",
      views: "4.1k",
      likes: "900",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFZPRMyU_2U6wjdyaBZtcc7ExGnNykd0m1tRmGgAnT-HvPETQFs3GSD-kSjt1OKiwJLkuV4gWXkE9APirCbr6DgxBADyTxv7eA-6PfMaHetOvcMtCnX0oZ5x1k50hWGtN_9e0YmPaySAutJzpYSf8MrrY9hAjyZFIWRKgNtUgYZNrnR4lSKUcMT_2uUHUVys_Q4vA4LDC1WOmobD9CvC29p2SHYWgWkhsfnhcTduaM-WMhxX8h9l7aitnCaSSrmpuwv_or1Gc4tKdD",
      isPro: true
    },
  ];

  const risingStarsData = [
    {
      title: "Neon Sands",
      author: "Kaelo",
      type: "Draft",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyns8DVKOiCJUY9r2NgFrrDfMaaRtz4NNrrtSLHRefQ1Yy4ntRb0Ly2_ClVNuog4aAm-Wj6fySp1ph0mtbIaLDIHkkMt9N3vdR7pdTOrm8yI33qc8oZ4Du0x-KcnIdBiD0PaouZmx92MlKf9nXWWH3Hh0yZO00MvRhS8yG87b1mhz7oi0RGYpUiqvTZtskoug6f5KiPoGhZpKY8FpI1AAKlJp51WH_TAeC7SaZ_S2TX40iuImdaocIurUrz1t2xNQ3XhxlWts2VZFR"
    },
    {
      title: "Warrior's Path",
      author: "Amara",
      type: "Pro",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHhJg6Q4R-LspM-xRaF8CFZt8AQjc_QVceVg8V9Zj3nxSvR8ZqvGvT2oTxPhLllVxsXlZQAEquJeP6K4bIECV2RrJPTF443AauOAXdSNw6DiG8ABnBENgKbTmPjQdDqXcMO1c3WkZAIZpsFikgnsOdKJg945_OzzhbY4YWXfVOD91UoJS1AAbU96gIRXdjG_AUVVrsrpKx2ONNR0BIK2_ZMh9OPkwxjd_SnBWyJg_3scCKAF08zdlf52zs4mg_nsvNCUfgUwXBSkhc"
    },
    {
      title: "Masks of Truth",
      author: "Juma",
      type: "Draft",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfh7QDyeGGg4X6p3Bfvy1pyEgHLhnHTGqEM8Aj2u-DPo-9rAZb1IoMfCWohxIRwTaNZH31rHS5tIgzbkLNOzO7aZIi4eobH6lhKpkpQGaGPLZRHRxTotOv83D9-kQ4y90zlbE47G17-batY1Tc85wqDF1yOLumuYHxvwLAV6OdHHKXfeV5H_Juk9PZw7ROIY2s5bYOSxbenx4vvuel-oKG4cHlIcNAFScYO5eN-FfwgHtHeUFLAxDtKF079a1AfVGpASmIKPk0aSCD"
    },
    {
      title: "Glitch Protocols",
      author: "Zola",
      type: "Pro",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3JZrfeFmEONVrAL16VIPDsm93-EuQPnIxPb6rMARjDSTl0ntqFm8RYSnwLAG_gox0k8VVM_wTKWf-TlkpF99kZhzp-et0fGzA8gQ_td0BuR9OyBqXcQUUxY8mcbs0Wa8sKE7PkWajfId7RnprFINUHq6FQQMO8iJON5PaJiywUUEAP6AZckAsxg-U8lgfyKPpT1iDK704iuiu-O47sUp6dtSe3i3efASjh0i5qZot5Nq3436KgEu32F9NbInqvs0Fr5xADGGWhhVh"
    },
    {
      title: "Green Steel",
      author: "Koffi",
      type: "Draft",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdqtrPms-L795lg_n93gmdajTwpruNpqVoYShHTRV6dloIS55REYMKgFyBb1BWI1eYAJrm1UbFUm7nMJJojL5UsBhl8acLYOJoZ2XkzKPXrfGsNhv9YLCaxwa1esAz8dtZt6dIq9PfmDQsT9kaLixQXc8TBZozJbjoCY6Qt5VedLU0LtaBTCx65drg1fTMJIxjNtsULHYxPqEgcHdBtTO_tEIADqWct3infpJz8AZHf-HR3ks4eFbnuC2fXbkaSBpu4f9dkY6z7jFO"
    }
  ];

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      <main className="flex-1 h-full overflow-y-auto">
      <Header />
        <div className="w-full max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">
         <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden flex flex-col justify-end p-6 md:p-12 group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(to top, rgba(35, 29, 16, 1) 0%, rgba(35, 29, 16, 0.7) 50%, rgba(35, 29, 16, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzpwaw6JhNxtvojilc_BP3xYtCOrBwPc-nEjpwusJK79ZHtUqgeAMOi1rRQdbGVhT6LRYXBXaabECIl3IpyLKiA5CzjmOFRLG2heOjKUqaYoVnXMi8Knk8c1jwjiPCIEedVsQwQC0Ibmw9jDm-hTxLbZEYCbURvKugW2ifWbNU2imEktxm47-WHXI2G0mM9Q8q_Y3sniXPgxv45kA4mKXtdePKp6BpWrvA7ijhyaas0Mgpe5vswAWb33dqOWirXrEPJ2t6LlhzLd8y")'}}>
            </div>
            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary text-background-dark text-xs font-bold uppercase tracking-wider rounded-full">Non Compétitif</span>
                    <span className="text-white/80 text-sm font-medium">Octobre 2023</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight font-display tracking-tight">
                    Classements <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Communautaires</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-light max-w-xl leading-relaxed">
                    Un espace pour célébrer l'art, l'apprentissage et l'entraide. Ici, pas de rivalité, juste de l'inspiration et la reconnaissance de votre évolution.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" className="shadow-[0_0_20px_rgba(242,166,13,0.3)]">
                        <Star className="mr-2 h-4 w-4" />
                        Voir les Coups de Cœur
                    </Button>
                    <Button size="lg" variant="secondary">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Suggérer un Talent
                    </Button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Heart className="h-8 w-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white font-display">2,450</h3>
                    <p className="text-text-muted text-sm">Encouragements donnés</p>
                </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <TrendingUp className="h-8 w-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white font-display">185</h3>
                    <p className="text-text-muted text-sm">Artistes en progression</p>
                </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Verified className="h-8 w-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white font-display">12</h3>
                    <p className="text-text-muted text-sm">Mentors actifs ce mois</p>
                </div>
            </div>
        </div>

        <div className="py-10">
            <div className="flex flex-col gap-2 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white flex items-center gap-3">
                    <span className="text-primary">🔥</span>
                    Coup de Cœur du Mois
                </h2>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                    Une sélection des œuvres qui ont le plus touché la communauté par leur originalité, leur émotion ou leur audace technique.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 group relative">
                    <div className="w-full h-[500px] rounded-xl bg-surface-dark overflow-hidden relative border border-surface-border group-hover:border-primary transition-colors shadow-lg">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqqpuUcoKDHW-XRjdG9F7DCSsryToQtQvtZQDFkXM992uVdaxWA1gKhtxM5vxlF6VvIx6D6uTFyh_eYjho-OposvXGqRhNIWnn17RGilR-E8HVP4A6rcZWvmFM6kGcc_1ztGSrwUN4icq7k8jU_x80JOUCrTTd7Tv8aoOb95QmxyzFKXKuYKXK-FL0rcj25BAhVd1xGE1BkWtjVKNqjP2inwygB-Any8x4_DsdpY34IcWhR1dNRgZ3wK9WVJOs3aNz9HrKx7aGOpPG" alt="Digital art of a neon-lit cybernetic mask detailed" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent flex flex-col justify-end p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-primary text-background-dark text-xs font-bold uppercase rounded-full">Top Sélection</span>
                                <span className="text-white/80 text-sm"><Heart className="inline h-4 w-4 mr-1"/> 432 Likes</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white font-display mb-2">Neon Masks of Lagos</h3>
                            <p className="text-text-muted text-base line-clamp-2 mb-6">Une réinterprétation vibrante des traditions masquées fusionnées avec l'esthétique cyberpunk. L'utilisation de la lumière est tout simplement magistrale.</p>
                            <div className="flex items-center gap-3">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyHys3IVwHiGaRbW3tLytK6tuACb4CBA-HXbthdopm8BddXrWN45kodeTUmjQJZSla4VdsTZvxazEHAPawxBHrjqqXOxt0RsG84tRKtar_e6lYqZX3pisWoqOOpb7irD5zGyoAnIVNbE76UbRSuOO6HNBEyIu8IVaq0JHhUuuUdVmigwVeb0jPLk2RoPF0MymVIByl46WHtkgv1JyL40IdcNhzUtq6tvLsYOCAcDF8O0_o9mnEPGIEDgyD5sU4I3bjRJ_XcJXKv2FR" alt="User avatar" width={40} height={40} className="rounded-full border border-surface-border"/>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-sm">@art_vandal</span>
                                    <span className="text-primary text-xs">Artiste Visionnaire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="flex-1 rounded-xl bg-surface-dark overflow-hidden relative border border-surface-border group hover:border-primary transition-colors flex">
                         <div className="w-1/3 relative">
                           <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5vwEGVxMzShq0Ln-9YTiWEYe9YjF-tjOqnqKYgUSNwaDbE2BbV6ef5ruBgSXcB7pvDeITukT3bZbNsgF5tYh5ZqBW8tROTnSZFszmvhBbp9Mko-x17uq_KX6-vxxoeOSn7_bGXOROsELKtXGBbtOHoN_PhHRSGMCkn2Vn05MDDjpUFuqoJwPWRQmI5S4k6zYbZEvzoJY64BJD5klyfu-L2057YE27Eas-0FRRVQP3WwHAEEPjeoMv27enrZW-PqgbOEHmC8EP8yVT" alt="Illustration of a flying taxi" fill className="object-cover"/>
                        </div>
                        <div className="w-2/3 p-5 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-surface-border text-text-muted text-[10px] font-bold uppercase rounded-full">Narratif</span>
                            </div>
                            <h4 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">Taxi 2077</h4>
                            <p className="text-text-muted text-sm line-clamp-2 mb-4">Un storytelling visuel captivant qui nous plonge dans le quotidien futuriste.</p>
                            <div className="flex items-center gap-2">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmo4YRqd3ouZKU9oj2oiMDNN5jOFVBG9qxVQjkQE7ysA-cFKbDkKcmQxj0mLhNnhbMtEI17UlUERpx9dZQnv_8PtYdxyZ9FlG49YeeG1Aqb0v_nLV0wkVr4W5k7FOqrvEomM2y5PVwtRxkBFxEiglaZueVwSvyiCOL8J4znvw_Q-QMiyrkV7-6zzWL97h_Q4VpvRUUEnK7HK-1rmgfpvclltGlxKuDi9Z-82lSn2JCAs5tJE9FKJBMeEl7mPSI65IcMIWeAgUAYs3p" alt="" width={24} height={24} className="rounded-full"/>
                                <span className="text-white text-xs font-medium">@flyboy_zm</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 rounded-xl bg-surface-dark overflow-hidden relative border border-surface-border group hover:border-primary transition-colors flex">
                        <div className="w-1/3 relative">
                          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYuYDvDm91UEfAnVissfxiNRACGaW8xSJAflKnMVoMyIEJsvZyR7qPCQyqhZH9jy1RtYyYXhNhBQCes6QW5HmBNwsiMUwADxdrhaMJCNx6rq83_zgbRP40Tet4OurD-4g9wuN1bCdYEgBu_JOQz_IJmL-FJuuTQEFDUbsI4Rj4BECpSATiiSk5mBHnhNGZV5qWb7UrshWikihu3LQ9hxs90LbIH4gYf2MvDZl0TcEKimVdGHm9x2K2SAUsh_v4DWviwhQVv5GmwwYf" alt="Cyberpunk character design" fill className="object-cover"/>
                        </div>
                        <div className="w-2/3 p-5 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-surface-border text-text-muted text-[10px] font-bold uppercase rounded-full">Technique</span>
                            </div>
                            <h4 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">Cyber-Griot</h4>
                            <p className="text-text-muted text-sm line-clamp-2 mb-4">Une maîtrise impressionnante des textures et des motifs traditionnels.</p>
                            <div className="flex items-center gap-2">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmAqB-R2ecPbzR3kUkEAenbPYNlq3pAbIFIvF19dYM4fKUFabMYIAgZDI9Ek3e-aSCouPKEIo0UIAC7ul2j4jWCMY2aOTakmRQKsCMSSb7pdV1jK2ZO4Bs9hO6WhZ1YKmoos1oVLW3xCvInACp98Pc2LFHmV4lgyVouQ9uo0eQ7M4D0l4RRhoIH23F9OPg3HFHJXWh0FGIL6LWK8X4POtAHvCCMhmPyhL_yQVSL3xgj91HOwPPuzaHksUdooxlmLdTIpdWDrhOHETh" alt="" width={24} height={24} className="rounded-full"/>
                                <span className="text-white text-xs font-medium">@storyteller_x</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 md:px-10 py-10 bg-surface-dark/30 border-y border-surface-border">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">Progression du Mois</h2>
                    <p className="text-text-muted text-sm">Ces artistes ont démontré une amélioration remarquable et un engagement constant.</p>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background-dark">
                    Voir tout
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Rising artist cards */}
            </div>
        </div>
          
        </div>
      </main>
    </body>
    </html>