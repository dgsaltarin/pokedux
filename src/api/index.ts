import { BasicInfo } from '@/types/Pokemon';
import axios, { AxiosResponse } from 'axios';

export const getPokemons = async () => {
  const response: AxiosResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  return response.data.results;
};

export const getPokemonsWithDeailts = async (pokemons: BasicInfo[]) => {
  const response = Promise.all(pokemons.map(async (pokemon) => {}));
};
