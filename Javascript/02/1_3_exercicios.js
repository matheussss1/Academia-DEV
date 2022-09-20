/**
 * 1 - Como podemos converter o tipo de uma variável?
 * 
 * De maneira explicita e implicita
 * 
 * 2 - Explique com as suas palavras a conversão de tipo implicita e explicíta
 * 
 * Explicita é quando nos programadores convertemos o tipo: Boolean("frase");
 * Implicia é quando o javascript converte para gente: "1" + 1 / "1" - 1;
 * 
 * 3 - Qual o significado de NaN? 
 *  Not a Number
 * 
 * 4 - Explique com as suas palavras todos os tipos de operadores de comparação
 * 
 *  > - Maior que
 *  < - Menor que
 *  >= - Maior ou igual
 *  <= - Menor ou igual
 *  === - Estritamente igual -> Compara valores e tipos
 *  == - igual -> Compara valores
 *  !== - Estritamente diferente -> Compara valores e tipos
 *  !=  - Diferente -> Compara valores
 * 
 * 5 - O que são falsy e truthy values?
 * 
 * Valores que o javascript interpreta como true/false
 * 
 * 6 - Por que não devemos fazer:
 *  if (condição === false)
 *  if (condição === true)         ?
 *
 *  if (valor)  -> (condição === true)  
 *  if (!valor) -> (condição === false)
 *  
 * 7 - Por que um objeto vazio quando testado para boolean retorna true?
 * Por ser um truty value. Para o javascript, arrays e objetos, apenas
 * por terem um endereço em memória, já é o suficiente para atestar como true.
 * 
 * 8 - Por que não conseguimos comparar objetos e arrays igual os 
 *      tipos primitivos?
 * 
 *  Para o javascript, arrays e objetos, apenas
 *  por terem um endereço em memória, já é o suficiente para atestar como true.
 * 
 * 9 - Qual a função da estrutura if?
 * 
 *   Condicionalmente executar algo
 * 
 * 10 - Qual a função da estrutura else?
 * 
 *  Condicionalmente executar algo, em caso do if nao ter sido aceito
 * 
 * 11 - Qual a função da estrutura else if?
 * 
 *  Condicionalmente executar algo, analisando uma nova condição, caso 
 *  o if nao tenha sido aceito
 * 
 * 12 - Dado a seguinte estrutura:
 * 
 *  const usuario = {
 *    nome: "stags",
 *    filhos: ["filhote"]
 *  }
 * 
 *  Escreva uma condição if que checa se o usuario possui filhos
 * 
 * if (usuario.filhos.length)
 * 
 * 13 - Descreva com suas palavras os operadores lógicos do javascript
 * 
 *  && - E Lógico - Retorna expressao 1 caso possa ser convertida para falso, 
 *        se nao retorna expressao 2. Dentro de um contexto boleano, retorna 
 *        true apenas se as duas expressoes puderem ser convertidas para true
 * 
 * || - OU Lógico - Retorna expressao 1 caso possa ser convertida para 
 *                  verdadeiro, se nao, retorna expressao 2.
 *                  Em um contexto booleano retorna true caso uma das 
 *                  expressoes forem verdadeiras
 * 
 * ! - Negação - Retorna true caso a expressao possa ser convertida para falso
 * 
 * 14 - Assine as variaveis utilizando ternarios:
 * 
 *    const idade = 21;
 *    const altura = 180;
 *    const peso = 80;
 *    const contaBancaria = 500;
 *    
 *    a - const ehMaiorDeIdade = idade >= 18 ? true : false;
 *    b - const ehMenorDeIdade = idade < 18 ? true : false;
 *    c - const ehAlto = altura >= 185 ? true : false;
 *    d - const pesaMaisDeCemQuilos = peso > 100 ? true : false;
 *    e - const ehMilhonario = contabancaria > 1000000 ? true : false;
 * 
 * 
 * 15 - Complete os if's
 * 
 *  a - 
 *      const usuario = null
 * 
 *      if (!usuario) {
 *        console.log("o usuario não existe")
 *      }
 *      else {
 *        console.log("o usuario existe")
 *      }
 * 
 *  b -
 *      const nomeCompleto = "Stags Carvalho"
 * 
 *      if (nomeCompleto) {
 *        console.log("o nome completo foi preenchido")
 *      }
 *      else {
 *        console.log("o nome completo não foi preenchido")
 *      }
 *  
 *  c - 
 *      const listaMercado = [];
 * 
 *      if (!listaMercado.length) {
 *        console.log("a lista esta vazia")
 *      } else {
 *        console.log("a lista está cheia")
 *      }
 *  d - 
 *      const listaMercado = ["uva", "detergente"];
 * 
 *      if (listaMercado.length) {
 *        console.log("a lista está cheia")
 *      } else {
 *        console.log("a lista esta vazia")
 *      }
 * 
 *  e - 
 *      const usuario = {
 *        nome: undefined
 *      };
 * 
 *      if (!usuario.nome) {
 *        console.log("usuario não tem nome definido")
 *      } else {
 *        console.log("usuario tem nome definido")
 *      }
 * 
 *  f - 
 *      const saldoEmCaixa = 0; 
 * 
 *      if (saldoEmCaixa > 0) {
 *        console.log("Já faturamos hoje");
 *      } else if (saldoEmCaixa < 0) {
 *        console.log("Hoje se ferramos");  
 *      }
 *       else {
 *        console.log("Ainda não faturamos");
 *      }
 *  g - 
 *      const metaDeVenda = 5000;
 *      const saldoEmCaixa = 10000; 
 * 
 *      if (saldoEmCaixa < metaDeVenda) {
 *        console.log("Ainda nao batemos a meta")
 *      } else {
 *        console.log("Batemos a meta")
 *      }
 *  g - 
 *      const metaDeVenda = 5000;
 *      const saldoEmCaixa = 10000; 
 * 
 *      if (!(metaDeVenda > saldoEmCaixa)) {
 *        console.log("Ainda nao batemos a meta")
 *      } else {
 *        console.log("Batemos a meta")
 *      }
 * 
 * 16 - Explique com suas palavras os operadores de atribuição composta
 *
 * idade += 1; 
 * o mesmo que:
 * idade = idade + 1
 *
 * idade -= 1;
 * o mesmo que:
 * idade = idade - 1;
 * 
 * idade *= 2;
 * //o mesmo que:
 * idade = idade * 2;
 *  
 * idade /= 2;
 * // o mesmo que:
 * idade = idade / 2;
 * 
 * idade **= 3; 
 * //o mesmo que:
 * idade = idade * idade * idade
 */