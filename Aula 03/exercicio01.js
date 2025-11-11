/*
    Dado o dia semana, em valores numéricos, de 0 a 6, onde 0 é domingo e 6 é sábado, 
    imprimir o dia da semana correspondente por extenso (ex: Domingo).
*/

const hoje = new Date();
// console.log(hoje);
// console.log(hoje.getDay());

const diaDaSemana = hoje.getDay();

// exemplo prático milisengundos Date.now()
let fotoDePerfilDeBruno = "foto3x4";
fotoDePerfilDeBruno = fotoDePerfilDeBruno + Date.now();
console.log(fotoDePerfilDeBruno);
let fotoDePerfilDeIvirson = "foto3x4";
fotoDePerfilDeIvirson += Date.now();
console.log(fotoDePerfilDeIvirson);

if (diaDaSemana === 0) {
  console.log("Domingo");
} else if (diaDaSemana === 1) {
  console.log("Segunda-feira");
} else if (diaDaSemana === 2) {
  console.log("Terça-feira");
} else if (diaDaSemana === 3) {
  console.log("Quarta-feira");
} else if (diaDaSemana === 4) {
  console.log("Quinta-feira");
} else if (diaDaSemana === 5) {
  console.log("Sexta-feira");
} else if (diaDaSemana === 6) {
  console.log("Sábado");
} else {
  console.log("Não é um dia da semana");
}

/*
  Agora, implementar a mesma solução, usando o switch
*/
switch (diaDaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Valor invalido");
    break;
}
