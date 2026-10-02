import { useEffect, useRef, useState } from 'react'

interface RevealOptions {
  /** Once true, the element stays visible after its first reveal. */
  once?: boolean
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Fades content in on scroll. Purely opacity + a small translate. */
export function useReveal<T extends HTMLElement>({ once = true }: RevealOptions = {}) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return { ref, visible }
}