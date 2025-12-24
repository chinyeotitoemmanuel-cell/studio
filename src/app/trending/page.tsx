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
  Public,
  Bolt,
  MenuBook,
  EmojiEvents,
  WorkspacePremium,
  Visibility,
  Favorite,
  ArrowForward,
} from "lucide-react";


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
      {/* Side Navigation */}
      <aside className="hidden md:flex flex-col w-64 h-full bg-[#231d10] border-r border-border shrink-0">
        <div className="p-6 pb-8">
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-black leading-normal tracking-tight">AfriStory</h1>
            <p className="text-text-secondary text-xs font-normal">Pan-African Reading Platform</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-2 px-4 overflow-y-auto">
          <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-white transition-colors group" href="/">
            <Home className="group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-white transition-colors group" href="#">
            <Library className="group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">Library</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-3 rounded-lg bg-surface-highlight text-white transition-colors" href="/trending">
            <TrendingUp className="text-primary" />
            <span className="text-sm font-medium">Trending</span>
          </Link>
          <div className="h-px bg-border my-2 mx-3"></div>
          <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-white transition-colors group" href="#">
            <Verified className="text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="text-sm font-medium">AfriStory Pro</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-white transition-colors group" href="#">
            <Edit className="text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm font-medium">AfriStory Draft</span>
          </Link>
        </nav>
        <div className="p-4 mt-auto">
          <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-white transition-colors group" href="#">
            <Settings className="group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
          <div className="mt-4 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-orange-600 border border-white/20"></div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-white">Kwame D.</p>
              <p className="text-xs text-text-secondary">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto">
        <div className="w-full max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">
          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center mb-2">
            <h1 className="text-white text-lg font-black">AfriStory</h1>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu />
            </Button>
          </div>

          {/* Page Header & Filters */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Classements &amp; Tendances</h2>
                <p className="text-text-secondary text-base">Based on global reader activity and engagement.</p>
              </div>
              <div className="flex bg-surface-dark/50 p-1 rounded-lg self-start md:self-auto">
                <Button variant="default" className="px-4 py-1.5 rounded-md text-sm font-bold shadow-sm bg-primary text-background-dark">This Week</Button>
                <Button variant="ghost" className="px-4 py-1.5 rounded-md text-text-secondary hover:text-white text-sm font-medium">Month</Button>
                <Button variant="ghost" className="px-4 py-1.5 rounded-md text-text-secondary hover:text-white text-sm font-medium">All Time</Button>
              </div>
            </div>
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 border-b border-border">
              <Button variant="link" className="flex items-center gap-2 px-4 py-2 border-b-2 border-primary text-white font-bold whitespace-nowrap h-auto">
                <Public className="text-primary" size={20} /> Global
              </Button>
              <Button variant="link" className="flex items-center gap-2 px-4 py-2 border-b-2 border-transparent text-text-secondary hover:text-white font-medium transition-colors whitespace-nowrap h-auto">
                <Verified size={20} /> AfriStory Pro
              </Button>
              <Button variant="link" className="flex items-center gap-2 px-4 py-2 border-b-2 border-transparent text-text-secondary hover:text-white font-medium transition-colors whitespace-nowrap h-auto">
                <Edit size={20} /> AfriStory Draft
              </Button>
            </div>
          </div>

          {/* Top 3 Podium Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mt-4">
            {/* Rank 2 */}
            <div className="order-2 md:order-1 bg-surface-dark rounded-xl p-4 flex flex-col gap-4 border border-border hover:border-white/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-white/10 text-white font-black text-4xl p-4 leading-none opacity-10">02</div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                    <Image width={400} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Futuristic African city artwork cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8bsUL8VHP5wRn1A2nqbZVgbBBof6BPeqD1phQRwexrrGKa2_npkR4Ha2LkK1xl8s2dju5OzVYzyT5HAplXxyhxtmpoHxVw3d3pF91iTjJ5ONZlwKhdjl3uXDtNx3FpS5CujMtugaGVuayIQBU7TC_RpZXRVWz8zqycLMtZb5obT5s9MxHHlifHmDeLpT0y92D-XSN33-FiRs315utOajMtbTTbNFiRCGE7KFa6owpdwsh2mAEtg08ZltjY-OvlgHF6lndSrIi52xz"/>
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                        <WorkspacePremium className="text-gray-400" size={14} /> #2
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-white font-bold text-lg leading-snug truncate">Cyber-Lagos 2077</h3>
                    <p className="text-text-secondary text-sm">Chidi O.</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text-secondary">
                        <span className="flex items-center gap-1"><Visibility size={14} /> 8.5k</span>
                        <span className="flex items-center gap-1"><Favorite size={14} /> 3.2k</span>
                    </div>
                </div>
            </div>
            {/* Rank 1 */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-surface-dark to-[#231d10] rounded-xl p-5 flex flex-col gap-5 border-2 border-primary/50 shadow-[0_0_30px_rgba(242,166,13,0.1)] relative overflow-hidden transform md:-translate-y-4 md:scale-105 z-10">
                <div className="absolute top-0 right-0 p-4">
                    <EmojiEvents className="text-primary" size={36} />
                </div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                    <Image width={400} height={600} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Golden stool glowing artifact artwork cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBik_NlwbY0Yfp2amx5XZDcd1XGWwxw4EuxkqUlg2CHD_5mTvDMw4Nm7yHc0mx8jSXA-YyuNlHlO20PVQw1nVaxS3psdwz8via7AXDFJgNBheL6c0axBBHiU0HCnOj94Q3M-hbkd3X5PjKccay6BObag_rWGR9Oe0gwXD8RWmDDPutAx4iG1CQBlUpUI7jbzEoh0dX7KQyEQyheww3fh3kpooUMzUAirn8XkXnFJhQ8SNjMC9SmxfZuKQ-EhafgJkzCsooD_ZSSPeiB"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-background-dark text-xs font-bold mb-2">Top Trending</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-white font-black text-2xl leading-tight">The Golden Stool</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-primary font-medium text-sm">Kwame Doe</p>
                        <span className="text-xs px-2 py-0.5 rounded border border-white/20 text-white/60">Pro</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary">
                        <span className="flex items-center gap-1.5"><Visibility className="text-white" size={16} /> 15k</span>
                        <span className="flex items-center gap-1.5"><Favorite className="text-primary" size={16} /> 8k</span>
                    </div>
                    <Button className="mt-2 w-full py-3 bg-primary hover:bg-primary/90 text-background-dark font-bold rounded-lg transition-colors flex items-center justify-center gap-2 h-auto">
                        <span>Read Now</span>
                        <ArrowForward size={18} />
                    </Button>
                </div>
            </div>
            {/* Rank 3 */}
            <div className="order-3 md:order-3 bg-surface-dark rounded-xl p-4 flex flex-col gap-4 border border-border hover:border-white/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-white/10 text-white font-black text-4xl p-4 leading-none opacity-10">03</div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                    <Image width={400} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Abstract ancestral spirits artwork cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUlpRc4497wMsGcWqhxpno9p2JZKFAfpor3tHbtpR2JfJsM3F1rZjPJ62XJmAY1QJjIvv-ng8AUKlDbNIf9v5hy7FEliWNZiof5OcgBGbLKtEons1fQVcRV5NiO_ZKcKXz_0tw_Cqj2bITzuna0ETC0ERPFadpAAyQX6aki_WUqiL5NjS8jGCX26Rqc_WBqMEsSH1ZkiZcruBnIRCYo0QWUkZsK_YZJLEZK3Ue5_4JqZekVD0uuR8VoRZfxGAmfrrREWncacdY4mk"/>
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                        <WorkspacePremium className="text-orange-700" size={14} /> #3
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-white font-bold text-lg leading-snug truncate">Ancestral Echoes</h3>
                    <p className="text-text-secondary text-sm">Nia S.</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text-secondary">
                        <span className="flex items-center gap-1"><Visibility size={14} /> 7.1k</span>
                        <span className="flex items-center gap-1"><Favorite size={14} /> 2.5k</span>
                    </div>
                </div>
            </div>
          </section>

          {/* Rising Stars */}
          <section className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bolt className="text-primary" />
                <h3 className="text-white text-xl font-bold">Rising Stars</h3>
              </div>
              <Button variant="link" className="text-sm text-primary hover:text-white">View All</Button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {risingStarsData.map((star, index) => (
                <div key={index} className="snap-start shrink-0 w-[200px] flex flex-col gap-3 group cursor-pointer">
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-highlight relative">
                    <Image width={200} height={267} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={star.title} src={star.imageUrl} />
                    <div className={`absolute top-2 right-2 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider ${star.type === 'Pro' ? 'bg-purple-500/80' : 'bg-blue-500/80'}`}>{star.type}</div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base truncate group-hover:text-primary transition-colors">{star.title}</h4>
                    <p className="text-text-secondary text-xs mt-1">By {star.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Leaderboard */}
          <section className="flex flex-col gap-4 pb-12">
            <h3 className="text-white text-xl font-bold">Top 10 Leaderboard</h3>
            <div className="flex flex-col gap-2">
              <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-text-secondary uppercase tracking-wider border-b border-border mb-2">
                <div className="col-span-1 text-center">Rank</div>
                <div className="col-span-6">Story</div>
                <div className="col-span-2 text-right">Views</div>
                <div className="col-span-2 text-right">Likes</div>
                <div className="col-span-1"></div>
              </div>
              {leaderboardData.map((item) => (
                <div key={item.rank} className="group bg-surface-dark/50 hover:bg-surface-highlight rounded-lg p-3 md:px-4 md:py-3 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="flex items-center gap-4 md:gap-0 col-span-1 justify-between md:justify-center">
                      <span className="text-lg font-bold text-text-secondary w-8 text-center">{item.rank}</span>
                      <div className="md:hidden text-xs text-text-secondary flex gap-3">
                        <span className="flex items-center gap-1"><Visibility size={12}/> {item.views}</span>
                        <span className="flex items-center gap-1"><Favorite size={12}/> {item.likes}</span>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                      <Image width={48} height={64} className="w-12 h-16 object-cover rounded shadow-md" alt="Book cover thumbnail" src={item.imageUrl}/>
                      <div className="flex flex-col">
                        <h4 className="text-white font-bold text-base group-hover:text-primary transition-colors">{item.title}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-text-secondary text-sm">{item.author}</p>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border ${item.isPro ? 'border-primary/30 text-primary' : 'border-white/10 text-white/50'}`}>{item.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block col-span-2 text-right text-sm text-text-secondary">{item.views}</div>
                    <div className="hidden md:block col-span-2 text-right text-sm text-text-secondary">{item.likes}</div>
                    <div className="col-span-12 md:col-span-1 flex justify-end">
                      <Button variant="ghost" size="icon" className="p-2 rounded-full hover:bg-primary hover:text-background-dark text-text-secondary transition-colors" title="Read">
                        <MenuBook />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full py-3 mt-4 rounded-lg border-border text-text-secondary hover:text-white hover:bg-surface-highlight transition-colors text-sm font-medium h-auto">
              Show More Ranks
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
}
