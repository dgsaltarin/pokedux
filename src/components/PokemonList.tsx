import PokemonList from '@/types/PokemonList';
import { FC } from 'react';
import PokemonCard from './PokemonCard';

const PokemonListComponent: FC<PokemonList> = (pokemons) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.results.map((pokemon: any) => {
        return <PokemonCard name={pokemon.name} />;
      })}
    </div>
  );
};

export default PokemonListComponent;
