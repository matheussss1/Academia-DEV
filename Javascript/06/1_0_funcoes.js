/**
 * Definindo funções em Javascript:
 * 
 * Funções são blocos de construção fundamentais em JavaScript.
 * Uma função é um procedimento de JavaScript — um conjunto de instruções que executa
 * uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum 
 * lugar no escopo do qual você quiser chamá-la.
 * 
 * Ou seja, é possível encapsular um trecho de código e sair usando multiplas vezes,
 * antes de vermos como utilizamos, vamos a syntaxe:
 * 
 * O jeito mais comum de definir uma função é começar com a palavra reservada `function`,
 * seguida do nome que vc quer dar para a função
 * 
 * function calcula  // assim
 * 
 * depois vem os parenteres e então chaves
 * 
 * function calcula() {
 * 
 * }  //assim
 * 
 * 
 * Dentro dos parenteses, é aonde colocamos oq chamamos de `parametros`.
 * (Entenderemos mais pra frente sobre isso)
 * 
 * E dentro das chaves é aonde executaremos nosso código;
 * 
 * function calcula() {
 *  console.log("estou calculado...")
 * }
 * 
 * Isso que acabamos de escrever é apenas a declaração de uma função, ela nao será
 * executada nesse momento, apenas criamos ela no código.
 * Para executarmos ela, é preciso "chamar a função" em outro lugar
 * 
 * calcular()   // Isso é chamar a função, agora ela será executada.
 * 
 * 
 * Nesse caso, nossa função não retorna nada, estamos apenas executando um console.log,
 * mas e se quisessemos que a função retornasse a string "estou calculado...",
 * ao invés de executar ali diretamente?
 * 
 * function calcula() {
 *    return "estou calculado...";
 * }
 * 
 * Agora quando executarmos essa função ela terá um retorno, e se tem um retorno,
 * podemos assinar esse retorno para uma variável.
 * 
 * const texto = calcular();
 * 
 * console.log(texto) // "estou calculando..."
 * 
 * Mas ok, vamos agora fazer com que essa função faça algum calculo de verdade.
 * 
 * const numero1 = 100;
 * const numero2 = 100;
 * 
 * temos essas duas variaveis, e agora eu quero que a minha função retorne a soma dos dois
 * numeros, como podemos fazer isso?.
 * 
 * function calcula() {
 *  return numero1 + numero2;
 * }
 *
 * const soma = calcula();
 * console.log(soma) // 200;
 * 
 * Perfeito, nossa função está calculando. Mas tem um detalhe,
 * dessa forma a função fica presa ao numero1 e numero2, pois está utilizando uma 
 * referencia de variavel externa. Isso é ruim pois caso quisessemos somar outras
 * varivaveis, nao poderiamos utilizar essa mesma função, teriamos que criar outras.
 * 
 * É ai que entram os parametros.
 * 
 * Os parametros servem como uma forma de transporte para essas referencias, veja o exemplo:
 * 
 * function calcula(valor1, valor2) {
 *  return valor1 + valor2;
 * };
 * 
 * Perceba que agora nossa função possui uma referencia a valores que não existem no código
 * mas podem ser passados pra dentro dela.
 * 
 * Vamos a um exemplo prático:
 * 
 * 
 * const numero1 = 200;
 * const numero2 = 300;
 * 
 * const soma = calcula(numero1, numero2); 
 * 
 * perceba que agora ao chamar a função, jogamos os valores pra dentro dos parenteses,
 * agora o `numero1` é o `valor1` dentro da função, o `numero2` é o `valor2` dentro da função.
 * 
 * Assim podemos reutilizar multiplas vezes essa função.
 * 
 * calcula(5, 10); // 15
 * calcula(50, 10); // 60
 * calcula(25, 10); // 35
 * calcula(51, 10); // 61
 *
 */