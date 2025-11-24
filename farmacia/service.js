const prompt = require("prompt-sync")();

const clientes = [];

const cadastrarCliente = () => {

  const nomeCliente = prompt("Informe o nome do cliente: ");

  if (!nomeCliente) {
    throw new Error("O nome do cliente é obrigatório!");
  }

  const pesoTexto = prompt("Agora, informe o peso do cliente: ");
  const peso = Number(pesoTexto);

  if (isNaN(peso) || peso <= 0) {
    throw new Error("O peso deve ser um número maior que zero!");
  }

  const alturaTexto = prompt("Agora, informe a altura do cliente, em centímetros: ");
  const altura = Number(alturaTexto);

  if (isNaN(altura) || altura <= 0) {
    throw new Error("A altura deve ser um número maior que zero!");
  }

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

  console.log(`O IMC de ${cliente.nome} é ${cliente.imc}`);
};

const buscarCliente = (nome) => {
  return clientes.find((c) => c.nome === nome);
};

module.exports = { cadastrarCliente, calcularIMC };
