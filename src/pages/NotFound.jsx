import { Button, Container, Section } from '../components/ui'
import { PageHero } from '../components/sections'

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not" em="found." text="Sorry, we could not find that page. It may have moved." seoTitle="Page Not Found" noindex />
      <Section><Container className="center"><Button to="/">Back to home</Button></Container></Section>
    </>
  )
}
