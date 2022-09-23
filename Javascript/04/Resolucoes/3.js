/**
 * 3 - Escreva um programa que recebe uma frase do usuário e exibe
 *    a mesma frase sem nenhuma vogal
 */

 const rl = require("readline-sync");
 const vogais = ["a","e","i","o","u"];
 let frase = rl.question("Digite uma frase: ");

 for (indexFrase in frase) {
  if (vogais.includes(frase[indexFrase])) {
    frase = frase.replaceAll(frase[indexFrase], '')
  }
 }

 console.log(frase);