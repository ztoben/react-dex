import React from 'react';
import {shape, string} from 'prop-types';
import TypeBadges from "./type-badges";
import '../style/components/poke-display.scss';

export default function PokeDisplay({selectedPokemon}) {
  return (
    <div className="poke-display-container">
      <div className="poke-display">
        <h4>{selectedPokemon.name}</h4>
        <div className="poke-img-container">
          <img
            width={150}
            src={require(`../../assets/sprites/${selectedPokemon.id}.png`).default}
          />
        </div>
        <TypeBadges types={selectedPokemon.type}/>
      </div>
    </div>
  );
}

PokeDisplay.displayName = 'PokeDisplay';

PokeDisplay.propTypes = {
  selectedPokemon: shape({
    id: string,
    type: string
  })
};
