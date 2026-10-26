import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Container, Reveal, Section, SectionHeading } from '../ui'
import { companies } from '../../data'

function CompanyRow({ company, index }) {
  const { slug, name, sector, text } = company
  return (
    <Reveal as="li" delay={index * 60} className="row-item">
      <Link to={`/companies/${slug}`}>
        <span className="r-num">0{index + 1}</span>
        <span className="r-name">{name}</span>
        <span className="r-tag">{sector}</span>
        <span className="r-text">{text}</span>
        <ArrowUpRight className="r-arrow" size={24} strokeWidth={1.4} aria-hidden />
      </Link>
    </Reveal>
  )
}

// `exclude` hides one company (used on a company's own page).
export default function CompanyList({ showHeading = true, exclude, eyebrow = 'Our companies', note = 'Each company does its own work. All of them follow the same standards of quality and honesty.' }) {
  const list = companies.filter(c => c.slug !== exclude)
  return (
    <Section tone="charcoal">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow={eyebrow}
            title="Seven companies,"
            em="one group"
            note={note}
          />
        )}
        <ul className="rows">
          {list.map((c, i) => <CompanyRow key={c.slug} company={c} index={i} />)}
        </ul>
      </Container>
    </Section>
  )
}
