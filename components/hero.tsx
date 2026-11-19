import { ArrowUpRight, Download, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/motion'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      {/* faint engineering grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-grid-drift opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal immediate delay={0}>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Open to full-stack &amp; WordPress work
          </div>
        </Reveal>

        <Reveal immediate delay={100}>
          <h1 className="mt-8 text-pretty text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            Nemanja
            <br />
            <span className="text-muted-foreground">Stanojlović</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <Reveal immediate delay={220}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal immediate delay={320}>
            <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 font-mono text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Experience</dt>
                <dd className="mt-1 text-2xl text-foreground">{profile.yearsExperience} yrs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Based in</dt>
                <dd className="mt-1 text-2xl text-foreground">Belgrade</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal immediate delay={420}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-[transform,opacity] duration-300 hover:opacity-90 active:scale-[0.98]"
            >
              View selected work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/cv"
              download="Nemanja-Stanojlovic-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-muted-foreground transition-[transform,border-color,color] duration-300 hover:border-primary hover:text-foreground active:scale-[0.98]"
            >
              <Download className="size-4" />
              Download CV
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-muted-foreground transition-[transform,border-color,color] duration-300 hover:border-primary hover:text-foreground active:scale-[0.98]"
              >
                <ExternalLink className="size-4" />
                GitHub
              </a>
            )}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-muted-foreground transition-[transform,border-color,color] duration-300 hover:border-primary hover:text-foreground active:scale-[0.98]"
            >
              <ExternalLink className="size-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
