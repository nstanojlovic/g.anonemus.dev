import { Reveal } from '@/components/motion'
import { experience, education } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[240px_1fr]">
          <Reveal>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Experience</h2>
              <p className="mt-4 font-mono text-sm text-muted-foreground">
                Seven years across agencies and product teams in Belgrade and remote.
              </p>
            </div>
          </Reveal>

          <ol className="relative">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 80} as="li" className="relative border-t border-border py-8 first:border-t-0 first:pt-0">
                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium tracking-tight">{job.company}</h3>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                        <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                        Now
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-primary">
                  {job.role} <span className="text-muted-foreground">· {job.location}</span>
                </p>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{job.description}</p>
              </Reveal>
            ))}

            <Reveal delay={experience.length * 80} as="li" className="border-t border-border py-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-medium tracking-tight">{education.school}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Graduated {education.year}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-primary">
                {education.faculty} <span className="text-muted-foreground">· {education.location}</span>
              </p>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{education.detail}</p>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  )
}
