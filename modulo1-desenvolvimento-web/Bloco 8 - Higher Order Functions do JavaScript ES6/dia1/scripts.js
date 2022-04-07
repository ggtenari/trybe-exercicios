const contagem = (gabarito, aluno) => {
  let acertos = 0
  for (i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === aluno[i]) {
      acertos += 1
    } else if (aluno[i] === 'N.A') {
      acertos += 0
    } else {
      acertos -= 0.5
    }
  }
  return acertos
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const HOF = (listaGabaritos, listaResposta, funcaoCheca) => {
  
  let contagemAcertos = funcaoCheca(listaGabaritos, listaResposta)
  return contagemAcertos
}

console.log(HOF(RIGHT_ANSWERS, STUDENT_ANSWERS, contagem));