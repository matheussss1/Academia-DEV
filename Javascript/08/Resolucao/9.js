const rl = require('readline-sync');

let shouldContinue = true;
const listaProdutos = [];
let total = 0;

while (shouldContinue) {
  const nome = rl.question("Digite o nome do produto: ");
  const valor = rl.questionFloat("Digite o valor do produto: ");
  const produto = {nome, valor};
  total += valor;
  listaProdutos.push(produto);

  shouldContinue = rl.keyInYN("Deseja continuar?");
}

console.table(listaProdutos);
console.log("A lista deu um total de: " + total);
