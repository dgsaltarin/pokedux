import PokemonList from '@/types/PokemonList';
import PokemonSliceProps from '@/types/slices/PokemonSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemons } from '../../api';

export const getPokemonList = createAsyncThunk('pokemon/getPokemonList', async () => {
  let response: PokemonList;
  try {
    response = await getPokemons();
    console.log(response);
    return response;
  } catch (error: unknown) {
    console.log(error);
    return {} as PokemonList;
  }
});

const initialState: PokemonSliceProps = {
  pokemons: {
    results: [],
  },
  loading: false,
};

const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.loading = false;
      })
      .addCase(getPokemonList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setPokemons } = PokemonSlice.actions;

export default PokemonSlice.reducer;
