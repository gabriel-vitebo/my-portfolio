Ter um GitHub organizado é importante para quem trabalha com desenvolvimento. Mas existe um pequeno problema: nem todo mundo que quer conhecer o seu trabalho quer abrir um repositório, entender a estrutura do projeto, procurar o README e analisar código.

Principalmente quando essa pessoa é um recrutador.

Foi daí que surgiu a ideia de criar meu portfólio.

Eu queria ter uma vitrine onde pudesse mostrar meus projetos funcionando, explicar o que fiz em cada um deles e contar um pouco sobre minha experiência como desenvolvedor.

Só que, como acontece com quase todo projeto pessoal, o famoso **"vou fazer algo simples"** não durou muito.

O que começou como uma página para mostrar alguns projetos acabou ganhando páginas individuais, galeria, blog, SEO, testes, acessibilidade, versionamento, changelog, domínio próprio e algumas outras coisas que eu definitivamente não tinha planejado no começo.

E é justamente sobre isso que eu quero falar neste primeiro post.

---

## Primeiro: o que eu queria construir?

Antes de pensar em tecnologia, eu tinha um objetivo relativamente simples:

> Quero que alguém entre no meu site e consiga entender rapidamente quem eu sou, com o que trabalho e o que já construí.

Meu GitHub continua existindo e tem seu papel. Se alguém quiser olhar implementação, commits ou simplesmente fuçar meu código, ele está lá.

Mas eu queria algo mais visual.

Em vez de:

**"Aqui está o repositório."**

Eu queria conseguir mostrar:

**"Aqui está o projeto. Esse era o problema, foi assim que eu resolvi, essas foram as tecnologias utilizadas e esse é o resultado."**

Isso acabou influenciando bastante a estrutura do site.

A página inicial ficou dividida em três partes principais: uma apresentação, meus projetos e uma seção sobre mim.

Mas cada projeto também ganhou sua própria página, com uma descrição mais completa, tecnologias utilizadas, links e uma galeria com imagens e vídeos.

A ideia era fazer o portfólio contar uma história, e não simplesmente exibir uma coleção de cards.

---

## Escolhendo a stack

Aqui eu não tentei reinventar a roda.

Escolhi trabalhar principalmente com:

* Nuxt 4;
* Vue 3;
* TypeScript;
* Tailwind CSS;
* Nuxt UI.

O Nuxt foi uma escolha bastante natural porque é a tecnologia com a qual tenho mais experiência e domínio atualmente.

E eu acredito bastante na ideia de que **nem todo projeto pessoal precisa existir para aprender uma stack completamente nova**.

Às vezes, usar uma tecnologia que você já conhece permite focar em outras coisas.

Nesse projeto, por exemplo, eu queria prestar mais atenção na arquitetura, experiência de navegação, performance, acessibilidade, SEO e manutenção.

Para os estilos utilizei Tailwind CSS, junto com alguns tokens próprios para manter cores, espaçamentos, bordas e outros padrões visuais consistentes.

Também utilizei alguns componentes do Nuxt UI.

A ideia não era fazer o Nuxt UI construir o site por mim, mas evitar gastar tempo recriando componentes básicos que já possuem boas soluções de acessibilidade e comportamento.

Se existe uma boa abstração pronta para resolver determinado problema, nem sempre existe motivo para construir tudo do zero só para dizer que fui eu quem fiz.

---

## Eu não queria um CMS

Quando comecei a pensar em como cadastraria projetos, informações pessoais e futuramente os artigos do blog, existiam várias possibilidades.

Eu poderia criar uma API.

Poderia colocar um banco de dados.

Poderia integrar algum CMS.

Poderia criar até um painel administrativo.

E todas essas opções resolveriam o problema.

Só que também criariam outro: **complexidade que eu simplesmente não precisava.**

Eu sou praticamente o único usuário administrativo desse site. Não preciso entrar em um painel todos os dias para alterar conteúdo.

Então decidi manter tudo dentro do próprio projeto.

As informações do portfólio ficam centralizadas em arquivos TypeScript: perfil, projetos, tecnologias, links e outras informações.

