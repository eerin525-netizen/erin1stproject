import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company, siteUrl } from '../data'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Per-page search/social metadata. Call once per page (PageHero does it for inner pages).
//   useSeo({ title: 'Our Companies', description: '...' })
// With no title it sets the home-page defaults. `noindex` keeps a page out of search results.
export function useSeo({ title, description = company.description, noindex = false } = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${company.name}` : company.homeTitle
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const url = siteUrl + path

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setCanonical(url)
  }, [title, description, noindex, pathname])
}
