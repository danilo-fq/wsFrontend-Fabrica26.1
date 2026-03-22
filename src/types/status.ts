export type StatusFilter = "" | "Alive" | "Dead" | "unknown";

export const statusLabels: Record<StatusFilter, string> = {
  Alive: "Vivo",
  Dead: "Morto",
  unknown: "Desconhecido",
  "": "Todos"
}