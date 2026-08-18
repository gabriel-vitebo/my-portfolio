import type { BlogArticle } from '~/types/blog'
import HowIBuiltMyPortfolio from '~/content/blog/como-eu-construi-meu-portifolio.md?raw'
import HTMLSemantico from '~/content/blog/html-semantico.md?raw'
import { blogArticlesMetadata } from './blogMetadata'

const getBlogArticleMetadata = (slug: string) => {
  const article = blogArticlesMetadata.find((item) => item.slug === slug)

  if (!article) {
    throw new Error(`Blog article metadata not found: ${slug}`)
  }

  return article
}

export const blogArticles: BlogArticle[] = [
  {
    ...getBlogArticleMetadata('como-eu-construi-meu-portifolio'),
    content: HowIBuiltMyPortfolio,
  },
  {
    ...getBlogArticleMetadata('html-semantico'),
    content: HTMLSemantico,
  },
].toSorted((currentArticle, nextArticle) =>
  nextArticle.publishedAtIso.localeCompare(currentArticle.publishedAtIso),
)
