import type { BlogArticleMetadata } from '../types/blog'

const blogImage = (article: string, file: string) => `/images/blog/${article}/${file}`

export const blogArticlesMetadata: BlogArticleMetadata[] = [
  {
    slug: 'como-eu-construi-meu-portifolio',
    title: 'Como eu construí meu portfólio',
    date: 'Artigo',
    description: 'Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação que melhoram a experiência de leitura e navegação para todas as pessoas.',
    image: blogImage('como-eu-construi-meu-portifolio', 'cover.png'),
  },
]

export const blogArticleRoutes = blogArticlesMetadata.map((article) => `/blog/${article.slug}`)
