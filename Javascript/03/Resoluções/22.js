/**
 *  * 22 -  Faça um programa que receba a idade e o peso de sete pessoas. Calcule e mostre:
 *
 *       A quantidade de pessoas com mais de 90 quilos;
 *       A média das idades das sete pessoas:  
***/
const rl = require("readline-sync");

let maisQue90Quilos = 0;
let totalIdade = 0

for (let count = 0; count < 7; count ++) {
  const peso = rl.questionInt("Digite um peso: ");
  const idade = rl.questionInt("Digite um idade: ");
  
  if (peso > 90) {
    maisQue90Quilos++
  }
  
  totalIdade += idade;
}

console.log(`A media da idade das pessoas foi ${totalIdade/7}`)
console.log(`Total de pessoas com mais que 90 kilos ${maisQue90Quilos}`)