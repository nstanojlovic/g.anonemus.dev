import path from 'node:path'
import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import {
  education,
  experience,
  laravelProjects,
  profile,
  sideProjects,
  skillGroups,
  wordpressProjects,
  type Project,
} from '@/lib/portfolio-data'

Font.register({
  family: 'Inter',
  fonts: [
    { src: path.join(process.cwd(), 'lib/fonts/Inter-Regular.ttf'), fontWeight: 400 },
    { src: path.join(process.cwd(), 'lib/fonts/Inter-SemiBold.ttf'), fontWeight: 600 },
  ],
})

Font.registerHyphenationCallback((word) => [word])

// Mirrors the site: dark header (#232326-ish) with the amber accent.
const colors = {
  ink: '#18181b',
  body: '#3f3f46',
  muted: '#71717a',
  faint: '#a1a1aa',
  line: '#e4e4e7',
  paper: '#ffffff',
  night: '#1c1c21',
  nightText: '#d4d4d8',
  nightMuted: '#8b8b94',
  amber: '#ecb04b', // site primary, for dark backgrounds
  amberInk: '#a16207', // readable amber on white
  amberWash: '#fdf6e7',
  sidebar: '#f6f6f5',
}

const PAGE_X = 36
const SIDEBAR_W = 196

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 8.6,
    color: colors.ink,
    backgroundColor: colors.paper,
    paddingBottom: 30,
  },
  sidebarBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: SIDEBAR_W,
    backgroundColor: colors.sidebar,
  },

  // Header
  header: {
    backgroundColor: colors.night,
    paddingTop: 30,
    paddingBottom: 22,
    paddingHorizontal: PAGE_X,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  eyebrow: {
    fontSize: 7.5,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: colors.amber,
    marginBottom: 6,
  },
  name: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: -0.8,
    color: '#fafafa',
  },
  role: {
    marginTop: 5,
    fontSize: 11,
    color: colors.nightText,
  },
  roleLocation: {
    color: colors.nightMuted,
  },
  stat: {
    alignItems: 'flex-end',
  },
  statNumber: {
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: -1,
    color: colors.amber,
    lineHeight: 1,
  },
  statLabel: {
    marginTop: 3,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: colors.nightMuted,
    textAlign: 'right',
  },
  contactRow: {
    marginTop: 16,
    paddingTop: 11,
    borderTopWidth: 0.75,
    borderTopColor: '#34343b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactDot: {
    width: 3.5,
    height: 3.5,
    borderRadius: 2,
    backgroundColor: colors.amber,
    marginRight: 5,
  },
  contactText: {
    fontSize: 7.8,
    color: colors.nightText,
    textDecoration: 'none',
  },
  accentBar: {
    height: 3,
    backgroundColor: colors.amber,
  },

  // Columns
  columns: {
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    paddingLeft: PAGE_X,
    paddingRight: 22,
    paddingTop: 18,
  },
  side: {
    width: SIDEBAR_W,
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  section: {
    marginBottom: 14,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headingText: {
    fontSize: 7.5,
    fontWeight: 600,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.ink,
  },
  headingRule: {
    flex: 1,
    height: 0.75,
    backgroundColor: colors.line,
    marginLeft: 8,
  },
  headingTick: {
    width: 8,
    height: 2,
    backgroundColor: colors.amber,
    marginRight: 6,
  },

  summary: {
    fontSize: 9.4,
    lineHeight: 1.5,
    color: colors.ink,
  },

  // Timeline
  job: {
    position: 'relative',
    paddingLeft: 14,
    paddingBottom: 9,
    borderLeftWidth: 1,
    borderLeftColor: colors.line,
    marginLeft: 3.5,
  },
  jobLast: {
    borderLeftColor: colors.paper,
    paddingBottom: 0,
  },
  dot: {
    position: 'absolute',
    left: -4.5,
    top: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.faint,
    backgroundColor: colors.paper,
  },
  dotCurrent: {
    borderColor: colors.amber,
    backgroundColor: colors.amber,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  company: {
    fontSize: 10.5,
    fontWeight: 600,
    letterSpacing: -0.1,
  },
  period: {
    fontSize: 7.5,
    color: colors.muted,
    marginTop: 2,
  },
  periodCurrent: {
    fontSize: 7,
    fontWeight: 600,
    color: colors.amberInk,
    backgroundColor: colors.amberWash,
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  jobMeta: {
    marginTop: 1.5,
    fontSize: 8.2,
    fontWeight: 600,
    color: colors.amberInk,
  },
  jobLocation: {
    fontWeight: 400,
    color: colors.muted,
  },
  body: {
    marginTop: 3,
    fontSize: 8.4,
    lineHeight: 1.45,
    color: colors.body,
  },

  // Sidebar
  sideLabel: {
    fontSize: 7.2,
    fontWeight: 600,
    color: colors.muted,
    marginBottom: 4,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2.5,
    marginBottom: 6,
  },
  chip: {
    fontSize: 7.2,
    color: colors.ink,
    backgroundColor: colors.paper,
    borderWidth: 0.75,
    borderColor: colors.line,
    borderRadius: 3,
    paddingVertical: 1.6,
    paddingHorizontal: 4.5,
    textDecoration: 'none',
  },
  chipAccent: {
    color: colors.amberInk,
    backgroundColor: colors.amberWash,
    borderColor: '#f3dca9',
  },

  domains: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  domain: {
    width: '50%',
    fontSize: 7.6,
    lineHeight: 1.6,
    color: colors.body,
    textDecoration: 'none',
  },
  card: {
    backgroundColor: colors.paper,
    borderWidth: 0.75,
    borderColor: colors.line,
    borderLeftWidth: 2.5,
    borderLeftColor: colors.amber,
    borderRadius: 4,
    padding: 9,
    marginBottom: 6,
  },
  cardName: {
    fontSize: 9.5,
    fontWeight: 600,
    color: colors.ink,
    textDecoration: 'none',
  },
  cardUrl: {
    fontSize: 7.2,
    color: colors.amberInk,
    textDecoration: 'none',
    marginTop: 1,
  },
  cardBody: {
    marginTop: 4,
    fontSize: 7.6,
    lineHeight: 1.45,
    color: colors.body,
  },

  eduSchool: {
    fontSize: 10.5,
    fontWeight: 600,
    letterSpacing: -0.1,
  },

  footer: {
    position: 'absolute',
    bottom: 14,
    left: PAGE_X,
    right: PAGE_X,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 6.8,
    color: colors.faint,
  },
})

function displayUrl(url: string) {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '')
}

function Heading({ children }: { children: string }) {
  return (
    <View style={styles.heading}>
      <View style={styles.headingTick} />
      <Text style={styles.headingText}>{children}</Text>
      <View style={styles.headingRule} />
    </View>
  )
}

function ContactItem({ href, children }: { href?: string; children: string }) {
  return (
    <View style={styles.contactItem}>
      <View style={styles.contactDot} />
      {href ? (
        <Link src={href} style={styles.contactText}>
          {children}
        </Link>
      ) : (
        <Text style={styles.contactText}>{children}</Text>
      )}
    </View>
  )
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <View style={styles.domains}>
      {projects.map((project) => (
        <Link key={project.name} src={project.url} style={styles.domain}>
          {project.name}
        </Link>
      ))}
    </View>
  )
}

