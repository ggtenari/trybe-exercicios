const check = (aposta, funcao) => {
  let numeroSorteado = Math.floor(Math.random() * 5 + 1)
  let resultado = funcao(aposta, numeroSorteado)
  return resultado
}

const checagem = (apostado, sorteado) => {
  apostado === sorteado ? returno = 'Parabéns você ganhou' : returno = 'Tente novamente'
  return returno
}

console.log(check(1, checagem));