import { describe, expect, it } from 'vitest'
import { mountForSnapshot } from '../../../../tests/support/mount'
import SearchInput from '../SearchInput.vue'

describe('SearchInput', () => {
  it('renders an accessible input and configurable placeholder', () => {
    const wrapper = mountForSnapshot(SearchInput, { props: { modelValue: '', label: 'Pesquisar itens', placeholder: 'Digite um termo' } })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.get('label').attributes('for')).toBe(wrapper.get('input').attributes('id'))
    expect(wrapper.get('input').attributes('placeholder')).toBe('Digite um termo')
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('emits typed text and clears by button and Escape, returning focus', async () => {
    const wrapper = mountForSnapshot(SearchInput, { attachTo: document.body, props: { modelValue: 'vue', label: 'Pesquisar itens' } })
    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.get('input').setValue('nuxt')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['nuxt'])
    await wrapper.setProps({ modelValue: 'nuxt' })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([''])
    expect(document.activeElement).toBe(wrapper.get('input').element)
    await wrapper.get('input').trigger('keydown', { key: 'Escape' })
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([''])
    wrapper.unmount()
  })
})
