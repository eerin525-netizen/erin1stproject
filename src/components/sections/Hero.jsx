import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedHeading, Button, Container, Eyebrow, ease } from '../ui'
import { companies, businessCategories } from '../../data'
import { getLenis } from '../../hooks/useSmoothScroll.js'
import HeroBackdrop from './HeroBackdrop.jsx'

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
}

// Where each business category sits on the emblem ring (degrees, -90 = top).
const nodeAngles = businessCategories.map((_, i) => -90 + (360 / businessCategories.length) * i)
const polar = (deg, r) => [50 + r * Math.cos((deg * Math.PI) / 180), 50 + r * Math.sin((deg * Math.PI) / 180)]

// The group emblem: a DB hub joined by spokes to one node per business category,
// so the hero reads as a group of different industries rather than a single trade.
function Crest({ style }) {
  return (
    <motion.div className="hero-crest" aria-hidden style={style} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 3, ease }}>
      <svg viewBox="0 0 400 400" fill="none" className="crest-static">
        <circle cx="200" cy="200" r="198" stroke="url(#g)" strokeWidth="1" opacity=".5" />
        <circle cx="200" cy="200" r="150" stroke="url(#g)" strokeWidth="1" opacity=".3" />
        <circle cx="200" cy="200" r="86" stroke="url(#g)" strokeWidth="1" opacity=".5" />
        {nodeAngles.map(a => {
          const [x, y] = polar(a, 49.5)
          return <line key={a} x1="200" y1="200" x2={x * 4} y2={y * 4} stroke="url(#g)" strokeWidth=".8" opacity=".35" />
        })}
        <circle cx="200" cy="200" r="58" fill="#0a0a0a" stroke="url(#g)" strokeWidth="1" />
        <text x="200" y="217" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="48" fontWeight="500" fill="url(#g)">DB</text>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#e2cc9c" /><stop offset="1" stopColor="#8f6f3e" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 400 400" fill="none" className="crest-spin">
        <circle cx="200" cy="200" r="190" stroke="#d9bf8c" strokeWidth="1" strokeDasharray="2 10" opacity=".5" />
      </svg>
      {businessCategories.map(({ key, icon: Icon }, i) => {
        const [x, y] = polar(nodeAngles[i], 49.5)
        return (
          <span key={key} className="crest-node" style={{ left: `${x}%`, top: `${y}%` }}>
            <Icon size={20} strokeWidth={1.3} />
          </span>
        )
      })}
    </motion.div>
  )
}

// Cinematic opening: black bars retract and a gold line draws across the middle.
function Opening() {
  return (
    <>
      <motion.div className="hero-bar top" aria-hidden initial={{ height: '52%' }} animate={{ height: '0%' }} transition={{ duration: 1.8, delay: 0.5, ease }} />
      <motion.div className="hero-bar bottom" aria-hidden initial={{ height: '52%' }} animate={{ height: '0%' }} transition={{ duration: 1.8, delay: 0.5, ease }} />
      <motion.div className="hero-line" aria-hidden initial={{ scaleX: 0, opacity: 1 }} animate={{ scaleX: 1, opacity: 0 }} transition={{ scaleX: { duration: 0.9, ease }, opacity: { duration: 0.6, delay: 0.9 } }} />
    </>
  )
}

// Quiet "scroll" hint: a thin line with a slow light travelling down it. Click to scroll one screen.
function ScrollCue() {
  const go = () => {
    const top = window.innerHeight
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(top)
    else window.scrollTo({ top, behavior: 'smooth' })
  }
  return (
    <motion.button type="button" className="scroll-cue" aria-label="Scroll down" onClick={go} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 3 }}>
      <span>Scroll</span>
      <i aria-hidden />
    </motion.button>
  )
}

// Quick links to all seven companies.
function CompanyStrip() {
  return (
    <motion.nav className="container company-strip" aria-label="Our companies" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 2.2 }}>
      <span className="strip-label">Our companies</span>
      <ul>
        {companies.map(c => <li key={c.slug}><Link to={`/companies/${c.slug}`}>{c.name}</Link></li>)}
      </ul>
    </motion.nav>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  // Scroll parallax: crest and light drift slower than the text, which fades out.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const crestY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // A soft gold spotlight follows the pointer.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const spotX = useSpring(px, { stiffness: 40, damping: 18 })
  const spotY = useSpring(py, { stiffness: 40, damping: 18 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set(rect.width * 0.7 - 340)
    py.set(rect.height * 0.28 - 340)
    if (reduce) return
    const move = e => {
      const r = el.getBoundingClientRect()
      px.set(e.clientX - r.left - 340)
      py.set(e.clientY - r.top - 340)
    }
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [px, py, reduce])

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-stage" aria-hidden style={{ y: stageY }} initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 14, ease: 'easeOut' }}>
        <motion.div className="hero-beam" animate={{ x: ['-3vw', '4vw', '-3vw'], opacity: [0.7, 1, 0.7] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="hero-beam two" animate={{ x: ['3vw', '-4vw', '3vw'] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
        <HeroBackdrop />
        <motion.div className="hero-spot" style={{ x: spotX, y: spotY }} />
      </motion.div>
      <Crest style={{ y: crestY }} />

      <Container as={motion.div} className="hero-in" style={{ y: textY, opacity: textOpacity }}>
        <Eyebrow>Diversified Business Group</Eyebrow>
        <AnimatedHeading as="h1" title="Building Businesses." em="Creating Possibilities." breakBefore delay={1.1} />
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.15, delayChildren: 2 }}>
          <motion.p variants={item} className="lead">
            Dalal Brothers Group is a diversified business group with interests across apparel, garment accessories, healthcare, technology, retail and real estate.
          </motion.p>
          <motion.div variants={item} className="actions">
            <Button to="/companies" icon={ArrowRight}>Explore Our Group</Button>
            <Button to="/contact" variant="ghost">Contact Us</Button>
          </motion.div>
        </motion.div>
      </Container>

      <ScrollCue />
      <CompanyStrip />
      {!reduce && <Opening />}
    </section>
  )
}
