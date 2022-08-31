import axios from 'axios';

export const getPokemons = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
};

export const getPokemonDetails = (pokemon: any) => {
  return axios
    .get(pokemon.url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
