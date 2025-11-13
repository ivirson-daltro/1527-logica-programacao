---
marp: true
math: mathjax
---

# Lógica de Programação - JavaScript

---

## Introdução

### Algoritmos

Um algoritmo é um conjunto de instruções finitas e bem definidas para realizar uma tarefa ou resolver um problema, funcionando como uma receita de bolo. Ele recebe uma entrada (input), processa essa entrada através de passos lógicos e produz uma saída (output). Algoritmos são a base da programação de computadores, mas também são usados em sistemas como redes sociais, motores de busca, GPS e finanças.

---

### Exemplo prático

O Sr. Joaquim, dono da tradicional **Farmácia Boa Saúde**, viu a concorrência crescer e decidiu modernizar seus serviços — afinal, medir pressão já não era mais novidade.

Sua nova ideia genial? Oferecer um cálculo personalizado de **IMC** para cada cliente!
Com um caderninho e uma calculadora, ele registrava o peso, a altura e o resultado, criando um histórico digno de um “check-up de bairro”.

Agora, o Sr. Joaquim quer automatizar essa façanha:
Implemente um algoritmo (em português) que leia o peso e a altura de um cliente, calcule o IMC e exiba o resultado.

_(Se quiser ganhar um desconto na próxima visita, mostre também a faixa do IMC — o Sr. Joaquim adora esses detalhes!)_

---

### JavaScript

**Breve histórico:**

- Criado em 1995 por Brendan Eich (em 10 dias!).
- Linguagem de tipagem fraca e dinâmica.
  **Fraca**: Permite que a variável mude de tipo.
  **Dinâmica**: O tipo é definido em tempo de execução, e não na declaração.
- Interpreta código linha a linha.
- Executa no navegador ou em ambientes como Node.js.

---

## Sistemas de tipos

O sistema de tipos define como os valores são classificados, comparados e manipulados dentro da linguagem.

O JavaScript é uma linguagem de tipagem **fraca** e **dinâmica**, e isso tem implicações importantes.

---

### Tipagem Dinâmica

Significa que o tipo de uma variável é definido em tempo de execução, e pode mudar a qualquer momento.

```js
let valor = 10; // tipo: number
console.log(typeof valor); // "number"

valor = "dez"; // tipo muda para string
console.log(typeof valor); // "string"
```

O interpretador JavaScript decide o tipo com base no valor no momento da execução, e não na declaração.

---

### Tipagem Fraca

Em linguagens de tipagem fraca, valores de tipos diferentes podem ser combinados automaticamente — às vezes com resultados inesperados.

```js
let resultado = "5" + 3;
console.log(resultado); // "53" — concatenou, não somou!
```

Isso acontece porque o JavaScript converte o número 3 em string antes da operação (coerção implícita).

---

Outro exemplo curioso:

```js
console.log(1 + "1"); // "11"
console.log(1 - "1"); // 0
```

O operador `+` tenta concatenar se houver string, mas o `-` força coerção para número — resultado: comportamentos inconsistentes.

---

### Tipos Primitivos

O JavaScript tem sete tipos primitivos, que são imutáveis e não-estruturados.

| Tipo      | Exemplo         | Descrição                              |
| --------- | --------------- | -------------------------------------- |
| string    | `"Farmácia"`    | Texto                                  |
| number    | `42`, `3.14`    | Número (inteiro ou decimal)            |
| boolean   | `true`, `false` | Valor lógico                           |
| undefined | —               | Variável declarada, mas sem valor      |
| null      | —               | Ausência intencional de valor          |
| symbol    | `Symbol("id")`  | Identificador único (usado em objetos) |
| bigint    | `123n`          | Números inteiros muito grandes         |

---

### Tipos de Referência (Objetos)

Além dos tipos primitivos, há os tipos de referência, usados para estruturas de dados mais complexas.

| Tipo     | Exemplo                              |
| -------- | ------------------------------------ |
| Object   | `{ nome: "Joaquim", idade: 54 }`     |
| Array    | `[10, 20, 30]`                       |
| Function | `function calcularIMC(p, a) { ... }` |
| Date     | `new Date()`                         |

