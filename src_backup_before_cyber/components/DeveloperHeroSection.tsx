import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Layers, Zap, DollarSign } from 'lucide-react';
import DeveloperMetrics from './DeveloperMetrics';

const DeveloperHeroSection: React.FC = () => {
  const developerMetrics = {
    experience: "8+ Years",
    projects: "50+ Production Apps",
    revenue: "$2M+ Revenue Impact",
    efficiency: "40+ Hours/Week Saved",
    frameworks: "10+ Technologies",
    clients: "30+ Enterprise Clients"
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Code pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-mono font-bold text-indigo-900 mb-4">
              Proven Software Engineering Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Before my cybersecurity journey, I built a strong foundation with 8+ years of 
              full-stack development, creating enterprise solutions that drive real business value
            </p>
          </motion.div>

          {/* Asymmetric layout - opposite of hero section */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Panel - Developer Metrics (40%) */}
            <motion.div 
              className="lg:col-span-2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <DeveloperMetrics metrics={developerMetrics} />
            </motion.div>

            {/* Right Panel - Professional Introduction (60%) */}
            <motion.div 
              className="lg:col-span-3 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Developer badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Code2 className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  Senior Full-Stack Developer
                </span>
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Building Digital Solutions That Scale
              </h3>

              {/* Key achievements with icons */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Layers className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Full-Stack Expertise:</span> React, Node.js, 
                    TypeScript, Python, Firebase, and modern cloud architectures
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Zap className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Automation Specialist:</span> Saved 40+ hours 
                    per week across 30+ staff through intelligent workflow automation
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <DollarSign className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Business Impact:</span> Delivered systems 
                    processing $2M+ annual revenue with 99.9% uptime
                  </p>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <Cloud className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Enterprise Solutions:</span> Built scalable 
                    applications for healthcare, e-commerce, and professional services
                  </p>
                </motion.div>
              </div>

              {/* Technologies showcase */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'Firebase', 'AWS', 'SQL', 'MongoDB', 'GraphQL', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-lg border border-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="#development-projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Code2 className="w-5 h-5" />
                  View Development Projects
                </a>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-300 text-indigo-700 font-medium rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                >
                  <Database className="w-5 h-5" />
                  Technical Stack
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperHeroSection;