export const personalInfo = {
  name: "Jose Carlos Estrada",
  title: "Full-Stack Software Engineer | IT Systems Analyst | Cybersecurity Professional",
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
    highlight: "LEARNING PROJECT",
    image: "/project-images/threat-intelligence-dashboard.png"
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
    highlight: "PRODUCTION SYSTEM",
    image: "/project-images/talent-pipeline-portal.png"
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
    highlight: "SECURE COMMERCE",
    image: "/project-images/lule-candles-home.png"
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
    securityNote: "Implemented secure contact forms and data protection",
    image: "/project-images/adrian-cutz-booking.png"
  },
  {
    title: "AI Resume Builder",
    description: "Resume optimization tool with privacy-first design",
    features: ["Data privacy protection", "Secure PDF generation", "No data retention"],
    category: "ai-tools",
    image: "/project-images/ai-resume-tailor.png"
  },
  {
    title: "Math Adventure Land",
    liveUrl: "https://math-adventure-land-jcestradahwc.replit.app",
    description: "Educational platform with child safety features",
    features: ["COPPA compliance considerations", "Secure user accounts", "Privacy protection"],
    category: "education",
    image: "/project-images/math-adventure-land.png"
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
    description: "Production-ready development & automation skills",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React & React Native", level: 90 },
      { name: "Python", level: 85 },
      { name: "Node.js & REST APIs", level: 85 },
      { name: "Firebase & Cloud Platforms", level: 85 },
      { name: "SQL & NoSQL Databases", level: 85 },
      { name: "UiPath & RPA", level: 80 },
      { name: "Power BI & Analytics", level: 75 }
    ]
  },
  intermediate: {
    title: "Cybersecurity Skills (Growing)",
    description: "Applied security expertise from education & internship",
    skills: [
      { name: "SIEM & Log Analysis", level: 70 },
      { name: "Firewalls & Patch Management", level: 65 },
      { name: "Security Monitoring & SVA", level: 65 },
      { name: "Incident Response", level: 60 },
      { name: "ICS Security", level: 55 },
      { name: "GCP Security & Access Control", level: 60 },
      { name: "Vulnerability Assessment", level: 60 },
      { name: "Security Auditing & Compliance", level: 55 }
    ]
  },
  learning: {
    title: "Currently Expanding",
    description: "Active certifications and learning focus",
    skills: [
      "CompTIA Security+ (Target: Fall 2025)",
      "Salesforce Platform App Builder",
      "Advanced Penetration Testing",
      "Cloud Security Architecture",
      "Security Operations Center (SOC) Tools",
      "Forensics and Incident Analysis",
      "Zero Trust Architecture",
      "Anomaly Detection & Threat Intelligence"
    ]
  }
};

export const careerTimeline = [
  {
    period: "May 2025 - Sep 2025",
    role: "Cybersecurity Intern",
    company: "LyondellBasell Industries",
    highlights: [
      "Supported regional computing systems including Firewalls and patch management",
      "Level 2 monitoring, incident response, and forensic investigations",
      "Site vulnerability assessments (SVA) and risk mitigation",
      "Secured industrial control systems (ICS) maintaining CIA triad"
    ],
    impact: "Hands-on enterprise security experience"
  },
  {
    period: "2024 - Present",
    role: "Software Engineer | Web Developer | RPA Specialist",
    company: "Synergy Digital Works",
    highlights: [
      "Develop full-stack applications serving 500+ daily users",
      "Automated approval workflows reducing processing time 3 days to 2 hours",
      "Implement role-based access control and real-time logging",
      "Firebase Analytics integration for system monitoring"
    ],
    impact: "60% efficiency improvement in HR onboarding"
  },
  {
    period: "2016 - 2025",
    role: "IT Systems Lead | Internal Software Developer",
    company: "Houston Window Cleaning Services",
    highlights: [
      "Led technology transformation for 30+ employee organization",
      "Built comprehensive dashboards for HR, Finance, and Compliance",
      "Designed internal event logging system for security anomalies",
      "Reduced manual administrative workload by 75%"
    ],
    impact: "$2M annual revenue systems, promoted twice"
  },
  {
    period: "2020 - 2024",
    role: "Cybersecurity Education",
    company: "Lone Star College",
    highlights: [
      "Bachelor of Applied Technology in Cybersecurity",
      "Associate Degree in Computer Science",
      "Google Cybersecurity Certificate (July 2024)",
      "Multiple security certifications completed"
    ],
    impact: "Formal security education and certifications"
  }
];

export const securityMetrics = {
  experience: "8+ Years Development",
  education: "B.A.T. Cybersecurity",
  certification: "5 Security Certifications",
  projects: "4+ Security Projects",
  learning: "CompTIA Security+ (Target: Fall 2025)",
  target: "Cybersecurity Professional"
};