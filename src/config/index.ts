import { NavItem, SocialLink, ThemeConfig } from '@/types';

export const SITE_CONFIG = {
  name: 'Build with Waffle',
  description: 'India\'s first student-led creator movement. A community for misfits, builders, hackers, designers, and dreamers who ship real products.',
  url: 'https://buildwithwaffle.me',
  email: 'buildwithwaffle@gmail.com',
  keywords: [
    'build with waffle',
    'student community',
    'creator movement',
    'builders',
    'hackers',
    'designers',
    'developers',
    'India',
    'student projects',
    'hackathons',
    'coding community',
    'tech community',
    'startup community',
    'programming',
    'web development',
    'open source',
    'collaboration',
    'innovation',
    'learning',
    'education'
  ],
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/Events' },
  { label: 'Philosophy', href: '/Philosophy' },
  { label: 'Letter', href: '/letter' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Discord',
    href: 'https://discord.gg/FryPg2xj3E',
    icon: 'discord',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Buildwithwaffle',
    icon: 'twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/buildwithwaffle',
    icon: 'linkedin',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@buildwithwaffle',
    icon: 'youtube',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/buildwithwaffle/',
    icon: 'instagram',
  },
];

export const FOOTER_LINKS = {
  'Build with Waffle': [
    { label: 'Philosophy', href: '/Philosophy' },
    { label: 'Events', href: '/Events' },
    { label: 'Projects', href: '/projects' },
    { label: 'Start a Chapter', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfCH69gkopLdBQB7OQFPpU3bJ90-dM4IsHB281SIAs9VYdgjg/viewform', external: true },
    { label: 'Contact', href: 'mailto:buildwithwaffle@gmail.com' },
  ],
  'Legal': [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Code of Conduct', href: '/CodeOfConduct' },
  ],
};

export const THEME: ThemeConfig = {
  colors: {
    primary: '#ff6b35',
    secondary: '#4a90e2',
    accent: '#f59e0b',
    background: '#ffffff',
    foreground: '#111827',
    muted: '#6b7280',
    border: '#e5e7eb',
  },
  fonts: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export const EXTERNAL_LINKS = {
  forms: {
    joinCommunity: 'https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187',
    startChapter: 'https://docs.google.com/forms/d/e/1FAIpQLSfCH69gkopLdBQB7OQFPpU3bJ90-dM4IsHB281SIAs9VYdgjg/viewform',
    postProject: '/postyourproject',
  },
  social: {
    discord: 'https://discord.gg/FryPg2xj3E',
    github: 'https://github.com/buildwithwaffle',
    twitter: 'https://x.com/Buildwithwaffle',
    linkedin: 'https://linkedin.com/company/buildwithwaffle',
    youtube: 'https://www.youtube.com/@buildwithwaffle',
    instagram: 'https://www.instagram.com/buildwithwaffle/',
  },
};

export const CSS_VARIABLES = `
  :root {
    --primary-accent: #ff6b35;
    --primary-accent-hover: #e55a2b;
    --primary-accent-light: #fff2ef;
    --primary-accent-shadow: rgba(255, 107, 53, 0.3);
    --primary-accent-shadow-hover: rgba(255, 107, 53, 0.5);
    --background: #ffffff;
    --foreground: #111827;
    --text-secondary: #6b7280;
    --text-tertiary: #9ca3af;
    --border: #e5e7eb;
    --card-background: #ffffff;
    --card-border: #f3f4f6;
  }
`;

export const METADATA_DEFAULTS = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: 'Build with Waffle Team' }],
  creator: 'Build with Waffle',
  publisher: 'Build with Waffle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};
