export interface BlogArticleMetadata {
  slug: string
  title: string
  date: string
  description: string
  image: string
}

export interface BlogArticle extends BlogArticleMetadata {
  content: string
}
