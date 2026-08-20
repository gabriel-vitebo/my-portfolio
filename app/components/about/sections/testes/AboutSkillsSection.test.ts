import { describe, expect, it } from 'vitest'
import AboutSkillsSection from '~/components/about/sections/AboutSkillsSection.vue'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const frontEndSkills = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
]

const backEndSkills = [
  { name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails' },
]

const toolSkills = [
  { name: 'Git', icon: 'simple-icons:git' },
]

describe('AboutSkillsSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutSkillsSection, {
      props: { frontEndSkills, backEndSkills, toolSkills },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders skill groups', () => {
    const wrapper = mountForSnapshot(AboutSkillsSection, {
      props: { frontEndSkills, backEndSkills, toolSkills },
    })

    expect(wrapper.text()).toContain('Tecnologias que fazem parte do meu dia a dia')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Ruby on Rails')
    expect(wrapper.text()).toContain('Git')
  })
})
