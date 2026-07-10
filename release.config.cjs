const changelogTypes = [
  { type: 'feat', section: '✨ Features', hidden: false },
  { type: 'fix', section: '🐛 Bug Fixes', hidden: false },
  { type: 'perf', section: '⚡ Performance', hidden: false },
  { type: 'refactor', section: '♻️ Refactoring', hidden: false },
  { type: 'docs', section: '📝 Documentation', hidden: false },
  { type: 'style', section: '💄 Styles', hidden: false },
  { type: 'test', section: '✅ Tests', hidden: false },
  { type: 'chore', section: '🔧 Chores', hidden: false },
  { type: 'ci', section: '👷 CI', hidden: false },
  { type: 'build', section: '📦 Build System', hidden: false },
]

const releaseRules = [
  { breaking: true, release: 'major' },
  ...changelogTypes.map(({ type }) => ({
    type,
    release: type === 'feat' ? 'minor' : 'patch',
  })),
]

const typeIcons = {
  feat: '✨',
  fix: '🐛',
  perf: '⚡',
  refactor: '♻️',
  docs: '📝',
  style: '💄',
  test: '✅',
  chore: '🔧',
  ci: '👷',
  build: '📦',
}

const parserOpts = {
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
}

const writerOpts = {
  transform(commit, context) {
    const transformedCommit = { ...commit }
    const icon = typeIcons[transformedCommit.type]

    if (!icon) {
      return false
    }

    const scope = transformedCommit.scope ? `(${transformedCommit.scope})` : ''
    const breaking = transformedCommit.notes?.length ? '💥 ' : ''
    const shortHash = transformedCommit.hash
      ? transformedCommit.hash.substring(0, 7)
      : transformedCommit.shortHash

    transformedCommit.subject = `${breaking}${icon} \`${transformedCommit.type}${scope}:\` ${transformedCommit.subject}`

    if (shortHash && context.host && context.owner && context.repository) {
      transformedCommit.shortHash = shortHash
    }

    return transformedCommit
  },
}

module.exports = {
  branches: ['main'],
  tagFormat: 'v${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules,
        parserOpts,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: changelogTypes,
        },
        parserOpts,
        writerOpts,
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog\n\nTodas as mudanças relevantes deste portfólio são documentadas aqui.',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'pnpm-lock.yaml'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
}
