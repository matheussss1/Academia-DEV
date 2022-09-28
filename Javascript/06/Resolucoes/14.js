function isPrimo(number) {
  let divisores = 0;
  for (let i = 1; i <= number ; i ++) {
    if ( number % i === 0) divisores++;
    if (divisores > 2) break;
  }

  return divisores === 2;

};

console.log(isPrimo(7));
console.log(isPrimo(10));
console.log(isPrimo(70));
console.log(isPrimo(4));
console.log(isPrimo(2));
console.log(isPrimo(3));