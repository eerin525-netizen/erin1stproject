import { motion, useReducedMotion } from 'framer-motion'

// Three thin flowing gold lines. They draw themselves once, then sway very slowly.
const curves = [
  { d: 'M-100 690 C 300 590, 520 900, 920 700 S 1500 400, 1640 500', delay: 1.2, sway: 14, time: 19 },
  { d: 'M-100 780 C 360 680, 620 960, 1020 760 S 1500 520, 1640 610', delay: 1.6, sway: -12, time: 23 },
  { d: 'M-100 870 C 380 780, 700 1010, 1100 820 S 1500 640, 1640 720', delay: 2.0, sway: 10, time: 27 },
]

// A handful of tiny gold specks that rise and fade. Fixed positions so it never reshuffles.
const specks = [
  [8, 72, 0], [16, 38, 6], [24, 84, 12], [33, 56, 3], [41, 20, 9], [49, 78, 15], [57, 44, 2],
  [64, 88, 8], [72, 30, 13], [79, 64, 5], [86, 16, 10], [92, 52, 1], [12, 18, 14], [68, 70, 7],
]

// Quiet abstract layer for the hero: kept faint and slow so it never competes with the headline.
export default function HeroBackdrop() {
  const reduce = useReducedMotion()
  return (
    <div className="hero-abstract" aria-hidden>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d9bf8c" stopOpacity="0" />
            <stop offset=".45" stopColor="#d9bf8c" stopOpacity=".9" />
            <stop offset="1" stopColor="#b08d57" stopOpacity="0" />
          </linearGradient>
        </defs>
        {curves.map((c, i) => (
          <motion.path
            key={i}
            d={c.d}
            stroke="url(#flow)"
            strokeWidth="1"
            initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
            animate={reduce ? { pathLength: 1, opacity: 0.2 } : { pathLength: 1, opacity: 0.2, y: [0, c.sway, 0] }}
            transition={{
              pathLength: { duration: 4, delay: c.delay, ease: [0.2, 0.7, 0.2, 1] },
              opacity: { duration: 3, delay: c.delay },
              y: { duration: c.time, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}
      </svg>
      {!reduce && specks.map(([x, y, delay], i) => (
        <motion.span
          key={i}
          className="speck"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ y: [0, -46, 0], opacity: [0, 0.45, 0] }}
          transition={{ duration: 16 + (i % 5) * 3, delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
