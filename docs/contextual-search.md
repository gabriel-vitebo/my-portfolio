# Pesquisa contextual

## Análise e decisões

A análise cobriu a estrutura de páginas e componentes, fontes de dados e tipos,
composables, utilitários, estilos, navegação, SEO, testes e comandos de validação.

Antes da feature, a Home recebia `portfolio.projects`, composto a partir de
`app/data/projects.ts`, e repassava a lista a `ProjectsSection`. Não existe rota
de listagem `/projetos`: `/projetos/[slug]` contém apenas detalhes. A seção da Home
é, portanto, o contexto da pesquisa de projetos.

O blog já combinava `blogMetadata.ts` com Markdown em `blog.ts`, ordenando os
artigos por publicação. Ambas as listagens usavam `usePagination`, com seis itens
por página. Essa implementação e a ordem original dos dados foram preservadas.

As tecnologias dos projetos são `SkillId[]`; nomes, categorias e rótulos vêm de
`skills.ts`. Blogs não têm tags, categorias ou relações com tecnologias. Não foram
inventados campos, inferidas relações nem alterados os dados publicados.

Não havia componente próprio de input/formulário nem de estado vazio. A interface
usa tokens Tailwind existentes (`surface`, `border`, `foreground`, `muted`,
`primary`), sem CSS adicional, dependências ou serviços externos.

## Arquitetura

- `SearchInput.vue`: componente visual tipado, sem conhecimento de domínios.
  Recebe `v-model`, label obrigatório e placeholder opcional. Usa input nativo
  `search`, label associado por ID único, botão Limpar e Escape. Ao limpar, o
  foco retorna ao campo. A largura se adapta ao espaço disponível.
- `useSearch.ts`: recebe somente a lista fornecida pelo contexto e uma função
  extratora de campos. Retorna `query` e `filteredItems`. A normalização está
  centralizada no mesmo arquivo: NFD, remoção de marcas, minúsculas e trim.
  Um `computed` prepara os campos normalizados quando os dados mudam, sem
  reconstruí-los a cada digitação. Aceita lista, ref ou getter.
- `searchFields.ts`: seletores tipados por domínio. Reutilizam `Project`,
  `BlogArticleMetadata`, `skills` e `getProjectTechnologyName`; não importam as
  listas completas nem criam um cadastro paralelo.
- Cada listagem passa os resultados a `usePagination`. Um watcher do termo chama
  `setPage(1)`, inclusive quando o número de páginas permanece igual. A troca de
  página continua usando os controles existentes. Digitar não move o foco.

Cada palavra deve corresponder parcialmente a pelo menos um campo (AND entre
termos). Por exemplo, `vue typescript` exige ambos, podendo encontrá-los em
tecnologias distintas do mesmo projeto. Não há ranking nem busca aproximada.

## Campos pesquisáveis

| Contexto | Campos |
| --- | --- |
| Blogs | Título e descrição |
| Projetos | Título, descrição curta, descrição completa e tecnologias relacionadas |
| Cada tecnologia relacionada | ID, nome central, categoria (`frontend`, `backend`, `tools`), nome de apresentação do projeto e override editorial quando existe |

Markdown completo, URLs, imagens e datas não entram na busca, para manter o
resultado vinculado ao conteúdo descritivo da listagem. Categorias são as das
skills, não novas categorias de projetos. Uma tecnologia citada no texto também
pode corresponder como texto; não se transforma por isso em relação cadastrada.

`vue` encontra projetos que referenciem o ID `vue`, mesmo sem menção no título
ou descrição. Atualmente nenhum projeto publicado referencia esse ID. O teste
explícito usa uma fixture `Project` com `technologies: ['vue', 'typescript']` e
o catálogo real. Nuxt não foi implicitamente classificado como Vue.

## Estado, URL e SEO

A busca é local por instância, como a paginação existente. Não há padrão atual
de sincronização de filtros com URL; projetos são uma seção da Home, cuja
navegação usa âncoras. Para manter essa primeira implementação simples e sem
acoplar o componente de seção ao roteador, não foi introduzido `?q=`. Atualizar a
página reinicia a busca, e histórico/compartilhamento não persistem o termo.

Não foram criadas rotas nem alterados canonical, sitemap, metadados ou indexação.
Os snapshots de SEO existentes permanecem iguais.

