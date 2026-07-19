export const typeColors: Record<string, string> = {
  neutral: "#9CA3AF", fire: "#EF4444", water: "#3B82F6", grass: "#22C55E",
  electric: "#EAB308", ice: "#06B6D4", ground: "#A16207", dark: "#8B5CF6", dragon: "#4F46E5"
};

export const typeAvatarClass: Record<string, string> = {
  neutral: "avatar-neutral", fire: "avatar-fire", water: "avatar-water", grass: "avatar-grass",
  electric: "avatar-electric", ice: "avatar-ice", ground: "avatar-ground", dark: "avatar-dark", dragon: "avatar-dragon"
};

export interface Pal {
  id: string; name: string; combiRank: number; types: string[];
  workSuitability: Record<string, number>;
  passives: string[]; drops: string[]; isUnique: boolean;
}

export interface Combo {
  parentA: string; parentB: string; child: string; override: boolean;
}
