import logo from './logo.svg';
import './App.css';
import React from 'react';

const clickMouse = (event) => {
  console.log(event.target.innerText)
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroCliques1 : 0,
      numeroCliques2 : 0,
      numeroCliques3 : 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (botao) => {
    if (botao === 1) {
      this.setState((pState, _props) => ({
        numeroCliques1 : pState.numeroCliques1 + 1,
      }))
    }
    if (botao === 2) {
      this.setState((pState, _props) => ({
        numeroCliques2 : pState.numeroCliques2 + 1,
      }))
    }
    if (botao === 3) {
      this.setState((pState, _props) => ({
        numeroCliques3 : pState.numeroCliques3 + 1,
      }))
    }
  }
  
  render() {
    return <div>
      <button onClick={() => this.handleClick(1)}>{this.state.numeroCliques1}</button>
      <button onClick={() => this.handleClick(2)}>{this.state.numeroCliques2}</button>
      <button onClick={() => this.handleClick(3)}>{this.state.numeroCliques3}</button>
    </div>
  }
}

export default App;
