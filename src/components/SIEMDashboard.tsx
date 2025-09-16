import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Server, Wifi, Lock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityEvent {
  id: number;
  timestamp: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  type: string;
  source: string;
  status: 'BLOCKED' | 'MONITORED' | 'ALLOWED' | 'LOGGED';
  description: string;
}

const SIEMDashboard: React.FC = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-world security events based on your experience
  const eventTemplates: Omit<SecurityEvent, 'id' | 'timestamp'>[] = [
    { severity: 'HIGH', type: 'ICS Anomaly', source: 'SCADA-NET-01', status: 'BLOCKED', description: 'Unauthorized access attempt to industrial control system' },
    { severity: 'MEDIUM', type: 'Patch Required', source: 'WIN-SRV-042', status: 'MONITORED', description: 'Critical security patch missing - CVE-2025-0001' },
    { severity: 'LOW', type: 'Splunk Alert', source: 'SIEM-01', status: 'LOGGED', description: 'Unusual login pattern detected via Splunk correlation' },
    { severity: 'HIGH', type: 'Firewall Breach', source: 'FW-ZONE-3', status: 'BLOCKED', description: 'Attempted bypass of firewall rules on OT network' },
    { severity: 'INFO', type: 'SVA Complete', source: 'Security Team', status: 'ALLOWED', description: 'Site vulnerability assessment completed successfully' },
    { severity: 'MEDIUM', type: 'Certificate Expiry', source: 'PKI-Server', status: 'MONITORED', description: 'SSL certificate expiring in 7 days' },
    { severity: 'HIGH', type: 'Malware Detected', source: 'EDR-Client-15', status: 'BLOCKED', description: 'Ransomware variant quarantined by endpoint protection' },
    { severity: 'LOW', type: 'Access Review', source: 'IAM-System', status: 'LOGGED', description: 'Privileged access review required for 3 accounts' },
  ];

  // Generate new events periodically
  useEffect(() => {
    const generateEvent = () => {
      const template = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
      const newEvent: SecurityEvent = {
        ...template,
        id: Date.now(),
        timestamp: new Date().toISOString().split('T')[1].split('.')[0],
      };
      
      setEvents(prev => [newEvent, ...prev].slice(0, 6)); // Keep only 6 events
    };

    // Generate initial events
    for (let i = 0; i < 4; i++) {
      setTimeout(() => generateEvent(), i * 200);
    }

    // Generate new events periodically
    const interval = setInterval(generateEvent, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getSeverityColor = (severity: SecurityEvent['severity']) => {
    switch (severity) {
      case 'HIGH': return 'text-red-500 bg-red-50 border-red-200';
      case 'MEDIUM': return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'LOW': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'INFO': return 'text-blue-500 bg-blue-50 border-blue-200';
    }
  };

  const getStatusIcon = (status: SecurityEvent['status']) => {
    switch (status) {
      case 'BLOCKED': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'MONITORED': return <AlertCircle className="w-4 h-4 text-orange-500" />;
      case 'ALLOWED': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'LOGGED': return <Activity className="w-4 h-4 text-blue-500" />;
    }
  };

  const securityMetrics = {
    totalEvents: 1247,
    blockedThreats: 1089,
    activeMonitoring: 24,
    systemUptime: '99.97%',
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
            Security Information & Event Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Demonstrating hands-on experience with Splunk, firewall management, ICS security, and vulnerability assessments from LyondellBasell internship
          </p>
        </motion.div>

        {/* Main Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-red-400 to-rose-400 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                <h3 className="text-xl font-bold">SIEM Console</h3>
                <span className="px-2 py-1 bg-white/20 rounded text-sm">
                  LyondellBasell SOC
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">LIVE</span>
                </div>
                <span className="font-mono text-sm">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>

          {/* Metrics Bar */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{securityMetrics.totalEvents}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Blocked Threats</p>
                <p className="text-2xl font-bold text-red-400">{securityMetrics.blockedThreats}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Active Monitoring</p>
                <p className="text-2xl font-bold text-orange-600">{securityMetrics.activeMonitoring}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">System Uptime</p>
                <p className="text-2xl font-bold text-green-600">{securityMetrics.systemUptime}</p>
              </div>
            </div>
          </div>

          {/* Event Stream */}
          <div className="p-6">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Live Security Events
              </h4>
            </div>
            
            <div className="space-y-2 font-mono text-sm">
              <AnimatePresence mode="popLayout">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3 rounded-lg border ${getSeverityColor(event.severity)}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-500">[{event.timestamp}]</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          event.severity === 'HIGH' ? 'bg-red-500 text-white' :
                          event.severity === 'MEDIUM' ? 'bg-orange-500 text-white' :
                          event.severity === 'LOW' ? 'bg-yellow-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {event.severity}
                        </span>
                        <span className="font-semibold">{event.type}</span>
                        <span className="text-gray-600">from</span>
                        <span className="text-blue-600">{event.source}</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        {getStatusIcon(event.status)}
                        <span className="text-xs font-semibold uppercase">{event.status}</span>
                      </div>
                    </div>
                    <div className="mt-1 text-gray-600 text-xs pl-4">
                      {event.description}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Network Activity Visualization */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Network Security Status
              </h4>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600">15 Servers Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600">3 Networks Monitored</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600">All Systems Secure</span>
                </div>
              </div>
            </div>
            
            {/* Activity Bars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Firewall Activity</span>
                  <span className="text-xs font-semibold text-gray-900">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-red-500 to-rose-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '87%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">IDS/IPS Coverage</span>
                  <span className="text-xs font-semibold text-gray-900">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Threat Intelligence</span>
                  <span className="text-xs font-semibold text-gray-900">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SIEMDashboard;