import { applyMiddleware, compose, legacy_createStore as createStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { logger } from './middlewares';
import { PokemonsReducer } from './redux/reducers/pokemons';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacer = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(PokemonsReducer, composedEnhacer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
