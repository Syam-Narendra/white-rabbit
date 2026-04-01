// ─────────────────────────────────────────────
//  data.ts — Single source of truth for all site content
//  Rabbit · Software that scales with you
// ─────────────────────────────────────────────

/* ============================================
   TYPE DEFINITIONS
   ============================================ */

export interface Brand {
  name: string;
  tagline: string;
  taglineOptions: string[];
  description: string;
  logo: {
    icon: string;
    text: string;
  };
}

export interface HeroCTA {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
}

export interface Hero {
  headline: string;
  subheadline: string;
  ctas: HeroCTA[];
  socialProof: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  icon: string;
  color: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface Footer {
  contact: {
    email: string;
    location: string;
  };
  columns: FooterColumn[];
  social: {
    platform: string;
    href: string;
    icon: string;
  }[];
  copyright: string;
  legalLinks: FooterLink[];
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterHandle?: string;
}

export interface SiteData {
  brand: Brand;
  hero: Hero;
  products: Product[];
  features: Feature[];
  stats: Stat[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  footer: Footer;
  seo: SEO;
}

/* ============================================
   SITE DATA
   ============================================ */

export const siteData: SiteData = {

  // ──────────────────────────────────────────
  //  BRAND
  // ──────────────────────────────────────────
  brand: {
    name: "ARabbit",
    tagline: "Software that scales with you.",
    taglineOptions: [
      "Software that scales with you.",
      "Move fast. Build smart.",
      "Your ops, on autopilot.",
      "Less manual work. More growth.",
      "The engine behind modern businesses.",
    ],
    description:
      "We build software products that help businesses streamline operations, improve efficiency, and scale faster.",
    logo: {
      icon: "🐇",
      text: "Rabbit",
    },
  },

  // ──────────────────────────────────────────
  //  HERO
  // ──────────────────────────────────────────
  hero: {
    headline: "Building Software for Businesses",
    subheadline:
      "Rabbit builds the tools modern businesses use to simplify billing, manage teams, and scale operations — without the overhead.",
    ctas: [
      {
        label: "Get Started Free",
        href: "/signup",
        variant: "primary",
      },
      {
        label: "Book a Demo",
        href: "/demo",
        variant: "secondary",
      },
      {
        label: "See Products →",
        href: "#products",
        variant: "ghost",
      },
    ],
    socialProof: "Trusted by 1000+ businesses",
  },

  // ──────────────────────────────────────────
  //  PRODUCTS
  // ──────────────────────────────────────────
  products: [
    {
      name: "Bill Bit",
      slug: "bill-bit",
      tagline: "Billing that just works.",
      description:
        "Smart billing and invoicing tool for businesses. Generate GST-compliant invoices, handle recurring billing effortlessly, and get real-time financial insights — all from one clean dashboard.",
      features: [
        {
          title: "GST Billing",
          description:
            "Generate fully compliant GST invoices with smart tax calculations and HSN code mapping.",
        },
        {
          title: "Smart Reports",
          description:
            "Daily, weekly, and monthly reports generated instantly. Export to PDF, Excel, or share via link.",
        },
        {
          title: "Recurring Billing",
          description:
            "Set up subscription-based invoicing with built-in reminders and payment tracking.",
        },
        {
          title: "Clean, Simple UI",
          description:
            "Designed for speed. Create an invoice in under 30 seconds with zero learning curve.",
        },
      ],
      icon: "💳",
      color: "#6366f1",
      cta: {
        label: "Try Bill Bit Free",
        href: "/products/bill-bit",
      },
    },
    {
      name: "Gym Rabbit",
      slug: "gym-rabbit",
      tagline: "Your gym, fully managed.",
      description:
        "All-in-one gym management and CRM software. Track members, manage subscriptions, monitor attendance, and grow your fitness business with data-driven insights.",
      features: [
        {
          title: "Member Tracking",
          description:
            "Complete member profiles with health data, membership history, and workout preferences.",
        },
        {
          title: "Subscription Management",
          description:
            "Flexible plans, auto-renewals, and payment reminders. Never miss a renewal again.",
        },
        {
          title: "Attendance System",
          description:
            "QR-based or biometric check-in. Real-time occupancy tracking and peak-hour analytics.",
        },
        {
          title: "Growth Analytics",
          description:
            "Retention rates, revenue trends, and member acquisition insights in one dashboard.",
        },
      ],
      icon: "🏋️",
      color: "#10b981",
      cta: {
        label: "Try Gym Rabbit Free",
        href: "/products/gym-rabbit",
      },
    },
    {
      name: "School Rabbit",
      slug: "school-rabbit",
      tagline: "Smarter school operations.",
      description:
        "Complete school management and CRM system. From admissions to alumni — manage students, staff, fees, attendance, and parent communication in one unified platform.",
      features: [
        {
          title: "Student Management",
          description:
            "Centralized profiles with academic records, health info, and behavioral tracking.",
        },
        {
          title: "Attendance Tracking",
          description:
            "Seamless daily attendance with instant parent notifications and absence pattern detection.",
        },
        {
          title: "Fee Management",
          description:
            "Flexible fee structures, online payments, instant receipts, and overdue reminders.",
        },
        {
          title: "Parent Communication",
          description:
            "Built-in messaging, announcements, and report card sharing with read receipts.",
        },
      ],
      icon: "🎓",
      color: "#f59e0b",
      cta: {
        label: "Try School Rabbit Free",
        href: "/products/school-rabbit",
      },
    },
  ],

  // ──────────────────────────────────────────
  //  FEATURES (generic SaaS benefits)
  // ──────────────────────────────────────────
  features: [
    {
      title: "Lightning Fast",
      description:
        "Built on modern infrastructure. Every interaction feels instant, every page loads in milliseconds.",
      icon: "⚡",
    },
    
    {
      title: "Scales Effortlessly",
      description:
        "10 users or 10,000 — our architecture grows with you. No migrations, no downtime.",
      icon: "📈",
    },
    
    {
      title: "Beautiful by Default",
      description:
        "Interfaces designed for humans. Clean, intuitive, and enjoyable to use every single day.",
      icon: "✨",
    },
    {
      title: "24/7 Support",
      description:
        "Real humans, real help. Get support via chat, email, or phone — whenever you need it.",
      icon: "💬",
    },
  ],

  // ──────────────────────────────────────────
  //  STATS
  // ──────────────────────────────────────────
  stats: [
    {
      value: "1000",
      label: "Businesses trust Rabbit",
      suffix: "+",
    },
    {
      value: "99.9",
      label: "Uptime guaranteed",
      suffix: "%",
    },
    {
      value: "50",
      label: "Invoices generated daily",
      suffix: "K+",
    },
    {
      value: "4.9",
      label: "Average rating",
      suffix: "★",
    },
  ],

  // ──────────────────────────────────────────
  //  TESTIMONIALS
  // ──────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Bill Bit replaced three different tools we were using. Our billing now runs itself — we save at least 15 hours a week.",
      author: "Priya Sharma",
      role: "Operations Head",
      company: "NovaTech Solutions",
      rating: 5,
    },
    {
      quote:
        "Gym Rabbit transformed how we manage our 3 branches. Member retention went up 40% in just two months after onboarding.",
      author: "Arjun Reddy",
      role: "Founder",
      company: "Iron Core Fitness",
      rating: 5,
    },
    {
      quote:
        "We moved from spreadsheets to School Rabbit overnight. Parents love the real-time updates, and our admin team finally has room to breathe.",
      author: "Meena Krishnan",
      role: "Principal",
      company: "Sunrise International School",
      rating: 5,
    },
  ],

