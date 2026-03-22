import { Grid2X2, List } from "lucide-react";

interface ToggleListProps {
  isGridView: boolean;
  onClick: (isGrid: boolean) => void
}

export default function ToggleList({ isGridView, onClick }: ToggleListProps) {
  return (
    <div className="flex justify-end self-end pb-3">
      <button type="button" onClick={() => onClick(true)}>
        <Grid2X2
          className={`cursor-pointer ${isGridView ? "text-primary" : "text-text"}`}
        />
      </button>
      <button type="button" onClick={() => onClick(false)}>
        <List
          className={`cursor-pointer ${!isGridView ? "text-primary" : "text-text"}`}
        />
      </button>
    </div>
  );
}