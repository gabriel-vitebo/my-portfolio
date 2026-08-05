import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useSectionNavigation } from '~/composables/useSectionNavigation'
import { navigateTo, route } from '../../../tests/support/nuxt'

describe('useSectionNavigation', () => {
  beforeEach(() => {
    navigateTo.mockClear()
    route.path = '/'
    route.hash = ''
    document.body.innerHTML = '<section id="projects"></section>'
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
  })

  it('navigates to home with hash before scrolling when route is not home', async () => {
    route.path = '/changelog'
    const scrollIntoView = vi.fn()
    document.getElementById('projects')!.scrollIntoView = scrollIntoView

    await useSectionNavigation().scrollToSection('projects')

    expect(navigateTo).toHaveBeenCalledWith({ path: '/', hash: '#projects' })
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
  })

  it('does not navigate when already on the target hash', async () => {
    route.hash = '#projects'

    await useSectionNavigation().scrollToSection('projects')

    expect(navigateTo).not.toHaveBeenCalled()
  })
})
