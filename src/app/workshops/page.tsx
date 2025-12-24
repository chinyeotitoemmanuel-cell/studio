
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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="w-full px-4 md:px-10 py-6 md:py-10">
          <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden flex flex-col justify-end p-6 md:p-12 group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpwaw6JhNxtvojilc_BP3xYtCOrBwPc-nEjpwusJK79ZHtUqgeAMOi1rRQdbGVhT6LRYXBXaabECIl3IpyLKiA5CzjmOFRLG2heOjKUqaYoVnXMi8Knk8c1jwjiPCIEedVsQwQC0Ibmw9jDm-hTxLbZEYCbURvKugW2ifWbNU2imEktxm47-WHXI2G0mM9Q8q_Y3sniXPgxv45kA4mKXtdePKp6BpWrvA7ijhyaas0Mgpe5vswAWb33dqOWirXrEPJ2t6LlhzLd8y"
              alt="Artistic workshop in a futuristic African setting, students learning from a mentor"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-transparent" />
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
                <Button
                  size="lg"
                  className="shadow-[0_0_20px_rgba(242,166,13,0.3)]"
                >
                  <UserPlus />
                  S'inscrire Gratuitement
                </Button>
                <Button size="lg" variant="secondary" className="bg-surface-dark hover:bg-surface-border">
                  <Info />
                  Détails du Programme
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <GraduationCap className="h-8 w-8" />
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
                <Users className="h-8 w-8" />
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
                <Verified className="h-8 w-8" />
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
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqqpuUcoKDHW-XRjdG9F7DCSsryToQtQvtZQDFkXM992uVdaxWA1gKhtxM5vxlF6VvIx6D6uTFyh_eYjho-OposvXGqRhNIWnn17RGilR-E8HVP4A6rcZWvmFM6kGcc_1ztGSrwUN4icq7k8jU_x80JOUCrTTd7Tv8aoOb95QmxyzFKXKuYKXK-FL0rcj25BAhVd1xGE1BkWtjVKNqjP2inwygB-Any8x4_DsdpY34IcWhR1dNRgZ3wK9WVJOs3aNz9HrKx7aGOpPG"
                    alt="Digital art workshop focusing on character design"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
                    Character Design : Fusion Tradition & Futurisme
                  </h3>
                  <p className="text-text-muted text-base mb-6 line-clamp-2">
                    Comment intégrer des motifs ancestraux dans des designs de
                    personnages sci-fi sans tomber dans le cliché. Une approche
                    respectueuse et innovante.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyHys3IVwHiGaRbW3tLytK6tuACb4CBA-HXbthdopm8BddXrWN45kodeTUmjQJZSla4VdsTZvxazEHAPawxBHrjqqXOxt0RsG84tRKtar_e6lYqZX3pisWoqOOpb7irD5zGyoAnIVNbE76UbRSuOO6HNBEyIu8IVaq0JHhUuuUdVmigwVeb0jPLk2RoPF0MymVIByl46WHtkgv1JyL40IdcNhzUtq6tvLsYOCAcDF8O0_o9mnEPGIEDgyD5sU4I3bjRJ_XcJXKv2FR"
                        alt="Mentor avatar"
                        width={40}
                        height={40}
                        className="rounded-full object-cover border border-surface-border"
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">
                          Zarah Moyo
                        </span>
                        <span className="text-primary text-xs">
                          Concept Artist @AfriPro
                        </span>
                      </div>
                    </div>
                    <Button>Réserver</Button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-dark overflow-hidden border border-surface-border flex flex-col md:flex-row group hover:border-secondary transition-colors h-full">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5vwEGVxMzShq0Ln-9YTiWEYe9YjF-tjOqnqKYgUSNwaDbE2BbV6ef5ruBgSXcB7pvDeITukT3bZbNsgF5tYh5ZqBW8tROTnSZFszmvhBbp9Mko-x17uq_KX6-vxxoeOSn7_bGXOROsELKtXGBbtOHoN_PhHRSGMCkn2Vn05MDDjpUFuqoJwPWRQmI5S4k6zYbZEvzoJY64BJD5klyfu-L2057YE27Eas-0FRRVQP3WwHAEEPjeoMv27enrZW-PqgbOEHmC8EP8yVT"
                    alt="Environment design workshop illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmo4YRqd3ouZKU9oj2oiMDNN5jOFVBG9qxVQjkQE7ysA-cFKbDkKcmQxj0mLhNnhbMtEI17UlUERpx9dZQnv_8PtYdxyZ9FlG49YeeG1Aqb0v_nLV0wkVr4W5k7FOqrvEomM2y5PVwtRxkBFxEiglaZueVwSvyiCOL8J4znvw_Q-QMiyrkV7-6zzWL97h_Q4VpvRUUEnK7HK-1rmgfpvclltGlxKuDi9Z-82lSn2JCAs5tJE9FKJBMeEl7mPSI65IcMIWeAgUAYs3p"
                        alt="Mentor avatar"
                        width={40}
                        height={40}
                        className="rounded-full object-cover border border-surface-border"
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">
                          Malik Diop
                        </span>
                        <span className="text-primary text-xs">
                          Env Artist @Ubisoft
                        </span>
                      </div>
                    </div>
                    <Button variant="secondary" className="bg-surface-border text-white">Réserver</Button>
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
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYuYDvDm91UEfAnVissfxiNRACGaW8xSJAflKnMVoMyIEJsvZyR7qPCQyqhZH9jy1RtYyYXhNhBQCes6QW5HmBNwsiMUwADxdrhaMJCNx6rq83_zgbRP40Tet4OurD-4g9wuN1bCdYEgBu_JOQz_IJmL-FJuuTQEFDUbsI4Rj4BECpSATiiSk5mBHnhNGZV5qWb7UrshWikihu3LQ9hxs90LbIH4gYf2MvDZl0TcEKimVdGHm9x2K2SAUsh_v4DWviwhQVv5GmwwYf"
                      alt=""
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-surface-border"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Nia Abara
                      </h4>
                      <p className="text-text-muted text-xs">
                        Spécialité: Comics & Webtoons
                      </p>
                      <div className="flex text-primary text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary/50" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmAqB-R2ecPbzR3kUkEAenbPYNlq3pAbIFIvF19dYM4fKUFabMYIAgZDI9Ek3e-aSCouPKEIo0UIAC7ul2j4jWCMY2aOTakmRQKsCMSSb7pdV1jK2ZO4Bs9hO6WhZ1YKmoos1oVLW3xCvInACp98Pc2LFHmV4lgyVouQ9uo0eQ7M4D0l4RRhoIH23F9OPg3HFHJXWh0FGIL6LWK8X4POtAHvCCMhmPyhL_yQVSL3xgj91HOwPPuzaHksUdooxlmLdTIpdWDrhOHETh"
                      alt=""
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-surface-border"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Kofi Mensah
                      </h4>
                      <p className="text-text-muted text-xs">
                        Spécialité: 3D Modeling
                      </p>
                      <div className="flex text-primary text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMdCle23Vdi2IqNR-xltbd0tmyrVNPGPqHtLznkDUN6iBEPSZOGJhjQHvUonB0SsSvqK4_k7HYDFU1F1UKmrIr6FTeVqUjwTILf1TjDEOi8ba-pSD3w_KCgDxVfKM-e1yNRrubGsO7OHwacnWm8XeV4dro6Wr7WQefSmHmJQIL8EO69aB4vfIw4ihSvxNBZPU3LX_soFMnK7yNRPZ8O22DZUBGaL4RVN_XqJDWjQiVKJsAS4LRGHn4HjwE9P7LFaHqo-cLLY6IB_qd"
                      alt=""
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-surface-border"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Amina Diallo
                      </h4>
                      <p className="text-text-muted text-xs">
                        Spécialité: Animation 2D
                      </p>
                      <div className="flex text-primary text-xs mt-1">
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        <Star className="w-3.5 h-3.5 fill-primary/50" />
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Devenir Mentor (Pro)
                </Button>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 border border-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Besoin d'aide ?
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Rejoignez le salon Discord dédié aux étudiants pour poser vos
                  questions.
                </p>
                <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white">
                  <MessageSquare />
                  Rejoindre la communauté
                </Button>
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
              <Button size="icon" variant="outline">
                <ChevronLeft />
              </Button>
              <Button size="icon" variant="outline">
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden group cursor-pointer hover:border-secondary transition-colors">
              <div className="h-40 bg-cover bg-center relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogX7hfPE9rvZGPDNlTicXbWIxOzgoKTrWBxCyNYLh__yNrqZ1hqumM1n24P7CTQTuaPUY81A4JmXVCUTHCrdnRh28bHjVpUcCM8J_OSYrgKhNU8-3hpboUkBtxRAnG0711bNsk8FKBXFB6uLqA8CKtb_CMFHPETsvzjkH920ULBqJ89EJxjD8S3YI36Av2nPL31rVmSsf2_JMst1rjro0wEMYdLChbQk5jPZutA7r7I_T7qqlsiTbdlVkpF7b9-a-V-9Sp-qlMD2i"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
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
              <div className="h-40 bg-cover bg-center relative">
                 <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC_4TsDwu4JFrM9Q6U3S1AECj7TQdsV4zipaWzfgM8S2xl3Bq1ek8rjCO4Y8jV22hs0XAIMSh8iqDcu4tLi7UPB3HEWLgTQWHzKjE9ZHVv-QZhQGMRytCbSofOZaHKpNl9OB6Ctio5b7mpknIPvDhpZ5oqtqv2AAscgu_i2Oe1dwHmvDBZ22mBTfqcPUKNgw6BieYYeqa4wVRzz2di6ymQDFs6GcG-pIZc09Ea9X3y63Pl2Gya3k9WVbTG1Rnv3ZWIDownCVQ3dhc_"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
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
              <div className="h-40 bg-cover bg-center relative">
                 <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2HSo2HVD9hde9b4cgMMosxyOqi1mMI-opq0hv74FTI5yJ5hFxe1TNroShxtN5etMker6rNfj4vhgx85TkVdyL_VC05mGaxecCfWhoBFbLgMEsVM-RQBX-U3ZBCJG2YwSOHLQ_cs930jIqnMMKo7XfXuSjMU5l7UMLO2UNFxdZzJVc1u4D9G4dCupfc-SA083ATPPS6a065SBZT7_5K0o2LmnlGhxgssiQ-GmeR73AcGxJPQWsYVTonWbza703-h-zQO62CM0pbzHM"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
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
              <div className="h-40 bg-cover bg-center relative">
                 <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM4wysVdXvZmnyX9LZg1pK_GckgM4Z0Jk2QnW-BamD1n3MEF9ge0idw5Y9wGBg3MnMJNFAjHF9jATaOb18C5db-WMgLzfEZ8ifz6ZtcX_I2r62ZtQcidWvqzOXARQsTZTAq9NyYfH-X1kNoUuwDrTK1fiyKC9YUwrXj62IADbSeLbRFgyD_Cxr_XNilzMKRd8fzqqf6Nlc80Y4UmcdddWciNOlF9aDUATX3GVkX8j4pJJBbxbj3ycIn4Y5oY_y7_-DF6cQxqbEyR-9"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
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
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-background-dark"
            >
              <Library />
              Accéder à la bibliothèque complète
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
