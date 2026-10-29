import type { BlogArticle } from '~/types/blog'

// Keep rendering and search fixtures independent of published articles and their order.
export const createBlogArticle = (overrides: Partial<BlogArticle> = {}): BlogArticle => ({
  slug: 'test-article',
  shortSlug: 'test-article',
  title: 'Artigo de teste',
  date: 'Artigo',
  publishedAtIso: '2026-01-01',
  publishedAt: '1 de janeiro de 2026',
  description: 'Descrição pesquisável',
  image: '/images/blog/test-article/cover.png',
  imageWidth: 1672,
  imageHeight: 941,
  content: '# Artigo de teste',
  ...overrides,
})
