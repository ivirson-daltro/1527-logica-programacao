# Projeto Final — Sistema de Gerenciamento de Clientes com IMC

## Descrição Geral

Você deverá desenvolver uma aplicação de linha de comando (CLI) em Node.js para gerenciar clientes de uma farmácia.

O sistema permitirá cadastrar clientes, calcular o IMC (Índice de Massa Corporal), registrar a evolução ao longo do tempo e manipular a lista de clientes.

O foco do projeto é avaliar:

- Organização do código
- Separação de responsabilidades
- Manipulação de arrays e objetos
- Boas práticas
- Entrada e saída de dados
- Persistência opcional (dependendo das instruções do professor)

## Requisitos do Projeto

A aplicação deve ser dividida em ao menos dois arquivos:

- app.js → responsável pela interface com o usuário (menu e navegação)
- service.js → responsável pela lógica da aplicação (funções de negócio)

## Funcionalidades Obrigatórias

1. Cadastrar cliente
   O sistema deve solicitar:

   - Nome
   - Peso (em kg)
   - Altura (em cm)

   Após validar os dados, cada cliente será armazenado em uma lista no seguinte formato:

2. Calcular IMC
   O usuário deve informar o nome do cliente.
   O sistema deverá:

   - localizar o cliente
   - calcular o IMC pela fórmula
   - arredondar para 1 casa decimal
   - registrar o valor no atributo historico junto com a data
   - exibir o IMC calculado

3. Exibir evolução do cliente
   O sistema deve permitir consultar o histórico de IMC calculado, exibindo:

   ```
   1. 10/05/2025 15:32 — IMC: 28.4
   2. 12/05/2025 14:21 — IMC: 27.9
   ```

4. Listar clientes cadastrados

   Exibir:

   ```
   1. Ana — 60kg — 1.65m
   2. Bruno — 82kg — 1.78m
   ```

5. Excluir cliente

   O usuário informa o nome, e o sistema:

   - busca o cliente
   - remove da lista
   - exibe mensagem de sucesso

6. Encerrar o sistema

Finaliza o programa com uma mensagem de despedida.

## Requisitos Técnicos

Utilizar a biblioteca prompt-sync

Separação clara entre app (interface) e service (lógica)

Validação de dados (nome repetido, números inválidos, cliente não encontrado)

Código limpo e bem estruturado

## Requisitos Opcionais

O aluno pode implementar melhorias, como:

- Persistência dos dados em arquivo JSON
- Classificação do IMC (normal, sobrepeso, obesidade…)
- Exportação da evolução para CSV
- Interface em Express.js (versão web)
- Tratamento avançado de erros
- Sistema de login para funcionários
