export const useSectionNavigation = () => {
  const route = useRoute()

  const scrollToSection = async (sectionId: string) => {
    const hash = `#${sectionId}`

    if (route.path !== '/') {
      await navigateTo({ path: '/', hash })
    }
    else if (route.hash !== hash) {
      await navigateTo({ path: '/', hash })
    }

    await nextTick()

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return {
    scrollToSection,
  }
}
