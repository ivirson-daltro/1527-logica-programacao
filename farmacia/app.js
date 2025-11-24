const prompt = require("prompt-sync")();
const { cadastrarCliente, calcularIMC } = require("./service");

let opcao;

do {
  console.log(`
        === FARMACIA FRONT ===
        1 - Cadastrar cliente
        2 - Calcular IMC do cliente
        3 - Exibir evolução do cliente
        4 - ver clientes cadastrados
        5 - Excluir cliente
        0 - Sair
    `);

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      try {
        cadastrarCliente();
        console.log("Cliente cadastrado com sucesso!");
      } catch(erro) {
        console.log("ALERTA: Não foi possível cadastrar!");
        console.log("Motivo: " + erro.message);
      }
      break;
    case "2":
      try {   
        calcularIMC();
      } catch(erro) {
        console.log("Erro ao calcular: " + erro.message);
      }
      break;
    case "3":
      console.log(
        "Você escolheu Exibir evolução do cliente.\nDesculpe o transtorno. Estamos trabalhando para te entregar a melhor plataforma"
      );
      break;
    case "4":
      console.log(
        "Você escolheu ver clientes cadastrados.\nDesculpe o transtorno. Estamos trabalhando para te entregar a melhor plataforma"
      );
      break;
    case "5":
      console.log(
        "Você escolheu Excluir cliente.\nDesculpe o transtorno. Estamos trabalhando para te entregar a melhor plataforma"
      );
      break;
    case "6":
      console.log(
        "Você escolheu Calcular o IMC do cliente.\nDesculpe o transtorno. Estamos trabalhando para te entregar a melhor plataforma"
      );
      break;
    case "0":
      console.log("Saindo do sistema...\nVolte sempre");
      break;

    default:
      console.log("Opção inválida!");

      break;
  }
  prompt("\nPressione ENTER para continuar...");

} while (opcao !== "0");
