import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button, Container } from '../ui'
import { navLinks } from '../../data'
import { cx } from '../../utils/cx.js'
import Logo from './Logo.jsx'
import MobileMenu from './MobileMenu.jsx'
import NavDropdown from './NavDropdown.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cx('header', (scrolled || open) && 'solid')}>
      <Container className="header-in">
        <Logo />
        <nav aria-label="Main">
          {navLinks.map(l => {
            if (l.cta) return <Button key={l.to} to={l.to} size="sm">{l.label}</Button>
            if (l.children) return <NavDropdown key={l.to} link={l} />
            return <NavLink key={l.to} to={l.to} end={l.to === '/'}>{l.label}</NavLink>
          })}
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>
      <AnimatePresence>{open && <MobileMenu />}</AnimatePresence>
    </header>
  )
}
