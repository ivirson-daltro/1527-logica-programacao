const prompt = require("prompt-sync")();

let opcao;

do {
  console.log(`
        === FARMACIA FRONT ===
        1 - Cadastrar cliente
        2 - Atualizar cliente
        3 - Exibir evolução do cliente
        4 - ver clientes cadastrados
        5 - Excluir cliente
        0 - Sair
    `);

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      console.log(
        "Você escolheu Cadastrar cliente.\nDesculpe o transtorno. Estamos trabalhando para te entregar a melhor plataforma"
      );
      break;
    case "2":
      console.log(
        "Você escolheu Atualizar cliente.\nDesculpe o transtorno. Estamos trabalhando para te entregar a melhor plataforma"
      );
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
    case "0":
      console.log("Saindo do sistema...\nVolte sempre");
      break;

    default:
      console.log("Opção inválida!");

      break;
  }
} while (opcao >= 1 && opcao <= 5);
