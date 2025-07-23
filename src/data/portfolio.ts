export const personalInfo = {
  name: "Jose Carlos Estrada",
  title: "Full-Stack Software Engineer | Cybersecurity Professional | Automation Specialist",
  location: "Cypress, TX",
  email: "josestrada87@hotmail.com",
  phone: "281-733-9871",
  linkedin: "https://linkedin.com/in/carlos-estrada-998167185",
  github: "https://github.com/Josz009",
  
  // Professional positioning for cybersecurity transition
  headline: "Senior Full-Stack Developer Transitioning to Cybersecurity",
  tagline: "8+ Years Development Experience | Cybersecurity Education & Certification",
  
  professionalSummary: {
    years: "8+",
    primaryRole: "Full-Stack Developer with Security Focus",
    expertise: ["React", "Firebase", "JavaScript", "Python", "Security Automation"],
    education: "Bachelor of Applied Technology (B.A.T.) in Cybersecurity",
    certification: "Google Cybersecurity Certificate (July 2024)",
    pursuing: "CompTIA Security+ (Target: Fall 2025)",
    keyAchievements: [
      "Built production threat intelligence platform demonstrating security concepts",
      "Automated workflows saving 40+ hours/week across 30+ staff",
      "Developed secure systems processing $2M+ annual revenue",
      "Led digital transformation reducing costs by $150K annually"
    ]
  }
};

export const featuredProjects = [
  {
    id: 1,
    title: "Threat Intelligence Platform",
    subtitle: "Cybersecurity Learning & Demonstration Project",
    description: "Real-time cybersecurity monitoring system built to showcase threat detection concepts, security analytics, and incident response workflows learned through formal cybersecurity education.",
    liveUrl: "https://threat-intelligence-platform.onrender.com",
    githubUrl: "https://github.com/Josz009/threat-intelligence-platform",
    techStack: ["React", "TypeScript", "Node.js", "Firebase", "Security Analytics"],
    securityFeatures: [
      "Simulated threat detection algorithms",
      "Security event monitoring dashboard",
      "Incident response workflow automation",
      "SIEM concepts implementation"
    ],
    metrics: {
      purpose: "Demonstrate cybersecurity knowledge",
      concepts: "SIEM, threat detection, incident response",
      learning: "Applied Google Cybersecurity Certificate concepts",
      impact: "Portfolio piece for security roles"
    },
    featured: true,
    category: "cybersecurity",
    highlight: "LEARNING PROJECT"
  },
  {
    id: 2,
    title: "Penetration Testing Dashboard",
    subtitle: "Security Assessment Tool Development",
    description: "Comprehensive security assessment tool demonstrating understanding of vulnerability scanning, penetration testing methodologies, and security reporting.",
    liveUrl: null,
    githubUrl: null, // Will be found via GitHub API
    techStack: ["Security Monitoring", "Vulnerability Scanning", "Python", "React"],
    securityFeatures: [
      "OWASP Top 10 vulnerability checks",
      "Security assessment reporting",
      "Vulnerability prioritization",
      "Remediation tracking"
    ],
    metrics: {
      purpose: "Apply penetration testing concepts",
      tools: "Security scanning automation",
      learning: "Practical security assessment",
      impact: "Security skills demonstration"
    },
    featured: true,
    category: "cybersecurity",
    highlight: "SECURITY DEVELOPMENT"
  },
  {
    id: 3,
    title: "Talent Pipeline Portal",
    subtitle: "Enterprise HR Automation Platform",
    description: "Full-stack application with secure authentication, role-based access control, and audit logging. Demonstrates security-conscious development practices.",
    liveUrl: "https://talent-pipeline-portal.onrender.com",
    githubUrl: "https://github.com/Josz009/talent-pipeline-portal",
    techStack: ["React", "Firebase", "JavaScript", "Secure Auth"],
    securityFeatures: [
      "Secure authentication system",
      "Role-based access control (RBAC)",
      "Audit logging and monitoring",
      "Data encryption at rest"
    ],
    metrics: {
      efficiency: "70% reduction in processing time",
      savings: "$150K annual cost reduction",
      security: "Enterprise-grade security",
      users: "30+ daily active users"
    },
    featured: true,
    category: "enterprise",
    highlight: "PRODUCTION SYSTEM"
  },
  {
    id: 4,
    title: "E-commerce Security Implementation",
    subtitle: "Lule Candle - Secure Payment Processing Platform",
    description: "Production e-commerce platform implementing security best practices, PCI DSS considerations, and secure payment processing.",
    liveUrl: "https://lulecandle.com",
    githubUrl: null,
    techStack: ["React", "Stripe", "PayPal", "Security Compliance"],
    securityFeatures: [
      "PCI DSS compliance patterns",
      "Secure payment tokenization",
      "XSS and CSRF protection",
      "Secure session management"
    ],
    metrics: {
      transactions: "Secure payment processing",
      compliance: "Security best practices",
      protection: "Customer data security",
      performance: "Optimized and secure"
    },
    featured: true,
    category: "full-stack",
    highlight: "SECURE COMMERCE"
  }
];

