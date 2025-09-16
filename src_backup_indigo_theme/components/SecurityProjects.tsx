import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, Search, Lock, ExternalLink, Github, CheckCircle } from 'lucide-react';

const SecurityProjects: React.FC = () => {
  const securityProjects = [
    {
      title: 'Enterprise Vulnerability Assessment System',
      description: 'Automated vulnerability scanning and reporting platform built during LyondellBasell internship',
      tags: ['SVA', 'Risk Assessment', 'Compliance', 'Reporting'],
      highlights: [
        'Identified 50+ critical vulnerabilities',
        'Automated patch management workflow',
        'Reduced assessment time by 60%'
      ],
      icon: Search,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'ICS/OT Security Monitoring Dashboard',
      description: 'Real-time monitoring system for Industrial Control Systems maintaining CIA triad',
      tags: ['ICS Security', 'SCADA', 'Real-time Monitoring', 'Anomaly Detection'],
      highlights: [
        'Monitored 100+ industrial endpoints',
        'Zero security incidents during deployment',
        'Level 2 incident response integration'
      ],
      icon: AlertCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SIEM Log Analysis Platform',
      description: 'Centralized log management and threat detection system using Splunk',
      tags: ['SIEM', 'Splunk', 'Log Analysis', 'Threat Hunting'],
      highlights: [
        'Processed 1M+ events daily',
        'Custom detection rules for enterprise threats',
        'Automated incident ticketing'
      ],
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Firewall Configuration Auditor',
      description: 'Automated tool for auditing and optimizing firewall rules across enterprise networks',
      tags: ['Firewalls', 'Network Security', 'Automation', 'Compliance'],
      highlights: [
        'Audited 500+ firewall rules',
        'Identified redundant/risky configurations',
        'Compliance reporting for SOX/PCI'
      ],
      icon: Lock,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Security Projects & Implementations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security solutions developed during internship and professional experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {securityProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-10`}>
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Github className="h-4 w-4 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityProjects;