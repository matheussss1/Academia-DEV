/**
 *  * 18 - Faça um programa que receba um número e usando laços de repetição calcule e 
 *      mostre a tabuada desse número.
 * 
 */

 const rl = require("readline-sync");
 let numero = rl.questionInt("Digite um número: ");


 for (let tabuada = 1; tabuada <= 10 ; tabuada++) {
  console.log(`${numero} * ${tabuada} = ${numero * tabuada}`);
 }