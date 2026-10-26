import { Container, Reveal, Section, SectionHeading, TextLink } from '../ui'

export default function AboutIntro({ showLink = false }) {
  return (
    <Section>
      <Container className="two-col">
        <SectionHeading spaced={false} eyebrow="About us" title="A group built on" em="craft and care" />
        <Reveal delay={120}>
          <p>Dalal Brothers Group is a diversified business group with interests across apparel, garment accessories, healthcare, technology, retail and real estate.</p>
          <p>Each company runs on its own strengths, while all of them share the same values: quality, trust, innovation and long-term growth.</p>
          {showLink && <TextLink to="/about">Our story</TextLink>}
        </Reveal>
      </Container>
    </Section>
  )
}
