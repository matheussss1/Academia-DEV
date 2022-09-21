const readline = require('readline-sync');


/**
 * Faça um programa para a leitura de duas notas parciais de um aluno.
 *     retorne no console: 
 * 
 *      A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
 *      A mensagem “Aprovado com Distinção”, se a média for igual a dez;
 *      A mensagem “Reprovado” se a média for menor de do que sete;
 *
 */

// const nota1 = readline.question("Me diga uma nota: ")
// const nota2 = readline.question("Me diga uma outra nota: ")
// const media = nota1 + nota2 / 2;

// console.log(media);


// const nota1 = readline.questionInt("Me diga uma nota: ")
// const nota2 = readline.questionInt("Me diga uma outra nota: ")
// const media = nota1 + nota2 / 2;

// console.log(media);

const nota1 = readline.questionInt("Me diga uma nota: ")
const nota2 = readline.questionInt("Me diga uma outra nota: ")
const media = (nota1 + nota2) / 2;

console.log(media);
