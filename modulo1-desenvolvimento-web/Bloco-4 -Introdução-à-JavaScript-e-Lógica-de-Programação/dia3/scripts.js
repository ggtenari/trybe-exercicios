let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ""
let menorPalavra = ""

for (let lang of array){
    if (lang.length > maiorPalavra.length){
        maiorPalavra = lang
    }
    if (lang.length < menorPalavra.length || menorPalavra.length === 0){
        menorPalavra = lang
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);