import { typeColors } from "@/lib/types";

export function TypeBadge({ type }: { type: string }) {
  const color = typeColors[type.toLowerCase()] || typeColors.neutral;
  return (
    <span className="badge" style={{ backgroundColor: `${color}26`, color }}>
      {type}
    </span>
  );
}
