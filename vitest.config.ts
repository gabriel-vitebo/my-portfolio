import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    AutoImport({
      dirs: ['./app/composables'],
      imports: [
        'vue',
        {
          '#test-nuxt': [
            'createError',
            'navigateTo',
            'useHead',
            'useRoute',
            'useRuntimeConfig',
            'useSeoMeta',
          ],
        },
      ],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app', import.meta.url)),
      '#test-nuxt': fileURLToPath(new URL('./tests/support/nuxt.ts', import.meta.url)),
      '~': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: [
      'tests/**/*.test.ts',
      'app/components/**/testes/**/*.test.ts',
      'app/composables/**/testes/**/*.test.ts',
      'app/data/**/testes/**/*.test.ts',
      'app/pages/**/testes/**/*.test.ts',
    ],
    setupFiles: ['./tests/setup.ts'],
    typecheck: {
      tsconfig: './tsconfig.vitest.json',
    },
  },
})
