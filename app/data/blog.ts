import type { BlogArticle } from '~/types/blog'
import HowIBuiltMyPortfolio from '~/content/blog/como-eu-construi-meu-portifolio.md?raw'

export const blogArticles: BlogArticle[] = [
  {
    slug: 'como-eu-construi-meu-portifolio',
    title: 'Como eu construí meu portfólio',
    date: 'Artigo',
    description: 'Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação que melhoram a experiência de leitura e navegação para todas as pessoas.',
    content: HowIBuiltMyPortfolio,
  },
]
