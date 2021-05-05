import React from 'react';
import ReactDOM from 'react-dom';

import { fetchAllPokemon } from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<h1>React is working</h1>, root);

    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

})

// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);