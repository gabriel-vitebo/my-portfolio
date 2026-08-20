import { describe, expect, it } from 'vitest'
import IndexPage from '~/pages/index.vue'
import { portfolio } from '~/data/portfolio'
import { mountForSnapshot } from '../../../tests/support/mount'

describe('index page', () => {
  it('renders the main portfolio sections', () => {
    const wrapper = mountForSnapshot(IndexPage)

    expect(wrapper.text()).toContain(portfolio.hero.name)
    expect(wrapper.find('#hero').exists()).toBe(true)
    expect(wrapper.find('#projects').exists()).toBe(true)
  })
})
