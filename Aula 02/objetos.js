const nome = "Fulano de Tal";
const idade = 25;
const telefone = 71999998558;
const email = "fulano@email.com";

const aluno = {
  // atributos ou propriedades ou características
  nome: "Fulano de Tal",
  idade: 25,
  telefone: 71999998558,
  email: "fulano@email.com",

  //   métodos ou funcionalidades ou comportamentos
  matricular: function () {
    console.log("Matriculado");
  },
};
// console.log(aluno);

// aluno.matricular();

aluno.idade = 30;
aluno.cpf = "01234567890";
aluno.name = "Beltrano";
// console.log(aluno);

const curso = {
  nome: "Caixaverso",
  turno: "Noturno",
  dataInicio: "01/01/2020",
  dataFim: "31/12/2025",
  alunos: [],
};

console.log(curso.nome);
