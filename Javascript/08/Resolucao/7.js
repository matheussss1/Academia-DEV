const rl = require('readline-sync');


function encurtador2000(frase) {
  const tamanho = rl.questionInt("Quantos caracteres voce quer encurtar?");
  return frase.substring(0, frase.length - tamanho);
}

console.log(encurtador2000("abcdef"));