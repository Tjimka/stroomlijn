// Stroomlijn — Home content shape. Mirror van home.json 1:1.

export type IconName =
  | "ArrowRight"
  | "ChevronDown"
  | "Check"
  | "Phone"
  | "Mail"
  | "MapPin"
  | "Shield"
  | "Linkedin"
  | "Compass"
  | "Waves"
  | "Building2"
  | "GraduationCap"
  | "Settings2"
  | "Clock";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "on-dark" | "outline-dark";

export interface CTA {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: IconName;
}

export interface Logo { src: string; alt: string }

export interface NavData {
  logo: Logo;
  links: { id: string; label: string }[];
  cta: CTA;
  secondary: { label: string; href: string };
}

export interface HeroData {
  id: string;
  eyebrow: string;
  title: { lead: string; accent: string };
  lead: string;
  ctas: CTA[];
  trust: { icon: IconName; label: string }[];
  slides: string[];
  slideInterval?: number;
}

export interface TrustBarData {
  label: string;
  clients: { src: string; alt: string; height: number }[];
  footnote?: string;
}

export interface WerkwijzeStep {
  n: number;
  icon: IconName;
  title: string;
  desc: string;
  meta: string;
}

export interface WerkwijzeData {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  steps: WerkwijzeStep[];
  cta?: CTA;
}

export type ServiceTone = "teal" | "gold" | "navy";

export interface ServiceCard {
  tone: ServiceTone;
  icon: IconName;
  title: string;
  desc: string;
  bullets: string[];
  cta: CTA;
}

export interface ServicesData {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  cards: ServiceCard[];
}

export interface CTABandData {
  title: string;
  lead: string;
  actions: CTA[];
}

export interface FAQItem { q: string; a: string }

export interface FAQData {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  cta?: CTA;
  items: FAQItem[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterData {
  logo: Logo;
  tagline: string;
  social: { platform: string; icon: IconName; href: string; label: string }[];
  columns: FooterColumn[];
  copyright: string;
  legal: { label: string; href: string }[];
}

export interface HomeContent {
  meta: {
    lang: string;
    title: string;
    description: string;
    favicon: string;
    logo: string;
  };
  nav: NavData;
  hero: HeroData;
  trustBar: TrustBarData;
  werkwijze: WerkwijzeData;
  services: ServicesData;
  ctaBand: CTABandData;
  faq: FAQData;
  footer: FooterData;
}

export interface OnNav { onNav?: (href: string) => void }
