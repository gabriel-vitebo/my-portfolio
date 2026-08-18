# HTML Semântico

Quando falamos de desenvolvimento web ou front-end, logo vem na cabeça aquela imagem de sites lindos, com várias animações, imagens e textos chamativos. Mas sinto dizer: essa parte de deixar o visual bonitão cabe mais ao design. O que devemos nos preocupar como devs front-end é com o que está gerando aquele site: o código.

A nossa responsabilidade não é apenas passar o design do Figma para a tela do usuário. Também precisamos garantir que o site seja performático, acessível e que sua estrutura seja fácil de entender por navegadores e mecanismos de busca. E uma das bases para fazer isso direito é o HTML semântico.

O mais interessante é que, muitas vezes, duas páginas podem ser **visualmente idênticas**, mas por baixo uma delas pode ter uma estrutura muito melhor que a outra. Para quem está olhando a tela talvez não mude nada, mas para quem usa tecnologias assistivas, para o navegador, para mecanismos de busca e até para o próximo dev que abrir aquele código, muda bastante.

Nesse artigo pretendo mostrar por que utilizar HTML semântico, por que ele é mais importante do que parece e por que devemos estudar e aplicar isso desde o começo da carreira como dev front-end.

## O que é HTML semântico?

HTML semântico é basicamente utilizar elementos HTML que dão sentido e significado ao conteúdo da página, deixando mais claro tanto para o dev que vai mexer naquele código quanto para navegadores, leitores de tela e mecanismos de busca.

Por exemplo:

```html
<div>
  <div>Lista com os melhores jogos do mundo</div>

  <div>Dota 2</div>
  <div>Clair Obscur</div>
  <div>Assassin's Creed Odyssey</div>
  <div>Life is Strange</div>
  <div>Guitar Hero</div>
</div>
```

Esse código não é semântico. Visualmente, ele pode estar bonito e idêntico ao Figma, mas o HTML praticamente não explica **o que cada coisa representa**.

Os leitores de tela conseguem ler o conteúdo, porém não fica claro para o usuário que aquilo se trata de uma lista ordenada. Pode soar apenas como um bloco de textos soltos. A navegação também fica prejudicada, porque não existem elementos estruturais, como títulos e listas, que podem ser usados como pontos de navegação.

Já os mecanismos de busca conseguem extrair e interpretar os textos da página, mas o HTML não fornece explicitamente a informação de que aquele primeiro texto é um título e que os elementos seguintes formam uma lista ordenada.

E como ficaria com HTML semântico?

```html
<h1>Lista com os melhores jogos do mundo</h1>

<ol>
  <li>Dota 2</li>
  <li>Clair Obscur</li>
  <li>Assassin's Creed Odyssey</li>
  <li>Life is Strange</li>
  <li>Guitar Hero</li>
</ol>
```

Agora sim, o próprio HTML explica a estrutura daquele conteúdo.

Os leitores de tela conseguem dar muito mais contexto para o usuário. Dependendo do leitor e das configurações, esse código teria uma leitura mais ou menos assim:

```text
"Cabeçalho nível 1, Lista com os melhores jogos do mundo."

"Lista, 5 itens."
"1, Dota 2."
"2, Clair Obscur."
"3, Assassin's Creed Odyssey."
"4, Life is Strange."
"5, Guitar Hero."
"Fim da lista."
```

Além disso, a navegação fica muito melhor, pois o usuário consegue utilizar os elementos estruturais da página para navegar, sabendo onde está e entendendo que aquele conteúdo faz parte de uma lista.

Para os mecanismos de busca, a estrutura também fica muito mais explícita. Em vez de depender apenas do texto e do contexto para entender a página, o próprio HTML já está dizendo algo como: **“opa, aqui temos um título principal e, logo depois, uma lista ordenada com 5 itens”.**

E esse é um ponto importante: HTML semântico não serve para “deixar o Google feliz”. Ele serve primeiro para estruturar corretamente o conteúdo. SEO, acessibilidade e manutenção acabam se beneficiando dessa estrutura melhor.

## Como ele ajuda?

