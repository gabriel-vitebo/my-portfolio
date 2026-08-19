import { describe, expect, it } from 'vitest'
import AboutContactSection from '~/components/about/sections/AboutContactSection.vue'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const contactLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/gabriel-vitebo',
    icon: 'simple-icons:github',
  },
  {
    label: 'contact@gabrielvitebo.dev',
    url: 'mailto:contact@gabrielvitebo.dev',
    icon: 'lucide:mail',
  },
]

describe('AboutContactSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AboutContactSection, {
      props: { contactLinks },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders contact links and projects link', () => {
    const wrapper = mountForSnapshot(AboutContactSection, {
      props: { contactLinks },
    })

    expect(wrapper.text()).toContain('Vamos construir alguma coisa juntos?')
    expect(wrapper.findAll('a[target="_blank"]')).toHaveLength(contactLinks.length)
    expect(wrapper.get('a[href="/#projects"]').text()).toContain('Veja meus projetos')
  })
})
