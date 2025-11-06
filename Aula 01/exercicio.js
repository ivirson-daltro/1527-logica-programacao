/*
    Você está ajustando o preço final de um produto.
    Calcule o preço final corretamente e exiba uma mensagem como:

        “Preço final com impostos e desconto: R$ 62.09”
*/

let preco = "59.90"; // veio da API como string
let imposto = 0.12; // 12%
let desconto = "5"; // desconto em reais

// let precoFinal = parseFloat(preco) * (1 + imposto) - desconto;
// console.log("Preço final com impostos e desconto: R$" + precoFinal.toFixed(2));

let precoFinal = Number(preco) * (1 + imposto) - Number(desconto);
console.log(precoFinal.toFixed(2));
