let primos = [1, 2]
let condicao = 0

for (let num = 3; num <= 500; num += 1){
    for (index = primos.length; index > 0; index -= 1) {
            if (num % primos[index] == 0) {
                condicao = 0
                break
            } else {
                condicao += 1
            }
    }
    if (condicao > 0){
        primos.push(num)
    }
}
console.log(primos);