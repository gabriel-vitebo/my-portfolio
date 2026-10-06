import { afterEach, describe, expect, it } from 'vitest'
import AboutPage from '~/pages/sobre-mim/index.vue'
import HomePage from '~/pages/index.vue'
import BlogPage from '~/pages/blog/index.vue'
import ArticlePage from '~/pages/blog/[slug]/index.vue'
import ProjectPage from '~/pages/projetos/[slug].vue'
import { mountForSnapshot } from '../../../tests/support/mount'
import { route, useSchemaOrg, useSeoMeta } from '../../../tests/support/nuxt'
import { socials } from '~/data/profile'

const wrappers: ReturnType<typeof mountForSnapshot>[] = []
afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount())
  Object.assign(route, { path: '/', fullPath: '/', hash: '', params: {} })
  useSchemaOrg.mockClear()
  useSeoMeta.mockClear()
})

describe('pages consuming shared data', () => {
  for (const [name, component, path, slug] of [
    ['home', HomePage, '/', ''],
    ['about', AboutPage, '/sobre-mim', ''],
    ['blog', BlogPage, '/blog', ''],
    ['article', ArticlePage, '/blog/html-semantico', 'html-semantico'],
    ['project', ProjectPage, '/projetos/check-numbers', 'check-numbers'],
  ] as const) {
    it(`preserves ${name} rendering and SEO`, () => {
      Object.assign(route, { path, fullPath: path, params: slug ? { slug } : {} })
      const wrapper = mountForSnapshot(component)
      wrappers.push(wrapper)
      expect(wrapper.html()).toMatchSnapshot()
      expect(useSeoMeta.mock.calls.at(-1)?.[0]).toMatchSnapshot()
      expect(useSchemaOrg.mock.calls.at(-1)?.[0]).toMatchSnapshot()
      if (name === 'about') {
        const links = wrapper.findAll('nav[aria-label="Links de contato"] a')
        expect(links.map(link => link.attributes('href'))).toEqual(socials.map(social => social.url))
        expect(wrapper.text()).toContain('Vue.js')
        expect(wrapper.text()).toContain('Tailwind')
      }
    })
  }
})
