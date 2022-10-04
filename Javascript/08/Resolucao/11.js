const rl = require("readline-sync");

const valorDeSaque = rl.questionFloat("Digite quanto quer sacar: ");
let aux = valorDeSaque;

let notas200 = 0;
let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;

for (let i = 0; i < Infinity; i++) {
    if (aux >= 200) {
        aux -= 200;
        notas200++;
        continue;
    }

    if (aux >= 100) {
        aux -= 100;
        notas100++;
        continue;
    }
    if (aux >= 50) {
        aux -= 50;
        notas50++;
        continue;
    }
    if (aux >= 20) {
        aux -= 20;
        notas20++;
        continue;
    }
    if (aux >= 10) {
        aux -= 10;
        notas10++;
        continue;
    }
    if (aux >= 5) {
        aux -= 5;
        notas5++;
        continue;
    }
    if (aux >= 2) {
        aux -= 2;
        notas2++;
        continue;
    }

    break;
}

console.log(`
  Aqui estão: 
  ${notas200 ? notas200 + " notas de 200." : ""} 
  ${notas100 ? notas100 + " notas de 100." : ""}
  ${notas50 ? notas50 + " notas de 50." : ""} 
  ${notas20 ? notas20 + " notas de 20." : ""} 
  ${notas10 ? notas10 + " notas de 10." : ""} 
  ${notas5 ? notas5 + " notas de 5." : ""} 
  ${notas2 ? notas2 + " notas de 2." : ""} 
`);
