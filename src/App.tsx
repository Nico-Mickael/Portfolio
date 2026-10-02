import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { useTheme } from './hooks/useTheme'
import { Cv } from './pages/Cv'
import { Home } from './pages/Home'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-5 text-center">
      <p className="text-brand-700 dark:text-brand-300 text-sm font-semibold tracking-[0.16em] uppercase">
        Erreur 404
      </p>
      <h1 className="text-strong mt-3 text-3xl font-semibold tracking-tight">Page introuvable</h1>
      <p className="mt-3 max-w-md text-sm">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <a
        href="/"
        className="bg-brand-700 hover:bg-brand-800 mt-8 inline-flex h-11 items-center rounded-lg px-5 text-sm font-medium text-white transition-colors"
      >
        Retour à l’accueil
      </a>
    </div>
  )
}

function Layout() {
  const { pathname } = useLocation()
  const isCv = pathname === '/cv'

  return (
    <>
      <ScrollToTop />
      {!isCv ? <Navbar /> : null}
      <main className={isCv ? '' : 'pt-16'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  useTheme()

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}