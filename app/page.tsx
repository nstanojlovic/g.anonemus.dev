import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Stack } from '@/components/stack'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Projects />
      <Experience />
      <Stack />
      <Contact />
    </main>
  )
}
