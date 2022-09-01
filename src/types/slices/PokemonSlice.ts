import { Pokemon } from '../Pokemon';

interface PokemonSliceProps {
  pokemons: Pokemon[];
  searchListBackUp: Pokemon[];
  loading: boolean;
}

export default PokemonSliceProps;
