const prompt = require("prompt-sync")();

const clientes = [];

const cadastrarCliente = () => {
  let peso;
  let altura;

  const nomeCliente = prompt("Informe o nome do cliente: ");

  do {
    peso = Number(prompt("Agora, informe o peso do cliente: "));
  } while (isNaN(peso));

  do {
    altura = Number(
      prompt("Agora, informe a altura do cliente, em centímetros: ")
    );
  } while (isNaN(altura));

  clientes.push({ nome: nomeCliente, peso, altura: altura / 100 });
};

const calcularIMC = () => {
  let cliente;

  let nome = prompt(
    "De qual cliente você quer calcular o IMC? (informe o nome) "
  );

  cliente = buscarCliente(nome);

  while (!cliente) {
    console.log("Cliente não encontrado!");
    nome = prompt(
      "De qual cliente você quer calcular o IMC? (informe o nome) "
    );

    cliente = buscarCliente(nome);
  }

  const calculo = cliente.peso / (cliente.altura * cliente.altura);
  cliente.imc = calculo.toFixed(1);
};

const buscarCliente = (nome) => {
  return clientes.find((c) => c.nome === nome);
};

module.exports = { cadastrarCliente, calcularIMC };
