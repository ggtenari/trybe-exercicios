const { expect, test } = require('@jest/globals');
const sum = require('./sum');

describe('primeira funcao', () => {
  test('retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  test('retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  test('a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4, '5')}).toThrow()
  })
  test('a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})

