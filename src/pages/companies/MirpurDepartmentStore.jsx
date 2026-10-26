import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function MirpurDepartmentStore() {
  return <CompanyLayout company={getCompany('mirpur-department-store')} />
}
