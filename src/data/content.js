import { Shirt, HeartPulse, Cpu, Store, Landmark, Award, Handshake, Lightbulb, TrendingUp } from 'lucide-react'

// The five business categories of the group, with the companies in each (slugs match companies.js).
export const businessCategories = [
  { key: 'apparel', title: 'Apparel & Accessories', icon: Shirt, text: 'Garment accessories and apparel buying.', slugs: ['clothing-trims-international', 'clothing-fashion-impex-ltd'] },
  { key: 'healthcare', title: 'Healthcare', icon: HeartPulse, text: 'Healthcare and clinic services.', slugs: ['lgmp', 'cgmap'] },
  { key: 'technology', title: 'Technology', icon: Cpu, text: 'Software and technology solutions.', slugs: ['unipexel'] },
  { key: 'retail', title: 'Retail', icon: Store, text: 'A department store serving its community.', slugs: ['mirpur-department-store'] },
  { key: 'realestate', title: 'Real Estate', icon: Landmark, text: 'An upcoming venture in real estate.', slugs: ['real-estate'] },
]

// Shared values of the group.
export const values = [
  { icon: Award, title: 'Quality', text: 'Doing every job well, whatever the industry.' },
  { icon: Handshake, title: 'Trust', text: 'Honest dealing with partners, customers and teams.' },
  { icon: Lightbulb, title: 'Innovation', text: 'Looking for better ways to serve and to grow.' },
  { icon: TrendingUp, title: 'Long-term growth', text: 'Building businesses that last for generations.' },
]
