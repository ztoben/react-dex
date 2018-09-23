import React from 'react';
import {array, string, func, object} from 'prop-types';

const buildList = (pokemonArr, search, selectedPokemon, onListItemClick, onEnter) => pokemonArr
  .filter(poke => search === '' || poke.name.includes(search))
  .map(poke => {
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

export default function PokeList({
  pokemon,
  search,
  handleChange,
  onListItemClick,
  selectedPokemon,
  onEnter,
  clearSearch,
  searchRef
}) {
  return (
    <div className="poke-list-container">
      <input
        value={search}
        onChange={handleChange}
        className="poke-search"
        placeholder="Search for a Pokémon..."
        ref={searchRef}
      />
      <span
        className="clear-search"
        onClick={clearSearch}
        role="button"
        tabIndex={0}
      >
        X
      </span>
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
  clearSearch: func,
  handleChange: func,
  selectedPokemon: object,
  onListItemClick: func,
  onEnter: func,
  searchRef: object
};
