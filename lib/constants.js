// Site Configuration
export const SITE_CONFIG = {
  name: "Skin World",
  tagline: "Best Skin Doctor in Kanpur",
  description: "Looking for the best skin doctor in Kanpur? Visit Skin World Clinic by Dr. R M Singh for expert treatment in acne, hair loss, pigmentation, and cosmetic dermatology.",
  url: "https://skindoctorinkanpur.com",
  logo: "/images/logo.png",
  ogImage: "/images/og-image.jpg"
};

// Doctor Information
export const DOCTOR_INFO = {
  name: "Dr. R M Singh",
  qualifications: "MBBS, MD - Dermatology, Venereology & Leprosy",
  specializations: ["Dermatologist", "Cosmetologist", "Venereologist"],
  experience: "24 Years Overall (5 years as specialist)",
  image: "/images/doctor.png",
  description: "Experience the full spectrum of result-oriented whitening treatments tailored to your individual body and social preferences, administered by the top Skin and Hair Doctor in Kanpur. Our approach is both safe and cost-effective. Begin your journey with a skin test to determine the most suitable treatment for you. Remember, you are not flawed; you are inherently beautiful and perfect. The Skin World team, consisting of highly qualified doctors, is dedicated to providing you with the finest treatments available. Discover your true radiance and embrace your unique beauty with us."
};

