function bhaskara(a, b, c) {
  const delta = b * b - (4 * a * c);

  if (delta <= 0) {
    return "Não possuí raiz ou tem raizes inválidas";
  }

  const raiz = Math.sqrt(delta);
  const x1 = - (b - raiz) / (2 * a);
  const x2 = - (b + raiz) / (2 * a);

  return `x1: ${x1};  x2: ${x2}`;
};

console.log(bhaskara(1,12,-13));
console.log(bhaskara(2,-16,-18));

