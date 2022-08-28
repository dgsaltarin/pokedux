import { SET_POKEMONS } from '../types/Pokemon';

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});
