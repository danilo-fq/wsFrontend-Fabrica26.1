import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/types/character";

interface CharacterProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterProps) {
  const { id, name, image: imageUrl, species, status } = character;

  type Status = "Alive" | "Dead" | "unknown";

  const statusColors: Record<Status, string> = {
    Alive: "bg-[#55cc4422] text-[#55cc44] border-[#55cc4444]",
    Dead: "bg-[#d63d2e22] text-[#d63d2e] border-[#d63d2e44]",
    unknown: "bg-[#9e9e9e22] text-[#9e9e9e] border-[#9e9e9e44]",
  };

  return (
    <Link href={`/characters/${id}`} className="w-fit">
      <div className="bg-bg-200 border border-primary/50 flex flex-col items-center rounded-xl overflow-hidden cursor-pointer hover:border-primary">
        <Image
          className="w-full h-44 object-cover"
          width={200}
          height={200}
          src={imageUrl}
          alt={`${name} imagem`}
        />
        <div className="flex flex-col items-start gap-y-1 py-3 px-3 w-full">
          <h3 className="text-xs">{name}</h3>
          <p className="text-xs font-bold">{species}</p>
          <p
            className={`${statusColors[status]} border px-2 rounded-4xl text-xs`}
          >
            ● {status}
          </p>
        </div>
      </div>
    </Link>
  );
}