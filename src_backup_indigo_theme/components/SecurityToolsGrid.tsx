import React from 'react';
import { motion } from 'framer-motion';

const SecurityToolsGrid: React.FC = () => {
  const tools = [
    { name: 'Splunk', category: 'SIEM', proficiency: 75, color: 'from-green-400 to-green-600' },
    { name: 'Wireshark', category: 'Network Analysis', proficiency: 65, color: 'from-blue-400 to-blue-600' },
    { name: 'Nmap', category: 'Network Scanning', proficiency: 70, color: 'from-purple-400 to-purple-600' },
    { name: 'Metasploit', category: 'Penetration Testing', proficiency: 60, color: 'from-red-400 to-red-600' },
    { name: 'Burp Suite', category: 'Web Security', proficiency: 65, color: 'from-orange-400 to-orange-600' },
    { name: 'Git', category: 'Version Control', proficiency: 90, color: 'from-gray-400 to-gray-600' },
    { name: 'Python', category: 'Security Scripting', proficiency: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Kali Linux', category: 'Security OS', proficiency: 70, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Firebase Security', category: 'Cloud Security', proficiency: 80, color: 'from-cyan-400 to-cyan-600' },
    { name: 'OWASP ZAP', category: 'Web App Security', proficiency: 60, color: 'from-pink-400 to-pink-600' },
    { name: 'Snort', category: 'IDS/IPS', proficiency: 55, color: 'from-teal-400 to-teal-600' },
    { name: 'PowerShell', category: 'Windows Security', proficiency: 70, color: 'from-blue-500 to-indigo-600' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Security Tools & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hands-on experience with industry-standard security tools and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.category}</p>
              </div>
              
              {/* Proficiency Bar */}
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                    className={`h-full bg-gradient-to-r ${tool.color}`}
                  />
                </div>
                <span className="absolute -top-6 right-0 text-xs text-gray-600 font-medium">
                  {tool.proficiency}%
                </span>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${tool.color.split(' ')[1]} 0%, ${tool.color.split(' ')[3]} 100%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Currently Expanding</h3>
            <p className="text-gray-600">
              Actively learning: Advanced SIEM Configuration • Cloud Security Architecture • Zero Trust Implementation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityToolsGrid;