import PokemonList from '@/types/PokemonList';
import PokemonSliceProps from '@/types/slices/PokemonSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemons } from '../../api';

export const getPokemonList = createAsyncThunk('pokemon/getPokemonList', async () => {
  try {
    const response = await getPokemons();
    return response?.data.results;
  } catch (error: unknown) {
    console.log(error);
  }
});

const initialState = {
  pokemonResult: {} as any,
  loading: false,
};

const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemonResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.pokemonResult = action.payload;
        state.loading = false;
        console.log(state.pokemonResult);
      })
      .addCase(getPokemonList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setPokemons } = PokemonSlice.actions;

export default PokemonSlice.reducer;
