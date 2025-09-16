import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, TrendingUp, Terminal, Lock } from 'lucide-react';
import SecurityMetrics from './SecurityMetrics';
import ResumeButton from './ResumeButton';
import { personalInfo, securityMetrics } from '../data/portfolio';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Security grid background */}
      <div className="absolute inset-0 security-grid opacity-30" />
      
      {/* Animated security scan effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-threat-scan animate-security-scan" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Asymmetric layout - 60/40 split */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Panel - Professional Introduction (60%) */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Security badge */}
              <motion.div 
                className="inline-flex items-center gap-2 security-badge px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-4 h-4 text-cyber-blue" />
                <span className="text-sm font-medium text-slate-700">
                  Security-Focused Developer in Transition
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-mono font-bold text-security-blue mb-4">
                Jose Carlos Estrada
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-medium text-slate-600 mb-2">
                {personalInfo.headline}
              </h2>
              
              <p className="text-lg text-slate-500 mb-8">
                {personalInfo.tagline}
              </p>

              {/* Key achievements with icons */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Code className="w-5 h-5 text-cyber-blue mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">8+ years</span> building secure enterprise applications 
                    with modern frameworks
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Lock className="w-5 h-5 text-cyber-blue mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">Cybersecurity certified</span> with formal education 
                    and hands-on security projects
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <TrendingUp className="w-5 h-5 text-cyber-blue mt-1 flex-shrink-0" />
                  <p className="text-slate-600">
                    <span className="font-semibold">$2M+ revenue impact</span> through automation 
                    and digital transformation
                  </p>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 hover-glow"
                >
                  <Shield className="w-5 h-5" />
                  View Security Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300"
                >
                  <Terminal className="w-5 h-5" />
                  Start Conversation
                </a>
                <ResumeButton />
              </motion.div>
            </motion.div>

            {/* Right Panel - Security Metrics Dashboard (40%) */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SecurityMetrics metrics={securityMetrics} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;