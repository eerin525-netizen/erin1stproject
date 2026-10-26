import { getCompany } from '../../data'
import { CompanyLayout } from '../../components/sections'

export default function ClothingFashionImpex() {
  return <CompanyLayout company={getCompany('clothing-fashion-impex-ltd')} />
}
