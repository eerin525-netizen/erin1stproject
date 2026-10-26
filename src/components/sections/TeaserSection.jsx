import { Container, Reveal, Section, SectionHeading, TextLink } from '../ui'

// Short two-column preview of another page: heading on the left, text and a link on the right.
export default function TeaserSection({ eyebrow, title, em, text, to, linkLabel, tone }) {
  return (
    <Section tone={tone}>
      <Container className="two-col">
        <SectionHeading spaced={false} eyebrow={eyebrow} title={title} em={em} />
        <Reveal delay={120}>
          <p>{text}</p>
          <TextLink to={to}>{linkLabel}</TextLink>
        </Reveal>
      </Container>
    </Section>
  )
}
