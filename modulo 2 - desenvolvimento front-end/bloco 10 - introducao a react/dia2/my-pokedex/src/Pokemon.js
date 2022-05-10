import React from 'react';
import pokemons from './data.js'

class Pokemon extends React.Component {
  render() {
    return(
      pokemons.map(pokemon => <li key={pokemon.name} className="card"><h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name}></img>
      <p>type: {pokemon.type}</p>
      <p>peso medio: {pokemon.averageWeight.value}
      {pokemon.averageWeight.measurementUnit.toLocaleUpperCase()}</p></li>)
    )
  }
}

export default Pokemon;