export const additionalProjects = [
  {
    title: "Wedding Invitation Platform",
    liveUrl: "https://wedding-invitationga.onrender.com",
    description: "Interactive wedding invitation with RSVP functionality and guest management",
    category: "web-development",
    securityNote: "Secure guest data handling and privacy protection"
  },
  {
    title: "Adrian NC Website",
    liveUrl: "https://www.adrianncutz.com",
    description: "Professional business website with security considerations",
    category: "web-development",
    securityNote: "Implemented secure contact forms and data protection"
  },
  {
    title: "AI Resume Builder",
    description: "Resume optimization tool with privacy-first design",
    features: ["Data privacy protection", "Secure PDF generation", "No data retention"],
    category: "ai-tools"
  },
  {
    title: "Math Adventure Land",
    liveUrl: "https://math-adventure-land-jcestradahwc.replit.app",
    description: "Educational platform with child safety features",
    features: ["COPPA compliance considerations", "Secure user accounts", "Privacy protection"],
    category: "education"
  },
  {
    title: "Mental Health App",
    description: "Wellness application with HIPAA considerations",
    features: ["Encrypted data storage", "Privacy-first design", "Secure AI integration"],
    category: "mobile"
  }
];

export const technicalSkills = {
  expert: {
    title: "Expert Level (8+ Years)",
    description: "Production-ready development skills",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React & React Native", level: 90 },
      { name: "Node.js & Express", level: 85 },
      { name: "Firebase & Cloud Platforms", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL & NoSQL Databases", level: 85 }
    ]
  },
  intermediate: {
    title: "Growing Expertise (1-2 Years)",
    description: "Cybersecurity skills in development",
    skills: [
      { name: "Threat Detection & SIEM", level: 60 },
      { name: "Security Monitoring", level: 65 },
      { name: "Vulnerability Assessment", level: 55 },
      { name: "Incident Response", level: 50 },
      { name: "Security Frameworks (NIST/OWASP)", level: 55 },
      { name: "Network Security Basics", level: 50 }
    ]
  },
  learning: {
    title: "Currently Learning",
    description: "Expanding cybersecurity knowledge",
    skills: [
      "CompTIA Security+ Certification",
      "Advanced Penetration Testing",
      "Cloud Security Architecture",
      "Security Operations Center (SOC) Tools",
      "Forensics and Incident Analysis",
      "Zero Trust Architecture"
    ]
  }
};

export const careerTimeline = [
  {
    period: "2016 - Present",
    role: "Full-Stack Developer & Automation Specialist",
    company: "Multiple Enterprise Clients",
    highlights: [
      "8+ years building production systems",
      "Specialized in secure enterprise applications",
      "Automated critical business workflows",
      "Implemented security best practices"
    ],
    impact: "$2M+ revenue systems, 40+ hours/week saved"
  },
  {
    period: "2020 - 2024",
    role: "Cybersecurity Education Journey",
    company: "Sam Houston State University",
    highlights: [
      "Bachelor of Applied Technology in Cybersecurity",
      "Formal security education and training",
      "Applied security concepts to development",
      "Built security-focused portfolio projects"
    ],
    impact: "Bridging development and security expertise"
  },
  {
    period: "2024 - Present",
    role: "Security-Focused Developer",
    company: "Transitioning to Cybersecurity",
    highlights: [
      "Google Cybersecurity Certificate (July 2024)",
      "Building security tools and platforms",
      "Pursuing CompTIA Security+",
      "Seeking entry to mid-level security roles"
    ],
    impact: "Ready for cybersecurity analyst positions"
  }
];

export const securityMetrics = {
  experience: "8+ Years Development",
  education: "B.A.T. Cybersecurity",
  certification: "Google Cybersecurity",
  projects: "4+ Security Projects",
  learning: "CompTIA Security+ (In Progress)",
  target: "Junior/Mid-Level Security Roles"
};