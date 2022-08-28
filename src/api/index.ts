import axios, { AxiosResponse } from 'axios';
import PokemonList from '@/types/PokemonList';

export const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    return response;
  } catch (error: unknown) {
    console.log(error);
  }
};
