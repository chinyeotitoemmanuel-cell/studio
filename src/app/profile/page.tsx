import Image from "next/image";
import Link from "next/link";
import {
  Book,
  Edit,
  Info,
  Languages,
  Mail,
  UserPlus,
  Search,
  Share2,
  ShoppingBag,
  Verified,
  Eye,
  Heart,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/header";

export default function ProfilePage() {
  const works = [
    {
      title: "The Sun Warriors",
      subtitle: "Vol. 1 - Awakening",
      category: "Sci-Fi",
      likes: "1.2k",
      views: "45k",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFAprw70_w0wkJ6yVN1mIdYhoUMZMUvoBgawSqqkQ2nnoawhuaxqyLhZziFx44KBCMwbEVAhM_BVriNADtFRt1wH7NJ0XZFajCuNkoUTNlAduM-Ak7IVlxXxiMZm46r9T4GVu-ILtubQB_ae8tOpBDsM58rinYSQ2q4WO-Wv6z2Cq0nzd_AlHJFJXTu6_EQ4wF-grzi-y7C_CXgE7DYqSkh-PehYZdf9xmiREByS8IBXXwRf4aCNbkvFgW-JJlEOou-n4EJHzLCoPX",
      alt: "Cover art for The Sun Warriors showing a futuristic african warrior with glowing shield",
    },
    {
      title: "Tales of the Baobab",
      subtitle: "Anthology Series",
      category: "Fantasy",
      likes: "856",
      views: "12k",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FT7TjF_USf8VcBAszWHRXJhAmN1ZFnqZ4GTiu47kQXu38O8D-GzFBIjEWO2GZ5UMBNq2PWoDKmskwzOsUtCgnHoZ7GQPlHprA96xwr9ILq86jafJ1WzwchA7XaO-bn9xTLsshecUDTb9N32mjVqVWjpje81BxnpWp2cgzSVBhmoMqVkRFiTw2bRx1qjQXU_gKREUprxFhssS2giQCDW8hgjY-ahpEMJBfk-5GXqT4BVYOEV7C6e3QMNJW8OABsp2mZD7ZR5sLX_E",
      alt: "Cover art for Tales of the Baobab featuring a magical glowing tree at night",
    },
    {
      title: "Red Dust",
      subtitle: "Chapter 1",
      category: "Action",
      likes: "342",
      views: "8k",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9i2h-oEj3AZ9UcxZyoM2yMuEuBObWI5FivXXvcsN5SdnW4QWoWrkLVWmBfHxw-xQIunrKv-IRh_S9W87ozBPaJolOhVCYpYmYTRIlBN1dkP6rRUhpmS87XmvbKVVZ9Bzy5snh15y8zpfS66fOl9dNwIaaQ5o2wZ9OUrt4mVfD3LljgWt413T5kvNkAN2pJfy_8kOlEQpSfoUkpcU7yAcyJmtWEijyc5mbJOrQxIphNhMKHSr22JDP7FzFQ-8Ic8Z2uXIzPt6qt1nJ",
      alt: "Abstract red and black digital art representing intense action",
    },
    {
      title: "Kingdom of Gold",
      subtitle: "Historical Fiction",
      category: "History",
      likes: "2.1k",
      views: "89k",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCoOwDDstMo1mk2raXoGStgfXsFaI6Vh4_m_6a3HO6VB02s7sM4rWmtHMqhhLw3w-Li_DnhxO_jokjYmvLbVCS3FBmng0YViT247fdpSiy_GMC2x-iFfljQ1MDihfdsplsx5fmE-i6MCtxQsa6k-K8tL0lJbAntO4WBTPGN02haXf4hf8IP0m6Ga75pWCpLo8X9KLC7uDR8OCnH7nQYugyn7znxiByJStES8tNZ20UKt6bh-X89VJh-Xt3ikF0MDHO9FhAPe20m-JQ_",
      alt: "Golden patterns on dark background representing historical artifacts",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaoApOEvOIR6xBzvn4BykblzhyHqZpHsM4m4Xw91mAY4Fq1WY_27b5zvQ8wQ3Vv3u0o4XyAJy7o-5244AaP_W6pLpThHpfnSIyRb-CQE__9h5LK2yphlKYJi-iRSyFM9z3AfVCQToPH1VFywxG8hJ1_IKr4IB0A4dBYzKHI1p1iMphe0MCVjRwtChgN03sT2__xXyOAWJh8jy6b5EUUgQ6lK8SinKY8DQgCqRHUrO64oUUw5JecU2gDZYqbqDvPuLBf53K6VsKj5RT"
            alt="Abstract vibrant African geometric pattern banner in orange and dark browns"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
            className="transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-12">
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-200 dark:border-white/5 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-background-dark bg-gray-200 overflow-hidden shadow-lg">
                  <Image
                    alt="Kwame Osei Profile"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFqqIscv-TrWcBfIjhrzTQbklonGt_4mOFH46eQUJp_4MRFViPwnH22Acr6DVMDBPhb2dSqNoS7YG3cnzJcuweEp4ClgTV9fuJJR-06O1ewelkmeNcpExxcJOob6opG42Hjmxp2q0zLHDNe-5zEhoA6aXF-GwuoWSh5KdLcjjczLb_lrmU8oVpQ9al2huuH3SiNw-EmkpxojvC1n4dpHpp15R28zkU01wDHoOc8gRnvqRNkHlvqN6YK23AvlG9zhNuVVxTpDbFvYIM"
                    width={160}
                    height={160}
                  />
                </div>
              </div>

              <div className="flex-1 w-full pt-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        Kwame Osei
                      </h1>
                      <div
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary"
                        title="Pro Account"
                      >
                        <Verified className="h-[18px] w-[18px] fill-current" />
                        <span className="text-xs font-bold uppercase tracking-wide">
                          Artiste Certifié
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      Illustrator &amp; Storyteller from{" "}
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        Accra, Ghana
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <Button className="flex-1 md:flex-none">
                      <UserPlus className="h-5 w-5" />
                      <span>Suivre</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 md:flex-none border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-white/5"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Contact</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Creating afro-futurist narratives that inspire and
                      challenge the status quo. Specializing in digital comics
                      and graphic novels that blend traditional folklore with
                      sci-fi elements. Currently working on "The Sun Warriors"
                      saga.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                        href="#"
                      >
                        <Languages className="h-5 w-5" />
                        kwameosei.art
                      </a>
                      <a
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                        href="#"
                      >
                        <ShoppingBag className="h-5 w-5" />
                        Amazon Store
                      </a>
                      <div className="w-px h-4 bg-gray-300 dark:bg-white/20 hidden sm:block"></div>
                      <div className="flex gap-3">
                        <a
                          className="text-gray-400 hover:text-primary transition-colors"
                          href="#"
                        >
                          <Languages />
                        </a>
                        <a
                          className="text-gray-400 hover:text-primary transition-colors"
                          href="#"
                        >
                          <Share2 />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        12.5k
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Followers
                      </p>
                    </div>
                    <div className="w-px h-auto lg:h-px lg:w-full bg-gray-200 dark:bg-white/10"></div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        850k
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Views
                      </p>
                    </div>
                    <div className="w-px h-auto lg:h-px lg:w-full bg-gray-200 dark:bg-white/10"></div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        24
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Works
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-white/10 mb-8">
            <nav
              aria-label="Tabs"
              className="-mb-px flex space-x-8 overflow-x-auto"
            >
              <a
                className="border-primary text-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold flex items-center gap-2"
                href="#"
              >
                <Book className="h-[18px] w-[18px]" />
                Published Works
                <span className="bg-primary/10 text-primary text-xs py-0.5 px-2 rounded-full ml-1">
                  Pro
                </span>
              </a>
              <a
                className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2"
                href="#"
              >
                <Edit className="h-[18px] w-[18px]" />
                Drafts
              </a>
              <a
                className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2"
                href="#"
              >
                <Info className="h-[18px] w-[18px]" />
                About
              </a>
            </nav>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((work) => (
              <div
                key={work.title}
                className="group relative flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/5 overflow-hidden"
              >
                <div className="aspect-[2/3] w-full overflow-hidden relative">
                  <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">
                    {work.category}
                  </div>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <Button>
                      <Eye className="h-[18px] w-[18px]" />
                      Read Now
                    </Button>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {work.subtitle}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 dark:border-white/5 pt-3">
                    <span className="flex items-center gap-1">
                      <Heart className="h-[14px] w-[14px]" /> {work.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-[14px] w-[14px]" /> {work.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Load More Works
              <ChevronDown className="h-[18px] w-[18px]" />
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
