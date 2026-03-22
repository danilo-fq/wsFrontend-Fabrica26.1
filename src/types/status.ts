import type { CharacterStatus } from "./character";

export type StatusFilter = "" | "Alive" | "Dead" | "unknown";

export const statusLabels: Record<StatusFilter, string> = {
  Alive: "Vivo",
  Dead: "Morto",
  unknown: "Desconhecido",
  "": "Todos"
}
export const statusColors: Record<CharacterStatus, string> = {
    Alive: "bg-[#55cc4422] text-[#55cc44] border-[#55cc4444]",
    Dead: "bg-[#d63d2e22] text-[#d63d2e] border-[#d63d2e44]",
    unknown: "bg-[#9e9e9e22] text-[#9e9e9e] border-[#9e9e9e44]",
  };