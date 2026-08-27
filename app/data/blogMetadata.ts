import type { BlogArticleMetadata } from '../types/blog'

const blogImage = (article: string, file: string) => `/images/blog/${article}/${file}`

export const blogArticlesMetadata: BlogArticleMetadata[] = [
  {
    slug: 'como-eu-construi-meu-portifolio',
    title: 'Como eu construí meu portfólio',
    date: 'Artigo',
    publishedAtIso: '2026-08-13',
    publishedAt: '13 de agosto de 2026',
    description: 'Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação que melhoram a experiência de leitura e navegação para todas as pessoas.',
    image: blogImage('como-eu-construi-meu-portifolio', 'cover.png'),
  },
  {
    slug: 'html-semantico',
    title: 'HTML Semântico',
    date: 'Artigo',
    publishedAtIso: '2026-08-18',
    publishedAt: '18 de agosto de 2026',
    description: 'Um olhar prático sobre como o HTML semântico melhora acessibilidade, navegação, SEO e manutenção mesmo em páginas que parecem visualmente iguais.',
    image: blogImage('html-semantico', 'cover.png'),
  },
  {
    slug: 'como-maquinas-endentem-quem-eu-sou-na-internet',
    title: 'Como Máquinas Entendem Quem eu sou na internet',
    date: 'Artigo',
    publishedAtIso: '2026-08-27',
    publishedAt: '27 de agosto de 2026',
    description: 'Uma reflexão sobre LLMs, busca, retrieval, RAG e dados estruturados para entender como máquinas encontram e relacionam informações sobre uma pessoa na internet.',
    image: blogImage('como-maquinas-endentem-quem-eu-sou-na-internet', 'cover.jpeg'),
  },
]

export const blogArticleRoutes = blogArticlesMetadata.map((article) => `/blog/${article.slug}`)
