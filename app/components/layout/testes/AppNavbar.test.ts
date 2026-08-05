import { describe, expect, it } from 'vitest'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('AppNavbar', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AppNavbar, {
      props: { name: 'Gabriel Vitebo' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the main navigation links', () => {
    const wrapper = mountForSnapshot(AppNavbar, {
      props: { name: 'Gabriel Vitebo' },
    })

    expect(wrapper.get('a[href="/#hero"]').text()).toContain('Gabriel Vitebo')
    expect(wrapper.text()).toContain('Projetos')
    expect(wrapper.text()).toContain('Sobre')
    expect(wrapper.get('a[href="/changelog"]').text()).toBe('Changelog')
  })
})
