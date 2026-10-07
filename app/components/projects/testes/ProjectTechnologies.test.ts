import type { SkillId } from '~/data/skills'
import { describe, expect, it } from 'vitest'
import ProjectTechnologies from '~/components/projects/ProjectTechnologies.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const technologies: SkillId[] = ['nuxt', 'typescript', 'tailwind']

describe('ProjectTechnologies', () => {
  it('resolves labels and updates when the referenced technologies change', async () => {
    const wrapper = mountForSnapshot(ProjectTechnologies, { props: { technologies } })
    expect(wrapper.findAll('li').map(item => item.text())).toEqual(['Nuxt', 'TypeScript', 'Tailwind CSS'])
    await wrapper.setProps({ technologies: ['typescript'], technologyLabels: { typescript: 'Typescript' } })
    expect(wrapper.findAll('li').map(item => item.text())).toEqual(['Typescript'])
  })

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
