import type { ImagePlaceholder } from "./placeholder-images";

export type Story = ImagePlaceholder & {
  title: string;
  author: string;
  tier: "Pro" | "Draft";
  genre?: string;
};

export const storyData = {
  trending: [
    { id: "trending-1", title: "Born on a Tuesday", author: "Elnathan John", tier: "Pro" },
    { id: "trending-2", title: "Lagoon", author: "Nnedi Okorafor", tier: "Pro" },
    { id: "trending-3", title: "Black Leopard", author: "Marlon James", tier: "Pro" },
    { id: "trending-4", title: "Red Wolf", author: "Amara Okafor", tier: "Draft" },
    { id: "trending-5", title: "Binti", author: "Nnedi Okorafor", tier: "Pro" },
  ],
  newReleases: [
    { id: "new-release-1", title: "Solar Flare", author: "Author Name", tier: "Pro", genre: "Sci-Fi" },
    { id: "new-release-2", title: "Midnight Echoes", author: "Author Name", tier: "Draft", genre: "Thriller" },
    { id: "new-release-3", title: "Kente Chronicles", author: "Author Name", tier: "Pro", genre: "Historical" },
    { id: "new-release-4", title: "Spirit Cat", author: "Author Name", tier: "Pro", genre: "Folklore" },
    { id: "new-release-5", title: "Urban Legends", author: "Author Name", tier: "Draft", genre: "Urban Life" },
  ],
};

export const draftData = [
    { id: "draft-1", title: "Neon Accra", author: "Artist One" },
    { id: "draft-2", title: "Village Tales", author: "Artist Two" },
    { id: "draft-3", title: "The Last Warrior", author: "Artist Three" },
];
