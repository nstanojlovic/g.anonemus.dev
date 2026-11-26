import { ArrowUpRight, CodeXml } from 'lucide-react'
import { Reveal } from '@/components/motion'
import { laravelProjects, sideProjects, wordpressProjects, type Project, type SideProject } from '@/lib/portfolio-data'

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 border-t border-border py-5 transition-[transform,background-color,color] duration-300 hover:translate-x-1 hover:bg-card"
      >
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="font-mono text-xs text-muted-foreground tabular-nums transition-colors duration-300 group-hover:text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-primary md:text-xl">
            {project.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:inline">
            {project.stack}
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </a>
    </Reveal>
  )
}

function SideProjectRow({ project, index }: { project: SideProject; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <div className="grid gap-4 border-t border-border py-6 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xl font-medium tracking-tight transition-colors duration-300 hover:text-primary md:text-2xl"
          >
            {project.name}
            <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </a>
          <p className="mt-2 max-w-2xl text-muted-foreground">{project.description}</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {project.stack.join(' / ')}
          </p>
        </div>
        <div className="flex gap-4 md:pt-1">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-primary underline-offset-4 hover:underline"
          >
            Live site
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <CodeXml className="size-3.5" />
            Source
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="work" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md font-mono text-sm text-muted-foreground">
              A slice of the Laravel and WordPress products I&apos;ve shipped and maintained for editorial, review and
              iGaming brands.
              <br />
              These are just a few of the projects I've worked on.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal delay={100}>
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary">Side projects</h3>
              <span className="font-mono text-xs text-muted-foreground">open source</span>
            </div>
          </Reveal>
          <div className="mt-4 border-b border-border">
            {sideProjects.map((project, i) => (
              <SideProjectRow key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal delay={120}>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary">Laravel</h3>
                <span className="font-mono text-xs text-muted-foreground">{laravelProjects.length} sites</span>
              </div>
            </Reveal>
            <div className="mt-4 border-b border-border">
              {laravelProjects.map((project, i) => (
                <ProjectRow key={project.name} project={project} index={i} />
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={160}>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary">WordPress</h3>
                <span className="font-mono text-xs text-muted-foreground">{wordpressProjects.length} sites</span>
              </div>
            </Reveal>
            <div className="mt-4 border-b border-border">
              {wordpressProjects.map((project, i) => (
                <ProjectRow key={project.name} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
