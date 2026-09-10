# Como dados viram recomendações de filmes com TensorFlow.js

Durante uma das atividades do primeiro módulo da minha pós-graduação em Engenharia de Software com IA Aplicada, tive contato com um tipo de problema que eu já conhecia como usuário, mas nunca tinha parado para entender como poderia ser construído: **um sistema de recomendação**.

O módulo ainda está em andamento e aborda outros assuntos, mas essa atividade em específico me chamou bastante atenção porque apresentou, de forma prática, alguns conceitos que eu ainda não conhecia bem.

Durante a aula, trabalhamos com um exemplo de recomendação de produtos. A ideia era relativamente simples de entender: selecionar um usuário e, a partir das informações disponíveis sobre ele e sobre os produtos, gerar uma lista com os itens que aquele usuário teria maior probabilidade de comprar.

O que mais me chamou atenção foi perceber que, por trás de algo que parece tão comum em plataformas como Netflix, Spotify, Amazon ou YouTube, existe todo um trabalho de preparação e representação dos dados antes mesmo de pensar no treinamento de um modelo.

Como desafio dessa atividade, recebemos um projeto com o layout já pronto e a proposta de adaptar o sistema de recomendação de produtos para outro contexto. No meu caso, escolhi criar um **sistema de recomendação de filmes**.

O resultado do projeto está disponível no GitHub:

