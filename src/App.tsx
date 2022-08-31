import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { getPokemons, getPokemonDetails } from './api';
import './App.css';
import Logo from './assets/logo.svg';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemonsWithDetails, setPokemons, setLoading } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from './redux/Store';

function App() {
  const pokemons = useSelector((state: any) => state.pokemons);
  const loading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt="Pokedux-Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Spin spinning size="large" /> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
