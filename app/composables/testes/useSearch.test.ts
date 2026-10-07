import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useSearch } from '~/composables/useSearch'
import { getBlogSearchFields, getProjectSearchFields } from '~/utils/searchFields'
import { projects } from '~/data/projects'
import { blogArticles } from '~/data/blog'
import { skills } from '~/data/skills'
import type { Project } from '~/types/portfolio'

describe('useSearch', () => {
  it.each(['aplicacao', ' APLICAÇÃO ', 'aplica', '  aplicacao   typescript '])('normalizes and matches %s across fields', query => {
    const item = { title: 'Aplicação', description: 'TypeScript' }
    const search = useSearch([item], item => [item.title, item.description])
    search.query.value = query
    expect(search.filteredItems.value).toEqual([item])
  })

  it('requires all terms, restores original order and reacts to changed data', () => {
    const items = ref(['Vue', 'React'])
    const fields = vi.fn((item: string) => [item])
    const search = useSearch(items, fields)
    search.query.value = 'vue'
    expect(search.filteredItems.value).toEqual(['Vue'])
    search.query.value = 'vue react'
    expect(search.filteredItems.value).toEqual([])
    expect(fields).toHaveBeenCalledTimes(2)
    items.value.push('Vue React')
    expect(search.filteredItems.value).toEqual(['Vue React'])
    search.query.value = '  '
    expect(search.filteredItems.value).toEqual(items.value)
    items.value = []
    expect(search.filteredItems.value).toEqual([])
  })

  it('resolves Vue through the real catalog without a title or description mention', () => {
    const fixture: Project = { ...projects[0]!, title: 'Exemplo', shortDescription: '', description: '', technologies: ['vue', 'typescript'] }
    const search = useSearch([fixture], getProjectSearchFields)
    for (const query of ['vue', skills.vue.name, 'frontend', 'vue typescript']) {
      search.query.value = query
      expect(search.filteredItems.value).toEqual([fixture])
    }
  })

  it('searches all registered project technology IDs, names, categories and editorial labels', () => {
    for (const project of projects) {
      const search = useSearch([project], getProjectSearchFields)
      for (const id of project.technologies) {
        for (const query of [id, skills[id].name, skills[id].category, project.technologyLabels?.[id] ?? id]) {
          search.query.value = query
          expect(search.filteredItems.value).toEqual([project])
        }
      }
    }
    const search = useSearch(projects, getProjectSearchFields)
    search.query.value = 'Tailwind CSS'
    expect(search.filteredItems.value.map(item => item.slug)).toContain('curriculo-ai')
  })

  it('searches titles and both project descriptions', () => {
    const fixture = { ...projects[0]!, title: 'Título especial', shortDescription: 'Resumo único', description: 'Detalhamento completo' }
    const search = useSearch([fixture], getProjectSearchFields)
    for (const query of ['titulo', 'resumo', 'detalhamento']) {
      search.query.value = query
      expect(search.filteredItems.value).toEqual([fixture])
    }
  })

  it('isolates blog and project datasets and query state', () => {
    const blogs = useSearch(blogArticles, getBlogSearchFields)
    const portfolio = useSearch(projects, getProjectSearchFields)
    blogs.query.value = 'HTML semantico'
    expect(blogs.filteredItems.value.map(item => item.slug)).toEqual(['html-semantico'])
    expect(portfolio.filteredItems.value).toEqual(projects)
    blogs.query.value = 'Food Explorer'
    expect(blogs.filteredItems.value).toEqual([])
    portfolio.query.value = 'TensorFlow'
    expect(portfolio.filteredItems.value).toEqual([])
    blogs.query.value = 'tensores'
    expect(blogs.filteredItems.value.map(item => item.shortSlug)).toEqual(['filmes-tensorflow-js'])
  })
})
