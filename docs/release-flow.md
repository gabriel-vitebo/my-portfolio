# Fluxo de release

```mermaid
flowchart TD

    A["👨‍💻 Desenvolvedor<br/>git commit"] --> B["📤 Push para main"]

    B --> C["⚙️ GitHub Actions"]

    C --> D["🔍 semantic-release<br/>Analisa os commits"]

    D --> E["📈 Determina versão<br/>Major / Minor / Patch"]

    E --> F["📝 Atualiza CHANGELOG.md"]

    E --> G["📦 Atualiza package.json<br/>version"]

    E --> H["🏷️ Cria Tag Git<br/>vX.Y.Z"]

    E --> I["🚀 Cria GitHub Release"]

    F --> J["🌐 Build Nuxt"]

    G --> J

    J --> K["📤 Deploy"]

    K --> L["👤 Usuário acessa o site"]

    L --> M["Footer<br/>V1.4.0"]

    M --> N["Página /changelog"]

    N --> O["Renderiza CHANGELOG.md"]
```

## Implementação

- `release.config.cjs` define as regras de Semantic Versioning, o formato do changelog e os plugins do semantic-release.
- `.github/workflows/release.yml` executa o release em pushes para `main`, com `fetch-depth: 0` para preservar histórico e tags.
- `package.json` é a fonte da versão exibida no frontend.
- `nuxt.config.ts` expõe `package.json.version` em `runtimeConfig.public.appVersion`.
- `app/components/layout/AppFooter.vue` exibe o link interno `Vx.y.z` para `/changelog`.
- `app/pages/changelog.vue` renderiza o `CHANGELOG.md` real, sem duplicar o conteúdo em TypeScript.
