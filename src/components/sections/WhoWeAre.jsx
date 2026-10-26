import { Link } from 'react-router-dom'
import { Container, Reveal, Section, SectionHeading } from '../ui'
import { businessCategories, getCompany } from '../../data'

function CategoryCard({ category, index }) {
  const { title, icon: Icon, text, slugs } = category
  return (
    <Reveal as="li" delay={index * 90} className="cat">
      <div className="cat-icon"><Icon size={26} strokeWidth={1.3} aria-hidden /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul className="cat-companies" aria-label={`${title} companies`}>
        {slugs.map(slug => {
          const c = getCompany(slug)
          return <li key={slug}><Link to={`/companies/${slug}`}>{c.name}</Link></li>
        })}
      </ul>
    </Reveal>
  )
}

// Home section 2: who the group is, and the five categories its seven businesses fall into.
export default function WhoWeAre() {
  return (
    <Section>
      <Container>
        <div className="intro-top">
          <SectionHeading
            spaced={false}
            eyebrow="Who We Are"
            title="One Group. Multiple Industries."
            em="A Shared Vision."
          />
          <Reveal className="intro-copy" delay={150}>
            <p>Dalal Brothers Group brings together businesses operating across different industries, from apparel and healthcare to technology, retail and real estate. Each company runs on its own strengths.</p>
            <p>What unites them is a shared set of values: quality, trust, innovation and long-term growth.</p>
          </Reveal>
        </div>

        <ul className="cats">
          {businessCategories.map((c, i) => <CategoryCard key={c.key} category={c} index={i} />)}
        </ul>
      </Container>
    </Section>
  )
}
