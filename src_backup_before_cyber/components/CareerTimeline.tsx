import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Shield, TrendingUp, Users, DollarSign } from 'lucide-react';
import { careerTimeline } from '../data/portfolio';

const CareerTimeline: React.FC = () => {
  const getIcon = (role: string) => {
    if (role.includes('Cybersecurity Education')) return GraduationCap;
    if (role.includes('Security-Focused')) return Shield;
    if (role.includes('Automation')) return TrendingUp;
    return Briefcase;
  };

  const getColor = (role: string) => {
    if (role.includes('Cybersecurity')) return 'cyber-blue';
    if (role.includes('Security')) return 'green-600';
    return 'blue-600';
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono font-bold text-security-blue mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From full-stack development to cybersecurity: A strategic career transition
            leveraging 8+ years of technical expertise
          </p>
        </motion.div>

        {/* Career Timeline - Asymmetric Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyber-blue via-blue-600 to-green-600 opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {careerTimeline.map((item, index) => {
              const Icon = getIcon(item.role);
              const color = getColor(item.role);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.period}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:flex-row`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {/* Card Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-${color} to-${color === 'cyber-blue' ? 'blue-600' : color} opacity-5 rounded-xl blur-xl group-hover:opacity-10 transition-opacity`} />
                      
                      {/* Card Content */}
                      <div className="relative bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition-all">
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${color}/10 text-${color} text-sm font-medium rounded-full mb-4`}>
                          <Icon className="w-4 h-4" />
                          {item.period}
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-xl font-semibold text-security-blue mb-2">
                          {item.role}
                        </h3>
                        <p className="text-slate-600 font-medium mb-4">{item.company}</p>

                        {/* Highlights */}
                        <ul className="space-y-2 mb-4">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${color} mt-1.5 flex-shrink-0`} />
                              <span className="text-sm text-slate-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Impact Metrics */}
                        <div className={`flex items-center gap-2 p-3 bg-gradient-to-r from-${color}/5 to-${color}/10 rounded-lg border border-${color}/20`}>
                          <DollarSign className={`w-5 h-5 text-${color}`} />
                          <span className="text-sm font-medium text-slate-700">
                            Impact: {item.impact}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 my-8 lg:my-0">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-${color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className={`absolute inset-0 bg-${color} rounded-full animate-ping opacity-20`} />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career Transition Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <div className="bg-gradient-to-r from-cyber-blue to-green-600 text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Ready for the Next Chapter</h3>
              <p className="text-lg mb-6 max-w-2xl">
                Combining proven development expertise with cybersecurity knowledge to pursue
                entry to mid-level security analyst positions. Seeking roles where I can leverage
                my technical foundation while growing in the cybersecurity field.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Team Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Security Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerTimeline;