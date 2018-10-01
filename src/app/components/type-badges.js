import React from 'react';
import {string} from 'prop-types';
import '../../style/components/type-badge.scss';

const typeMap = {
  normal: '#A8A77D',
  fire: '#E38544',
  fighting: '#B23C31',
  water: '#6F91E9',
  flying: '#A493EA',
  grass: '#8AC560',
  poison: '#95489B',
  electric: '#F2D054',
  ground: '#DBC075',
  psychic: '#E76488',
  rock: '#B5A04B',
  ice: '#A5D6D7',
  bug: '#ABB642',
  dragon: '#6843EF',
  ghost: '#6C5A94',
  dark: '#6D594A',
  steel: '#B8B8CE',
  fairy: '#E39DAC'
};

export default function TypeBadges({types}) {
  const typeBadges = types.split(',').map(type => {
    const trimmedType = type.trim();

    return (
      <div
        className="type-badge"
        style={{backgroundColor: typeMap[trimmedType.toLowerCase()]}}
        key={trimmedType}
      >
        {trimmedType}
      </div>
    );
  });

  return (
    <div className="type-badge-container">
      {typeBadges}
    </div>
  )
}

TypeBadges.displayName = 'TypeBadges';

TypeBadges.propTypes = {
  types: string
};
