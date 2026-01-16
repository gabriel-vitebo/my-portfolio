import { onMounted } from 'vue'

export function useReveal(
  target: HTMLElement | null,
  options = { threshold: 0.1 }
) {
  if (!target) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        target.classList.add('is-visible')
        observer.disconnect()
      }
    },
    options
  )

  observer.observe(target)
}
