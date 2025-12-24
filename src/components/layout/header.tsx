import Link from "next/link";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Bell,
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Header() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'user-avatar');

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm px-4 lg:px-10 py-3">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex size-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Icons.logo className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              AfriStory
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/trending" className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5">
              Trending
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              AfriStory Pro
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              AfriStory Draft
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Community
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 justify-end items-center gap-2 md:gap-4">
          <div className="hidden md:flex relative w-full max-w-xs h-10 group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <Input
              className="w-full h-full rounded-full bg-secondary dark:bg-card border-none pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary transition-all"
              placeholder="Search titles, artists, genres..."
              type="text"
            />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
            <Search />
          </Button>

          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary transition-colors">
            <Bell />
            <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-red-500 border border-background"></span>
          </Button>

          <Avatar className="h-9 w-9 border-2 border-transparent hover:border-primary cursor-pointer transition-all">
            <AvatarImage src={avatarImage?.imageUrl} alt={avatarImage?.description} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
