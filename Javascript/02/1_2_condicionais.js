/**
 * Em javascript podemos condicionalmente executar nosso código
 * 
 * perceba a estrutura
 */

if (true) { //faço a minha comparação
  // caso verdadeira, execute esse trecho de código
}else {
  // caso falso, execute esse trecho de código
}


let a = 1;
let b = 2;

if (a === b) { //faço a minha comparação
  // caso verdadeira, execute esse trecho de código
}
else if  (a !== b) { //faço outra comparação
  // caso verdadeira, execute esse trecho de código
}else {
  // caso falso, execute esse trecho de código

  //redundante, nunca entrará aqui
}

let c = 1;
let d = 2;
let e = 3;

if (d === c) { //faço a minha comparação
  // caso verdadeira, execute esse trecho de código
}
else if  (d !== e) { //faço outra comparação
  // caso verdadeira, execute esse trecho de código
}else {
  // caso falso, execute esse trecho de código
}

/**
 * Dentro do bloco if criamos oq é chamado de escopo de bloco
 */

if ("condição") {
  let comEscopo = 0
}

// console.log(comEscopo) // erro "J" is not defined;

let condicaoFalse = false

if (condicaoFalse) {
  var semEscopo
}

console.log(semEscopo) // undefined
