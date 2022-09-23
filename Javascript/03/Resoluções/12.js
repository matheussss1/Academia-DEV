/**
 *  * 12 - Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritmo que
 *      pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não.
 */

const readline = require("readline-sync");

const idade = readline.questionInt("Digite sua idade: ");
let podeDoar = false;

if (idade >= 18 && idade <= 67) {
    podeDoar = true;
}

console.log(podeDoar ? "Voce pode doar" : "Voce não pode doar");
