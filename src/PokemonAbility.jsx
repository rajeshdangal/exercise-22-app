import React from 'react'

const PokemonAbility = ({ abilityName, isHidden = false }) => (
  <div className="pokemon-ability">
    {isHidden && (
      <div className="pokemon-ability-type">Hidden ability</div>
    )}
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility