import type { BlogArticle } from '~/types/blog'
import MyFirstHacktoberfest from '~/content/blog/meu-primeiro-hacktoberfest.md?raw'
import ReverseEngineeringWithAI from '~/content/blog/engenharia-reversa-com-ia-descobrindo-como-softwares-funcionam-com-rea.md?raw'
import HowIBuiltMyPortfolio from '~/content/blog/como-eu-construi-meu-portifolio.md?raw'
import HTMLSemantico from '~/content/blog/html-semantico.md?raw'
import HowMachinesUnderstandWhoIAm from '~/content/blog/como-maquinas-endentem-quem-eu-sou-na-internet.md?raw'
import HowDataBecomesMovieRecommendations from '~/content/blog/como-dados-viram-recomendacoes-de-filmes-com-tensorflow-js.md?raw'
import { blogArticlesMetadata } from './blogMetadata'
import JevDecisions from '~/content/blog/jev-e-se-a-ia-ajudasse-o-seu-codigo-a-tomar-decisoes.md?raw'
import McpAndRag from '~/content/blog/mcp-e-rag-como-conectar-a-ia-aos-dados-que-ela-precisa.md?raw'

import ObjectOrientedProgramming from '~/content/blog/programacao-orientada-a-objetos-poo-entendendo-os-conceitos-alem-da-linguagem.md?raw'
import FromIssueToMergeOmniKeyAI from '~/content/blog/da-issue-ao-merge-omnikey-ai.md?raw'

const getBlogArticleMetadata = (slug: string) => {
  const article = blogArticlesMetadata.find((item) => item.slug === slug)

  if (!article) {
    throw new Error(`Blog article metadata not found: ${slug}`)
  }

  return article
}

export const blogArticles: BlogArticle[] = [
  {
    ...getBlogArticleMetadata('da-issue-ao-merge-omnikey-ai'),
    content: FromIssueToMergeOmniKeyAI,
  },
  {
    ...getBlogArticleMetadata('meu-primeiro-hacktoberfest'),
    content: MyFirstHacktoberfest,
  },
  {
    ...getBlogArticleMetadata('engenharia-reversa-com-ia-descobrindo-como-softwares-funcionam-com-rea'),
    content: ReverseEngineeringWithAI,
  },
  {
    ...getBlogArticleMetadata('programacao-orientada-a-objetos-poo-entendendo-os-conceitos-alem-da-linguagem'),
    content: ObjectOrientedProgramming,
  },
  {
    ...getBlogArticleMetadata('mcp-e-rag-como-conectar-a-ia-aos-dados-que-ela-precisa'),
    content: McpAndRag,
  },
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
