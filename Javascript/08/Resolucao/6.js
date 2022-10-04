const vogais = ["a", "ã", "e", "é", "i", "o", "u"];

const frase = "Remova desta questão tudo o que não é consoante.";
let novaFrase = "";

for (let i = 0; i < frase.length ; i ++){
  if (!vogais.includes(frase[i])) {
    novaFrase += frase[i];
    continue; 
  }
}

console.log(novaFrase);