import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  if (!pokemonList || pokemonList.length === 0) {
    return <div>Loading Pokemon...</div>
  }
  
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList