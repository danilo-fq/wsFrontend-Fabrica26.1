export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  image: string;
}

export interface InfoResponseAPI {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ResponseAPI {
  info: InfoResponseAPI;
  results: Character[];
}

export interface CharacterDetailsInterface extends Character {
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  episode: string[];
}
