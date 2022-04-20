// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex8");

describe("A função getPokemonDetails", (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    const filter = (pokemon) => pokemon.name === 'Charmnder'
    getPokemonDetails(filter, (result, nulled) => {
      expect(result).toThrow()
      done()
    })
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});