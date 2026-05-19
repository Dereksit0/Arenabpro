export interface StatItem {
  value: string;
  numericValue: number;
  label: string;
  suffix: string;
}

export interface PainPoint {
  id: string;
  text: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colSpan?: "1" | "2";
  rowSpan?: "1" | "2";
}

export interface AcademyLevel {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatarUrl: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface LogoPartner {
  id: string;
  src: string;
  alt: string;
}

export interface VideoItem {
  id: string;
  src: string;
  title: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  trajectory: string[];
}
