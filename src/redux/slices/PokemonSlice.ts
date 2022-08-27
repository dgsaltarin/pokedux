import { createSlice } from '@reduxjs/toolkit';
import { type } from 'os';
import { SET_POKEMONS } from '../../types/Pokemon';

const initialState = {
  pokemons: [],
};

const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setPokemons(state, action) {
      type: SET_POKEMONS;
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = PokemonSlice.actions;

export default PokemonSlice.reducer;
