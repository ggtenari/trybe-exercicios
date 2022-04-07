const cadastro = (nome) => {
  let nomeSeparado = nome.split(' ')
  let email = nomeSeparado[0]
  for (i = 1; i < nomeSeparado.length; i += 1){
    email += `_${nomeSeparado[i]}`
  }
  const funcionario = {
    nomeCompleto: nome,
    email: email + `@trybe.com`
  }
  return funcionario
}

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'),
    id2: funcao('Luiza Drumond'),
    id3: funcao('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(cadastro));