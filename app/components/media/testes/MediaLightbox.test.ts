import { describe, expect, it } from 'vitest'
import MediaLightbox from '~/components/media/MediaLightbox.vue'
import { projects } from '~/data/projects'
import { mountForSnapshot } from '../../../../tests/support/mount'

const project = projects[0]!
const imageMedia = project.gallery.find(media => media.type === 'image')!
const youtubeMedia = project.gallery.find(media => media.type === 'youtube')!

describe('MediaLightbox', () => {
  it('matches the snapshot for image media', () => {
    const wrapper = mountForSnapshot(MediaLightbox, {
      props: { fallbackTitle: project.title, media: imageMedia },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('does not render a dialog without selected media', () => {
    const wrapper = mountForSnapshot(MediaLightbox, {
      props: { fallbackTitle: project.title, media: null },
    })

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })

  it('emits close when the close button is clicked', async () => {
    const wrapper = mountForSnapshot(MediaLightbox, {
      props: { fallbackTitle: project.title, media: youtubeMedia },
    })

    await wrapper.get('button[aria-label="Fechar mídia"]').trigger('click')

    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})
