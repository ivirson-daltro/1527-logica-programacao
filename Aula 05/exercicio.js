const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

const calculadora = (a, b, operacao) => {
  switch (operacao) {
    case "sum":
      return soma(a, b);
    case "sub":
      return subtracao(a, b);
    case "mult":
      return multiplicacao(a, b);
    case "div":
      return divisao(a, b);
    default:
      console.log("Operação não permitida");
      break;
  }
};

console.log(calculadora(15, 18, "sum"));
console.log(calculadora(15, 18, "sub"));
console.log(calculadora(15, 18, "mult"));
console.log(calculadora(15, 18, "div"));
console.log(calculadora(15, 18, "c"));