Esses tipos armazenam referências na memória, não valores diretamente.

---

## Constantes, Variáveis e Estados

**Conceitos:**

- Variável: Valor que pode ser alterado (reatribuído). let (uso moderno, escopo de bloco).
- Constante: Valor fixo, não pode ser reatribuído.
- Estado: Conjunto de valores armazenados nas variáveis em um determinado momento. A mudança de estado é o que faz o programa "fazer" coisas.

---

### `var` — o jeito antigo (e perigoso)

- Introduzida desde as primeiras versões da linguagem.
- Escopo de função (ou global, se declarada fora de uma função).
- Permite redeclaração e reatribuição.
- Sofre hoisting — é “içada” para o topo do escopo, mas sem valor inicial.

**Resumo:**

- Válida dentro de toda a função.
- Evite usar — pode causar comportamentos confusos e bugs sutis.

---

### `let` — o novo padrão (seguro e previsível)

- Introduzido no ES6 (2015).
- Escopo de bloco (limitada a `{}` onde foi declarada).
- Permite reatribuição, mas não redeclaração no mesmo escopo.
- Mais previsível e seguro que `var`.

**Resumo:**

- Boa escolha para valores que podem mudar.
- Não pode ser redeclarada no mesmo escopo.

---

### `const` — valores fixos e confiáveis

- Também introduzido no ES6.
- Escopo de bloco, como `let`.
- Não pode ser reatribuída — o valor é constante.
- Ideal para valores que não devem mudar (ex.: PI, URLs, configurações).
- Objetos e arrays declarados com `const` ainda podem ser modificados internamente (só não podem ser reatribuídos).

---

**Comparativo:**

| Característica | var                     | let                                  | const                                |
| -------------- | ----------------------- | ------------------------------------ | ------------------------------------ |
| Escopo         | Função ou global        | Bloco                                | Bloco                                |
| Hoisting       | Sim (sem valor inicial) | Sim (mas inacessível antes da linha) | Sim (mas inacessível antes da linha) |
| Redeclaração   | Permitida               | Não                                  | Não                                  |
| Reatribuição   | Permitida               | Permitida                            | Não                                  |
| Melhor prática | Evite                   | Use para valores mutáveis            | Use para valores fixos               |

---

**Regra de ouro:**

- Use `const` sempre que possível.
- Só use `let` quando o valor precisar mudar.
- E use `var` apenas se estiver lendo código antigo — ou se quiser se lembrar por que ela caiu em desuso ^^.

---

## Funções Nativas, Coerções e Operadores

**Principais funções nativas:**

- `prompt()` → entrada de dados
- `console.log()` → saída
- `Number()`, `String()` → conversões (coerções)
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%`, `**`

---

## Quebra de Fluxo e Tomada de Decisão com JavaScript

Todo programa executa instruções em sequência, linha a linha.
Mas, às vezes, queremos que o código “pense” e escolha um caminho.

---

### Condicionais `if / else`

```js
if (condição) {
  // executa se condição for verdadeira
} else {
  // executa se for falsa
}
```

---

### Condicional `switch`

Usada quando há múltiplas opções possíveis para uma mesma variável.

```js
switch (key) {
  case value:
    break;

  default:
    break;
}
```

---

### Condicional Ternário (`?` `:`)

Forma curta de um if/else simples.

```js
condição ? valorSeVerdadeiro : valorSeFalso;
```

---

## Conceito de Truthy / Falsy

Em JavaScript, qualquer valor pode ser avaliado como verdadeiro (**truthy**) ou falso (**falsy**).

Valores **falsy**:
`false`, `0`, `""`, `null`, `undefined`, `NaN`

Tudo o resto é **truthy**.

---

## Operadores de Coalescência (`??` e `?.`)

### `??` — Nullish Coalescing

Retorna o primeiro valor não nulo nem indefinido.

```js
let nomeCliente = null;
let nomePadrao = "Cliente desconhecido";
console.log(nomeCliente ?? nomePadrao);
```

---

### `?.` — Optional Chaining

Evita erro quando acessamos propriedades que podem não existir.

```js
let cliente = { nome: "Ana" };
console.log(cliente.endereco?.cidade); // undefined (sem erro)
```

---

## Laços de Repetição (Loops)

Nem sempre sabemos de antemão quantas vezes uma ação precisa ser executada.  
Os **laços de repetição** permitem **executar um bloco de código várias vezes**, enquanto uma condição for verdadeira — ou percorrendo elementos de uma estrutura (como arrays e objetos).

---

### `for` — repetição com contador

Usado quando sabemos **quantas vezes** o loop deve executar.

```js
for (let i = 0; i < 5; i++) {
  console.log("Contagem:", i);
}
```

**Explicação:**

- `let i = 0` → inicialização
- `i < 5` → condição de continuação
- `i++` → incremento a cada volta

Resultado: imprime de 0 a 4.

---

### `while` — repetição com condição

Usado quando **não sabemos quantas vezes** o loop deve ocorrer, mas temos uma condição que controla a repetição.

```js
let contador = 0;

