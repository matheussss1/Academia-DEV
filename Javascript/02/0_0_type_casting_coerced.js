/**
 * Ok, agora que vimos sobre variavel e seus tipos
 * vamos ver como podemos converter seus tipos
 * 
 * Existem duas formas para isso, a primeira é feita de forma implícita,
 * chamada de Type Casting:
 */

 let numeroEmTexto = "2";

 console.log(typeof numeroEmTexto); // -> string
 console.log(typeof Number(numeroEmTexto)); // -> number
 
 let numeroFalso = "zero";
 
 console.log(typeof numeroFalso); // -> string
 console.log(typeof Number(numeroFalso)); // -> number
 
 /*
   Ok, Number() com um texto dentro retornou o typo Number
   Mas será que realmente foi convertido para numero?
 */
 
 console.log(Number(numeroFalso)); // -> NaN
 
 /**
  * Repare que o resultado retornou NaN,
  * acrônimo para "Not a Number" (Não é um numero).
  * 
  * Qualquer valor que voce tente converter para numero,
  * que não seja um numero de fato, retornará NaN.
  */
 
 let numeroVerdadeiro = 4;
 
 console.log(typeof numeroVerdadeiro); // -> number
 console.log(typeof String(numeroVerdadeiro)); // -> string


/**
 * Até agora vimos a transformação de String para Number e vice-versa.
 * Como sabemos, temos o tipo boolean, então deve ter
 */

 
 let booleanoVerdadeiroEmTexto = "conteudo";
 
 console.log(typeof booleanoVerdadeiroEmTexto); // -> string
 console.log(typeof Boolean(booleanoVerdadeiroEmTexto)); // -> boolean
 console.log(Boolean(booleanoVerdadeiroEmTexto)); // -> true
 
 let booleanoFalsoEmTexto = "";
 
 console.log(typeof booleanoFalsoEmTexto); // -> string
 console.log(typeof Boolean(booleanoFalsoEmTexto)); // -> boolean
 console.log(Boolean(booleanoFalsoEmTexto)); // -> false
 
 let booleanoFalsoEmNumero = 0;
 
 console.log(typeof booleanoFalsoEmNumero); // -> number
 console.log(typeof Boolean(booleanoFalsoEmNumero)); // -> boolean
 console.log(Boolean(booleanoFalsoEmNumero)); // -> false
 
 let booleanoVerdadeiroEmNumero = 2;
 
 console.log(typeof booleanoVerdadeiroEmNumero); // -> number
 console.log(typeof Boolean(booleanoVerdadeiroEmNumero)); // -> boolean
 console.log(Boolean(booleanoVerdadeiroEmNumero)); // -> true

 /*
 * Ok, também podemos fazer `type casting` com arrays e objetos
 */

 let booleanoArrayVazio = [];

 console.log(typeof booleanoArrayVazio); // -> object
 console.log(typeof Boolean(booleanoArrayVazio)); // -> boolean
 console.log(Boolean(booleanoArrayVazio)); // -> true
 
 let booleanoArrayComConteudo = ["item", "feijao"];
 
 console.log(typeof booleanoArrayComConteudo); // -> object
 console.log(typeof Boolean(booleanoArrayComConteudo)); // -> boolean
 console.log(Boolean(booleanoArrayComConteudo)); // -> true

 let booleanoObjetoVazio = {};

 console.log(typeof booleanoObjetoVazio); // -> object
 console.log(typeof Boolean(booleanoObjetoVazio)); // -> boolean
 console.log(Boolean(booleanoObjetoVazio)); // -> true
 
 let booleanoObjetoComConteudo = {nome: "teste"};
 
 console.log(typeof booleanoObjetoComConteudo); // -> object
 console.log(typeof Boolean(booleanoObjetoComConteudo)); // -> boolean
 console.log(Boolean(booleanoObjetoComConteudo)); // -> true

 /**
  * Perceba que independente do array ou objeto
  * estar vazio ou não, sempre vai retornar true. 
  * Veremos isso depois.
  * 
  * 
  * Beleza, fizemos apenas o `type casting` para o tipo `Boolean`
  * 
  * vamos tentar com o tipo `String`:
  */


 let objetoTeste = {nome: "stags"};

 console.log(String(objetoTeste)); // -> [object object]

/**
 * A representação em string de um objeto é [object object]
 * 
 * vamos ver como isso se comporta utilizando arrays:
 */

let arrayTesteSemValor = [];
let arrayTesteComValor = ["Uva", 2, false];

 console.log(String(arrayTesteSemValor)); // -> ""
 console.log(String(arrayTesteComValor)); // -> "Uva, 2, false"

 /**
  * A representação em string de um array é todos os valores separados 
  * por virgula em uma string.
  */

 /**
  * Também temos o Type Casting implícito:
  */

 let numero = 1;

 let numeroString = "1";

 console.log(typeof (numero + numeroString)); //string
 console.log(numero + numeroString); // "11"

 // O Javascript automaticamente tenta fazer uma conversão que faça sentido
 // nesse caso ele pensou que vc queria estar juntando strings, como no exemplo anterior
 // Agora veja:

 console.log(typeof (numero - numeroString)); //number
 console.log(numero - numeroString); // "0"

 // nesse caso ele pensou que vc queria estar subtraindo valores

 console.log(typeof (numero - "")); //number
 console.log(numero - ""); // "0"
