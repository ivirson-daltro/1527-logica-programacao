const operacao = "+";
const a = 6;
const b = 2;
switch (operacao) {
  case "+":
    console.log(`A soma é ${a + b}`);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Não é uma operação válida");
    break;
}
