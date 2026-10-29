import { describe, expect, it, vi } from 'vitest'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import { projects } from '~/data/projects'
import { mountForSnapshot } from '../../../../tests/support/mount'

describe('ProjectsSection', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(ProjectsSection, {
      props: { projects, subtitle: 'Projetos em destaque', title: 'Projetos' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a card for each project', () => {
    const wrapper = mountForSnapshot(ProjectsSection, {
      props: { projects, subtitle: 'Projetos em destaque', title: 'Projetos' },
    })

    expect(wrapper.text()).toContain('Projetos em destaque')
    expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(projects.length)
  })
})

const makeProjects = (count: number) => Array.from({ length: count }, (_, index) => ({
  ...projects[0]!, slug: `project-${index}`, title: `Projeto ${index + 1}`,
}))

it.each([0, 6, 7, 12, 13, 15])('renders at most six of %i projects and shows controls only when needed', count => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    props: { projects: makeProjects(count), subtitle: 'Seleção', title: 'Projetos' },
  })
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(Math.min(6, count))
  expect(wrapper.find('[data-search-results-content] nav').exists()).toBe(count > 6)
})

it('changes only the project list and keeps focus in the section without changing the URL', async () => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    attachTo: document.body,
    props: { projects: makeProjects(15), subtitle: 'Seleção', title: 'Projetos' },
  })
  const url = window.location.href
  const scroll = vi.fn()
  wrapper.get('h2').element.scrollIntoView = scroll
  await wrapper.get('[data-search-results-content] [aria-label="Próxima página"]').trigger('click')
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(6)
  expect(wrapper.findAll('[data-search-results-content] article')[0]!.text()).toContain('Projeto 7')
  await wrapper.get('[data-search-results-content] [aria-label="Página 3"]').trigger('click')
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(3)
  expect(wrapper.findAll('[data-search-results-content] article')[0]!.text()).toContain('Projeto 13')
  await wrapper.get('[data-search-results-content] [aria-label="Página anterior"]').trigger('click')
  expect(wrapper.findAll('[data-search-results-content] article')[0]!.text()).toContain('Projeto 7')
  expect(window.location.href).toBe(url)
  expect(document.activeElement).toBe(wrapper.get('h2').element)
  expect(scroll).toHaveBeenCalledWith({ block: 'start', behavior: 'instant' })
  wrapper.unmount()
})

it('filters all pages, resets on every query change and restores the list on clear', async () => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    props: { projects: makeProjects(15), subtitle: 'Seleção', title: 'Projetos' },
  })
  wrapper.get('h2').element.scrollIntoView = vi.fn()
  await wrapper.get('[data-search-results-content] [aria-label="Página 3"]').trigger('click')
  await wrapper.get('input').setValue('Projeto')
  expect(wrapper.get('[data-search-results-baseline]').findAll('article')).toHaveLength(3)
  expect(wrapper.get('[data-search-results-content] [aria-current="page"]').text()).toBe('1')
  await wrapper.get('input').setValue('Projeto 15')
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(1)
  expect(wrapper.get('[data-search-results-content] article').text()).toContain('Projeto 15')
  expect(wrapper.find('[data-search-results-content] nav').exists()).toBe(false)
  await wrapper.get('input').setValue('inexistente')
  expect(wrapper.get('[data-search-results-baseline]').findAll('article')).toHaveLength(3)
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(0)
  expect(wrapper.get('[data-search-results-content] [role="status"]').text()).toBe('Nenhum resultado encontrado para “inexistente”.')
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.get('[aria-label="Limpar pesquisa"]').trigger('click')
  expect(wrapper.get('[data-search-results-baseline]').element.childElementCount).toBe(0)
  expect(wrapper.findAll('[data-search-results-content] article')).toHaveLength(6)
  expect(wrapper.get('[data-search-results-content] article').text()).toContain('Projeto 1')
  expect(wrapper.get('[data-search-results-content] [aria-current="page"]').text()).toBe('1')
})

it('keeps an originally empty list distinct from a search without matches', async () => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    props: { projects: [], subtitle: 'Seleção', title: 'Projetos' },
  })
  await wrapper.get('input').setValue('vue')
  expect(wrapper.text()).not.toContain('Nenhum resultado')
})

it.each([3, 6])('preserves the actual %i-item project page through partial and empty searches', async (count) => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    props: { projects: makeProjects(count), subtitle: 'Seleção', title: 'Projetos' },
  })
  const content = wrapper.get('[data-search-results-content]')
  const baseline = wrapper.get('[data-search-results-baseline]')
  await wrapper.get('input').setValue('Projeto 1')
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
