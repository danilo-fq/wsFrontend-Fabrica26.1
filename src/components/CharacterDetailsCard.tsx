
import Image from "next/image";
import type { StatusFilter } from "@/types/status";
import { statusColors, statusLabels } from "@/types/status";

interface CharacterDetailsProps {
  id: number;
  name: string;
  image: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
};

export default function CharacterDetailsCard(character: CharacterDetailsProps) {
  const { id, name, image, gender, status, species } = character;
  return (
    <section className="bg-bg-200 border border-primary/30 flex flex-col rounded-xl h-fit w-[40%] p-5">
      <div className="flex flex-col items-center gap-y-3">
        <Image
          width={180}
          height={180}
          src={image}
          alt={`${name} imagem`}
          className="rounded-xl object-cover rounde-xl border border-primary/70"
        />
        <div className="flex flex-col items-center gap-y-1">
          <h3>{name}</h3>
          <p className="text-sm text-gray-500">ID #{id}</p>
          <div className="flex gap-x-2">
            <p
              className={`${statusColors[status]} border px-2 rounded-4xl text-xs`}
            >
              ● {statusLabels[status as StatusFilter]}
            </p>
            <p className={`bg-[#29495B] border px-2 rounded-4xl text-xs`}>
              {species}
            </p>
            <p className={`bg-[#2C4250] border px-2 rounded-4xl text-xs text-gray-400`}>
              {gender}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}