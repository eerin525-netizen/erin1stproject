import { PageHero, AboutIntro, Values } from '../components/sections'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="One group,"
        em="many businesses."
        text="A diversified business group built on quality, trust, innovation and long-term growth."
        seoTitle="About Us"
        description="Learn about Dalal Brothers Group, a diversified business group with interests across apparel, garment accessories, healthcare, technology, retail and real estate."
      />
      <AboutIntro />
      <Values />
    </>
  )
}
