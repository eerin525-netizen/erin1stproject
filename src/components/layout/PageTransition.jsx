import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ease } from '../ui'

// Route changes: a black curtain with a gold edge sweeps down over the old page,
// the page swaps underneath, then the curtain lifts away. After a change (not on
// first load) focus moves to the new page's main heading so it is announced.
export default function PageTransition({ children }) {
  const location = useLocation()
  const firstLoad = useRef(true)
  const isFirst = firstLoad.current

  const focusHeading = () => {
    if (firstLoad.current) { firstLoad.current = false; return }
    const h1 = document.querySelector('#main h1')
    if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }) }
  }

  return (
    <>
      {!isFirst && (
        <motion.div
          key={`curtain-${location.pathname}`}
          className="curtain"
          aria-hidden
          initial={{ scaleY: 0, transformOrigin: '0% 0%' }}
          animate={{ scaleY: [0, 1, 1, 0], transformOrigin: ['0% 0%', '0% 0%', '0% 100%', '0% 100%'] }}
          transition={{ duration: 1, times: [0, 0.36, 0.4, 1], ease }}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          tabIndex={-1}
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          onAnimationComplete={focusHeading}
        >
          {children(location)}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
