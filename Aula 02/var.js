// console.log(saudacao);

function saudar() {
  var nome = "Fulano";
  console.log(`
    ${saudacao}, ${nome}.
    Hoje é um belo dia!
    `);
}

// console.log(saudacao, ",", nome);

saudacao = "Teste";
saudar();

function exibeDadosCliente(cpf) {
  const cliente = {
    nome: "Fulano",
    cpf: "01234567890",
    matricula: "0014",
  };

  console.log(`
    Cliente: ${cliente.nome}
    CPF: ${cliente.cpf}
    Matrícula: ${cliente.matricula}
    `);

  console.log(
    "Cliente:",
    cliente.nome,
    "\nCPF:",
    cliente.cpf,
    "\nMatricula:",
    cliente.matricula
  );
}

// exibeDadosCliente();

var saudacao = "Olá";
var saudacao = "Oi";

saudar();
