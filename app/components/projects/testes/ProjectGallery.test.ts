import { describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import type { ProjectGalleryItem } from '~/types/portfolio'
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

const makeImages = (count: number): ProjectGalleryItem[] => Array.from({ length: count }, (_, index) => ({
  type: 'image', src: `/image-${index + 1}.png`, alt: `Imagem ${index + 1}`,
}))

it.each([[0, 1], [1, 1], [4, 1], [5, 2], [8, 2], [9, 3]])('paginates %i images into %i pages', async (count, pages) => {
  const items = makeImages(count)
  const wrapper = mountForSnapshot(ProjectGallery, {
    props: { items, projectTitle: 'Projeto' },
  })
  expect(wrapper.find('nav').exists()).toBe(count > 4)
  for (let page = 1; page <= pages; page++) {
    if (page > 1) await wrapper.get('[aria-label="Próxima página"]').trigger('click')
    expect(wrapper.findAll('img').map(image => image.attributes('src')))
      .toEqual(items.slice((page - 1) * 4, page * 4).map(image => image.type === 'image' ? image.src : ''))
    if (pages > 1) expect(wrapper.get('[role="status"]').text()).toBe(`Página ${page} de ${pages}`)
  }
  wrapper.unmount()
})

it('supports numbered, previous and next buttons without changing the URL and opens the selected image', async () => {
  const items = makeImages(9)
  const wrapper = mountForSnapshot(ProjectGallery, {
    props: { items, projectTitle: 'Projeto' },
  })
  const url = window.location.href
  expect(wrapper.get('nav').attributes('aria-label')).toBe('Paginação das imagens do projeto')
  expect(wrapper.get('[aria-label="Página anterior"]').attributes('disabled')).toBeDefined()
  await wrapper.get('[aria-label="Página 3"]').trigger('click')
  expect(wrapper.get('img').attributes('src')).toBe('/image-9.png')
  expect(wrapper.get('[aria-label="Próxima página"]').attributes('disabled')).toBeDefined()
  await wrapper.get('[aria-label="Página anterior"]').trigger('click')
  expect(wrapper.get('img').attributes('src')).toBe('/image-5.png')
  await wrapper.get('[aria-label="Abrir imagem da galeria de Projeto"]').trigger('click')
  expect(wrapper.emitted('open-media')?.[0]).toEqual([items[4]])
  expect(window.location.href).toBe(url)
  wrapper.unmount()
})

it.each([1, 4, 9])('starts at page one when switching to a project with %i images', async count => {
  const Host = defineComponent({
    components: { ProjectGallery },
    props: ['project'],
    template: '<ProjectGallery :key="project.slug" :items="project.gallery" :project-title="project.title" />',
  })
  const wrapper = mountForSnapshot(Host, {
    props: { project: { slug: 'a', title: 'Projeto', gallery: makeImages(9) } },
  })
  await wrapper.get('[aria-label="Página 3"]').trigger('click')
  await wrapper.setProps({ project: { slug: 'b', title: 'Projeto', gallery: makeImages(count) } })
  expect(wrapper.get('img').attributes('src')).toBe('/image-1.png')
  expect(wrapper.findAll('img')).toHaveLength(Math.min(4, count))
  if (count > 4) expect(wrapper.get('[aria-current="page"]').text()).toBe('1')
  wrapper.unmount()
})
