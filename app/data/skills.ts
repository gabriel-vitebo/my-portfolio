export interface SkillDefinition {
  name: string
  category: 'frontend' | 'backend' | 'tools'
  icon?: string
  projectName?: string
}

// Keys are stable IDs; display names can change without breaking references.
export const skills = {
  'vue': { name: 'Vue.js', icon: 'simple-icons:vuedotjs', category: 'frontend' },
  'nuxt': { name: 'Nuxt', icon: 'simple-icons:nuxt', category: 'frontend' },
  'typescript': { name: 'TypeScript', icon: 'simple-icons:typescript', category: 'frontend' },
  'react': { name: 'React', icon: 'simple-icons:react', category: 'frontend' },
  'javascript': { name: 'JavaScript', icon: 'simple-icons:javascript', category: 'frontend' },
  'tailwind': { name: 'Tailwind', icon: 'simple-icons:tailwindcss', category: 'frontend', projectName: 'Tailwind CSS' },
  'html': { name: 'HTML', icon: 'simple-icons:html5', category: 'frontend' },
  'css': { name: 'CSS', icon: 'simple-icons:css', category: 'frontend' },
  'ruby-on-rails': { name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails', category: 'backend' },
  'node': { name: 'Node.js', icon: 'simple-icons:nodedotjs', category: 'backend' },
  'postgresql': { name: 'PostgreSQL', icon: 'simple-icons:postgresql', category: 'backend' },
  'prisma': { name: 'Prisma', icon: 'simple-icons:prisma', category: 'backend' },
  'rest-apis': { name: 'REST APIs', icon: 'lucide:route', category: 'backend' },
  'git': { name: 'Git', icon: 'simple-icons:git', category: 'tools' },
  'github': { name: 'GitHub', icon: 'simple-icons:github', category: 'tools' },
  'docker': { name: 'Docker', icon: 'simple-icons:docker', category: 'tools' },
  'jest': { name: 'Jest', icon: 'simple-icons:jest', category: 'tools' },
  'storybook': { name: 'Storybook', icon: 'simple-icons:storybook', category: 'tools' },
  'figma': { name: 'Figma', icon: 'simple-icons:figma', category: 'tools' },
  'mysql': { name: 'MySql', category: 'backend' },
  'express': { name: 'Express', category: 'backend' },
  'jwt': { name: 'JWT', category: 'backend' },
  'styled-components': { name: 'Styled Components', category: 'frontend' },
  'openai-api': { name: 'OpenAI API', category: 'backend' },
  'regex': { name: 'Regex', category: 'tools' },
  'react-native': { name: 'React Native', category: 'frontend' },
  'firebase': { name: 'Firebase', category: 'backend' },
  'vite': { name: 'Vite', category: 'tools' },
} as const satisfies Record<string, SkillDefinition>

export type SkillId = keyof typeof skills
export type SkillCategory = SkillDefinition['category']

export function getProjectTechnologyName(id: SkillId): string {
  const skill: SkillDefinition = skills[id]
  return skill.projectName ?? skill.name
}
