import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Story } from "@/lib/data";
import { StoryCard } from "./story-card";

type StoryCarouselProps = {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  stories: Story[];
  cardType: "portrait" | "square";
  gridCols?: string;
};

export function StoryCarousel({
  id,
  title,
  description,
  icon,
  stories,
  cardType,
  gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
}: StoryCarouselProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-end justify-between px-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            {icon}
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <Link href={`#${id}`} className="text-sm font-bold text-primary hover:text-primary/80 flex items-center transition-colors">
          Voir Tout <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      {cardType === 'portrait' ? (
        <div className="flex overflow-x-auto gap-5 pb-6 scrollbar-hide snap-x">
          {stories.map((story) => (
            <div key={story.id} className="snap-start">
              <StoryCard story={story} type={cardType} />
            </div>
          ))}
        </div>
      ) : (
        <div className={cn("grid gap-4", gridCols)}>
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} type={cardType} />
            ))}
        </div>
      )}
    </section>
  );
}
