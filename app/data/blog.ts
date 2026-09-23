import type { BlogArticle } from '~/types/blog'
import HowIBuiltMyPortfolio from '~/content/blog/como-eu-construi-meu-portifolio.md?raw'
import HTMLSemantico from '~/content/blog/html-semantico.md?raw'
import HowMachinesUnderstandWhoIAm from '~/content/blog/como-maquinas-endentem-quem-eu-sou-na-internet.md?raw'
import HowDataBecomesMovieRecommendations from '~/content/blog/como-dados-viram-recomendacoes-de-filmes-com-tensorflow-js.md?raw'
import { blogArticlesMetadata } from './blogMetadata'
import JevDecisions from '~/content/blog/jev-e-se-a-ia-ajudasse-o-seu-codigo-a-tomar-decisoes.md?raw'

const getBlogArticleMetadata = (slug: string) => {
  const article = blogArticlesMetadata.find((item) => item.slug === slug)

  if (!article) {
    throw new Error(`Blog article metadata not found: ${slug}`)
  }

  return article
}

export const blogArticles: BlogArticle[] = [
  {
    ...getBlogArticleMetadata('jev-e-se-a-ia-ajudasse-o-seu-codigo-a-tomar-decisoes'),
    content: JevDecisions,
  },
  {
    ...getBlogArticleMetadata('como-eu-construi-meu-portifolio'),
    content: HowIBuiltMyPortfolio,
  },
  {
    ...getBlogArticleMetadata('html-semantico'),
    content: HTMLSemantico,
  },
  {
    ...getBlogArticleMetadata('como-maquinas-endentem-quem-eu-sou-na-internet'),
    content: HowMachinesUnderstandWhoIAm,
  },
  {
    ...getBlogArticleMetadata('como-dados-viram-recomendacoes-de-filmes-com-tensorflow-js'),
    content: HowDataBecomesMovieRecommendations,
  },
].toSorted((currentArticle, nextArticle) =>
  nextArticle.publishedAtIso.localeCompare(currentArticle.publishedAtIso),
)
