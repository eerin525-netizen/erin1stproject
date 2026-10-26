import { useEffect } from 'react'
import Lenis from 'lenis'

let instance = null

// The running Lenis instance (null when smooth scrolling is off).
export const getLenis = () => instance

// Inertial "glide" scrolling. Skipped for visitors who ask for reduced motion.
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    })
    instance = lenis
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      instance = null
    }
  }, [])
}
