import { afterEach, expect, it } from 'vitest'
import BlogPage from '~/pages/blog/index.vue'
import { blogArticles } from '~/data/blog'
import { mountForSnapshot } from '../../../tests/support/mount'

const original = [...blogArticles]
afterEach(() => blogArticles.splice(0, blogArticles.length, ...original))

it('searches across all blog pages, resets pagination, paginates matches and restores on clear', async () => {
  blogArticles.splice(0, blogArticles.length, ...Array.from({ length: 15 }, (_, index) => ({
    ...original[0]!, slug: `article-${index}`, title: `Artigo ${index + 1}`, description: 'Descrição pesquisável',
  })))
  const wrapper = mountForSnapshot(BlogPage)
  await wrapper.get('[data-search-results-content] [aria-label="Página 3"]').trigger('click')
  await wrapper.get('input').setValue('descricao')
  expect(wrapper.get('[data-search-results-baseline]').findAll('article')).toHaveLength(3)
  expect(wrapper.get('[data-search-results-content] [aria-current="page"]').text()).toBe('1')
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(6)
  await wrapper.get('input').setValue('Artigo 15')
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(1)
  expect(wrapper.get('[data-search-results-content] article').text()).toContain('Artigo 15')
  await wrapper.get('input').setValue('inexistente')
  expect(wrapper.get('[data-search-results-baseline]').findAll('article')).toHaveLength(3)
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(0)
  expect(wrapper.text()).toContain('Nenhum resultado encontrado para “inexistente”.')
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.get('[aria-label="Limpar pesquisa"]').trigger('click')
  expect(wrapper.get('[data-search-results-baseline]').element.childElementCount).toBe(0)
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(6)
  expect(wrapper.get('[data-search-results-content] article').text()).toContain('Artigo 1')
  expect(wrapper.get('[data-search-results-content] [aria-current="page"]').text()).toBe('1')
  wrapper.unmount()
})

it('preserves the originally empty blog list', async () => {
  blogArticles.splice(0)
  const wrapper = mountForSnapshot(BlogPage)
  await wrapper.get('input').setValue('vue')
  expect(wrapper.text()).not.toContain('Nenhum resultado')
  wrapper.unmount()
})

it.each([3, 6])('preserves the actual %i-item blog page through partial and empty searches', async (count) => {
  blogArticles.splice(0, blogArticles.length, ...original.slice(0, count))
  const wrapper = mountForSnapshot(BlogPage)
  const content = wrapper.get('[data-search-results-content]')
  const baseline = wrapper.get('[data-search-results-baseline]')
  await wrapper.get('input').setValue('MCP')
  expect(content.findAll('article')).toHaveLength(1)
  expect(baseline.findAll('article')).toHaveLength(count)
  await wrapper.get('input').setValue('ausente')
  expect(content.findAll('article')).toHaveLength(0)
  expect(content.text()).toContain('Nenhum resultado encontrado')
  expect(baseline.findAll('article')).toHaveLength(count)
  await wrapper.get('input').setValue('')
  expect(content.findAll('article')).toHaveLength(count)
  expect(baseline.element.childElementCount).toBe(0)
  wrapper.unmount()
})
