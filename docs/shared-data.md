# Auditoria e refatoração dos dados compartilhados

## Escopo e decisões

A revisão abrangeu páginas, componentes, dados, tipos, composables, utilitários,
conteúdo Markdown, configuração Nuxt/SEO, testes e pipeline de CI.

| Informação encontrada | Antes | Decisão e estrutura atual |
| --- | --- | --- |
| Tecnologias de projetos | Arrays de nomes em `projects.ts`, tipados como `string[]` | IDs `SkillId[]`, resolvidos pelo catálogo `skills.ts` |
| Skills do Sobre Mim | Três arrays de objetos dentro da página | Catálogo compartilhado; seleção e ordem em `aboutSkills.ts` |
| Grafias equivalentes | `Tailwind` / `Tailwind CSS`; `TypeScript` / `Typescript` | Uma entidade por ID; preservação explícita dos rótulos existentes |
| Redes e contato | URLs em `profile.ts`, GitHub em `constants.ts`, URLs repetidas no Nuxt | Objetos identificados em `socialLinks.ts`; perfil e SEO reutilizam esses objetos |
| Ícones sociais | Duas funções inferiam o ícone procurando palavras no rótulo | Metadado `icon` explícito na definição do contato |
| Nome, cargo e foto | Perfil já centralizado, mas repetido no SEO global | Nuxt consome `hero.name`, `hero.role` e `hero.image` de `profile.ts` |
| Domínio e identidade Schema.org | Literais repetidos na configuração e páginas | `siteUrl` e `identityId` em `constants.ts` |
| Capa social padrão | Caminho repetido em quatro páginas | `socialImagePath` em `constants.ts`; origem continua vindo de `useSiteConfig()` |
| Rotas dos artigos | Mesmo mapeamento em `blogMetadata.ts` e `nuxt.config.ts` | Configuração importa `blogArticleRoutes` já existente |
| Projetos, artigos e portfólio | Já tinham arquivos de dados e composição próprios | Preservados; sem novo repositório genérico de entidades |

A Home não possui lista própria de skills. Ela continua consumindo `portfolio`
para perfil, contatos e projetos. Não foi adicionada uma seção nova.

## O que permaneceu local

- Narrativas de carreira, trajetória, formação, princípios, chamadas e descrições
  específicas de página: são redação contextual, não registros duplicados de um
  catálogo. Menções a tecnologias dentro de frases não viraram interpolação.
- Formação e experiências permanecem no Sobre Mim. Não foi criado um cadastro de
  instituições, empresas ou cargos para substituir suas menções narrativas.
- Markdown dos artigos, exemplos de código e referências externas: são conteúdo
  editorial publicado. Inclusive URLs de exemplo para Schema.org foram mantidas.
- URLs específicas de demos, galerias, vídeos e repositórios continuam nos projetos.
  Apenas a URL do perfil GitHub é compartilhada; GitHub Pages não foi inferido dela.
- O endpoint de compartilhamento do LinkedIn não é o perfil pessoal do LinkedIn.
- GitHub como ferramenta e GitHub como contato têm responsabilidades diferentes:
  um representa uma skill e o outro um perfil externo.
- Descrições SEO diferentes continuam diferentes. A descrição global da pessoa
  não foi substituída pela descrição comercial da Home.
- Slugs e shortSlugs continuam os identificadores existentes dos conteúdos.
- Não havia tags/categorias cadastradas nos artigos. Não foram inventadas relações
  por interpretação do texto, nem campos vazios apenas para uma busca futura.
- Links de navegação, configuração de analytics, estilos e algoritmos dos
  composables/utilitários não precisaram de um catálogo de dados.

## Fontes e consumo

- `app/data/skills.ts`: 28 tecnologias/skills, nomes, ícones quando já existiam,
  categoria e rótulo específico de projetos quando necessário. As chaves são os
  IDs estáveis; `SkillId = keyof typeof skills`.
- `app/data/aboutSkills.ts`: IDs escolhidos para cada grupo e sua ordem de exibição.
  Resolve os IDs em objetos para os componentes de apresentação já existentes.
  As categorias descrevem o agrupamento do portfólio, não uma classificação
  universal ou exclusiva das tecnologias.
