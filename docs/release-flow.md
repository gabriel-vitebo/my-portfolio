# Fluxo de release

```mermaid
flowchart TD

    A["👨‍💻 Desenvolvimento normal"] --> B["📤 Commit e push"]

    B --> C{"Alteração publicável?"}

    C -->|"Não"| D["Sem release"]

    C -->|"Sim"| E["pnpm changeset"]

    E --> F["Escolher patch / minor / major"]

    F --> G["Escrever descrição pública"]

    G --> H["Commitar .changeset/*.md"]

    H --> I["Merge na main"]

    I --> J["Changesets Action"]

    J --> K["Cria ou atualiza PR<br/>Version Packages"]

    K --> L{"Decisão manual<br/>de lançar?"}

    L -->|"Aguardar"| M["Acumular novos changesets<br/>na mesma PR"]

    M --> I

    L -->|"Merge da PR"| N["package.json e CHANGELOG.md<br/>atualizados na main"]

    N --> O["changeset publish<br/>sem npm publish"]

    O --> P["🏷️ Tag Git<br/>vX.Y.Z"]

    O --> Q["🚀 GitHub Release<br/>vX.Y.Z"]

    N --> R["🌐 Build Nuxt"]

    R --> S["Footer<br/>Vx.y.z"]

    S --> T["Página /changelog"]

    T --> U["Renderiza CHANGELOG.md"]
```

## Implementação

- `.changeset/config.json` define o Changesets como fonte do versionamento manual.
- `.github/workflows/release.yml` usa `changesets/action` para manter a PR `Version Packages`.
- `pnpm changeset` cria um arquivo `.changeset/*.md` com o tipo de versão e a descrição pública.
- `pnpm version` executa `changeset version` e atualiza `package.json`, `pnpm-lock.yaml` e `CHANGELOG.md` na PR de versão.
- `pnpm release` executa `changeset publish`; como o pacote é `private: true`, nada é publicado no npm, mas `privatePackages.tag: true` permite a criação da tag `vX.Y.Z`.
- `package.json` é a fonte da versão exibida no frontend.
- `nuxt.config.ts` expõe `package.json.version` em `runtimeConfig.public.appVersion`.
- `app/components/layout/AppFooter.vue` exibe o link interno `Vx.y.z` para `/changelog`.
- `app/pages/changelog.vue` renderiza o `CHANGELOG.md` real, sem duplicar o conteúdo em TypeScript.
