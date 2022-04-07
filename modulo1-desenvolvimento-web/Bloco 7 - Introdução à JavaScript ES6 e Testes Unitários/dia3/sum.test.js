const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum');


// describe('primeira funcao', () => {
//   test('retorno de sum(4, 5) é 9', () => {
//     expect(sum(4, 5)).toBe(9)
//   })
//   test('retorno de sum(0, 0) é 0', () => {
//     expect(sum(0, 0)).toBe(0)
//   })
//   test('a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
//     expect(() => {sum(4, '5')}).toThrow()
//   })
//   test('a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
//     expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
//   })
// })

// describe('segunda funcao', () => {
//   test('a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
//   })
//   test('a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
//   })
//   test('a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//   })
// })

// describe('terceira funcao', () => {
//   test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz')
//   })
//   test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(9)).toBe('fizz')
//   })
//   test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(10)).toBe('buzz')
//   })
//   test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(7)).toBe(7)
//   })
//   test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz('string')).toBeFalsy()
//   })
// })

describe('funcao encode, decode', () => {
  test('Teste se encode e decode são funções', () => {
    expect(typeof(decode)).toBe('function')
    expect(typeof(encode)).toBe('function')
  })
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1', '2', '3', '4', '5')
  })
})