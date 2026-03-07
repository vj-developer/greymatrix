import { 
  Globe, 
  Layers, 
  Code2, 
  Palette, 
  Cpu, 
  Video, 
  Zap, 
  Clock, 
  Rocket, 
  Bot,
  Smartphone,
  Layout,
  TrendingDown,
  Ghost,
  AlertTriangle,
  Globe2,
  BarChart3,
  Workflow
} from 'lucide-react';
import { ServiceItem, ProductItem, PortfolioItem, TestimonialItem, ValuePropItem, ClientLogo, RiskItem, BenefitItem, PricingItem } from './types';

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Modern, responsive, SEO-friendly websites built with the latest technologies to ensure performance and scalability.',
    icon: Globe,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'High-performance native and cross-platform mobile applications designed for seamless user experiences on iOS and Android.',
    icon: Smartphone,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric interface design and experience mapping that turns complex requirements into intuitive, engaging digital products.',
    icon: Layout,
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    description: 'End-to-end architecture, UI/UX design, robust backend development, and secure deployment for scalable software products.',
    icon: Layers,
  },
  {
    id: 'custom-soft',
    title: 'Custom Software Solutions',
    description: 'Tailored business applications, dashboards, and internal workflow systems designed to optimize your operations.',
    icon: Code2,
  },
  {
    id: 'branding',
    title: 'Branding & Digital Identity',
    description: 'Comprehensive design systems, logos, color palettes, and visual kits that define your brand\'s digital presence.',
    icon: Palette,
  },
  {
    id: 'ai',
    title: 'AI Integrations & Automation',
    description: 'Leveraging artificial intelligence to build internal automations, smart tools, and efficient business workflows.',
    icon: Cpu,
  },
  {
    id: 'content',
    title: 'Content & Creative Systems',
    description: 'Streamlined digital content pipelines, testimonial management systems, and automated video branding solutions.',
    icon: Video,
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'assetra',
    title: 'Assetra',
    status: 'Private Beta',
    description: 'A smart digital asset & document management platform designed for enterprise efficiency and security.',
    logoUrl: 'https://i.ibb.co/3y569H98/Assetra-Owl.jpg'
  },
  {
    id: 'trustfolio',
    title: 'Trustfolio',
    status: 'Under Development',
    description: 'AI-powered testimonial collection and automated branding system to build social proof effortlessly.',
    logoUrl: 'https://i.ibb.co/FkrYFdGC/Trustfolio-logo.png'
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'manam',
    title: "Manam Photography",
    category: 'Portfolio / Booking',
    description: 'A sleek, artistic portfolio and booking website for a Wedding photography studio, optimized for lead generation.',
    imageUrl: 'https://iili.io/qxyDbz7.png', 
    link: 'https://manamphotography.in/',
    devlink: 'https://manam.netlify.app/'
  },
  {
    id: 'naas',
    title: 'Naas Al Hayat Trading LLC',
    category: 'Corporate / FMCG',
    description: 'A comprehensive corporate website for a leading Abu Dhabi-based trading company, focusing on product cataloging and B2B lead generation.',
    imageUrl: null, 
    link: 'https://naasalhayat.com/',
    devlink: 'https://naasalhayat.netlify.app/'
  },
  {
    id: 'skiddi',
    title: 'Skiddi Studio',
    category: 'Creative Studio',
    description: 'A visually immersive website for a creative photography studio, featuring high-resolution galleries and booking integration.',
    imageUrl: 'https://i.ibb.co/bRvm7PDh/skiddi.png', 
    link: 'https://skiddi.netlify.app/'
  },
  {
    id: 'giggles',
    title: 'Giggles Photography',
    category: 'Portfolio / Booking',
    description: 'An elegant portfolio and service booking platform designed for a niche photography business, optimizing the client journey.',
    imageUrl: 'https://i.ibb.co/wNkTPJF0/giggles.png', 
    link: 'https://gigglesphotography.netlify.app/'
  },
  {
    id: 'mentor',
    title: 'MentorHints',
    category: 'EdTech Platform',
    description: 'A clean, accessible mentorship and knowledge-sharing platform connecting industry experts with aspiring professionals.',
    imageUrl: null, 
    link: 'https://mentorhints.netlify.app/'
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Naas Al Hayat', logo: 'https://www.naasalhayat.com/assets/NaasalhayatTransparent-dibGUGmI.png', url: 'https://naasalhayat.netlify.app/' },
  { name: 'Skiddi Studio', logo: 'https://skiddi.netlify.app/assets/skiddi_studio-DS9FzGjQ.png', url: 'https://skiddi.netlify.app/' },
  { name: 'Giggles Photography', logo: 'https://chandransteelsonline.com/wp-content/uploads/2024/10/Chandran-steels-1-e1729315739935.webp', url: 'https://gigglesphotography.netlify.app/' },
  { name: 'MentorHints', logo: 'https://mentorhints.netlify.app/assets/logo_transparent-DOiCDLM3.png', url: 'https://mentorhints.netlify.app/' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: "Grey Matrix transformed our digital presence. Their attention to detail and ability to understand our specific business needs was impressive.",
    author: "Ajmal Basheer",
    role: "Co-founder",
    company: "Naas Al Hayat"
  },
  {
    id: '2',
    quote: "The team delivered a stunning portfolio site that perfectly captures my photography style. Booking rates have increased significantly.",
    author: "Sasikala",
    role: "Founder",
    company: "Giggles Photography"
  },
  {
    id: '3',
    quote: "Professional, timely, and future-forward. They built a mentorship platform that is intuitive and scalable.",
    author: "Abin",
    role: "Founder",
    company: "MentorHints"
  },
];

