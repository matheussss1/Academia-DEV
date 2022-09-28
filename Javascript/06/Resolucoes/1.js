function getDiasDeVida(anoNascimento, mesNascimento, diaNascimento) {
  const dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento, 0,0,0);
  const hoje = new Date();
  const dias = Math.abs(hoje - dataNascimento) / 1000 / 60 / 60 / 24
  return Math.round(dias);
}

const dias = getDiasDeVida(2000,11,25);

console.log(`Eu possuo ${dias} de vida!`);