import { describe, expect, it } from 'vitest'
import BlogCard from '~/components/blog/card/index.vue'
import type { BlogArticle } from '~/types/blog'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const article: BlogArticle = {
  slug: 'interfaces-acessiveis-com-vue',
  title: 'Interfaces acessiveis com Vue',
  date: 'Artigo',
  publishedAt: '13 de agosto de 2026',
  description: 'Boas escolhas semanticas deixam a leitura e a navegacao mais previsiveis.',
  image: '/images/blog/interfaces-acessiveis-com-vue/cover.png',
  content: 'Conteudo do artigo.',
}

describe('BlogCard', () => {
  it('matches the snapshot', () => {
    const wrapper = mountForSnapshot(BlogCard, {
      props: { article },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders article content and links to the full post', () => {
    const wrapper = mountForSnapshot(BlogCard, {
      props: { article },
    })

    const links = wrapper.findAll('a')

    expect(wrapper.get('article').attributes('aria-labelledby')).toBe(`blog-article-${article.slug}`)
    expect(wrapper.get('h2').attributes('id')).toBe(`blog-article-${article.slug}`)
    expect(wrapper.text()).toContain(article.date)
    expect(wrapper.text()).toContain(article.title)
    expect(wrapper.text()).toContain(article.description)
    expect(wrapper.get('img').attributes('src')).toBe(article.image)
    expect(wrapper.get('img').attributes('alt')).toBe(article.title)
    expect(links).toHaveLength(2)
    expect(links.every((link) => link.attributes('href') === `/blog/${article.slug}`)).toBe(true)
    expect(links[0]!.attributes('aria-label')).toBe(`Ler artigo completo: ${article.title}`)
  })
})
