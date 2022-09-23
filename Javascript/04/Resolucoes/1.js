/**
 * * 1 - Dado uma string com uma frase informada pelo usuário
 *     (incluindo espaços em branco) conte:
 * 
 *       a) quantos espaços em branco existem na frase.
 *       b) quantas vezes aparecem as vogais a, e, i, o, u.
 */

 const rl = require("readline-sync");
  const vogais = ["a","e","i","o","u"];

 const frase = rl.question("Digite uma frase: ");


let espacosEmBranco = 0;
let quantidadeVogais = 0;

 for (indexFrase in frase) {
  if (vogais.includes(frase[indexFrase])) {
    quantidadeVogais++
  }
  
  if (frase[indexFrase] === " ") {
    espacosEmBranco++
  }
 }

 console.log("Espacos em brancos: " + espacosEmBranco);
 console.log("Quantidade de vogais: " + quantidadeVogais);
