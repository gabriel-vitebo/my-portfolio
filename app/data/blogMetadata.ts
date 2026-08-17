import type { BlogArticleMetadata } from '../types/blog'

const blogImage = (article: string, file: string) => `/images/blog/${article}/${file}`

export const blogArticlesMetadata: BlogArticleMetadata[] = [
  {
    slug: 'como-eu-construi-meu-portifolio',
    title: 'Como eu construí meu portfólio',
    date: 'Artigo',
    publishedAt: '13 de agosto de 2026',
    description: 'Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação que melhoram a experiência de leitura e navegação para todas as pessoas.',
    image: blogImage('como-eu-construi-meu-portifolio', 'cover.png'),
  },
  {
    slug: 'html-semantico',
    title: 'HTML Semântico',
    date: 'Artigo',
    publishedAt: '18 de agosto de 2026',
    description: 'Um olhar prático sobre como o HTML semântico melhora acessibilidade, navegação, SEO e manutenção mesmo em páginas que parecem visualmente iguais.',
    image: blogImage('html-semantico', 'cover.png'),
  },
]

export const blogArticleRoutes = blogArticlesMetadata.map((article) => `/blog/${article.slug}`)
