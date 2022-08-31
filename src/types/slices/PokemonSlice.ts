import { BasicInfo, Pokemon } from '../Pokemon';

interface PokemonSliceProps {
  pokemons: BasicInfo[];
  pokemonsWithDeails: Pokemon[];
  loading: boolean;
}

export default PokemonSliceProps;
