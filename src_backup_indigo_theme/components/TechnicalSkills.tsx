import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, TrendingUp, BookOpen, Star, Zap, Award } from 'lucide-react';
import { technicalSkills } from '../data/portfolio';
import { Skill } from '../types';

const TechnicalSkills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
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
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Combining 8+ years of development expertise with growing cybersecurity knowledge
            to deliver secure, scalable solutions
          </p>
        </motion.div>

        {/* Skills Categories - Unique Layout */}
        <div className="space-y-12">
          {/* Expert Skills - Full Width with Visual Progress */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillCategoryWithProgress
              category={technicalSkills.expert}
              icon={Code}
              color="blue"
            />
          </motion.div>

          {/* Growing Skills - Asymmetric Two Column */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SkillCategoryWithProgress
                category={technicalSkills.intermediate}
                icon={Shield}
                color="green"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:mt-12"
            >
              <LearningSkillsCard category={technicalSkills.learning} />
            </motion.div>
          </div>
        </div>

        {/* Security Journey Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SecurityJourneyTimeline />
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: {
    title: string;
    description: string;
    skills: Skill[] | string[];
  };
  icon: React.ElementType;
  color: string;
}

const SkillCategoryWithProgress: React.FC<SkillCategoryProps> = ({ category, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
  };

  const progressColorClasses = {
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-security-blue mb-1">{category.title}</h3>
          <p className="text-sm text-slate-600">{category.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {(category.skills as Skill[]).map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">{skill.name}</span>
              <span className="text-sm text-slate-500">{skill.level}%</span>
            </div>
            <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`absolute inset-y-0 left-0 ${progressColorClasses[color as keyof typeof progressColorClasses]}`}
                initial={{ width: '0%' }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
              />
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const LearningSkillsCard: React.FC<{ category: any }> = ({ category }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6 h-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-lg bg-amber-100 text-amber-600 border border-amber-200">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-security-blue mb-1">{category.title}</h3>
          <p className="text-sm text-slate-600">{category.description}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {(category.skills as string[]).map((skill, index) => (
          <motion.div
            key={skill}
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="relative">
              <Star className="w-5 h-5 text-amber-500" />
              <Zap className="w-3 h-3 text-orange-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-sm font-medium text-slate-700">{skill}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white/50 rounded-lg border border-amber-200">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-amber-600">Current Focus:</span> Preparing for 
          CompTIA Security+ certification while building security-focused projects
        </p>
      </div>
    </div>
  );
};

const SecurityJourneyTimeline: React.FC = () => {
  const milestones = [
    {
      date: '2016',
      title: 'Started Development Journey',
      description: 'Began professional software development career',
      icon: Code,
      achieved: true,
    },
    {
      date: '2020',
      title: 'Security Education Begins',
      description: 'Enrolled in B.A.T. Cybersecurity program',
      icon: BookOpen,
      achieved: true,
    },
    {
      date: 'July 2024',
      title: 'Google Cybersecurity Certificate',
      description: 'Completed comprehensive security certification',
      icon: Award,
      achieved: true,
    },
    {
      date: 'Present',
      title: 'Building Security Portfolio',
      description: 'Creating security-focused projects and tools',
      icon: Shield,
      achieved: true,
    },
    {
      date: 'Fall 2025',
      title: 'CompTIA Security+ Target',
      description: 'Pursuing industry-standard certification',
      icon: TrendingUp,
      achieved: false,
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold text-security-blue mb-8 text-center">
        My Security Journey
      </h3>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue to-blue-600 opacity-20" />

        {/* Milestones */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.date}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="text-sm text-cyber-blue font-medium mb-1">
                      {milestone.date}
                    </div>
                    <h4 className="text-lg font-semibold text-security-blue mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-slate-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      milestone.achieved
                        ? 'bg-cyber-blue text-white'
                        : 'bg-slate-200 text-slate-500 border-2 border-dashed border-slate-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  {milestone.achieved && (
                    <div className="absolute inset-0 bg-cyber-blue rounded-full animate-ping opacity-20" />
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;