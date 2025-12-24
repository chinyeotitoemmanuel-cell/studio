import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Plus } from "lucide-react";

type HeroSectionProps = {
  image: ImagePlaceholder;
};

export function HeroSection({ image }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl shadow-xl group">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      <Image
        src={image.imageUrl}
        alt={image.description}
        data-ai-hint={image.imageHint}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="relative h-[480px] w-full" />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12 items-start">
        <div className="mb-4 flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-md px-3 py-1 border border-primary/30">
          <Star className="text-primary h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wide text-primary">
            Exclusivité Pro en vedette
          </span>
        </div>
        <h1 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl drop-shadow-lg">
          La Légende de Wagadu
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg font-medium text-gray-200 leading-relaxed drop-shadow-md">
          Découvrez la saga afro-futuriste qui captive le monde entier. Une épopée de royaumes perdus et d'esprits numériques.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" className="shadow-[0_0_20px_rgba(242,166,13,0.3)] hover:shadow-[0_0_30px_rgba(242,166,13,0.5)] transition-all">
            Lire maintenant
            <ArrowRight />
          </Button>
          <Button size="lg" variant="secondary" className="bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/10">
            <Plus />
            Ajouter à la liste
          </Button>
        </div>
      </div>
    </section>
  );
}
