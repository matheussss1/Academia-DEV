/**
 * Exercícios sobre variaveis
 * 
 * 1 - Como fazer comentário de uma linha e multiplas linhas.
 */

// uma linha

/**
 * multiplas linhas
 */


/*
 * 
 * 2 - Explique com suas palavras a diferença entre variaveis inicializadas e não inicializadas.
 * 
 * Inicializada: variavel que foi declarada e tem valor (mesmo que null)
 * Não inicializada: variavel declarada mas sem valor
 * 
 * 3 - Liste quais tipos de declaração de variavel podem ser redeclaradas.
 * 
 *   var
 * 
 * 4 - Liste quais tipos de declaração de variavel podem ser reescritas -> sobrescrever.
 * 
 *  var, let
 * 
 * 5 - Liste quais tipos de declaração de variavel podem iniciar sem valor.
 * 
 *  var, let
 * 
 * 6 - Como podemos ver o tipo de uma variavel?
 * 
 *  typeof variavel
 * 
 * 7 - Como podemos representar numeros quebrados?
 * 
 *  com .
 * 
 * 8 - Cite todos os tipos primitivos vistos até agora.
 * 
 *  string, number, boolean, null, undefined
 * 
 * 9 - Com suas palavras explique todos os tipos primitivos vistos até agora.
 * 
 *  string -> texto
 *  number -> numeros
 *  boolean -> 0 / 1, liga/desliga, ligado/desligado, sim/nao, verdadeiro/falso
 *  null -> 0
 *  undefined -> valor nao atribuido
 * 
 * 10 - Qual a diferença entre null e undefined?
 * 
 *  De acordo com a documentação do ECMAScript, o valor undefined 
 *  é utilizado quando uma variável não possui um valor.
 *  Já o null é utilizado quando se quer intencionalmente dizer que há uma
 *  ausência de qualquer valor para aquela variável.
 * 
 * 11 - Dado uma variavel, tendo seu conteudo como texto, qual o seu tipo?
 * 
 *  string
 * 
 * 12 - Dado uma variavel, tendo seu conteudo como numero quebrado, qual o tipo?
 * 
 *  number
 * 
 * 13 - Dado uma variavel, tendo seu conteudo como numero inteiro, qual o tipo?
 * 
 *  number
 * 
 * 14 - Com qual estrutura de dados podemos representar uma lista?
 * 
 *  com arrays -> []
 * 
 * 15 - Como podemos acessar os dados dentro de uma lista?
 * 
 *  através de indexes, com colchetes [index] -> lista[0]
 * 
 * 16 - Complete a frase: "Cada item em uma lista ocupa um ........."
 *  
 *  index
 * 
 * 17 - Com qual estrutura de dados podemos representar uma pessoa?
 * 
 *  {nome: "stags", idade: 21};
 * 
 * 18 - Com qual estrutura podemos representar uma lista de pessoas?
 * 
 *  const listaPessoas = [
 *    {nome: "stags", idade: 21},
 *    {nome: "claudia", idade: 21},
 *    {nome: "victor", idade: 21},
 *    {nome: "maicon", idade: 21},
 *    {nome: "guilherme", idade: 21}
 *  ];
 * 
 * 19 - Com as suas palavras, diferencie `propriedade` de `valor`.
 * 
 *  uma propriedade é uma associação entre um nome (ou chave) e um valor.
 *  valor é um valor, no caso do js pode ser string, number, undefined, null, objeto, array, ...
 * 
 * 20 - Como podemos acessar um valor em um objeto?
 * 
 *  por .  ou colchetes  
 * 
 *  objeto["propriedade"] -> estática
 * 
 *  let variavelDinamica = inputUsuario
 *  objeto[variavelDinamica] -> dinamica
 * 
 *  objeto.propriedade -> estática
 * 
 *
 * 21 - Em suas palavras, explique a diferença entre listas e objetos
 * 
 *  Listas armazenam valores indexaveis, porem sem muita descrição do seu conteudo
 *  Objetos por sua vez, utilizam o sistema de (chave/propriedade)/valor, assim podemos ter uma 
 *  descrição maior do que aquele dado representa
 * 
 * 22 - Como podemos adicionar um item ao final de um array?
 *  
 *  const list = [];
 *  list.push(item)
 * 
 * 23 - Como setamos novas propriedades para objetos?
 * 
 *  const target = { a: 1, b: 2 };
 *  const source = { b: 4, c: 5 };
 *
 *  Object.assign(target, source);
 * 
 * 
 *  const obj = {};
 * 
 *  obj["novaChaveEstatica"] = "valor"
 * 
 *  let novaChaveDinamica = inputDoUsuario;
 *  obj[novaChaveDinamica] = 20;
 * 
 *  obj.novaPropriedadeEstatica = [2, 3, 4];
 *  
 * 
 * 24 - Como podemos executar um trecho específico de código baseado em uma condição?
 * 
 *  utilizando if's
 * 
 * 25 - Como removemos elementos de um array?
 * 
 *  array.pop() //remove o ultimo
 *  array.shift() //remove o primeiro
 *  array.splice(start, deleteCount) // remove um range
 *  const novoArray = array.slice(start, end) // retorna um range 
 *  delete array[0]; // apenas limpa o valor do index
 * 
 * 
 * 26 - Explique o operador spreed
 * 
 *  retorna itens do embrulho
 * 
 * 27 - "1" + 1 retornará?
 * 
 *  "11"
 * 
 * 28 - Qual a diferença do ternário para o if?
 * 
 *  o ternario é uma espécie de if/else if/elseif/else inline que retorna algo;
 * 
 * 29 - Por que não conseguimos acessar uma let/const criada em um if?
 * 
 *  pois é criado um escopo de bloco dentro do if
 * 
 * 30 - Por que ao somar 1 + "1" temos 11 e ao fazer 1 - "1" temos 0?
 * 
 *  o javascript entende que com + vc quer concatenar
 *  mas com menos obviamente ele entende que vc quer subtrair algo
 *  então ele trabalha as conversões de tipos automatica
 * 
 * 31 - Como podemos assinar variaveis através de descontrução? descreva todas as formas possíveis
 *  
 *  arrays:
 * 
 *  const lista = [1, 2, 3, 4, 5, 6];
 * 
 *  const [um, dois, tres, quatro] = lista;
 *  const [um, ...restoNumeros] = lista;
 * 
 *  const obj = {nome: "stags", idade: 21, sobrenome: "carvalho", filhos: null, vivo: true};
 * 
 *  const {sobrenome, filhos, vivo, ...restoObj} = obj;
 * 
 * 
 * 32 - Como podemos renomear variaveis desconstruidas?\
 * 
 *  no caso do array a gente ja dá um nome que quisermos,
 *  ja que ela vem desconstruida na ordem dos indexes.
 * 
 *  no caso de objetos que precisamos passar o nome exato 
 *  para desconstruir seria:
 * 
 *  const {sobrenome : outroNomeParaSobreNome} = obj;
 *  // sobrenome fica indisponivel de acessar
 *  // outroNomeParaSobreNome fica disponivel para acesso
 */