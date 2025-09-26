export interface Product {
  id: number;
  title: string;
  description: string;
  sizes: string[];
  image: string;
  gradient: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
}

export interface ToolCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}
