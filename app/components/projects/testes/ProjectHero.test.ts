import { describe, expect, it } from 'vitest'
import ProjectHero from '~/components/projects/ProjectHero.vue'
import { projects } from '~/data/projects'
import { mountForSnapshot } from '../../../../tests/support/mount'

const project = projects[0]!

describe('ProjectHero', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(ProjectHero, {
      props: { project },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('toggles long project descriptions', async () => {
    const wrapper = mountForSnapshot(ProjectHero, {
      props: { project },
    })

    const button = wrapper.get('button[aria-controls]')
    expect(button.text()).toBe('Leia mais')

    await button.trigger('click')

    expect(button.text()).toBe('Ler menos')
  })

  it('emits the hero image media when image button is clicked', async () => {
    const wrapper = mountForSnapshot(ProjectHero, {
      props: { project },
    })

    await wrapper.get(`button[aria-label="Abrir imagem principal de ${project.title}"]`).trigger('click')

    expect(wrapper.emitted('open-media')?.[0]).toEqual([{ type: 'image', src: project.image, alt: project.title }])
  })
})
