import { describe, expect, it } from 'vitest'
import WorkPrinciples from '~/components/about/WorkPrinciples.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const principles = [
  {
    title: 'Problema primeiro',
    description: 'Antes de codar, procuro entender contexto, objetivo e impacto da solução.',
    icon: 'lucide:search-check',
  },
  {
    title: 'Detalhes importam',
    description: 'Performance, acessibilidade, responsividade e manutenção entram na decisão.',
    icon: 'lucide:sliders-horizontal',
  },
]

describe('WorkPrinciples', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(WorkPrinciples, {
      props: { principles },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the work principles', () => {
    const wrapper = mountForSnapshot(WorkPrinciples, {
      props: { principles },
    })

    expect(wrapper.findAll('article')).toHaveLength(principles.length)
    expect(wrapper.text()).toContain('Problema primeiro')
    expect(wrapper.text()).toContain('Detalhes importam')
  })
})
