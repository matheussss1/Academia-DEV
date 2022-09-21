/**
 * Escreva um algoritmo que peça um numero para o usuario
 *     e retorne se o numero é par ou impar
 */

 const readline = require('readline-sync');

 const numero = readline.questionInt("Me diga um numero: ");


 if (numero % 2 === 0) {
  console.log("Numero par");
}else {
   console.log("Numero impar");
 }