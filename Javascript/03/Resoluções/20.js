/**
 *  * 20 - Faça um programa que verifique e mostre os números entre 
 *  1.000 e 2.000 (inclusive) que quando divididos por 11 produzam resto igual a 2.
 */


for (let numero = 1000; numero <= 2000 ; numero++) {
  numero % 11 === 2 && console.log(numero);
}