/**
 * Dentro do Javascript possuímos alguns operadores...
 * vamos começar pelo operador de atribuição, que em resumo
 * é criar uma variavel e assinar o seu valor:
 */

let variavel = "teste" // = é o operador de atribuição.

/**
 * Temos também o operador de atribuição composta:
 */

let idade = 20;

idade += 1; 1 
// o mesmo que:
idade = idade + 1

idade -= 1;
// o mesmo que:
idade = idade - 1;

idade *= 2;
//o mesmo que:
idade = idade * 2;
 
idade /= 2;
// o mesmo que:
idade = idade / 2;

idade **= 3; 
//o mesmo que:
idade = idade * idade * idade

/**
 * Perceba que ao utilizar um operador de atribuição composta
 * o valor da variavel é alterada de acordo com a operação que fazemos
 * 
 * Operadores de comparação:
 * 
 * Igual == : Retorna verdadeiro caso os operandos sejam iguais.
 * Diferente != : Retorna verdadeiro caso os operandos não sejam iguais.
 * 
 * Estritamente igual === : Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. 
 * Estritamente não igual !== : Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
 * 
 * 
 * Maior que > : Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
 * Menor que < : Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
 * 
 * Maior ou igual a >= : Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.
 * Menor ou igual a <= : Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.
 * 
 * Exemplos:
 */

"2" == 2 // true
"2" === 2 // false

2 > 50 // false
50 > 2 // true

2 != "2" // false
2 !== "2" // true

10 >= 11 // true
10 <= 10 // true

let obj = {teste: "teste"};
let obj1 = {teste: "teste"};

obj === obj1 // false
obj == obj1 // false

let array = ["teste", "teste"];
let array1 = ["teste", "teste"];

array === array1 // false
array == array1 // false

// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript 


/**
 * Operadores matemáticos:
 * 
 *  ++ - Incrementa
 *  -- - Decrementa
 *  +  - soma
 *  -  - subtraí
 *  /  - divide
 *  *  - multiplica
 *  %  - pega o restante da divisão
 *  ** - exponencia
 * 
 */

let n = 0;

n++ // n === 1

n-- // n === 0

n + 20 // n === 20

n - 5 // n === 15

n / 2 // n === 7.5

n * 4 // n === 30

n % 4 // n === 2

n ** 4 // n === 16

/**
 * Operadores lógicos:
  
   && - (E lógico) - Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2.
   Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
 
   || - (OU lógico) - Retorna expr1 caso possa ser convertido para verdadeiro;
   senão, retorna expr2. Assim, quando utilizado com valores booleanos, || retorna verdadeiro caso ambos os 
   operandos sejam verdadeiro; se ambos forem falsos, retorna falso.
  
   ! - (NEGAÇÃO lógica) - Retorna falso caso o único operando possa ser 
   convertido para verdadeiro; senão, retorna verdadeiro.

   exemplos:
 */

true || true;       // retorna true

false || true;      // retorna true

true || false;      // retorna true

false || (3 == 4);  // retorna false

"Gato" || "Cão";    // retorna Gato

false || "Gato";    // retorna Gato
"Gato" || false;    // retorna Gato

true && true;       // retorna true
true && false;      // retorna false
false && true;      // retorna false
false && (3 == 4);  // retorna false
"Gato" && "Cão";    // retorna Cão
false && "Gato";    // retorna false
"Gato" && false;    // retorna false

!true;              // !t retorna false
!false;             // !f retorna true
!!false;             // !!f retorna false
!"Gato";            // !t retorna false
!!"Gato";            // !!t retorna true


/**
 * Operadores condicionais (ternário);
 */

let idadeStags = 21;

let ehMaiorDeIdade = idadeStags >= 18 ? true : false;

//Se a condição for true, retorna o primeiro valor, se nao, o segundo;


/**
 * Operador Spread
 */

let listaDeCompras = ["teste"];

let listaDeComprasAtualizada = [...listaDeCompras];

let partesDaMusica = ['ombro', 'joelhos'];
let musicaCompleta = ['cabeca', ...partesDaMusica, 'e', 'pés'];

let pessoa = {
   nome: "Stags",
   idade: 21
}

let pessoaNova = {
   ...pessoa,
   nome: "Gustavo"
}

console.log(pessoaNova) // nome : gustavo, idade : 21 // sobreescreveu as props antigas

//pode-se ser em niveis mais fundos: 

let carroIncompleto = {
   nome: "KA",
   marca: "Ford",
   componentes: ["roda", "volante"]
};

let carroPronto = {
   ...carroIncompleto,
   componentes: [...carroIncompleto.componentes, "motor"]
};