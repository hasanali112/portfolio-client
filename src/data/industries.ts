export interface Industry {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  heroSubtitle: string;
  stat: { value: string; label: string };
  painPoints: { title: string; description: string }[];
  deliverables: string[];
  techReasons: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  cta: string;
}

export const industries: Industry[] = [
  {
    slug: "plumbers",
    name: "Plumbers",
    emoji: "🔧",
    tagline: "Turn Emergency Searches Into Booked Jobs",
    heroSubtitle:
      "I build fast, mobile-first websites for plumbing businesses that show up when homeowners search for help — and convert that traffic into calls.",
    stat: {
      value: "97%",
      label: "of people search online before calling a plumber",
    },
    painPoints: [
      {
        title: "Invisible on Google",
        description:
          "When a pipe bursts at 2am, homeowners search Google — not the Yellow Pages. If you're not on page one, that job goes to a competitor.",
      },
      {
        title: "Slow or Outdated Website",
        description:
          "A slow website loses customers in under 3 seconds. Most plumbing sites load in 8-12s, costing you dozens of leads per month.",
      },
      {
        title: "No Online Booking",
        description:
          "Customers expect to book appointments online. Without a booking system, you're losing jobs to competitors who have one.",
      },
    ],
    deliverables: [
      "Mobile-first, lightning-fast website (PageSpeed 90+)",
      "Google Maps / Local SEO optimization",
      "Emergency call button visible on every page",
      "Online quote request form",
      "Service area pages for each neighborhood/city",
      "Google Reviews integration",
      "Schema markup (LocalBusiness + Service)",
      "WhatsApp click-to-chat button",
    ],
    techReasons: [
      "Next.js delivers sub-1s load times critical for emergency searches",
      "Static generation means your site stays fast even under traffic spikes",
      "Tailored Local SEO structure to rank in your service zip codes",
    ],
    faqs: [
      {
        question: "How long does it take to build a plumbing website?",
        answer:
          "Typically 1–2 weeks for a full custom plumbing website with all pages, forms, and SEO setup. I deliver fast because I know you need leads now — not in 3 months.",
      },
      {
        question:
          "Will my website show up when people search for a plumber near me?",
        answer:
          "Yes. I build every plumbing site with Local SEO in mind — proper schema markup, Google Business Profile integration, and location-specific service pages to help you rank in your area.",
      },
      {
        question: "Can the website handle emergency call routing?",
        answer:
          "Absolutely. I design prominent call-to-action buttons, sticky phone numbers, and emergency service banners that make it easy for distressed customers to contact you instantly.",
      },
      {
        question: "Do I need to know anything about websites to work with you?",
        answer:
          "Not at all. I handle everything — design, development, SEO setup, and deployment. I explain everything in plain English, and I offer ongoing support after launch.",
      },
    ],
    keywords: [
      "website for plumbers",
      "web developer for plumbing business",
      "plumbing company website design",
      "plumber website SEO",
      "local SEO for plumbers",
    ],
    cta: "Get Your Plumbing Website",
  },
  {
    slug: "roofers",
    name: "Roofers",
    emoji: "🏠",
    tagline: "Win More Roofing Jobs from Google",
    heroSubtitle:
      "I build professional, high-converting websites for roofing contractors that generate consistent leads from Google Search — even in off-season.",
    stat: {
      value: "76%",
      label: "of homeowners research roofers online before hiring",
    },
    painPoints: [
      {
        title: "Losing Jobs to Bigger Competitors",
        description:
          "Large franchises dominate Google because they invest in websites. A professional site levels the playing field and lets your reviews and local presence shine.",
      },
      {
        title: "No Proof of Work Online",
        description:
          "Homeowners want to see your past projects before trusting you on their roof. Without a gallery or case studies, you're losing trust — and jobs — before the call.",
      },
      {
        title: "Storm Season Chaos",
        description:
          "After a storm, homeowners flood Google looking for roofers. If your site can't handle traffic or isn't easy to contact, you miss the wave.",
      },
    ],
    deliverables: [
      "Project photo gallery with before/after comparisons",
      "Customer testimonials and review display",
      "Service pages for each roofing type (shingle, metal, flat)",
      "Storm damage / emergency roof repair landing page",
      "Online estimate request form",
      "Local SEO with city-specific pages",
      "Google Reviews widget integration",
      "Schema markup (LocalBusiness + Service + Review)",
    ],
    techReasons: [
      "Next.js Image Optimization serves high-quality project photos fast",
      "Static pages rank better and load faster than WordPress alternatives",
      "SEO-first architecture gets you indexed quickly after launch",
    ],
    faqs: [
      {
        question: "How do I get more roofing leads from my website?",
        answer:
          "Through a combination of Local SEO (ranking in your city), compelling project galleries, clear CTAs, and fast load times. I optimize every element for lead generation.",
      },
      {
        question: "Can you build a storm damage emergency page?",
        answer:
          "Yes — a dedicated emergency landing page with fast load time, prominent call button, and SEO-optimized content is something I include for roofing clients.",
      },
      {
        question: "Will my roofing website work on mobile?",
        answer:
          "100%. I build mobile-first — meaning the phone experience is designed first, then scaled up. Over 70% of roofing searches happen on mobile.",
      },
      {
        question: "Can you add a project photo gallery?",
        answer:
          "Yes. I build optimized image galleries that load fast and look stunning — showcasing your best work to win trust with homeowners before they even call.",
      },
    ],
    keywords: [
      "website for roofers",
      "roofing company website design",
      "web developer for roofing business",
      "roofing contractor website",
      "local SEO for roofers",
    ],
    cta: "Get Your Roofing Website",
  },
  {
    slug: "dentists",
    name: "Dentists",
    emoji: "🦷",
    tagline: "Fill Your Appointment Book with New Patients",
    heroSubtitle:
      "I design professional dental practice websites that rank on Google, build patient trust, and make booking an appointment effortless.",
    stat: {
      value: "72%",
      label: "of patients choose a dentist based on their website",
    },
    painPoints: [
      {
        title: "Low Google Rankings",
        description:
          "Patients search 'dentist near me' dozens of times per day. If you're not in the top 3 results, they book with a competitor — often before scrolling.",
      },
      {
        title: "Outdated & Untrustworthy Design",
        description:
          "Patients evaluate your professionalism from your website in under 2 seconds. An outdated design triggers doubt — regardless of how skilled you are.",
      },
      {
        title: "No Online Booking",
        description:
          "Younger patients especially expect to book 24/7. Calling during office hours is a friction point that costs you new patient acquisitions every week.",
      },
    ],
    deliverables: [
      "HIPAA-friendly contact and inquiry forms",
      "Online appointment booking integration",
      "Service pages for each dental treatment",
      "Patient testimonials section",
      "Meet the team / doctor profiles",
      "Before & after photo gallery",
      "Local SEO for your neighborhood/city",
      "Schema markup (Dentist + FAQPage + Review)",
    ],
    techReasons: [
      "Next.js ensures <1s load time — critical for patient trust and Google ranking",
      "Server-side rendering ensures all content is indexed immediately",
      "Accessibility-first build meets ADA compliance standards",
    ],
    faqs: [
      {
        question: "How do I get more patients from my dental website?",
        answer:
          "I optimize your site for 'dentist near me' searches, add online booking, build trust through testimonials and team profiles, and ensure your site loads fast — all key drivers of new patient acquisition.",
      },
      {
        question: "Is the contact form HIPAA-friendly?",
        answer:
          "I build contact and inquiry forms that don't collect Protected Health Information (PHI) by default, keeping you on the safe side. For advanced HIPAA needs, I recommend a certified form provider.",
      },
      {
        question: "Can you set up online appointment booking?",
        answer:
          "Yes. I integrate with popular scheduling tools like Calendly, Jane App, or custom booking forms that sync with your practice management software.",
      },
      {
        question: "How long until I see more patients from the website?",
        answer:
          "Most clients start seeing measurable improvements within 4–8 weeks after launch — once Google re-crawls the new site and local rankings improve.",
      },
    ],
    keywords: [
      "website for dentists",
      "dental practice website design",
      "web developer for dentists",
      "dentist website SEO",
      "dental clinic website",
    ],
    cta: "Get Your Dental Practice Website",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    emoji: "🍽️",
    tagline: "More Reservations. More Orders. Less Empty Tables.",
    heroSubtitle:
      "I build restaurant websites that rank on Google, showcase your menu beautifully, and drive direct online orders and reservations — no third-party commissions.",
    stat: {
      value: "90%",
      label: "of diners research a restaurant online before visiting",
    },
    painPoints: [
      {
        title: "Paying Commission to Delivery Apps",
        description:
          "UberEats and DoorDash take 15–30% of every order. A direct online ordering system on your website cuts them out and puts more money in your pocket.",
      },
      {
        title: "Google Shows Wrong Info",
        description:
          "Outdated hours, wrong address, and missing menu details on Google Maps drive customers away — often to a competitor across the street.",
      },
      {
        title: "No Reservation System",
        description:
          "OpenTable takes a fee per cover. I build direct reservation forms that let customers book without you paying per-reservation fees.",
      },
    ],
    deliverables: [
      "Visual menu with categories and photos",
      "Online reservation / table booking form",
      "Direct online ordering integration",
      "Google Maps and Google My Business optimization",
      "Photo gallery for ambiance and food",
      "Events / specials announcement section",
      "Customer reviews integration",
      "Schema markup (Restaurant + Menu + Review)",
    ],
    techReasons: [
      "Next.js handles high-traffic dinner rush spikes without downtime",
      "Image optimization serves food photography beautifully at any connection speed",
      "SEO-first structure helps you rank for '[cuisine] near me' searches",
    ],
    faqs: [
      {
        question: "Can I take orders directly through my website?",
        answer:
          "Yes. I can integrate direct online ordering so customers order from your site — no commission to delivery platforms. You keep 100% of the order value.",
      },
      {
        question: "How do I rank for 'restaurant near me' on Google?",
        answer:
          "Through a combination of a fast, SEO-optimized website, proper Google My Business setup, local schema markup, and customer review management.",
      },
      {
        question: "Can you display my full menu on the website?",
        answer:
          "Yes — with categories, photos, descriptions, dietary labels (vegan, gluten-free), and pricing. I can also make it easy for you to update items yourself.",
      },
      {
        question: "Will the website work well for mobile users?",
        answer:
          "Absolutely. Most people search for restaurants on their phones. I build mobile-first to ensure a gorgeous browsing experience from any device.",
      },
    ],
    keywords: [
      "website for restaurants",
      "restaurant website design",
      "web developer for restaurants",
      "online ordering website for restaurant",
      "restaurant local SEO",
    ],
    cta: "Get Your Restaurant Website",
  },
  {
    slug: "contractors",
    name: "General Contractors",
    emoji: "🏗️",
    tagline: "Win More Bids with a Website That Works as Hard as You Do",
    heroSubtitle:
      "I build rugged, professional websites for general contractors that showcase your work, build client trust, and generate consistent leads from Google.",
    stat: {
      value: "82%",
      label: "of construction clients research contractors online first",
    },
    painPoints: [
      {
        title: "Word of Mouth Isn't Enough Anymore",
        description:
          "Referrals are great, but they're unpredictable. A strong online presence creates a steady pipeline of inbound leads — so you're not dependent on who your last client knows.",
      },
      {
        title: "Bids Lost to Competitors Who Look More Professional",
        description:
          "Clients compare you online before the first meeting. If your competitor has a polished website with project photos and testimonials, they look more trustworthy.",
      },
      {
        title: "No Way to Showcase Past Projects",
        description:
          "Your best work is your best marketing tool. Without an online portfolio of completed projects, potential clients can't see the quality you're capable of.",
      },
    ],
    deliverables: [
      "Project portfolio with high-quality photo galleries",
      "Client testimonials and case studies",
      "Quote request / contact form",
      "License and insurance trust badges",
      "Service area map",
      "Local SEO for your city and surrounding areas",
      "About the team / company story section",
      "Schema markup (LocalBusiness + Review + Service)",
    ],
    techReasons: [
      "Next.js image optimization showcases your project photography at full quality",
      "Static pages load instantly even with heavy image content",
      "Local SEO structure earns rankings in your specific service area",
    ],
    faqs: [
      {
        question: "How can a website help me get more contracting jobs?",
        answer:
          "By ranking on Google when people search for contractors in your area, showcasing your past work professionally, and making it easy to request a quote — turning website visitors into paying clients.",
      },
      {
        question: "Can I update my project portfolio myself?",
        answer:
          "I can integrate a simple CMS (content management system) so you or your team can add new project photos and descriptions without touching any code.",
      },
      {
        question: "How do I outrank other contractors on Google?",
        answer:
          "Through Local SEO — optimized service pages, Google Business Profile setup, proper schema markup, and fast load times. I build all of this in from day one.",
      },
      {
        question: "Do you build websites for specialty contractors?",
        answer:
          "Yes — I've built sites for electrical, HVAC, painting, landscaping, and more. Every site is tailored to the specific trade, not a generic template.",
      },
    ],
    keywords: [
      "website for contractors",
      "general contractor website design",
      "construction company website",
      "web developer for contractors",
      "contractor local SEO",
    ],
    cta: "Get Your Contractor Website",
  },
  {
    slug: "lawyers",
    name: "Law Firms",
    emoji: "⚖️",
    tagline: "Convert More Consultations Into Retained Clients",
    heroSubtitle:
      "I build authoritative, trust-first websites for law firms and solo attorneys that rank on Google and convert visitors into consultation bookings.",
    stat: {
      value: "74%",
      label: "of people seeking legal help start with a Google search",
    },
    painPoints: [
      {
        title: "Not Appearing in Legal Searches",
        description:
          "Potential clients search 'personal injury lawyer near me' or 'divorce attorney [city]'. Without proper SEO, your competitors appear — and you don't.",
      },
      {
        title: "Website Doesn't Convey Authority",
        description:
          "Legal clients need to trust you before they'll share sensitive details. An outdated or generic-looking website undermines the authority you've built over years.",
      },
      {
        title: "No Easy Way to Book a Consultation",
        description:
          "Every extra step between a potential client and their first consultation is a drop-off risk. Friction costs you retained clients.",
      },
    ],
    deliverables: [
      "Practice area service pages (one per specialty)",
      "Attorney bio pages with credentials",
      "Online consultation booking",
      "Attorney-client privilege–aware contact forms",
      "Case results / success stories section",
      "Blog for legal FAQ content (SEO authority)",
      "Local SEO for each practice area",
      "Schema markup (Attorney + LegalService + FAQPage)",
    ],
    techReasons: [
      "Next.js App Router enables fast, server-rendered pages critical for E-E-A-T",
      "Blog integration drives long-term organic traffic for legal FAQs",
      "Accessibility-first build meets ADA requirements",
    ],
    faqs: [
      {
        question: "How do I get my law firm to rank on Google?",
        answer:
          "Through dedicated practice area pages, a legal FAQ blog, Google Business Profile optimization, and local schema markup. I build all of this into every law firm website.",
      },
      {
        question: "What makes a good law firm website?",
        answer:
          "Authority, clarity, and trust. Clear attorney bios, detailed practice area pages, visible credentials, an easy consultation booking path, and a fast, professional design.",
      },
      {
        question: "Do you handle attorney advertising rules?",
        answer:
          "I'm mindful of common restrictions (no unsubstantiated claims, proper disclaimers). I always recommend your state bar review the final copy for full compliance.",
      },
      {
        question: "Can I manage my own blog content?",
        answer:
          "Yes. I integrate a headless CMS so you can write and publish legal articles yourself, building long-term SEO authority without needing a developer.",
      },
    ],
    keywords: [
      "website for law firms",
      "attorney website design",
      "web developer for lawyers",
      "law firm SEO",
      "lawyer website",
    ],
    cta: "Get Your Law Firm Website",
  },
  {
    slug: "real-estate",
    name: "Real Estate Agents",
    emoji: "🏡",
    tagline: "More Listings. More Buyers. More Closings.",
    heroSubtitle:
      "I build custom real estate websites that showcase your listings beautifully, capture buyer and seller leads, and establish you as the go-to agent in your market.",
    stat: {
      value: "96%",
      label: "of homebuyers use the internet in their home search",
    },
    painPoints: [
      {
        title: "Lost in a Sea of Generic Agent Profiles",
        description:
          "Zillow and Realtor.com give you a profile, not a brand. A personal website sets you apart, captures leads directly, and builds long-term authority in your market.",
      },
      {
        title: "No Way to Showcase Listings Properly",
        description:
          "Third-party portals control how your listings look. A custom website lets you present properties beautifully — with virtual tours, high-res photos, and your branding.",
      },
      {
        title: "Leads Going to Portals Instead of You",
        description:
          "Portals sell your leads to other agents. Your own website captures buyer and seller inquiries directly — so every form fill comes straight to you.",
      },
    ],
    deliverables: [
      "Property listing pages with photo galleries",
      "Home valuation / seller lead capture form",
      "Buyer and seller resource pages",
      "Neighborhood guide pages",
      "Agent bio and team profiles",
      "Mortgage calculator integration",
      "Email newsletter signup",
      "Schema markup (RealEstateAgent + Property + Review)",
    ],
    techReasons: [
      "Next.js handles large property image galleries with zero performance penalty",
      "Dynamic listing pages update automatically when new properties are added",
      "Local SEO tailored to your farm area neighborhoods",
    ],
    faqs: [
      {
        question: "Can I show my MLS listings on my personal website?",
        answer:
          "Yes. I can integrate IDX/MLS feeds so your listings (and the full MLS inventory) display on your website with your branding — not a third-party portal.",
      },
      {
        question: "How do I generate buyer and seller leads from my website?",
        answer:
          "Through home valuation tools (high-conversion for sellers), neighborhood guides (organic SEO traffic), and strategic lead capture forms at the right moments.",
      },
      {
        question: "Can I update listings and content myself?",
        answer:
          "Yes. I can integrate a CMS so you or your assistant can add listings, blog posts, and neighborhood guides without any coding.",
      },
      {
        question: "How long until my website generates leads?",
        answer:
          "Paid leads (if you run ads to it) start immediately. Organic SEO leads typically begin within 6–12 weeks as Google indexes and ranks your content.",
      },
    ],
    keywords: [
      "website for real estate agents",
      "real estate agent website design",
      "realtor website developer",
      "real estate website SEO",
      "custom real estate website",
    ],
    cta: "Get Your Real Estate Website",
  },
  {
    slug: "salons",
    name: "Hair Salons & Spas",
    emoji: "💇",
    tagline: "Fill Your Chair. Every Day.",
    heroSubtitle:
      "I build stunning, booking-focused websites for salons and spas that rank locally on Google and make it easy for clients to book their next appointment 24/7.",
    stat: { value: "60%", label: "of salon bookings now happen online" },
    painPoints: [
      {
        title: "Empty Spots in Your Book",
        description:
          "Last-minute cancellations hurt. A website with online booking lets clients fill those gaps automatically — even at midnight when your phone is off.",
      },
      {
        title: "Invisible Online",
        description:
          "When someone searches 'hair salon near me', your competitors with better websites show up first. A professional site puts you in front of new clients in your neighborhood.",
      },
      {
        title: "No Way to Showcase Your Work",
        description:
          "A portfolio of brilliant cuts, colors, and styles is your best marketing — but only if people can find it. Instagram alone isn't enough.",
      },
    ],
    deliverables: [
      "Online booking integration (Booksy, Fresha, or custom)",
      "Staff / stylist profile pages",
      "Service menu with pricing",
      "Portfolio / work gallery",
      "Client reviews and testimonials",
      "Promotions and gift card section",
      "Local SEO for your salon's neighborhood",
      "Schema markup (HairSalon + Review + Service)",
    ],
    techReasons: [
      "Next.js delivers stunning image-heavy gallery pages without slow load times",
      "Mobile-first design serves the 80% of clients who book from their phones",
      "Local SEO structure ranks you for neighborhood salon searches",
    ],
    faqs: [
      {
        question: "What booking system do you integrate with?",
        answer:
          "I integrate with your existing booking tool — Booksy, Fresha, Vagaro, Square, Acuity, or Calendly. If you don't have one, I can recommend the best fit for your salon size.",
      },
      {
        question: "Can I display my stylists and their work separately?",
        answer:
          "Yes. I build individual stylist profile pages with their portfolio, bio, specialties, and a direct booking link — helping clients find and book their preferred stylist.",
      },
      {
        question: "How do I show up on Google for salon searches near me?",
        answer:
          "Through a fast, SEO-optimized website, proper Google Business Profile setup, neighborhood-specific keywords, and schema markup for salons.",
      },
      {
        question: "Can clients buy gift cards on the website?",
        answer:
          "Yes. I can integrate a gift card purchase or inquiry form — great for boosting revenue during holidays and special occasions.",
      },
    ],
    keywords: [
      "website for hair salons",
      "salon website design",
      "web developer for salons",
      "spa website developer",
      "salon booking website",
    ],
    cta: "Get Your Salon Website",
  },
  {
    slug: "gyms",
    name: "Gyms & Fitness Studios",
    emoji: "💪",
    tagline: "More Members. Less Empty Treadmills.",
    heroSubtitle:
      "I build high-energy websites for gyms, CrossFit boxes, yoga studios, and personal trainers that attract new members and make signing up effortless.",
    stat: {
      value: "65%",
      label: "of gym-goers research fitness studios online before joining",
    },
    painPoints: [
      {
        title: "Hard to Stand Out",
        description:
          "Every gym looks the same online. A branded, high-energy website communicates your unique culture and training philosophy — converting visitors into members.",
      },
      {
        title: "Losing Members to Chain Gyms",
        description:
          "Planet Fitness and LA Fitness spend millions on marketing. A strong local presence online helps you compete on neighborhood-level searches.",
      },
      {
        title: "No Easy Trial or Membership Signup",
        description:
          "If signing up for a free trial takes more than 30 seconds online, potential members leave. I remove every friction point from the signup flow.",
      },
    ],
    deliverables: [
      "Class schedule display with booking integration",
      "Membership tier pricing page",
      "Free trial / intro offer signup form",
      "Trainer profiles and credentials",
      "Success story / transformation gallery",
      "Live class or PT session booking",
      "Local SEO for your gym's neighborhood",
      "Schema markup (ExerciseGym + Review + Event)",
    ],
    techReasons: [
      "Next.js renders class schedules dynamically — always up to date",
      "High-energy animations and imagery with zero performance cost",
      "Local SEO ranks you for 'gym near me' in your exact neighborhood",
    ],
    faqs: [
      {
        question: "Can I show my class schedule on the website?",
        answer:
          "Yes. I integrate with scheduling tools like Mindbody, Glofox, TeamUp, or a custom system so your class schedule is always live and bookable directly from your website.",
      },
      {
        question: "How do I get more gym members from my website?",
        answer:
          "Through a compelling first impression, a frictionless free trial signup, local SEO to rank for gym searches in your area, and social proof from member success stories.",
      },
      {
        question: "Can you showcase client transformations?",
        answer:
          "Yes — with permission from your clients, before/after transformation galleries are one of the highest-converting elements on a fitness website.",
      },
      {
        question: "Do you build websites for personal trainers too?",
        answer:
          "Yes. Whether you're a solo PT working from a commercial gym or running your own studio, I build a site that positions you as the go-to trainer in your area.",
      },
    ],
    keywords: [
      "website for gyms",
      "gym website design",
      "web developer for fitness studios",
      "CrossFit website",
      "yoga studio website",
    ],
    cta: "Get Your Gym Website",
  },
  {
    slug: "electricians",
    name: "Electricians",
    emoji: "⚡",
    tagline: "Get Found First When the Power Goes Out",
    heroSubtitle:
      "I build fast, SEO-optimized websites for electricians and electrical contractors that rank locally and turn urgent searches into booked service calls.",
    stat: {
      value: "88%",
      label: "of people search online when they need an electrician",
    },
    painPoints: [
      {
        title: "Competing Against Big Franchises",
        description:
          "Large electrical companies dominate Google Ads. SEO-driven organic rankings give you a competitive advantage without the ongoing ad spend.",
      },
      {
        title: "Emergency Calls Going to Competitors",
        description:
          "Electrical emergencies generate urgent, high-intent searches. If your website loads slowly or doesn't rank, those emergency jobs go to faster-responding competitors.",
      },
      {
        title: "No License and Insurance Display",
        description:
          "Homeowners are cautious about hiring electricians. Prominently displaying your license number and insurance builds the trust needed to win the call.",
      },
    ],
    deliverables: [
      "Emergency call CTA visible on every page",
      "License and insurance trust display",
      "Service pages (residential, commercial, panel upgrades, EV chargers)",
      "Local SEO for your service zip codes",
      "Before & after project photos",
      "Online quote request form",
      "Google Reviews integration",
      "Schema markup (Electrician + LocalBusiness + Review)",
    ],
    techReasons: [
      "Sub-1s load time is essential when customers need emergency electrical help",
      "Static generation means the site is always live — even at 3am emergencies",
      "Local SEO targets your exact service area zip codes",
    ],
    faqs: [
      {
        question: "How do I rank on Google for emergency electrician searches?",
        answer:
          "Through a combination of fast load speed, Google Business Profile optimization, schema markup, and service pages targeting 'emergency electrician [city]' keywords.",
      },
      {
        question:
          "Should I build separate pages for residential and commercial services?",
        answer:
          "Yes — separate pages for each service type let you rank for specific searches. I build dedicated pages for residential, commercial, industrial, and specialty services like EV charger installation.",
      },
      {
        question: "Can customers request a quote online?",
        answer:
          "Yes. I include an online quote request form that collects job details, preferred timing, and contact info — so you can respond with an accurate estimate quickly.",
      },
      {
        question: "How soon will my website appear on Google after launch?",
        answer:
          "Google typically indexes a new or relaunched site within 1–4 weeks. I submit your sitemap to Google Search Console on launch day to speed up indexation.",
      },
    ],
    keywords: [
      "website for electricians",
      "electrician website design",
      "web developer for electrical contractors",
      "electrician local SEO",
      "electrical contractor website",
    ],
    cta: "Get Your Electrician Website",
  },
  {
    slug: "hvac",
    name: "HVAC Companies",
    emoji: "❄️",
    tagline: "Stay Booked Year-Round — Summer and Winter",
    heroSubtitle:
      "I build HVAC websites that capture both emergency service calls and scheduled maintenance appointments — keeping your technicians busy in every season.",
    stat: {
      value: "79%",
      label: "of HVAC customers search online before booking service",
    },
    painPoints: [
      {
        title: "Feast-or-Famine Seasonality",
        description:
          "Summer AC emergencies and winter heating calls create peaks, while shoulder seasons are slow. A strong website with content marketing keeps leads flowing year-round.",
      },
      {
        title: "Low Customer Retention",
        description:
          "HVAC companies live and die by repeat service and maintenance contracts. A website with a maintenance plan signup keeps customers coming back annually.",
      },
      {
        title: "Competing on Price Instead of Value",
        description:
          "Without a professional online presence, customers only compare prices. A great website communicates quality and expertise — letting you charge what you're worth.",
      },
    ],
    deliverables: [
      "Emergency service call CTA (heating and cooling)",
      "Maintenance plan / service contract signup",
      "Seasonal promotion landing pages",
      "Equipment brand and model information pages",
      "Financing options display",
      "Service area pages",
      "Local SEO for each city you serve",
      "Schema markup (HVAC + LocalBusiness + Review)",
    ],
    techReasons: [
      "Next.js handles seasonal traffic spikes without downtime",
      "Content pages drive year-round SEO traffic outside peak seasons",
      "Static + dynamic hybrid delivers both speed and real-time availability",
    ],
    faqs: [
      {
        question: "How do I get HVAC leads during the off-season?",
        answer:
          "Through year-round content — energy-saving tips, maintenance guides, and equipment upgrade pages that attract organic traffic even when it's mild outside.",
      },
      {
        question: "Can I sell maintenance contracts through the website?",
        answer:
          "Yes. I build maintenance plan pages with clear pricing, benefits lists, and signup forms that convert seasonal customers into annual contracts.",
      },
      {
        question: "Can the website show financing options?",
        answer:
          "Yes. I include a financing options section that explains payment plans for large equipment installations — reducing the barrier to saying yes to big jobs.",
      },
      {
        question:
          "Do you build separate pages for heating and cooling services?",
        answer:
          "Yes — dedicated pages for AC installation, heating repair, duct cleaning, heat pumps, and more. Each page targets specific keywords to maximize organic reach.",
      },
    ],
    keywords: [
      "website for HVAC companies",
      "HVAC website design",
      "web developer for HVAC",
      "heating and cooling website",
      "HVAC local SEO",
    ],
    cta: "Get Your HVAC Website",
  },
  {
    slug: "pest-control",
    name: "Pest Control Companies",
    emoji: "🐛",
    tagline: "Be the First Call When Pests Move In",
    heroSubtitle:
      "I build fast, trust-building websites for pest control companies that rank on Google for urgent searches and convert panicking homeowners into booked jobs.",
    stat: {
      value: "91%",
      label: "of pest emergency searches happen on mobile devices",
    },
    painPoints: [
      {
        title: "Customers Only Call in an Emergency",
        description:
          "Most pest control searches are urgent. Your website needs to rank instantly and make calling or booking take under 10 seconds from landing on the page.",
      },
      {
        title: "Fear of Chemicals and Safety",
        description:
          "Homeowners worry about pesticide safety — especially with kids and pets. Your website needs to proactively address this to win the call over competitors.",
      },
      {
        title: "Low Repeat Business Without Contracts",
        description:
          "One-time jobs don't build a predictable business. A website with quarterly/annual pest prevention plan signup turns one-time customers into recurring revenue.",
      },
    ],
    deliverables: [
      "Pest identification resource pages (ants, rodents, bed bugs, termites)",
      "Pet-safe and eco-friendly treatment info",
      "Service plan / subscription signup",
      "Emergency same-day service CTA",
      "Before/after treatment photo gallery",
      "Service area pages",
      "Local SEO for residential and commercial",
      "Schema markup (LocalBusiness + Service + FAQPage)",
    ],
    techReasons: [
      "Sub-1s load critical — users in a panic won't wait for a slow site",
      "Mobile-first design serves the 91% of emergency searches on phones",
      "Pest ID content pages drive evergreen organic search traffic",
    ],
    faqs: [
      {
        question: "How do I rank for emergency pest control searches?",
        answer:
          "A fast-loading website, prominent Google Business Profile, local schema markup, and targeting 'emergency exterminator [city]' on dedicated pages.",
      },
      {
        question: "Can the website address pet safety concerns?",
        answer:
          "Yes. I dedicate a section or page to pet-safe and child-safe treatment options — addressing the #1 concern that stops homeowners from booking.",
      },
      {
        question: "Can I sell pest prevention plans through the website?",
        answer:
          "Yes. I build subscription plan pages with tier comparisons, what's included, and easy signup to convert one-time customers into recurring revenue.",
      },
      {
        question: "Do you build pages for specific pests?",
        answer:
          "Yes — dedicated pages for termites, bed bugs, rodents, ants, wasps, and more. Each page ranks for specific search queries and educates customers before they call.",
      },
    ],
    keywords: [
      "website for pest control companies",
      "pest control website design",
      "web developer for pest control",
      "exterminator website SEO",
      "pest control local SEO",
    ],
    cta: "Get Your Pest Control Website",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
