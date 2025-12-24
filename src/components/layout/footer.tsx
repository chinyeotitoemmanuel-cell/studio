import Link from "next/link";
import { Icons } from "@/components/icons";
import { Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t mt-10 px-4">
       <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-muted-foreground text-background">
              <Icons.logo className="h-3.5 w-3.5" />
            </div>
            <span className="font-bold text-muted-foreground">AfriStory © 2024</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link className="hover:text-primary transition-colors" href="#">À Propos</Link>
            <Link className="hover:text-primary transition-colors" href="#">Carrières</Link>
            <Link className="hover:text-primary transition-colors" href="#">Confidentialité</Link>
            <Link className="hover:text-primary transition-colors" href="#">Conditions</Link>
          </div>
          <div className="flex gap-4">
            <Link className="text-muted-foreground hover:text-foreground transition-colors" href="#">
              <Globe />
            </Link>
            <Link className="text-muted-foreground hover:text-foreground transition-colors" href="#">
              <Share2 />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
