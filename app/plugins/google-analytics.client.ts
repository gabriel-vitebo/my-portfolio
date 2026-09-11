declare global {
  interface Window {
    gtag?: (
      command: 'config',
      targetId: string,
      config?: Record<string, string>,
    ) => void
  }
}

export default defineNuxtPlugin(() => {
  const runtimeGaId = useRuntimeConfig().public.gaId

  if (typeof runtimeGaId !== 'string' || !runtimeGaId) {
    return
  }

  const gaId = runtimeGaId
  const router = useRouter()

  useScriptGoogleAnalytics({
    id: gaId,
  })

  router.afterEach(async (to) => {
    await nextTick()

    window.gtag?.('config', gaId, {
      page_path: to.fullPath,
      page_location: window.location.origin + to.fullPath,
      page_title: document.title,
    })
  })
})
