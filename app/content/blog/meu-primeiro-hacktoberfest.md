No último sábado, dia 31 de outubro, participei do **Hacktoberfest Hack Day São José dos Campos 2026**, um evento organizado pela GitHub Community SJC em parceria com o GDG São José dos Campos.

O evento aconteceu na UNIMAR e reuniu desenvolvedores, estudantes e entusiastas de tecnologia para um dia de palestras, troca de experiências, open source e, claro, muito código.

Além de acompanhar a programação, também participei de um hackathon na categoria de projetos com inteligência artificial, no qual desenvolvemos uma ferramenta para auxiliar na análise de acessibilidade de páginas web.

Foi um sábado bastante movimentado, com muita coisa acontecendo e várias experiências interessantes para compartilhar.

## Um sábado diferente

O Hacktoberfest é uma iniciativa que incentiva a participação em projetos open source, aproximando desenvolvedores da comunidade e estimulando a colaboração.

A edição de São José dos Campos trouxe essa proposta para um evento presencial, com atividades ao longo do dia.

A programação começou pela manhã, com uma palestra sobre **OSPO (Open Source Program Office)**, seguida de um workshop voltado ao universo open source.

Também tivemos um momento dedicado à apresentação das tecnologias que poderiam ser utilizadas durante o hackathon.

Uma das coisas mais interessantes de participar de eventos assim é justamente sair um pouco da rotina e ter contato com outras pessoas da área.

No dia a dia, é muito fácil ficar concentrado apenas nos próprios projetos, estudos ou demandas do trabalho. Estar em um ambiente com outras pessoas interessadas em tecnologia abre espaço para conhecer novas ideias, ferramentas e diferentes maneiras de resolver problemas.

![Participantes reunidos durante o Hacktoberfest Hack Day São José dos Campos.](/images/blog/meu-primeiro-hacktoberfest/todos-reunidos.jpeg)

## Das palestras para o código

Depois das atividades da manhã, chegou a hora de colocar a mão na massa.

O hackathon começou oficialmente às 13h, com a proposta de desenvolver e apresentar um projeto em poucas horas.

E essa é uma dinâmica bem diferente de trabalhar em um projeto tradicional.

Normalmente, temos mais tempo para pensar na arquitetura, organizar as tarefas, pesquisar soluções e implementar as funcionalidades com calma.

Em um hackathon, o tempo também faz parte do desafio.

É preciso definir rapidamente o que será desenvolvido, escolher as tecnologias, dividir as responsabilidades e, principalmente, entender o que realmente precisa estar funcionando para a apresentação.

Nem toda ideia vai caber no tempo disponível, e faz parte do processo saber priorizar.

Foi nesse contexto que começamos a desenvolver o nosso projeto.

## AccessAI: usando IA para tornar a web mais acessível

O projeto que desenvolvemos foi o **AccessAI**, uma ferramenta open source criada para auxiliar desenvolvedores a identificar possíveis problemas de acessibilidade em páginas web.

A ideia partiu de uma pergunta relativamente simples:

**E se fosse possível informar a URL de um site e receber uma análise de acessibilidade, acompanhada de explicações e sugestões de melhorias?**

A partir disso, começamos a estruturar a solução.

O funcionamento segue um fluxo:

1. O usuário informa a URL de uma página.
2. O Playwright acessa a página em um navegador automatizado e coleta informações relevantes para a análise.
3. Os dados estruturados são enviados para processamento com auxílio da API da OpenAI.
4. A ferramenta apresenta os resultados em um dashboard, com explicações e recomendações relacionadas às boas práticas de acessibilidade, incluindo as diretrizes WCAG.

Para construir o projeto, utilizamos **Nuxt, TypeScript, Playwright e OpenAI API**.

### Por que Playwright?

Uma das decisões técnicas foi utilizar o Playwright para realizar a inspeção das páginas.

Em vez de depender apenas de uma requisição HTTP e da leitura do HTML retornado pelo servidor, o Playwright permite trabalhar com a página carregada dentro de um navegador automatizado.

Isso é especialmente interessante quando estamos analisando aplicações modernas, que dependem de JavaScript para renderizar conteúdos e componentes.

Com ele, conseguimos acessar a estrutura da página após o carregamento e coletar informações que podem ser utilizadas durante a análise.

### E onde entra a inteligência artificial?

A IA entra como uma camada de interpretação dos dados coletados.

A ideia não é simplesmente apresentar uma lista de possíveis problemas, mas ajudar a explicar o que foi encontrado, por que aquilo pode representar uma barreira de acessibilidade e quais caminhos podem ser considerados para corrigir o problema.

Isso torna os resultados mais fáceis de compreender, principalmente para quem ainda não tem tanta familiaridade com as diretrizes de acessibilidade.

É importante destacar que uma ferramenta automatizada não substitui uma auditoria completa, especialmente os testes manuais e aqueles realizados com tecnologias assistivas.

O objetivo do AccessAI é facilitar a identificação inicial de problemas e ajudar desenvolvedores a entender por onde começar.

![Captura de tela do projeto AccessAI desenvolvido durante o hackathon.](/images/blog/meu-primeiro-hacktoberfest/print-do-projeto.png)

### Um projeto construído em poucas horas

