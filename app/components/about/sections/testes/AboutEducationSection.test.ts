import { describe, expect, it } from 'vitest'
import AboutEducationSection from '~/components/about/sections/AboutEducationSection.vue'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const items = [
  {
    title: 'Explorer Full Stack',
    institution: 'Rocketseat',
    status: 'Concluído em 2023',
    icon: 'lucide:rocket',
  },
]

describe('AboutEducationSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutEducationSection, {
      props: { items },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders education content', () => {
    const wrapper = mountForSnapshot(AboutEducationSection, {
      props: { items },
    })

    expect(wrapper.text()).toContain('Formações')
    expect(wrapper.text()).toContain('Explorer Full Stack')
    expect(wrapper.text()).toContain('Rocketseat')
  })
})
