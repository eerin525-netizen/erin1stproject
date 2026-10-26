import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function ClothingTrimsInternational() {
  return <CompanyLayout company={getCompany('clothing-trims-international')} />
}
