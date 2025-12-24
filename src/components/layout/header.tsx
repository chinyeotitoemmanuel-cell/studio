import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-solid border-border-color bg-background-dark px-4 lg:px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between whitespace-nowrap max-w-[1200px] mx-auto w-full">
        <div className="flex items-center gap-4 text-white">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 flex items-center justify-center text-primary">
              <BookOpen className="h-7 w-7" />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AfriStory</h2>
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-4">
          <nav className="flex items-center gap-6">
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/trending">Trending</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">AfriStory Pro</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">AfriStory Draft</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="/forum">Community</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-gray-600 hover:bg-surface-dark hover:text-white">Log In</Button>
            <Button className="font-bold">Sign Up</Button>
          </div>
        </div>
        <div className="lg:hidden text-white">
          <Menu />
        </div>
      </div>
    </header>
  );
}
