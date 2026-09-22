import { describe, expect, it } from 'vitest'
import EducationCards from '~/components/about/EducationCards.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const items = [
  {
    title: 'Design Gráfico',
    institution: 'UNICID',
    status: 'Concluído em 2019',
    icon: 'lucide:palette',
  },
  {
    title: 'Ciência da Computação',
    institution: 'ETEP',
    status: 'Em andamento',
    icon: 'lucide:graduation-cap',
  },
  {
    title: 'Engenharia de Software com IA Aplicada',
    institution: 'UNIPDS',
    status: 'Em andamento',
    icon: 'lucide:brain-circuit',
  },
]

describe('EducationCards', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(EducationCards, {
      props: { items },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders education cards', () => {
    const wrapper = mountForSnapshot(EducationCards, {
      props: { items },
    })

    expect(wrapper.findAll('article')).toHaveLength(items.length)
    expect(wrapper.text()).toContain('Design Gráfico')
    expect(wrapper.text()).toContain('Em andamento')
    expect(wrapper.text()).toContain('Engenharia de Software com IA Aplicada')
  })
})
