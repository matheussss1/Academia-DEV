function ehPalindromo(frase) {
  return frase.toLowerCase().split("").reverse().join("") === frase.toLowerCase();
}

console.log(ehPalindromo("ana"))
console.log(ehPalindromo("anaa"))
console.log(ehPalindromo("aanaa"))