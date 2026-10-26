import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Dalal Brothers Group home">
      <span className="logo-mark">DB</span>
      <span>DALAL BROTHERS<small>GROUP</small></span>
    </Link>
  )
}
