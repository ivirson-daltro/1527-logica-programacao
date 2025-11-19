function saudacao() {
  console.log("Bem-vindo à Farmácia Boa Saúde!");
}

// console.log("Retorno da funcao:", saudacao());

function soma(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("Só é possível somar números");
    return;
  }
  return Number(a) + Number(b);
}

// console.log(soma(1, 2));
// console.log(soma(10, 11)); // 21
// console.log(soma("z", 2)); // 3? 12?

// Cidadãs de primeira classe
// podem ser atribuídas a variáveis
const hoje = new Date();
const subtracao = function (a, b) {
  console.log(hoje);
  return a - b;
};

// console.log(subtracao(4, 1));

const queDiaEh = function (data) {
  return data;
};

// console.log(queDiaEh(hoje));

// podem ser passadas como parametro de outras funções
function executar(fn) {
  fn();
}

// executar(saudacao);
// executar(function () {
//   console.log("Teste");
// });

const numeros = [1, 2, 3, 4, 5];
// console.log(
//   numeros.filter(function (num) {
//     return num % 2 === 0;
//   })
// );

// Arrow functions
const multiplica = (a, b) => {
  return a * b;
};
const multiplicaSoQueMaisBonitinha = (a, b) => a * b;

// console.log(multiplicaSoQueMaisBonitinha(2, 3));

// Gerar numero aleatório
console.log((Math.random() * 10).toFixed());