while (contador < 5) {
  console.log("Contagem:", contador);
  contador++;
}
```

O bloco será executado **enquanto a condição for verdadeira**.  
⚠️ Cuidado: se esquecer de atualizar a variável, o loop será **infinito**!

---

### `do...while` — executa pelo menos uma vez

A diferença é que a verificação da condição vem **depois** do bloco.  
Assim, o código executa **pelo menos uma vez**, mesmo que a condição seja falsa.

```js
let numero = 1;

do {
  console.log("Número:", numero);
  numero++;
} while (numero <= 3);
```

Resultado: imprime `1`, `2`, `3`.

---

### `for...in` — percorrendo propriedades de um objeto

Serve para **iterar sobre as chaves (nomes das propriedades)** de um objeto.

```js
const cliente = { nome: "Joaquim", idade: 54, ativo: true };

for (let chave in cliente) {
  console.log(chave + ":", cliente[chave]);
}
```

Saída:

```
nome: Joaquim
idade: 54
ativo: true
```

---

### `for...of` — percorrendo valores de coleções

Usado para **percorrer os valores** de arrays, strings ou objetos iteráveis.

```js
const produtos = ["remédio", "vitamina", "curativo"];

for (let item of produtos) {
  console.log("Produto:", item);
}
```

Saída:

```
Produto: remédio
Produto: vitamina
Produto: curativo
```

---

### Diferença entre `for...in` e `for...of`

| Estrutura  | Itera sobre      | Usado com                       | Exemplo                    |
| ---------- | ---------------- | ------------------------------- | -------------------------- |
| `for...in` | Índices / chaves | Objetos e arrays (para índices) | `for (let i in array)`     |
| `for...of` | Valores          | Arrays, strings, coleções       | `for (let valor of array)` |

---

### Exemplo prático: somando preços

```js
const preços = [10.5, 8.0, 12.75];
let total = 0;

for (let preço of preços) {
  total += preço;
}

console.log("Total da compra:", total.toFixed(2));
```

---

### Controle de fluxo dentro de loops

Você pode **interromper** ou **pular** uma iteração:

- `break` → encerra o loop imediatamente
- `continue` → pula para a próxima iteração

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // pula o número 3
  if (i === 5) break; // para no 5
  console.log(i);
}
```

Saída: `1, 2, 4`

---

### Exercício: Calculando a média de notas

A **Farmácia Boa Saúde** agora oferece um serviço de “Saúde Escolar” — o Sr. Joaquim quer ajudar os pais a calcularem a **média das notas** de seus filhos.

---

**Desafio:**  
Crie um programa que:

1. Peça ao usuário para informar **quantas notas** serão digitadas.
2. Use um **laço** para ler cada nota (usando `prompt()` ou entrada simulada).
3. Calcule e exiba a média final.

---

**Exemplo (em JavaScript):**

```js
let totalNotas = Number(prompt("Quantas notas deseja informar?"));
let soma = 0;

for (let i = 1; i <= totalNotas; i++) {
  let nota = Number(prompt("Digite a nota " + i + ":"));
  soma += nota;
}

let media = soma / totalNotas;
console.log("Média final:", media.toFixed(2));
```
