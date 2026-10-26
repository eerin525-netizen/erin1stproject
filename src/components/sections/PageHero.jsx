import { motion } from 'framer-motion'
import { AnimatedHeading, Container, Eyebrow, ease } from '../ui'
import { useSeo } from '../../hooks/useSeo.js'

// Compact dark banner that opens every inner page. Its <h1> is the page's one main heading,
// and it also sets the page's search/social metadata (seoTitle, description, noindex).
export default function PageHero({ eyebrow, title, em, text, seoTitle, description, noindex }) {
  useSeo({ title: seoTitle ?? `${title} ${em ?? ''}`.trim().replace(/[.,]$/, ''), description: description ?? text, noindex })
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <AnimatedHeading as="h1" id="page-title" title={title} em={em} delay={0.25} />
        {text && <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }}>{text}</motion.p>}
      </Container>
    </section>
  )
}
