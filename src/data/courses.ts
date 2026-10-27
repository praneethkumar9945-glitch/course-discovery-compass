/**
 * Structured course catalog for SKILL AI India.
 *
 * Single source of truth for the Course Finder matcher and discovery UI.
 * Every course page remains the detailed source; this file only holds the
 * discovery-level facts that already exist on those pages.
 */

export type CategoryId = "ai" | "multimedia" | "management" | "ug-pg" | "online" | "workshop";
export type Audience = "class10" | "class12" | "college" | "graduate" | "professional" | "switcher" | "entrepreneur";
export type Interest = "ai" | "data" | "coding" | "cyber" | "design" | "animation" | "video" | "uiux" | "business" | "marketing" | "finance" | "entrepreneurship";
export type Goal = "job" | "ai-professional" | "freelance" | "startup" | "higher-studies" | "career-switch" | "upskill";
export type Mode = "online" | "offline" | "hybrid";
export type TimeBucket = "3-6" | "6-12" | "12-24" | "flexible";

export interface CourseEntry {
  slug: string;
  name: string;
  href: string;
  category: CategoryId;
  /** One-line career outcome. */
  tagline: string;
  duration: string;
  mode: string;
  level: string;
  skills: string[];
  careers: string[];
  badge?: string;
  features: string[];
  match: {
    audience: Audience[];
    interests: Interest[];
    goals: Goal[];
    modes: Mode[];
    time: TimeBucket[];
  };
}

export const CATEGORIES: { id: CategoryId; label: string; href: string; blurb: string; popular: string[] }[] = [
  {
    id: "ai",
    label: "AI & Data",
    href: "/ai",
    blurb: "Generative AI, Agentic AI, Big Data, MLOps, Data Science and Cyber Security with live projects.",
    popular: ["Gen AI & Agentic AI", "AI Big Data & MLOps", "Advanced Data Science"],
  },
  {
    id: "multimedia",
    label: "Multimedia",
    href: "/multimedia",
    blurb: "Graphic design, video editing, animation, VFX and film production — built around AI workflows.",
    popular: ["AI Graphic Design", "AI Video Editing & VFX", "Animation & VFX"],
  },
  {
    id: "management",
    label: "Management",
    href: "/management",
    blurb: "Operator-led business programs — sales, marketing, finance, people ops and product.",
    popular: ["Business & Entrepreneurship", "Marketing & Growth", "Finance & Accounting"],
  },
  {
    id: "ug-pg",
    label: "UG & PG",
    href: "/ug-programs",
    blurb: "BCA, BBA, B.Com, BA and MBA, MCA, M.Com, MA degrees redesigned for the AI era.",
    popular: ["BCA", "BBA", "MBA"],
  },
  {
    id: "online",
    label: "Online Programs",
    href: "/online-programs",
    blurb: "Short live-cohort programs you can join from anywhere — AI for business, growth, founders and more.",
    popular: ["AI for Business Leaders", "Growth Marketing Bootcamp", "Founder's Bootcamp"],
  },
  {
    id: "workshop",
    label: "Workshops",
    href: "/workshop",
    blurb: "Focused 1-week intensives — start with our Business Analyst workshop.",
    popular: ["Business Analyst Workshop"],
  },
];

