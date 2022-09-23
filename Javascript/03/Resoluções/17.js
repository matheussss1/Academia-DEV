/**
 *  * 17 - Faça um programa que peça uma nota, entre zero e dez. 
 *      Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o 
 *      usuário informe um valor válido
 */

 const rl = require("readline-sync");
 let nota = rl.questionInt("Digite uma nota entre zero e dez: ");

 while (nota < 0 || nota > 10) {
  console.log("Nota inválida ");
  nota = rl.questionInt("Digite uma nota entre zero e dez: ");
 }

 console.log(nota);