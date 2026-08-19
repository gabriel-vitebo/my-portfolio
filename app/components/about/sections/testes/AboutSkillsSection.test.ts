import { describe, expect, it } from 'vitest'
import AboutSkillsSection from '~/components/about/sections/AboutSkillsSection.vue'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const primarySkills = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
]

const secondarySkills = [
  { name: 'Java', icon: 'simple-icons:openjdk' },
]

describe('AboutSkillsSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutSkillsSection, {
      props: { primarySkills, secondarySkills },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders skill groups', () => {
    const wrapper = mountForSnapshot(AboutSkillsSection, {
      props: { primarySkills, secondarySkills },
    })

    expect(wrapper.text()).toContain('Tecnologias que fazem parte do meu dia a dia')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Java')
  })
})
