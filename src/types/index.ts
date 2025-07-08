// Core types for the application
export interface Builder {
  name: string;
  github?: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  builders: Builder[];
  github?: string;
  liveLink?: string;
  tags: string[];
  featured?: boolean;
}

export interface ProjectData {
  projectOfTheWeek: Project;
  recentProjects: Project[];
  allProjects: Project[];
}

export interface Speaker {
  name: string;
  role: string;
  image: string;
}

export interface AgendaItem {
  time: string;
  activity: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  isVirtual: boolean;
  registrationLink?: string;
  tags: string[];
  emoji: string;
  speakers: Speaker[];
  agenda: AgendaItem[];
  attendees?: number;
}

export interface EventData {
  upcomingEvent: Event;
  pastEvents: Event[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Chapter {
  name: string;
  leader: string;
  pastEvents: string[];
  upcomingEvent: {
    name: string;
    link: string;
  };
  projects: string[];
  logo: string;
  eventImages: string[];
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// SEO and metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

// Animation types
export interface AnimationVariant {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fonts: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
