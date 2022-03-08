let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = []

for (numero of numbers) {
    if (menor.length === 0) {
        menor.push(numero)
    }
    else if (numero < menor) {
        menor[0] = numero
    }   
}
console.log(menor);