O HTML semântico ajuda o navegador a entender melhor o papel de cada parte da página. Um `<nav>` indica uma área de navegação, um `<main>` indica o conteúdo principal, um `<article>` representa um conteúdo independente, um `<button>` representa uma ação, e por aí vai.

Pode parecer detalhe, mas não é.

Imagine, por exemplo, criar um botão assim:

```html
<div class="button">Enviar formulário</div>
```

Com CSS você consegue deixar esse `div` exatamente igual a um botão. Para quem está usando o mouse, provavelmente vai parecer que está tudo certo.

Mas agora compare com:

```html
<button type="submit">Enviar formulário</button>
```

O segundo elemento já nasce com significado e comportamento de botão. Ele pode receber foco pelo teclado, possui semântica adequada para tecnologias assistivas e deixa muito mais claro para o navegador e para quem lê o código qual é a intenção daquele elemento.

É aí que começa a diferença entre uma página que **parece funcionar** e uma página que foi realmente bem construída.

Isso também ajuda na acessibilidade. Um usuário de leitor de tela não navega pela página exatamente da mesma forma que alguém olhando para ela. Ele pode navegar entre títulos, links, botões, regiões e outros elementos. Se tudo for apenas `div`, você remove boa parte dessas referências.

Nos mecanismos de busca, a semântica também ajuda a deixar a estrutura e a relação entre os conteúdos mais claras. Isso não significa que trocar todas as `div`s por tags semânticas vai magicamente colocar seu site em primeiro lugar no Google — SEO é muito mais complexo que isso —, mas uma estrutura HTML correta ajuda os mecanismos de busca a compreenderem melhor a página.

E ainda tem uma vantagem que às vezes esquecemos: **manutenção**.

Compare abrir um projeto e encontrar isso:

```html
<div>
  <div>
    <div>...</div>
  </div>
</div>
```

com isso:

```html
<header>...</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>
```

Só de bater o olho já dá para ter uma ideia muito melhor de como aquela página está organizada.

Então, no fim, HTML semântico não é apenas sobre SEO ou leitor de tela. É sobre escrever um HTML que realmente descreve o conteúdo que está sendo exibido.

## Vamos testar na prática

Eu codei duas páginas estáticas para a gente poder brincar um pouco com isso:

https://gabriel-vitebo.github.io/html-semantico-para-artigo/src/

Uma delas foi construída utilizando HTML semântico. A outra tenta reproduzir praticamente a mesma página utilizando elementos genéricos, principalmente `div`s.

| Tela 1 | Tela 2 |
| --- | --- |
| ![Primeira tela da página de exemplo do artigo sobre HTML semântico.](/images/blog/html-semantico/tela-um.jpeg) | ![Segunda tela da página de exemplo do artigo sobre HTML semântico.](/images/blog/html-semantico/tela-dois.jpeg) |

Analise essas duas imagens. O que há de diferente nelas?

Quase nada.

Porém, uma está com o HTML semântico e a outra não. E isso prova uma coisa que acho importante: **HTML semântico não precisa interferir no visual da página.**

Você pode ter duas páginas praticamente idênticas visualmente, mas completamente diferentes em relação à estrutura.

Ou seja: **uma página bonita não significa necessariamente uma página bem construída.**

Essa diferença começa a aparecer quando a gente para de olhar apenas para o visual e começa a olhar para como o navegador interpreta aquela página.

## Vendo como o navegador entende a página

Entrando nas duas páginas, abra o DevTools do navegador e procure pela árvore de acessibilidade. No Chrome, você pode inspecionar um elemento e acessar as informações de acessibilidade disponíveis no DevTools.

![DevTools do navegador mostrando onde ativar ou visualizar a árvore de acessibilidade.](/images/blog/html-semantico/como-ativar-arvore.jpeg)

Aqui você consegue ter uma ideia de como o navegador expõe e entende a estrutura da página para recursos de acessibilidade.

Quando colocamos lado a lado o HTML semântico e o HTML bagunçado, a diferença começa a ficar bem mais clara.

