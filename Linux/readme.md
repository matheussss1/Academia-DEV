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

O termo Linux também é utilizado para se referenciar aos sistemas operacionais que fazem uso do kernel Linux, porém, deve-se lembrar que um **_Sistema Operacional Linux_** na verdade é uma distribuição Linux, composta de diversos outros softwares (Sheel¹, Bootloader², etc) acompanhados do kernel Linux.

<sub>¹ _Shell - Em tradução literal significa casca, mas no Linux é conhecido como um interpretador de comandos, sendo o mais comum o Bash._</sub>

<sub>² _Bootloader: Trata-se de um pequeno programa, como exemplo temos o grub2, que é um geren- ciador de inicialização, responsável por carregar o sistema operacional na memória, processo co- nhecido como boot._ </sub>


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
|`/home`| Diretório que geralmente é usado  pelos usuários.
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

Sim e não, isso varia muito de qual distro você escolheu, mas num geral se você for um usuário que vai apenas abrir o navegador, calculadora e editores de texto, não vai ser necessário nenhum contato com o terminal mas qualquer coisa fora da utilização mínima do sistema já te coloca na mira do terminal.
Mas não entre em pânico, nos dias de hoje muita coisa é simplificada e 90% das coisas vão ser tipo:

<cite>- Hummm não sei como fazer isso no linux<cite/>

**faz pesquisa marota no google**

**acha um stackoverflow** 

**copia um código de uma resposta**

~~busca entender aquilo que copiou antes de colar no terminal~~

**cola e executa no terminal** ~~com sudo~~

💥 **bummm** 💥

✨ **works just like magic** ✨


Fique frio, tudo começa pequeno e vai ganhando forma com o tempo, vamos começar com os comandos básicos do sistema:

| Comando  |  Descrição  |
| ------------------- | ------------------- |
|`man`| Manual do sistema|
|`pwd`| Printa o nome do diretório atual|
|`ls`| Lista todos os arquivos do diretório|
|`cd`| Acessa uma determinada pasta (diretório)|
|`mkdir`| Cria um diretório|
|`df`| Mostra a quantidade de espaço usada no disco rígido|
|`top`| Mostra os processos rodando|
|`rm`| Remove um arquivo/diretório|
|`cat`| Exibe arquivos|
|`vi`/`nano`/`vim`| Abre o editor de texto no terminal para editar/criar arquivos|

[Veja mais comandos aqui](https://www.devmedia.com.br/comandos-importantes-linux/23893)


## Usuários, Grupos e Permissões

Devemos começar nos desapegando do sistema padrão de gerenciamento de usuários do windows, lá você sendo o administrador é um passe livre para faça tudo.
Já no linux vai ser comum você tentar acessar/modificar algo e o linux te responder:

<cite>- Você não tem permissão para mexer aqui mané</cite>

Talvez você fique meio chateado, por que afinal, você é o único usuário daquele computador, e as vezes até mesmo o dono do computador e derrepente você não tem permissão pra mexer no seus próprios arquivos? E quem é que tem então?

Uma das coisas que torna o Sistema Operacional Linux seguro, é a  exigência de que arquivo no sistema tenha dono e permissões de uso.