Durante o hackathon, fiz dupla com o **[Bruno Prado Corrêa](https://www.linkedin.com/in/bruno-prado-correa/)** ([GitHub](https://github.com/BrunoPrado50)), e juntos desenvolvemos o AccessAI dentro do tempo disponível.

Esse foi um dos pontos mais interessantes da experiência: transformar uma ideia em algo que pudesse ser demonstrado no mesmo dia.

Foi necessário tomar decisões rápidas, dividir as responsabilidades, trabalhar com as ferramentas disponíveis e concentrar os esforços nas funcionalidades mais importantes.

Ao final, conseguimos publicar uma versão demonstrável do projeto!

Para quem quiser conhecer:

- **[AccessAI — Demonstração](https://accessai-psi.vercel.app/)**
- **[Código-fonte no GitHub](https://github.com/gabriel-vitebo/AccessAI)**

O projeto ainda tem bastante espaço para melhorias, mas foi muito legal ver uma ideia sair do papel e se transformar em uma aplicação funcional em tão pouco tempo.

## A hora de apresentar

Depois de algumas horas de desenvolvimento, chegou o momento de apresentar o que conseguimos construir.

A programação reservava o final da tarde para as apresentações dos projetos.

E essa é uma das partes mais interessantes de um hackathon: conhecer o que as outras equipes desenvolveram.

Mesmo trabalhando com tecnologias semelhantes e dentro do mesmo limite de tempo, cada equipe consegue chegar a soluções completamente diferentes.

No nosso caso, escolhemos explorar a combinação de acessibilidade web, automação de navegador e inteligência artificial.

Outros participantes seguiram caminhos diferentes, apresentando ferramentas, aplicações e soluções para outros tipos de problemas.

É muito interessante acompanhar essas apresentações porque, além de conhecer os projetos, também conseguimos observar diferentes abordagens técnicas e maneiras de transformar uma ideia em algo concreto.

## Conhecendo os projetos da comunidade

Uma das coisas que mais gostei foi justamente conhecer os projetos desenvolvidos pelos outros participantes.

É impressionante a quantidade de ideias que podem surgir em um ambiente assim, principalmente considerando o tempo limitado para desenvolvimento.

Entre os destaques estavam o **OpenDoor**, vencedor da categoria Best Open-Source AI Project, e o **Resumos locais com Ollama + Gemma**, vencedor da categoria Best Use of Gemma 4.

Foi muito legal conhecer as ideias, as abordagens e as soluções apresentadas.

Parabéns aos vencedores e a todos que participaram!

E, apesar de não termos levado um prêmio pelo AccessAI, ainda teve uma pequena vitória pessoal no evento: **ganhei uma camiseta no sorteio!** Hahaha 😄

Então, além do projeto, dos aprendizados e das novas experiências, ainda voltei para casa com uma lembrança do Hacktoberfest.

![Gabriel segurando a camiseta recebida no sorteio do evento.](/images/blog/meu-primeiro-hacktoberfest/recebendo-a-camisa.jpeg)

Para quem tiver curiosidade, também é possível conferir a [lista de projetos submetidos ao hackathon](https://www.mlh.com/events/hacktoberfest-hack-day-sao-jose-dos-campos-x-github-community-sjc/submissions).

## O que levo dessa experiência

Participar do Hacktoberfest foi uma oportunidade de sair um pouco da rotina e fazer algo diferente.

Além dos conteúdos apresentados durante a manhã, o hackathon trouxe um desafio bastante interessante: **transformar uma ideia em um projeto demonstrável dentro de um prazo limitado**.

E isso envolve muito mais do que simplesmente escrever código.

É preciso tomar decisões, organizar prioridades, trabalhar em equipe e encontrar soluções para os problemas que aparecem durante o desenvolvimento.

Também foi uma oportunidade de utilizar tecnologias com as quais já tenho familiaridade, mas em um contexto diferente, explorando a integração entre automação de navegador e inteligência artificial.

Outro ponto que vale destacar é a importância da comunidade.

Desenvolvimento de software não acontece apenas dentro de empresas, cursos ou projetos individuais. Existe muita gente compartilhando conhecimento, criando ferramentas, contribuindo com projetos open source e experimentando novas tecnologias.

Eventos como o Hacktoberfest ajudam a aproximar essas pessoas e mostram como essa troca pode ser interessante.

O AccessAI nasceu durante o evento e ainda pode evoluir bastante. O que construímos é um ponto de partida, não uma ferramenta definitiva.

Mas já é algo concreto que surgiu de algumas horas de colaboração, experimentação e muito código.

## Até o próximo!

Participar do Hacktoberfest foi uma experiência muito legal, tanto pelo conteúdo das palestras quanto pela oportunidade de desenvolver um projeto em equipe, conhecer outros desenvolvedores e acompanhar de perto o trabalho da comunidade.

Foi um sábado cheio de atividades, aprendizado e boas experiências.

Fica meu agradecimento à organização, aos palestrantes, às comunidades envolvidas e a todos que fizeram parte desse dia.

E, claro, parabéns a todos que participaram do hackathon e compartilharam seus projetos!

Espero participar de mais eventos como esse. Quem sabe no próximo não surge outra ideia interessante para tirar do papel?

**Até o próximo! 🚀**
