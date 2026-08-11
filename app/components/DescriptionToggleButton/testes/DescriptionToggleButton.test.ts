import { describe, expect, it } from 'vitest'
import DescriptionToggleButton from '~/components/DescriptionToggleButton/index.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('DescriptionToggleButton', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(DescriptionToggleButton, {
      props: {
        controls: 'project-description',
        expanded: false,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the collapsed state with accessible attributes', () => {
    const wrapper = mountForSnapshot(DescriptionToggleButton, {
      props: {
        controls: 'project-description',
        expanded: false,
      },
    })

    expect(wrapper.get('button').text()).toBe('Leia mais')
    expect(wrapper.get('button').attributes('aria-controls')).toBe('project-description')
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false')
  })

  it('renders the expanded state and emits toggle on click', async () => {
    const wrapper = mountForSnapshot(DescriptionToggleButton, {
      props: {
        controls: 'project-description',
        expanded: true,
      },
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.get('button').text()).toBe('Ler menos')
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true')
    expect(wrapper.emitted('toggle')).toHaveLength(1)
  })
})
