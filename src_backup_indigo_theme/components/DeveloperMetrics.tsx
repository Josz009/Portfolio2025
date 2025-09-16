import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, TrendingUp, Package, GitBranch, Activity } from 'lucide-react';

interface DeveloperMetricsProps {
  metrics: {
    experience: string;
    projects: string;
    revenue: string;
    efficiency: string;
    frameworks: string;
    clients: string;
  };
}

const DeveloperMetrics: React.FC<DeveloperMetricsProps> = ({ metrics }) => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    // Animate commit counter
    const interval = setInterval(() => {
      setCommitCount(prev => {
        if (prev < 5000) return prev + 47;
        clearInterval(interval);
        return 5000;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const metricItems = [
    { icon: Code2, label: 'Development Experience', value: metrics.experience, color: 'text-indigo-600' },
    { icon: Package, label: 'Production Applications', value: metrics.projects, color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Revenue Impact', value: metrics.revenue, color: 'text-green-600' },
    { icon: Activity, label: 'Efficiency Gains', value: metrics.efficiency, color: 'text-blue-600' },
    { icon: GitBranch, label: 'Tech Stack', value: metrics.frameworks, color: 'text-orange-600' },
    { icon: Users, label: 'Enterprise Clients', value: metrics.clients, color: 'text-pink-600' },
  ];

  return (
    <div className="relative">
      {/* Developer Dashboard Container */}
      <motion.div 
        className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-indigo-100"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-red-500" />
          </div>
          <div className="font-mono text-xs text-slate-500">
            developer_metrics.dashboard
          </div>
        </div>

        {/* Commit Counter */}
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-slate-600">Total Commits</span>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-lg font-bold text-indigo-600">
                {commitCount.toLocaleString()}+
              </span>
            </div>
          </div>
          <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: '85%' }}
              transition={{ duration: 2, delay: 0.5 }}
            />
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
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                
                {/* Mini progress indicator */}
                {index < 4 && (
                  <div className="mt-2 ml-11">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`h-1 w-8 rounded-full ${
                            i < 4 ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-slate-200'
                          }`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Live Activity Indicator */}
        <motion.div 
          className="mt-6 pt-6 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-slate-600">
                Active Development
              </span>
            </div>
            <span className="font-mono text-xs text-green-600">
              PRODUCTION READY
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600 opacity-10 rounded-full blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 opacity-10 rounded-full blur-xl" />
    </div>
  );
};

export default DeveloperMetrics;