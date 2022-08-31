import { Col } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Logo from './assets/logo.svg';
import PokemonListComponent from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemonList } from './redux/slices/PokemonSlice';
import { AppDispatch } from './redux/Store';

function App() {
  const dispath = useDispatch<AppDispatch>();
  const { pokemons } = useSelector((state: any) => state.pokemon);

  useEffect(() => {
    dispath(getPokemonList());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt="Pokedux-Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonListComponent pokemons={pokemons} />
    </div>
  );
}

export default App;
