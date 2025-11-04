// var pessoa = "Maria";
// console.log("1-", typeof pessoa);

// pessoa = 25874;
// console.log("2-", typeof pessoa);

// pessoa = {
//   nome: "Maria",
//   sobrenome: "Silva",
// };
// console.log("3-", typeof pessoa);

let resultado = 5 - "3";
// console.log(resultado); // "53" — concatenou, não somou!

var entrada1 = 2;
var entrada2 = "k";

var result = Number(entrada1) + Number(entrada2);
// console.log(result);

var pi = 12e100;
// console.log(typeof pi);

var estaLogado = false;
// console.log(typeof estaLogado);

var aluno;
if (estaLogado) {
  aluno = "José";
}
// console.log(aluno);
// console.log(typeof aluno);
aluno = "João";

var turma = null;
// console.log(turma);
// console.log(typeof turma);

var curso = {
  id: 2584,
  nome: "Lógica de Programação",
  alunos: null,
};

// console.log(curso.alunos);

var primeira = Symbol(2);
var segunda = Symbol(2);

// console.log(primeira === segunda);
// console.log(primeira);

var agencia = 14;
if (typeof agencia === "number") {
  agencia = String(agencia).padStart(4, "0");
}
console.log(agencia);
