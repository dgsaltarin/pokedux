import PokemonList from '@/types/PokemonList';
import { FC } from 'react';
import PokemonCard from './PokemonCard';

const PokemonListComponent: FC<{ pokemons: any }> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon: any) => {
        return <PokemonCard name={pokemon.name} />;
      })}
    </div>
  );
};

PokemonListComponent.defaultProps = {
  pokemons: Array(20).fill(''),
};

export default PokemonListComponent;
