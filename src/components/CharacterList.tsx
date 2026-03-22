'use client'
import { useState } from "react";
import type { Character } from "@/types/character";
import CharacterCard from "./CharacterCard";
import ToggleList from "./ToggleList";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({characters}: CharacterListProps) {
  const [isGridView, setisGridView] = useState(true)
  return (
    <section className="flex flex-col items-center px-5 w-full">
      <ToggleList isGridView={isGridView} onClick={setisGridView} />
      <div
        className={
          isGridView
            ? "grid grid-cols-4 gap-3"
            : "flex flex-col gap-y-5 w-96 px-5"
        }
      >
        {characters.map((char) => (
          <div key={char.id} className={isGridView ?"max-w-52" : ""}>
            <CharacterCard isGrid={isGridView} character={char} />
          </div>
        ))}
      </div>
    </section>
  );
}