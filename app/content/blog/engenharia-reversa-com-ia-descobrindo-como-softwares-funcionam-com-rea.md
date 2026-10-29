Já usou algum programa e ficou pensando: "como será que fizeram isso?" Pode ser uma mecânica de jogo, uma animação ou até aquele botão que faz alguma coisa bem específica. A gente vê tudo funcionando, mas não faz ideia do que acontece por trás.

É aí que entra a engenharia reversa. A ideia é investigar um software a partir do que temos acesso: o executável, os arquivos, as requisições ou simplesmente o comportamento dele. E com o **REA (Reverse Engineer Anything)**, dá para usar agentes de IA para ajudar nessa investigação.

## O que é engenharia reversa?

Quando a gente desenvolve alguma coisa, normalmente começa com uma ideia, escreve o código e chega no programa funcionando. Na engenharia reversa, o caminho é o contrário: o programa já existe e a gente quer entender como ele funciona.

É como abrir um relógio para entender como as engrenagens se movimentam. Você já sabe o resultado, agora quer descobrir o que faz aquilo acontecer.

No software, isso pode envolver olhar arquivos, instruções de máquina, JavaScript, requisições e testar hipóteses. E não precisa investigar o programa inteiro. Às vezes, a gente só quer entender uma funcionalidade específica.

![Comparação entre desenvolvimento tradicional e engenharia reversa.](/images/blog/engenharia-reversa-com-ia-descobrindo-como-softwares-funcionam-com-rea/traditional-development-vs-reverse-engineering.png)

## O que é REA?

**REA** significa *Reverse Engineer Anything*. É um conjunto de ferramentas que ajuda agentes de IA a investigar programas, jogos e sites, usando evidências do próprio software.

Em vez de mandar um print para a IA e pedir "faz igual", a ideia é deixar o agente investigar. Dependendo do programa e das ferramentas disponíveis, ele consegue examinar funções, seguir chamadas e analisar o que acontece por trás da interface.

E isso faz diferença. Uma IA pode dar uma explicação que parece fazer sentido e mesmo assim estar errada. Com o REA, a ideia é encontrar evidências para sustentar o que ela está dizendo, em vez de só confiar na resposta.

Só vale deixar claro: o REA não pega qualquer `.exe` e devolve o código-fonte original como mágica. Ainda existe análise, interpretação e bastante coisa para validar.

## Como funciona na prática?

Tudo começa com uma pergunta. Por exemplo: *por que o dinossauro do Chrome fica mais rápido conforme a gente joga?*

1. **Escolher o que investigar.** Pode ser um programa inteiro ou só um comportamento específico.
2. **Procurar pistas.** O agente usa o REA para analisar scripts, funções, instruções ou outros dados disponíveis.
3. **Entender a lógica.** Com essas pistas, ele tenta descobrir quais regras fazem aquilo funcionar.
4. **Testar.** A gente compara a explicação com o comportamento real do programa.
5. **Documentar ou implementar.** Se fizer sentido, usamos o que descobrimos para explicar a funcionalidade ou criar nossa própria versão.

Em um exemplo publicado pelo REA, a velocidade inicial do dinossauro é `6`, a aceleração é de `0,001` por atualização e o limite é `13`. Esses valores foram encontrados no script e testados. Ou seja, não é só perceber que o jogo acelera: é descobrir **a regra que faz isso acontecer**.

![Etapas de investigação de software usando REA e um agente de programação.](/images/blog/engenharia-reversa-com-ia-descobrindo-como-softwares-funcionam-com-rea/fluxo-de-engenharia-reversa-com-ia.png)

## O que dá para fazer com REA?

Não fica limitado a um tipo de programa. Em executáveis, por exemplo, dá para investigar funções, textos internos e chamadas. Em aplicativos Electron, dá para seguir o caminho de uma ação entre a interface e os processos do app. No navegador, podemos analisar scripts e determinadas requisições.

Na prática, dá para investigar desde a regra de um botão até uma mecânica de jogo, entender como um arquivo é exportado ou documentar funcionalidades de um programa. A documentação também mostra como registrar interações em aplicações web para criar ambientes de treinamento e avaliação de agentes de IA.

Mas isso não quer dizer que dá para reproduzir tudo perfeitamente. Proteções, serviços externos e a complexidade do programa podem limitar bastante a investigação.

![Diferentes tipos de software que podem ser investigados com REA.](/images/blog/engenharia-reversa-com-ia-descobrindo-como-softwares-funcionam-com-rea/neon-investigação-em-quatro-contextos.png)

