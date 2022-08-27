import axios, { AxiosResponse } from 'axios';
import PokemonList from '@/types/PokemonList';

export const getPokemons: () => Promise<PokemonList> = async (): Promise<PokemonList> => {
  try {
    const response: AxiosResponse<PokemonList> = await axios.get<PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=151');
    if (response) {
      return response.data;
    }
    return {} as PokemonList;
  } catch (error: unknown) {
    console.log(error);
    return {} as PokemonList;
  }
};
