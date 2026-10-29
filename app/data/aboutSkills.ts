import { skills, type SkillId } from './skills'

export const frontEndSkillsIds = ['vue', 'nuxt', 'typescript', 'react', 'javascript', 'tailwind', 'html', 'css'] as const satisfies readonly SkillId[]
export const backEndSkillsIds = ['ruby-on-rails', 'node', 'postgresql', 'prisma', 'rest-apis'] as const satisfies readonly SkillId[]
export const toolSkillsIds = ['git', 'github', 'docker', 'jest', 'storybook', 'figma'] as const satisfies readonly SkillId[]

export const frontEndSkills = frontEndSkillsIds.map(id => ({ id, ...skills[id] }))
export const backEndSkills = backEndSkillsIds.map(id => ({ id, ...skills[id] }))
export const toolSkills = toolSkillsIds.map(id => ({ id, ...skills[id] }))
