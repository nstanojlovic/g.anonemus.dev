import path from 'node:path'
import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import {
  education,
  experience,
  laravelProjects,
  profile,
  skillGroups,
  wordpressProjects,
} from '@/lib/portfolio-data'

Font.register({
  family: 'Inter',
  fonts: [
    { src: path.join(process.cwd(), 'lib/fonts/Inter-Regular.ttf'), fontWeight: 400 },
    { src: path.join(process.cwd(), 'lib/fonts/Inter-SemiBold.ttf'), fontWeight: 600 },
  ],
})

Font.registerHyphenationCallback((word) => [word])

const colors = {
  ink: '#18181b',
  muted: '#52525b',
  accent: '#a16207',
  line: '#e4e4e7',
  paper: '#ffffff',
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9.5,
    color: colors.ink,
    backgroundColor: colors.paper,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 42,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.ink,
  },
  name: {
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: -0.4,
  },
  role: {
    marginTop: 4,
    fontSize: 10,
    color: colors.accent,
    fontWeight: 600,
  },
  contact: {
    alignItems: 'flex-end',
    gap: 2,
  },
  contactLine: {
    fontSize: 8.5,
    color: colors.muted,
  },
  link: {
    color: colors.muted,
    textDecoration: 'none',
  },
  section: {
    marginTop: 16,
  },
  heading: {
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: 8,
  },
  summary: {
    fontSize: 9.5,
    lineHeight: 1.45,
    color: colors.ink,
  },
  job: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 12,
  },
  company: {
    fontSize: 11,
    fontWeight: 600,
  },
  period: {
    fontSize: 8,
    color: colors.muted,
  },
  jobMeta: {
    marginTop: 2,
    fontSize: 8.5,
    color: colors.accent,
  },
  muted: {
    color: colors.muted,
  },
  body: {
    marginTop: 3,
    fontSize: 9,
    lineHeight: 1.4,
    color: colors.ink,
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 4,
    gap: 8,
  },
  skillLabel: {
    width: 108,
    fontSize: 8.5,
    fontWeight: 600,
  },
  skillItems: {
    flex: 1,
    fontSize: 9,
    color: colors.ink,
  },
  projectCols: {
    flexDirection: 'row',
    gap: 28,
  },
  projectCol: {
    flex: 1,
  },
  projectLabel: {
    fontSize: 8.5,
    fontWeight: 600,
    marginBottom: 4,
  },
  projectItem: {
    fontSize: 9,
    color: colors.ink,
    marginBottom: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 18,
    left: 42,
    right: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: colors.muted,
  },
})

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
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
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>{profile.role}</Text>
          </View>
          <View style={styles.contact}>
            <Text style={styles.contactLine}>{profile.location}</Text>
            <Link src={`mailto:${profile.email}`} style={[styles.contactLine, styles.link]}>
              {profile.email}
            </Link>
            <Link src={`tel:${profile.phone.replace(/\s/g, '')}`} style={[styles.contactLine, styles.link]}>
              {profile.phone}
            </Link>
            {profile.github ? (
              <Link src={profile.github} style={[styles.contactLine, styles.link]}>
                {displayUrl(profile.github)}
              </Link>
            ) : null}
            <Link src={profile.linkedin} style={[styles.contactLine, styles.link]}>
              linkedin.com/in/nemanja-stanojlovic
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.summary}>{profile.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {experience.map((job) => (
            <View key={`${job.company}-${job.period}`} style={styles.job} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.period}>{job.period}</Text>
              </View>
              <Text style={styles.jobMeta}>
                {job.role} <Text style={styles.muted}>· {job.location}</Text>
              </Text>
              <Text style={styles.body}>{job.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <View style={styles.jobHeader}>
            <Text style={styles.company}>{education.school}</Text>
            <Text style={styles.period}>Graduated {education.year}</Text>
          </View>
          <Text style={styles.jobMeta}>
            {education.faculty} <Text style={styles.muted}>· {education.location}</Text>
          </Text>
          <Text style={styles.body}>{education.detail}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          {skillGroups.map((group) => (
            <View key={group.title} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{group.title}</Text>
              <Text style={styles.skillItems}>{group.items.join(' · ')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Selected work</Text>
          <View style={styles.projectCols}>
            <View style={styles.projectCol}>
              <Text style={styles.projectLabel}>Laravel</Text>
              {laravelProjects.map((project) => (
                <Link key={project.name} src={project.url} style={[styles.projectItem, styles.link]}>
                  {project.name}
                </Link>
              ))}
            </View>
            <View style={styles.projectCol}>
              <Text style={styles.projectLabel}>WordPress</Text>
              {wordpressProjects.map((project) => (
                <Link key={project.name} src={project.url} style={[styles.projectItem, styles.link]}>
                  {project.name}
                </Link>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>
            {profile.name} · {profile.role}
          </Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              totalPages > 1 ? `${pageNumber} / ${totalPages}` : ''
            }
          />
        </View>
      </Page>
    </Document>
  )
}
