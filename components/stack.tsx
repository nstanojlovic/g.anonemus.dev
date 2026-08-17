import { skillGroups } from '@/lib/portfolio-data'

export function Stack() {
  return (
    <section id="stack" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Toolbox</h2>
          <p className="max-w-md font-mono text-sm text-muted-foreground">
            The stack I reach for — from PHP backends to the SEO and infrastructure work that keeps them fast.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4 bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{group.title}</h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
