import { describe, expect, it } from 'vitest'
import AboutSkills from '~/components/about/AboutSkills.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const frontEndSkills = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Nuxt', icon: 'simple-icons:nuxt' },
]

const backEndSkills = [
  { name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
]

const toolSkills = [
  { name: 'Git', icon: 'simple-icons:git' },
]

describe('AboutSkills', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutSkills, {
      props: { frontEndSkills, backEndSkills, toolSkills },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders front-end, back-end and tooling skills', () => {
    const wrapper = mountForSnapshot(AboutSkills, {
      props: { frontEndSkills, backEndSkills, toolSkills },
    })

    expect(wrapper.text()).toContain('Front-end')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Back-end')
    expect(wrapper.text()).toContain('Ruby on Rails')
    expect(wrapper.text()).toContain('Ferramentas & Ecossistema')
    expect(wrapper.text()).toContain('Git')
  })
})
