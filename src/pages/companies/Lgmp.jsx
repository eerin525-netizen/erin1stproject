import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function Lgmp() {
  return <CompanyLayout company={getCompany('lgmp')} />
}
