import { describe, expect, it } from 'vitest'
import AboutTimeline from '~/components/about/AboutTimeline.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const items = [
  {
    label: 'Formação',
    title: 'Tecnologia + Design',
    description: 'ADS e Design Gráfico se encontrando naturalmente no front-end.',
    icon: 'lucide:graduation-cap',
  },
  {
    label: 'Agora',
    title: 'Ciência da Computação',
    description: 'Estudo contínuo, projetos próprios e aprendizados compartilhados no blog.',
    icon: 'lucide:sparkles',
    highlight: true,
  },
]

describe('AboutTimeline', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutTimeline, {
      props: { items },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the timeline items', () => {
    const wrapper = mountForSnapshot(AboutTimeline, {
      props: { items },
    })

    expect(wrapper.findAll('li')).toHaveLength(items.length)
    expect(wrapper.text()).toContain('Tecnologia + Design')
    expect(wrapper.text()).toContain('Ciência da Computação')
  })
})
