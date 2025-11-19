const frutas = ["abacate", "abacaxi"];
// console.log(frutas);

const len = frutas.push("pêra");
// console.log(frutas);
// console.log(len);
frutas.push("maçã", "uva", "morango", 4, null);
// console.log(frutas);

// console.log(frutas.pop());
frutas.pop();
// console.log(frutas);

// console.log(frutas.shift());
// console.log(frutas);

frutas.unshift("goiaba");
// console.log(frutas);

// console.log(frutas.includes("uva"));
// console.log(frutas.includes("coco"));

const index = frutas.indexOf("uva");
// console.log(index);
// splice() exclui um ou mais itens, a partir do índice fornecido.
// o segundo parâmetro indica quantos itens serão removidos.
// se não for preenchido, exclui todos os itens a partir do índice fornecido
frutas.splice(2, 3);
// console.log(frutas);

const frutaComA = frutas.find((f) => f.startsWith("a"));
// console.log(frutaComA);
const indiceDaFrutaComA = frutas.findIndex((f) => f.startsWith("a"));
// console.log(indiceDaFrutaComA);

const usuarios = [
  {
    nome: "André",
    sobrenome: "Silva",
    dataNasc: "10/10/2000",
    idade: 25,
    notas: [10, 9, 8.5],
    ativo: true,
  },
  {
    nome: "Pedro",
    sobrenome: "Santos",
    idade: 15,
    dataNasc: "08/06/2010",
    notas: [5, 9, 7],
    ativo: true,
  },
  {
    nome: "Milena",
    sobrenome: "Pereira",
    idade: 22,
    dataNasc: "16/12/2003",
    notas: [6, 8.5, 10],
    ativo: false,
  },
  {
    nome: "João",
    sobrenome: "Pereira",
    idade: 22,
    dataNasc: "16/12/2003",
    notas: [6, 8.5, 10],
  },
];

// const novaListaUsuarios = usuarios.map((u) => {
//   let soma = 0;
//   u.notas.forEach((nota) => {
//     soma += nota;
//   });
//   return {
//     nomeCompleto: `${u.nome} ${u.sobrenome}`,
//     dataNasc: u.dataNasc,
//     media: soma / u.notas.length,
//   };
// });

const novaListaUsuarios = usuarios.map((u) => {
  const soma = u.notas.reduce((acc, cur) => acc + cur);
  return {
    nomeCompleto: `${u.nome} ${u.sobrenome}`,
    dataNasc: u.dataNasc,
    media: soma / u.notas.length,
  };
});
// console.log(novaListaUsuarios);

// console.log(novaListaUsuarios);

const numeros = [1, 5, 3, 4, 2, 6, 11, 5];
const dobro = numeros.map((numero) => numero * 2);
// console.log(dobro);

const ativos = usuarios.filter((u) => u.ativo && u.idade >= 18);
// console.log(ativos);

const pa = numeros.reduce((acc, valor) => acc + valor);
// console.log(pa);
const pg = numeros.reduce((acc, valor) => acc * valor);
// console.log(pg);

const reverso = numeros.reverse();
// console.log(reverso);

// console.log(frutas.sort());
console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));
