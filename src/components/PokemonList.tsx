import { Pokemon } from '@/types/Pokemon';
import { FC } from 'react';
import PokemonCard from './PokemonCard';

const PokemonListComponent: FC<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon: Pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            isFavorite={pokemon.is_favorite}
          />
        );
      })}
    </div>
  );
};

PokemonListComponent.defaultProps = {
  pokemons: Array(20).fill(''),
};

export default PokemonListComponent;
