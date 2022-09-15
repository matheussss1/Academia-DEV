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
 
   || - (OU lógico) - Retorna expr1 caso possa ser convertido para verdadeiro; senão, retorna expr2. Assim, quando utilizado com valores booleanos, || retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.
  
   ! - (NEGAÇÃO lógica) - Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.

   exemplos:
 */

true || true;       // t || t retorna true

false || true;      // f || t retorna true

true || false;      // t || f retorna true

false || (3 == 4);  // f || f retorna false

"Gato" || "Cão";    // t || t retorna Gato

false || "Gato";    // f || t retorna Gato
"Gato" || false;    // t || f retorna Gato

true && true;       // t && t retorna true
true && false;      // t && f retorna false
false && true;      // f && t retorna false
false && (3 == 4);  // f && f retorna false
"Gato" && "Cão";    // t && t retorna Cão
false && "Gato";    // f && t retorna false
"Gato" && false;    // t && f retorna false

!true;              // !t retorna false
!false;             // !f retorna true
!"Gato";            // !t retorna false


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