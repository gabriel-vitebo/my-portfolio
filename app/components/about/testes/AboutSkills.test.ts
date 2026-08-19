import { describe, expect, it } from 'vitest'
import AboutSkills from '~/components/about/AboutSkills.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const primarySkills = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Nuxt', icon: 'simple-icons:nuxt' },
]

const secondarySkills = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Java', icon: 'simple-icons:openjdk' },
]

describe('AboutSkills', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutSkills, {
      props: { primarySkills, secondarySkills },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders primary and secondary skills', () => {
    const wrapper = mountForSnapshot(AboutSkills, {
      props: { primarySkills, secondarySkills },
    })

    expect(wrapper.text()).toContain('Principais')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Também trabalho/já trabalhei com')
    expect(wrapper.text()).toContain('Java')
  })
})
