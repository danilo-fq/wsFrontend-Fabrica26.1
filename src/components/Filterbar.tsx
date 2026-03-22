import type { StatusFilter } from "@/types/status";

interface FilterBarProps {
  activeFilter: StatusFilter;
  onClick: (value: StatusFilter) => void;
}

export default function FilterBar({ activeFilter, onClick } : FilterBarProps) {
  return (
    <div className="flex gap-x-4">
      <button
        type="button"
        onClick={() => onClick("")}
        className={`border border-[#89cff066] cursor-pointer font-medium text-sm px-3 py-0.5 rounded-full transition-all ${activeFilter === "" ? "bg-text text-hover-dark" : "text-text"}`}
      >
        Todos
      </button>

      <button
        type="button"
        onClick={() => onClick("Alive")}
        className={`border border-status-success cursor-pointer font-medium text-sm  px-3 py-0.5 rounded-full transition-all ${activeFilter === "Alive" ? "bg-status-success text-hover-dark" : "text-status-success"}`}
      >
        Vivos
      </button>

      <button
        type="button"
        onClick={() => onClick("Dead")}
        className={`border  cursor-pointer font-medium text-sm px-3 py-0.5 rounded-full transition-all ${activeFilter === "Dead" ? "bg-status-danger text-hover-dark" : "text-status-danger"}`}
      >
        Mortos
      </button>

      <button
        type="button"
        onClick={() => onClick("unknown")}
        className={`border border-status-muted cursor-pointer font-medium text-sm px-3 py-0.5 rounded-full transition-all ${activeFilter === "unknown" ? "bg-status-muted text-hover-dark" : "text-status-muted"}`}
      >
        Desconhecidos
      </button>
    </div>
  );
}