export interface Location {
  slug: string;
  name: string;
  country: string;
  flag: string;
  timezone: string;
  localContext: string;
  marketNote: string;
  topIndustries: string[];
  keywords: string[];
}

export const locations: Location[] = [
  {
    slug: "dhaka",
    name: "Dhaka",
    country: "Bangladesh",
    flag: "🇧🇩",
    timezone: "GMT+6",
    localContext:
      "Dhaka's business scene is growing rapidly — from startups in Gulshan to local service businesses in Mirpur. I'm based in Bangladesh and understand the local market, payment methods (bKash, Nagad), and the specific expectations of Bangladeshi clients.",
    marketNote:
      "As a Dhaka-based freelancer, I offer competitive rates with international quality — and you can communicate with me during Bangladesh business hours with zero language barrier.",
    topIndustries: ["restaurants", "gyms", "salons", "real-estate"],
    keywords: [
      "freelance web developer in Dhaka",
      "web developer Dhaka",
      "website developer Bangladesh",
      "hire web developer Dhaka",
      "Next.js developer Dhaka",
    ],
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    country: "Bangladesh",
    flag: "🇧🇩",
    timezone: "GMT+6",
    localContext:
      "Bangladesh's digital economy is booming — with e-commerce, service businesses, and SMEs all needing professional online presences. I build websites for Bangladeshi businesses at globally competitive rates, with full understanding of local needs.",
    marketNote:
      "I accept all major Bangladeshi payment methods and can communicate in both English and Bengali. Most Bangladeshi businesses I work with see their first leads within 4–6 weeks of launch.",
    topIndustries: ["restaurants", "real-estate", "gyms", "contractors"],
    keywords: [
      "freelance web developer Bangladesh",
      "web developer Bangladesh",
      "website design Bangladesh",
      "MERN stack developer Bangladesh",
      "affordable web developer Bangladesh",
    ],
  },
  {
    slug: "usa",
    name: "United States",
    country: "USA",
    flag: "🇺🇸",
    timezone: "EST / PST",
    localContext:
      "The US is one of the world's most competitive markets for service businesses. American clients expect fast websites, strong local SEO, ADA compliance, and measurable ROI — and that's exactly what I deliver, at a fraction of the cost of US-based agencies.",
    marketNote:
      "Working with US clients remotely, I schedule calls during Eastern or Pacific business hours and communicate in clear, professional English. Most projects deliver a strong ROI within the first quarter after launch.",
    topIndustries: ["plumbers", "roofers", "lawyers", "hvac", "electricians"],
    keywords: [
      "freelance web developer USA",
      "hire web developer United States",
      "affordable web developer for US businesses",
      "Next.js developer for US clients",
      "web developer for American service businesses",
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    country: "UK",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "The UK market values professionalism, trust signals, and data privacy (GDPR). I build websites for British service businesses with GDPR-compliant contact forms, UK-specific schema markup, and designs that reflect the polish UK clients expect.",
    marketNote:
      "I schedule calls during UK business hours and am familiar with UK-specific business expectations — from VAT display requirements to GDPR cookie consent compliance.",
    topIndustries: [
      "plumbers",
      "electricians",
      "dentists",
      "salons",
      "contractors",
    ],
    keywords: [
      "freelance web developer UK",
      "web developer United Kingdom",
      "website design UK",
      "hire web developer UK",
      "affordable web developer for UK businesses",
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    country: "Canada",
    flag: "🇨🇦",
    timezone: "EST / PST",
    localContext:
      "Canadian service businesses face similar challenges to their US counterparts — strong local competition and the need for bilingual (English/French) consideration in Quebec and federal-facing businesses. I build clean, fast localized sites for the Canadian market.",
    marketNote:
      "I'm familiar with Canadian business norms and can accommodate bilingual layout planning for Quebec-based or national businesses. Calls can be scheduled in both Eastern and Pacific Canadian time zones.",
    topIndustries: [
      "contractors",
      "roofers",
      "hvac",
      "pest-control",
      "dentists",
    ],
    keywords: [
      "freelance web developer Canada",
      "web developer Canada",
      "website design Canada",
      "hire web developer Canada",
      "affordable Canadian web developer",
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    country: "Australia",
    flag: "🇦🇺",
    timezone: "AEST",
    localContext:
      "Australia's trade services market — plumbers, electricians, HVAC — is highly competitive. Australian consumers research local tradies heavily online before calling. I build sites that rank for suburb-level searches and win the click.",
    marketNote:
      "I schedule calls during AEST business hours and understand Australian consumer expectations including clear licensing display and fair pricing transparency that Australian clients expect.",
    topIndustries: [
      "plumbers",
      "electricians",
      "hvac",
      "pest-control",
      "roofers",
    ],
    keywords: [
      "freelance web developer Australia",
      "web developer Australia",
      "website design Australia",
      "hire web developer Australia",
      "affordable web developer for Australian businesses",
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    timezone: "GMT+4",
    localContext:
      "Dubai's economy is world-class — with high standards for web design, luxury positioning, and bilingual (English/Arabic) considerations for certain markets. I build premium websites for Dubai's competitive service sector.",
    marketNote:
      "Dubai clients expect premium quality and polished design. I deliver high-end aesthetics with engineering precision — and can accommodate Arabic RTL design requirements when needed.",
    topIndustries: [
      "restaurants",
      "real-estate",
      "gyms",
      "salons",
      "contractors",
    ],
    keywords: [
      "freelance web developer Dubai",
      "web developer UAE",
      "website design Dubai",
      "hire web developer Dubai",
      "Next.js developer Dubai",
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    country: "USA",
    flag: "🗽",
    timezone: "EST",
    localContext:
      "New York's service business market is one of the most competitive in the world. Standing out requires a fast, professional, locally-optimized website that ranks for borough-level searches — from Brooklyn plumbers to Manhattan law firms.",
    marketNote:
      "I understand New York's density-driven local SEO — where ranking for 'Brooklyn' vs 'Manhattan' vs 'Queens' are distinct targeting strategies. I build this granularity into every NYC client's site.",
    topIndustries: [
      "plumbers",
      "electricians",
      "lawyers",
      "restaurants",
      "contractors",
    ],
    keywords: [
      "freelance web developer New York",
      "web developer NYC",
      "website design New York",
      "hire web developer New York",
      "affordable web developer NYC",
    ],
  },
  {
    slug: "london",
    name: "London",
    country: "UK",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "London's vast market means local SEO needs to be hyper-targeted — ranking in Hackney vs Chelsea vs Croydon are different challenges. I build London-specific websites with borough-level SEO to help service businesses dominate their corner of the capital.",
    marketNote:
      "I'm familiar with London's unique borough targeting for local SEO and the GDPR compliance requirements for UK-based businesses. Most London clients see meaningful ranking improvements within 6–8 weeks.",
    topIndustries: [
      "plumbers",
      "electricians",
      "dentists",
      "salons",
      "pest-control",
    ],
    keywords: [
      "freelance web developer London",
      "web developer London UK",
      "website design London",
      "hire web developer London",
      "affordable web developer London",
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    timezone: "SGT (GMT+8)",
    localContext:
      "Singapore's digital-savvy consumers expect world-class web experiences. The city-state's competitive SME market rewards businesses with fast, professional websites — and penalizes those without one. I build to Singapore's high standards.",
    marketNote:
      "Singapore clients benefit from my GMT+8 timezone proximity — I'm only 2 hours from Singapore Standard Time, enabling near-real-time communication during business hours.",
    topIndustries: [
      "restaurants",
      "gyms",
      "dentists",
      "real-estate",
      "lawyers",
    ],
    keywords: [
      "freelance web developer Singapore",
      "web developer Singapore",
      "website design Singapore",
      "hire web developer Singapore",
      "Next.js developer Singapore",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
