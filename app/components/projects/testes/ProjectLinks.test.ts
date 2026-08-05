import { describe, expect, it } from 'vitest'
import ProjectLinks from '~/components/projects/ProjectLinks.vue'
import { projects } from '~/data/projects'
import { mountForSnapshot } from '../../../../tests/support/mount'

const project = projects.find(project => project.demoUrl)!

describe('ProjectLinks', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(ProjectLinks, {
      props: { demoUrl: project.demoUrl, githubLinks: project.githubLinks },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders github links and demo link', () => {
    const wrapper = mountForSnapshot(ProjectLinks, {
      props: { demoUrl: project.demoUrl, githubLinks: project.githubLinks },
    })

    expect(wrapper.text()).toContain('GitHub')
    expect(wrapper.text()).toContain('Demo')
    expect(wrapper.findAll('a[target="_blank"]')).toHaveLength(project.githubLinks.length + 1)
  })
})
