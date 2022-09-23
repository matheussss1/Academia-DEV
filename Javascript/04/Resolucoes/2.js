/**
 *  * 2 - Escreva um programa que pergunte um número n para o usuário e 
 *     exiba todos os seus divisores.
 */

 const rl = require("readline-sync");

 const numero = rl.questionInt("Digite um numero: "); 

 for (let divisor = numero ; divisor > 0 ; divisor--) {
  if (numero % divisor === 0) {
    console.log(divisor);
  }
 }