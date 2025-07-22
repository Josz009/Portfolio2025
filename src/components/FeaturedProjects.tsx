import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { featuredProjects, additionalProjects } from '../data/portfolio';
import { GitHubRepo, Project } from '../types';
import { mapRepoToProject } from '../utils/github';

interface FeaturedProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ repos }) => {
  // Merge featured projects with GitHub data
  const enhancedProjects = useMemo(() => {
    return featuredProjects.map(project => {
      // Try to find matching GitHub repo
      const matchingRepo = repos.find(repo => 
        repo.name.toLowerCase().includes(project.title.toLowerCase().replace(/\s+/g, '-')) ||
        (project.githubUrl && repo.html_url === project.githubUrl)
      );

      if (matchingRepo) {
        const githubData = mapRepoToProject(matchingRepo);
        return {
          ...project,
          githubUrl: project.githubUrl || githubData.githubUrl,
          liveUrl: project.liveUrl || githubData.liveUrl,
        };
      }

      return project;
    });
  }, [repos]);

  return (
    <section id="projects" className="py-20 bg-slate-50">
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
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Security-focused projects demonstrating my transition from development to cybersecurity,
            showcasing both technical expertise and security implementation
          </p>
        </motion.div>

        {/* Featured Projects Grid - Asymmetric Layout */}
        <div className="space-y-8">
          {/* Flagship Project - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FlagshipProjectCard project={enhancedProjects[0] as unknown as Project} />
          </motion.div>

          {/* Other Featured Projects - Diagonal Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {enhancedProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-8'}
              >
                <ProjectCard project={project as unknown as Project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-mono font-semibold text-security-blue mb-8 text-center">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AdditionalProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FlagshipProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-8 p-8">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-security-blue">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="px-3 py-1 bg-cyber-blue text-white text-xs font-medium rounded-full">
                      {project.highlight}
                    </span>
                  )}
                </div>
                {project.subtitle && (
                  <p className="text-slate-600 font-medium">{project.subtitle}</p>
                )}
              </div>
              <Shield className="w-8 h-8 text-cyber-blue opacity-50" />
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Security Features */}
            {project.securityFeatures && (
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyber-blue" />
                  Security Implementation
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.securityFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="lg:border-l lg:pl-8 border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-4">Project Impact</h4>
            <div className="space-y-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key}>
                  <div className="text-sm text-slate-500 capitalize mb-1">{key}</div>
                  <div className="font-medium text-slate-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative h-full bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-security-blue">
                {project.title}
              </h3>
              {project.highlight && (
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-medium rounded">
                  {project.highlight}
                </span>
              )}
            </div>
            {project.subtitle && (
              <p className="text-sm text-slate-600">{project.subtitle}</p>
            )}
          </div>
          {project.category === 'cybersecurity' ? (
            <Shield className="w-6 h-6 text-cyber-blue opacity-50" />
          ) : (
            <AlertTriangle className="w-6 h-6 text-amber-500 opacity-50" />
          )}
        </div>

        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-slate-500 text-xs">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Key Metrics */}
        <div className="border-t border-slate-200 pt-4 mb-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
              <div key={key}>
                <span className="text-slate-500 capitalize">{key}:</span>
                <div className="font-medium text-slate-700 truncate">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-cyber-blue text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const AdditionalProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-md transition-all duration-300">
      <h4 className="font-semibold text-slate-800 mb-2">{project.title}</h4>
      <p className="text-sm text-slate-600 mb-3">{project.description}</p>
      
      {project.securityNote && (
        <div className="flex items-start gap-2 mb-3">
          <Lock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-600">{project.securityNote}</p>
        </div>
      )}

      {project.features && (
        <div className="space-y-1">
          {project.features.map((feature: string) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
              <span className="text-xs text-slate-600">{feature}</span>
            </div>
          ))}
        </div>
      )}

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-cyber-blue hover:text-blue-600 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          View Project
        </a>
      )}
    </div>
  );
};

export default FeaturedProjects;