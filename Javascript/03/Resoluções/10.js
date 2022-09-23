/**
 *     Faça um programa que lê as duas notas parciais obtidas por um aluno 
 *     numa disciplina ao longo de um semestre, e calcule a sua média.
 *     A atribuição de conceitos obedece à tabela abaixo:  
 *
 *     Média de aproveitamento        Conceito 
 *
 *       Entre 9.0 e 10.0                 A
 *
 *       Entre 7.5 e 9.0                  B
 *
 *       Entre 6.0 e 7.5                  C
 *
 *       Entre 4.0 e 6.0                  D
 *
 *       Entre 4.0 e 0                    E 
 */

 const readline = require('readline-sync');

 const nota1 = readline.questionFloat("Insira a primeira nota: ");
 const nota2 = readline.questionFloat("Insira a segunda nota: ");
 const media = (nota1 +  nota2) / 2;

 console.log(media);

 let conceito = "E";

 if (media > 4) {
  conceito = "D"
 }

 if(media > 6) {
  conceito = "C"
 }
 
 if(media > 7.5) {
   conceito = "B"
  }
  
  if(media > 9) {
    conceito = "A"
   }

 console.log(conceito);