import type { SkillId } from '../data/skills'
import type { SocialId } from '../data/socialLinks'

export interface HeroData {
  greeting: string
  name: string
  role: string
  description: string
  image: string
}

export interface SocialLink {
  id: SocialId
  icon: string
  label: string
  url: string
}

export interface ProjectGithubLink {
  label?: string
  url: string
}

export type ProjectGalleryItem =
  | {
      type: 'image'
      src: string
      alt?: string
    }
  | {
      type: 'youtube'
      url: string
      title: string
    }

export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  gallery: ProjectGalleryItem[]
  githubLinks: ProjectGithubLink[]
  demoUrl?: string
  technologies: SkillId[]
  /** Existing editorial spelling, only where it differs from the catalog. */
  technologyLabels?: Partial<Record<SkillId, string>>
}

export interface ProjectsData {
  title: string
  subtitle: string
}

export interface PortfolioData {
  hero: HeroData
  socials: SocialLink[]
  projectsSection: ProjectsData
  projects: Project[]
}
