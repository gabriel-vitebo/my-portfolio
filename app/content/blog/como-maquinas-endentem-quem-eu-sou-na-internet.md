Recentemente, enquanto implementava dados estruturados no meu portfólio, comecei a pensar em uma pergunta que parecia simples:

> Se uma IA encontrar meu site, como ela entende quem é Gabriel Vitebo?

Para quem entra no meu portfólio, isso é bastante óbvio.

Meu nome aparece na página, existe uma foto minha, uma descrição sobre o que faço, links para GitHub e LinkedIn e artigos escritos por mim.

Uma pessoa consegue conectar tudo isso quase instantaneamente.

Mas, para uma máquina, existe uma diferença entre **encontrar essas informações** e **entender o que elas representam**.

E foi aí que os dados estruturados começaram a ficar muito mais interessantes para mim do que apenas uma configuração de SEO.

## Encontrar informação não é o mesmo que entender informação

Imagine que uma máquina processe meu portfólio e encontre:

```text
Gabriel Vitebo
Desenvolvedor Full Stack
GitHub
LinkedIn
Como eu construí meu portfólio
HTML semântico
```

Nós conseguimos olhar para isso e criar várias relações.

Sabemos que Gabriel Vitebo é uma pessoa.

"Desenvolvedor Full Stack" é sua profissão.

GitHub e LinkedIn são seus perfis.

E aqueles textos são artigos escritos por ele.

Mas boa parte disso está implícita.

É necessário interpretar o conteúdo para descobrir as relações.

Foi justamente esse problema que tentei diminuir no meu portfólio.

## Dados estruturados: explicando o conteúdo para máquinas

Dados estruturados são informações adicionadas a uma página utilizando um formato padronizado para tornar mais explícito **o que determinado conteúdo representa**.

