/**
 * Para os tipos String, Number e Boleean é possível fazer
 * o que chamamos de `type casting`:
 * 
 * type casting basicamente é converter de um tipo para outro,
 * confira exemplos:
 */

 let numeroEmTexto = "2";

 console.log(typeof numeroEmTexto) // -> string
 console.log(typeof Number(numeroEmTexto)) // -> number
 
 let numeroFalso = "zero";
 
 console.log(typeof numeroFalso) // -> string
 console.log(typeof Number(numeroFalso)) // -> number
 
 /*
   Ok, Number() com um texto dentro retornou o typo Number
   Mas será que realmente foi convertido para numero?
 */
 
 console.log(Number(numeroFalso)) // -> NaN
 
 /**
  * Repare que o resultado retornou NaN,
  * acrônimo para "Not a Number" (Não é um numero).
  * 
  * Qualquer valor que voce tente converter para numero,
  * que não seja um numero de fato, retornará NaN.
  */
 
 let numeroVerdadeiro = 4;
 
 console.log(typeof numeroVerdadeiro) // -> number
 console.log(typeof String(numeroVerdadeiro)) // -> string
 
 let booleanoVerdadeiroEmTexto = "conteudo";
 
 console.log(typeof booleanoVerdadeiroEmTexto) // -> string
 console.log(typeof Boolean(booleanoVerdadeiroEmTexto)) // -> boolean
 console.log(Boolean(booleanoVerdadeiroEmTexto)) // -> true
 
 let booleanoFalsoEmTexto = ""
 
 console.log(typeof booleanoFalsoEmTexto) // -> string
 console.log(typeof Boolean(booleanoFalsoEmTexto)) // -> boolean
 console.log(Boolean(booleanoFalsoEmTexto)) // -> false
 
 let booleanoFalsoEmNumero = 0
 
 console.log(typeof booleanoFalsoEmNumero) // -> number
 console.log(typeof Boolean(booleanoFalsoEmNumero)) // -> boolean
 console.log(Boolean(booleanoFalsoEmNumero)) // -> false
 
 let booleanoVerdadeiroEmNumero = 2
 
 console.log(typeof booleanoVerdadeiroEmNumero) // -> number
 console.log(typeof Boolean(booleanoVerdadeiroEmNumero)) // -> boolean
 console.log(Boolean(booleanoVerdadeiroEmNumero)) // -> true

 /*
 * Ok, também podemos fazer `type casting` com arrays e objetos,
 * mas o resultado pode ser um pouco diferente do esperado:
 */

 let booleanoArrayVazio = [];

 console.log(typeof booleanoArrayVazio) // -> object
 console.log(typeof Boolean(booleanoArrayVazio)) // -> boolean
 console.log(Boolean(booleanoArrayVazio)) // -> true
 
 let booleanoArrayComConteudo = ["item", "feijao"];
 
 console.log(typeof booleanoArrayComConteudo) // -> object
 console.log(typeof Boolean(booleanoArrayComConteudo)) // -> boolean
 console.log(Boolean(booleanoArrayComConteudo)) // -> true

 let booleanoObjetoVazio = {};

 console.log(typeof booleanoObjetoVazio) // -> object
 console.log(typeof Boolean(booleanoObjetoVazio)) // -> boolean
 console.log(Boolean(booleanoObjetoVazio)) // -> true
 
 let booleanoObjetoComConteudo = {nome: "teste"};
 
 console.log(typeof booleanoObjetoComConteudo) // -> object
 console.log(typeof Boolean(booleanoObjetoComConteudo)) // -> boolean
 console.log(Boolean(booleanoObjetoComConteudo)) // -> true

 /**
  * Perceba que apenas utilizamos Boolean como conversão,
  */
