import { getProjectTechnologyName, skills } from '~/data/skills'
import type { Project } from '~/types/portfolio'
import type { BlogArticleMetadata } from '~/types/blog'

export const getProjectSearchFields = (project: Project): string[] => [
  project.title,
  project.shortDescription,
  project.description,
  ...project.technologies.flatMap(id => [
    id,
    skills[id].name,
    skills[id].category,
    getProjectTechnologyName(id),
    project.technologyLabels?.[id] ?? '',
  ]),
]

export const getBlogSearchFields = (article: BlogArticleMetadata): string[] => [
  article.title,
  article.description,
]
