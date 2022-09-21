/**
 * Escreva um algoritmo que peça um numero para o usuario
 *     e retorne se o numero é positivo ou negativo
 * 
 */

const readline = require('readline-sync');

const numero = readline.questionInt("Me diga um numero: ");


if (numero === 0) {
  console.log("Zero");
}else if (numero > 0){
   console.log("Numero positivo");
}else {
  console.log("Numero negativo");
}