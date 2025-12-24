
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  BookOpen,
  User,
  Lock,
  Eye,
  EyeOff,
  Star,
  Chrome,
  Facebook,
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const GoogleIcon = () => <FcGoogle className="h-5 w-5" />;

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="flex h-full grow flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1200px] rounded-2xl bg-card md:rounded-3xl shadow-2xl overflow-hidden border border-border/30 flex flex-col md:flex-row min-h-[600px] md:h-[800px]">
          {/* Left Side: Login Form */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col p-8 md:p-12 relative z-10 bg-background md:overflow-y-auto">
            <div className="flex items-center gap-3 mb-10 text-foreground">
              <div className="size-8 text-primary">
                <BookOpen className="w-full h-full" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">AfriStory</h2>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-foreground">
                Bon retour
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Accédez à votre espace Pro ou Draft pour continuer votre
                aventure narrative.
              </p>
            </div>

            <form
              className="flex flex-col gap-5 flex-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-foreground"
                  htmlFor="email"
                >
                  Email ou Nom d'utilisateur
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                    <User className="h-5 w-5" />
                  </div>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Ex: ama.koffi@email.com"
                    className="w-full bg-background dark:bg-surface-input border-border dark:border-border-input rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-sm font-medium text-foreground"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                  <Input
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Votre mot de passe"
                    className="w-full bg-background dark:bg-surface-input border-border dark:border-border-input rounded-lg py-3 pl-10 pr-10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="mt-2 w-full font-bold py-3.5 px-4 h-auto text-base rounded-lg transition-all transform active:scale-[0.98] shadow-[0_0_15px_rgba(242,166,13,0.3)]"
              >
                Se connecter
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Ou continuer avec
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-card dark:bg-surface-dark border-border hover:bg-accent dark:hover:bg-surface-highlight text-foreground py-2.5 px-4 rounded-lg transition-colors text-sm font-medium"
                  type="button"
                >
                  <GoogleIcon />
                  <span className="hidden sm:inline">Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-card dark:bg-surface-dark border-border hover:bg-accent dark:hover:bg-surface-highlight text-foreground py-2.5 px-4 rounded-lg transition-colors text-sm font-medium"
                  type="button"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                  <span className="hidden sm:inline">Facebook</span>
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Nouveau ici ?
                <Link
                  href="/signup"
                  className="font-bold text-primary hover:text-primary/80 ml-1"
                >
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
          {/* Right Side: Illustrative Artwork */}
          <div className="hidden md:block w-full md:w-7/12 lg:w-8/12 relative bg-background-dark">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRjqLDVVZ3SsVuboFY-timDWFErBpJ_AAfjCxiwLwhZVnIZfXQwl8WymL0Och3Jk06wkdhNQsFt8z67cgrnPeddVe9D_Jmu6PytjAN2m_0lP9VO1rHPfjytDdEevGN_QXGuRkS06ZocfNNUPA9nMGyD65J8pireyqq1ipiNFrQS2hWMW5tbksInd9JNCAp2CU-dsZJksyghNtF7pvwwAxRnG-Kf1UpB5w2gSuQW_TcL0E5FcAG7q-VB6E_xjApivzGgoDQKxj2uCff"
              alt="Futuristic afro-centric digital art showing a person with glowing geometric patterns and traditional wear in a neon city"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 w-full p-12 text-white z-20">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Star className="h-3 w-3" />
                  <span>Artiste en vedette</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  La Cité des Ancêtres
                </h3>
                <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                  Plongez dans l'univers de Kweku Ananse revisité par nos
                  meilleurs créateurs sur AfriStory Pro.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmseOHJPb3xGtyrpZhmm25_9D4d_IavT7fRKViOBuxZgqlNHP-eTc8cDf5X1FVDO2CmA94z41Uru-toGFZ2FKa2RZQ32OoJ--B83qT140QrDGcXyK97Da3Qy6suxgyLttRwj770-xMK0n5N8R7plwfLRyPmlWeC7j_juYBb7PO1MGHo6N3ACjDsE_gDCfsb9tde5C0XwbJ_9khtG0DQziujmb6PR3VA2aoXC33b3nTTVr01DVKcDBolEDHKQPjCNT9yQ1Jl57RXdps"
                      alt="Portrait of a female user"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-background-dark object-cover"
                    />
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gG6uAYuQiLkZEJzoivHwnN-5kTU6Z-GXYhx3QubDXwlHRLtYb1P6Ie20gBMivJehuPhkwztTlDbmRdf0Lz2yx1vnsPZT19_4f4B23fgSbykSMWsmGrgeG9L8bswddxJXxbXHqeYvTU85FLFhsXcouqRTR_pTkHlE2N_RLr01OqhXQb6-YnFV78A-31jDwEjTl90AJyKLR16ZcM52wl-jW-21GERw48Lb-qNNXQelOm1SnZARk_k1fRTj_2GeB05M7z6bBQaLMhL1"
                      alt="Portrait of a male user"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-background-dark object-cover"
                    />
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_nNLckwbTg6Vc9f69X2LlDz4ukSP-khMXiKPcgcofrHaE275KvedoQ1S7pbqW3KiT68wsE0uTA_qnAOwk1BcW_M3_tSrVX80zWUqOSUl-CW3q-QbFXWO4h-523Yz-IKf_skqNHtjcR5CLs3XoAOrDvvqD3B3pFoAn7hYLcru9McatpnvkgFxMsT-l0ixoRX1i-kK8mWAd0fFaiHm1Eh7x2SH6DyGeRsBXz_o4bzUD3LqkHqhF-51MjdcNH_FiD0Tt3OwLAq7Kfk_u"
                      alt="Portrait of a user with glasses"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-background-dark object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    Rejoignez +10k lecteurs et créateurs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground/50">
            © 2024 AfriStory. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
