import { describe, expect, it } from 'vitest'
import AboutWorkSection from '~/components/about/sections/AboutWorkSection.vue'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const principles = [
  {
    title: 'Problema primeiro',
    description: 'Antes de codar, procuro entender contexto, objetivo e impacto da solução.',
    icon: 'lucide:search-check',
  },
]

describe('AboutWorkSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutWorkSection, {
      props: { principles },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders work content and principles', () => {
    const wrapper = mountForSnapshot(AboutWorkSection, {
      props: { principles },
    })

    expect(wrapper.text()).toContain('Mais do que fazer funcionar')
    expect(wrapper.text()).toContain('performance, acessibilidade, responsividade e manutenção')
    expect(wrapper.text()).toContain('Problema primeiro')
  })
})
