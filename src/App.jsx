import { Routes, Route } from 'react-router-dom'
import { Header, Footer, PageTransition, ScrollToTop } from './components/layout'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'
import { routes } from './routes.jsx'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <PageTransition>
        {location => (
          <Routes location={location}>
            {routes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
          </Routes>
        )}
      </PageTransition>
      <Footer />
    </>
  )
}
