import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, Reveal, Section, SectionHeading } from '../ui'
import { companies } from '../../data'

// Square logo slot: shows the company's logo image when one is set, otherwise its initials.
export function CompanyLogo({ company }) {
  return (
    <span className="biz-logo" aria-hidden>
      {company.logo ? <img src={company.logo} alt="" loading="lazy" /> : <b>{company.initials}</b>}
    </span>
  )
}

function BusinessCard({ company, index }) {
  const { slug, name, sector, text } = company
  return (
    <Reveal as="li" delay={(index % 4) * 90}>
      <Link to={`/companies/${slug}`} className="biz-card" aria-label={`${name}, ${sector}. Explore company`}>
        <CompanyLogo company={company} />
        <div className="biz-body">
          <span className="biz-sector">{sector}</span>
          <h3 className="biz-name">{name}</h3>
          <p className="biz-text">{text}</p>
        </div>
        <span className="biz-btn">Explore Company <ArrowRight size={15} aria-hidden /></span>
      </Link>
    </Reveal>
  )
}

// Home section 3: every company in the group as a premium card grid.
export default function BusinessGrid() {
  return (
    <Section tone="charcoal">
      <Container>
        <div className="biz-head">
          <SectionHeading spaced={false} eyebrow="Our Businesses" title="Seven businesses," em="one group" />
        </div>
        <ul className="biz-grid">
          {companies.map((c, i) => <BusinessCard key={c.slug} company={c} index={i} />)}
        </ul>
      </Container>
    </Section>
  )
}
