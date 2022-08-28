import { SET_POKEMONS } from '../../types/Pokemon';

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
