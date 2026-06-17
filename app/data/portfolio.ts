import type { PortfolioData } from '~/types/portfolio'
import { projects, projectsSection } from './projects'
import { about, hero, socials } from './profile'

export const portfolio: PortfolioData = {
  hero,
  socials,
  about,
  projectsSection,
  projects,
}