Os componentes cuidam de **como** essas informações aparecem.

Os arquivos de dados cuidam de **o que** aparece.

Pode parecer uma diferença pequena, mas isso tornou o projeto muito mais fácil de manter.

Se amanhã eu quiser adicionar um projeto novo, por exemplo, não preciso criar um card manualmente na home e depois construir outra página copiando a anterior.

Eu cadastro as informações do projeto seguindo uma estrutura já definida e a aplicação utiliza esses dados para montar a interface.

E como tudo é tipado com TypeScript, consigo definir campos obrigatórios e perceber erros durante o desenvolvimento.

Foi uma solução simples para um problema simples.

E acho que saber **quando não adicionar tecnologia** também faz parte de construir software.

---

## O portfólio precisava ser rápido

Como o conteúdo muda relativamente pouco, não fazia muito sentido depender de processamento no servidor toda vez que alguém acessasse uma página.

Por isso, configurei o projeto para trabalhar com páginas pre-renderizadas.

Na prática, boa parte do site pode ser gerada previamente e entregue como conteúdo estático.

Isso combina bastante com um portfólio: o conteúdo não precisa ser recalculado a cada acesso e o visitante recebe a página rapidamente.

Também utilizei o Nuxt Image para trabalhar melhor com as imagens do projeto, incluindo carregamento e tamanhos responsivos.

No final, além de deixar a experiência melhor para quem acessa, isso também ajuda em outro ponto que comecei a estudar mais durante o projeto: SEO.

---

## Descobri que fazer o site é só metade do trabalho

Uma coisa interessante desse projeto foi perceber que colocar uma página no ar não significa necessariamente que as pessoas, ou o Google, vão encontrá-la direito.

Comecei a prestar mais atenção em coisas que muitas vezes ficam para depois durante o desenvolvimento:

título das páginas, descrições, Open Graph, Twitter Cards, URLs canônicas, imagens para compartilhamento e metadados específicos para cada projeto e artigo.

Cada página de projeto, por exemplo, consegue gerar seus próprios metadados utilizando as informações daquele projeto.

Isso é importante para buscadores, mas também para algo muito mais simples: **como o link aparece quando alguém compartilha meu portfólio.**

Foi uma parte interessante porque SEO sempre parece algo meio abstrato até você precisar configurar tudo no seu próprio site.

---

## Uma coisa que eu nunca tinha feito: versionar meu próprio site

Essa talvez tenha sido uma das partes mais legais do projeto para mim.

Eu queria tratar o portfólio como um projeto que realmente evolui com o tempo.

Então implementei um fluxo de versionamento utilizando Changesets.

Agora consigo registrar alterações relevantes, atualizar a versão da aplicação e manter um changelog público.

Inclusive, a versão atual do projeto aparece no próprio site.

Pode parecer exagero para um portfólio.

E talvez seja um pouco.

Mas justamente por ser um projeto pessoal, eu achei que seria um bom lugar para aprender algo que eu ainda não tinha utilizado dessa forma.

Além disso, existe algo interessante na ideia de poder abrir o changelog daqui a alguns anos e acompanhar a evolução do projeto.

Não apenas visualmente, mas tecnicamente.

---

## Também coloquei um "mapa" dentro do próprio site

Uma coisa que eu queria evitar era aquela sensação de entrar em uma página interna e não saber exatamente onde você está.

Por isso adicionei breadcrumbs nas páginas internas.

Então, conforme a pessoa navega pelo portfólio, ela consegue entender o caminho percorrido e voltar facilmente para níveis anteriores.

É uma funcionalidade relativamente pequena, mas que ajuda bastante quando o site começa a deixar de ser apenas uma página e passa a ter projetos, artigos, changelog e outras rotas.

E esse tipo de detalhe começou a aparecer justamente porque o projeto cresceu além da ideia inicial.

---

## O blog foi o que mudou o propósito do projeto

Até aqui eu tinha um portfólio.

Mas ainda existia uma coisa que me incomodava.

Se eu simplesmente colocasse meus projetos ali, depois de terminar o site provavelmente faria uma atualização de vez em quando e pronto.

