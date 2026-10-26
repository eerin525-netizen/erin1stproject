import { Container, Reveal, Section, SectionHeading } from '../ui'
import PageHero from './PageHero.jsx'
import CompanyProfile from './CompanyProfile.jsx'
import CompanyList from './CompanyList.jsx'

function Highlights({ items }) {
  return (
    <Section tone="alt">
      <Container>
        <SectionHeading eyebrow="At a glance" title="What we" em="offer" />
        <div className="values">
          {items.map(({ title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="value">
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Shared template for every company page: banner, profile, optional highlights, other companies.
export default function CompanyLayout({ company, highlights = [] }) {
  return (
    <>
      <PageHero
        eyebrow={company.sector}
        title={company.name}
        text="A member of Dalal Brothers Group."
        seoTitle={`${company.name} (${company.sector})`}
        description={`${company.name}: ${company.text}`}
      />
      <CompanyProfile company={company} />
      {highlights.length > 0 && <Highlights items={highlights} />}
      <CompanyList exclude={company.slug} eyebrow="Other companies" />
    </>
  )
}