Com dados cadastrados e nenhum resultado, a região `role="status"` anuncia
`Nenhum resultado encontrado para “termo”.` O termo é interpolado como texto.
Para listas originalmente vazias, o comportamento anterior de lista vazia é
preservado. Apagar o campo, clicar em Limpar ou pressionar Escape restaura a
lista completa na primeira página.

## Reutilização em outra listagem

Defina um seletor `(item: SeuTipo) => string[]` com os campos daquele domínio:

```ts
const { query, filteredItems } = useSearch(() => props.items, getFields)
const { currentPage, totalPages, paginatedItems, setPage } = usePagination(filteredItems, 6)
watch(query, () => setPage(1), { flush: 'sync' })
```

Vincule `query` ao `SearchInput` e renderize `paginatedItems`. Não é necessário
modificar o input ou o composable, nem informar nome de página à lógica genérica.
O reset permanece na integração; busca e paginação podem ser usadas separadamente.

## Arquivos criados

- `app/components/ui/SearchInput.vue`
- `app/components/ui/testes/SearchInput.test.ts`
- `app/components/ui/testes/__snapshots__/SearchInput.test.ts.snap`
- `app/composables/useSearch.ts`
- `app/composables/testes/useSearch.test.ts`
- `app/utils/searchFields.ts`
- `app/pages/testes/blogSearch.test.ts`
- `app/pages/testes/__snapshots__/blogSearch.test.ts.snap`
- `docs/contextual-search.md`

## Arquivos alterados

- `app/components/sections/ProjectsSection.vue`
- `app/components/sections/testes/ProjectsSection.test.ts`
- `app/components/sections/testes/__snapshots__/ProjectsSection.test.ts.snap`
- `app/pages/blog/index.vue`
- `app/pages/testes/__snapshots__/sharedData.test.ts.snap`

## Testes e revisão

Novos testes cobrem renderização, label, digitação, limpeza, Escape e foco;
títulos, descrições, tecnologias, categorias e rótulos editoriais; caixa,
acentos, trim, correspondência parcial, múltiplos termos, reatividade e
reutilização do índice; isolamento entre blogs e projetos; listas vazias,
resultados ausentes, restauração, busca em todas as páginas, paginação dos
resultados e reset mesmo sem mudança na quantidade de páginas.

Foram acrescentados snapshots do input vazio/preenchido e das duas listagens
sem resultados. Os únicos snapshots existentes atualizados são o de
ProjectsSection e os HTMLs de Home e Blog, devido à nova interface. Nenhum teste
foi removido.

A revisão final manteve o componente visual e o algoritmo independentes dos
domínios. A seleção de campos fica num único local. A paginação não foi duplicada;
o pequeno watcher de integração é explícito em cada consumidor, evitando um
composable que obrigasse toda busca futura a usar paginação.

## Resultado da validação

| Verificação | Resultado |
| --- | --- |
| `pnpm test` antes da implementação | 34 arquivos e 122 testes aprovados |
| `pnpm exec vitest run -u` | 37 arquivos e 137 testes aprovados; quatro snapshots novos e três atualizações intencionais |
| `pnpm test:coverage` após os snapshots | 137 testes aprovados, sem atualizar snapshots; instruções 98,95%, branches 95,23%, funções 100%, linhas 98,73%; limites atendidos |
| `pnpm exec tsc --noEmit -p tsconfig.vitest.json` | Aprovado |
| `pnpm exec nuxt typecheck` | Não concluiu: falta `vue-tsc` local e o download automático falhou com `ENOTFOUND registry.npmjs.org` |
| Checagem Vue alternativa | `vue-tsc` 3.3.12 já disponível no cache local, com TypeScript 6.0.3 do projeto e `.nuxt/tsconfig.app.json`: somente três erros preexistentes TS2532 em `app/utils/markdown.ts`, linhas 45, 49 e 50, já registrados em `docs/shared-data.md`; nenhum erro nos arquivos da feature |
| Lint | Não existe script, configuração ou executável de lint no projeto; não foi adicionada ferramenta |
| `pnpm build` | Aprovado, código de saída 0 |
| `git diff --check` | Aprovado |

O build ainda registra os avisos de sourcemaps/Unhead e o erro do módulo de imagens
sociais ao ler `tailwind.config.ts` (`Unknown file extension .ts`), também
registrados antes desta feature em `docs/shared-data.md`. Apesar dessas mensagens,
o comando concluiu com sucesso. A checagem global de tipos não deve ser
considerada aprovada enquanto as pendências preexistentes de Markdown persistirem.
Não houve alteração de dependências, lockfile, configuração de build ou SEO.
