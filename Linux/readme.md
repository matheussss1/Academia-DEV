#### Antes de qualquer coisa, um disclaimer é necessário:

- É preciso ter interesse em aprender.
- Decorar não adianta, ninguém se sustenta dessa forma
- Seja curioso
- Não se compare aos outros, perceba a sua evolução
- Não é possível aprender tudo da noite pro dia

# Linux - Bem vindo ao Open Source 🐧

## O que é Linux?
<img src="./images/distros_linux.png" alt="Distribuições Linux" width="500" style="margin-bottom: 20px"/>

Linux se refere ao kernel (núcleo) de Sistema Operacional, criado por Linus Torvalds, em 1991.  
O termo Linux também é utilizado para se referenciar aos sistemas operacionais que fazem uso do kernel Linux, porém, deve-se lembrar que um **_Sistema Operacional Linux_** na verdade é uma distribuição Linux, composta de diversos outros softwares (Shell¹, Bootloader², etc) acompanhados do kernel Linux.

<sub>¹ _Shell - Em tradução literal significa casca, mas no Linux é conhecido como um interpretador de comandos, sendo o mais comum o Bash._</sub>  
<sub>² _Bootloader: Trata-se de um pequeno programa, como exemplo temos o grub2, que é um gerenciador de inicialização, responsável por carregar o sistema operacional na memória, processo conhecido como boot._ </sub>


### Kernel?

Software que controla como será usado o processador, a memória, o disco e periféricos.  
É o software presente em todo sistema operacional que determina como o computador deve funcionar.

##  Estrutura de diretórios do Linux

O Linux segue uma filosofia diferente da estrutura de arquivos, a primeira vista assusta pois em um ambiente Windows temos o diretório `C://` como pasta raiz do sistema e então as pastas do sistema são apresentadas de forma mais amigável, como `Usuários`, `Arquivos e Programas` e `Windows`.  
Então não é que o Linux é mais complexo, mas sim que o Windows esconde melhor as coisas de você 😙.