Na web, um dos principais vocabulários utilizados para isso é o [Schema.org](https://schema.org).

Ele define tipos e propriedades que podemos utilizar para representar coisas do mundo real ou conceitos presentes em uma página.

Por exemplo:

```text
Person
Article
BlogPosting
Organization
Product
Event
```

E também as propriedades dessas entidades:

```text
Person
├── name
├── jobTitle
├── image
└── sameAs
```

Na prática, isso permite sair de algo que depende apenas da interpretação:

```text
Gabriel Vitebo
Desenvolvedor Full Stack
```

para algo cujo significado está declarado:

```text
Person
├── name → Gabriel Vitebo
└── jobTitle → Desenvolvedor Full Stack
```

Isso não significa que uma máquina seja incapaz de interpretar o primeiro exemplo.

Mecanismos de busca e sistemas modernos conseguem extrair muita informação de texto comum.

A diferença é que, com dados estruturados, parte desse significado deixa de estar apenas implícita no conteúdo e passa a ser **declarada de maneira padronizada**.

Foi justamente isso que comecei a fazer no meu portfólio.

## Transformando texto em entidades

No meu site utilizo dados estruturados através do Schema.org.

Em vez de simplesmente ter meu nome escrito na página, consigo declarar algo como:

![Template de Schema.org no código iniciando a declaração da entidade Person.](/images/blog/como-maquinas-endentem-quem-eu-sou-na-internet/chamea-org-template.jpeg)

```text
Person
├── name → Gabriel Vitebo
├── jobTitle → Desenvolvedor Full Stack
├── url → gabrielvitebo.dev
├── sameAs → GitHub
└── sameAs → LinkedIn
```

Agora existe uma diferença importante.

`Gabriel Vitebo` deixou de ser apenas uma sequência de caracteres encontrada em uma página.

Estou declarando que aquilo representa uma entidade do tipo `Person`.

E posso começar a relacionar outras informações a essa entidade.

No meu código, essa identidade possui um identificador:

```text
https://gabrielvitebo.dev/#identity
```

Esse detalhe permite que outras partes do site façam referência à mesma pessoa.

![JSON-LD inserido em uma tag script no HTML e exibido no DOM pelo DevTools do Chrome.](/images/blog/como-maquinas-endentem-quem-eu-sou-na-internet/ld-json-in-web.jpeg)

## Criando relações

É aqui que achei os dados estruturados mais interessantes.

Na minha página "Sobre mim", utilizo `ProfilePage`.

Simplificando:

```text
ProfilePage
    │
    └── mainEntity
            │
            ▼
     Gabriel Vitebo
          Person
```

Não estou apenas dizendo que existe uma página chamada "Sobre mim".

Estou dizendo que aquela página possui como entidade principal uma pessoa específica.

Nos artigos acontece algo parecido:

```text
BlogPosting
    │
    └── author
          │
          ▼
     Gabriel Vitebo
          Person
```

![Dados estruturados do blog usando Schema.org BlogPosting e relacionando o artigo ao autor.](/images/blog/como-maquinas-endentem-quem-eu-sou-na-internet/schema-org-template-blog-posting.jpeg)

Então começamos a formar uma pequena rede:

```text
                    Gabriel Vitebo
                         Person
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       sameAs           sameAs           author
          │                │                │
          ▼                ▼                ▼
       GitHub           LinkedIn       BlogPosting
```

Para mim, essa foi a mudança de perspectiva.

Eu comecei implementando dados estruturados pensando em SEO.

Mas percebi que estava, na prática, **descrevendo entidades e as relações entre elas de uma forma que máquinas conseguem interpretar**.

## Isso lembra um grafo

Se você olhar para o exemplo anterior, ele começa a ter uma estrutura interessante.

Temos coisas:

```text
Gabriel Vitebo
GitHub
LinkedIn
Artigo
```

E relações:

```text
Gabriel Vitebo → possui perfil → GitHub

Gabriel Vitebo → possui perfil → LinkedIn

Gabriel Vitebo → autor de → Artigo
```

Esse modelo de representar informações através de entidades e relações aparece bastante em computação e está por trás da ideia de **grafos de conhecimento**, ou *Knowledge Graphs*.

Um grafo pode ser imaginado como nós conectados por relações:

```text
[Gabriel Vitebo]
       │
       ├── trabalha como ──► [Desenvolvedor Full Stack]
       │
       ├── perfil ─────────► [GitHub]
       │
       ├── perfil ─────────► [LinkedIn]
       │
       └── escreveu ───────► [Artigo]
```

![Grafo usado como exemplo para representar Gabriel Vitebo, seus perfis e seus artigos como entidades conectadas.](/images/blog/como-maquinas-endentem-quem-eu-sou-na-internet/grafo.jpeg)

Isso é interessante porque máquinas não precisam lidar apenas com palavras isoladas.

Elas podem trabalhar também com **o relacionamento entre as informações**.

E isso ajuda a diminuir um problema importante: ambiguidade.

## Mas qual Gabriel Vitebo?

Um nome sozinho não é uma identidade muito confiável.

Imagine procurar por:

```text
João Silva
```

Podem existir milhares.

Mesmo que uma máquina encontre uma página dizendo:

```text
João Silva
Desenvolvedor
```

ainda existe um problema:

> Esse João Silva é o mesmo João Silva daquele GitHub?

É por isso que achei particularmente interessante utilizar um `@id` na minha implementação.

Minha entidade possui:

```text
https://gabrielvitebo.dev/#identity
```

E diferentes partes do site podem apontar para esse mesmo identificador.

Além disso, `sameAs` relaciona minha identidade a páginas externas:

```text
Gabriel Vitebo
      │
      ├── sameAs → GitHub
      └── sameAs → LinkedIn
```

Isso fornece sinais adicionais de que aquelas informações representam a mesma entidade.

Não significa que toda IA utilizará essas relações, mas torna minha identidade na web muito menos dependente apenas da interpretação de texto.

## E onde entra a IA nisso?

Essa é a parte em que precisamos tomar cuidado para não simplificar demais.

LLMs não funcionam lendo Schema.org como se existisse uma grande tabela:

```text
Gabriel Vitebo = Desenvolvedor Full Stack
```

E adicionar dados estruturados ao meu site também não envia automaticamente essas informações para ChatGPT, Gemini, Claude ou qualquer outro modelo.

Dependendo do sistema, uma IA pode responder utilizando conhecimento aprendido durante treinamento ou informações recuperadas de fontes externas, como páginas da web, mecanismos de busca, bancos de dados ou outras ferramentas.

Por isso, não posso afirmar:

> "Adicionei Schema.org e agora as IAs sabem quem eu sou."

Mas existe uma relação importante.

Quando sistemas precisam obter informações da web, primeiro existe um problema anterior à geração da resposta:

**entender o que foi encontrado.**

Se uma máquina encontra meu portfólio, quanto mais claras forem as entidades, relações, autoria e identidade presentes nele, menos essas informações dependem exclusivamente de inferência.

É nesse ponto que dados estruturados, mecanismos de busca e sistemas de IA acabam se encontrando.

Não porque Schema.org seja uma tecnologia de IA.

Mas porque todos eles precisam, de alguma forma, lidar com **significado**.

![Exemplo de resultado de busca feito por IA a partir de informações encontradas na web.](/images/blog/como-maquinas-endentem-quem-eu-sou-na-internet/ia-search-result.jpeg)

## A web está sendo lida por mais do que navegadores

Quando comecei meu portfólio, eu pensava principalmente em dois públicos.

Quem acessava o site.

E o Google.

Hoje eu adicionaria um terceiro:

**máquinas que consomem conteúdo da web.**

Isso inclui crawlers, mecanismos de busca, ferramentas automatizadas, agentes e sistemas que utilizam modelos de IA.

E isso muda um pouco a forma como comecei a enxergar algumas decisões de desenvolvimento.

Quando utilizo HTML semântico, estou dando significado à estrutura da página.

Quando utilizo dados estruturados, estou tornando explícito o significado de determinadas informações e suas relações.

Quando mantenho informações consistentes entre meu site, GitHub e LinkedIn, estou ajudando a construir uma identidade digital menos ambígua.

Nenhuma dessas coisas existe exclusivamente por causa de IA.

Mas todas contribuem para uma web mais fácil de ser interpretada por máquinas.

## Então, uma IA sabe quem eu sou?

Talvez essa nem seja a pergunta certa.

Eu não consigo controlar o que existe dentro do treinamento de um modelo, quais fontes um sistema consulta ou como determinada IA decide construir uma resposta.

O que eu consigo controlar é **como eu publico informação sobre mim na web**.

Meu nome pode ser apenas um texto.

Ou pode representar uma `Person`.

Meu LinkedIn pode ser apenas um link.

Ou pode estar relacionado àquela `Person`.

Um artigo pode ser apenas uma página.

Ou pode ser um `BlogPosting` cujo `author` aponta para aquela mesma identidade.

Foi isso que achei mais interessante durante essa implementação.

Eu comecei tentando melhorar o SEO do meu portfólio e acabei entrando em uma discussão muito maior sobre como representamos informação para máquinas.

Não fiz uma IA me conhecer.

Mas fiz algo que está sob meu controle como desenvolvedor:

**deixei mais claro para qualquer máquina que chegar ao meu site quem eu sou, quais informações estão relacionadas a mim e qual é a relação entre elas.**

![Resultado da página de perfil no Google exibindo informações enriquecidas a partir do conteúdo encontrado.](/images/blog/como-maquinas-endentem-quem-eu-sou-na-internet/google-rich-result.jpeg)