import { Button } from "@/components/ui/button";
import {
  Grid,
  Rocket,
  Heart,
  ScrollText,
  Building2,
  Skull,
} from "lucide-react";

const categories = [
  { name: "Tout", icon: <Grid className="h-[18px] w-[18px]" />, active: true },
  { name: "Sci-Fi", icon: <Rocket className="h-[18px] w-[18px]" /> },
  { name: "Romance", icon: <Heart className="h-[18px] w-[18px]" /> },
  { name: "Folklore", icon: <ScrollText className="h-[18px] w-[18px]" /> },
  { name: "Vie Urbaine", icon: <Building2 className="h-[18px] w-[18px]" /> },
  { name: "Thriller", icon: <Skull className="h-[18px] w-[18px]" /> },
];

export function CategoryChips() {
  return (
    <section className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 min-w-max pb-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={category.active ? "default" : "secondary"}
            className="rounded-full px-5 py-2.5 h-auto text-sm font-medium gap-2 shadow-md dark:shadow-none transition-all dark:border dark:border-transparent dark:hover:border-primary dark:hover:text-primary"
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
