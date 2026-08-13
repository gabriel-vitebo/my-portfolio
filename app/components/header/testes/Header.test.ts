import { describe, expect, it } from 'vitest'
import Header from '~/components/header/index.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('Header', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(Header, {
      props: {
        legend: 'Projetos',
        title: 'Projetos selecionados',
        subtitle: 'Uma selecao de trabalhos recentes.',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders optional legend and subtitle when provided', () => {
    const wrapper = mountForSnapshot(Header, {
      props: {
        legend: 'Blog',
        title: 'Artigos',
        subtitle: 'Notas sobre produto, acessibilidade e frontend.',
      },
    })

    expect(wrapper.get('p.text-subtle').text()).toBe('Blog')
    expect(wrapper.get('h1').text()).toBe('Artigos')
    expect(wrapper.text()).toContain('Notas sobre produto, acessibilidade e frontend.')
  })

  it('omits optional content when legend and subtitle are absent', () => {
    const wrapper = mountForSnapshot(Header, {
      props: { title: 'Changelog' },
    })

    expect(wrapper.get('h1').text()).toBe('Changelog')
    expect(wrapper.findAll('p')).toHaveLength(0)
  })
})
