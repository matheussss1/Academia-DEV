 [![General badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-f-carvalho/) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

 ## O que é Javascript?

Javascript, comumente abreviado como `JS`, é a linguagem dinamicamente tipada de programação consideradada como uma das principais tecnologias da Web, junto com HTML e CSS, nos possíbilitando adicionar interatividade com as páginas.  
Os programas escritos em Javascript são chamados de `scripts`, podem ser escritos diretamente no `HTML` da página e roda assim que a página carrega.

#### Por que é chamado *Java*script?
Quando Javascript foi criado, inicialmente se chamava `LiveScript`. Mas como o `Java` na época era bem famoso, decidiram que se chamaria **Java**script para ganhar popularidade com o nome.
_**Java e Javascript são linguagens totalmente diferentes !**_. 

## Executando Javascript
Nos dias de hoje Javascript pode executar não somente em browsers, mas também em servidores, ou qualquer dispositivo que tenha uma [**Engine Javascript**](https://acervolima.com/o-que-acontece-dentro-do-javascript-engine/).

Os browsers por padrão possuem uma engine Javascript imbutida, por exemplo:  

- [**V8**](https://v8.dev) - No Chrome, Opera e Microsoft Edge  
- [**SpiderMonkey**](https://spidermonkey.dev) - No Firefox

#### Como essas engines funcionam?

Engines são complexas, mas de um jeito simples:

1.  A engine no browser lê `(parsea)` o `script`
2.  O `script` é então transformado `(compilado)` para código de máquina
3.  O código é executado rapidamente ~~as vezes~~ 
 
## O que Javascript pode fazer?

Javascript moderno é "seguro", pois não nos permite mexer diretamente na memoria nem na CPU, já que inicialmente foi criado para browsers.  
As capacidades do Javascript dependem do ambiente em que estão rodando. Por exemplo, em um ambiente `Node.js` é possível criar arquivos no disco rígido, já em um ambiente Web não, pois o browser protege o usuário de ter arquivos sendo escritos no seu computador através de um `script` executado em uma página web.

Na web podemos fazer coisas como:
-  Adicionar/alterar HTML na página, adicionar/alterar estilização
-  Reagir a ações do usuário, clicks, teclas digitadas, e assim vai
-  Fazer requisições para outros servidores, baixar e fazer upload de arquivos
-  Manipular cookies
-  Persistir informação no localStorage

[Tudo isso através das API'S da Web](https://developer.mozilla.org/pt-BR/docs/Web/API).


## O Que torna o Javascript único?
Na minha opinião, as 3 melhores coisas do Javascript são:

- Integração completa com HTML/CSS.
- Coisas simples são feitas com simplicidade.
- Suportado por todos os Browsers e habilidade por padrão.

Javascript é a única tecnologia que combina essas 3 coisas, além de servir para criar qualquer tipo de aplicação, seja ela mobile ([React Native](https://reactnative.dev)), desktop ([Electron](https://www.electronjs.org)) ou Web.

## ECMAScript?

O JavaScript foi criado em 1995 por Brendan Eich, enquanto ele trabalhava no Netscape.  
No ano de 1996, com o objetivo de padronizar a linguagem recém criada, a Netspace decidiu juntar o JavaScript à ECMA International. A ECMA (Associação Europeia dos Fabricantes de Computadores) é uma associação que realiza a especificação ou padronização de sistemas da informação.  
Com essa junção, foi criado um novo padrão de linguagem, que foi batizado com a união das palavras `ECMA` e `JavaScript`, resultando no nome `ECMAScript`. Desde esse ano, as duas tecnologias andam juntas. Na realidade, ECMAScript é o nome oficial da tecnologia. Entretanto, o nome JavaScript “caiu nas graças da torcida”, que no caso é a comunidade de desenvolvedores, e até hoje a linguagem é mais conhecida por esse nome.  

## Versões Javascript

Por conta do Javascript fazer parte da ECMA International, toda vez que é lançada uma nova feature, essa feature existe apenas como `referencia` e cabe as engines implementarem as novas funcionalidades, por exemplo, se forem lançados novas funcionalidades à linguagem, cabe a engine implementar ela, no caso do browser `Chrome`, caberia ao `V8` implementar essa nova funcionalidade. Mas também é possível que você utilize um compilador, como por exemplo o [**(babel)**](https://babeljs.io) para que ele aceite a funcionalidade nova e transforme de um jeito que qualquer engine javascript mais antiga consiga entender, mantendo assim a compatibilidade em browsers antigos, por exemplo.

Para mais informações sobre versões de ECMAScript: [veja esse link.](https://www.educative.io/blog/javascript-versions-history)