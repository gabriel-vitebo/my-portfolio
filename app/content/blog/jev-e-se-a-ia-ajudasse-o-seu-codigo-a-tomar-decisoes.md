# Jev: e se a IA ajudasse o seu código a tomar decisões?

Recentemente, a TypeSafe AI lançou o **Jev**, um modelo de IA que me chamou a atenção por um motivo: ele não foi feito para conversar com você, escrever textos ou gerar código. A ideia é ajudar um sistema a **tomar decisões**.

Pensa em quantas vezes, dentro de uma aplicação, a gente precisa decidir alguma coisa: para qual equipe enviar um chamado? Esse caso é urgente? O agente terminou a tarefa ou precisa tentar de novo? Nem sempre precisamos de um texto enorme como resposta. Às vezes, precisamos apenas de um resultado que o código consiga usar.

## Tá, mas o que o Jev faz exatamente?

Você envia um contexto para o Jev, a documentação chama isso de *estado*, e faz perguntas bem definidas sobre ele. O modelo pode escolher uma opção entre as que você forneceu, atribuir uma pontuação seguindo critérios ou indicar a probabilidade de uma afirmação ser verdadeira.

Por exemplo, imagine que alguém abriu um chamado dizendo: “Fui cobrado duas vezes e não consigo acessar minha conta”. A aplicação poderia perguntar qual é o assunto principal e se o caso parece urgente. O Jev devolveria respostas estruturadas, com informações sobre a incerteza dessas decisões.

A parte importante vem depois: **é o seu código que decide o que fazer com a resposta**. Ele pode encaminhar o chamado, pedir mais informações ou deixar o caso para uma pessoa analisar. O Jev ajuda a avaliar a situação; ele não precisa ter liberdade para sair executando ações no sistema.

![Exemplo ilustrativo de uma mensagem sobre cobrança transformada pelo Jev em uma decisão estruturada sobre assunto e urgência.](/images/blog/jev-e-se-a-ia-ajudasse-o-seu-codigo-a-tomar-decisoes/de-mensagem-a-decisao-estruturada.png)

## E como isso entraria no fluxo de um dev?

Se você já deixou um agente trabalhando em uma task, talvez tenha passado por isso: ele entrega algo que parece pronto, mas esqueceu uma parte do pedido. Ou mexeu em arquivos que nem precisava.

Dá para imaginar um fluxo em que, antes de considerar o trabalho concluído, a aplicação apresente ao Jev os critérios da tarefa e um resumo das alterações. Em vez de perguntar algo amplo como “o agente fez tudo certo?”, ela faria perguntas menores: **“Esta alteração atende a este requisito?”** ou **“Há sinais de mudança fora do escopo?”**

Dependendo das respostas, o sistema poderia pedir outra tentativa ao agente ou chamar um humano para revisar. Isso não significa que o Jev substitui testes ou revisão de código. Também não significa colocar o Jev no lugar da IA que programa. Ele entraria em um momento específico do fluxo para ajudar a decidir o próximo passo.

![Fluxo ilustrativo de revisão de uma tarefa com o Jev para avaliar requisitos e decidir o próximo passo.](/images/blog/jev-e-se-a-ia-ajudasse-o-seu-codigo-a-tomar-decisoes/revisao-de-uma-tarefa-com-jev.png)

## E em um produto de verdade?

Um exemplo seria o suporte de uma empresa que recebe muitos chamados por dia. Hoje alguém precisa ler as mensagens, entender o assunto e decidir o que é mais urgente. O Jev poderia ajudar a organizar essa fila: chamados mais claros iriam para a equipe adequada, enquanto os casos incertos ficariam para revisão humana.

Agora vamos pensar em reembolso, que já é mais delicado. O Jev poderia ajudar a identificar se a pessoa está pedindo um reembolso. Mas **identificar o pedido não é a mesma coisa que autorizar a devolução do dinheiro**.

Para autorizar, a aplicação ainda teria que consultar o pagamento e verificar as regras da empresa. Se a regra diz que o pedido precisa estar dentro de um prazo, por exemplo, quem deve conferir a data é o código. Se faltar informação ou surgir uma exceção, uma pessoa analisa. Quando envolve dinheiro, não dá para simplesmente aceitar a resposta de um modelo e seguir em frente.

![Exemplo ilustrativo de triagem de chamados com o Jev, encaminhando casos para equipes ou revisão humana.](/images/blog/jev-e-se-a-ia-ajudasse-o-seu-codigo-a-tomar-decisoes/triagem-de-chamados.png)

## Então vale colocar Jev em tudo?

Eu não faria isso. Se consigo resolver algo com uma regra clara no código, por que chamar uma IA? Além do custo, eu estaria deixando uma decisão simples mais complicada do que precisa ser.

Para mim, o Jev fica interessante quando existe uma parte que exige **interpretação**: entender a intenção de uma mensagem, classificar um caso que chegou em texto livre ou decidir quando chamar alguém para revisar. Mesmo aí, é preciso testar se ele funciona bem naquele cenário.

No fim, o que mais gostei nessa ideia foi pensar na IA como uma parte pequena do sistema. Você define a pergunta, recebe uma decisão estruturada e usa o código para decidir o que acontece depois. Não precisa transformar todo problema em um chatbot.

### Referências

* [Introdução ao Jev](https://docs.typesafe.ai/introduction)
* [Jev com agentes de programação](https://docs.typesafe.ai/introduction/coding-agents)
* [Como funciona a confiança nas respostas](https://docs.typesafe.ai/confidence)
* [Limitações conhecidas do Jev 1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
