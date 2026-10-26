import { PageHero, CompanyList } from '../components/sections'

export default function CompaniesPage() {
  return (
    <>
      <PageHero eyebrow="Our companies" title="Seven businesses," em="one group." text="Apparel, healthcare, technology, retail and real estate, all under one name." seoTitle="Our Companies" description="Meet the seven businesses of Dalal Brothers Group across apparel, garment accessories, healthcare, technology, retail and real estate." />
      <CompanyList showHeading={false} />
    </>
  )
}
