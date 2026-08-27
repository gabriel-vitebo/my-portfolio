# Changelog

## 2.1.1

### Patch Changes

- [#31](https://github.com/gabriel-vitebo/my-portfolio/pull/31) [`ef6fcc0`](https://github.com/gabriel-vitebo/my-portfolio/commit/ef6fcc04f3512dbb5d3ee85b7661339537842ff3) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - Corrige e enriquece os dados estruturados Schema.org do portfólio

  - Define a identidade global como Person usando a configuração oficial do Nuxt Schema.org
  - Configura o idioma global do site como pt-BR no Nuxt SEO/Site Config
  - Conecta a página /sobre-mim à identidade global usando ProfilePage
  - Adiciona descrição e imagem pública à entidade Person

- [#31](https://github.com/gabriel-vitebo/my-portfolio/pull/31) [`05b765e`](https://github.com/gabriel-vitebo/my-portfolio/commit/05b765e6a9d95256115d54a2f2078485eb80311c) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - ðŸ”§ ManutenÃ§Ã£o: padroniza metadados, sitemap e dados estruturados com Nuxt SEO.

## 2.1.0

### Minor Changes

- [#29](https://github.com/gabriel-vitebo/my-portfolio/pull/29) [`0224a17`](https://github.com/gabriel-vitebo/my-portfolio/commit/0224a17735adef6cd0896263d14323636ed709a4) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - ✨ Adiciona página "Sobre mim" ao portfólio.

  Inclui:

  - nova rota `/sobre-mim` com seções de apresentação, trajetória, trabalho, habilidades, formação e contato;
  - atualização da navegação para apontar para a nova página;
  - ajustes visuais, SEO, ícones e testes unitários dos novos componentes.

- [#26](https://github.com/gabriel-vitebo/my-portfolio/pull/26) [`895dc8f`](https://github.com/gabriel-vitebo/my-portfolio/commit/895dc8fe3b0a8d71fc9bf0baa64062ce31739840) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - Adiciona artigo sobre HTML semântico e suporte a destaque de sintaxe no blog.

### Patch Changes

- [#24](https://github.com/gabriel-vitebo/my-portfolio/pull/24) [`fd0bfa9`](https://github.com/gabriel-vitebo/my-portfolio/commit/fd0bfa9da17a5b2eb0837cdb1f1dcf080f583dd2) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - - Fixed inconsistent button colors on production by using plain links with explicit Tailwind classes.
  - Updated related snapshots.

## 2.0.0

### Major Changes

- [#21](https://github.com/gabriel-vitebo/my-portfolio/pull/21) [`9536516`](https://github.com/gabriel-vitebo/my-portfolio/commit/953651663ba4075d570d8c59cd7948cb6c4c627f) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - ✨ Segunda versão oficial do portfólio.

  Inclui:

  - criação da área de blog com listagem, página de artigo e metadados;
  - publicação dos primeiros artigos do blog, incluindo conteúdo sobre a construção do portfólio;
  - adição de cards de blog com imagem, data de publicação e melhor apresentação visual;
  - melhorias na navegação com breadcrumbs, links atualizados e layout mais responsivo;
  - ajuste de espaçamentos nas páginas de blog, changelog e detalhes de projeto;
  - adição do botão de expandir descrição nos projetos;
  - configuração de rotas dinâmicas de projetos para prerender no Nuxt;
  - ampliação da cobertura de testes unitários, snapshots e workflow de testes.

## 1.0.1

### Patch Changes

- [`779ac1b`](https://github.com/gabriel-vitebo/my-portfolio/commit/779ac1b689eb443a91cb0364bad564be82115fac) - 💄 Interface: migra componentes e estilos para Nuxt UI e utilitários Tailwind.

  Inclui:

  - adição e uso do Nuxt UI como base de componentes;
  - refatoração dos estilos para utilitários Tailwind;
  - atualização do tratamento de imagens e formatos nos componentes de mídia;
  - ajustes de layout e consistência visual das seções;
  - liberação de builds do `vue-demi` no workspace.

## 1.0.0

### Major Changes

- [#13](https://github.com/gabriel-vitebo/my-portfolio/pull/13) [`758a635`](https://github.com/gabriel-vitebo/my-portfolio/commit/758a635e87c5ba00a55a555be145de3362707741) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - ✨ Primeira versão oficial do portfólio.

  Inclui:

  - sistema de versionamento com Changesets;
  - página pública de changelog;
  - exibição da versão atual no footer;
  - documentação da arquitetura;
  - processo automatizado de releases.

### Minor Changes

- [#13](https://github.com/gabriel-vitebo/my-portfolio/pull/13) [`758a635`](https://github.com/gabriel-vitebo/my-portfolio/commit/758a635e87c5ba00a55a555be145de3362707741) Thanks [@gabriel-vitebo](https://github.com/gabriel-vitebo)! - 🔧 Manutenção: substitui o fluxo automático de semantic-release por releases manuais com Changesets.

Todas as mudanças relevantes deste portfólio são documentadas aqui.
