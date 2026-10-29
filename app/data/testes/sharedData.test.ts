import { describe, expect, expectTypeOf, it } from 'vitest'
import { skills, getProjectTechnologyName, type SkillId } from '~/data/skills'
import { frontEndSkills, backEndSkills, toolSkills } from '~/data/aboutSkills'
import { socialLinks, type SocialId } from '~/data/socialLinks'
import { socials } from '~/data/profile'
import { githubUrl, identityId, siteUrl } from '~/data/constants'
import { projects } from '~/data/projects'
import { blogArticles } from '~/data/blog'
import { blogArticlesMetadata, blogArticleRoutes } from '~/data/blogMetadata'
import type { Project } from '~/types/portfolio'

const originalTechnologyNames = [
  ['React', 'MySql', 'Node.js', 'Express', 'JWT', 'Styled Components'],
  ['Nuxt', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
  ['HTML', 'CSS', 'Regex', 'JavaScript'],
  ['React Native', 'TypeScript', 'Firebase'],
  ['JavaScript', 'CSS', 'HTML'],
  ['React', 'Vite', 'Typescript', 'Styled Components'],
]

describe('shared data relationships', () => {
  it('uses registered technology IDs and preserves every displayed project label and order', () => {
    expectTypeOf<Project['technologies']>().toEqualTypeOf<SkillId[]>()
    expectTypeOf<string>().not.toExtend<SkillId>()
    expect(projects.map(project => project.technologies.map(id => {
      expect(skills[id]).toBeDefined()
      return project.technologyLabels?.[id] ?? getProjectTechnologyName(id)
    }))).toEqual(originalTechnologyNames)
    for (const project of projects) {
      expect(new Set(project.technologies).size).toBe(project.technologies.length)
      for (const id of Object.keys(project.technologyLabels ?? {})) {
        expect(project.technologies).toContain(id)
      }
    }
  })

  it('resolves the curated about groups from the same catalog with icons and categories', () => {
    for (const [category, group] of [
      ['frontend', frontEndSkills], ['backend', backEndSkills], ['tools', toolSkills],
    ] as const) {
      for (const skill of group) {
        expect(skill).toEqual({ id: skill.id, ...skills[skill.id] })
        expect(skill.category).toBe(category)
        expect(skill.icon).toBeTruthy()
      }
    }
    expect(frontEndSkills.map(skill => skill.name)).toEqual([
      'Vue.js', 'Nuxt', 'TypeScript', 'React', 'JavaScript', 'Tailwind', 'HTML', 'CSS',
    ])
  })

  it('shares the actual contact objects and keeps IDs independent of labels', () => {
    expectTypeOf<string>().not.toExtend<SocialId>()
    expect(socials.map(social => social.id)).toEqual(['github', 'linkedin', 'email'])
    for (const social of socials) {
      expect(social).toBe(socialLinks[social.id])
      expect(social.icon).toBeTruthy()
    }
    expect(githubUrl).toBe(socialLinks.github.url)
    expect(socialLinks.email.url).toBe(`mailto:${socialLinks.email.label}`)
    expect(identityId).toBe(`${siteUrl}/#identity`)
  })

  it('retains unique article identifiers and one metadata source for content and routes', () => {
    expect(new Set(blogArticlesMetadata.map(article => article.slug)).size).toBe(blogArticlesMetadata.length)
    expect(new Set(blogArticlesMetadata.map(article => article.shortSlug)).size).toBe(blogArticlesMetadata.length)
    expect(blogArticles).toHaveLength(blogArticlesMetadata.length)
    for (const metadata of blogArticlesMetadata) {
      expect(blogArticles.find(article => article.slug === metadata.slug)).toMatchObject(metadata)
      expect(blogArticleRoutes).toContain(`/blog/${metadata.slug}`)
    }
  })
})
