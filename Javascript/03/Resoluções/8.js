/**
 * Faça um programa que pergunte o preço de três produtos e informe qual produto você 
 *     deve comprar, sabendo que a decisão é sempre o mais barato.
 */

 const readline = require('readline-sync');

const produto1 = readline.questionInt("Preço 1: ");
const produto2 = readline.questionInt("Preço 2: ");
const produto3 = readline.questionInt("Preço 3: ");

let produtoEscolhido = null;

if (produto1 >= produto2 && produto2 <= produto3 ) {
  produtoEscolhido = produto2;
}

if (produto1 >= produto3 && produto3 <= produto2 ) {
  produtoEscolhido = produto3;
}

if (produto2 >= produto1 && produto1 <= produto3 ) {
  produtoEscolhido = produto1;
}


console.log("O produto escolhido foi: " + produtoEscolhido);