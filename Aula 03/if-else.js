// = -> Atribuição
// == -> Comparação por valor
// === -> Comparação por valor e tipo
// console.log(1 == "1"); // true
// console.log(1 === Number("1"));
// console.log(1 === parseInt("1"));
// console.log(1 === +"1");
// console.log(1 === "1"); // false (forma recomendada)
// console.log(Number("1a"));
// console.log(parseInt("1a"));
// console.log(parseFloat("1a"));
// console.log(+"1a");

const tenhoDinheiro = false;
const temSol = true;
const meuAmigoMeChamouEVaiBancar = true;

// && -> Operador AND (E)
// || -> Operador OR (OU)
//  & e | Operadores bit a bit (pesquisar)
if (tenhoDinheiro || temSol) {
  console.log("Obaa!! Hoje tem praia.");
} else if (meuAmigoMeChamouEVaiBancar) {
  console.log("Se ele vai pagar, eu vou.");
} else {
  console.log("Deu ruim. Não tem praia certa");
}

tenhoDinheiro || temSol // condição
  ? console.log("Obaa!! Hoje tem praia.") // resultado se a condição for verdadeira
  : console.log("Deu ruim. Não tem praia certa"); // resultado se a condição for falsa

function checaSeAlunoAprovadoComIf(aluno) {
  if (aluno.nota >= 7) {
    return `O aluno ${aluno.nome} está aprovado.`;
  } else {
    return `O aluno ${aluno.nome} está reprovado.`;
  }
}

function checaSeAlunoAprovadoComTernario(aluno) {
  return aluno.nota >= 7
    ? `O aluno ${aluno.nome} está aprovado.`
    : `O aluno ${aluno.nome} está reprovado.`;
}

const aluno = { nome: "Fulano de Tal", nota: 8 };
console.log(checaSeAlunoApreovadoComTernario(aluno));

// return tenhoDinheiro && temSol ? "Vou à praia" : "Não vou à praia";

// if (tenhoDinheiro && temSol) {
//   return "Vou à praia";
// } else {
//   return "Não vou à praia";
// }
