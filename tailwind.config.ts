import type { Config } from 'tailwindcss'

const withOpacity = (variable: string) => {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}) / 1)`
    }

    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

export default {
  theme: {
    extend: {
      colors: {
        background: withOpacity('--color-background-rgb'),
        surface: withOpacity('--color-surface-rgb'),
        'surface-elevated': withOpacity('--color-surface-elevated-rgb'),
        border: withOpacity('--color-border-rgb'),
        primary: withOpacity('--color-primary-rgb'),
        'primary-hover': withOpacity('--color-primary-hover-rgb'),
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'calc(var(--radius-xl) + 0.25rem)',
        '3xl': 'calc(var(--radius-xl) + 0.75rem)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