|Caminho|Descrição|
| ------------------- | ------------------- |
|`/ ` |  Diretório raiz.|
|`/bin`| Diretório onde estão os arquivos  executáveis e comandos essenciais do sistema.|
|`/boot` | Diretório onde estão os arquivos necessários para iniciar o sistema. Aqui é onde fica localizada a imagem do Kernel do Linux.|
|`/dev`| Diretório onde estão os arquivos de dispositivos do sistema, como discos, cd-roms, terminais etc.|
|`/etc`| Diretório onde estão localizados os arquivos de configuração do sistema.|
|`/home`| Diretório que geralmente é usado  pelos usuários.|
|`~`|Diretório da pasta pessoal do usuário, um alias  para `/home/<usuario>`|
|`/lib`| Diretório onde estão localizadas as bibliotecas essenciais ao sistema, utilizadas pelos programas em /bin e módulos do Kernel.|
|`/mnt`| Diretório vazio. Este diretório geralmente é utilizado para pontos de montagem de dispositivos.|
|`/proc`| Diretório que possui informações do Kernel e de processos.|
|`/opt` | Diretório onde estão localizados os aplicativos instalados que não venham com o Linux.|
|`/root`| Diretório do superusuários(root). Em algumas distribuições ele pode ou não estar presente.|
|`/sbin` | Diretório onde estão os arquivos essenciais do sistema, como aplicativos, utilitários para administração do sistema. Normalmente só o superusuário(root) tem acesso aos arquivos.|
|`/tmp`| Diretório de arquivos temporários.|
|`/usr`| Diretório de arquivos pertencentes aos usuários e a segunda maior hierarquia de diretórios no Linux.|
|`/var`| Diretório onde são guardadas informações variáveis ao sistema, como arquivos de logs etc… `|

## É tudo no terminal?

Sim e não, isso varia muito de qual distro você escolheu, mas num geral se você for um usuário que vai apenas abrir o navegador, calculadora e editores de texto, não vai ser necessário nenhum contato com o terminal, mas, qualquer coisa fora da utilização mínima do sistema já te coloca na mira do terminal.
Mas não entre em pânico, nos dias de hoje muita coisa é simplificada e 90% das coisas vão ser tipo:

>-- Hummm não sei como fazer isso no linux

E então você resolve assim:

>**faz pesquisa marota no google**  
>**acha um link do stackoverflow**   
>**copia um código de uma resposta**  
>~~busca entender aquilo que copiou antes de colar no terminal~~  
>**cola no terminal e executa** ~~com sudo~~

E então ✨ **works just like magic** ✨.

Vamos entender um pouco sobre o terminal  
Basta utilizar o atalho `CTRL + ALT + T` (No caso do Ubuntu) que o terminal iniciará:

<img src="./images/Terminal.png" alt="Imagem de um terminal linux" />

##### O que devemos ter em mente quando utilizamos o console:
- Para executar um comando no console, basta digitar o comando e pressionar a tecla `ENTER` do teclado
- Quando executamos um comando e nada é retornado, significa que ocorreu tudo bem
- Após executarmos um comando, o cursor é apresentado novamente, aguardando o próximo comando
- O Linux é case sensitive, ou seja, ele diferencia letras maiúsculas e minúsculas em comandos, nomes de arquivos e/ou pastas.
- Para sair do console execute o comando `exit`.
- É possível utilizar a seta pra cima do teclado `^` para recupearar comandos já executados

Fique frio, tudo começa pequeno e vai ganhando forma com o tempo, vamos começar com os comandos básicos do sistema:

| Comando  |  Descrição  |
| ------------------- | ------------------- |
|`man`| Manual do sistema|
|`pwd`| Printa o nome do diretório atual|
|`ls`| Lista todos os arquivos do diretório|
|`cd`| Acessa uma determinada pasta (diretório)|
|`mkdir`| Cria um diretório|
|`df`| Mostra a quantidade de espaço usada no disco rígido|
|`free`|Mostra a quantidade de espaço usada em memória RAM|
|`top`| Mostra os processos rodando|
|`rm`| Remove um arquivo/diretório|
|`cat`| Exibe arquivos|
|`vi`/`nano`/`vim`| Abre o editor de texto no terminal para editar/criar arquivos|
|`cal`| Exibe o calendário do sistema|
|`history`| Exibe o histórico de comandos executados|

[Veja mais comandos aqui](https://www.devmedia.com.br/comandos-importantes-linux/23893)


## Usuários, Grupos e Permissões

Uma das coisas que torna o Sistema Operacional Linux seguro, é a  exigência de que arquivo no sistema tenha dono e permissões de uso.  
Então acaba sendo comum você tentar acessar/modificar algo e o linux te responder:

> Você não tem permissão.

Talvez você fique meio chateado, por que afinal, você é o único usuário daquele computador, e as vezes até mesmo o dono do computador e derrepente você não tem permissão pra mexer no seus próprios arquivos? E quem é que tem então?  

No linux existem 3 tipos de usuário, o de sistema, o ROOT e o comum.

Um usuário ROOT é o usuário com permissão total de utilização do sistema. Esse usuário pode criar pastas/arquivos em qualquer diretório, além de poder editar e excluir qualquer arquivo de qualquer usuário.  
Esse usuário pode executar, também, qualquer comando disponível no sistema operacional.


Um usuário comum é o usuário que instalou o Linux na máquina e qualquer outro usuário criado posteriormente para utilizar o PC.  
 Esse tipo de usuário tem algumas restrições na utilização do sistema, ou seja, não podem executar todos os comandos e configurações disponíveis, entretanto, o usuário que instalou o sistema na máquina tem permissões de executar todos os comandos de um ROOT, bastando adicionar o comando SUDO antes do comando desejado.

Um usuário de sistema é um usuário fictício que é criado durante a instalação de algum programa para executar tarefas específicas daquele programa. Não é possível logar no sistema utilizando um usuário de sistema, ele somente existe para controle de alguns softwares adicionais que instalamos ou que vêm instalados por padrão no Linux.  

Todos os usuários conseguem listar o conteúdos dos diretórios, mas somente o usuário ROOT pode criar arquivos e/ou pastas em um diretório diferente de seu diretório pessoal. Isso quer dizer que, seu eu quiser logar no sistema com um usuário comum, somente poderei criar arquivos e/ou pastas em meu diretório pessoal, ou seja, o diretório `/home/usuário`.  
Entretanto, o Linux permite que o usuário que instalou o sistema na máquina execute comandos como ROOT, como criar pastas ou arquivos em diretórios diferentes de sua pasta pessoal.
Para executar um comando como ROOT, basta digitar o comando sudo antes do comando que queremos executar como ROOT, vamos a um exemplo:


Criando uma pasta em um diretório diferente do diretório pessoal:
<img src="./images/permissao_negada.png" alt="Imagem de um terminal, tendo permissao negada tentando criar um arquivo teste em um diretório que não é o diretório pessoal"/>

Para resolvermos isso, basta então executar o mesmo comando mas com `sudo` antes de qualquer coisa:

<img src="./images/sudo_mkdir.png" alt="Imagem de um temrinal executando o mesmo comando de antes, porém agora com sudo"/>


O console solicita a sua senha e ✨ *como mágica* ✨  é criado uma nova pasta teste.

Mas peraí...

Quer dizer que qualquer é só eu ter um usuário, digitar a senha do usuário e posso fazer tudo? Afinal, e a questão da segurança?

Esse é um ponto importante.  
O que acontece, na realidade, é que o usuário que instalou o sistema operacional na máquina tem direitos de executar comandos como administrador, pois, teoricamente ele é responsável pela máquina, concorda? Por isso, ele pode executar comandos com o `sudo`.  
Se você posteriormente pensar em criar um novo usuário no PC, vai perceber que ele não vai conseguir executar comandos com `sudo` (a não ser que você configure o novo usuário para isso 😙)

Começaremos primeiro entendendo as permissões de arquivos/diretórios

Iremos para `~/` e então executamos `ls`, que nos retornará os arquivos pastas daquele diretório, repare que após `ls` utilizamos a opção `-l`, que serivirá para mostrar informações extras.

<img src="./images/permissoes_pasta.png" alt=""/>

A primeira vista fica difícil entender né?  
Vamos dissecar esse print:  

<img src="./images/lsl_dissecado.png" alt=""/>


1 - Tipo do item listado. Os mais comuns são `l`, `d` ou `-`
-  `l` Um tipo especial chamado [*symlink*](https://medium.com/@dbacon338/what-is-the-difference-between-a-hard-link-and-a-symbolic-link-6f1e56a2317b#.vf838n1qa) 
-  `d` Um diretório
-  `-` Um arquivo normal 
-  `b` Arquivo de bloco
-  `c` Arquivo especial de caractere
-  `p` Canal
-  `s` Socket


2 - Conhecido como conjunto de 3 caracteres, na sequência, indica as permissões de `leitura`, `gravação` e `execução`, para `owner`, `group` e `demais usuários`. (*Todo arquivo/diretório possui um `group` e um `owner`*)  
A cada 3 caracteres, forma-se um conjunto de permissões:
 Os três primeiros dizem respeito ao `owner` (o dono do arquivo ou diretório)
 Na sequência vem os que dizem respeito ao `group` ao qual o usuário pertence
 E por último, mas não menos importante, os 3 ultimos dizem respeito aos demais usuários

Vamos entender o que significa esses caracteres (r, w, x, -):  
 `r` - Leitura  
 `w` - Gravação  
 `x` - Execução  
 `-` - Permissão desabilitada  

 Dito isso, podemos dizer que o diretório `Desktop` por exemplo, possui as seguintes permissões:

`owner` - Leitura, gravação e execução
`group` -  Leitura e execução
`demais usuários` - Leitura e execução

É possível alterar as permissões utilizando o comando `chmod`.   
Também é possível alterar o dono e o grupo utilizando o comando `chown`.

3 - Contagem de links

4 - `owner` do item

5 - `group` do item

6 - Tamanho do item em bytes

7 - Mês de criação/modificação do item

8 - Dia de criação/modificação do item

9 - Hora de criação/modificação do item

10 - Nome do item

## Instalando/Atualizando programas

Antes de mais nada é preciso saber que temos opções para instalar programas via interface gráfica, mas como gostamos do terminal agora, iremos fazer tudo pelo terminal

Especificamente no Ubuntu (uma das centenas de distribuições linux) temos um comando chamdo `apt`.  
A definção para `apt`é : `Advanced Package Tool`, simplificando, uma ferramenta para adicionar/remover/atualizar pacotes (programas)

Dentro de um terminal podemos executar `sudo apt update`, para atualizar tudo que tiver disponivel para atualizar no sistema, ou então `sudo apt update <nome do pacote>` para atualizar algum pacote específico.
Alem de `update` podemos utilizar `install` para instalar algum pacote, ou então `remove` para remover algum pacote e `purge` para remover tudo, incluindo arquivos de configuração do pacote.

Ok... mas de onde vem os pacotes baixados?  
Aí é que mora a mágica, precisamos entender o conceito de **_Repositórios de pacotes_**.

Um repositório nada mais é que um servidor que contém um conjunto de software. O Ubuntu fornece um conjunto de repositórios para que você não precise procurar na internet pelo arquivo de instalação de vários softwares de sua necessidade. Essa forma centralizada de fornecer software é um dos principais pontos fortes do uso do Linux.  
O gerenciador de pacotes APT obtém as informações do repositório do arquivo /etc/apt/sources.list e arquivos listados no diretório /etc/apt/sources.list.d. As informações do repositório geralmente estão no seguinte formato:  

`deb http://us.archive.ubuntu.com/ubuntu/dists/bionic main`  

Você pode inclusive [acessar o repositório para ver como ele está estruturado](http://us.archive.ubuntu.com/)

Quando você atualiza o Ubuntu usando o comando `apt update`, o gerenciador de pacotes `apt` obtém as informações sobre os pacotes disponíveis (e suas informações de versão) dos repositórios e armazena-os no cache local.  
Você pode ver isso no diretório `/var/lib/apt/lists`.

Manter essas informações localmente acelera o processo de busca, porque você não precisa percorrer a rede e pesquisar no banco de dados de pacotes disponíveis apenas para verificar se um determinado pacote está disponível ou não.

Então é comum que antes de instalar um programa específico, por exemplo o docker, você tenha que instalar o repositório aonde o docker está, veja um exemplo da própria documentação do docker:
<img src="./images/repositorio_docker.png" alt=""/>


E em um resumo muito simplista é isso, seria impossível descrever todas as funcionalidade e opcões que você vai encontrar utilizando ambientes Linux, porém, espero que tenha servido de base para retirar algumas duvidas!