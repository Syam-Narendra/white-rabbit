// ─── White Rabbit – Central Data File ───────────────────────────────────────

export const BRAND = {
  name: "White Rabbit",
  tagline: "Software that works as hard as you do.",
  description:
    "White Rabbit builds simplified, powerful business applications for modern teams. Fast to set up, easy to use, and built to scale.",
  email: "hello@whiterabbit.app",
  phone: "+91 98765 43210",
  address: "42, Tech Park, Bengaluru, Karnataka – 560001, India",
  founded: "2024",
  copyright: `© ${new Date().getFullYear()} White Rabbit Software Pvt. Ltd. All rights reserved.`,
};

export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  icon: string;
  status: "available" | "coming-soon";
  url: string;
}

export const APPS: App[] = [
  {
    slug: "bill-rabbit",
    name: "Bill Rabbit",
    tagline: "Billing, simplified.",
    description:
      "A no-fuss billing application for small and medium businesses. Create invoices, track payments, manage GST, and get paid faster.",
    features: [
      "Instant invoice generation",
      "GST & tax management",
      "Payment tracking",
      "Customer ledger",
      "PDF export & print",
      "Multi-business support",
    ],
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
    icon: "🧾",
    status: "available",
    url: "#",
  },
  {
    slug: "gym-rabbit",
    name: "Gym Rabbit",
    tagline: "Your gym, fully managed.",
    description:
      "A simplified gym management system with member onboarding, attendance tracking, payment renewals, and plan management — all in one place.",
    features: [
      "Member management",
      "Attendance tracking",
      "Payment & plan renewals",
      "Trainer assignment",
      "Revenue dashboard",
      "SMS / WhatsApp reminders",
    ],
    color: "#10b981",
    gradient: "linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)",
    icon: "🏋️",
    status: "coming-soon",
    url: "#",
  },
  {
    slug: "school-rabbit",
    name: "School Rabbit",
    tagline: "Schools made effortless.",
    description:
      "A complete school management system covering admissions, attendance, fee collection, timetables, and parent communication.",
    features: [
      "Student admissions",
      "Attendance management",
      "Fee collection & receipts",
      "Timetable builder",
      "Parent communication",
      "Staff payroll",
    ],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)",
    icon: "🏫",
    status: "coming-soon",
    url: "#",
  },
];

export interface Feature {
  icon: string;
  label: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "🧾",
    label: "Billing & Invoicing",
    desc: "Generate professional invoices and manage payments in seconds",
  },
  {
    icon: "📊",
    label: "Business Analytics",
    desc: "Track revenue, expenses, and growth with clear dashboards",
  },
  {
    icon: "👥",
    label: "Customer Management",
    desc: "Keep all your customer records, history, and ledgers organized",
  },
  {
    icon: "🔔",
    label: "Smart Reminders",
    desc: "Auto-send payment and renewal reminders via SMS or WhatsApp",
  },
  {
    icon: "🔒",
    label: "Secure & Reliable",
    desc: "Your data is encrypted and backed up automatically every day",
  },
  {
    icon: "📱",
    label: "Works Everywhere",
    desc: "Access from any device — desktop, tablet, or mobile browser",
  },
];

export interface NavItem {
  icon: string;
  label: string;
  desc: string;
}

export const NAV_DROPDOWNS: Record<string, NavItem[]> = {
  Products: [
    { icon: "🧾", label: "Bill Rabbit",   desc: "Simplified billing app" },
    { icon: "🏋️", label: "Gym Rabbit",    desc: "Gym management system – Coming Soon" },
    { icon: "🏫", label: "School Rabbit", desc: "School management system – Coming Soon" },
  ],
  Company: [
    { icon: "🐇", label: "About Us",   desc: "Our story & mission" },
    { icon: "📞", label: "Contact",    desc: "Get in touch with us" },
    { icon: "💼", label: "Careers",    desc: "Join the White Rabbit team" },
    { icon: "📰", label: "Blog",       desc: "Insights & product updates" },
  ],
};

export interface TeamMember {
  role: string;
  name: string;
  color: string;
}

export const TEAM: TeamMember[] = [
  { role: "Founder & CEO",       name: "Arjun R",    color: "#3b82f6" },
  { role: "CTO",                 name: "Priya M",    color: "#8b5cf6" },
  { role: "Lead Developer",      name: "Kiran S",    color: "#10b981" },
  { role: "Product Designer",    name: "Neha V",     color: "#f59e0b" },
  { role: "Backend Engineer",    name: "Dev P",      color: "#ef4444" },
  { role: "Frontend Engineer",   name: "Riya T",     color: "#06b6d4" },
  { role: "QA Engineer",         name: "Aman K",     color: "#f97316" },
  { role: "Business Dev",        name: "Shruti B",   color: "#d946ef" },
];

export const HERO = {
  badge: "Now Available",
  badgeDetail: "New tools for growth",
  heading: "Software That Helps\nBusinesses Grow Faster",
  subheading:
    "We build powerful, modern software products that help businesses automate operations, manage customers, and scale faster. From startups to enterprises, our solutions simplify complex workflows and unlock new opportunities.",
  primaryCta: "Start Using Our Products",
  secondaryCta: "Book a Demo",
  socialProof: "Trusted by 1,200+ businesses",
};

export const ABOUT_US = {
  heading: "Building Software That Businesses Actually Need",
  paragraphs: [
    "We create software products designed specifically for modern businesses. Our focus is simple — build tools that save time, reduce manual work, and help companies operate more efficiently.",
    "Our products are built with reliability, scalability, and performance in mind so that businesses can focus on growth instead of technology problems.",
    "Whether you run a startup, small business, or large organization, our platforms help you manage operations with ease."
  ]
};

