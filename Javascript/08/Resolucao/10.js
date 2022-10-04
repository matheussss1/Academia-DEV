function fibonacci(n) {

  const sequencia = [];


  for (let i = 0; i <= n; i ++) {
    if (i === 1 || i === 0) {
      sequencia.push(1);
      continue;
    }

    sequencia.push(sequencia[i-1] + sequencia[i - 2]);
  }

  return sequencia;
};


console.log(fibonacci(10));