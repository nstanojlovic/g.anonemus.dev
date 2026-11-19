export const profile = {
  nickname: 'anonemus',
  name: 'Nemanja Stanojlović',
  role: 'Full-Stack / WordPress Developer',
  location: 'Belgrade, Serbia',
  yearsExperience: '9+',
  email: 'nstanojlovic@hotmail.com',
  phone: '+381 60 539 0533',
  // Personal GitHub — leave empty to hide it on the site and in the CV
  github: '',
  linkedin: 'https://www.linkedin.com/in/nemanja-stanojlovic/',
  summary:
    'I build and maintain server-rendered products with Laravel and WordPress — custom themes, Filament admin panels, packages and integrations, obsessively tuned for page speed, technical SEO and clean, maintainable code.',
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
    period: 'Mar 2024 — Present',
    location: 'Belgrade',
    current: true,
    description:
      'Rejoined after MediaVista. Leading the rewrite of fortunly.com from a multi-tenant Laravel Nova app to Laravel + Filament with a Blade frontend, and maintaining the company\'s remaining Laravel and WordPress sites: servers, deployments, performance and technical SEO.',
  },
  {
    company: 'MediaVista',
    role: 'Full-Stack Developer',
    period: 'Feb 2023 — Mar 2024',
    location: 'Belgrade',
    description:
      'Agency role building and maintaining client WordPress and HubSpot websites, mostly on shared hosting and cPanel, with occasional AEM and Drupal work. Owned technical SEO and page-speed fixes across the portfolio and worked directly with clients on scope and requirements.',
  },
  {
    company: 'TrinityRank',
    role: 'WordPress / Full-Stack Developer',
    period: 'Aug 2019 — Feb 2023',
    location: 'Belgrade',
    description:
      'Joined to build custom WordPress sites for a portfolio of around 100 affiliate websites. Replaced premium themes with lean custom themes built for Core Web Vitals and technical SEO, cleaned up hacked sites and plugin conflicts, and moved key sites to Laravel (Forge, Cloudflare, DigitalOcean, S3, Mailgun). Set up CI/CD with Buddy.Works and fleet backups with BlogVault.',
  },
  {
    company: 'CP Dev',
    role: 'PHP Developer',
    period: 'Jul 2018 — Jul 2019',
    location: 'Remote',
    description:
      'Built and maintained PHP scrapers on a legacy PHP 5.4 codebase, working independently with minimal handover. Also built JavaScript web apps and delivered WordPress sites for a range of clients.',
  },
  {
    company: '30hills',
    role: 'Web Developer',
    period: 'Jun 2017 — Jul 2018',
    location: 'Belgrade',
    description:
      'Started as an Angular 2 intern and built a time-tracking tool, then an employee-benefits tool for PwC and fully custom client WordPress sites (no premium themes). Part of the team that shipped the Fashion&Friends web shop on Magento 2 Enterprise.',
  },
]

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'PHP',
    items: ['Laravel', 'WordPress', 'Filament', 'Livewire', 'Laravel Nova'],
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
  { name: 'novolyze.com', url: 'https://novolyze.com/', stack: 'WordPress' },
]

export const education = {
  school: 'Singidunum University',
  faculty: 'Faculty of Informatics and Computing',
  location: 'Belgrade',
  year: '2017',
  detail: 'Web development, Python, PHP and cryptography fundamentals.',
}
