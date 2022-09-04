import React from 'react';
import { render } from '@testing-library/react';
import PokemonListComponent from '../components/PokemonList';

describe('Pokemon List', () => {
  it('should match snapshot', () => {
    const wrapper = render(<PokemonListComponent pokemons={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
