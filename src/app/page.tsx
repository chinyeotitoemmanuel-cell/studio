import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/pages/home/hero-section";
import { CategoryChips } from "@/components/pages/home/category-chips";
import { StoryCarousel } from "@/components/pages/home/story-carousel";
import { CommunitySpotlight } from "@/components/pages/home/community-spotlight";
import { CreatorPromo } from "@/components/pages/home/creator-promo";
import {
  TrendingUp,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Story, storyData, draftData } from "@/lib/data";


const getImage = (id: string): ImagePlaceholder => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    throw new Error(`Image with id ${id} not found`);
  }
  return img;
};

export default function Home() {
  const trendingStories = storyData.trending.map(story => ({
    ...story,
    ...getImage(story.id)
  }));

  const newReleases = storyData.newReleases.map(story => ({
    ...story,
    ...getImage(story.id)
  }));

  const draftStories = draftData.map(story => ({
    ...story,
    ...getImage(story.id)
  }));
  
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 flex justify-center py-6 px-4 md:px-8 bg-background dark:bg-background-dark text-foreground">
        <div className="w-full max-w-[1280px] flex flex-col gap-10">
          <HeroSection image={getImage("hero-image")} />
          <CategoryChips />

          <StoryCarousel
            id="trending"
            title="Trending in Lagos"
            description="Most read graphic novels in your region this week."
            icon={<TrendingUp className="text-primary" />}
            stories={trendingStories}
            cardType="portrait"
          />

          <CommunitySpotlight stories={draftStories} />

          <StoryCarousel
            id="new-releases"
            title="New Releases"
            icon={<Sparkles className="text-primary" />}
            stories={newReleases}
            cardType="square"
            gridCols="grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          />

          <CreatorPromo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
