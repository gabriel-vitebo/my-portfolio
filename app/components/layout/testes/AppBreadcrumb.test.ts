import { describe, expect, it } from 'vitest'
import AppBreadcrumb from '~/components/layout/AppBreadcrumb.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const items = [
  { label: 'Inicio', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Portfolio' },
]

describe('AppBreadcrumb', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AppBreadcrumb, {
      props: { items },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders linked ancestors and the current page as text', () => {
    const wrapper = mountForSnapshot(AppBreadcrumb, {
      props: { items },
    })

    const links = wrapper.findAll('a')
    const currentPage = wrapper.findAll('span').at(-1)

    expect(wrapper.get('nav').attributes('aria-label')).toBe('Caminho da página')
    expect(links).toHaveLength(2)
    expect(links[0]!.attributes('href')).toBe('/')
    expect(links[1]!.attributes('href')).toBe('/projetos')
    expect(currentPage?.text()).toBe('Portfolio')
  })
})
