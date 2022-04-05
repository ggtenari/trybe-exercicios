const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (objeto, chave, valor) => {
  objeto[chave] = valor
}

addKey(lesson2, 'turno', 'noite')



const listaKeys = (objeto) => Object.keys(objeto)


const objLength = (objeto) => Object.keys(objeto).length


const listaValues = (objeto) => Object.values(objeto)


const allLessons = {}
allLessons.lesson1 = lesson1
allLessons.lesson2 = lesson2
allLessons.lesson3 = lesson3

const somaEstudantes = (objeto) => {
  let soma = objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes
  return soma
}
// console.log(somaEstudantes(allLessons));

const chaveValor = (objecto) => {
  Object.values(objecto)
}

console.log(chaveValor(lesson1));