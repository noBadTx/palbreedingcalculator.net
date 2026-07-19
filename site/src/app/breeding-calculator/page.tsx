import type { Metadata } from "next";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title: "Forward Breeding Calculator — Parents to Child | PalBreed",
  description: "Enter two Palworld parents and instantly see their child, CombiRank, and any unique combo overrides.",
};

export default function Page() {
  return <Calculator />;
}
