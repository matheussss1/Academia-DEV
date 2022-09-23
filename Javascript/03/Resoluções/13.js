/**
 *  * 13 - Faça um Programa que peça um número correspondente a um determinado ano e em 
 *      seguida informe se este ano e ou não bissexto.
 */

const rl = require("readline-sync");

let ano = rl.questionInt("Insira um ano ");

while (ano <= 0) {
  console.log("Ano inválido ");

  ano = rl.questionInt("Insira um ano ");
}  

let ehBixesto = false;

if (ano % 400 === 0) {
  ehBixesto = true;
}

if (ano % 4 === 0 && ano % 100 !== 0 ) {
  ehBixesto = true;
}

console.log((ehBixesto ? "É" : "Não é" )+ " Bixesto");