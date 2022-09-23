/**
 *  * 4 - Utilizando a estrutura de repetição for, faça um programa
 *   que receba 10 números e conte quantos deles estão entre o intervalo 10 e 20
 *   e quantos deles estão fora do intervalo, escrevendo estas informações.
 */

 const rl = require("readline-sync");

 

  let foraDoIntervalo = 0;

  
 for (let i = 0 ; i < 10 ; i++) {
  const numero = rl.questionInt("Digite um numero: "); 
  if (numero < 10 || numero > 20) {
    foraDoIntervalo++;
  }

 }

 console.log("Total de numeros fora do intervalo: " + foraDoIntervalo);