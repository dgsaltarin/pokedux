import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from '../../types/Pokemon';

const initialState = {
  pokemons: [],
  loading: false,
};

export const PokemonsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITES:
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex((pokemon: any) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex < 0) {
        return state;
      }
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
      return { ...state, pokemons: newPokemonList };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
