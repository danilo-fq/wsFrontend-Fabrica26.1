'use client'
import type { Character } from "@/types/character";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({characters}: CharacterListProps) {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {characters.map((char) => (
        <div key={char.id} className="max-w-52">
          <CharacterCard character={char} />
        </div>
      ))}
    </div>
  );
}