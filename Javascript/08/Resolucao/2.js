const impares = [];
const pares = [];

for (let i = 1; i <= 1000; i ++) {
  if (i % 2 === 0) {
    pares.push(i);
    continue;
  }
  impares.push(i);
}

console.log(pares);
console.log(impares);