import React from "react";
import estados from './Estados'

class Form extends React.Component {
  
  numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  
  state = {
    name: '',
    email: '',
    CPF: '',
    endereco: '',
    cidade: '',
    homeType: '',
    estados: '',
    resumo: '',
    cargo: '',
  }

  funcOnBlur = ({target}) => {
    console.log(target.value);
    if (this.numeros.includes(target.value[0])) {
      target.value = ''
    }
  }

  removeCaractere = ({target: {value}}) => {
    value = value.replace(/[^a-zA-Zs]/g, "")
  }

  handleChange = ({target}) => {
    if (target.name === 'endereco') {
      target.value = target.value.replace(/[^a-zA-Zs]/g, "")
    }
    this.setState({
      [target.name]: target.value,
    })
  }

  mouseEnter = () => alert('Preencha com cuidado esta informação.')
  
  percorreEstados = estados.map((estado) => <option key={estado.uf} value={estado.nome}>{estado.uf} - {estado.nome}</option>)
  
  render() {
    return (
      <div>
        <fieldset>
          <label>Nome<input onChange={this.handleChange} className="nameInput" type="text" name="name" maxLength="40" required></input></label>
          <label>Email<input onChange={this.handleChange} className="emailInput" type="text" name="email" maxLength="50" required></input></label>
          <label>CPF<input onChange={this.handleChange} className="CPFInput" type="text" name="CPF" maxLength="11" required></input></label>
          <label>Endereço<input onChange={this.handleChange} className="enderecoInput" type="text" name="endereco" maxLength="200" required></input></label>
          <label>Cidade<input onChange={this.handleChange} onBlur={this.funcOnBlur} className="cidadeInput" type="text" name="cidade" maxLength="28" required></input></label>
          <label><select onChange={this.handleChange} name="estados">
            {this.percorreEstados}
          </select></label> <br></br>
          <label><input onChange={this.handleChange} type="radio" name="homeType" value="casa"/>casa</label>
          <label><input onChange={this.handleChange} type="radio" name="homeType" value="apartamento"/>apartamento</label>
        </fieldset>
        <hr></hr>
        <fieldset>
        <label>Resumo do curriculo<textarea onChange={this.handleChange} className="resumoInput" name="resumo" maxLength="1000" required></textarea></label>
        <label>Cargo<textarea onChange={this.handleChange} onMouseEnter={this.mouseEnter} className="cargoInput" name="cargo" maxLength="40" required></textarea></label>
        </fieldset>
      </div>
    )
  }
}

export default Form;