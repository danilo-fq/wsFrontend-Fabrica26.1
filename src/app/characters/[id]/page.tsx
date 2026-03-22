'use client'
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import CharacterDetailsCard from "@/components/CharacterDetailsCard";
import CharacterDetailsEpisodiesCard from "@/components/CharacterDetailsEpisodesList";
import CharacterDetailsHeader from "@/components/CharacterDetailsHeader";
import CharacterDetailsInfoCard from "@/components/CharacterDetailsInfoCard";
import ErrorCard from "@/components/ErrorCard";
import IsLoadingCard from "@/components/IsLoadingCard";
import { fetchCharacterById } from "@/services/characters";
import type { CharacterDetailsInterface } from "@/types/character";

interface CharacterDetailsProps {
  params: Promise<{id: number;}>;
}

export default function CharacterDetails({ params }: CharacterDetailsProps) {
  const [character, setCharacter] = useState<CharacterDetailsInterface | null>(
    null,
  );
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { id } = use(params);

  useEffect(() => {
    async function getData() {
      try {
        setHasError(false);
        const getCharacter = await fetchCharacterById(id);
        console.log(getCharacter);
        setCharacter(getCharacter);
      } catch (error) {
        setHasError(true);
        console.error(error);
      } finally {
        setIsloading(false);
      }
    }
    getData();
  }, [id]);

  
  if(isLoading) {
      return <IsLoadingCard />
    }
  
    if(!character?.name) {
      return (
        <main className="flex flex-1 flex-col items-center py-6 gap-y-8">
          <h2 className="animate-pulse text-status-muted font-bold text-2xl">
            Personagem não encontrado!
          </h2>
          <Link href="/characters">Voltar Para Listagem</Link>
        </main>
      );
    }

    if (hasError) {
      return <ErrorCard />;
    }

  return (
    <main className="py-5">
      <CharacterDetailsHeader />
      <section className="flex justify-center gap-x-8">
        <CharacterDetailsCard
          id={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
          species={character.species}
          gender={character.gender}
        />
        <div className="flex flex-col gap-y-10 w-[40%]">
          <div className="border border-text/50 rounded-xl overflow-hidden pb-3">
            <CharacterDetailsInfoCard
              origin={character.origin.name}
              location={character.location.name}
              gender={character.gender}
              species={character.species}
            />
          </div>
          <div className="border border-text/50 rounded-xl overflow-hidden pb-3">
            <CharacterDetailsEpisodiesCard episodies={character.episode} />
          </div>
        </div>
      </section>
    </main>
  );

}