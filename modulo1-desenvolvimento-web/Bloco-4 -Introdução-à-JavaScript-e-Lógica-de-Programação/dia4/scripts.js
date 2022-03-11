function indiceMaior (array) {
    let maior = 0
    let maiorIndex = 0
    for (index in array) {
        if (index === 0){
            maior = array[index]
            } else if (array[index] > maior){
                maior = array[index]
                maiorIndex = index
                }
        }
    return maiorIndex
    }

let arrayTeste = [2, 4, 6, 1111, 999, 666]
console.log(indiceMaior(arrayTeste));
