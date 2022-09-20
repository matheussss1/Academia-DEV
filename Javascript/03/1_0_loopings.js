/**
 *  Loopings ou Laços são códigos que executam multiplas vezes um trecho especifico de código
 * 
 *  Um loop geralmente possui um ou mais dos seguintes itens:
 *
 *  O contador, que é inicializado com um certo valor - este é o ponto inicial do loop
 * 
 *  A condição de saída, que é o critério no qual o loop pára - geralmente o contador atinge 
 *  um certo valor.
 * 
 *  Um iterador, que geralmente incrementa o contador em uma quantidade a cada loop, 
 *  sucessivamente, até atingir a condição de saída.
 * 
 * 
 * Veremos como podemos fazer um looping em javascript:
 * 
 * 
 * for statement:
 */

// for (let contador = 0 ; contador < 10 ; contador ++) {
//   console.log(contador);
// }

// for (let tabuada = 1; tabuada < 11 ; tabuada ++) {
//   for (let numero = 1; numero < 11; numero ++) {
//     console.log(tabuada * numero);
//   }
// }

const listaMercado = ["Uva", "Banana", "Melancia"];

// for (let index = 0; index < listaMercado.length; index ++) {
//   if (listaMercado[index] === 'Melancia') {
//     console.log("Melancia é uma otima fruta")
//   }
//   console.log("Produto adicionado");
// }

// for (let valores of listaMercado) {
//   console.log(valores);
// }

// const usuario = {
//   nome: "stags",
//   idade: 20,
//   sobrenome: "carvalho"
// };

// for (let propriedade in usuario){
//   console.log(`Chave: ${propriedade}; valor: ${usuario[propriedade]}`);
// }

/**
 * do while
 * 
 * primeiro faça, depois cheque se é verdadeiro
 */

// do {
//   console.log("vou executar");
// } while(false);

// let contador = 1;

// do {
//   console.log("looping infinito", contador++);
// } while(true);

// let inputUsuario = 11;

// while(inputUsuario < 0 || inputUsuario > 10) {
//   console.log("input errado");

//   inputUsuario = 5;
// }

/**
 * É possível parar por total a execução de um looping utilizando a palavra break;
 */

// for (let incrementador = 0 ; incrementador > -1 ; incrementador++) {
//   console.log(incrementador);

//   if (incrementador === 10000) {
//     break;
//   }
// }

// let incrementador = 0;

// while (true) {
//   incrementador++
//   console.log(incrementador);

//   if (incrementador > 10) {
//     break;
//   }
// }

// const usuario = {nome: "stags", sobrenome: "ovo"};

// for (let propriedade in usuario) {
//   console.log(propriedade);
//   break;
// }

/**
 * Podemos pular um passo da repetição utilizando continue
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numeros.length ; index++) {

  const ehPar = (numeros[index] % 2) === 0;

  if (!ehPar) continue;
  
  console.log("Numero par: ", numeros[index]);
}