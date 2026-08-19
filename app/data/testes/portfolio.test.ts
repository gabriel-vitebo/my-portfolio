import { describe, expect, it } from 'vitest'
import { hero, socials } from '~/data/profile'
import { portfolio } from '~/data/portfolio'
import { projects, projectsSection } from '~/data/projects'

describe('portfolio data', () => {
  it('composes the profile and projects data without copying it', () => {
    expect(portfolio.hero).toBe(hero)
    expect(portfolio.socials).toBe(socials)
    expect(portfolio.projectsSection).toBe(projectsSection)
    expect(portfolio.projects).toBe(projects)
  })
})
