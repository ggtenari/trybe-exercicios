let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []

for (numero of numbers) {
    if (numero % 2 !== 0) {
        impar.push(numero)
    }
}

if (impar.length === 0) {
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(impar.length);
}