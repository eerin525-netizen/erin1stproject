import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Desktop nav item with a hover / keyboard-focus dropdown.
export default function NavDropdown({ link }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}
      onKeyDown={e => { if (e.key === 'Escape') setOpen(false) }}
    >
      <NavLink to={link.to} aria-expanded={open}>
        {link.label}<ChevronDown size={14} className={open ? 'flip' : ''} aria-hidden />
      </NavLink>
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdown-panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="dropdown-menu">
              <li><Link to={link.to} className="all">All companies</Link></li>
              {link.children.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <NavLink to={to}><Icon size={16} strokeWidth={1.5} aria-hidden />{label}</NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
