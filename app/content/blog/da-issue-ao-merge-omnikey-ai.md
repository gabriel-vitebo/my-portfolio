Adicionar um linter parece uma tarefa simples: instalar as dependências, criar a configuração e rodar um comando. Mas fazer isso em um projeto open source envolve algumas decisões que vão além de fazer o lint passar na minha máquina.

Na minha contribuição para o OmniKey AI, configurei ESLint em três workspaces TypeScript, integrei a verificação ao CI e acompanhei o processo de review até o merge. Também usei agentes no OpenRig para ajudar na investigação, implementação e revisão.

A parte mais interessante foi entender como encaixar essa mudança nas decisões que o projeto já tinha. Principalmente quando uma escolha de dependência começou a exigir uma versão mais recente do Node.

## O projeto e o problema

O [OmniKey AI](https://github.com/GurinderRawala/OmniKey-AI) é um assistente de IA para Windows e macOS. Uma das propostas é selecionar um texto em um aplicativo, pressionar um atalho e aplicar uma tarefa, como corrigir a escrita ou melhorar um prompt.

O projeto também tem CLI, integração com Telegram e recursos de agente com ferramentas. No repositório, a parte TypeScript está dividida em três workspaces: `api`, `cli` e `telegram`. Os aplicativos nativos ficam em outras partes do código.

A [issue #35](https://github.com/GurinderRawala/OmniKey-AI/issues/35) apontava um problema bem concreto: os scripts de lint dos workspaces eram placeholders. Eles imprimiam uma mensagem e terminavam com sucesso, sem analisar o código.

Um deles tinha este formato:

```json
"lint": "echo \"(no lint configured)\" && exit 0"
```

Então, executar `yarn lint` não garantia que alguma regra estivesse sendo verificada. O Prettier já cuidava da formatação, mas faltava uma análise para encontrar problemas como variáveis não utilizadas.

O pedido era adicionar ESLint e typescript-eslint na raiz, compartilhar uma configuração flat entre os workspaces, substituir os scripts e incluir a verificação no GitHub Actions.

![Descrição da issue #35, que pede uma configuração compartilhada de ESLint para os três workspaces TypeScript.](/images/blog/da-issue-ao-merge-omnikey-ai/issue-description.jpeg)

## Entender o projeto antes de editar

Antes de mexer no código, o trabalho começou pela leitura do `README.md`, do `CONTRIBUTING.md` e do `DEVELOPMENT.md`.

Isso trouxe detalhes que não ficariam claros olhando apenas para o arquivo de configuração do lint. O projeto usa Yarn Classic, tem uma ordem de build entre os workspaces e possui regras próprias para publicar a CLI.

Uma dessas regras exige atualizar as versões da API e da CLI juntas quando uma alteração em `cli/**` aciona o fluxo de publicação. Até uma mudança no script de lint precisava considerar esse processo.

Foi um lembrete prático de que o escopo de uma alteração depende também de como o projeto é construído e distribuído.

## Estudando o OpenRig na prática

Além de contribuir com o projeto, eu queria estudar o OpenRig e entender como ele funciona na prática. Escolhi usar a ferramenta nessa contribuição para experimentar a organização de uma equipe de agentes em uma tarefa real, com escopo definido e revisão do mantenedor.

O [OpenRig](https://github.com/mvschwarz/openrig) é uma ferramenta para organizar agentes de programação em equipes, com papéis, comunicação e acompanhamento de tarefas. Nesse trabalho, usei agentes Codex com três papéis: um coordenador, um developer e um reviewer.

O coordenador organizava a investigação e consolidava as decisões. O developer examinava os arquivos e implementava os ajustes. O reviewer fazia uma revisão independente da proposta e do diff.

Comecei pedindo somente leitura e planejamento. A implementação veio depois de entender os requisitos, os arquivos envolvidos e a estratégia de validação.

Também defini limites: manter o trabalho na branch da contribuição, evitar mudanças fora da issue e deixar commits e push para eu fazer manualmente.

Eu continuava responsável por acompanhar as decisões, conferir o que seria enviado e executar as validações no meu ambiente. A divisão entre os agentes ajudou a organizar o trabalho, mas não eliminou a necessidade de revisar suas escolhas.

![Ilustração dos papéis de coordenador, developer e reviewer usados para organizar o trabalho com OpenRig.](/images/blog/da-issue-ao-merge-omnikey-ai/Dark%20three-panel%20code%20interface.png)

## A configuração e os avisos que já existiam

A solução passou a usar um `eslint.config.mjs` compartilhado na raiz. Cada workspace aponta explicitamente para ele e executa o lint nos próprios arquivos TypeScript de `src`.

Por exemplo:

```json
"lint": "eslint --config ../eslint.config.mjs \"src/**/*.ts\""
```

Na raiz, o comando já delegava a execução aos workspaces. Com os scripts reais, essa estrutura passou a fazer a análise dos três diretórios.

No CI, entrou uma etapa curta:

```yaml
- name: Lint
  run: yarn lint
```

A configuração começou com os conjuntos de regras recomendados de JavaScript e TypeScript. A formatação continuou com o Prettier.

Como o código já existia antes da adoção do lint, apareceram violações de base. As simples foram corrigidas. Algumas regras com muitas ocorrências ficaram como warnings, uma estratégia que a própria issue permitia para evitar uma refatoração grande no primeiro PR.

Na versão que validei durante os ajustes, eram 252 warnings e nenhum erro. Isso não significava que o comando ignorava qualquer problema: regras como a de variáveis não utilizadas continuavam fazendo a execução falhar.

![Saída do ESLint após a configuração, com warnings existentes no código e nenhum erro.](/images/blog/da-issue-ao-merge-omnikey-ai/result-lint.png)

Também ficou explícito que a configuração não habilitava análise de tipos. Regras como `no-floating-promises` ficaram para uma etapa futura.

## A escolha do ESLint também era uma escolha de compatibilidade

A primeira implementação usava ESLint 10. Essa escolha exigia pelo menos Node 22.13 dentro da linha 22, enquanto a documentação do projeto indicava Node 22 como baseline de desenvolvimento.

Para acomodar a ferramenta, inicialmente alterei o requisito de Node. Durante o review, o mantenedor pediu para preservar o baseline existente e manter a atualização de ambiente fora daquele PR.

Ele pesquisou e indicou uma combinação específica:

```json
{
  "@eslint/js": "9.39.5",
  "eslint": "9.39.5",
  "typescript-eslint": "8.55.0"
}
```

As versões ficaram fixadas, sem `^`. E havia um detalhe importante: baixar somente o ESLint não bastava. A versão mais recente de typescript-eslint usada inicialmente trazia `eslint-visitor-keys` 5, que também impunha um requisito mais alto de Node.

Ou seja, era preciso olhar a árvore transitiva, não apenas as três linhas de dependências na raiz.

O mantenedor reconheceu que ESLint 9 seria uma escolha temporária de compatibilidade, inclusive com a ressalva de suporte dessa versão. A evolução das ferramentas e a migração planejada para pnpm e Turborepo ficaram para uma [iniciativa separada, na issue #54](https://github.com/GurinderRawala/OmniKey-AI/issues/54).

Essa foi uma das principais lições da contribuição: escolher uma versão mais recente pode trazer uma mudança de ambiente junto, mesmo quando o objetivo é apenas adicionar uma ferramenta de desenvolvimento.

![Comentário do mantenedor sobre preservar o baseline de Node 22 e usar versões compatíveis de ESLint e typescript-eslint.](/images/blog/da-issue-ao-merge-omnikey-ai/owner-coment.jpeg)

## Como verifiquei que o lint estava funcionando

Além de ler o diff, executei os comandos de instalação, lint, formatação, build e testes. Os agentes também fizeram validações em uma cópia isolada.

O roteiro incluía:

```bash
yarn install --frozen-lockfile --non-interactive
yarn lint
yarn build
yarn test
git diff HEAD --check
```

Para formatação, a verificação incluía os arquivos de configuração alterados e as fontes TypeScript dos três workspaces.

Mas havia um teste pequeno que achei especialmente útil: introduzir um erro de propósito.

Em um arquivo temporário, coloquei variáveis locais não utilizadas. Depois da remoção da isenção geral para nomes iniciados com underscore, o teste também cobria esse caso:

```ts
export {};

const unusedProbe = 1;
const _unusedProbe = 2;
```

O esperado era o ESLint apontar os erros e terminar com código 1. Depois, o arquivo temporário precisava ser removido e o lint deveria passar novamente.

Isso demonstrava que o comando realmente detectava um problema, em vez de apenas retornar sucesso com uma configuração que não alcançava os arquivos.

Na validação isolada com Node 22.13.1 e Yarn 1.22.22, instalação limpa com lockfile congelado, lint, build, formatação e os 417 testes daquele estado do código passaram.

### O limite encontrado no Node 22.0.0

O mantenedor também pediu uma instalação limpa no Node 22.0.0. Nesse teste, apareceu uma restrição do Vite que já estava no lockfile antes da contribuição.

A instalação da base original e a da contribuição falharam no mesmo requisito: aquela versão do Vite exigia Node 22.12 ou posterior na linha 22.

A árvore do linter foi auditada separadamente, mas isso não substituía uma instalação completa bem-sucedida. O resultado foi informado dessa forma, sem ignorar a checagem de engines e sem atualizar uma dependência fora do escopo.

Essa distinção fez parte da validação: separar um bloqueio preexistente de algo introduzido pelo PR e deixar claro o que havia sido comprovado.

## O review também encontrou detalhes de comportamento

Nem toda correção de lint deve ser uma remoção automática.

Um exemplo foi o import de `AppDownload`: mesmo sem usar o identificador diretamente, era necessário preservar o carregamento do módulo para registrar o modelo antes da inicialização do banco. A solução manteve um import por efeito colateral.

Outro ponto veio de uma sugestão de review: `varsIgnorePattern: '^_'` liberava qualquer variável local iniciada com underscore. Removi essa exceção geral e mantive as opções para parâmetros e erros capturados intencionalmente não utilizados.

Em um helper do Telegram, porém, um binding de destructuring continuou existindo com uma exceção de lint restrita à linha. O objetivo era preservar a leitura da propriedade `parse_mode` e a construção do objeto restante, sem mudar o comportamento da função apenas para silenciar a regra.

Esses casos mostram por que conferir o contexto importa. Um aviso pode levar a uma correção simples, mas também pode apontar para uma construção que tem uma razão para existir.

## Do último ajuste ao merge

Na revisão final, o mantenedor integrou as mudanças mais recentes da `main` e atualizou API e CLI para 1.8.16, porque a versão 1.8.15 já havia sido publicada enquanto o PR estava aberto.

Ele também refez as validações no Node 22.12.0 com Yarn 1.22.22. Nesse estado final, o lint reportou 257 warnings e nenhum erro, e passaram 431 testes em 32 arquivos. As contagens mudaram com a integração das alterações do projeto.

A revisão ainda incluiu verificações de automação de release, `actionlint`, a CLI compilada com `--version` e uma simulação de empacotamento com `npm pack --dry-run`.

O comentário final deixou claro que eram validações locais. Não foi apresentada uma execução concluída do CI do GitHub nem uma validação completa dos aplicativos nativos de ponta a ponta.

Depois disso, o [PR #51 foi incorporado ao projeto](https://github.com/GurinderRawala/OmniKey-AI/pull/51).

![Pull request #51 com o status merged no repositório OmniKey AI.](/images/blog/da-issue-ao-merge-omnikey-ai/merge-pr.jpeg)

## O que levo para a próxima contribuição

A configuração do ESLint foi a entrega, mas boa parte do aprendizado veio das decisões em volta dela.

Ler as orientações do projeto antes de implementar ajudou a entender publicação, organização e escopo. Verificar dependências transitivas mostrou que compatibilidade não termina no `package.json`. Introduzir erros temporários foi uma forma direta de provar que a nova verificação funcionava.

Usar agentes ajudou na investigação e na revisão, mas as escolhas continuaram precisando de contexto, conferência e conversa com o mantenedor. Uma solução que funciona localmente ainda precisa fazer sentido para quem mantém o projeto e para as outras pessoas que contribuem.

O review trouxe esse contexto e ajudou a ajustar a contribuição. No fim, um comando que antes só imprimia uma mensagem passou a analisar os três workspaces e fazer parte do fluxo de CI.

Para quem quiser conferir o código e a discussão, o histórico está no [PR #51 do OmniKey AI](https://github.com/GurinderRawala/OmniKey-AI/pull/51).
