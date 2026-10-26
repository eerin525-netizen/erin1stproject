import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button, Container } from '../ui'
import { navLinks } from '../../data'

// Mobile item with an accordion for links that have children.
function Accordion({ link }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="m-accordion-head">
        <NavLink to={link.to}>{link.label}</NavLink>
        <button type="button" aria-label={`Toggle ${link.label} menu`} aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <ChevronDown size={18} className={open ? 'flip' : ''} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul className="m-sub" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            {link.children.map(({ to, label }) => <li key={to}><NavLink to={to}>{label}</NavLink></li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function MobileMenu() {
  return (
    <motion.div
      id="mobile-menu"
      className="mobile-menu"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Container as="nav" aria-label="Mobile" className="mobile-menu-in">
        {navLinks.map((l, i) => (
          <motion.div key={l.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i + 0.1 }}>
            {l.cta && <Button to={l.to}>{l.label}</Button>}
            {l.children && <Accordion link={l} />}
            {!l.cta && !l.children && <NavLink to={l.to} end={l.to === '/'}>{l.label}</NavLink>}
          </motion.div>
        ))}
      </Container>
    </motion.div>
  )
}