export function CvDocument() {
  return (
    <Document
      title={`${profile.name} — CV`}
      author={profile.name}
      subject={profile.role}
      creator={profile.name}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebarBg} fixed />

        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.eyebrow}>Curriculum Vitae</Text>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.role}>
                {profile.role}
                <Text style={styles.roleLocation}>  ·  {profile.location}</Text>
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{profile.yearsExperience}</Text>
              <Text style={styles.statLabel}>years shipping{'\n'}for the web</Text>
            </View>
          </View>
          <View style={styles.contactRow}>
            <ContactItem href={`mailto:${profile.email}`}>{profile.email}</ContactItem>
            <ContactItem href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</ContactItem>
            {profile.github ? (
              <ContactItem href={profile.github}>{displayUrl(profile.github)}</ContactItem>
            ) : null}
            <ContactItem href={profile.linkedin}>{displayUrl(profile.linkedin)}</ContactItem>
          </View>
        </View>
        <View style={styles.accentBar} />

        <View style={styles.columns}>
          <View style={styles.main}>
            <View style={styles.section}>
              <Heading>Profile</Heading>
              <Text style={styles.summary}>{profile.summary}</Text>
            </View>

            <View style={styles.section}>
              <Heading>Experience</Heading>
              {experience.map((job, i) => {
                const last = i === experience.length - 1
                return (
                  <View
                    key={`${job.company}-${job.period}`}
                    style={last ? [styles.job, styles.jobLast] : styles.job}
                    wrap={false}
                  >
                    <View style={job.current ? [styles.dot, styles.dotCurrent] : styles.dot} />
                    <View style={styles.jobHeader}>
                      <Text style={styles.company}>{job.company}</Text>
                      <Text style={job.current ? styles.periodCurrent : styles.period}>{job.period}</Text>
                    </View>
                    <Text style={styles.jobMeta}>
                      {job.role} <Text style={styles.jobLocation}>· {job.location}</Text>
                    </Text>
                    <Text style={styles.body}>{job.description}</Text>
                  </View>
                )
              })}
            </View>

            <View style={styles.section} wrap={false}>
              <Heading>Education</Heading>
              <View style={styles.jobHeader}>
                <Text style={styles.eduSchool}>{education.school}</Text>
                <Text style={styles.period}>Graduated {education.year}</Text>
              </View>
              <Text style={styles.jobMeta}>
                {education.faculty} <Text style={styles.jobLocation}>· {education.location}</Text>
              </Text>
              <Text style={styles.body}>{education.detail}</Text>
            </View>
          </View>

          <View style={styles.side}>
            <View style={styles.section}>
              <Heading>Skills</Heading>
              {skillGroups.map((group, gi) => (
                <View key={group.title}>
                  <Text style={styles.sideLabel}>{group.title}</Text>
                  <View style={styles.chips}>
                    {group.items.map((item, ii) => (
                      <Text
                        key={item}
                        style={gi === 0 && ii < 2 ? [styles.chip, styles.chipAccent] : styles.chip}
                      >
                        {item}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {sideProjects.length > 0 ? (
              <View style={styles.section}>
                <Heading>Side project</Heading>
                {sideProjects.map((project) => (
                  <View key={project.name} style={styles.card} wrap={false}>
                    <Link src={project.repo || project.url} style={styles.cardName}>
                      {project.name}
                    </Link>
                    <Link src={project.url} style={styles.cardUrl}>
                      {displayUrl(project.url)}
                    </Link>
                    <Text style={styles.cardBody}>{project.description}</Text>
                    <View style={[styles.chips, { marginTop: 6, marginBottom: 0 }]}>
                      {project.stack.map((item) => (
                        <Text key={item} style={[styles.chip, styles.chipAccent]}>
                          {item}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            ) : null}

            <View style={styles.section}>
              <Heading>Selected work</Heading>
              <Text style={styles.sideLabel}>Laravel</Text>
              <ProjectList projects={laravelProjects} />
              <Text style={styles.sideLabel}>WordPress</Text>
              <ProjectList projects={wordpressProjects} />
            </View>

          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>
            {profile.name} · {profile.role}
          </Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              totalPages > 1 ? `${pageNumber} / ${totalPages}` : 'anonemus.dev'
            }
          />
        </View>
      </Page>
    </Document>
  )
}