// Contact Information
export const CONTACT_INFO = {
  address: {
    street: "113/131 Swaroop Nagar",
    landmark: "(Near Madhuraj hospital)",
    city: "Kanpur",
    state: "U.P.",
    pincode: "208002",
    full: "113/131 Swaroop Nagar (Near Madhuraj hospital), Kanpur, U.P. 208002"
  },
  phones: ["+91-99369-59955", "+91-99563-59955"],
  email: "info@skinworldkanpur.com",
  hours: {
    weekdays: "10:00 AM - 08:00 PM",
    sunday: "10:00 AM - 02:00 PM",
    display: {
      "Mon-Sat": "10:00 AM - 08:00 PM",
      "Sun": "10:00 AM - 02:00 PM"
    }
  },
  social: {
    facebook: "https://www.facebook.com/SkinWorldKanpur/",
    instagram: "https://www.instagram.com/skin.world.dermatology/", 
    youtube: "https://www.youtube.com/@SkinWorldKanpur"
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.2!2d80.3319!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI3JzAwLjAiTiA4MMKwMTknNTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

// Navigation Menu
export const NAVIGATION_ITEMS = [
  // { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  // { name: "Services", href: "/services" },
  // { name: "Gallery", href: "/gallery" },
  // { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" }
];

// Hero Section Content
export const HERO_CONTENT = {
  title: "Skin World",
  taglines: [
    "Your Skin Health Matters to Us",
    "Best Skin Clinic in Kanpur",
    "Transforming Skin Health, One Treatment at a Time",
    "Trust Our Expert Dermatology Care for Your Best Skin Ever",
    "Skin World: Where Beauty Meets Professional Care and Excellence",
    "Glow with Confidence: Your Skin, Your Beauty, Our Expertise"
  ],
  description: "Experience professional dermatology care with Dr. R M Singh. Comprehensive skin and hair treatments in a safe, modern environment.",
  image: "/images/39.jpg",
  ctaText: "Book Appointment",
  ctaHref: "/contact"
};

// Services Data
export const SERVICES = {
  main: [
    {
      title: "Skin Treatments",
      description: "Comprehensive skin care solutions for all skin types and concerns.",
      image: "/images/14.jpg",
      icon: "FaSpa"
    },
    {
      title: "Eyelid Surgeries",
      description: "Advanced procedures for aesthetic and functional corrections.",
      image: "/images/services/12.jpg",
      icon: "FaEye"
    },
    {
      title: "Hair Treatments",
      description: "Comprehensive solutions for hair loss and restoration.",
      image: "/images/services/24.jpg",
      icon: "FaCut"
    }
  ],
  
  skinTreatments: {
    acneAndScars: [
      "Acne Treatment (Mild to Severe)",
      "Acne Scar Reduction",
      "Chemical Peels for Acne", 
      "Laser Therapy for Acne",
      "Comedone Extraction",
      "Blackhead and Whitehead Removal"
    ],
    antiAging: [
      "Botox Injections",
      "Dermal Fillers",
      "Anti-Aging Facials",
      "Laser Skin Resurfacing",
      "Micro-needling",
      "Thread Lift Procedures"
    ],
    skinRejuvenation: [
      "Chemical Peels (Light to Deep)",
      "Laser Skin Tightening",
      "Photo Facial Treatments",
      "Vitamin C Infusion",
      "Hydrafacial Treatment",
      "Oxygen Facial Therapy"
    ],
    pigmentation: [
      "Melasma Treatment",
      "Dark Spot Removal",
      "Skin Whitening Treatments",
      "Laser Pigmentation Removal",
      "IPL for Sun Damage",
      "Vitamin C Therapy"
    ],
    medicalDermatology: [
      "Psoriasis Treatment",
      "Eczema Management",
      "Rosacea Treatment",
      "Skin Cancer Screening",
      "Mole Removal",
      "Wart Removal"
    ],
    cosmeticProcedures: [
      "Laser Hair Removal",
      "Skin Whitening",
      "Tattoo Removal",
      "Scar Revision",
      "Stretch Mark Treatment",
      "Cellulite Reduction"
    ]
  },
  
  eyelidSurgeries: [
    "Surgical Blepharoplasty",
    "Asian Blepharoplasty",
    "Ptosis repair for droopy eyelid",
    "Entropion Repair",
    "Canthopexy",
    "Epicanthoplasty",
    "Eyelid retraction",
    "Eyelid malpositions",
    "Blepharophimosis",
    "Eyelid synkineses"
  ],

  hairTreatments: {
    conditions: [
      "Androgenetic Alopecia",
      "Alopecia Areata", 
      "Alopecia Effluvium",
      "Hair Loss Associated With Systemic Diseases (PCOS)",
      "Hair Loss Associated With Seborrheic Dermatitis",
      "Hair Loss Post Chemotherapy"
    ],
    surgical: [
      "Hair Transplant",
      "Hair Restoration",
      "Male Hair Transplant", 
      "Female Hair Transplant",
      "Male Beard Transplant",
      "Eyebrow Hair Transplant",
      "Eyelash Hair Transplant",
      "Body Hair Transplant",
      "Hair Line Reconstruction"
    ],
    nonSurgical: [
      "Hair Loss Treatment",
      "PRP Treatment",
      "Stem Cell Therapy",
      "Mesotherapy", 
      "Cyclic Vitamin Therapy",
      "Laser Light Therapy"
    ],
    techniques: [
      "Follicular Unit Extraction (FUE)",
      "Follicular Unit Transplant (FUT)",
      "Advanced Techniques",
      "Hair Cloning"
    ]
  }
};

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "Dr. R M Singh transformed my skin completely! The acne treatment was amazing and now I feel confident again.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    treatment: "Acne Treatment"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    text: "Best dermatologist in Kanpur! My hair transplant results exceeded expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    treatment: "Hair Transplant"
  },
  {
    id: 3,
    name: "Sunita Gupta",
    text: "Professional care and excellent results. The skin whitening treatment was exactly what I needed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    treatment: "Skin Whitening"
  },
  {
    id: 4,
    name: "Amit Verma",
    text: "The eyelid surgery was performed with great skill. Dr. Singh is truly an expert in his field.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    treatment: "Eyelid Surgery"
  }
];

// SEO Keywords
export const SEO_KEYWORDS = [
  "Best Dermatologists in Kanpur",
  "skin specialist in Kanpur", 
  "Top skin specialist in Kanpur",
  "Best skin doctor in Kanpur",
  "Skin Specialist in Kanpur",
  "Skin Doctor in Kanpur",
  "Skin Specialist in Swaroop Nagar Kanpur",
  "Top Skin specialist in Kanpur",
  "Hair transplant in Kanpur",
  "Dermatology clinic Kanpur",
  "Dr R M Singh dermatologist"
];

