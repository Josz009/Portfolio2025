import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Target } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'Google Cybersecurity Certificate',
      date: 'July 2024',
      status: 'completed',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      date: 'September 2025',
      status: 'completed',
      icon: Award,
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Splunk Core Power User',
      date: 'September 2025',
      status: 'completed',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Computer Fundamentals for Cybersecurity',
      date: 'October 2024',
      status: 'completed',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Linux Essentials for Cybersecurity',
      date: 'April 2024',
      status: 'completed',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CompTIA Security+',
      date: 'Target: Fall 2025',
      status: 'in-progress',
      icon: Target,
      color: 'from-gray-600 to-gray-400'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications in cybersecurity and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  cert.status === 'in-progress' ? 'border-2 border-dashed border-gray-300' : ''
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-10`}>
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    {cert.status === 'completed' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {cert.status === 'in-progress' && (
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">In Progress</span>
                        <Target className="h-5 w-5 text-orange-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {cert.date}
                  </p>
                </div>

                {cert.status === 'completed' && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cert.color}`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Security Focus Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg">
            <Shield className="h-5 w-5 mr-2" />
            <span className="font-semibold">Cybersecurity Focused Professional Development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;