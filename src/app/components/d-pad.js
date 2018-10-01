import React from 'react';
import {shape, func, string} from 'prop-types';
import pokemon from '../../../assets/pokemon.json';
import '../../style/components/d-pad.scss';

function normalizeIndex(index) {
  if (index < 0) {
    return 0;
  } else if (index >= pokemon.length - 1) {
    return pokemon.length - 1;
  } else {
    return index;
  }
}

export default function DPad({selectedPokemon, onChangePokemon}) {
  const handleClick = (direction) => {
    pokemon.find((poke, idx) => {
      if (poke.id === selectedPokemon.id) {
        if (direction === 'up') {
          onChangePokemon(normalizeIndex(idx + 1));
        } else if (direction === 'down') {
          onChangePokemon(normalizeIndex(idx - 1));
        }
        return true;
      }
      return false;
    });
  };

  return (
    <div className="d-pad-container">
      <div className="top" onClick={() => handleClick('down')}/>
      <div className="middle-row-container">
        <div className="left" onClick={() => handleClick('down')}/>
        <div className="middle"/>
        <div className="right" onClick={() => handleClick('up')}/>
      </div>
      <div className="bottom" onClick={() => handleClick('up')}/>
    </div>
  );
}

DPad.displayName = 'DPad';

DPad.propTypes = {
  selectedPokemon: shape({
    id: string
  }),
  onChangePokemon: func
};