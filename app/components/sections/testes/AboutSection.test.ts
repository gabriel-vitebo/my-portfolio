import { describe, expect, it } from 'vitest'
import AboutSection from '~/components/sections/AboutSection.vue'
import { about, socials } from '~/data/profile'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('AboutSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutSection, {
      props: { about, socials },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders paragraphs, socials, and highlights', () => {
    const wrapper = mountForSnapshot(AboutSection, {
      props: { about, socials },
    })

    expect(wrapper.text()).toContain(about.title)
    expect(wrapper.findAll('p')).toHaveLength(about.paragraphs.length + 1)
    expect(wrapper.findAll('a[target="_blank"]').length).toBe(socials.length + about.highlights.length)
  })
})
