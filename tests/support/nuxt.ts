import { reactive } from 'vue'
import { vi } from 'vitest'

export const route = reactive({
  fullPath: '/',
  hash: '',
  params: {} as Record<string, string>,
  path: '/',
})

export const navigateTo = vi.fn()
export const useHead = vi.fn()
export const useSeoMeta = vi.fn()

export function useRoute() {
  return route
}

export function useRuntimeConfig() {
  return {
    public: {
      appVersion: '1.0.1-test',
    },
  }
}

export function createError(error: { statusCode: number, statusMessage: string }) {
  return Object.assign(new Error(error.statusMessage), error)
}
