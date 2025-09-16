import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Award, Target, TrendingUp, Clock } from 'lucide-react';

interface SecurityMetricsProps {
  metrics: {
    experience: string;
    education: string;
    certification: string;
    projects: string;
    learning: string;
    target: string;
  };
}

const SecurityMetrics: React.FC<SecurityMetricsProps> = ({ metrics }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const metricItems = [
    { icon: Clock, label: 'Development Experience', value: metrics.experience, color: 'text-blue-600' },
    { icon: GraduationCap, label: 'Education', value: metrics.education, color: 'text-green-600' },
    { icon: Award, label: 'Certification', value: metrics.certification, color: 'text-purple-600' },
    { icon: Shield, label: 'Security Projects', value: metrics.projects, color: 'text-cyber-blue' },
    { icon: TrendingUp, label: 'Currently Pursuing', value: metrics.learning, color: 'text-orange-600' },
    { icon: Target, label: 'Career Goal', value: metrics.target, color: 'text-red-600' },
  ];

  return (
    <div className="relative">
      {/* Security Dashboard Container */}
      <motion.div 
        className="glass-effect rounded-2xl p-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-xs text-slate-500">
            security_metrics.dashboard
          </div>
        </div>

        {/* Live Status */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-sm text-slate-600">System Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-green-600">ACTIVE</span>
            </div>
          </div>
          <div className="font-mono text-xs text-slate-500">
            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="space-y-4">
          {metricItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-slate-100 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-slate-500 mb-1">
                      {item.label}
                    </div>
                    <div className="font-semibold text-sm text-slate-800">
                      {item.value}
                    </div>
                  </div>
                </div>
                
                {/* Progress bar for some metrics */}
                {index < 4 && (
                  <div className="mt-2 ml-11">
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-cyber-blue to-blue-600`}
                        initial={{ width: '0%' }}
                        animate={{ width: `${75 + index * 5}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Security Scan Animation */}
        <motion.div 
          className="mt-6 pt-6 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-slate-600">
              Transition Progress
            </span>
            <span className="font-mono text-xs text-cyber-blue">
              75% Complete
            </span>
          </div>
          <div className="mt-2 relative h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyber-blue to-blue-600"
              initial={{ width: '0%' }}
              animate={{ width: '75%' }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <div className="absolute inset-0 bg-threat-scan animate-security-scan" />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyber-blue opacity-10 rounded-full blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 opacity-10 rounded-full blur-xl" />
    </div>
  );
};

export default SecurityMetrics;