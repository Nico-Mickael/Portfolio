import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { navItems } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-[var(--border-subtle)] bg-[var(--header-bg)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="relative">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
        >
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`relative inline-flex min-h-11 items-center rounded-md px-3 text-sm transition-colors ${
                  activeId === item.id
                    ? 'text-brand-700 dark:text-brand-300 font-medium'
                    : 'text-muted hover:text-strong'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="border-[var(--border-subtle)] bg-[var(--surface-raised)] text-strong inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

        <div
          className="bg-brand-700 dark:bg-brand-400 scroll-progress absolute inset-x-0 bottom-0 h-0.5"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </div>

      {menuOpen ? (
        <div
          id="menu-mobile"
          className="bg-[var(--surface)] border-[var(--border-subtle)] border-t lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block border-b border-[var(--border-subtle)] py-3.5 text-sm last:border-0 ${
                    activeId === item.id ? 'text-brand-700 dark:text-brand-300 font-medium' : 'text-muted'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}