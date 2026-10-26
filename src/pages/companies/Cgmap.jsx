import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function Cgmap() {
  return <CompanyLayout company={getCompany('cgmap')} />
}
