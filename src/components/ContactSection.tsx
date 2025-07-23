import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Terminal } from 'lucide-react';
import ResumeButton from './ResumeButton';
import { personalInfo } from '../data/portfolio';

const ContactSection: React.FC = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([
    'jose@portfolio:~$ Welcome to my interactive terminal!',
    'Type "help" to see available commands.',
    ''
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const commands = {
    help: () => [
      'Available commands:',
      '  contact    - View contact information',
      '  email      - Send me an email',
      '  linkedin   - Open LinkedIn profile',
      '  github     - Open GitHub profile',
      '  resume     - Download resume',
      '  skills     - List technical skills',
      '  projects   - View featured projects',
      '  clear      - Clear terminal',
      ''
    ],
    contact: () => [
      'Contact Information:',
      `  Name:     ${personalInfo.name}`,
      `  Email:    ${personalInfo.email}`,
      `  Phone:    ${personalInfo.phone}`,
      `  Location: ${personalInfo.location}`,
      ''
    ],
    email: () => {
      window.location.href = `mailto:${personalInfo.email}`;
      return ['Opening email client...', ''];
    },
    linkedin: () => {
      window.open(personalInfo.linkedin, '_blank');
      return ['Opening LinkedIn profile...', ''];
    },
    github: () => {
      window.open(personalInfo.github, '_blank');
      return ['Opening GitHub profile...', ''];
    },
    resume: () => {
      // Open in new tab
      window.open('/Jose_Carlos_Estrada_Resume.pdf', '_blank');
      
      // Trigger download after a short delay
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/Jose_Carlos_Estrada_Resume.pdf';
        link.download = 'Jose_Carlos_Estrada_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);
      
      return ['Opening resume in new tab...', 'Resume download started...', ''];
    },
    skills: () => [
      'Technical Skills:',
      '  Languages:    JavaScript, TypeScript, Python, C#',
      '  Frontend:     React, React Native, Vue.js, HTML5, CSS3',
      '  Backend:      Node.js, Express, .NET, Firebase',
      '  Database:     SQL Server, MySQL, Firebase, NoSQL',
      '  Security:     Threat Detection, SIEM, Vulnerability Assessment',
      '  Cloud:        AWS, Google Cloud, Azure basics',
      ''
    ],
    projects: () => [
      'Featured Projects:',
      '  1. Threat Intelligence Platform (Security Focus)',
      '  2. Talent Pipeline Portal (Enterprise Automation)',
      '  3. E-commerce Platform (Secure Payments)',
      '  4. Penetration Testing Dashboard (Security Tools)',
      '',
      'Type "cd projects" to navigate to projects section',
      ''
    ],
    clear: () => {
      setOutput(['jose@portfolio:~$ ']);
      return [];
    },
    'cd projects': () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
      return ['Navigating to projects section...', ''];
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedCommand = command.trim().toLowerCase();
    
    if (!trimmedCommand) return;

    // Add command to output
    setOutput(prev => [...prev, `jose@portfolio:~$ ${command}`]);
    
    // Add to command history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    // Process command
    if (trimmedCommand in commands) {
      const result = commands[trimmedCommand as keyof typeof commands]();
      setOutput(prev => [...prev, ...result]);
    } else {
      setOutput(prev => [...prev, `Command not found: ${command}`, 'Type "help" for available commands.', '']);
    }

    setCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand('');
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-security-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ready to discuss cybersecurity opportunities? Use the terminal below or reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal Interface */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm font-mono">contact@terminal</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div
                ref={terminalRef}
                className="p-4 h-96 overflow-y-auto font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {output.map((line, index) => (
                  <div key={index} className="text-green-400 mb-1">
                    {line}
                  </div>
                ))}
                <form onSubmit={handleCommand} className="flex items-center">
                  <span className="text-green-400">jose@portfolio:~$ </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-green-400 outline-none ml-2 terminal-cursor"
                    autoFocus
                  />
                </form>
              </div>
            </div>
          </motion.div>

          {/* Direct Contact Options */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Direct Contact
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-6 h-6 text-cyber-blue" />
                  <div>
                    <p className="text-sm text-slate-300">Email</p>
                    <p className="text-white font-medium">{personalInfo.email}</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-6 h-6 text-cyber-blue" />
                  <div>
                    <p className="text-sm text-slate-300">Phone</p>
                    <p className="text-white font-medium">{personalInfo.phone}</p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-6 h-6 text-cyber-blue" />
                  <div>
                    <p className="text-sm text-slate-300">LinkedIn</p>
                    <p className="text-white font-medium">Connect on LinkedIn</p>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-6 h-6 text-cyber-blue" />
                  <div>
                    <p className="text-sm text-slate-300">GitHub</p>
                    <p className="text-white font-medium">View Projects</p>
                  </div>
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ResumeButton 
                  variant="primary" 
                  className="w-full justify-center" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Jose Carlos Estrada. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;