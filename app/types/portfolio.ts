export interface HeroData {
  greeting: string
  name: string
  role: string
  description: string
  image: string
}

export interface SocialLink {
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
  technologies: string[]
}

export interface AboutData {
  title: string
  paragraphs: string[]
  highlights: string[]
}

export interface ProjectsData {
  title: string
  subtitle: string
}

export interface PortfolioData {
  hero: HeroData
  socials: SocialLink[]
  about: AboutData
  projectsSection: ProjectsData
  projects: Project[]
}
