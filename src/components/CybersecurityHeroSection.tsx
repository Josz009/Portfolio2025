import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bug, Eye, Terminal } from 'lucide-react';

const CybersecurityHeroSection: React.FC = () => {
  const securityMetrics = [
    { label: 'Security Incidents Handled', value: '500+', progress: 85, icon: '🛡️' },
    { label: 'Security Experience', value: 'LyondellBasell + Education', progress: 70, icon: '🔐' },
    { label: 'Vulnerabilities Assessed', value: '1000+ Systems', progress: 75, icon: '🔍' },
    { label: 'Compliance Standards', value: 'SOX, PCI, NIST', progress: 80, icon: '✅' },
    { label: 'Security Tools Mastered', value: '15+ Tools', progress: 65, icon: '🛠️' },
    { label: 'Certifications', value: '5 Completed', progress: 90, icon: '🎓' },
    { label: 'ICS/OT Protected', value: '100+ Endpoints', progress: 70, icon: '🏭' },
  ];

  const securityTechnologies = [
    'Splunk', 'Firewalls', 'SIEM', 'Wireshark', 'IDS/IPS', 
    'Vulnerability Assessment', 'Incident Response', 'GCP Security',
    'Access Control', 'Patch Management'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Cybersecurity</span> Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transitioning from software engineering to cybersecurity, bringing unique insights 
            on secure development and threat prevention
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Terminal Style Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Terminal Header */}
            <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <span className="ml-4 text-gray-600 text-sm font-mono">security_metrics.dashboard</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-white">
              {securityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{metric.icon}</span>
                      <span className="text-gray-600 text-sm font-mono">{metric.label}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-red-400 font-mono text-lg font-bold">
                      {metric.value}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-red-300 to-rose-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">Cybersecurity Professional</span>
            </div>

            {/* Main Heading */}
            <h3 className="text-4xl font-bold text-gray-900">
              Defending Digital Infrastructure at Scale
            </h3>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Security Operations:</h4>
                  <p className="text-gray-600">SIEM management, incident response, threat hunting, and 24/7 monitoring</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center">
                    <Bug className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Vulnerability Management:</h4>
                  <p className="text-gray-600">SVA, penetration testing, patch management, and risk mitigation strategies</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Infrastructure Security:</h4>
                  <p className="text-gray-600">Firewalls, ICS/OT protection, access control, and industrial systems security</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compliance & Auditing:</h4>
                  <p className="text-gray-600">Security frameworks implementation, audit preparation, and regulatory compliance</p>
                </div>
              </div>
            </div>

            {/* Core Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Core Security Tools</h4>
              <div className="flex flex-wrap gap-2">
                {securityTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-red-400 to-rose-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                View Security Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-red-400 hover:text-red-500 transition-all flex items-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                Security Stack
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityHeroSection;