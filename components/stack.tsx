import { Reveal } from '@/components/motion'
import { skillGroups } from '@/lib/portfolio-data'

export function Stack() {
  return (
    <section id="stack" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Toolbox</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md font-mono text-sm text-muted-foreground">
              The stack I reach for — from PHP backends to the SEO and infrastructure work that keeps them fast.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={120 + index * 70}>
              <div className="flex h-full flex-col gap-4 bg-card p-6 transition-colors duration-300 hover:bg-secondary/60">
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{group.title}</h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
