import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Terminal, Code, Server, Lock } from 'lucide-react';

interface SecurityEvent {
  id: number;
  timestamp: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  type: string;
  source: string;
  status: 'BLOCKED' | 'MONITORED' | 'ALLOWED' | 'LOGGED';
  description: string;
}

const SIEMToolsDashboard: React.FC = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-world security events based on your experience
  const eventTemplates: Omit<SecurityEvent, 'id' | 'timestamp'>[] = [
    { severity: 'HIGH', type: 'ICS Anomaly', source: 'SCADA-NET-01', status: 'BLOCKED', description: 'Unauthorized OT network access blocked' },
    { severity: 'MEDIUM', type: 'Splunk Alert', source: 'SIEM-01', status: 'MONITORED', description: 'Unusual pattern detected via correlation' },
    { severity: 'LOW', type: 'Patch Scan', source: 'WIN-SRV-042', status: 'LOGGED', description: 'Vulnerability scan completed' },
    { severity: 'HIGH', type: 'Firewall Block', source: 'FW-ZONE-3', status: 'BLOCKED', description: 'Malicious traffic prevented' },
    { severity: 'INFO', type: 'SVA Report', source: 'Security Team', status: 'ALLOWED', description: 'Site assessment completed' },
    { severity: 'MEDIUM', type: 'Certificate Alert', source: 'PKI-Server', status: 'MONITORED', description: 'Certificate expiring soon' },
  ];

  // Generate events
  useEffect(() => {
    const generateEvent = () => {
      const template = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
      const newEvent: SecurityEvent = {
        ...template,
        id: Date.now(),
        timestamp: new Date().toISOString().split('T')[1].split('.')[0],
      };
      setEvents(prev => [newEvent, ...prev].slice(0, 5));
    };

    // Initial events
    for (let i = 0; i < 3; i++) {
      setTimeout(() => generateEvent(), i * 200);
    }

    const interval = setInterval(generateEvent, 6000);
    return () => clearInterval(interval);
  }, []);

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);


  // Your actual tools and proficiency
  const toolsAndSkills = [
    {
      category: 'SIEM & Monitoring',
      tools: [
        { name: 'Splunk', level: 75 },
        { name: 'Log Analysis', level: 70 },
        { name: 'Event Correlation', level: 65 },
      ]
    },
    {
      category: 'Security Scripting',
      tools: [
        { name: 'Python Security', level: 80 },
        { name: 'PowerShell', level: 65 },
        { name: 'Bash/Shell', level: 70 },
        { name: 'Linux Security', level: 65 },
      ]
    },
    {
      category: 'Network & Cloud',
      tools: [
        { name: 'Firewalls', level: 70 },
        { name: 'Wireshark', level: 60 },
        { name: 'GCP Security', level: 70 },
        { name: 'Firebase Rules', level: 80 },
      ]
    },
    {
      category: 'Vulnerability & ICS',
      tools: [
        { name: 'SVA', level: 70 },
        { name: 'Patch Management', level: 75 },
        { name: 'ICS/OT Security', level: 60 },
        { name: 'SCADA', level: 55 },
      ]
    },
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
            Security Operations & Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-time SIEM monitoring combined with comprehensive security tools proficiency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - SIEM Console */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Console Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="ml-2 font-mono text-sm text-gray-300">siem_console.live</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono">{currentTime.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>

            {/* Console Content */}
            <div className="bg-gray-900 text-green-400 p-4 font-mono text-xs h-96 overflow-hidden">
              <div className="mb-2 text-gray-400">
                [SIEM] Splunk Enterprise Security Console v8.2.1<br />
                [STATUS] Connected to LyondellBasell SOC<br />
                [MODE] Real-time threat monitoring active<br />
                ═══════════════════════════════════════════
              </div>
              
              <div className="space-y-1">
                <AnimatePresence mode="popLayout">
                  {events.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-gray-500">[{event.timestamp}]</span>
                      <span className={
                        event.severity === 'HIGH' ? 'text-red-400' :
                        event.severity === 'MEDIUM' ? 'text-yellow-400' :
                        event.severity === 'LOW' ? 'text-blue-400' :
                        'text-gray-400'
                      }>
                        [{event.severity}]
                      </span>
                      <span className="text-cyan-400">{event.type}</span>
                      <span className="text-gray-400">→</span>
                      <span className={
                        event.status === 'BLOCKED' ? 'text-red-400' :
                        event.status === 'MONITORED' ? 'text-yellow-400' :
                        event.status === 'ALLOWED' ? 'text-green-400' :
                        'text-blue-400'
                      }>
                        {event.status}
                      </span>
                      <span className="text-gray-500 truncate flex-1">{event.description}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Bottom Stats */}
              <div className="mt-4 pt-2 border-t border-gray-700 text-gray-400">
                Events: 1247 | Blocked: 89% | Uptime: 99.97%
              </div>
            </div>

            {/* Console Footer */}
            <div className="bg-gray-800 px-4 py-2 flex justify-between text-xs">
              <div className="flex gap-4 text-gray-400">
                <span>Threats Blocked: <span className="text-red-400 font-semibold">1089</span></span>
                <span>Active Monitoring: <span className="text-yellow-400 font-semibold">24/7</span></span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-400 to-rose-400 text-white px-4 py-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                <h3 className="font-semibold">Security Tools & Technologies</h3>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="p-4 space-y-4 max-h-[420px] overflow-y-auto">
              {toolsAndSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-gray-50 rounded-lg p-3"
                >
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    {category.category === 'Security Scripting' && <Code className="w-4 h-4 text-red-500" />}
                    {category.category === 'SIEM & Monitoring' && <Activity className="w-4 h-4 text-red-500" />}
                    {category.category === 'Network & Cloud' && <Server className="w-4 h-4 text-red-500" />}
                    {category.category === 'Vulnerability & ICS' && <Lock className="w-4 h-4 text-red-500" />}
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={tool.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-600">{tool.name}</span>
                          <span className="text-xs text-gray-500">{tool.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <motion.div
                            className={`h-full rounded-full ${
                              tool.level >= 70 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                              tool.level >= 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' :
                              'bg-gradient-to-r from-orange-400 to-red-400'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Summary */}
              <div className="mt-4 p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold text-red-500">16+</p>
                    <p className="text-xs text-gray-600">Tools</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">70%</p>
                    <p className="text-xs text-gray-600">Avg Proficiency</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-600">4</p>
                    <p className="text-xs text-gray-600">Domains</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SIEMToolsDashboard;