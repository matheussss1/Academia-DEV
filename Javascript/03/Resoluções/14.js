/**
 *  * 14 - Escreva um programa que leia um caracter e diga se ele é uma vogal, consoante,
 *      número ou um símbolo (qualquer outro caracter, que não uma letra ou número).
 */

 const rl = require("readline-sync");

 const vogais = ["a", "e", "i", "o", "u"];
 const consoantes =  [
  'b', 'c', 'd', 'f', 'g',
  'j', 'k', 'l', 'm', 'n',
  'p', 'q', 'r', 's', 't',
  'v', 'w', 'x', 'z'
];

let caracter = rl.question("Insira um caracter: ").toLowerCase();

while(caracter.length > 1) {
  caracter = rl.question("Insira um caracter: ").toLowerCase();
};

if (vogais.includes(caracter)) {
  console.log("É uma vogal");
}
else if (consoantes.includes(caracter)) {
  console.log("É uma consoante");
}
else if (String(Number(caracter)) !== "NaN") {
  console.log("É um numero");
}
else {
  console.log("É um simbolo");
}
