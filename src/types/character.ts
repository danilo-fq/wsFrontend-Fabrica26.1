export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
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