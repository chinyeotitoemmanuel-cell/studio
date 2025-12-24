import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { type Story } from "@/lib/data";

type StoryCardProps = {
  story: Story;
  type: "portrait" | "square";
};

export function StoryCard({ story, type }: StoryCardProps) {
  if (type === "portrait") {
    return (
      <Link href="#" className="group relative w-[160px] md:w-[200px] cursor-pointer">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-card shadow-lg">
          <Image
            src={story.imageUrl}
            alt={story.description}
            data-ai-hint={story.imageHint}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={cn(
            "absolute top-2 left-2 rounded bg-background/80 backdrop-blur px-2 py-0.5 text-[10px] font-bold uppercase border",
            story.tier === "Pro" ? "text-primary border-primary/20" : "text-foreground border-border/20"
          )}>
            {story.tier}
          </div>
        </div>
        <h3 className="mt-3 text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{story.title}</h3>
        <p className="text-xs font-medium text-muted-foreground">{story.author}</p>
      </Link>
    );
  }

  return (
    <Link href="#" className="flex flex-col gap-2 group cursor-pointer">
      <div className="aspect-square w-full rounded-xl overflow-hidden relative transition-all group-hover:ring-2 group-hover:ring-primary">
         <Image
            src={story.imageUrl}
            alt={story.description}
            data-ai-hint={story.imageHint}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
      </div>
      <div>
        <h3 className="font-bold text-sm text-foreground line-clamp-1 group-hover:text-primary">{story.title}</h3>
        <p className="text-xs text-muted-foreground">{story.genre} • {story.tier}</p>
      </div>
    </Link>
  );
}