## O que já estão fazendo com a ferramenta?

A parte mais legal é que já existem exemplos publicados pela própria equipe do REA. Separei alguns que mostram bem o que dá para investigar:

### O botão de porcentagem da Calculadora do Windows

Por que `200 + 10%` resulta em `220`, enquanto `200 × 10%` resulta em `20`? A investigação recupera as regras aplicadas ao botão de porcentagem dependendo da operação e apresenta evidências das instruções analisadas. [Veja a demonstração na página oficial](https://rea.tools/pt-BR/).

### O código temporário de um autenticador

Um estudo acompanha a geração de códigos de seis dígitos no aplicativo Aegis, a partir de seu APK, e demonstra por que o código muda conforme o tempo. O caso ajuda a visualizar uma investigação de aplicativo Android sem depender apenas da aparência da interface.

### Como o Notion copia conteúdo formatado

Outro caso segue o comportamento de cópia de texto e HTML em um aplicativo Electron, passando por componentes JavaScript e comunicação entre processos até a área de transferência.

### Regras de jogos antigos

No jogo DX-Ball, a análise recupera um cálculo que determina a posição esquerda/direita do som. A reconstrução é comparada ao comportamento e aos bytes compilados do programa original. Também há estudos sobre jogos Touhou e um desafio CTF.

Esses são exemplos da equipe do REA, não testes que eu fiz. Dá para conferir as evidências e os resultados na [galeria oficial de estudos de caso](https://rea.tools/pt-BR/showcase/).

![Exemplos de engenharia reversa documentados pelo projeto REA.](/images/blog/engenharia-reversa-com-ia-descobrindo-como-softwares-funcionam-com-rea/reverse-engineering_calculadora-notion-e-dx-ball.png)

## Engenharia reversa é ética e legal?

Essa é uma dúvida que faz sentido: **se eu consigo investigar um programa, quer dizer que posso fazer qualquer coisa com o que encontrar?** Não. Engenharia reversa é uma técnica. O que muda é o contexto, a forma como você usa e o que pretende fazer com os resultados.

Ela pode ser útil para estudar, pesquisar, criar integrações, preservar softwares antigos e fazer análises de segurança autorizadas. Só que conseguir analisar algo não significa ter permissão para copiar código protegido, redistribuir arquivos ou burlar sistemas de terceiros.

Também tem uma diferença importante entre **entender como algo funciona** e **copiar o que outra pessoa fez**. Criar seu próprio código para uma funcionalidade não é a mesma coisa que pegar arquivos, imagens, marcas ou código de outro projeto.

Licenças, contratos e direitos autorais também entram nessa conversa. No Brasil, temos a Lei do Software (Lei nº 9.609/1998) e a Lei de Direitos Autorais (Lei nº 9.610/1998), mas cada situação precisa ser avaliada. Principalmente se a ideia for publicar ou vender alguma coisa.

Minha regra seria simples: investigar o que tenho direito de acessar, não mexer com dados de terceiros e conferir as permissões antes de compartilhar qualquer resultado.

## Vale a pena conhecer?

O que eu acho mais interessante no REA não é só a possibilidade de recriar alguma funcionalidade. É poder olhar para um programa, pensar "como fizeram isso?" e ter ferramentas para investigar de verdade.

Para quem é dev, isso abre bastante espaço para aprender. A IA ajuda a explorar coisas que talvez a gente nem soubesse por onde começar, mas ainda precisa conferir as descobertas. Não dá para aceitar tudo sem testar.

E talvez o melhor jeito de começar seja com uma pergunta pequena: **qual funcionalidade eu sempre tive curiosidade de entender?**

Se bateu a curiosidade, dá uma olhada nos [guias oficiais do REA](https://rea.tools/pt-BR/guides/) e tenta investigar alguma coisa simples primeiro.

---

## Referências

- [REA — Site oficial](https://rea.tools/pt-BR/)
- [REA — Estudos de caso](https://rea.tools/pt-BR/showcase/)
- [REA — Blog e reflexões sobre engenharia reversa](https://rea.tools/pt-BR/blog/)
- [REA — Guias de utilização](https://rea.tools/pt-BR/guides/)
- [Lei nº 9.609/1998 — Software (Planalto)](https://www.planalto.gov.br/ccivil_03/leis/l9609.htm)
- [Lei nº 9.610/1998 — Direitos Autorais (Planalto)](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm)
