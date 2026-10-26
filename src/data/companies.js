import { Tag, Ship, HeartPulse, Stethoscope, Cpu, Store, Landmark } from 'lucide-react'

// The seven businesses of the group. Edit text here and every page and card updates.
//   initials  shown inside the logo placeholder
//   logo      optional image path (e.g. '/logos/unipexel.svg'); when set it replaces the initials
//   sector    the industry label
//   text      short description
export const companies = [
  { slug: 'clothing-trims-international', name: 'Clothing Trims International', initials: 'CTI', logo: null, icon: Tag, sector: 'Garment Accessories', text: 'Supplying garment accessories to the apparel industry.' },
  { slug: 'clothing-fashion-impex-ltd', name: 'Clothing Fashion Impex Ltd.', initials: 'CFI', logo: null, icon: Ship, sector: 'Apparel Buying House', text: 'An apparel buying house connecting buyers with apparel manufacturers.' },
  { slug: 'lgmp', name: 'LGMP', initials: 'LG', logo: null, icon: HeartPulse, sector: 'Healthcare / Clinic', text: 'A healthcare and clinic business of Dalal Brothers Group.' },
  { slug: 'cgmap', name: 'CGMAP', initials: 'CG', logo: null, icon: Stethoscope, sector: 'Healthcare / Clinic', text: 'A healthcare and clinic business of Dalal Brothers Group.' },
  { slug: 'unipexel', name: 'Unipexel', initials: 'UP', logo: null, icon: Cpu, sector: 'Software & Technology', text: 'Software and technology solutions from Dalal Brothers Group.' },
  { slug: 'mirpur-department-store', name: 'Mirpur Department Store', initials: 'MDS', logo: null, icon: Store, sector: 'Retail', text: 'A retail department store of Dalal Brothers Group.' },
  { slug: 'real-estate', name: 'Real Estate', initials: 'RE', logo: null, icon: Landmark, sector: 'Upcoming Venture', text: 'An upcoming real estate venture of Dalal Brothers Group.' },
]

export const getCompany = slug => companies.find(c => c.slug === slug)
