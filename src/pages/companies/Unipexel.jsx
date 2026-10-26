import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function Unipexel() {
  return <CompanyLayout company={getCompany('unipexel')} />
}
