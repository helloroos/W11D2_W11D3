import React from 'react';
import ReactDOM from 'react-dom';

import { fetchAllPokemon } from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions';
// import { RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<h1>Placeholder</h1>, root);

    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
})

// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);