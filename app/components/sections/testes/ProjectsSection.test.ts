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
    expect(wrapper.findAll('article')).toHaveLength(projects.length)
  })
})

const makeProjects = (count: number) => Array.from({ length: count }, (_, index) => ({
  ...projects[0]!, slug: `project-${index}`, title: `Projeto ${index + 1}`,
}))

it.each([0, 6, 7, 12, 13, 15])('renders at most six of %i projects and shows controls only when needed', count => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    props: { projects: makeProjects(count), subtitle: 'Seleção', title: 'Projetos' },
  })
  expect(wrapper.findAll('article')).toHaveLength(Math.min(6, count))
  expect(wrapper.find('nav').exists()).toBe(count > 6)
})

it('changes only the project list and keeps focus in the section without changing the URL', async () => {
  const wrapper = mountForSnapshot(ProjectsSection, {
    attachTo: document.body,
    props: { projects: makeProjects(15), subtitle: 'Seleção', title: 'Projetos' },
  })
  const url = window.location.href
  const scroll = vi.fn()
  wrapper.get('h2').element.scrollIntoView = scroll
  await wrapper.get('[aria-label="Próxima página"]').trigger('click')
  expect(wrapper.findAll('article')).toHaveLength(6)
  expect(wrapper.findAll('article')[0]!.text()).toContain('Projeto 7')
  await wrapper.get('[aria-label="Página 3"]').trigger('click')
  expect(wrapper.findAll('article')).toHaveLength(3)
  expect(wrapper.findAll('article')[0]!.text()).toContain('Projeto 13')
  await wrapper.get('[aria-label="Página anterior"]').trigger('click')
  expect(wrapper.findAll('article')[0]!.text()).toContain('Projeto 7')
  expect(window.location.href).toBe(url)
  expect(document.activeElement).toBe(wrapper.get('h2').element)
  expect(scroll).toHaveBeenCalledWith({ block: 'start', behavior: 'instant' })
  wrapper.unmount()
})
