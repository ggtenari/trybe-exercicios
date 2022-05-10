import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  // listaPokes = Pokemon()
  
  render() {
    return (
      <ul className="pokedex">
        <Pokemon/>
      </ul>
    )
  }
}

export default Pokedex;