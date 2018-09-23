import React from 'react';
import {array, string, func, object} from 'prop-types';

const buildList = (pokemonArr, search, selectedPokemon, onListItemClick, onEnter) => pokemonArr
  .filter(poke => search === '' || poke.name.includes(search))
  .map((poke, idx) => {
    return (
      <li
        className={`poke-list-item${poke.name === selectedPokemon.name ? ' selected' : ''}`}
        onClick={() => onListItemClick(poke.id)}
        onKeyDown={e => onEnter(e, poke.id)}
        key={poke.id}
        tabIndex={0}
      >
        {poke.name}
      </li>
    )
  });

export default function PokeList({pokemon, search, handleChange, onListItemClick, selectedPokemon, onEnter}) {
  return (
    <div className="poke-list-container">
      <input
        value={search}
        onChange={handleChange}
        className="poke-search"
        placeholder="Search for a Pokémon..."
      />
      <div className="poke-list">
        <ul>
          {buildList(pokemon, search, selectedPokemon, onListItemClick, onEnter)}
        </ul>
      </div>
    </div>
  )
}

PokeList.displayName = 'PokeList';

PokeList.propTypes = {
  pokemon: array,
  search: string,
  handleChange: func,
  selectedPokemon: object,
  onListItemClick: func,
  onEnter: func
};
