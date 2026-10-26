import { Container, Reveal, Section, SectionHeading } from '../ui'
import { values } from '../../data'

export default function Values() {
  return (
    <Section tone="alt">
      <Container>
        <SectionHeading eyebrow="What we stand for" title="Our" em="values" />
        <div className="values">
          {values.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="value">
              <Icon size={32} strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