| Árvore não semântica | Árvore semântica |
| --- | --- |
| ![Árvore de acessibilidade de uma página construída sem HTML semântico.](/images/blog/html-semantico/arvore-nao-semantica.jpeg) | ![Árvore de acessibilidade de uma página construída com HTML semântico.](/images/blog/html-semantico/arvore%20semantica.jpeg) |

Aqui a diferença começa a ficar bem mais clara.
Na página feita apenas com elementos genéricos, o navegador ainda consegue acessar os textos e links, mas quase toda a estrutura aparece como conteúdo genérico ou até mesmo dentro de Ignored. Ele sabe que existe texto ali, mas recebe muito menos informação sobre o papel de cada parte da página.
Já na página com HTML semântico, a árvore de acessibilidade consegue representar muito melhor a estrutura do site. Podemos identificar elementos como banner, navigation, main, region, heading, paragraph e contentinfo.
E o mais interessante é lembrar que visualmente as duas páginas são praticamente iguais.
Para quem está olhando para a tela, quase nada mudou. Mas para o navegador e para tecnologias assistivas, agora existe uma estrutura muito mais clara dizendo o que cada parte daquela página representa.

## Testando com um leitor de tela

Outra coisa interessante de testar, caso tenha interesse, é utilizar um leitor de tela.

A princípio você pode até pensar:

> “Mas ele está lendo todo o conteúdo das duas páginas.”

E, de fato, ele provavelmente vai conseguir ler os textos das duas.

Só que **ler o texto não é a mesma coisa que entender e navegar pela estrutura da página**.

Quando você começa a navegar pelo site com o leitor de tela ligado, pulando entre títulos, listas, links, botões e regiões da página, a importância do HTML semântico fica muito mais evidente.

Uma página acessível não é apenas uma página que consegue “falar” todos os textos em voz alta. Ela precisa dar contexto e permitir que o usuário navegue pelo conteúdo de forma eficiente.

É parecido com receber um texto enorme sem títulos, parágrafos ou listas. Você até consegue ler tudo, mas encontrar uma informação específica vira um trabalho muito maior.

E é justamente por isso que testar apenas olhando para a tela não é suficiente.

## HTML semântico não significa parar de usar `div`

Também não precisa declarar guerra às `div`s.

`div` não é uma tag errada. Ela continua sendo extremamente útil quando você precisa apenas de um elemento genérico para agrupar conteúdo, organizar layout ou aplicar estilos e não existe um elemento semântico mais adequado para aquele caso.

O problema é usar `div` para **tudo**.

Se aquilo é um botão, use `<button>`.

Se é uma lista, use `<ul>` ou `<ol>` com `<li>`.

Se é uma área de navegação, provavelmente faz sentido utilizar `<nav>`.

Se existe um elemento HTML que representa corretamente aquele conteúdo ou comportamento, na maioria das vezes ele deve ser a primeira opção.

## No final, ninguém vê o HTML. E esse é justamente o ponto

HTML semântico é uma daquelas coisas que podem passar despercebidas quando tudo está funcionando. O usuário abre a página, vê o layout bonito, clica nos botões e segue a vida.

Só que desenvolvimento front-end não deveria ser apenas fazer a tela ficar igual ao Figma.

Existe muita coisa acontecendo por trás daquela interface: pessoas navegando apenas pelo teclado, usuários utilizando leitores de tela, mecanismos de busca tentando entender o conteúdo, navegadores montando a árvore de acessibilidade e outros desenvolvedores que talvez precisem dar manutenção naquele código no futuro.

E o HTML é a base de tudo isso.

Por isso acho estranho tratar HTML como aquela parte “fácil” do front-end que você aprende em alguns dias e depois esquece enquanto vai estudar framework. Saber criar uma `div` é fácil. Saber escolher o elemento correto, estruturar títulos, formulários, navegação, artigos, listas e ações de forma que a página faça sentido é outra história.

No fim, talvez o melhor jeito de resumir seja este:

**se duas páginas podem ser visualmente iguais, mas uma delas é mais acessível, mais fácil de navegar, mais fácil de entender e mais simples de manter, por que escolher a pior estrutura?**

HTML semântico não vai deixar seu site mais bonito.

Mas pode deixar seu site muito melhor.
