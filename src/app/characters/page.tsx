'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CharacterList from "@/components/CharacterList";
import FilterBar from "@/components/Filterbar";
import SearchBar from "@/components/SearchBar";
import { fetchCharacters } from "@/services/characters"
import type { Character } from "@/types/character";
import type { StatusFilter } from "@/types/status";


export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterTerm, setfilterTerm] = useState<StatusFilter>("");


  useEffect(() => {
    async function loadData() {
      try {
        setHasError(false);
        const { results } = await fetchCharacters(searchTerm, filterTerm);
        setCharacters(results);
      } catch (error) {
        console.error(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    const timer = window.setTimeout(() => {
      loadData();
    }, 500);

    return () => window.clearTimeout(timer);
  }, [searchTerm, filterTerm]);
  

  if(isLoading) {
    return (
      <main className="flex flex-1 flex-col justify-center items-center pb-7">
        <Image
          src={"/images/portal-loading.png"}
          alt="Imagem do portal carregando"
          width={200}
          height={200}
          className="w-80 animate-spin [animation-duration:10s]"
        />
        <h2 className="animate-pulse">
          Aguarde carregando o portal...
        </h2>
      </main>
    );
  }

  if(!characters.length) {
    return (
      <main className="flex flex-1 flex-col items-center py-6 gap-y-8">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterBar activeFilter={filterTerm} onClick={setfilterTerm} />
        <h2 className="animate-pulse text-status-muted font-bold text-2xl">
          Personagem não encontrado!
        </h2>
      </main>
    );
  }

  if (hasError) {
    return (
      <main className="flex flex-1 flex-col justify-center items-center py-6 gap-y-8">
        <Image
          src={"/images/portal-failure.png"}
          alt="Imagem do portal carregando"
          width={200}
          height={200}
          className="w-80"
        />
        <h2 className="animate-pulse text-status-danger font-bold text-2xl">
          Tivemos uma instabilidade no Portal!
        </h2>
        <p>
          Volte para a{" "}
          <Link href="/" className="hover:text-primary underline">
            Página Inicial
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col justify-center items-center py-6 gap-y-8">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <FilterBar activeFilter={filterTerm} onClick={setfilterTerm} />
      <CharacterList characters={characters} />
    </main>
  );
}