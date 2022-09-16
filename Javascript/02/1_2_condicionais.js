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

/**
 * Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro 
 * quando avaliado em um contexto Booleano. 
 * Todos os valores são truthy a menos que eles sejam definidos como 
 * falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).
 * 
 * Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean.
 * 
 *  
    if (true)
    if ({})
    if ([])
    if (42)
    if ("foo")
    if (new Date())
    if (-42)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)


    if (false)
    if (null)
    if (undefined)
    if (0)
    if (NaN)
    if ('')
 */

    if ("" && "stags") {}

    if (false && true) {}

    if (false) {} // nao vai entrar


    if ("stags" && "") {}

    if (true && false) {}

    if (false) {} // nao vai entrar

