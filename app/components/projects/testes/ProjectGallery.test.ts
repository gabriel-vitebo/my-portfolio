import { describe, expect, it } from 'vitest'
import ProjectGallery from '~/components/projects/ProjectGallery.vue'
import { projects } from '~/data/projects'
import { mountForSnapshot } from '../../../../tests/support/mount'

const project = projects[0]!

describe('ProjectGallery', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(ProjectGallery, {
      props: { items: project.gallery, projectTitle: project.title },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits the selected media when a gallery item is clicked', async () => {
    const wrapper = mountForSnapshot(ProjectGallery, {
      props: { items: project.gallery, projectTitle: project.title },
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('open-media')?.[0]).toEqual([project.gallery[0]])
  })
})
