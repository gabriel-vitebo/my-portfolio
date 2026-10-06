const email = 'contact@gabrielvitebo.dev'

export const socialLinks = {
  github: {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/gabriel-vitebo',
    icon: 'simple-icons:github',
  },
  linkedin: {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-alves-vitebo-2978ab177/',
    icon: 'simple-icons:linkedin',
  },
  email: {
    id: 'email',
    label: email,
    url: `mailto:${email}`,
    icon: 'lucide:mail',
  },
} as const

export type SocialId = keyof typeof socialLinks
