import type { BlogArticle } from '~/types/blog'
import accessibleVueArticle from '~/content/blog/como-construir-interfaces-mais-acessiveis-com-vue.md?raw'

export const blogArticles: BlogArticle[] = [
  {
    id: 'como-construir-interfaces-mais-acessiveis-com-vue',
    title: 'Como construir interfaces mais acessíveis com Vue',
    date: 'Artigo',
    description: 'Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação que melhoram a experiência de leitura e navegação para todas as pessoas.',
    content: accessibleVueArticle,
  },
]
