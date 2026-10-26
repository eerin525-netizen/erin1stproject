import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function RealEstate() {
  return <CompanyLayout company={getCompany('real-estate')} />
}
