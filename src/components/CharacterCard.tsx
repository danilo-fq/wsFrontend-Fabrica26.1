import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/types/character";
import type { StatusFilter } from "@/types/status";
import { statusColors, statusLabels } from "@/types/status";

interface CharacterProps {
  character: Character;
  isGrid: boolean;
}

export default function CharacterCard({ character, isGrid }: CharacterProps) {
  const { id, name, image: imageUrl, species, status } = character;

  return (
    <Link href={`/characters/${id}`} className="w-fit">
      <div
        className={`bg-bg-200 border border-primary/50  cursor-pointer flex items-center hover:border-primary overflow-hidden rounded-xl ${isGrid && "flex-col"}`}
      >
        <Image
          className={isGrid ? "w-full h-44 object-cover": "w-48"}
          width={200}
          height={200}
          src={imageUrl}
          alt={`${name} imagem`}
        />
        <div className="flex flex-col items-start h-24.5 gap-y-1 py-3 px-3 w-full">
          <h3 className="text-xs overflow-hidden ">{name}</h3>
          <p className="text-xs font-bold">{species}</p>
          <p
            className={`${statusColors[status]} border px-2 rounded-4xl text-xs`}
          >
            ● {statusLabels[status as StatusFilter]}
          </p>
        </div>
      </div>
    </Link>
  );
}