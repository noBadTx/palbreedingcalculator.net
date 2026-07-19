import { Pal, Combo } from "./types";

let palsCache: Pal[] | null = null;
let combosCache: Combo[] | null = null;

export async function getPals(): Promise<Pal[]> {
  if (palsCache) return palsCache;
  const res = await fetch("/data/pals.json");
  const data = await res.json();
  palsCache = data.pals as Pal[];
  return palsCache;
}

export async function getCombos(): Promise<Combo[]> {
  if (combosCache) return combosCache;
  const res = await fetch("/data/combos.json");
  const data = await res.json();
  combosCache = data.combos as Combo[];
  return combosCache;
}

export function findPal(pals: readonly Pal[], id: string): Pal | undefined {
  return pals.find(p => p.id === id);
}

export function findCombo<T extends { parentA: string; parentB: string }>(combos: readonly T[], a: string, b: string): T | undefined {
  return combos.find(c => (c.parentA === a && c.parentB === b) || (c.parentA === b && c.parentB === a));
}

export function reverseCombos(combos: readonly { parentA: string; parentB: string; child: string; override: boolean }[], childId: string): Combo[] {
  return combos.filter(c => c.child === childId).sort((a, b) => {
    const rankA = a.override ? 0 : 1;
    const rankB = b.override ? 0 : 1;
    return rankA - rankB;
  });
}

export function palAvatarInitial(name: string) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export function sortedPair(a: string, b: string) {
  return a < b ? [a, b] : [b, a];
}