[Movie Recommendation System](https://github.com/gabriel-vitebo/pos-graduacao-modulo-1-movie-recommendation)

A partir do `initial commit`, comecei a substituir a estrutura de e-commerce por dados de filmes, histórico de usuários e toda a lógica necessária para treinar o modelo e gerar recomendações.

![Tela da aplicação de recomendação de filmes mostrando seleção de usuário, histórico de filmes assistidos e catálogo disponível.](/images/blog/como-dados-viram-recomendacoes-de-filmes-com-tensorflow-js/example-page-2.png)

## De produtos para filmes

A primeira mudança parecia simples: onde antes existiam produtos, agora existiriam filmes.

Mas rapidamente ficou claro que mudar apenas o nome das coisas não seria suficiente.

Um produto pode ser descrito por preço, categoria, marca ou outras características. Já um filme possui informações diferentes, como:

- nota;
- ano de lançamento;
- duração;
- gêneros;
- tags.

Além disso, cada usuário precisava ter algum histórico que pudesse representar seus interesses. No projeto, utilizei os filmes já assistidos por cada pessoa como base para construir esse perfil.

O problema passou a ser algo parecido com:

> Dado o histórico de filmes assistidos por um usuário, quais outros filmes possuem maior chance de serem interessantes para ele?

Foi justamente nessa parte que comecei a entender melhor algo que até então era bastante abstrato para mim: **como transformar informações do mundo real em números que um modelo consiga utilizar**.

![Diagrama geral mostrando o fluxo dos dados de usuários e filmes até a geração de recomendações personalizadas.](/images/blog/como-dados-viram-recomendacoes-de-filmes-com-tensorflow-js/diagrama.png)

## Antes do modelo, os dados

Uma das maiores lições desse módulo foi perceber que treinar uma rede neural não começa necessariamente na criação da rede.

Antes disso, é necessário decidir como representar os dados.

Um filme, por exemplo, pode ser descrito assim:

```js
{
  title: 'Exemplo',
  rating: 8.5,
  year: 2019,
  runtimeMinutes: 130,
  genres: ['Drama', 'Thriller'],
  tags: ['dark', 'psychological']
}
```

Para nós, essa estrutura é fácil de interpretar.

Para um modelo matemático, porém, `Drama`, `Thriller` ou `psychological` não significam nada por si só. Essas informações precisam ser transformadas em uma representação numérica.

É aí que entram dois conceitos que foram especialmente interessantes para mim durante o projeto: **normalização** e **vetorização**.

## Normalização de dados

Imagine que eu queira utilizar três características de um filme:

- nota: entre 0 e 10;
- ano: entre 1970 e 2026;
- duração: entre 80 e 200 minutos.

Os valores estão em escalas completamente diferentes.

Um filme poderia ser representado inicialmente por algo parecido com:

```txt
nota = 8.7
ano = 2020
duração = 140
```

Se esses números fossem utilizados diretamente, o valor `2020` seria numericamente muito maior que `8.7`, mesmo que isso não significasse que o ano de lançamento devesse ser milhares de vezes mais importante que a nota.

Uma forma de resolver esse problema é trazer os valores para uma escala comum.

No projeto utilizei uma normalização baseada no valor mínimo e máximo. No código da atividade, essa lógica aparece assim:

```js
const normalize = (value, min, max) => (value - min) / ((max - min) || 1);
```

Com isso, os valores passam a ficar, aproximadamente, entre `0` e `1`.

Por exemplo, em vez de trabalhar diretamente com:

```txt
nota = 8.7
ano = 2020
duração = 140
```

poderíamos ter algo parecido com:

```txt
nota = 0.87
ano = 0.89
duração = 0.50
```

Os valores agora estão em escalas comparáveis.

Essa etapa me fez perceber uma coisa importante: **a qualidade de um modelo depende muito da forma como os dados são preparados antes do treinamento**.

Não basta simplesmente jogar informações dentro de uma rede neural e esperar que ela entenda tudo sozinha.

## Nem toda característica precisa ter o mesmo peso

Além da normalização, outra decisão foi dar pesos diferentes para algumas características dos filmes.

No meu projeto, utilizei algo semelhante a:

```js
const WEIGHTS = {
  rating: 0.35,
  year: 0.2,
  runtimeMinutes: 0.1,
  genres: 0.2,
  tags: 0.15
}
```

A ideia é simples: nem toda informação precisa influenciar a representação final da mesma maneira.

Nesse exemplo, a nota possui um peso maior que a duração do filme.

Isso também ajuda a entender que construir um sistema de recomendação envolve escolhas. O modelo aprende padrões a partir dos dados, mas nós ainda precisamos decidir **quais informações serão fornecidas e como elas serão representadas**.

## Como transformar gêneros e tags em números?

Nota, ano e duração já são valores numéricos.

Mas como representar algo como:

```txt
Drama
Ação
Comédia
```

Uma abordagem utilizada no projeto foi o **one-hot encoding**.

Imagine que existam apenas quatro gêneros possíveis:

```txt
Ação
Comédia
Drama
Terror
```

Podemos criar uma posição para cada gênero.

Um filme que seja `Ação` e `Drama` poderia ser representado assim:

```txt
[1, 0, 1, 0]
```

Enquanto um filme de `Comédia` poderia ser:

```txt
[0, 1, 0, 0]
```

No projeto, essa mesma ideia é utilizada tanto para gêneros quanto para tags.

Depois disso, essas informações podem ser combinadas com os demais atributos numéricos do filme.

## Afinal, o que são esses vetores?

Essa foi provavelmente a parte que mais mudou minha forma de enxergar esse tipo de sistema.

Depois da normalização e da transformação de gêneros e tags, cada filme deixa de ser apenas um objeto JavaScript e passa a poder ser representado como uma sequência de números.

Algo conceitualmente parecido com:

```txt
[
  0.30,
  0.17,
  0.05,
  0,
  1,
  0,
  1,
  0,
  0.15,
  ...
]
```

Esse conjunto de números é um **vetor de características**.

No projeto, essa representação é construída com tensores utilizando TensorFlow.js.

A função que codifica um filme combina:

```txt
nota normalizada
+
ano normalizado
+
duração normalizada
+
gêneros
+
tags
```

O resultado é uma representação matemática daquele filme.

No código da atividade, isso acontece concatenando os tensores de cada parte:

```js
return tf.concat([rating, year, runtime, genres, tags]);
```

## E como representar o usuário?

Depois de representar os filmes como vetores, ainda existe outra pergunta:

> Como representar o gosto de uma pessoa?

No projeto, utilizei o histórico de filmes assistidos por cada usuário.

Cada filme assistido já possui seu próprio vetor. Então podemos juntar esses vetores e calcular uma média. Nesta versão da atividade, a nota que aparece no histórico do usuário é armazenada e exibida na interface, mas o vetor do usuário é calculado pela média dos vetores dos filmes assistidos, sem ponderar essa média pela nota dada pelo usuário.

De maneira simplificada:

```txt
Filme A = [0.8, 0.2, 0.7, ...]
Filme B = [0.6, 0.4, 0.9, ...]
Filme C = [0.9, 0.1, 0.6, ...]
```

A média desses vetores gera uma representação aproximada do perfil daquele usuário.

Ou seja, em vez de dizer diretamente:

```txt
Gabriel gosta de suspense e filmes bem avaliados
```

o sistema passa a representar esse comportamento numericamente.

Essa ideia foi uma das partes mais interessantes para mim, porque mostra como características aparentemente subjetivas podem ser transformadas em estruturas matemáticas que um modelo consegue processar.


## E onde esses dados ficam?

Neste projeto, como o objetivo era estudar e colocar os conceitos em prática, os dados estão em arquivos locais. Tenho um arquivo com os filmes e outro com os usuários e seus históricos.

Isso funciona bem para um projeto pequeno e didático, mas não é a mesma estratégia que eu utilizaria pensando em uma aplicação real, com milhares ou milhões de registros.

Em um cenário de produção, uma possibilidade é utilizar um **banco de dados vetorial** para armazenar e consultar representações vetoriais. A principal vantagem é conseguir fazer buscas por similaridade sem precisar carregar todo o conjunto de dados na aplicação de uma vez.

Em vez de buscar todos os filmes disponíveis para só então comparar e ordenar tudo, poderíamos recuperar primeiro um conjunto limitado de candidatos, por exemplo, os **200 filmes mais próximos** do perfil ou da consulta e trabalhar a recomendação em cima desse recorte.

De forma simplificada:

```txt
Perfil do usuário
    ↓
Representação vetorial
    ↓
Busca por similaridade
    ↓
200 candidatos mais próximos
    ↓
Modelo / ranking
    ↓
Recomendações finais
```

Essa diferença também ajuda a separar duas preocupações: uma coisa é entender como representar filmes e usuários matematicamente; outra é pensar em **como essa solução escala quando a quantidade de dados cresce**.

O projeto da atividade não precisa resolver esse problema de infraestrutura, mas entender essa possibilidade ajuda a enxergar como o mesmo conceito poderia evoluir para uma aplicação maior.


## Criando os dados de treinamento

Com usuários e filmes representados numericamente, o próximo passo é montar os exemplos que serão utilizados durante o treinamento.

Para cada usuário, o sistema combina:

```txt
vetor do usuário + vetor do filme
```

Depois atribui um rótulo:

```txt
1 = o usuário assistiu ao filme
0 = o usuário não assistiu ao filme
```

Isso transforma o problema em uma classificação binária.

O modelo recebe uma combinação entre usuário e filme e tenta aprender a responder algo próximo de:

> Qual a probabilidade de esse filme fazer sentido para esse perfil de usuário?

## A rede neural

Depois de toda a preparação dos dados, finalmente entra a rede neural.

No projeto utilizei uma rede sequencial com TensorFlow.js, formada por algumas camadas densas:

```txt
128 neurônios
64 neurônios
32 neurônios
1 saída
```

As camadas intermediárias utilizam `ReLU`, enquanto a camada final utiliza `sigmoid`.

A escolha da sigmoid faz sentido porque o resultado final precisa ficar entre `0` e `1`.

O modelo é treinado por `100` épocas, usando `binaryCrossentropy` como função de perda e acompanhando `accuracy` como métrica. Esses valores também aparecem nos logs exibidos pela interface durante o treinamento.

Podemos interpretar esse valor como um score de recomendação.

Por exemplo:

```txt
Filme A -> 0.91
Filme B -> 0.74
Filme C -> 0.31
```

Depois das previsões, basta ordenar os filmes pelo score para apresentar primeiro aqueles que o modelo considera mais compatíveis com o usuário.

![Tela da aplicação com os gráficos de precisão e erro do treinamento do modelo no TensorFlow.js.](/images/blog/como-dados-viram-recomendacoes-de-filmes-com-tensorflow-js/example-page-1.png)

## Uma coisa que achei especialmente interessante

Antes dessa aula, quando eu pensava em inteligência artificial, minha cabeça normalmente ia direto para modelos generativos, LLMs, ChatGPT, geração de imagens e coisas parecidas.

Esse projeto serviu como um lembrete de que Machine Learning é um campo muito maior.

Um sistema de recomendação não precisa gerar texto ou conversar com ninguém. Ele pode simplesmente aprender relações entre dados e utilizar essas relações para tomar decisões ou fazer previsões.

Além disso, o projeto ajudou a tornar conceitos matemáticos muito menos abstratos.

Termos como:

- normalização;
- vetores;
- tensores;
- one-hot encoding;
- features;
- labels;
- função de perda;
- épocas de treinamento;

começaram a fazer muito mais sentido quando precisei utilizar cada um deles para resolver um problema concreto.

## O que eu mais aprendi com essa atividade

Se eu tivesse que resumir o principal aprendizado desse projeto, não seria apenas "como criar uma rede neural".

Seria entender melhor o caminho que existe entre **um dado do mundo real e um dado que um modelo consegue processar**.

No caso dos filmes, começamos com informações fáceis para qualquer pessoa entender:

```txt
nome
nota
ano
duração
gênero
tags
```

Depois transformamos isso em números, normalizamos os valores, criamos vetores e usamos esses vetores para construir exemplos de treinamento.

Só depois disso a rede neural entra em cena.

Hoje consigo enxergar o fluxo mais ou menos assim:

```txt
Dados brutos
    ↓
Preparação dos dados
    ↓
Normalização
    ↓
Vetorização
    ↓
Criação dos exemplos de treinamento
    ↓
Treinamento do modelo
    ↓
Predição
    ↓
Ranking das recomendações
```

E talvez esse seja o ponto que mais valeu a pena aprender: **o modelo é apenas uma parte do sistema**.

Boa parte do trabalho está em entender o problema, escolher quais informações fazem sentido e encontrar uma maneira de representá-las para que o modelo consiga aprender alguma coisa a partir delas.

## Conclusão

Essa foi uma das atividades do primeiro módulo da minha pós-graduação em Engenharia de Software com IA Aplicada. O módulo ainda não terminou, mas essa atividade acabou sendo um ótimo contato prático com Machine Learning e trouxe conceitos que achei interessantes o suficiente para registrar por aqui.

Mais do que simplesmente utilizar TensorFlow.js, o projeto me ajudou a entender conceitos que eu já tinha visto mencionados várias vezes, mas que ainda pareciam abstratos.

Normalização, vetores e tensores deixaram de ser apenas termos técnicos e passaram a representar etapas concretas de um sistema que eu consegui construir e testar.

Ainda existe muita coisa para aprender sobre recomendação, Machine Learning e redes neurais, mas justamente por isso achei válido registrar essa experiência.

Às vezes, a melhor maneira de perceber que realmente aprendemos alguma coisa é tentar explicar aquilo com nossas próprias palavras.

E esse projeto foi exatamente isso: o primeiro passo para entender melhor como dados podem ser transformados em padrões e como esses padrões podem ser utilizados para criar aplicações inteligentes.

---

O código completo do projeto está disponível no GitHub:

[github.com/gabriel-vitebo/pos-graduacao-modulo-1-movie-recommendation](https://github.com/gabriel-vitebo/pos-graduacao-modulo-1-movie-recommendation)
