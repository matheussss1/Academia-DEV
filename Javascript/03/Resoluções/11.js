/**
 *    11 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:
 *
 *   Álcool:
 *    Até 20 litros: desconto de 3% por litro
 *    Acima de 20 litros: Desconto de 5% por litro 99.
 *
 *   Gasolina:
 *    Até 20 litros: desconto de 4% por litro
 *    Acima de 20 litros, desconto de 6% por litro
 *
 *  Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível
 *  (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a
 *  ser pago pelo cliente.
 */

const rl = require("readline-sync");

const tabelaDePrecos = {
    Gasolina: 5.699,
    Alcool: 4.899,
};

console.log("Bem vindo ao posto do stags!!\n");

console.table(tabelaDePrecos);

let combustivelEscolhido = rl
    .question("\n Qual combustivel você quer? \n[A - Alcool][G - Gasolina]: ")
    .toUpperCase();

while (combustivelEscolhido !== "G" && combustivelEscolhido !== "A") {
    combustivelEscolhido = rl.question(
        "\n Qual combustivel você quer? \n[A - Alcool][G - Gasolina]: "
    );
}

const litros = rl.questionFloat("Quantos litros você quer? ");
let preco = litros * (combustivelEscolhido === "G" ? tabelaDePrecos.Gasolina : tabelaDePrecos.Alcool);
let desconto = combustivelEscolhido === "G" ? 0.04 : 0.03;

if (combustivelEscolhido === "G" && litros > 20) {
  desconto = 0.06;
}

if (combustivelEscolhido === "A" && litros > 20) {
  desconto = 0.05;
}

console.clear();

console.log("Foram abastecidos " + litros + "!");
console.log("O preço a se pagar será: " + (preco - (preco * desconto)));