  // ──────────────────────────────────────────
  //  FAQ
  // ──────────────────────────────────────────
  faq: [
    {
      question: "Is there a free plan?",
      answer:
        "Yes — every Rabbit product includes a generous free tier. No credit card required. You can upgrade anytime as your business grows.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "Most teams are up and running in under 10 minutes. We offer guided onboarding, data import tools, and live support to make the transition seamless.",
    },
    {
      question: "Can I use multiple Rabbit products together?",
      answer:
        "Absolutely. All Rabbit products share a unified account and integrate natively. Manage billing, members, and students from one login.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is non-negotiable. We use 256-bit AES encryption, continuous daily backups, and role-based access controls. Your data stays yours — always.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes. For teams with specific workflows, we offer custom integrations, white-label options, and dedicated account management. Reach out to discuss your needs.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "All plans include email and chat support. Pro and Business plans get priority support with under 2-hour response times and a dedicated success manager.",
    },
  ],

  // ──────────────────────────────────────────
  //  FOOTER
  // ──────────────────────────────────────────
  footer: {
    contact: {
      email: "contact@arabbit.in",
      location: "Rajahmundry, East Godavari, India",
    },
    columns: [
      {
        title: "Products",
        links: [
          { label: "Bill Bit", href: "/products/bill-bit" },
          { label: "Gym Rabbit", href: "/products/gym-rabbit" },
          { label: "School Rabbit", href: "/products/school-rabbit" },
          { label: "Pricing", href: "/pricing" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
          { label: "Partners", href: "/partners" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Help Center", href: "/help" },
          { label: "API Reference", href: "/api" },
          { label: "Status", href: "/status" },
          { label: "Community", href: "/community" },
        ],
      },
    ],
    social: [
      { platform: "Twitter", href: "https://twitter.com/arabbit", icon: "twitter" },
      { platform: "LinkedIn", href: "https://linkedin.com/company/arabbit", icon: "linkedin" },
      { platform: "GitHub", href: "https://github.com/arabbit", icon: "github" },
      { platform: "Instagram", href: "https://instagram.com/arabbit.in", icon: "instagram" },
    ],
    copyright: "© 2026 Rabbit. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },

  // ──────────────────────────────────────────
  //  SEO
  // ──────────────────────────────────────────
  seo: {
    title: "Rabbit — Software that scales with you",
    description:
      "Rabbit builds modern software tools for businesses. Simplify billing with Bill Bit, manage gyms with Gym Rabbit, and run schools with School Rabbit. Trusted by 1000+ businesses.",
    keywords: [
      "rabbit software",
      "billing software india",
      "GST invoicing tool",
      "gym management software",
      "gym CRM",
      "school management system",
      "school ERP",
      "SaaS India",
      "business software",
      "Bill Bit",
      "Gym Rabbit",
      "School Rabbit",
      "arabbit",
    ],
    ogImage: "/og-image.png",
    twitterHandle: "@arabbit",
  },
};

/* ============================================
   HELPER EXPORTS
   ============================================ */

/** Get a product by its slug */
export function getProduct(slug: string): Product | undefined {
  return siteData.products.find((p) => p.slug === slug);
}

/** Get all product slugs (useful for dynamic routing) */
export function getProductSlugs(): string[] {
  return siteData.products.map((p) => p.slug);
}

/** Get a random tagline option */
export function getRandomTagline(): string {
  const options = siteData.brand.taglineOptions;
  return options[Math.floor(Math.random() * options.length)];
}

/** Get CTA by variant */
export function getCTA(variant: HeroCTA["variant"]): HeroCTA | undefined {
  return siteData.hero.ctas.find((c) => c.variant === variant);
}
