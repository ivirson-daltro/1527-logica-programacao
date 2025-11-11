let condicao = false;
condicao = 0;
condicao = "";
condicao = null;
condicao = undefined;
condicao = parseInt("154e");
condicao = parseFloat("154e");
condicao = "cachorro caramelo";
condicao = { nome: "Fulano" };

if (condicao) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
