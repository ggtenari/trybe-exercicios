const upperCase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('testando uppercase', (done) => {
  upperCase('boa noite', (result) => {
    try {
      expect(result).toBe('BOA NOITE');
      done();
    } catch (error) {
      done(error);
    }
  })
})