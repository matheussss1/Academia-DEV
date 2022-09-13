/**
 * Para aqueles que estão já aprendendo lógica de programação
 * ou para aqueles que já sabem e estão avançando, nós sabemos que o primerio passo
 * de uma linguagem é ver como declaramos variaveis.
 * 
 * Todo mundo sabe pra que serve variaveis dentro do nosso código?
 * 
 * explicação segundo o Google: São importantes pois elas armazenam temporariamente ou em definitivo, valores que são
 * manipulados durante a execução do programa.
 * 
 * É basicamente pra isso, tudo que precisamos armazenar para escrevermos nosso código,
 * será armazenado em variaveis.
 * 
 * Podemos começar então vendo como declaramos variaveis
 * 
 * primerio vem "let" ou "const" ou "var"
 * então o nome da variavel
 * e depois a atribuição de valores
 * 
 */

let nomeVariavel = "teste";
var outraVariavel = "variavel"
const outraVariavel2 = "outra varialvel";

/**
 * Perceba que utilizamos 3 tipo de declarações
 * let, var e const
 * qual a diferença entre elas?
 * 
 * Hoje oq vc precisa aprender é:
 * 
 * var não é recomendado de se utilizar
 * porem é uma variavel que age de forma global (ignorando escopo, veremos mais pra frente)
 * pode iniciar indefinida, pode ser redeclarada e seu valor pode ser alterado. 
 * 
 * utilize apenas let e const
 * 
 * let, variavel que pode iniciar undefined, não pode ser redeclarada e
 * seu valor pode ser trocado.
 * 
 * const, variavel que não pode iniciar undefined. não pode ser redeclarada e 
 * seu valor nao pode ser trocado.
 * 
 */

var texto = "texto teste";
var texto = "redeclarando variavel";

/**
 * Perceba que eu posso redeclarar essa variável.
 * Não parece ser uma boa prática né?
 */

/**
 * Ok, embora não seja uma boa prática, 
 * para a variavel texto, atribuimos um conteudo do tipo texto, certo?
 * Colocamos as aspas duplas "", que também poderiam ser aspas simples ''
 * então o conteudo do texto, na programação chamamos isso de tipo `string`
 * 
 * Mas também possuimos outros tipos, como o tipo `number`
 * mais conhecido como `int` em outras linguagens
 * 
 * dessa vez utilizaremos a declaração do tipo `let` ;)
 */

let numero = 20;
let ano = 2022;
let idade = 21;

//Não se esqueça que com let podemos alterar o valor das variaveis
idade = 22;
// Inclusive trocando seus tipos
idade = "teste alterando valor";
idade = 50;

/**
 * Temos também o tipo boleano, ou boolean em ingles
 * utilizado para representar true/false (verdadeiro, falso)
 */

let verdadeiro = true;
let falso = true;

let anoJaAcabou = false;
let brasilTrouxeACopa = false;
let peleMelhorQueMaradona = true;

/**
 * É possível declarar que um valor para indicar que não existe valor,
 * meio confuso né? mas é isso mesmo, null é um tipo que representa *não há valor*.
 * note que apesar de ser um tipo, ele também pode ser utilizado como valor: 
 */

let jatinhoParticular = null;

/**
 * Preparado para confundir a cabeça?
 * Temos o tipo undefined (que também pode ser utilizado como valor XD )
 * que representa que uma variavel não foi inicializada
 * 
 * perceba a diferença:
 * 
 * `null indica que a variavel iniciou e que o valor dela é NULO`
 * `undefined indica que a variavel não iniciou, logo, não tem valor`
 */

let variavelSemValor;

console.log(variavelSemValor) // -> undefined


/**
 * E se quisermos então salvar o nome dos itens de uma **LISTA** de compras?
 * Usariamos o tipo string?
 */

let listaDeComprasErrada = "Macarrao Feijao Sorvete Pizza";

/**
 * Olha, de uma certa forma estamos armazenando
 * mas existe uma estrutura de dados criada especificamente
 * para lidar com listas, chamada `array`
 * 
 */

let listaDeCompras = ["Macarrão", "Feijão", "Sorvete", "Pizza"];

/**
 * Perceba a sintaxe, temos o bracket abrindo `[`
 * temos um item, que é do tipo string
 * e então temos uma virgula
 * e assim vai até fecharmos o bracket `]`
 * 
 * Concorda que até no papel e caneta
 * cada item escrito ocupa um **espaço** na folha? 
 * 
 * Em uma lista não é diferente, chamamos o **espaço** ocupado
 * por cada item de `index`.
 * 
 * Por exemplo, o item "Macarrão" está no `index`de número 1 (um), certo?
 * 
 * ERRADO!
 * 
 * os arrays começam a acomodar seus itens no `index` zero (0).
 * 
 * Então a afirmação correta seria, o item "Macarrão" está no index zero (0)!
 * ou então, o item "Pizza" está no index quatro (4)!
 *  
 * 
 * Ok, entendi. Mas afinal pra que serve esse tal de index?
 * 
 * Bom. Se vamos ter varios itens em uma lista, é bom uma identificação de onde
 * ele está dentro da lista certo?
 * 
 * Perceba oq acontece ao dar `console.log` na variavel `listaDeCompras`:
 */

console.log(listaDeCompras) // -> ["Macarrão", "Feijão", "Sorvete", "Pizza"];

// Temos o retorno da lista inteira

console.log(listaDeCompras[0]) // -> "Macarrão"

/**
 * Atenção para a sintaxe:
 * 
 * listaDeCompras -> referencia a variavel
 * [0] -> brackets ([]) e um numero (index), representa o acesso
 * ao item de index 0 dentro de uma lista
 * 
 * 
 * Consegue entender agora o por que de usarmos uma lista e não uma string
 * para armazenar diversas informações?
 * 
 * Programação é sobre isso, as vezes podemos até fazer algo funcionar
 * mas pode ser que não estejamos fazendo da forma correta.
 * 
 * 
 * No exemplo anterior utilizamos apenas itens do tipo string
 * para colocar dentro do array.
 * Mas o array pode ser preenchido com qualquer tipo:
 */








let inexistente = null;



let listaVazia = [];

let listaMercado = [
  "maça",
  "uva",
  "macarrão",
  "carne moída",
];

let numerosDaMega = [
  20,
  35,
  02,
  60,
];




var objeto = {};

var usuario = {
  chave: "valor",
  nome: "stags",
  idade: 21,
  peso: 50,
  vivo: true,
}; //pode ser lido como dicionário em outras linguagens



//por que de escopo? - Veremos mais pra frente
