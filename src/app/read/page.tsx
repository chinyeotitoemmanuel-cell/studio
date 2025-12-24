import {
  ArrowLeft,
  Settings,
  ArrowRight,
  MessageCircle,
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowForward,
  SkipPrevious,
  MoreVertical,
  Share2,
  Bookmark,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReadPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-background-dark/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/trending"
              className="group flex items-center gap-2 text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden text-sm font-medium sm:inline">
                Series
              </span>
            </Link>

            <div className="flex-1 px-4 text-center">
              <h1 className="truncate text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                Chapter 4: The Golden Savannah
              </h1>
              <p className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
                Kwame O. • 4 min read
              </p>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Share"
                className="text-slate-600 dark:text-slate-300"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Bookmark"
                className="text-slate-600 dark:text-slate-300"
              >
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Settings"
                className="text-slate-600 dark:text-slate-300"
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="More"
                className="sm:hidden"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-slate-200 dark:bg-white/5">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: "45%" }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl flex-grow items-center pt-20 pb-32 sm:px-4">
        <div className="flex w-full flex-col gap-0 bg-black shadow-2xl">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCmRRRAm_i8kpCvhzHU_BPfW4aQYF1aXGnnd2krrgGb6opDyBrBTfL1bh3im8dm_0XsdPyJGyb5ggtxzRSk5eXQwWk3hfvM3fjD3TtEn9NSuNjNgFXJPjXUklO5m9fblPkYjzuzbeByAdIhabSrhiZXioU63MHNiWAEPvID88H--MT5rcWf6AQe3Nc1si2aCYMu8aizTw3wsToJijkm_orSiFZN0a1-OL5IbmmPhMGdtwjvhJvp3oQKL1OTYQvOeLgGpmKZkuyRAcdl",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCgrMwc7zDldAfwCTD1b3K4B_wG6khMxWVVF3ELj02B70J5UdeSuTDdeJYnzO5EGb1ZhCHMZZDDQ_E9Y2A5C9AOIdNQ_I1p_k82YOQflh40fhJAYug1p23A3JJrUBE82fQW6RUUJVQUFFX72V5AMx5L1QbUx1giPr6G3hDZH9FaB_T_t4cADKQCccL9nDbgFSIwS9-HmREkbd68X9c-jp99ggoT329Iofv6-UzVKdgiTcRtmvJ7G50bhGC62wEG6ibsDMe5MoMkswhC",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA997tY_zbI-XHjqIN6PYDDEVbShjaLNkkoBMp1Mlbm9wXZO2c9-xy1hyYVxaw1_YASigcybNwVjX7QOa_xLcmujhK1TxP-fZUQ3YiHsUcC9nTnPw9H1JBuY0zH6wH9wi59DFAM4XOAUiZRrGZ457-CLuxf5LffOhmTSuCHXtu-4mhHiM0EhksT9q5lh9i8L55slyEFGnehJxI3MCpLJfq3zBRR06ZH0wmMBzD2xbhp7A9Hsj2eWAKZCc6xpKWz_C3jySWX77rHaR0n",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJfM8zH19I762ekWfZ7iDGLsSRoxRlA0vhj6fkE2cmjh5kNqxHvTI_IcInq9BFIwFYw8gkb7i1w_mSozK6Wa6P5-S6XDqK453bDPiSrsE0tcKnMO7oGtgG9-VpKnESVhVt_yUw5SohkGjVgbFdfcKBtRjdWlT6E7lydNbw2ZbWIm5BAgGezatQzkQu1WJvXItEnj5dHuYj9kY7zZZDS0ZRCoHtVsh1sebg_vKx8oux0zJAKtHKtIu74xom7gg2o3UDq20vyhVjT5ED",
          ].map((src, index) => (
            <div
              key={index}
              className="relative aspect-[2/3] w-full overflow-hidden sm:aspect-[3/4]"
            >
              <Image
                src={src}
                alt={`Comic panel ${index + 1}`}
                width={800}
                height={1200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* End of Chapter */}
        <div className="mt-4 w-full rounded-b-xl border-t-4 border-primary bg-white p-6 dark:bg-background-surface sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="h-1 w-16 rounded-full bg-slate-200 dark:bg-white/10"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Chapter Complete!
            </h3>
            <div className="flex w-full max-w-md items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-black/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5iUb3szgiXcBoudrX0SWGxZuEnh_1kE0OSqqWkXApJgreqgpZaK-bDfzFbYBI1TmH9vdx-lszzpZF8AHfIM8SpWGOOwjIDLwBMN1k9NQ3XHadEeL_KAgZr_sDNX-A2DAxXmq_44ypTiPus_IfjYkTek5kOHlItizqnhyeBgYl2bfcLmt9TTf-BbSh2cUWLhtPr5HQgD0CHaOjmTQbCyjdPEVryeiEVqI8Sh8moZi8BfHjsp6bJSv7NppiaTU7K5uJWSOXqavmK0wl"
                alt="Portrait of the artist Kwame O."
                width={48}
                height={48}
                className="h-12 w-12 flex-shrink-0 rounded-full border-2 border-primary object-cover"
              />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Kwame O.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Creator of "Golden Savannah"
                </p>
              </div>
              <Button
                variant="outline"
                className="gap-2 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
              >
                <Heart className="h-4 w-4" />
                <span>Support</span>
              </Button>
            </div>
            <div className="mt-2 flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <Button
                variant="secondary"
                className="flex-1 gap-2 rounded-xl py-3"
              >
                <MessageCircle className="h-5 w-5" />
                Comments (24)
              </Button>
              <Button className="flex-1 gap-2 rounded-xl py-3 font-bold shadow-lg shadow-primary/20">
                Next Chapter
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 w-full border-t border-slate-200 pt-8 dark:border-white/10">
              <h4 className="mb-4 text-left text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                You might also like
              </h4>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  {
                    title: "Neon Lagos 2099",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX532NpnpwIhO2SfEeREwfcieaj3GcizrvvrqnfIw2dpUzTxWl4Xp-jj2n_Iteur0cpsatVQm5AYimk4xZ2cgbBh1R0yQMZvYemhvDxnTurcSNRT0i26xGJ-21hzvLVQZaRVT0PM1aivdQ50Lka17hW3QbwiuLfV91iL4Tytlk9MFed1qrAmXR_AhylOpqUrLV-xIjgHa5SNoNCTO8kOl_GU5GRjbE8Xd_uO6tnZjMP75YQ9xAt3huf6GzoxBprYaLS43baMvd34zE",
                  },
                  {
                    title: "The Lion's Heart",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCdsQaUy6Tq17nBQdclhGQ5cTbfHDU_8CCpypnBONV_pKmYxwugp0XOW0gLca8EsQNq59CTJrd2Nr3TiG6OLi_sulPT7dcFa4yu4mRyOjkOiOzDE151Io2adTXRiHzeV3HUG0uCTrn29UHbf45iBUKYPZvRqTtIuihZ2UQJiYs1et3iLkORKY1b9NxNgd_0T72mZ7Ir8pydHk8YtLE3_LuBO3PhEpjx8PCqaRXNz9oWjjuiCavXAp1pq4MNd6tDwPAikUpbhPNm4L",
                  },
                  {
                    title: "Under the Baobab",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq2-zZnejkQJmdPZ0dARJt7FZ3YNO58Tn_uIx6S8VG5-nShJcxjS3tEG-jkEdgjoHtSytReiGOJkkHGPDIYgEbfn9g8BqN4HHd2TOzHmq3g7UmXQPdJ17cW-aZ2wQzoP8KRu1F7WqLXGjyytssG8OMNbzMdh4vUtVR_HRCdK5yS43SEoZ4xRenAX3Izd0VlBKoHENTEY-7vDWZZxdPTZcSrk-X5YTole1eX6Y1d3L0ZpaNsVw3dFXNgmRpZxC0Bm-hoSddXyR1jDY5",
                  },
                  {
                    title: "Queen of Zazzau",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDicL62nai-rXLWd6GsxYsB6ZubLY7ZgJZ3j5ifaGK92MLKlvAd7SZjDThIQ1MWPOYFiv9Ul9vfFHuPWAaIQVnQzw7TVQREU7b_JfgAkRY7pulaUnxYWUOgkaHuu82PD6E4_lTfIVxeYKjWMfchY3W7iwwsToYhTs3tJildQ1N0_eQx06S40JxiMszTd5jv5W2I3AeNnJTTN2M84AUeM92W0ov8IJ27ZmmV014f5BUZLjl1FLof1aYdCsXP7y3FhWrEjcd-fJ155mCs",
                  },
                ].map((item) => (
                  <Link href="#" key={item.title} className="group">
                    <div className="relative mb-2 aspect-[2/3] overflow-hidden rounded-lg bg-slate-800">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={200}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="truncate text-xs font-bold text-slate-800 dark:text-slate-200">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Controls */}
      <div className="pointer-events-none fixed inset-0 z-40">
        <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 items-center justify-center">
            <Button variant="ghost" size="icon" className="pointer-events-auto h-16 w-12 rounded-full text-white/50 hover:text-white hover:bg-black/20">
                <ChevronLeft className="h-8 w-8" />
            </Button>
        </div>
        <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 items-center justify-center">
            <Button variant="ghost" size="icon" className="pointer-events-auto h-16 w-12 rounded-full text-white/50 hover:text-white hover:bg-black/20">
                <ChevronRight className="h-8 w-8" />
            </Button>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-background-surface md:hidden">
        <Button variant="ghost" size="icon">
          <SkipPrevious />
        </Button>
        <div className="flex-1 px-4 text-center">
          <div className="text-xs text-slate-500">Page 12/28</div>
          <div className="mt-1 h-1 w-full rounded-full bg-slate-200 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: "45%" }}
            />
          </div>
        </div>
        <Button size="sm" className="font-medium">
          Next
          <ArrowForward className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
