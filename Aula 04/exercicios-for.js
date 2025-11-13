/*
    Usando o laço for, imprimir os números pares, entre 0 e 200
*/

for (let i = 0; i < 200; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}

/*
    Dado o array de frutas:
*/

const frutas = [
  "banana",
  "maçã",
  "goiaba",
  "beriberi",
  "pitomba",
  "acerola",
  "ata",
  "jaca",
  "abiu",
];

/*
    Usando o laço for, pede-se
        1. Imprimir o nome de todas as frutas
        2. Imprimir somente as frutas que começam com "a"
        3. Imprimir as frutas cujo nome possua mais de 5 letras 
*/

// 1
for (let i = 0; i < frutas.length; i++) {
  //   console.log(frutas[i]);
}

// 2
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i][0] === "a") {
    // console.log(frutas[i]);
  }

  if (frutas[i].substring(0, 1) === "a") {
    // console.log(frutas[i]);
  }

  if (frutas[i].startsWith("a")) {
    console.log(frutas[i]);
  }
}
