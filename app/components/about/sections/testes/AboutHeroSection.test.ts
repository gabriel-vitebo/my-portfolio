import { describe, expect, it } from 'vitest'
import AboutHeroSection from '~/components/about/sections/AboutHeroSection.vue'
import { hero, socials } from '~/data/profile'
import { mountForSnapshot } from '../../../../../tests/support/mount'

describe('AboutHeroSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutHeroSection, {
      props: {
        image: hero.image,
        name: hero.name,
        socials,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the hero content', () => {
    const wrapper = mountForSnapshot(AboutHeroSection, {
      props: {
        image: hero.image,
        name: hero.name,
        socials,
      },
    })

    expect(wrapper.find('section#sobre-mim').exists()).toBe(true)
    expect(wrapper.text()).toContain('Olá, eu sou o Gabriel')
    expect(wrapper.get('img').attributes('alt')).toBe(hero.name)
  })
})
