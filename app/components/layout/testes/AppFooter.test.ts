import { describe, expect, it } from 'vitest'
import AppFooter from '~/components/layout/AppFooter.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('AppFooter', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(AppFooter, {
      props: { name: 'Gabriel Vitebo' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the owner name and changelog version link', () => {
    const wrapper = mountForSnapshot(AppFooter, {
      props: { name: 'Gabriel Vitebo' },
    })

    expect(wrapper.text()).toContain('Gabriel Vitebo')
    expect(wrapper.get('a[href="/changelog"]').text()).toBe('V1.0.1-test')
  })
})
