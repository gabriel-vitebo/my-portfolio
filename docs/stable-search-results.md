# Estabilidade das listagens durante a pesquisa

## Causa e análise

A pesquisa já filtrava a lista completa antes de `usePagination`, com seis itens
por página e reset da página ao mudar o termo. Essa lógica não foi alterada.

Os grids de Blogs e Projetos dimensionavam sua altura exclusivamente pelos cards
filtrados. Ao passar de seis cards para um ou nenhum, o conteúdo encolhia; a
paginação também desaparecia quando restava uma única página. Isso podia reduzir
a altura do documento e deslocar o scroll. A mensagem de nenhum resultado ficava
fora da área dos cards.

Uma altura fixa, uma estimativa por quantidade ou somente guardar pixels não
atenderia simultaneamente ao conteúdo real, às páginas incompletas e às mudanças
de breakpoint. Também não havia um componente existente responsável por esse
comportamento: `SearchInput` cuida do campo, `useSearch` do matching e
`usePagination` dos resultados paginados.

## Solução compartilhada

`app/components/ui/StableSearchResults.vue` envolve o grid, a mensagem e os
controles de paginação em ambos os contextos. Recebe apenas `active` e um slot,
sem conhecer blogs, projetos, tecnologias ou algoritmos de pesquisa.

Ao iniciar uma pesquisa, um watcher `flush: 'pre'` copia o DOM da página ainda
renderizada, antes da atualização dos resultados e do reset visual da paginação.
A cópia permanece em uma camada de referência na mesma célula CSS Grid dos
resultados reais. A altura da célula é a maior entre os dois conteúdos.

O CSS recalcula o layout dessa referência na largura atual, usando os próprios
cards, textos, imagens com proporção definida, colunas e gaps originais. Não há
altura fixa, medição JavaScript, `ResizeObserver`, style binding, CSS separado ou
compensação manual de scroll. Todas as classes adicionadas são Tailwind.

JavaScript é utilizado somente para reter e descartar o conteúdo anterior: CSS
sozinho não guarda os cards que o `v-for` remove. Copia-se o DOM estático de uma
única página, sem criar uma segunda instância dos componentes Vue, sem copiar
listeners de eventos e sem duplicar a lógica de paginação.

A referência tem `invisible`, `inert`, `aria-hidden="true"` e
`pointer-events-none`. Seus IDs são removidos para não duplicar os IDs dos títulos
dos blogs. Somente essa cópia de layout fica oculta; os resultados reais e a
mensagem continuam disponíveis às tecnologias assistivas. A solução não chama
focus ou APIs de scroll. O comportamento de foco da paginação existente permanece.

## Comportamento

- **Seis ou mais itens cadastrados:** a referência contém somente a página que
  estava visível, normalmente seis cards, e seus controles, quando existentes.
- **Menos itens na página:** a referência contém exatamente esses itens, incluindo
  a última página incompleta. Não há reserva permanente de seis cards.
- **Resultados parciais:** os cards encontrados permanecem no início da área. A
  área não encolhe abaixo da referência; resultados maiores podem expandi-la.
- **Nenhum resultado:** o texto existente aparece centralizado horizontalmente
  perto do início da área, abaixo do campo, com espaçamento interno. Não fica
  no centro vertical de uma lista mobile potencialmente muito longa.
- **Paginação durante pesquisa:** a referência original da sessão permanece,
  incluindo o espaço dos controles caso eles desapareçam. Os resultados filtrados
  continuam paginados normalmente.
- **Limpar a pesquisa:** a referência é descartada e a listagem volta ao tamanho
  natural da primeira página, conforme o reset já existente.
- **Trocar página sem pesquisa:** a altura acompanha livremente os cards dessa
  página. A próxima pesquisa captura essa nova página, inclusive se tiver só
  dois ou três itens.
- **Mudar viewport durante pesquisa:** a referência continua com os mesmos cards,
  mas o CSS reorganiza colunas e linhas na largura atual. Não reutiliza uma
  altura em pixels capturada no desktop para o mobile.

O componente usa somente APIs de DOM dentro do watcher após montagem; a
renderização inicial/SSR contém a listagem normal e uma referência vazia. A
referência é removida com o componente, sem observers ou listeners globais.
Matching, fontes de dados, cards, URLs, SEO e implementação de paginação não foram
alterados.

## Arquivos desta correção

Criados:

- `app/components/ui/StableSearchResults.vue`
- `app/components/ui/testes/StableSearchResults.test.ts`
- `app/components/ui/testes/__snapshots__/StableSearchResults.test.ts.snap`
- `docs/stable-search-results.md`

