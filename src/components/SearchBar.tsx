'use client'

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="group bg-bg-200 border border-[#89cff033] flex focus-within:border-primary gap-x-3 py-2.5 px-7 rounded-full w-[70%]">
      <Search
        className={value ? "text-primary" : "group-focus-within:text-primary"}
      />
      <input
        value={value}
        placeholder="Digite o nome de um personagem"
        type="text"
        className="flex w-full outline-none text-primary placeholder:text-[#89cff033]"
        onChange={(event) => onChange(event.target.value)}
      />
      {value && <X className="cursor-pointer" onClick={() => onChange("")} />}
    </div>
  );
}