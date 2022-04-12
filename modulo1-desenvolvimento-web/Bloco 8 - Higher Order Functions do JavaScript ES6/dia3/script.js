const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// let livrosFormatados = []
// const formatedBooks = books.map((objeto) => {
//   livrosFormatados.push(`${objeto.name} - ${objeto.genre} - ${objeto.author.name}`)
//   return livrosFormatados
// })
// console.log(livrosFormatados);
// let arrayNameAndAge = []
// const nameAndAge = books.map((objeto) => {
//   const livro = {
//     name: objeto.name,
//     age: objeto.releaseYear - objeto.author.birthYear,
//   }
//   arrayNameAndAge.push(livro)
// })

// arrayNameAndAge.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   }
//   if (a.age < b.age) {
//     return -1;
//   }
//     return 0;
// })
// console.log(arrayNameAndAge);

let ficFantasia = []


let livrosSelecionados = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia')

// console.log(livrosSelecionados);

const livrosVelhos = books.filter((livro) => 2022 - livro.releaseYear > 60)
livrosVelhos.sort(((a, b) => {
  if (a.releaseYear > b.releaseYear) {
    return 1
  }
  if (a.releaseYear < b.releaseYear) {
    return -1
  }
    return 0
}))
console.log(livrosVelhos);

let autoresSelecionados = []
livrosSelecionados.map((livro) => {
  autoresSelecionados.push(livro.author.name) 
})
autoresSelecionados.sort()
console.log(autoresSelecionados);

let nomeLivrosVelhos = []
livrosVelhos.map((livro) => {
  nomeLivrosVelhos.push(livro.name)
})

console.log(nomeLivrosVelhos);
