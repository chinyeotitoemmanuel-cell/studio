
import Link from "next/link";
import { BookOpen, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export function Header() {
  return (
    <header className="w-full border-b border-solid border-border bg-background-dark px-4 lg:px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between whitespace-nowrap max-w-[1200px] mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 flex items-center justify-center text-primary">
              <BookOpen className="h-7 w-7" />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AfriStory</h2>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/trending">Tendances</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/shop">Boutique</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/africoins">AfriCoins</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/forum">Communauté</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/profile">Profil</Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <div className="hidden md:flex relative items-center text-text-secondary focus-within:text-primary max-w-xs w-full">
                <div className="absolute left-3">
                    <Search className="h-5 w-5" />
                </div>
                <Input placeholder="Rechercher des histoires, des artistes..." className="pl-10 bg-surface-dark/70 border-none focus:ring-2 focus:ring-primary text-white placeholder:text-text-secondary" />
            </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="/login">Connexion</Link>
            </Button>
            <Button className="font-bold" asChild>
                <Link href="/signup">S'inscrire</Link>
            </Button>
             <Button size="icon" variant="outline" className="bg-surface-dark border-none hover:bg-surface-dark/70">
                <ShoppingCart className="h-5 w-5" />
            </Button>
             <Button size="icon" variant="outline" className="bg-surface-dark border-none hover:bg-surface-dark/70">
                <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="lg:hidden text-white">
          <Menu />
        </div>
      </div>
    </header>
  );
}
