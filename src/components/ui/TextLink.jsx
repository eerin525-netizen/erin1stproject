import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TextLink({ to, children }) {
  return <Link to={to} className="text-link">{children} <ArrowRight size={16} aria-hidden /></Link>
}
