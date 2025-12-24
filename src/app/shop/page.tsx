import { ArrowRight, Search, ShoppingCart, Star, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";

export default function ShopPage() {
  const trendingProducts = [
    {
      name: "Kofi's Journey Tee",
      price: "$25.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEqZWGHoDKdpjSDXt6slapbTpIcdQNLGdU2jrrsLf0vGbvdwcAZqrM1BHGfRJt5GYj1Vf3vbj8REqyHXnWgPdzn3_2ybQpUJKZrkL5mLo4rZKnWQYwJLkxutR3blX9js_tIe3grGrPCtCHi4sWtids6bCqcSEycJbZHuJN_h_-RVyOfO67_mumR47kZ447YCUpvSSlAZgMBAMYOV5MpSgtU3C6BXucCXvjEaQG-p-EJmR2PWgzHX8DSQoQQoGxRpr3mzu3ccXevexW",
      alt: "Black t-shirt featuring a stylized golden graphic of an African warrior character",
      tag: "HOT",
      tagColor: "bg-red-500",
    },
    {
      name: "Sundiata Epic Poster",
      price: "$15.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGFUkk9GEjb0whqRazYhJQ95Bi1OvswYDfzMXI7w3lvPUD6zXGCbQvIefXbFSaadTe-J4U_2Tt_rza6M1apcKkuEXTvG_C8Ndkm9IbJchTneepTXJvPJZsYf5Hbrltsw5QR-usDEg4bay67oR003tkIeM33O1qlKpvPKUTm5uWFhpS3KkZnpR7gZXBztB_6TDjIA-_lIqUr_S6YcufqSl5VQx2VhMJm-qsn5R7ARVIVg2FyKVd52qIxURsL4LLE5Mpc8o6xxAjRwSv",
      alt: "Large poster print with vibrant colors depicting a futuristic African cityscape",
    },
    {
      name: "Anansi Totem Mug",
      price: "$12.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnwH3wwvrciw9TWmlvZMswCIFSdZBl9t-JPUEhi5DChQjisFZJ-fusnZzx2PRPIzGtNhrVfveFDWboT87QPXGk9KFPinY6tAb5FwRLvsWIECd5qev6ObHlQLPyEK8w81jLOfrNErXIpAx-LzAZDZ_3hletPX0qmoDWqgMpbByzWP74vZyxdjpC6LNkj1Lv9JtvJZcCwKqaksAL_50vONKEbkbfHetp72KYKp7xR_ihbErVqPTSEk4PlpFMeFbOK7ZjNHKPfqVQZrY0",
      alt: "Ceramic mug with traditional geometric patterns in black and orange",
    },
    {
      name: "Zebra Pattern Hoodie",
      price: "$45.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlzJSO1BWSsFsTiNX80poqf6hfJApo3pkGODk5Rr4Os-XLQKvTTLgrHV_3lOBDmw8mNdsA0kQ3aps9QnXVo4WSeFQIEEHqjk7Qf-_3eN8rfv6oyLPuFriTl3Uuc6B3k4COSE1O7o-oqGCntsdOH1DvBOf7mQpIa6h-l0Fv_-I7wuokgo5NdLmHX6wnW6ankgz4-V5DvSJMh3YwN_8MvW_pfv9Blri2-hrMtn6WKxAwPISiEWZzs3u1Ww1MtobseSBv51cOl_g7s_CA",
      alt: "Hoodie with zebra print pattern on the sleeves and logo on chest",
    },
  ];

  const freshDrops = [
    { name: "Lagos Vibes Tote", price: "$18.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQdngGE6zUSdKf2EKrFU-Cf8nFlDk-2xUpiuB7JtLQLpxPDF3cEV9pc7HMxjgi7ng4yWSPuHQ-rTKe2Cn_KdDoUIN90MEZ-CeC1-kb1yf4OljpLUc-4sePOCk6_o8hX3ST6QSm9Ox7sQf_G3GdjgyxWYUrz8nFKdvcwYq8BNX3pN30CDi20d_8UFOOHk0ds5Np-zvIt7hvig5wwOrzmBjPDlD_TbyCFGZqYfcTQeyJvdgcABYyaAhCshlHJmePuTWWkA3xwVvrBY6t", alt: "Tote bag with minimalist line art" },
    { name: "Pattern Case 13", price: "$22.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA262FNLIjqP0APjsERu8xYmXJu-aLSWCFhPAJDd3Ke-m8XnZlI7_o51b8LME3y7i-PfYJvgeiL3x2qMnnBzFhGxIe35SX2LNv4cm_TgI-6AjfzpFExGGaOyyDfuhy4wolF8RXSxtaq7Wsa35-AYDnZf7Osz5mfsl2gUHN_9yLk2N3I_zwIO7XGm6fPvJFbiZEX9plWD8aZoqBBCGtpJEDkcoi0GRXiLN5-vT0fODIIBL5TqJYgJBCBPwwh0FXH12qJMENq5cyZ0Tui", alt: "Phone case with colorful geometric pattern" },
    { name: "Storyteller Journal", price: "$14.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVBhLRnql3NgehjFcUJSDhAF2Zhbf8VwuWsgCjg1WoqZqEvLUkyZh09SRfv84y8OiP7qnW3ooeW3ztHgv0Yi0lpabD0XsJc3t_CCfeOCai1oT5S1PeMQ0L8gJ6OL-z3Ef1ZBViky3XIjl4LriRMtknczor4VwUyWM1liMtzRBo6a-wHCQbV0ZUliJl3Ra_iBq3FGYtAErFAKQ4tduWTsBkA56O0JRdSxt547z4kukqX_oWUJp6mamQiymPw596wM3yVfH_nQQgD5YR", alt: "Notebook with African art cover" },
    { name: "AfriStory Cap", price: "$28.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_gdDjp7ZE6Vx1Sn-Vj1-PTu5pmubfWWMeDRgVeHFneaRUMsAoXAidDNme6w98MFskg1Vg78W85s27gekQ4Ibo1rkziVcZGL7QjzKg9Nd-tmKjhCA8Q17hbKDfHje2_ndwvkQbgmTVa8_5DA6erCYtGolEJqqWf_2sEshoJIysuSUWvn2YIRU60HaXXxmqoIAofat-c219XVnUzteO4Z2rbMKxQ9udWrFQY1GJJmsxaItfOPB4M9eSDsiaZ7n9zcjccV4cliqNqQe-", alt: "Snapback hat with embroidered logo" },
    { name: "Spirit Socks", price: "$10.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCgCyNJwXdpF-b7G76teuw9_cox1Ti-vcmDcFafTrzyj-erOcO4KIOzp8S1XGbbjNQvbyAO-ewo7HzF9nNVxWYqjKTAJxrYmLM-LOWU1a1hQSa-23zg5FYlVOFNVa-At2vPsTkx4f6TbrwQzInsudMvlhftxtYUYicMCCLRYr21wdncDm6dwDV7sOhTvotLxHqVtzg68_so2wmszpCTCaLp842G4oTcgIq1WPC1Ua8mv8beV9iWZ4T23hI5tD709L8HdBeiUvWtjj6", alt: "Pair of socks with colorful patterns", className: "md:hidden lg:flex" },
  ];

  const categories = ["All Items", "Apparel", "Art Prints", "Accessories", "Limited Editions", "Stationery"];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white">
      <Header />

      <main className="flex flex-1 justify-center py-5">
        <div className="flex w-full max-w-[1200px] flex-1 flex-col px-4 md:px-10">
          <div className="@container mb-10">
            <div
              className="flex min-h-[480px] flex-col items-start justify-end gap-6 rounded-xl bg-cover bg-center bg-no-repeat px-6 pb-10 md:px-12"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSop2jgtlZ4GyHIJ6oz5pKY3XePecSjKbcthiiz0dEoCgNcd6ENpZejDXxj3cV4d_7dfgIxOZBpFgC1G8Vr2XTQJXOOk9HcXe7lpS4ZF9BA-_sm94Tyxu3XkqPFZP6CUgAU3HX-j6XTs3E3Jl7VTQmrC20t-8ZjiYmBTkpRkZmZwfXggTcDc2WMksmeUJ6cKyX1GLjHF4EpEfIwMu9xiQjL_1hXBtEUpI_GaPnBvX_h17G4it3gxB556CFFuekp1SnQy9pnLOAqC4d")` }}
              data-alt="Abstract vibrant African pattern background with warm orange and deep brown tones"
            >
              <div className="max-w-2xl flex-col gap-2 text-left">
                <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm">
                  <span>NEW COLLECTION</span>
                </div>
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white shadow-sm md:text-6xl">
                  Wear the Stories You Love
                </h1>
                <h2 className="mt-2 max-w-lg text-sm font-normal leading-normal text-white/90 md:text-lg md:font-medium">
                  Official merchandise from Africa's top creators. Support the artists directly with every purchase.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="h-12 px-6 text-base font-bold tracking-[0.015em] text-background-dark hover:bg-white">
                  Shop New Arrivals
                </Button>
                <Button size="lg" variant="outline" className="h-12 border-white/20 bg-white/10 px-6 text-base font-bold tracking-[0.015em] text-white backdrop-blur-md hover:bg-white/20">
                  View Lookbook
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex min-w-max gap-3">
              {categories.map((cat, i) => (
                <Button key={cat} variant={i === 0 ? "default" : "secondary"} className="h-10 shrink-0 basis-auto px-5 active:scale-95 text-sm font-bold border border-transparent hover:border-primary/50 transition-colors">
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pb-4 pt-2">
            <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">Trending Now</h2>
            <Link href="#" className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {trendingProducts.map((product) => (
              <div key={product.name} className="group flex flex-col gap-3">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-shop-surface-dark">
                  <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <Button size="icon" className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary shadow-lg">
                    <ShoppingCart />
                  </Button>
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">{product.tag}</div>
                  )}
                </div>
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-base font-semibold leading-tight text-white transition-colors group-hover:text-primary">{product.name}</h3>
                    <p className="font-bold text-white">{product.price}</p>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-xs text-text-secondary">
                    <HeartHandshake className="h-3.5 w-3.5" />
                    Supports Artist
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16 overflow-hidden rounded-2xl bg-shop-surface-dark">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-64 w-full md:h-auto md:w-1/2">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfSl8XQaLN5ZwGhlYKt_cwJRHoR5mb83I5YaNp17OJ_fxYzf4chfstRydNyKKGF4_4SY94pT-HS7wKU1z1UDt7Ovtnh4_6yhmg1i-kLN6BweyEqrRl4EL3VZnt9y9pUWuGLcv6ItUlNvr9qskZGXq2fVagJkLVEDRrOeCqYZ331tkkOgez-g3Lc-tBpXmGYH_UP2XJBaA5WodX05Ag80KRU3UdMw9f6Jvtf4uGMFzDr8734nnZj683xMeikEqJpiuC9mUA1QT8fo7e" alt="Portrait of an African digital artist working on a tablet in a colorful studio" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent md:bg-gradient-to-r md:via-transparent"></div>
              </div>
              <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
                <div className="mb-4 flex items-center gap-2">
                  <Star className="text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured Artist</span>
                </div>
                <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">Meet Amara Diallo</h2>
                <p className="mb-6 leading-relaxed text-text-secondary">
                  The creator behind the award-winning graphic novel "Sands of Time". Amara's exclusive merchandise collection captures the vibrant spirit of ancient Mali with a futuristic twist.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="h-10 px-6 text-sm font-bold text-background-dark hover:bg-white">
                    Shop Amara's Collection
                  </Button>
                  <Button variant="outline" className="h-10 border-white/20 bg-transparent px-6 text-sm font-bold text-white hover:bg-white/10">
                    Read Bio
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pb-4 pt-2">
            <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">Fresh Drops</h2>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-shop-surface-dark text-white hover:bg-shop-surface-dark">
                <ChevronLeft />
              </Button>
              <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-shop-surface-dark text-white hover:bg-shop-surface-dark">
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {freshDrops.map((product) => (
              <div key={product.name} className={`group flex flex-col gap-2 ${product.className || ''}`}>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-shop-surface-dark">
                  <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="px-1">
                  <h4 className="truncate text-sm font-medium text-white">{product.name}</h4>
                  <p className="text-xs text-text-secondary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#493c22] pt-10 pb-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-white">
                  <div className="h-6 w-6 text-primary">
                    {/* Placeholder for Coin Icon */}
                    <svg className="h-full w-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-white">AfriStory Shop</h2>
                </div>
                <p className="text-sm text-text-secondary">Empowering African creators by bringing their stories to life through exclusive merchandise.</p>
              </div>
              <div className="flex gap-12">
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-white">Shop</h4>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">New Arrivals</Link>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Best Sellers</Link>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Artists</Link>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Sale</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-white">Support</h4>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Help Center</Link>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Shipping</Link>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Returns</Link>
                  <Link href="#" className="text-sm text-text-secondary hover:text-primary">Size Guide</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold text-white">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="w-full rounded-lg border-none bg-shop-surface-dark px-4 py-2 text-sm text-white placeholder:text-text-secondary/50 focus:ring-1 focus:ring-primary" />
                  <Button className="px-4 text-sm font-bold text-background-dark hover:bg-white">Join</Button>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-text-secondary md:flex-row">
              <p>© 2023 AfriStory. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
