import { motion } from 'framer-motion'

export const ease = [0.2, 0.7, 0.2, 1]

// Fades and lifts its content into view once it scrolls on screen.
// `as` picks the rendered element: <Reveal as="li" />.
export default function Reveal({ as = 'div', delay = 0, y = 32, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: delay / 1000, ease }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
