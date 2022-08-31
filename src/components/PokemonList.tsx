import { FC } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList: FC<{ pokemons: any }> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon: any) => {
        return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} id={pokemon.id} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(20).fill(''),
};

export default PokemonList;
