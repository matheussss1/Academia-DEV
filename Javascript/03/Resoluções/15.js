/**
 *  * 15 - Escreva um programa que leia um número inteiro de 1 a 7 e informe o dia da semana
 *      correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia 
 *      da semana, mostre uma mensagem de erro.
 */

const rl = require("readline-sync");
let numeroSemana = rl.questionInt("Insira um numero: ");

while (numeroSemana < 1 || numeroSemana > 7) {
  numeroSemana = rl.questionInt("Insira um numero: ");
}

const diasDaSemana = {
  "1": "Segunda",
  "2": "Terça",
  "3": "Quarta",
  "4": "Quinta",
  "5": "Sexta",
  "6": "Sábado",
  "7": "Domingo",
}

console.log(diasDaSemana[numeroSemana]);