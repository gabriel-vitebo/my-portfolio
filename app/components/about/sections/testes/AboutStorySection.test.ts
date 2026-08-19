import { describe, expect, it } from 'vitest'
import AboutStorySection from '~/components/about/sections/AboutStorySection.vue'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const milestones = [
  {
    label: 'Formação',
    title: 'Tecnologia + Design',
    description: 'ADS e Design Gráfico se encontrando naturalmente no front-end.',
    icon: 'lucide:graduation-cap',
  },
]

describe('AboutStorySection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutStorySection, {
      props: { milestones },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders story content and timeline', () => {
    const wrapper = mountForSnapshot(AboutStorySection, {
      props: { milestones },
    })

    expect(wrapper.text()).toContain('Um pouco da minha história')
    expect(wrapper.text()).toContain('Quero Educação')
    expect(wrapper.text()).toContain('Tecnologia + Design')
  })
})
