import { BasicInfo, Pokemon } from '@/types/Pokemon';
import PokemonSliceProps from '@/types/slices/PokemonSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemonDetails, getPokemons } from '../../api';

export const getPokemonList = createAsyncThunk('pokemon/getPokemonList', async () => {
  const response: BasicInfo[] = await getPokemons();
  const pokemonWithDeatils: Pokemon[] = await Promise.all(response.map(getPokemonDetails));
  return pokemonWithDeatils;
});

const initialState: PokemonSliceProps = {
  pokemons: [],
  searchListBackUp: [],
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
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => pokemon.id === id);
      if (currentPokemonIndex >= 0) {
        const idFavorite = state.pokemons[currentPokemonIndex].is_favorite;
        state.pokemons[currentPokemonIndex].is_favorite = !idFavorite;
      }
    },
    searchPokemons(state: PokemonSliceProps, action: { payload: string }) {
      const { payload } = action;
      state.pokemons = state.searchListBackUp.filter((pokemon) => pokemon.name.includes(payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state: PokemonSliceProps) => {
        state.loading = true;
      })
      .addCase(getPokemonList.fulfilled, (state: PokemonSliceProps, action: { payload: Pokemon[] }) => {
        state.pokemons = action.payload;
        state.searchListBackUp = action.payload;
        state.loading = false;
      })
      .addCase(getPokemonList.rejected, (state: PokemonSliceProps) => {
        state.loading = false;
      });
  },
});

export const { setPokemons, setFavorite, searchPokemons } = PokemonSlice.actions;

export default PokemonSlice.reducer;
