function ordenacao(numero1, numero2) {
  if (numero1 < numero2) {
    return -1
  }

  if (numero1 > numero2) {
    return 1;
  }

  return 0;
}

console.log(ordenacao(1,2));
console.log(ordenacao(2,2));
console.log(ordenacao(3,2));

const array = [1, 4,10, -20, 0, 32, 90, 5, 24, 32, 20, 19, 50, 40];

console.log(array.sort(ordenacao));