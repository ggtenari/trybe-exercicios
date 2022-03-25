function indiceMenor (array) {
    let menor = '';
    let menorIndex = 0
    for (index in array) {
        if (index == 0){
            menor = array[index]
            } else if (array[index] < menor){
                menor = array[index]
                menorIndex = index
                }
        }
    return menorIndex
    }

let arrayTeste = [222, 44, 6, 1111, 999, 666]
console.log(indiceMenor(arrayTeste));
