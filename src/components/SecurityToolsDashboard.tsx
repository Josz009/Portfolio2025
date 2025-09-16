import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Bug, Lock, Eye, Terminal, Cloud, AlertTriangle } from 'lucide-react';

const SecurityToolsDashboard: React.FC = () => {
  const toolCategories = [
    {
      category: 'SIEM & Monitoring',
      icon: Eye,
      color: 'red',
      tools: [
        { name: 'Splunk', proficiency: 75, level: 'HIGH' },
        { name: 'Log Analysis', proficiency: 70, level: 'HIGH' },
        { name: 'Event Correlation', proficiency: 65, level: 'MEDIUM' },
      ]
    },
    {
      category: 'Network Security',
      icon: Shield,
      color: 'rose',
      tools: [
        { name: 'Firewalls (Palo Alto/Cisco)', proficiency: 70, level: 'HIGH' },
        { name: 'Wireshark', proficiency: 60, level: 'MEDIUM' },
        { name: 'Nmap', proficiency: 65, level: 'MEDIUM' },
      ]
    },
    {
      category: 'Vulnerability Management',
      icon: Bug,
      color: 'orange',
      tools: [
        { name: 'Vulnerability Assessment (SVA)', proficiency: 70, level: 'HIGH' },
        { name: 'Patch Management', proficiency: 75, level: 'HIGH' },
        { name: 'OWASP Tools', proficiency: 55, level: 'MEDIUM' },
      ]
    },
    {
      category: 'Industrial Security',
      icon: Server,
      color: 'amber',
      tools: [
        { name: 'ICS/OT Security', proficiency: 60, level: 'MEDIUM' },
        { name: 'SCADA Systems', proficiency: 55, level: 'MEDIUM' },
        { name: 'Industrial Firewalls', proficiency: 65, level: 'MEDIUM' },
      ]
    },
    {
      category: 'Cloud & Application Security',
      icon: Cloud,
      color: 'yellow',
      tools: [
        { name: 'GCP Security', proficiency: 70, level: 'HIGH' },
        { name: 'Firebase Security Rules', proficiency: 80, level: 'HIGH' },
        { name: 'Access Control (IAM)', proficiency: 65, level: 'MEDIUM' },
      ]
    },
    {
      category: 'Incident Response',
      icon: AlertTriangle,
      color: 'orange',
      tools: [
        { name: 'Incident Handling', proficiency: 60, level: 'MEDIUM' },
        { name: 'Forensics Basics', proficiency: 50, level: 'LOW' },
        { name: 'Threat Intelligence', proficiency: 55, level: 'MEDIUM' },
      ]
    },
    {
      category: 'Security Scripting',
      icon: Terminal,
      color: 'red',
      tools: [
        { name: 'Python for Security', proficiency: 80, level: 'HIGH' },
        { name: 'PowerShell Security', proficiency: 65, level: 'MEDIUM' },
        { name: 'Bash Scripting', proficiency: 70, level: 'HIGH' },
      ]
    },
    {
      category: 'Compliance & Frameworks',
      icon: Lock,
      color: 'rose',
      tools: [
        { name: 'NIST Framework', proficiency: 60, level: 'MEDIUM' },
        { name: 'SOX Compliance', proficiency: 55, level: 'MEDIUM' },
        { name: 'Security Auditing', proficiency: 65, level: 'MEDIUM' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'HIGH': return 'text-green-600 bg-green-50 border-green-200';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'LOW': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getBarColor = (level: string) => {
    switch(level) {
      case 'HIGH': return 'from-green-400 to-emerald-500';
      case 'MEDIUM': return 'from-yellow-400 to-amber-500';
      case 'LOW': return 'from-orange-400 to-red-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

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
            Security Tools & Technologies Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hands-on experience with enterprise security tools gained through education and LyondellBasell internship
          </p>
        </motion.div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5" />
                <span className="font-mono text-sm">security_tools.proficiency</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  HIGH (70-100%)
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  MEDIUM (50-70%)
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full" />
                  LOW (&lt;50%)
                </span>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {toolCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{category.category}</h3>
                    </div>

                    {/* Tools List */}
                    <div className="space-y-3">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getLevelColor(tool.level)}`}>
                              {tool.level}
                            </span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${getBarColor(tool.level)}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tool.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                              />
                            </div>
                            <span className="absolute -top-6 right-0 text-xs text-gray-500 font-mono">
                              {tool.proficiency}%
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gray-50 border-t border-gray-200 p-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-red-500">24</p>
                <p className="text-xs text-gray-600">Total Tools</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">9</p>
                <p className="text-xs text-gray-600">High Proficiency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600">14</p>
                <p className="text-xs text-gray-600">Medium Proficiency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">1</p>
                <p className="text-xs text-gray-600">Learning</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-xs text-gray-600">Categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">65%</p>
                <p className="text-xs text-gray-600">Avg Proficiency</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityToolsDashboard;