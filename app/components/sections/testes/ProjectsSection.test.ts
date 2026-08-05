import { describe, expect, it } from 'vitest'
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
