// Não é legal
const curso = {
  nome: "Caixaverso",
  turno: "Noturno",
  dataInicio: "01/01/2020",
  dataFim: "31/12/2025",
  aluno1: {
    nome: "Fulano de Tal",
    idade: 25,
  },
  aluno2: {
    nome: "Beltrano de Tal",
    idade: 26,
  },
  aluno3: {
    nome: "Cicrano de Tal",
    idade: 28,
  },
};

// Agora sim
const aluno4 = {
  nome: "Antonio de Tal",
  idade: 25,
};
const aluno5 = {
  nome: "Marina de Tal",
  idade: 26,
};
const aluno6 = {
  nome: "Sérgio de Tal",
  idade: 28,
};

const cursoLegal = {
  nome: "Caixaverso",
  turno: "Noturno",
  dataInicio: "01/01/2020",
  dataFim: "31/12/2025",
  alunos: [
    {
      nome: "Fulano de Tal",
      idade: 25,
    },
    {
      nome: "Beltrano de Tal",
      idade: 26,
    },
    {
      nome: "Cicrano de Tal",
      idade: 28,
    },
    aluno4,
    aluno5,
    aluno6,
  ],
};

// console.log(cursoLegal.alunos);

// Obter os alunos que tem mais de 26 anos
// console.log(cursoLegal.alunos.filter((aluno) => aluno.idade >= 26));

const numeros = [1, 2, 3, 4, 5];
// console.log(numeros[2]);
// console.log(numeros.length);
// console.log(numeros[numeros.length - 1]);
// console.log(numeros.length - 1);

// array.length -> tamanho do array, contagem normal de itens
// índice -> posição dos itens dentro de um array, começa de zero (0)
const frutas = ["banana", "abacate", "abacaxi", "maçã", "uva", null, "Goiaba"];
// console.log(frutas.length);
// console.log(frutas[1]);
// console.log(frutas.at(1));

console.log(frutas.at(0));
console.log(frutas.at(3));
console.log(frutas.at(6));

// console.log(frutas[frutas.length - 1]);
// console.log(frutas.at(-1));

// console.log(frutas[frutas.length - 2]);
// console.log(frutas.at(-2));

// console.log(frutas[frutas.length]); // undefined? uva?

// array[indice]
