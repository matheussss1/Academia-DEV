const rl = require('readline-sync');

const numeros = [];

for (let i = 1; i  <= 10 ; i ++) {
  const numero = rl.questionInt(`${i}/10  Digite um numero: `);

  numeros.push(numero);
}

numeros.sort((a, b) => a - b);

console.log(numeros);