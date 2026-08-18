import { Reveal } from '@/components/motion'
import { profile } from '@/lib/portfolio-data'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'GitHub', value: 'github.com/trinity-rank', href: profile.github },
  { label: 'LinkedIn', value: 'in/nemanja-stanojlovic', href: profile.linkedin },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Have a Laravel or WordPress build that needs a steady hand?
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I&apos;m open to freelance projects and full-time roles. The fastest way to reach me is email.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={220 + index * 70}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col gap-2 bg-card p-6 transition-[transform,background-color,color] duration-300 hover:translate-y-[-2px] hover:bg-secondary"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {link.label}
                </span>
                <span className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                  {link.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal as="footer" className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location} — {profile.yearsExperience} years building for the web</span>
        </div>
      </Reveal>
    </section>
  )
}
