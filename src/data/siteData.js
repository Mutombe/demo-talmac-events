export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Talmac Events",
    legalName: "Talmac Events",
    tagline: "Crafting Moments That Last Forever.",
    description:
      "Talmac Events is a professional events management and decor company in Harare specializing in weddings, corporate functions, and bespoke celebrations with elegant styling and flawless coordination.",
    phone: "+263 77 311 4892",
    phoneRaw: "+263773114892",
    whatsappNumber: "263773114892",
    email: "info@talmacevents.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.6,
    ratingRounded: 5,
    reviewCount: 9,
    established: "2016",
    yearsExperience: "8+",
    projectsCompleted: "700+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "talmac-events-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Talmac",
    logoLine2: "Events",
  },

  hero: {
    badge: "Harare's Bespoke Events Design & Management Studio",
    titleParts: [
      { text: "CRAFTING " },
      { text: "MOMENTS", highlight: true },
      { text: " THAT LAST FOREVER." },
    ],
    subtitle:
      "Weddings, corporate galas, and bespoke celebrations designed with elegance, precision, and an unwavering commitment to making your vision reality.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "View Portfolio",
    trustBadge: "700+ Events Designed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Talmac Events professional image 1" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Talmac Events professional image 2" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Talmac Events professional image 3" },
    ],
  },

  stats: [
    { number: "700+", label: "Events Styled" },
    { number: "8+", label: "Years Experience" },
    { number: "100+", label: "5-Star Reviews" },
    { number: "4.6", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Wedding Design",
      desc: "Complete wedding decor from ceremony backdrops to reception table settings. Every detail reflects your unique love story.",
      icon: "Heart",
    },
    {
      title: "Corporate Events",
      desc: "Professional event styling for conferences, gala dinners, product launches, and corporate celebrations.",
      icon: "Briefcase",
    },
    {
      title: "Birthday Celebrations",
      desc: "Themed birthday decor and coordination for milestone celebrations, children's parties, and surprise events.",
      icon: "Star",
    },
    {
      title: "Event Planning",
      desc: "Full event coordination including venue selection, vendor management, budget planning, and day-of management.",
      icon: "Buildings",
    },
    {
      title: "Floral Design",
      desc: "Custom floral arrangements, arches, centerpieces, and botanical installations crafted by experienced florists.",
      icon: "Leaf",
    },
    {
      title: "Rentals & Styling",
      desc: "Premium furniture, linen, crockery, and decor rentals styled by our design team for a cohesive look.",
      icon: "Lightbulb",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Wedding Design",
        slug: "wedding-design",
        desc: "Complete wedding decor from ceremony backdrops to reception table settings. Every detail reflects your unique love story.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Corporate Events",
        slug: "corporate-events",
        desc: "Professional event styling for conferences, gala dinners, product launches, and corporate celebrations.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Birthday Celebrations",
        slug: "birthday-celebrations",
        desc: "Themed birthday decor and coordination for milestone celebrations, children's parties, and surprise events.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
      {
        title: "Event Planning",
        slug: "event-planning",
        desc: "Full event coordination including venue selection, vendor management, budget planning, and day-of management.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Floral Design",
        slug: "floral-design",
        desc: "Custom floral arrangements, arches, centerpieces, and botanical installations crafted by experienced florists.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Rentals & Styling",
        slug: "rentals-and-styling",
        desc: "Premium furniture, linen, crockery, and decor rentals styled by our design team for a cohesive look.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Talmac",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in wedding design.",
        client: "Commercial Client",
        services: ["Wedding Design", "Corporate Events"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Talmac",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in corporate events.",
        client: "Residential Client",
        services: ["Corporate Events", "Birthday Celebrations"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Talmac",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in birthday celebrations.",
        client: "Industrial Client",
        services: ["Birthday Celebrations", "Event Planning"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Talmac",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in event planning.",
        client: "Institutional Client",
        services: ["Event Planning", "Floral Design"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Talmac",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in floral design.",
        client: "Commercial Client",
        services: ["Floral Design", "Rentals & Styling"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Talmac",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in rentals & styling.",
        client: "Residential Client",
        services: ["Rentals & Styling", "Wedding Design"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Talmac turned our wedding into something out of a dream. The decor was breathtaking, the coordination was flawless, and every guest was amazed.",
      name: "Rudo Mutasa",
      role: "Bride, December 2023",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We hired Talmac for our annual corporate dinner and the result was spectacular. Professional, creative, and they handled every detail perfectly.",
      name: "Leonard Mupfumira",
      role: "CEO, Zimpack Industries",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "My daughter's 21st birthday was the talk of the family for weeks. Talmac created a rose-gold paradise that exceeded every expectation.",
      name: "Grace Musarurwa",
      role: "Mother of the Birthday Girl",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "As an MC I work with many decor companies, and Talmac is consistently among the best. Their setups are always camera-ready and their team is a pleasure to work with.",
      name: "Takudzwa Nyoni",
      role: "Professional MC, Harare",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Talmac Events was born from a passion for creating celebrations that feel as extraordinary as they look. Since 2016, we have styled over 700 events across Harare, each one uniquely designed to reflect our clients' vision.",
      "Our team of designers, coordinators, and florists share one thing in common: an obsession with detail. From the curve of a napkin fold to the gradient of a sunset-themed lighting design, nothing escapes our attention.",
    ],
    values: [
      { title: "Bespoke Design", desc: "No templates, no repeats. Every event is designed from scratch based on your vision, personality, and style." },
      { title: "End-to-End Service", desc: "From initial concept to day-of coordination to post-event cleanup. We manage every detail." },
      { title: "Reliable Execution", desc: "On-time, on-budget, and on-point. Our 700+ event track record proves we deliver consistently." },
      { title: "Vendor Network", desc: "Strong relationships with Harare's best caterers, photographers, MCs, and entertainers." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Talmac turned our wedding into something out of a dream. The decor was breathtaking, the coordination was flawless, and every guest was amazed.", name: "Rudo Mutasa", role: "Bride, December 2023", rating: 5 },
      { text: "We hired Talmac for our annual corporate dinner and the result was spectacular. Professional, creative, and they handled every detail perfectly.", name: "Leonard Mupfumira", role: "CEO, Zimpack Industries", rating: 5 },
      { text: "My daughter's 21st birthday was the talk of the family for weeks. Talmac created a rose-gold paradise that exceeded every expectation.", name: "Grace Musarurwa", role: "Mother of the Birthday Girl", rating: 5 },
      { text: "As an MC I work with many decor companies, and Talmac is consistently among the best. Their setups are always camera-ready and their team is a pleasure to work with.", name: "Takudzwa Nyoni", role: "Professional MC, Harare", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Talmac Events",
        address: "Harare, Zimbabwe",
        phone: "+263 77 311 4892",
        email: "info@talmacevents.co.zw",
      },
    ],
  },

  homeCta: {
    title: "LET US CREATE YOUR MOMENT",
    subtitle: "Weddings, galas, and celebrations designed with passion and delivered with precision. Tell us your vision.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Talmac Events! I would like to discuss an upcoming event.",
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
  },

  footer: {
    description: "Talmac Events is a professional events management and decor company in Harare specializing in weddings, corporate functions, and bespoke celebrations ...",
    copyright: "Talmac Events",
  },
};

export default siteData;
