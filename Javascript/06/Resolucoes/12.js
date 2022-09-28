function numeroRepeticoes(frase, caracter) {
  const [char] = caracter.toLowerCase();
  const _frase = frase.toLowerCase();

  return (_frase.length - _frase.replaceAll(char, '').length);
};

console.log(numeroRepeticoes("abcsd", "a"));
console.log(numeroRepeticoes("aasdsadaaaaa asdasda", "a"));