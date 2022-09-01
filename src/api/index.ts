import { BasicInfo, Pokemon } from '@/types/Pokemon';
import axios, { AxiosResponse } from 'axios';

export const getPokemons = async () => {
  const response: AxiosResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  return response.data.results;
};

export const getPokemonDetails = async (pokemon: BasicInfo) => {
  const response: AxiosResponse = await axios.get(pokemon.url);
  response.data.is_favorite = false;
  return response.data;
};

export const getPokemonDetails = (pokemon: any) => {
  return axios
    .get(pokemon.url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
