/**
 *  * 21 - Faça um programa que receba a idade de 15 pessoas e que calcule e mostre:
 * 
 *      a) A quantidade de pessoas em cada faixa etária;
 *      b) A percentagem de pessoas na primeira e na última faixa etária,
 *          com relação ao total de pessoas: 
 *
 *        Até 15 anos
 *        De 16 a 30 anos
 *        De 31 a 45 anos
 *        De 46 a 60 anos
 *        Acima de 61 anos
 */

 const rl = require("readline-sync");

const pessoas = {
  faixa1: 0,
  faixa2: 0,
  faixa3: 0,
  faixa4: 0,
  faixa5: 0
};

let total = 0;

for (let count = 0; count < 3; count ++) {
  const idade = rl.questionInt("Digite uma idade: ");
  total++;

  if (idade > 15 && idade <= 30) {
    pessoas.faixa2++
  } else if (idade > 30 & idade <= 45) {
    pessoas.faixa3++
  } else if (idade > 45 & idade <= 60) {
    pessoas.faixa4++
  } else if (idade > 60) {
    pessoas.faixa5++
  }else {
    pessoas.faixa1++
  };
}



for (let faixa = 1; faixa <= 5 ; faixa++) {
  console.log(`Pessoas na faixa ${faixa}: ${pessoas[`faixa${faixa}`]}`);
  
}

const porcentagemPrimeiraFaixa = ((pessoas.faixa1 / total) * 100).toFixed(2);
const porcentagemUltimaFaixa = ((pessoas.faixa5 / total) * 100).toFixed(2);

console.log(`Porcentagem na primeira faixa: ${porcentagemPrimeiraFaixa}%`)
console.log(`Porcentagem na ultima faixa: ${porcentagemUltimaFaixa}%`)