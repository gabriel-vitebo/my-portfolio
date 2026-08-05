import { describe, expect, it } from 'vitest'
import ProjectTechnologies from '~/components/projects/ProjectTechnologies.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const technologies = ['Nuxt', 'TypeScript', 'Tailwind CSS']

describe('ProjectTechnologies', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(ProjectTechnologies, {
      props: { technologies },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders all technologies with the default aria label', () => {
    const wrapper = mountForSnapshot(ProjectTechnologies, {
      props: { technologies },
    })

    expect(wrapper.get('ul').attributes('aria-label')).toBe('Tecnologias utilizadas')
    expect(wrapper.findAll('li')).toHaveLength(technologies.length)
  })
})
