import { motion } from 'framer-motion'
import { cx } from '../../utils/cx.js'
import { ease } from './Reveal.jsx'

const line = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease } } }
const label = { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease } } }

// Small caps label: a gold hairline draws itself, then the text slides in.
export default function Eyebrow({ children, className }) {
  return (
    <motion.p className={cx('eyebrow', className)} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <motion.span className="eyebrow-line" variants={line} aria-hidden />
      <motion.span variants={label}>{children}</motion.span>
    </motion.p>
  )
}