Alterados:

- `app/components/sections/ProjectsSection.vue`
- `app/pages/blog/index.vue`
- `app/components/sections/testes/ProjectsSection.test.ts`
- `app/pages/testes/blogSearch.test.ts`
- `app/components/sections/testes/__snapshots__/ProjectsSection.test.ts.snap`
- `app/pages/testes/__snapshots__/blogSearch.test.ts.snap`
- `app/pages/testes/__snapshots__/sharedData.test.ts.snap`

As alterações da feature de pesquisa que já estavam staged foram preservadas.
Esta correção não altera o índice Git.

## Testes

Os testes existentes continuam verificando os resultados reais, agora pelo
container `data-search-results-content`, distinguindo-os da referência inerte.
Nenhuma asserção de comportamento foi removida.

Novos testes verificam a captura anterior à filtragem no mesmo render, a
persistência da referência entre resultados parciais e vazios, a limpeza, a
captura de outra página, classes responsivas, isolamento acessível da cópia,
ausência de IDs duplicados e ausência de estilos de altura em pixels. Há cenários
com três e seis itens para ambos os contextos. O DOM de testes não é usado para
medir pixels nem recebe mocks de medidas.

Foram adicionados três snapshots do novo componente (normal, parcial e vazio).
Cinco snapshots existentes foram atualizados intencionalmente: ProjectsSection
normal/vazia, Blog vazio e HTML de Home/Blog. Snapshots de SEO permaneceram iguais.

## Validação em navegador real

Foram executados cenários em Chrome headless com viewport de 1440, 768 e 390 px,
com inspeção das capturas de tela do estado vazio em desktop, tablet e mobile.
Os testes de navegador verificaram altura real, scroll, foco, IDs e árvore de
acessibilidade, além dos testes unitários. Fixtures de nove itens foram usadas
somente na memória do navegador para navegar até uma página com três itens;
nenhum dado publicado foi modificado.

As 38 verificações passaram, abrangendo ambos os contextos:

- seis cards para zero, um e vários resultados;
- página com três cards para zero e um resultado;
- limpeza e restauração da primeira página;
- navegação para outra página e nova pesquisa;
- mudança desktop → tablet → mobile → desktop com a pesquisa ainda ativa;
- referência sem itens duplicados na árvore acessível; mensagem vazia acessível;
- altura preservada e nenhum deslocamento de scroll/foco durante a digitação.

Exemplos observados da altura total da área preservada (inclui paginação quando
existia; são resultados da validação, não constantes da implementação):

| Contexto | Página | Desktop | Tablet | Mobile |
| --- | --- | --- | --- | --- |
| Projetos | 6 cards | 710 px | 1037 px | 2014 px |
| Projetos | 3 cards e paginação | 423 px | 762 px | 1075 px |
| Blogs | 6 cards | 965 px | 1365 px | 2778 px |
| Blogs | 3 cards e paginação | 548 px | 1036 px | 1539 px |

## Validação do projeto

| Comando/verificação | Resultado |
| --- | --- |
| `pnpm exec vitest run -u` | 140 testes aprovados ao atualizar os snapshots |
| `pnpm test:coverage` após os testes adicionais | 38 arquivos, 144 testes aprovados; snapshots aprovados sem atualização |
| Cobertura | Instruções 98,95%; branches 95,23%; funções 100%; linhas 98,73%; limites atendidos |
| `pnpm exec tsc --noEmit -p tsconfig.vitest.json` | Aprovado |
| Checagem dos componentes Vue | `vue-tsc` 3.3.12 do cache local + TypeScript 6.0.3 instalado, com `.nuxt/tsconfig.app.json`: somente os três erros TS2532 preexistentes de `app/utils/markdown.ts`, linhas 45, 49 e 50 |
| Lint | Sem script, configuração ou executável de lint no projeto |
| `pnpm build` | Aprovado, exit code 0; 76 rotas pré-renderizadas |
| `git diff --check` | Aprovado |

A checagem Vue usa a mesma alternativa local documentada na feature de pesquisa,
pois `vue-tsc` não está instalado como dependência do projeto. Não representa um
typecheck global aprovado: permanecem os erros anteriores de Markdown.
O build ainda registra mensagens de sourcemaps/Unhead, leitura de
`tailwind.config.ts` pelo módulo de imagens sociais, temporizadores de debug e
falhas no carregamento de alguns ícones externos; mesmo assim conclui com sucesso.
Não houve alteração de dependências ou configuração para ocultar essas mensagens.