export const PLATFORM_PILLARS = [
  {
    icon: "🏢",
    title: "Business Management Platforms",
    desc: "Manage operations, employees, and workflows from a single dashboard.",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)"
  },
  {
    icon: "🤝",
    title: "Customer & Client Management",
    desc: "Organize customers, track interactions, and build stronger relationships.",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #9a3412 0%, #ea580c 50%, #f97316 100%)"
  },
  {
    icon: "💳",
    title: "Subscription & Payment Systems",
    desc: "Automate billing, subscription management, and payment tracking.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #8b5cf6 100%)"
  },
  {
    icon: "📈",
    title: "Analytics & Business Insights",
    desc: "Turn data into decisions with powerful dashboards and reporting tools.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #164e63 0%, #0891b2 50%, #06b6d4 100%)"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Reliable Technology",
    desc: "Our systems are designed to run smoothly even at scale.",
    color: "#3b82f6"
  },
  {
    title: "Easy to Use",
    desc: "Simple interfaces so teams can start using them instantly.",
    color: "#10b981"
  },
  {
    title: "Secure & Scalable",
    desc: "Enterprise-grade security and architecture built for growth.",
    color: "#f59e0b"
  },
  {
    title: "Continuous Innovation",
    desc: "We constantly improve our products with new features and updates.",
    color: "#8b5cf6"
  }
];

export const INDUSTRIES = [
  "Corporate Companies",
  "Startups",
  "Fitness & Gym Businesses",
  "Retail Businesses",
  "Service Businesses",
  "Educational Institutions",
  "Real Estate Companies"
];

export const CTA_SECTION = {
  heading: "Ready to Transform Your Business with Better Software?",
  subheading: "Join businesses that are simplifying their operations and accelerating growth with our technology.",
  primaryCta: "Start Today",
  secondaryCta: "Schedule a Demo"
};

export const ABOUT_PAGE = {
  mission: {
    heading: "Helping Businesses Run Smarter",
    paragraphs: [
      "Our mission is to empower businesses with powerful software that simplifies operations and drives growth.",
      "We believe technology should remove complexity, not create it. That is why we focus on building products that are intuitive, scalable, and reliable."
    ]
  },
  approach: {
    heading: "Simple. Powerful. Scalable.",
    pillars: [
      { title: "User-Focused Design", desc: "Every feature is built around real business needs." },
      { title: "Performance & Reliability", desc: "Our systems are optimized for speed, stability, and security." },
      { title: "Future-Ready Architecture", desc: "Our platforms are built to scale as businesses grow." }
    ]
  },
  philosophy: {
    list: [
      "Save time",
      "Reduce operational complexity",
      "Improve productivity",
      "Provide actionable insights",
      "Enable businesses to scale confidently"
    ]
  },
  difference: {
    list: [
      "Easy to deploy",
      "Flexible to customize",
      "Built with modern technology",
      "Designed for real-world business workflows"
    ]
  },
  contact: {
    heading: "Let’s Build the Future of Business Software Together",
    subheading: "If you're looking for powerful software solutions to streamline your business operations, we'd love to help. Contact our team to learn more about our products and how they can transform your business.",
    primaryCta: "Contact Us",
    secondaryCta: "Book a Consultation"
  }
};

export const CONTACT = {
  heading: "Get in touch",
  subheading:
    "Have a question, want a demo, or just want to say hi? We'd love to hear from you.",
  email: BRAND.email,
  phone: BRAND.phone,
  address: BRAND.address,
  hours: "Monday – Friday, 9 AM – 6 PM IST",
  socials: [
    { label: "Twitter / X", url: "https://twitter.com/whiterabbitapp", icon: "𝕏" },
    { label: "LinkedIn",    url: "https://linkedin.com/company/whiterabbitapp", icon: "in" },
    { label: "Instagram",   url: "https://instagram.com/whiterabbitapp", icon: "◎" },
  ],
};

export const FOOTER_LINKS: Record<string, { label: string; url: string }[]> = {
  Products: [
    { label: "Bill Rabbit",   url: "#" },
    { label: "Gym Rabbit",    url: "#" },
    { label: "School Rabbit", url: "#" },
  ],
  Company: [
    { label: "About",   url: "#" },
    { label: "Blog",    url: "#" },
    { label: "Careers", url: "#" },
    { label: "Contact", url: "/contact" },
  ],
  Support: [
    { label: "Help Center",  url: "#" },
    { label: "Documentation",url: "#" },
    { label: "Status",       url: "#" },
    { label: "Community",    url: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", url: "#" },
    { label: "Terms of Service",url: "#" },
    { label: "Security",       url: "#" },
    { label: "Cookies",        url: "#" },
  ],
};

export const AI_ASSISTANTS = [
  {
    name: "Milli",
    role: "Sales Manager",
    description: "Sales Manager. Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of...",
    image: "/images/milli.png",
  },
  {
    name: "Buddy",
    role: "Business Development Manager",
    description: "Business Development Manager. Your go-to AI for business development, crafting growth strategies, delivering business insights, and excelling in AI for marketing to ensure success in product launches...",
    image: "/images/buddy.png",
  },
  {
    name: "Cassie",
    role: "Customer Support Specialist",
    description: "Customer Support Specialist. As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works...",
    image: "/images/cassie.png",
  },
  {
    name: "Cody",
    role: "eCommerce Manager",
    description: "eCommerce Manager. Streamlines your online store operations, managing inventory, optimizing product listings, and enhancing the customer shopping experience through personalized recommendations...",
    image: "/images/cody.png",
  }
];
