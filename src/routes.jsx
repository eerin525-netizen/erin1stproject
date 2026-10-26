import { Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CompaniesPage from './pages/CompaniesPage.jsx'
import LeadershipPage from './pages/LeadershipPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'
import ClothingTrimsInternational from './pages/companies/ClothingTrimsInternational.jsx'
import ClothingFashionImpex from './pages/companies/ClothingFashionImpex.jsx'
import Lgmp from './pages/companies/Lgmp.jsx'
import Cgmap from './pages/companies/Cgmap.jsx'
import Unipexel from './pages/companies/Unipexel.jsx'
import MirpurDepartmentStore from './pages/companies/MirpurDepartmentStore.jsx'
import RealEstate from './pages/companies/RealEstate.jsx'

// Every route in one place. Company slugs match src/data/companies.js.
export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/companies', element: <CompaniesPage /> },
  { path: '/companies/clothing-trims-international', element: <ClothingTrimsInternational /> },
  { path: '/companies/clothing-fashion-impex-ltd', element: <ClothingFashionImpex /> },
  { path: '/companies/lgmp', element: <Lgmp /> },
  { path: '/companies/cgmap', element: <Cgmap /> },
  { path: '/companies/unipexel', element: <Unipexel /> },
  { path: '/companies/mirpur-department-store', element: <MirpurDepartmentStore /> },
  { path: '/companies/real-estate', element: <RealEstate /> },
  { path: '/brands', element: <Navigate to="/companies" replace /> },
  { path: '/leadership', element: <LeadershipPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFound /> },
]
