import { describe, expect, it } from 'vitest'
import ProjectCard from '~/components/projects/ProjectCard.vue'
import { projects } from '~/data/projects'
import { mountForSnapshot } from '../../../../tests/support/mount'

const project = projects[0]!

describe('ProjectCard', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(ProjectCard, {
      props: { project },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('links to the project detail page', () => {
    const wrapper = mountForSnapshot(ProjectCard, {
      props: { project },
    })

    expect(wrapper.get('a').attributes('href')).toBe(`/projetos/${project.slug}`)
    expect(wrapper.get('img').attributes('alt')).toBe(project.title)
  })
})
