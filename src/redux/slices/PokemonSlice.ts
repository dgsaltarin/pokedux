import { BasicInfo, Pokemon } from '@/types/Pokemon';
import PokemonSliceProps from '@/types/slices/PokemonSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemonDetails, getPokemons } from '../../api';

export const getPokemonList = createAsyncThunk('pokemon/getPokemonList', async () => {
  const response: BasicInfo[] = await getPokemons();
  const pokemonWithDeatils = await Promise.all(response.map(getPokemonDetails));
  return pokemonWithDeatils;
});

const initialState: PokemonSliceProps = {
  pokemons: [],
  loading: false,
};

const PokemonSlice: any = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setPokemons(state: PokemonSliceProps, action: { payload: Pokemon[] }) {
      state.pokemons = action.payload;
    },
    setFavorite(state: PokemonSliceProps, action: { payload: { id: number } }) {
      const { id } = action.payload;
      const pokemon = state.pokemons.find((pokemon) => pokemon.id === id);
      if (pokemon) {
        pokemon.is_favorite = !pokemon.is_favorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state: PokemonSliceProps) => {
        state.loading = true;
      })
      .addCase(getPokemonList.fulfilled, (state: PokemonSliceProps, action: { payload: Pokemon[] }) => {
        state.pokemons = action.payload;
        state.loading = false;
      })
      .addCase(getPokemonList.rejected, (state: PokemonSliceProps) => {
        state.loading = false;
      });
  },
});

export const { setPokemons, setFavorite } = PokemonSlice.actions;

export default PokemonSlice.reducer;
