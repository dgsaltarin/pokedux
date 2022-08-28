import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Searcher from './components/Searcher';
import { Col } from 'antd';
import Logo from './assets/logo.svg';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './redux/actions';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons();
      setPokemons(pokemonRes);
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
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPokemons: (pokemons: any) => dispatch(setPokemonsActions(pokemons)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