export const COURSES: CourseEntry[] = [
  // ---------------- AI & Data ----------------
  {
    slug: "gen-ai", name: "Master's in Gen AI & Agentic AI", href: "/ai/gen-ai", category: "ai",
    tagline: "Build production-grade generative AI systems and autonomous agents.",
    duration: "10 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["LLMs", "LangGraph", "RAG", "Agents"], careers: ["AI Engineer", "GenAI Engineer", "AI Developer"],
    badge: "Most Popular",
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college", "graduate", "professional", "switcher"],
      interests: ["ai", "coding", "data"],
      goals: ["ai-professional", "job", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["6-12"],
    },
  },
  {
    slug: "big-data", name: "Master's in AI Big Data & Advance MLOps", href: "/ai/big-data", category: "ai",
    tagline: "Engineer massive data pipelines, MLOps and AI systems that power enterprises.",
    duration: "12 months", mode: "Online + Offline", level: "Intermediate",
    skills: ["Spark", "Kafka", "MLflow", "Cloud"], careers: ["Data Engineer", "MLOps Engineer", "AI Platform Engineer"],
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["college", "graduate", "professional", "switcher"],
      interests: ["data", "coding", "ai"],
      goals: ["job", "ai-professional", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "advanced-data-science", name: "Advanced Data Science", href: "/ai/advanced-data-science", category: "ai",
    tagline: "From statistics to deep learning — solve real business problems.",
    duration: "3 months", mode: "Online + Offline", level: "Intermediate",
    skills: ["Python", "ML", "DL", "SageMaker"], careers: ["Data Scientist", "ML Engineer", "Data Analyst"],
    badge: "Fast Track",
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["college", "graduate", "professional", "switcher"],
      interests: ["data", "ai"],
      goals: ["job", "ai-professional", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "big-data-cert", name: "Certificate in Big Data", href: "/ai/big-data-cert", category: "ai",
    tagline: "A focused sprint into distributed data systems for working professionals.",
    duration: "6 months", mode: "Online + Offline", level: "Working Professional",
    skills: ["Spark", "Hadoop", "AWS", "Airflow"], careers: ["Big Data Engineer", "Data Engineer", "Analytics Engineer"],
    features: ["Live projects"],
    match: {
      audience: ["graduate", "professional", "switcher"],
      interests: ["data", "coding"],
      goals: ["upskill", "career-switch", "job"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "cyber-security", name: "Expertise in Cyber Security", href: "/ai/cyber-security", category: "ai",
    tagline: "Defend, attack and architect secure systems in the AI era.",
    duration: "12 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Pentest", "SOC", "Cloud Sec", "OSCP"], careers: ["Security Analyst", "Penetration Tester", "SOC Engineer"],
    badge: "Career Focused",
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college", "graduate", "professional", "switcher"],
      interests: ["cyber", "coding"],
      goals: ["job", "career-switch", "ai-professional"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "data-security", name: "Certificate in Data Security", href: "/ai/data-security", category: "ai",
    tagline: "Encryption, compliance, privacy and governance for modern data.",
    duration: "6 months", mode: "Online + Offline", level: "Working Professional",
    skills: ["Encryption", "KMS", "GDPR", "DLP"], careers: ["Security Engineer", "Compliance Analyst", "Privacy Officer"],
    features: ["Live projects"],
    match: {
      audience: ["graduate", "professional", "switcher"],
      interests: ["cyber", "data"],
      goals: ["upskill", "career-switch", "job"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "ai-product-management", name: "Advanced Product Management", href: "/ai/product-management", category: "ai",
    tagline: "Strategy, engineering, data & AI — a 24-week PM operating system with a live-brief capstone.",
    duration: "6 months", mode: "Online + Offline", level: "Graduate / Professional",
    skills: ["Strategy", "Technical PRDs", "Metrics", "AI PRDs"], careers: ["Product Manager", "APM", "Product Analyst"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["graduate", "professional", "switcher", "entrepreneur"],
      interests: ["business", "ai", "uiux"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },

  // ---------------- Multimedia ----------------
  {
    slug: "ai-graphic-design", name: "AI Integrated Graphic Design", href: "/multimedia/ai-graphic-design", category: "multimedia",
    tagline: "Design brand systems and campaigns with modern AI-assisted workflows.",
    duration: "3 or 6 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Photoshop", "Illustrator", "Figma", "AI Design Tools"], careers: ["Graphic Designer", "Brand Designer", "Visual Artist"],
    badge: "Beginner Friendly",
    features: ["Live projects", "Portfolio review", "Placement support"],
    match: {
      audience: ["class10", "class12", "college", "graduate", "switcher"],
      interests: ["design", "ai"],
      goals: ["job", "freelance", "career-switch", "upskill"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "ai-video-editing-vfx", name: "AI Integrated Video Editing & VFX", href: "/multimedia/ai-video-editing-vfx", category: "multimedia",
    tagline: "Edit, grade and finish videos with AI-accelerated post-production pipelines.",
    duration: "3 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Premiere Pro", "After Effects", "AI Video Tools"], careers: ["Video Editor", "VFX Artist", "Motion Designer"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["class10", "class12", "college", "graduate", "switcher"],
      interests: ["video", "animation", "ai"],
      goals: ["job", "freelance", "career-switch", "upskill"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "animation-vfx", name: "Animation & VFX", href: "/multimedia/animation-vfx", category: "multimedia",
    tagline: "Bring stories to life with 2D/3D animation and visual effects.",
    duration: "3 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Blender", "After Effects", "Maya"], careers: ["3D Artist", "Animator", "VFX Compositor"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["class10", "class12", "college", "graduate", "switcher"],
      interests: ["animation", "design", "video"],
      goals: ["job", "freelance", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "film-production", name: "Film Production", href: "/multimedia/film-production", category: "multimedia",
    tagline: "Direction, cinematography and production craft for real shoots.",
    duration: "3 months", mode: "Offline", level: "Beginner Friendly",
    skills: ["Directing", "Cinematography", "Editing"], careers: ["Director", "Cinematographer", "Producer"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["class10", "class12", "college", "graduate", "switcher"],
      interests: ["video", "animation"],
      goals: ["freelance", "job", "career-switch"],
      modes: ["offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "pm-smm", name: "PM & SMM", href: "/multimedia/pm-smm", category: "multimedia",
    tagline: "Performance and social media marketing for creators and brands.",
    duration: "3 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Meta Ads", "Content", "Analytics"], careers: ["Social Media Manager", "Performance Marketer", "Content Strategist"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["class12", "college", "graduate", "professional", "switcher", "entrepreneur"],
      interests: ["marketing", "video", "design"],
      goals: ["job", "freelance", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },

  // ---------------- Management ----------------
  {
    slug: "business-entrepreneurship", name: "Business & Entrepreneurship", href: "/management/business-entrepreneurship", category: "management",
    tagline: "Build, run and scale a venture — strategy, finance, ops and fundraising, taught by operators.",
    duration: "9 months", mode: "Offline", level: "Beginner Friendly",
    skills: ["Strategy", "Finance", "Ops", "Fundraising"], careers: ["Founder", "Business Manager", "Ops Lead"],
    badge: "Founder Track",
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["college", "graduate", "professional", "switcher", "entrepreneur"],
      interests: ["business", "entrepreneurship", "finance", "marketing"],
      goals: ["startup", "job", "career-switch", "upskill"],
      modes: ["offline", "hybrid"],
      time: ["6-12"],
    },
  },
  {
    slug: "sales-business-development", name: "Sales & Business Development", href: "/management/sales-business-development", category: "management",
    tagline: "B2B and B2C selling, pipeline building, key account management and partnerships.",
    duration: "5 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["B2B Sales", "CRM", "Negotiation"], careers: ["BD Executive", "Account Manager", "Sales Lead"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["class12", "college", "graduate", "professional", "switcher"],
      interests: ["business", "marketing"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "marketing-growth", name: "Marketing & Growth", href: "/management/marketing-growth", category: "management",
    tagline: "Performance marketing, brand, content and growth experiments with AI tools.",
    duration: "5 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Performance", "Brand", "SEO", "Growth"], careers: ["Growth Marketer", "Brand Manager", "Performance Marketer"],
    badge: "Most Popular",
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college", "graduate", "professional", "switcher", "entrepreneur"],
      interests: ["marketing", "business", "ai"],
      goals: ["job", "upskill", "career-switch", "freelance"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "finance-accounting", name: "Finance & Accounting", href: "/management/finance-accounting", category: "management",
    tagline: "Modern finance — books, taxation, fintech, valuation and FP&A.",
    duration: "6 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["FP&A", "Tax", "Audit", "Valuation"], careers: ["Financial Analyst", "Accountant", "FP&A Associate"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["class12", "college", "graduate", "professional", "switcher"],
      interests: ["finance", "business"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "people-operations", name: "People & Operations", href: "/management/people-operations", category: "management",
    tagline: "HR, talent ops, culture and scaling teams in fast-growing companies.",
    duration: "4 months", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["Hiring", "Ops", "Culture"], careers: ["HR Executive", "People Ops Associate", "Talent Partner"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["college", "graduate", "professional", "switcher"],
      interests: ["business"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },
  {
    slug: "management-product-management", name: "Product Management", href: "/management/product-management", category: "management",
    tagline: "Discovery, roadmaps, metrics and shipping — for SaaS and consumer products.",
    duration: "6 months", mode: "Online + Offline", level: "Graduate / Professional",
    skills: ["Discovery", "Roadmap", "Metrics", "PRDs"], careers: ["Product Manager", "APM", "Product Owner"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["graduate", "professional", "switcher", "entrepreneur"],
      interests: ["business", "uiux", "ai"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6"],
    },
  },

  // ---------------- UG & PG ----------------
  {
    slug: "bca", name: "BCA — Bachelor of Computer Applications", href: "/ug-programs", category: "ug-pg",
    tagline: "Become an AI-first builder. Code, ship, and deploy real products from day one.",
    duration: "3 years", mode: "Online + Offline", level: "After Class 12",
    skills: ["Full-stack", "AI/ML", "Cloud", "DevOps"], careers: ["Software Engineer", "AI Engineer", "Product Engineer"],
    badge: "AI-era Degree",
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college"],
      interests: ["coding", "ai", "data"],
      goals: ["job", "ai-professional", "higher-studies", "startup"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "bba", name: "BBA — Bachelor of Business Administration", href: "/ug-programs", category: "ug-pg",
    tagline: "Run real businesses while you study. Marketing, ops, finance, and founder skills.",
    duration: "3 years", mode: "Online + Offline", level: "After Class 12",
    skills: ["Marketing", "Ops", "Finance", "Growth"], careers: ["Business Analyst", "Growth Manager", "Founder's Office"],
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college"],
      interests: ["business", "marketing", "entrepreneurship"],
      goals: ["job", "higher-studies", "startup"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "bcom", name: "B.Com — Bachelor of Commerce", href: "/ug-programs", category: "ug-pg",
    tagline: "Master modern finance — from books to fintech, taxation to investment banking.",
    duration: "3 years", mode: "Online + Offline", level: "After Class 12",
    skills: ["Accounting", "GST", "Valuation", "Fintech"], careers: ["Financial Analyst", "Auditor", "Investment Associate"],
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college"],
      interests: ["finance", "business"],
      goals: ["job", "higher-studies"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "ba", name: "BA — Bachelor of Arts (Liberal Studies)", href: "/ug-programs", category: "ug-pg",
    tagline: "Think across disciplines. Psychology, economics, media, and design thinking.",
    duration: "3 years", mode: "Online + Offline", level: "After Class 12",
    skills: ["Psychology", "Media", "Policy", "Storytelling"], careers: ["Content Strategist", "Policy Analyst", "UX Researcher"],
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["class12", "college"],
      interests: ["business", "marketing", "design"],
      goals: ["job", "higher-studies"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "mba", name: "MBA — Master of Business Administration", href: "/ug-programs", category: "ug-pg",
    tagline: "An MBA rebuilt for the AI era — strategy, product, finance and founder skills taught by operators.",
    duration: "2 years", mode: "Online + Offline", level: "After Graduation",
    skills: ["Strategy", "Product", "Finance", "Venture Building"], careers: ["Founder", "Chief of Staff", "Product Manager"],
    badge: "AI-era Degree",
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["graduate", "professional", "switcher", "entrepreneur"],
      interests: ["business", "entrepreneurship", "ai"],
      goals: ["job", "startup", "higher-studies", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "mca", name: "MCA — Master of Computer Applications", href: "/ug-programs", category: "ug-pg",
    tagline: "Advanced computing with an AI and systems focus for graduate technologists.",
    duration: "2 years", mode: "Online + Offline", level: "After Graduation",
    skills: ["Advanced CS", "AI", "Systems", "Cloud"], careers: ["Software Engineer", "AI Engineer", "Systems Architect"],
    features: ["Live projects", "Internship", "Placement support"],
    match: {
      audience: ["graduate", "professional", "switcher"],
      interests: ["coding", "ai", "data"],
      goals: ["job", "ai-professional", "career-switch", "higher-studies"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "mcom", name: "M.Com — Master of Commerce", href: "/ug-programs", category: "ug-pg",
    tagline: "Deep commerce and finance mastery for the modern economy.",
    duration: "2 years", mode: "Online + Offline", level: "After Graduation",
    skills: ["Advanced Accounting", "Taxation", "Research"], careers: ["Accounting Lead", "Finance Manager", "Lecturer"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["graduate", "professional", "switcher"],
      interests: ["finance", "business"],
      goals: ["job", "higher-studies", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },
  {
    slug: "ma", name: "MA — Master of Arts", href: "/ug-programs", category: "ug-pg",
    tagline: "Advanced study across liberal arts, media and applied social sciences.",
    duration: "2 years", mode: "Online + Offline", level: "After Graduation",
    skills: ["Research", "Media", "Policy"], careers: ["Content Lead", "Researcher", "Policy Analyst"],
    features: ["Live projects", "Placement support"],
    match: {
      audience: ["graduate", "professional", "switcher"],
      interests: ["business", "marketing"],
      goals: ["job", "higher-studies", "career-switch"],
      modes: ["online", "offline", "hybrid"],
      time: ["12-24"],
    },
  },

  // ---------------- Online programs ----------------
  {
    slug: "ai-business-leaders", name: "AI for Business Leaders", href: "/online-programs", category: "online",
    tagline: "Practical AI workflows for marketing, ops and decision-making — build 3 internal AI tools.",
    duration: "6 weeks", mode: "Online", level: "Working Professional",
    skills: ["AI Tools", "Automation", "Custom GPTs"], careers: ["AI-enabled Manager", "Ops Lead"],
    badge: "Flagship",
    features: ["Live cohorts", "Build 3 AI tools"],
    match: {
      audience: ["professional", "entrepreneur", "switcher", "graduate"],
      interests: ["ai", "business"],
      goals: ["upskill", "career-switch", "job"],
      modes: ["online", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },
  {
    slug: "growth-bootcamp", name: "Growth Marketing Bootcamp", href: "/online-programs", category: "online",
    tagline: "Performance ads, SEO, content and retention — taught by CMOs of unicorns.",
    duration: "8 weeks", mode: "Online", level: "Beginner Friendly",
    skills: ["Meta Ads", "Google Ads", "SEO", "Retention"], careers: ["Growth Marketer", "Performance Marketer"],
    badge: "Bestseller",
    features: ["Live cohorts", "Run live campaigns"],
    match: {
      audience: ["professional", "graduate", "switcher", "entrepreneur"],
      interests: ["marketing", "business"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },
  {
    slug: "founders-bootcamp", name: "Founder's Bootcamp", href: "/online-programs", category: "online",
    tagline: "0 to MVP to first revenue, with mentorship from 15+ founders.",
    duration: "10 weeks", mode: "Online", level: "Founder-track",
    skills: ["MVP", "Validation", "Fundraising"], careers: ["Founder", "Startup Operator"],
    badge: "Founder-track",
    features: ["Live cohorts", "Pitch to real investors"],
    match: {
      audience: ["professional", "entrepreneur", "graduate", "switcher"],
      interests: ["entrepreneurship", "business", "coding"],
      goals: ["startup", "upskill"],
      modes: ["online", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },
  {
    slug: "pm-sprint", name: "Product Management Sprint", href: "/online-programs", category: "online",
    tagline: "Think like a PM — roadmaps, specs, metrics and stakeholder management.",
    duration: "6 weeks", mode: "Online", level: "Beginner Friendly",
    skills: ["Roadmaps", "Specs", "Metrics"], careers: ["APM", "Product Manager"],
    badge: "Live",
    features: ["Live cohorts", "Ship a real product spec"],
    match: {
      audience: ["graduate", "professional", "switcher"],
      interests: ["business", "uiux", "ai"],
      goals: ["job", "upskill", "career-switch"],
      modes: ["online", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },
  {
    slug: "data-storytelling", name: "Data Storytelling with AI", href: "/online-programs", category: "online",
    tagline: "Turn raw data into decisions using SQL, GPT and dashboards.",
    duration: "5 weeks", mode: "Online", level: "Beginner Friendly",
    skills: ["SQL", "GPT", "Dashboards"], careers: ["Data Analyst", "Analytics Associate"],
    badge: "New",
    features: ["Live cohorts", "Build executive dashboards"],
    match: {
      audience: ["professional", "graduate", "switcher"],
      interests: ["data", "ai", "business"],
      goals: ["upskill", "job", "career-switch"],
      modes: ["online", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },
  {
    slug: "no-code-saas", name: "No-Code SaaS Builder", href: "/online-programs", category: "online",
    tagline: "Ship a real SaaS without writing code — using Bubble, Lovable, and AI.",
    duration: "7 weeks", mode: "Online", level: "Beginner Friendly",
    skills: ["Bubble", "Lovable", "AI Tools"], careers: [" Indie Founder", "Product Builder"],
    badge: "Build",
    features: ["Live cohorts", "Launch a working SaaS"],
    match: {
      audience: ["professional", "entrepreneur", "graduate", "switcher"],
      interests: ["entrepreneurship", "coding", "ai"],
      goals: ["startup", "upskill", "freelance"],
      modes: ["online", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },

  // ---------------- Workshops ----------------
  {
    slug: "ba-workshop", name: "Business Analyst Workshop", href: "/workshop", category: "workshop",
    tagline: "A 1-week intensive into BA fundamentals, documentation and agile delivery.",
    duration: "1 week", mode: "Online + Offline", level: "Beginner Friendly",
    skills: ["BRD", "FRD", "Agile", "UAT"], careers: ["Business Analyst", "BA Intern"],
    badge: "1-Week Intensive",
    features: ["Hands-on project", "Certificate of completion"],
    match: {
      audience: ["college", "graduate", "professional", "switcher", "entrepreneur"],
      interests: ["business", "data"],
      goals: ["upskill", "career-switch", "job"],
      modes: ["online", "offline", "hybrid"],
      time: ["3-6", "flexible"],
    },
  },
];

export function countByCategory(id: CategoryId): number {
  return COURSES.filter((c) => c.category === id).length;
}

/* --------------------------------------------------------------- */
/* Course Finder — rule-based matching engine                       */
/* --------------------------------------------------------------- */

export interface FinderAnswers {
  audience: Audience | null;
  interests: Interest[];
  goal: Goal | null;
  mode: Mode | null;
  time: TimeBucket | null;
}

export interface MatchResult {
  course: CourseEntry;
  score: number;
  percent: number;
}

export const FINDER_STEPS = [
  { key: "audience", title: "What describes you best?", type: "single" as const },
  { key: "interests", title: "What are you interested in?", type: "multi" as const },
  { key: "goal", title: "What is your main goal?", type: "single" as const },
  { key: "mode", title: "How do you prefer to learn?", type: "single" as const },
  { key: "time", title: "How much time can you commit?", type: "single" as const },
];

export const AUDIENCE_OPTIONS: { value: Audience; label: string }[] = [
  { value: "class10", label: "Class 10 Student" },
  { value: "class12", label: "Class 12 Student" },
  { value: "college", label: "College Student" },
  { value: "graduate", label: "Graduate" },
  { value: "professional", label: "Working Professional" },
  { value: "switcher", label: "Career Switcher" },
  { value: "entrepreneur", label: "Entrepreneur" },
];

export const INTEREST_OPTIONS: { value: Interest; label: string }[] = [
  { value: "ai", label: "Artificial Intelligence" },
  { value: "data", label: "Data Science" },
  { value: "coding", label: "Coding & Software" },
  { value: "cyber", label: "Cyber Security" },
  { value: "design", label: "Design" },
  { value: "animation", label: "Animation & VFX" },
  { value: "video", label: "Video Editing" },
  { value: "uiux", label: "UI/UX" },
  { value: "business", label: "Business" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
];

export const GOAL_OPTIONS: { value: Goal; label: string }[] = [
  { value: "job", label: "Get a Job" },
  { value: "ai-professional", label: "Become an AI/Tech Professional" },
  { value: "freelance", label: "Freelance" },
  { value: "startup", label: "Build a Startup" },
  { value: "higher-studies", label: "Higher Studies" },
  { value: "career-switch", label: "Career Switch" },
  { value: "upskill", label: "Improve Existing Skills" },
];

export const MODE_OPTIONS: { value: Mode; label: string }[] = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
  { value: "hybrid", label: "Hybrid" },
  { value: "flexible", label: "No Preference" },
];

export const TIME_OPTIONS: { value: TimeBucket; label: string }[] = [
  { value: "3-6", label: "3–6 Months" },
  { value: "6-12", label: "6–12 Months" },
  { value: "12-24", label: "1–2 Years" },
  { value: "flexible", label: "Flexible" },
];

const labelOf = <T extends string>(opts: { value: T; label: string }[], v: T | null) =>
  opts.find((o) => o.value === v)?.label ?? "";

/** Run the rule-based matcher. Weights: interests 3, audience 2, goal 2, mode 1.5, time 1.5. */
export function matchCourses(a: FinderAnswers, limit = 5): MatchResult[] {
  const results: { course: CourseEntry; score: number; max: number }[] = COURSES.map((course) => {
    let score = 0;
    let max = 0;
    // interests: 3 per possible match
    max += a.interests.length * 3;
    for (const i of a.interests) if (course.match.interests.includes(i)) score += 3;
    // audience: 2
    if (a.audience) { max += 2; if (course.match.audience.includes(a.audience)) score += 2; }
    // goal: 2
    if (a.goal) { max += 2; if (course.match.goals.includes(a.goal)) score += 2; }
    // mode: 1.5 (No Preference → no penalty)
    if (a.mode && a.mode !== "flexible") { max += 1.5; if (course.match.modes.includes(a.mode)) score += 1.5; }
    // time: 1.5 (Flexible → no penalty)
    if (a.time && a.time !== "flexible") { max += 1.5; if (course.match.time.includes(a.time)) score += 1.5; }
    return { course, score, max };
  });

  const filtered = results.filter((r) => r.score > 0);
  if (filtered.length === 0) return [];
  const topScore = Math.max(...filtered.map((r) => r.score));
  return filtered
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((r) => ({
      course: r.course,
      score: r.score,
      // Top match maps to 88–97%; the rest scale against the leader.
      percent: Math.max(62, Math.round(88 + 9 * (r.score / topScore) - (topScore - r.score) * (14 / Math.max(topScore, 1)) )),
    }));
}

export function finderSummary(a: FinderAnswers): string {
  const parts = [
    labelOf(AUDIENCE_OPTIONS, a.audience),
    a.interests.length ? a.interests.map((i) => labelOf(INTEREST_OPTIONS, i)).slice(0, 3).join(", ") : "",
    labelOf(GOAL_OPTIONS, a.goal),
  ].filter(Boolean);
  return parts.join(" · ");
}
