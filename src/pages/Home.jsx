import { useSeo } from '../hooks/useSeo.js'
import { Hero, WhoWeAre } from '../components/sections'

// Home page, built section by section.
//   1. Hero
//   2. Who we are
export default function Home() {
  useSeo()
  return (
    <>
      <Hero />
      <WhoWeAre />
    </>
  )
}
