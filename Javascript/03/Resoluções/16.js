/**
  * 16 - Fazer um algoritmo que leia um valor em dólar e o converta para real
 */

 const rl = require("readline-sync");

 const valor = rl.questionFloat("Insira uma quantidade em dolar: $");
 const valorRealemDolar =  5.21;

 console.log("R$" + (valor / valorRealemDolar).toFixed(2));
