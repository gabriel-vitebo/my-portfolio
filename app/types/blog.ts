export interface BlogArticleSection {
  title: string
  paragraphs: string[]
}

export interface BlogArticle {
  id: string
  title: string
  date: string
  description: string
  sections: BlogArticleSection[]
}
