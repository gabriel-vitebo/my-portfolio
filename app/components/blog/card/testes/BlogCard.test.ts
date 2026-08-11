import { describe, expect, it } from 'vitest'
import BlogCard from '~/components/blog/card/index.vue'
import type { BlogArticle } from '~/types/blog'
import { mountForSnapshot } from '../../../../../tests/support/mount'

const article: BlogArticle = {
  id: 'interfaces-acessiveis-com-vue',
  title: 'Interfaces acessiveis com Vue',
  date: 'Artigo',
  description: 'Boas escolhas semanticas deixam a leitura e a navegacao mais previsiveis.',
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

    expect(wrapper.get('article').attributes('aria-labelledby')).toBe(`blog-article-${article.id}`)
    expect(wrapper.get('h2').attributes('id')).toBe(`blog-article-${article.id}`)
    expect(wrapper.text()).toContain(article.date)
    expect(wrapper.text()).toContain(article.title)
    expect(wrapper.text()).toContain(article.description)
    expect(links).toHaveLength(2)
    expect(links.every((link) => link.attributes('href') === `/blog/${article.id}`)).toBe(true)
    expect(links[0]!.attributes('aria-label')).toBe(`Ler artigo completo: ${article.title}`)
  })
})
