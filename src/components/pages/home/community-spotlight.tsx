import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Paintbrush, Eye, Heart } from "lucide-react";
import type { Story } from "@/lib/data";

type CommunitySpotlightProps = {
  stories: Story[];
};

export function CommunitySpotlight({ stories }: CommunitySpotlightProps) {
  return (
    <section className="rounded-2xl bg-card/50 p-6 md:p-10 border">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Paintbrush className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">AfriStory Draft</h2>
          </div>
          <h3 className="text-2xl font-bold text-foreground">Community Spotlight</h3>
          <p className="text-muted-foreground mt-1 max-w-md">
            Discover raw talent from emerging artists across the continent. Free to read and support.
          </p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="#">Explore Drafts</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Link key={story.id} href="#" className="flex gap-4 rounded-xl bg-background p-3 hover:bg-accent transition-colors cursor-pointer group">
            <div className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary relative">
              <Image
                src={story.imageUrl}
                alt={story.description}
                data-ai-hint={story.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{story.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">Updated 2h ago</p>
              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> 1.2k</span>
                <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" /> 85</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
