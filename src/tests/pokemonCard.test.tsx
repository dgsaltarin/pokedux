import React from 'react';
import { render } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Pokemon Card', () => {
  it('should match snapshot', () => {
    const wrapper = render(<PokemonCard name="ditto" image="url" types={[]} id="1" isFavorite={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
