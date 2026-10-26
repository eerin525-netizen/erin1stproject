import { Mail, Phone, MapPin } from 'lucide-react'
import { companies } from './companies.js'

// Assumed public address (taken from the email domain): change it when the real domain is confirmed,
// and update public/sitemap.xml, public/robots.txt and index.html to match.
export const siteUrl = 'https://www.dalalbrothersgroup.com'

export const company = {
  name: 'Dalal Brothers Group',
  homeTitle: 'Dalal Brothers Group | Diversified Business Group',
  description: 'Dalal Brothers Group is a diversified business group with interests across apparel, garment accessories, healthcare, technology, retail and real estate.',
  email: 'info@dalalbrothersgroup.com',
  careersEmail: 'careers@dalalbrothersgroup.com',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/companies', label: 'Companies', children: companies.map(c => ({ to: `/companies/${c.slug}`, label: c.name, icon: c.icon })) },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact', cta: true },
]

// Secondary pages, reachable from the footer rather than the main navigation.
export const footerLinks = [
  { to: '/careers', label: 'Careers' },
]

export const contactDetails = [
  { icon: MapPin, label: 'Head office', lines: ['Address to be added'], short: 'Address to be added' },
  { icon: Mail, label: 'Email', lines: [company.email], href: `mailto:${company.email}`, short: company.email },
  { icon: Phone, label: 'Phone', lines: ['+00 000 000 0000'], short: '+00 000 000 0000' },
]

export const contactSubjects = ['Wholesale', 'Press', 'Careers', 'Other']