- `app/data/socialLinks.ts`: GitHub, LinkedIn e e-mail, com ID, rótulo, URL e ícone.
- `app/data/profile.ts`: perfil; mantém `socials` como lista ordenada de referências
  aos objetos do catálogo de contatos.
- `app/data/constants.ts`: domínio, identidade Schema.org, capa social e exportação
  compatível `githubUrl`, derivada do contato GitHub.
- `app/data/projects.ts`: conteúdo original dos seis projetos, agora com IDs de
  tecnologias. `ProjectTechnologies` resolve os IDs; `ProjectHero` encaminha a
  exceção editorial de rótulo quando existe.
- `app/data/blogMetadata.ts` e `app/data/blog.ts`: continuam sendo as fontes de
  metadados e associação com Markdown. Rotas, listagem e detalhes usam esses dados.
- `app/data/portfolio.ts`: continua compondo perfil e projetos sem duplicação.

Home e Sobre Mim usam os mesmos contatos via `portfolio.socials` e `HeroPortrait`.
O contato do Sobre Mim recebe a mesma lista, eliminando o mapeamento que inferia
ícones por texto. Navbar, footer e títulos continuam recebendo o nome pelo fluxo
existente. A configuração Nuxt reutiliza perfil, URLs sociais e identidade.

## Manutenção

Para adicionar uma tecnologia, registre uma chave estável em `skills.ts`:

```ts
'new-tool': { name: 'Nova ferramenta', category: 'tools', icon: 'lucide:wrench' },
```

Use essa chave em `project.technologies`. Para exibi-la no Sobre Mim, inclua também
seu ID na seleção apropriada em `aboutSkills.ts`; nesse caso forneça um ícone.
Registrar uma tecnologia não a acrescenta automaticamente à apresentação de skills.
Não renomeie IDs ao editar nomes exibidos.

```ts
technologies: ['nuxt', 'typescript', 'tailwind']
```

`getProjectTechnologyName(id)` resolve o nome do catálogo. `projectName` preserva
`Tailwind CSS` nos projetos, enquanto o Sobre Mim mantém `Tailwind`. Somente Check
Numbers possui `technologyLabels: { typescript: 'Typescript' }`, preservando sua
grafia anterior. Essa exceção é editorial; sua tecnologia continua sendo
`typescript`. Overrides são opcionais e tipados por `SkillId`.

Para alterar uma rede social, edite a URL em `socialLinks.ts`. Isso atualiza retrato,
contato e referências de identidade SEO. Alterar o perfil GitHub também atualiza a
base dos links de repositórios, como já ocorria anteriormente. Edite o e-mail na
constante local desse arquivo para atualizar rótulo e `mailto:` juntos.

Nome, cargo e imagem são editados em `profile.ts`; domínio e capa social em
`constants.ts`. Textos narrativos publicados continuam tendo revisão editorial
própria, sem substituição automática.

## Base disponível para pesquisa futura

- `project.technologies.includes('nuxt')` relaciona projetos por ID.
- `skills[id].category` permite relacionar tecnologias por grupo.
- `skills[id].name` e `projectName` fornecem nomes de apresentação.
- Slugs identificam projetos e artigos; artigos já expõem título, descrição e datas.
- `SocialId` identifica contatos sem depender dos rótulos.

Não foram implementados campo de pesquisa, filtros, autocomplete ou busca.
A classificação editorial dos blogs continua sendo uma decisão futura; não há
promessa de pesquisa por tags enquanto elas não forem cadastradas.

## Testes e preservação

O padrão existente de Vitest, Vue Test Utils, `testes/` e snapshots foi mantido.

- `sharedData.test.ts` em dados verifica referências, tipos de IDs, categorias,
  ícones, ordem, nomes de todas as tecnologias dos projetos, identidade dos
  contatos e associação entre artigos, metadados e rotas.
