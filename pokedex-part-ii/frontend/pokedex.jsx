import React from 'react';
import ReactDOM from 'react-dom';

import { fetchAllPokemon } from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  // console.log("Hello from inside the DOM")
  
  const root = document.getElementById("root");
  // console.log(root);
  
  const store = configureStore();
  // console.log(store);

  ReactDOM.render(<Root store={store} />, root)

  window.configureStore = configureStore;

  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

})

// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);