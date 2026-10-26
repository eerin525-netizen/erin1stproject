import { Mail } from 'lucide-react'
import { Button, Container, Reveal, Section, SectionHeading } from '../ui'

// Intro block for a single company page.
export default function CompanyProfile({ company }) {
  const { icon: Icon, name, sector, text } = company
  return (
    <Section>
      <Container className="two-col">
        <SectionHeading spaced={false} eyebrow={sector} title="About" em={name} />
        <Reveal delay={120}>
          <div className="profile-icon"><Icon size={34} strokeWidth={1.2} /></div>
          <p>{text}</p>
          <Button to="/contact" icon={Mail}>Enquire about {name}</Button>
        </Reveal>
      </Container>
    </Section>
  )
}
