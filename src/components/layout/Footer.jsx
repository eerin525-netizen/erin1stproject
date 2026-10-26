import { Link } from 'react-router-dom'
import { Container } from '../ui'
import { navLinks, footerLinks, company } from '../../data'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-in">
        <Logo />
        <nav aria-label="Footer">
          {[...navLinks, ...footerLinks].map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        </nav>
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </Container>
    </footer>
  )
}
