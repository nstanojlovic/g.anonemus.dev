export const profile = {
  nickname: 'anonemus',
  name: 'Nemanja Stanojlović',
  role: 'Full-Stack / WordPress Developer',
  location: 'Belgrade, Serbia',
  yearsExperience: '7+',
  email: 'nstanojlovic@hotmail.com',
  phone: '+381 60 539 0533',
  github: 'https://github.com/trinity-rank',
  linkedin: 'https://www.linkedin.com/in/nemanja-stanojlovic/',
  summary:
    'I build and maintain server-rendered products with Laravel, WordPress and Magento — custom themes, packages and integrations, obsessively tuned for page speed, technical SEO and clean, maintainable code.',
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  current?: boolean
}

export const experience: Experience[] = [
  {
    company: 'TrinityRank',
    role: 'Full-Stack Developer',
    period: 'Aug 2019 — Present',
    location: 'Belgrade',
    current: true,
    description:
      'Building and maintaining Laravel and WordPress projects: custom themes, Laravel packages, premium theme adaptations, server administration and SEO best practices.',
  },
  {
    company: 'MediaVista',
    role: 'Full-Stack Developer',
    period: 'Feb 2023 — Mar 2024',
    location: 'Belgrade',
    description:
      'Created and maintained WordPress and HubSpot websites while owning technical SEO and page-speed improvements across the portfolio.',
  },
  {
    company: 'CP Dev',
    role: 'PHP Developer',
    period: 'Jul 2018 — Jul 2019',
    location: 'Remote',
    description:
      'Web scraping with PHP, building JavaScript web applications and delivering WordPress websites for a range of clients.',
  },
  {
    company: '30hills',
    role: 'Web Developer',
    period: 'Jun 2017 — Jul 2018',
    location: 'Belgrade',
    description:
      'Built a time-tracking tool in Angular 2, an employee-benefits tool for PwC, client WordPress sites, and a Magento 2 web shop for Fashion&Friends.',
  },
]

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'PHP',
    items: ['Laravel', 'WordPress', 'Livewire', 'Magento 2'],
  },
  {
    title: 'Frontend',
    items: ['JavaScript', 'jQuery', 'Tailwind', 'React', 'HTML5', 'Astro', 'Vue'],
  },
  {
    title: 'Performance & SEO',
    items: ['Technical SEO', 'Page Speed', 'Audit Optimization', 'Google Tag Manager', 'Responsive Design'],
  },
  {
    title: 'Infra & Tooling',
    items: ['Git', 'Docker', 'Laravel Forge', 'Cloudflare', 'AWS Storage', 'Composer'],
  },
]

export type Project = {
  name: string
  url: string
  stack: 'Laravel' | 'WordPress'
}

export const laravelProjects: Project[] = [
  { name: 'fortunly.com', url: 'https://fortunly.com', stack: 'Laravel' },
  { name: 'smallbizgenius.net', url: 'https://smallbizgenius.net', stack: 'Laravel' },
  { name: 'techjury.net', url: 'https://techjury.net', stack: 'Laravel' },
  { name: 'trinityrank.com', url: 'https://trinityrank.com', stack: 'Laravel' },
  { name: '99firms.com', url: 'https://99firms.com', stack: 'Laravel' },
  { name: 'dataprot.net', url: 'https://dataprot.net', stack: 'Laravel' },
  { name: 'kommandotech.com', url: 'https://kommandotech.com', stack: 'Laravel' },
  { name: 'webtribunal.net', url: 'https://webtribunal.net', stack: 'Laravel' },
  { name: 'legaljobs.io', url: 'https://legaljobs.io', stack: 'Laravel' },
]

export const wordpressProjects: Project[] = [
  { name: 'review42.com', url: 'https://review42.com', stack: 'WordPress' },
  { name: 'playnpay.co.uk', url: 'https://playnpay.co.uk', stack: 'WordPress' },
  { name: 'betting-sites.me.uk', url: 'https://betting-sites.me.uk/', stack: 'WordPress' },
  { name: 'betfy.co.uk', url: 'https://betfy.co.uk', stack: 'WordPress' },
  { name: 'bestbingouk.com', url: 'https://bestbingouk.com', stack: 'WordPress' },
  { name: 'libertygambling.com', url: 'https://libertygambling.com', stack: 'WordPress' },
  { name: 'aem.eco', url: 'https://aem.eco/', stack: 'WordPress' },
]

export const education = {
  school: 'Singidunum University',
  faculty: 'Faculty of Informatics and Computing',
  location: 'Belgrade',
  year: '2017',
  detail: 'Web development, Python, PHP and cryptography fundamentals.',
}
