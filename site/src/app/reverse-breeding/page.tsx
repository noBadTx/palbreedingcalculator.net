import type { Metadata } from "next";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title: "Reverse Breeding Calculator — Find Parent Pairs | PalBreed",
  description: "Pick a target Pal and see every parent combination that can breed it in Palworld.",
};

export default function Page() {
  return <Calculator />;
}
