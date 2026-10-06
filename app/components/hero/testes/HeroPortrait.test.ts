import { describe, expect, it } from 'vitest'
import HeroPortrait from '~/components/hero/HeroPortrait.vue'
import { socials } from '~/data/profile'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('HeroPortrait', () => {
  it('keeps the registered icon when the display label changes', () => {
    const wrapper = mountForSnapshot(HeroPortrait, {
      props: {
        src: '/images/profile/my-photo.png',
        alt: 'Gabriel Vitebo',
        socials: [{ ...socials[0]!, label: 'Código' }],
      },
    })
    expect(wrapper.get('nav a').attributes('aria-label')).toBe('Código')
    expect(wrapper.get('[data-icon]').attributes('data-icon')).toBe('simple-icons:github')
  })

  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(HeroPortrait, {
      props: {
        src: '/images/profile/my-photo.png',
        alt: 'Gabriel Vitebo',
        socials,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the image with accessible text', () => {
    const wrapper = mountForSnapshot(HeroPortrait, {
      props: {
        src: '/images/profile/my-photo.png',
        alt: 'Gabriel Vitebo',
        socials,
      },
    })

    const image = wrapper.get('img')

    expect(image.attributes('src')).toBe('/images/profile/my-photo.png')
    expect(image.attributes('alt')).toBe('Gabriel Vitebo')
  })

  it('renders social links anchored to the portrait', () => {
    const wrapper = mountForSnapshot(HeroPortrait, {
      props: {
        src: '/images/profile/my-photo.png',
        alt: 'Gabriel Vitebo',
        socials,
      },
    })

    const links = wrapper.findAll('nav a')

    expect(links).toHaveLength(socials.length)
    expect(links.map(link => link.attributes('href'))).toEqual(socials.map(social => social.url))
  })
})
