import { BasicInfo } from '@/types/Pokemon';
import { FC } from 'react';
import PokemonCard from './PokemonCard';

const PokemonListComponent: FC<{ pokemons: BasicInfo[] }> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon: BasicInfo) => {
        return <PokemonCard name={pokemon.name} />;
      })}
    </div>
  );
};

PokemonListComponent.defaultProps = {
  pokemons: Array(20).fill(''),
};

export default PokemonListComponent;
