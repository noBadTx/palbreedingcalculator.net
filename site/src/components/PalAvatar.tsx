import { palAvatarInitial } from "@/lib/data";
import { typeAvatarClass } from "@/lib/types";

export function PalAvatar({ name, primaryType, size = 96 }: { name: string; primaryType: string; size?: number }) {
  return (
    <div className={`result-avatar ${typeAvatarClass[primaryType.toLowerCase()] || "avatar-neutral"}`} style={{ width: size, height: size, fontSize: size > 80 ? "2rem" : "1rem" }}>
      {palAvatarInitial(name)}
    </div>
  );
}