- `HeroPortrait.test.ts` verifica que mudar o rótulo não muda o ícone.
- `ProjectTechnologies.test.ts` verifica resolução e atualização de props.
- `ProjectHero.test.ts` cobre a grafia editorial de Check Numbers com novo snapshot.
- `sharedData.test.ts` em páginas cobre HTML e metadados de Home, Sobre Mim, blog,
  artigo e projeto. Os mesmos 15 snapshots também passaram contra uma cópia
  temporária dos arquivos anteriores à refatoração, sem modificar o checkout.
- Nenhum snapshot anterior foi regravado; foram acrescentados casos novos.
- A fixture do BlogCard recebeu `publishedAtIso`, corrigindo uma omissão de tipo
  preexistente, sem alteração do snapshot.

## Arquivos criados

- `app/data/skills.ts`
- `app/data/aboutSkills.ts`
- `app/data/socialLinks.ts`
- `app/data/testes/sharedData.test.ts`
- `app/pages/testes/sharedData.test.ts`
- `app/pages/testes/__snapshots__/sharedData.test.ts.snap`
- `docs/shared-data.md`

## Arquivos alterados

- Dados/tipos: `app/data/constants.ts`, `app/data/profile.ts`,
  `app/data/projects.ts`, `app/types/portfolio.ts`.
- Componentes: `app/components/hero/HeroPortrait.vue`,
  `app/components/projects/ProjectTechnologies.vue`,
  `app/components/projects/ProjectHero.vue`.
- Páginas: `app/pages/index.vue`, `app/pages/sobre-mim/index.vue`,
  `app/pages/projetos/[slug].vue`, `app/pages/blog/index.vue`,
  `app/pages/blog/[slug]/index.vue`.
- Configuração: `nuxt.config.ts`.
- Testes: `app/components/hero/testes/HeroPortrait.test.ts`,
  `app/components/projects/testes/ProjectTechnologies.test.ts`,
  `app/components/projects/testes/ProjectHero.test.ts`,
  `app/components/projects/testes/__snapshots__/ProjectHero.test.ts.snap`,
  `app/components/blog/card/testes/BlogCard.test.ts`.

## Resultado da validação

| Verificação | Resultado |
| --- | --- |
| `pnpm test` antes da alteração | 32 arquivos, 110 testes aprovados |
| `pnpm test` final | 34 arquivos, 122 testes aprovados |
| `pnpm test:coverage` | 122 testes aprovados; instruções 98,75%, branches 94,73%, funções 100%, linhas 98,55%; limites do projeto atendidos |
| Comparação dos novos snapshots de páginas com código anterior | 5 testes e 15 snapshots aprovados |
| `pnpm exec tsc --noEmit -p tsconfig.vitest.json` | Aprovado após completar a fixture do BlogCard |
| `pnpm exec nuxt typecheck` | Não concluiu: `vue-tsc` ausente; download automático inicialmente bloqueado por rede e, após acesso, incompatibilidade `ERR_PACKAGE_PATH_NOT_EXPORTED` no TypeScript obtido automaticamente |
| Validação Vue alternativa | Executado `vue-tsc` 3.3.12 com o TypeScript 6.0.3 já instalado e `.nuxt/tsconfig.app.json`; encontrou somente três erros preexistentes em `app/utils/markdown.ts`, linhas 45, 49 e 50 (`TS2532`, token possivelmente indefinido). Arquivo não alterado |
| Lint | Não há script, configuração ou executável de lint no projeto; nenhuma ferramenta foi introduzida |
| `pnpm build` | Aprovado, código de saída 0, 76 rotas pré-renderizadas |
| `git diff --check` | Aprovado |

O build registrou avisos de sourcemaps/Unhead e falha do módulo de imagens sociais
na leitura de `tailwind.config.ts` (`Unknown file extension .ts`), mas concluiu e
gerou a saída. Esses avisos não foram ocultados nem corrigidos com mudanças de
configuração fora do escopo. Não houve upgrade de dependências ou alteração de
`package.json`/lockfile. A validação Vue alternativa não equivale a um typecheck
global aprovado: as três pendências de Markdown permanecem.
