// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

        // ##EX1##

function sumUp (init, end){
    let sumUp=null;
    for (let i=init; i<=end;i++){
        sumUp+=i;
    }
    return sumUp;
}
console.log(sumUp(50, 100));



        //##EX2##

function divisibleFor3(){
    let sumUp=null;
    for (let i=1;i<=125;i++){
        if (i%3===0){
            sumUp++;
        }
    }
    return sumUp;
}
console.log(divisibleFor3());



        //##EX4##

let idade = 19;

if (idade >= 18) {
  console.log("A pessoa é maior de idade");
}
else {
  console.log("A pessoa é menor de idade");
}

        //##EX5##

let Marcella = 35;
let Carlos = 15;
let Camila = 40;
let maisNovo = ""

if (Marcella < Camila && Marcella < Carlos){
    maisNovo = "Marcella"
} else if (Carlos < Camila){
    maisNovo = "Carlos"
} else {
    maisNovo = "Camila"
}
console.log(maisNovo + " eh o mais novo(a)");