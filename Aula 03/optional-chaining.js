let cliente = { nome: "Ana" };
console.log(
  cliente.nome,
  cliente.endereco?.cidade ?? "Cliente sem endereço cadastrado"
);
