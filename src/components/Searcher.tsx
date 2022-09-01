import { AppDispatch } from '@/redux/Store';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getPokemonList, searchPokemons } from '../redux/slices/PokemonSlice';

const Searcher = () => {
  const dispath = useDispatch<AppDispatch>();
  const search = (value: string) => {
    dispath(searchPokemons(value));
  };
  return <Input.Search placeholder="Buscar" onSearch={search} />;
};

export default Searcher;
