import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ease } from './Reveal.jsx'

const parent = (delay) => ({ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } })
const word = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.9, ease } } }

function Words({ text }) {
  return text.split(' ').filter(Boolean).map((w, i) => (
    <Fragment key={i}>
      <span className="word"><motion.span className="word-in" variants={word}>{w}</motion.span></span>{' '}
    </Fragment>
  ))
}

// Heading whose words rise out of a mask one after another when it scrolls into view.
// `title` is the plain part, `em` the italic gold part, `breakBefore` puts em on a new line.
export default function AnimatedHeading({ as = 'h2', title, em, breakBefore = false, delay = 0, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag variants={parent(delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} {...rest}>
      <Words text={title} />
      {breakBefore && <br />}
      {em && <em><Words text={em} /></em>}
    </Tag>
  )
}
