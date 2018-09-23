import React from 'react';
import {array, string, func, number} from 'prop-types';

const buildList = (pokemonArr, search, selectedIndex, onListItemClick, onEnter) => pokemonArr
  .filter(poke => search === '' || poke.name.includes(search))
  .map((poke, idx) => {
    return (
      <li
        className={`poke-list-item${idx === selectedIndex ? ' selected' : ''}`}
        onClick={() => onListItemClick(idx)}
        onKeyDown={e => onEnter(e, idx)}
        key={poke.id}
        tabIndex={0}
      >
        {poke.name}
      </li>
    )
  });

export default function PokeList({pokemon, search, handleChange, onListItemClick, selectedIndex, onEnter}) {
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
          {buildList(pokemon, search, selectedIndex, onListItemClick, onEnter)}
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
  selectedIndex: number,
  onListItemClick: func,
  onEnter: func
};
