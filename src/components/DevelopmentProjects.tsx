import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Zap, Users, DollarSign, Package, Rocket } from 'lucide-react';

const DevelopmentProjects: React.FC = () => {
  const developmentProjects = [
    {
      id: 1,
      title: "Enterprise HR Automation Platform",
      subtitle: "Talent Pipeline Portal",
      description: "Full-stack application that revolutionized HR processes, reducing processing time by 70% and saving $150K annually. Features secure authentication, role-based access control, and real-time analytics.",
      liveUrl: "https://talent-pipeline-portal.onrender.com",
      githubUrl: "https://github.com/Josz009/talent-pipeline-portal",
      techStack: ["React", "Firebase", "Node.js", "Material-UI", "Chart.js"],
      metrics: {
        users: "30+ Daily Active Users",
        efficiency: "70% Time Reduction",
        savings: "$150K Annual Savings",
        uptime: "99.9% Availability"
      },
      icon: Users,
      color: "indigo"
    },
    {
      id: 2,
      title: "E-commerce Platform Suite",
      subtitle: "Candle Business Digital Transformation",
      description: "Complete e-commerce solution with inventory management, secure payment processing, and admin dashboard. Processed over $500K in transactions with zero security incidents.",
      liveUrl: "https://lulecandle.com",
      techStack: ["React", "Stripe API", "PayPal SDK", "Node.js", "MongoDB"],
      metrics: {
        transactions: "$500K+ Processed",
        performance: "2s Load Time",
        conversion: "3.5% Conversion Rate",
        features: "50+ SKUs Managed"
      },
      icon: DollarSign,
      color: "green"
    },
    {
      id: 3,
      title: "Professional Services Website",
      subtitle: "Adrian NC Barbershop",
      description: "High-performance business website with booking system integration, achieving 95+ Lighthouse scores and driving 40% increase in appointments.",
      liveUrl: "https://www.adrianncutz.com",
      techStack: ["React", "Next.js", "Tailwind CSS", "Vercel", "Analytics"],
      metrics: {
        performance: "95+ Lighthouse Score",
        traffic: "40% Booking Increase",
        seo: "Page 1 Google Ranking",
        mobile: "100% Mobile Optimized"
      },
      icon: Sparkles,
      color: "purple"
    },
    {
      id: 4,
      title: "Workflow Automation System",
      subtitle: "Enterprise Process Optimization",
      description: "Custom automation platform that eliminated 40+ hours of manual work per week across multiple departments. Integrated with existing systems via APIs.",
      techStack: ["Python", "React", "REST APIs", "PostgreSQL", "Docker"],
      metrics: {
        automation: "40+ Hours/Week Saved",
        processes: "15+ Workflows Automated",
        accuracy: "99.8% Error Reduction",
        roi: "250% ROI in 6 Months"
      },
      icon: Zap,
      color: "orange"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      subtitle: "Patient Portal & Admin Dashboard",
      description: "HIPAA-compliant healthcare platform managing patient records, appointments, and billing for 500+ patients with secure data encryption.",
      techStack: ["React", "Node.js", "MySQL", "JWT Auth", "Encryption"],
      metrics: {
        patients: "500+ Active Patients",
        compliance: "HIPAA Compliant",
        efficiency: "60% Admin Time Saved",
        security: "Zero Data Breaches"
      },
      icon: Package,
      color: "blue"
    },
    {
      id: 6,
      title: "Educational Platform",
      subtitle: "Math Adventure Land",
      description: "Gamified learning platform for elementary students with progress tracking, adaptive difficulty, and parent dashboards. Used by 200+ students.",
      liveUrl: "https://math-adventure-land-jcestradahwc.replit.app",
      techStack: ["React", "Firebase", "Canvas API", "Progressive Web App"],
      metrics: {
        students: "200+ Active Users",
        engagement: "85% Completion Rate",
        improvement: "30% Grade Improvement",
        retention: "90% User Retention"
      },
      icon: Rocket,
      color: "pink"
    },
    {
      id: 7,
      title: "Wedding Invitation Platform",
      subtitle: "Interactive Event Management",
      description: "Beautiful, responsive wedding invitation website with RSVP functionality, guest management, and real-time updates. Features elegant animations and mobile-first design.",
      liveUrl: "https://wedding-invitationga.onrender.com",
      techStack: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
      metrics: {
        guests: "150+ RSVPs Managed",
        performance: "98 Lighthouse Score",
        responsiveness: "100% Mobile Friendly",
        features: "Real-time Updates"
      },
      icon: Sparkles,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200'
    };
    return colors[color as keyof typeof colors] || colors.indigo;
  };

  return (
    <section id="development-projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-4">
            Production-Ready Development Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enterprise applications and digital solutions that have generated real business value,
            improved efficiency, and transformed operations
          </p>
        </motion.div>

        {/* Projects Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  {/* Project Header */}
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${getColorClasses(project.color)}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xs text-slate-500 capitalize mb-1">
                            {key}
                          </div>
                          <div className="text-sm font-semibold text-slate-800">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 mb-6">
            These represent just a fraction of the 50+ applications I've delivered over 8 years
          </p>
          <a
            href="https://github.com/Josz009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProjects;