import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Pagination from '../Pagination.vue'

describe('Pagination', () => {
  it.each([0, 1])('hides controls for %i pages', totalPages => {
    expect(mount(Pagination, { props: { page: 1, totalPages } }).find('nav').exists()).toBe(false)
  })

  it('supports direct selection, previous and next with disabled boundaries', async () => {
    const wrapper = mount(Pagination, { props: { page: 1, totalPages: 3, label: 'Paginação dos projetos' } })
    const previous = () => wrapper.get('button[aria-label="Página anterior"]')
    const next = () => wrapper.get('button[aria-label="Próxima página"]')
    expect(wrapper.get('nav').attributes('aria-label')).toBe('Paginação dos projetos')
    expect(previous().attributes('disabled')).toBeDefined()
    await previous().trigger('click')
    expect(wrapper.emitted('update:page')).toBeUndefined()
    await next().trigger('click')
    expect(wrapper.emitted('update:page')?.at(-1)).toEqual([2])
    await wrapper.setProps({ page: 2 })
    await previous().trigger('click')
    expect(wrapper.emitted('update:page')?.at(-1)).toEqual([1])
    await wrapper.get('button[aria-label="Página 3"]').trigger('click')
    expect(wrapper.emitted('update:page')?.at(-1)).toEqual([3])
    await wrapper.setProps({ page: 3 })
    expect(wrapper.get('[aria-current="page"]').text()).toBe('3')
    expect(next().attributes('disabled')).toBeDefined()
    const events = wrapper.emitted('update:page')?.length
    await next().trigger('click')
    expect(wrapper.emitted('update:page')).toHaveLength(events!)
    expect(wrapper.find('a').exists()).toBe(false)
  })

  it.each([1, 2, 3, 4, 50, 98, 99, 100])('limits controls around page %i', page => {
    const wrapper = mount(Pagination, { props: { page, totalPages: 100 } })
    expect(wrapper.findAll('button').length).toBeLessThanOrEqual(6)
    expect(wrapper.get('[aria-current="page"]').text()).toBe(String(page))
    expect(wrapper.text()).toContain('…')
    expect(wrapper.find('[aria-label="Página 1"]').exists()).toBe(true)
    expect(wrapper.find('[aria-label="Página 100"]').exists()).toBe(true)
  })
})
