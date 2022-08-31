import { getPokemonDetails } from '../api';
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from '../types/Pokemon';

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorites = (payload: any) => ({
  type: SET_FAVORITES,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch: any) => {
    const pokemonDetails = await Promise.all(pokemons.map((pokemon: any) => getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonDetails));
  };
