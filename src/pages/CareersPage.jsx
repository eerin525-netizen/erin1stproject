import { Briefcase } from 'lucide-react'
import { Button } from '../components/ui'
import { PageHero, CallToAction } from '../components/sections'
import { company } from '../data'

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build your future" em="with us." text="Opportunities across our group of businesses." seoTitle="Careers" description="Work with Dalal Brothers Group. Find out about careers across our seven businesses." />
      <CallToAction
        eyebrow="Careers"
        title="Join the"
        em="team"
        text="Our businesses span apparel, healthcare, technology, retail and real estate. If you care about quality and trust, we would like to hear from you."
      >
        <Button href={`mailto:${company.careersEmail}`} icon={Briefcase}>See open roles</Button>
      </CallToAction>
    </>
  )
}
