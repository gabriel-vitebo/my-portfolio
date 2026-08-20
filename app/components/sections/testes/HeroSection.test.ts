import { describe, expect, it } from 'vitest'
import HeroSection from '~/components/sections/HeroSection.vue'
import { hero, socials } from '~/data/profile'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('HeroSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(HeroSection, {
      props: { hero, socials },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the hero content and calls to action', () => {
    const wrapper = mountForSnapshot(HeroSection, {
      props: { hero, socials },
    })

    expect(wrapper.text()).toContain(hero.name)
    expect(wrapper.text()).toContain(hero.role)
    expect(wrapper.get('img').attributes('alt')).toBe(hero.name)
    expect(wrapper.text()).toContain('Ver projetos')
    expect(wrapper.text()).toContain('Sobre mim')
  })
})
