import type { ResponseAPI } from "@/types/character";

export async function fetchCharacters(name?: string, status?: string): Promise<ResponseAPI> {
  try {
    const BASE_URL = 'https://rickandmortyapi.com/api/character';

    const params = new URLSearchParams();

    if(name) {
      params.set('name', name);
    }
    if(status) {
      params.set('status', status);
    }

    const queryString = params.toString();

    const URL = queryString ? `${BASE_URL}/?${params.toString()}` : BASE_URL;
  
    const response = await fetch(URL);

    if(response.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] }
    }

    if(!response.ok) {
      throw new Error('Erro ao tentar encontrar os personagens')
    }

    const data: ResponseAPI = await response.json()

    return data;
  } catch (error) {
    console.error('Erro ao Erro ao tentar encontrar os personagens', error)
    throw error
  }
}