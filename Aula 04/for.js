for (let i = 0; i < 100; i++) {
  //   console.log("Contando... ", i);
}

const alunos = [
  {
    nome: "Fulano de Tal",
    idade: 18,
    nota: 9,
  },
  {
    nome: "Beltrano",
    idade: 15,
    nota: 7,
  },
  {
    nome: "Cicrano",
    idade: 8,
    nota: 8.5,
  },
  {
    nome: "Policarpo",
    idade: 80,
    nota: 7,
  },
  {
    nome: "Abelardo",
    idade: 42,
    nota: 5,
  },
];

/*
 Imprimir cada aluno, da seguinte forma: "O aluno NOME_DO_ALUNO tirou nota XX.XX"
*/
for (let i = 0; i < alunos.length; i++) {
  const aluno = alunos[i];
  console.log(`O aluno ${aluno.nome} tirou nota ${aluno.nota.toFixed(2)}`);
}

/*
    1. Imprimir "O aluno NOME_DO_ALUNO foi Aprovado ou Reprovado com nota XX.XX"
    se a nota desse aluno for maior ou igual a 7.

    2. Imprimir o nome dos alunos de tem idade maior que 18
*/
