# Gabriel Vitebo | Portfolio

Portfolio pessoal desenvolvido com Nuxt 4, Vue 3, TypeScript e Tailwind CSS. Este repositório documenta a implementação do meu próprio portfólio, com perfil profissional, links sociais, vitrine de projetos, páginas detalhadas, galeria de imagens/vídeos, SEO por rota e changelog público alimentado pelo `CHANGELOG.md`.

O foco da aplicação é ser um site estático, rápido, fácil de manter e com conteúdo centralizado em arquivos TypeScript tipados.

## Sumario

- [Visao geral](#visao-geral)
- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Modelo de dados](#modelo-de-dados)
- [Rotas](#rotas)
- [SEO e metadados](#seo-e-metadados)
- [Imagens e midia](#imagens-e-midia)
- [Design system](#design-system)
- [Changelog e releases](#changelog-e-releases)
- [Build e deploy](#build-e-deploy)

## Visao geral

Este repositorio contem um portfolio de desenvolvedor Full Stack. A pagina inicial combina tres blocos principais:

- Hero com nome, cargo, descricao e foto.
- Secao de projetos com cards para cada projeto publicado.
- Secao sobre mim com textos, tecnologias de destaque e links sociais.

Cada projeto possui uma pagina propria em `/projetos/[slug]`, com descricao longa, tecnologias, links de repositorio, link de demo quando disponivel e galeria de midias. A aplicacao tambem expoe `/changelog`, que renderiza o arquivo `CHANGELOG.md` real do repositorio.

## Stack

- **Nuxt 4**: framework principal da aplicacao.
- **Vue 3**: camada de componentes e composables.
- **TypeScript**: tipagem dos dados, componentes e configuracoes.
- **Tailwind CSS**: utilitarios de layout e estilo.
- **CSS variables**: tokens globais de cores, raios, sombras e tipografia.
- **@nuxt/image**: otimizacao e renderizacao de imagens com `NuxtImg`.
- **Markdown It**: renderizacao do `CHANGELOG.md` na rota `/changelog`.
- **Changesets**: versionamento manual, changelog, tags e GitHub Releases.
- **pnpm**: gerenciador de pacotes configurado em `packageManager`.

## Arquitetura

A aplicacao segue uma arquitetura orientada a dados estaticos. Em vez de buscar conteudo em uma API ou CMS, o portfolio centraliza as informacoes em arquivos TypeScript dentro de `app/data`. As paginas importam esses dados, distribuem para componentes especializados e definem metadados de SEO conforme o contexto da rota.

Fluxo simplificado:

```text
app/data/*.ts
  -> app/data/portfolio.ts
  -> app/pages/*.vue
  -> app/components/**/*.vue
  -> Nuxt prerender
  -> site estatico
```

Principais decisoes arquiteturais:

- **Fonte unica de conteudo**: dados pessoais, projetos, textos, links e tecnologias ficam em `app/data`.
- **Contratos tipados**: os formatos aceitos para hero, projetos, galeria e secoes ficam em `app/types/portfolio.ts`.
- **Componentizacao por dominio**: componentes de layout, secoes, projetos e midia ficam separados por responsabilidade.
- **Rotas prerenderizadas**: o projeto esta configurado para gerar paginas estaticas, incluindo as rotas dinamicas dos projetos.
- **SEO local por pagina**: cada pagina define `useSeoMeta` e canonical URL de acordo com seu conteudo.
- **Release desacoplado de commits**: commits comuns nao geram versao; releases dependem de changesets manuais.

### Camadas

**Configuracao**

- `nuxt.config.ts` registra modulos, CSS global, otimizacao de imagens, prerender, runtime config e metadados globais.
- `tailwind.config.ts` conecta Tailwind aos tokens CSS globais.
- `tsconfig.json` estende a configuracao gerada pelo Nuxt.

**Dados**

- `app/data/profile.ts` contem hero, links sociais, textos da secao sobre mim e tecnologias de destaque.
- `app/data/projects.ts` contem a lista completa dos projetos, galerias, tecnologias, demos e repositorios.
- `app/data/constants.ts` guarda valores compartilhados, como URL base do GitHub.
- `app/data/portfolio.ts` agrega os dados em um unico objeto `portfolio`.

**Apresentacao**

- `app/pages/index.vue` monta a home a partir das secoes principais.
- `app/pages/projetos/[slug].vue` resolve o projeto pelo slug e monta a pagina de detalhe.
- `app/pages/changelog.vue` transforma o Markdown do changelog em HTML.
- `app/components` concentra componentes reutilizaveis e componentes especificos de cada area.

**Comportamento**

- `app/composables/useSectionNavigation.ts` centraliza navegacao suave para secoes da home.
- `app/composables/useYoutubeMedia.ts` extrai IDs de URLs do YouTube, gera embeds e thumbnails.
- `app/components/media/MediaLightbox.vue` controla abertura de imagens/videos, foco, fechamento por Escape e bloqueio de scroll.

## Estrutura de pastas

```text
.
├── app
│   ├── app.vue
│   ├── assets
│   │   └── css/theme.css
│   ├── components
│   │   ├── layout
│   │   ├── media
│   │   ├── projects
│   │   └── sections
│   ├── composables
│   ├── data
│   ├── pages
│   │   ├── changelog.vue
│   │   ├── index.vue
│   │   └── projetos/[slug].vue
│   └── types
├── docs
│   ├── architecture.md
│   ├── commit-convention.md
│   └── release-flow.md
├── public
│   ├── images
│   └── robots.txt
├── CHANGELOG.md
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.ts
```

## Modelo de dados

Os dados do portfolio sao descritos por interfaces em `app/types/portfolio.ts`.

Entidades principais:

- `HeroData`: nome, saudacao, cargo, descricao e imagem principal.
- `SocialLink`: links externos ou de contato.
- `AboutData`: titulo, paragrafos e tecnologias de destaque.
- `Project`: slug, titulo, descricao curta, descricao completa, imagem, galeria, repositorios, demo e tecnologias.
- `ProjectGalleryItem`: item de galeria que pode ser imagem local ou video do YouTube.
- `PortfolioData`: objeto final consumido pelas paginas.

Essa tipagem ajuda a manter consistencia entre conteudo e interface. Ao adicionar um novo projeto, por exemplo, o TypeScript valida se os campos obrigatorios foram informados.

## Rotas

| Rota | Arquivo | Descricao |
| --- | --- | --- |
| `/` | `app/pages/index.vue` | Home do portfolio com hero, projetos e sobre mim. |
| `/projetos/[slug]` | `app/pages/projetos/[slug].vue` | Pagina detalhada de um projeto. |
| `/changelog` | `app/pages/changelog.vue` | Historico de versoes renderizado a partir do `CHANGELOG.md`. |

As rotas dos projetos sao baseadas no campo `slug` de cada item em `app/data/projects.ts`.

## SEO e metadados

O projeto usa `useSeoMeta` e `useHead` para definir metadados por pagina:

- Titulo e descricao da home baseados no hero.
- Open Graph e Twitter Card com imagem social em `public/images/social-cover.jpg`.
- Canonical URL por rota.
- Metadados especificos para paginas de projeto.
- Metadados especificos para o changelog.
- `lang="pt-BR"` configurado globalmente.
- `theme-color` definido em `nuxt.config.ts`.

O site base usado nos metadados e:

```text
https://gabriel-vitebo.vercel.app
```

## Imagens e midia

As imagens publicas ficam em `public/images`.

Convencao atual:

```text
public/images/profile/my-photo.png
public/images/social-cover.jpg
public/images/projects/{project-slug}/{image-file}
```

Para imagens de projetos, `app/data/projects.ts` usa o helper:

```ts
const projectImage = (project: string, file: string) => `/images/projects/${project}/${file}`
```

A galeria aceita dois tipos de midia:

- `image`: imagem local servida pelo diretorio `public`.
- `youtube`: URL de video, incluindo `youtube.com/watch`, `youtube.com/embed`, `youtu.be` e `youtube.com/shorts`.

O lightbox usa `Teleport` para renderizar o modal no `body`, fecha ao clicar fora ou pressionar Escape, prende o foco dentro do dialog e restaura o foco ao fechar.

## Design system

O visual e definido por uma combinacao de tokens CSS e Tailwind.

Tokens globais ficam em `app/assets/css/theme.css`:

- Cores de fundo, superficie, borda e texto.
- Cor primaria e hover.
- Raios de borda.
- Sombras.
- Classes utilitarias para texto, cor e tipografia do hero.
- Ajustes de acessibilidade para `focus-visible`.
- Respeito a `prefers-reduced-motion`.

O Tailwind e estendido em `tailwind.config.ts` para consumir esses tokens:

- `background`
- `surface`
- `surface-elevated`
- `border`
- `primary`
- `primary-hover`
- raios `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
- sombras `sm`, `md`, `lg`, `glow`
- fonte `Geist`, com fallbacks para `Inter` e system fonts

## Changelog e releases

O projeto usa Changesets para versionamento manual. Isso significa que a versao nao e inferida automaticamente pelo formato dos commits.

Arquivos relacionados:

- `.changeset/config.json`
- `.github/workflows/release.yml`
- `CHANGELOG.md`
- `docs/commit-convention.md`
- `docs/release-flow.md`

Fluxo resumido:

1. Uma alteracao publicavel recebe um changeset com `pnpm changeset`.
2. O changeset define se a proxima versao sera `patch`, `minor` ou `major`.
3. Ao entrar na `main`, a GitHub Action do Changesets cria ou atualiza a PR `Version Packages`.
4. O merge dessa PR atualiza `package.json`, `pnpm-lock.yaml` e `CHANGELOG.md`.
5. O publish do Changesets cria tag Git e GitHub Release.
6. A versao do `package.json` e exposta em `runtimeConfig.public.appVersion`.
7. O footer exibe a versao e aponta para `/changelog`.

Mesmo com `"private": true`, o Changesets esta configurado para versionar pacote privado e criar tag.

## Build e deploy

O projeto esta preparado para deploy estatico/prerenderizado, priorizando baixo custo operacional, carregamento rapido e previsibilidade em producao.

Configuracoes importantes em `nuxt.config.ts`:

- `routeRules: { '/**': { prerender: true } }` habilita prerender para todas as rotas.
- `nitro.prerender.routes` lista rotas importantes, incluindo `/changelog` e paginas de projetos.
- `image.format` prioriza `avif` e `webp`.
- `runtimeConfig.public.appVersion` expoe a versao do `package.json` para a interface.

O diretorio `dist` aponta para `.output/public`, que e a saida publica gerada pelo Nuxt para deploy estatico.
