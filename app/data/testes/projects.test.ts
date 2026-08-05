import { describe, expect, it } from 'vitest'
import { projects } from '~/data/projects'

describe('projects data integrity', () => {
  it('keeps project slugs unique', () => {
    const slugs = projects.map(project => project.slug)

    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('defines complete public information for every project', () => {
    expect(projects).not.toHaveLength(0)

    for (const project of projects) {
      expect(project.title).toBeTruthy()
      expect(project.shortDescription).toBeTruthy()
      expect(project.description.length).toBeGreaterThan(project.shortDescription.length)
      expect(project.image).toMatch(/^\/images\/projects\/.+\.(png|jpe?g|webp|avif)$/)
      expect(project.githubLinks.length).toBeGreaterThan(0)
      expect(project.technologies.length).toBeGreaterThan(0)
    }
  })

  it('defines valid gallery items', () => {
    for (const project of projects) {
      for (const media of project.gallery) {
        if (media.type === 'image') {
          expect(media.src).toMatch(/^\/images\/projects\//)
          expect(media.alt).toBeTruthy()
        }
        else {
          expect(media.url).toMatch(/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//)
          expect(media.title).toBeTruthy()
        }
      }
    }
  })
})
