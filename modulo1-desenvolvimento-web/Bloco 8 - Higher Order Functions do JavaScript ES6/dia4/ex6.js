const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = students.map((estudante, index) => {
  const esperado = {
    name: estudante,
    average: (grades[index].reduce((total, nota) => total += nota, 0)) / 5
  }
  return esperado
})

console.log(studentAverage);

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];