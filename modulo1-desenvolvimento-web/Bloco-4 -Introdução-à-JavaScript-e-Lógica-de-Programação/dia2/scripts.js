let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let numero of numbers) {
    soma = soma + numero
}

soma = soma / numbers.length

if (soma > 20) {
    console.log("Soma maior que vinte");
}
else {
    console.log("Soma menor ou igual a vinte");
}

console.log(soma);