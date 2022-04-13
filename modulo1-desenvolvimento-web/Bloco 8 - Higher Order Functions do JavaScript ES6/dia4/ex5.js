const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, nome) => {
  let contagem = 0
  for (let i = 0; i < nome.length; i += 1) {
    if (nome[i].toLowerCase() === 'a') {
      contagem += 1
    }
  } 
  acc += contagem
  return acc
}, 0)

console.log(containsA);