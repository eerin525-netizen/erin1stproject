import { Container, Reveal, Section, SectionHeading } from '../ui'

// Centred closing band. Pass the button(s) as children.
export default function CallToAction({ eyebrow, title, em, text, children }) {
  return (
    <Section tone="spotlight">
      <Container className="center">
        <Reveal>
          <SectionHeading spaced={false} eyebrow={eyebrow} title={title} em={em} />
          <p className="narrow">{text}</p>
          {children}
        </Reveal>
      </Container>
    </Section>
  )
}
