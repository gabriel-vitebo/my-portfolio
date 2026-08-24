export interface BlogArticleMetadata {
  slug: string
  title: string
  date: string
  publishedAtIso: string
  updatedAtIso?: string
  publishedAt: string
  description: string
  image: string
}

export interface BlogArticle extends BlogArticleMetadata {
  content: string
}