Eu queria um motivo para continuar voltando.

Foi daí que surgiu o blog.

A ideia é usar esse espaço para compartilhar experiências que tenho como desenvolvedor, coisas que estou estudando, problemas que resolvi, projetos que estou construindo e aprendizados que podem ser úteis para outras pessoas.

E sim, ainda estou no começo da minha carreira.

Mas acho que existe uma ideia estranha de que você precisa ser especialista em alguma coisa antes de poder compartilhar o que aprendeu.

Eu não concordo muito com isso.

Não quero escrever como alguém que sabe tudo.

Quero escrever como alguém que está aprendendo, aplicando e compartilhando o processo.

Talvez alguma coisa que levei horas para descobrir economize algumas horas de outra pessoa.

Já valeu.

E existe ainda um segundo motivo, um pouco mais pessoal.

Quero conseguir voltar aqui daqui a alguns anos, abrir meus primeiros artigos e pensar:

**"Caramba, eu fazia assim?"**

Porque isso significaria que eu evoluí.

---

## Como funciona o blog?

Eu também não queria criar uma infraestrutura gigantesca para publicar textos.

Então os artigos são escritos em Markdown e ficam dentro do próprio projeto.

Quando uma página de artigo é acessada, o conteúdo Markdown é transformado em HTML e renderizado dentro da interface do blog.

Isso mantém o fluxo extremamente simples.

Quero escrever um artigo?

Crio o arquivo, cadastro as informações necessárias e publico uma nova versão.

Sem banco de dados.

Sem painel administrativo.

Sem CMS.

Pelo menos por enquanto.

Se algum dia o blog crescer a ponto de essa estrutura começar a atrapalhar, aí existe um problema real para resolver.

Até lá, prefiro a solução mais simples.

---

## Saindo do código: domínio próprio

Outra parte que acabou sendo completamente nova para mim foi configurar meu próprio domínio.

Comprei o `gabrielvitebo.dev` pela Cloudflare e precisei entender melhor como funcionava toda a configuração para apontar o domínio para onde o site estava hospedado.

Até então, DNS era uma daquelas coisas que eu sabia explicar superficialmente.

Depois que você compra um domínio e precisa fazer tudo funcionar, a conversa muda um pouco.

Além do site, aproveitei o domínio para configurar um endereço de e-mail personalizado.

É uma parte que não aparece no código do portfólio, mas fez parte do projeto tanto quanto criar um componente Vue.

E foi um bom lembrete de que colocar uma aplicação no mundo envolve muito mais coisas do que simplesmente executar:

`pnpm build`

---

## O que eu mais gostei nesse projeto

Curiosamente, não foi alguma animação específica ou componente que eu construí.

Foi a quantidade de pequenas decisões que apareceram pelo caminho.

**Preciso realmente de um banco de dados?**

Não.

**Preciso de um CMS?**

Por enquanto, não.

**Vale colocar testes em um portfólio?**

Para um projeto que pretendo continuar evoluindo, achei que sim.

**Vale configurar versionamento?**

Eu nunca tinha feito dessa forma e queria aprender. Então sim.

**Preciso pensar em acessibilidade mesmo sendo um projeto pessoal?**

Com certeza.

Esse projeto acabou sendo um exercício muito maior de tomada de decisão do que simplesmente de escrever código.

E talvez essa seja a parte que mais gostei.

---

## No fim, construí mais do que um portfólio

Quando comecei esse projeto, queria basicamente um lugar melhor para mostrar meus trabalhos.

No final, ele acabou se tornando uma espécie de central da minha vida profissional.

Meus projetos estão aqui.

Minha experiência está aqui.

O que estou estudando vai aparecer aqui.

O que eu aprender provavelmente vai virar algum artigo.

E as mudanças do próprio site ficam registradas no changelog.

Acho que essa é a parte que mais me anima sobre o projeto: **ele não está terminado.**

E não porque existem cinquenta tarefas pendentes no backlog.

Mas porque ele foi feito justamente para acompanhar minha evolução.

Hoje esse é o meu portfólio.

Daqui a alguns anos, espero que ele esteja bem diferente.

E espero estar também.
