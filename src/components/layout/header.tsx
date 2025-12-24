import Link from "next/link";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Bell,
  Book,
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
            <div className="flex size-8 items-center justify-center rounded text-primary">
                <svg className="w-full h-full transition-transform group-hover:scale-110" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
            </div>
            <h1 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              AfriStory
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/trending" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trending
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              AfriStory Pro
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              AfriStory Draft
            </Link>
            <Link href="/profile" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
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
              className="block w-full rounded-lg border-none bg-gray-100 dark:bg-surface-dark py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-primary dark:text-white dark:placeholder-gray-400 transition-all"
              placeholder="Search titles, artists, genres..."
              type="text"
            />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
            <Search />
          </Button>
          
          <div className="flex items-center gap-2">
              <Button variant="secondary" className="hidden sm:flex">Log In</Button>
              <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