// Blog Posts (Sample Data)
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 5 Skin Care Tips for Healthy Glowing Skin",
    slug: "top-5-skin-care-tips",
    excerpt: "Learn essential skincare tips from our dermatology experts to maintain healthy, glowing skin year-round.",
    content: "Detailed blog content here...",
    image: "/images/services/6.jpg",
    author: "Dr. R M Singh",
    publishedAt: "2025-09-01",
    category: "Skincare",
    tags: ["skincare", "tips", "dermatology"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Preventing Hair Loss: Expert Tips and Treatments",
    slug: "preventing-hair-loss",
    excerpt: "Discover effective strategies to prevent hair loss and learn about modern treatment options available.",
    content: "Detailed blog content here...",
    image: "/images/services/22.jpg",
    author: "Dr. R M Singh",
    publishedAt: "2025-08-15", 
    category: "Hair Care",
    tags: ["hair loss", "treatment", "prevention"],
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Benefits of PRP Therapy for Skin and Hair",
    slug: "benefits-of-prp-therapy",
    excerpt: "Explore how Platelet-Rich Plasma (PRP) therapy can rejuvenate your skin and promote hair growth.",
    content: "Detailed blog content here...",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Dr. R M Singh",
    publishedAt: "2025-07-20",
    category: "Treatments",
    tags: ["PRP", "therapy", "rejuvenation"],
    readTime: "6 min read"
  }
];

// Gallery Images
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/services/18.jpg",
    alt: "Before and After Skin Treatment Results",
    category: "results",
    title: "Skin Treatment Results"
  },
  {
    id: 2,
    src: "/images/40.jpg",
    alt: "Modern Clinic Interior",
    category: "clinic",
    title: "Clinic Interior"
  },
  {
    id: 3,
    src: "/images/services/7.jpg",
    alt: "Hair Transplant Procedure",
    category: "procedure",
    title: "Hair Transplant Procedure"
  },
  {
    id: 4,
    src: "/images/services/12.jpg",
    alt: "Eyelid Surgery Equipment",
    category: "equipment",
    title: "Advanced Equipment"
  },
  // {
  //   id: 5,
  //   src: "/images/services/14.jpg",
  //   alt: "Consultation Room",
  //   category: "clinic",
  //   title: "Consultation Room"
  // },
  {
    id: 5,
    src: "/images/services/6.jpg",
    alt: "Treatment Results",
    category: "results", 
    title: "Treatment Results"
  },
  {
    id: 1,
    src: "/images/services/18.jpg",
    alt: "Before and After Skin Treatment Results",
    category: "results",
    title: "Skin Treatment Results"
  },
  {
    id: 2,
    src: "/images/40.jpg",
    alt: "Modern Clinic Interior",
    category: "clinic",
    title: "Clinic Interior"
  },
  {
    id: 3,
    src: "/images/services/7.jpg",
    alt: "Hair Transplant Procedure",
    category: "procedure",
    title: "Hair Transplant Procedure"
  },
  {
    id: 4,
    src: "/images/services/12.jpg",
    alt: "Eyelid Surgery Equipment",
    category: "equipment",
    title: "Advanced Equipment"
  },
  // {
  //   id: 5,
  //   src: "/images/services/14.jpg",
  //   alt: "Consultation Room",
  //   category: "clinic",
  //   title: "Consultation Room"
  // },
  {
    id: 5,
    src: "/images/services/6.jpg",
    alt: "Treatment Results",
    category: "results", 
    title: "Treatment Results"
  },
  {
    id: 1,
    src: "/images/services/18.jpg",
    alt: "Before and After Skin Treatment Results",
    category: "results",
    title: "Skin Treatment Results"
  },
  {
    id: 2,
    src: "/images/40.jpg",
    alt: "Modern Clinic Interior",
    category: "clinic",
    title: "Clinic Interior"
  }
];

// Animation Variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  }
};