export const VALUE_PROPS: ValuePropItem[] = [
  {
    id: 'future',
    title: 'Future-Ready Tech',
    description: 'We use modern frameworks and AI-native tools to ensure your product lasts for years, not months.',
    icon: Rocket
  },
  {
    id: 'delivery',
    title: 'Fast & Premium',
    description: 'Our agile workflow ensures rapid delivery without compromising on the premium quality we promise.',
    icon: Zap
  },
  {
    id: 'engineering',
    title: 'Product-First',
    description: 'We don\'t just code; we engineer products with a focus on user retention and business scalability.',
    icon: Code2
  },
  {
    id: 'ai-workflow',
    title: 'AI-Native Workflow',
    description: 'Leveraging the latest in AI automation to speed up development and optimize your business processes.',
    icon: Bot
  },
];

export const DIGITAL_RISKS: RiskItem[] = [
  {
    id: 'invisibility',
    title: 'Digital Invisibility',
    description: '75% of users judge a company’s credibility based on their website design. Without one, you simply don’t exist to modern consumers.',
    icon: Ghost 
  },
  {
    id: 'inefficiency',
    title: 'Operational Inefficiency',
    description: 'Manual workflows cost businesses 30% of their annual revenue. Automation is no longer a luxury, but a survival necessity.',
    icon: AlertTriangle
  },
  {
    id: 'competitors',
    title: 'Losing Market Share',
    description: 'Your competitors are leveraging AI and data analytics to steal your customers. Staying offline means voluntarily stepping aside.',
    icon: TrendingDown
  }
];

export const DIGITAL_BENEFITS: BenefitItem[] = [
  {
    id: 'global',
    title: 'Global Reach',
    description: 'Break geographical boundaries. Your business becomes accessible to millions, 24/7, without opening new physical branches.',
    icon: Globe2
  },
  {
    id: 'data',
    title: 'Data-Driven Decisions',
    description: 'Stop guessing. Use real-time analytics to understand customer behavior, predict trends, and optimize your strategy.',
    icon: BarChart3
  },
  {
    id: 'automation',
    title: 'Automated Efficiency',
    description: 'Reduce human error and operational costs by automating repetitive tasks, freeing your team to focus on growth.',
    icon: Workflow
  }
];

export const PRICING_PACKAGES: PricingItem[] = [
  {
    id: 'starter',
    title: 'Starter Website',
    price: '₹4,999',
    description: 'Best for small businesses, freelancers, simple online presence.',
    features: [
      'One-page modern, responsive website',
      'Hero, About, Services, Contact sections',
      'WhatsApp chat integration',
      'Lead capture form',
      'Basic SEO (title, meta tags)',
      '2 design revisions',
      'Delivery: 2–3 days'
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'business',
    title: 'Business Website',
    price: '₹14,999',
    description: 'Best for growing businesses, agencies, service providers.',
    popular: true,
    features: [
      '4–6 page website',
      'Custom professional UI design',
      'Fully responsive',
      'Portfolio or gallery section',
      'WhatsApp + Email lead integration',
      'Enhanced SEO structure',
      'Basic animations',
      '3 design revisions',
      'Delivery: 5–7 days'
    ],
    buttonText: 'Build My Website'
  },
  {
    id: 'premium',
    title: 'Premium / Custom',
    price: '₹29,999+',
    description: 'Best for Brands needing advanced custom websites.',
    features: [
      'Fully custom multi-page website',
      'Advanced UI/UX',
      'Blog or CMS integration (optional)',
      'Custom animations & micro-interactions',
      'Integrations (API, CRM, automations)',
      'Full SEO structure',
      'High-performance optimization',
      'Priority support'
    ],
    buttonText: 'Request Quote'
  }
];