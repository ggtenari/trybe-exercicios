let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };


  let infoNova = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain',
      nota: "O último MacPatinhas",
      recorrente: 'Sim'
  }

let personagens = [info, infoNova]

for (let key in info){
    if (info[key] === infoNova[key] && key === 'recorrente') {
        console.log('Ambos recorrentes');
    } else { 
        console.log(info[key] + ' e '  + infoNova[key]);
    }
}