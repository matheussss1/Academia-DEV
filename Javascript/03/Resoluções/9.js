/**
 *  * 9 -   As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e 
 *       lhe contrataram para desenvolver o programa que calculará os reajustes.  
 *
 *       Faça um programa que recebe o salário de um colaborador e o reajuste segundo
 *          o seguinte critério, baseado no salário atual:
 * 
 *       a. Salários até R$ 280,00 (incluindo): aumento de 20%;
 *       b. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
 *       c. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
 *       d. Salários de R$ 1500,00 em diante: aumento de 5%;
 */

 const readline = require('readline-sync');

 const salario = readline.questionInt("Digite o seu salario: ");
 let porcentagemAumento = 0;

 if (salario <= 280) {
  porcentagemAumento = 20;
}

if (salario > 280 && salario <= 700) {
  porcentagemAumento = 15;
}

if (salario > 280 && salario <= 1500) {
   porcentagemAumento = 10;
  }
  
  if (salario > 1500) {
    porcentagemAumento = 5;
 }

 const aumento =  porcentagemAumento / 100  * salario;

 console.log("Voce recebeu um aumento de: ", "R$", aumento);
 console.log("Seu salário agora é: ", "R$", aumento + salario);