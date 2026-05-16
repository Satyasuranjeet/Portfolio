import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { Github, ExternalLink, Star, GitFork, Download, Code } from 'lucide-react';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 bg-bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
          >
            Things I've Built That <span className="text-accent-coral">Actually Work</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From military-grade encryption to real-time voice communication — I build products that solve real problems.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-1 rounded-2xl bg-gradient-to-br transition-all duration-500 overflow-hidden group h-full`}
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${project.color}33 0%, transparent 100%)`,
                boxShadow: `0 0 40px -10px ${project.color}1a`
              }}
            >
              <div className="p-8 bg-bg-secondary rounded-[14px] h-full flex flex-col relative overflow-hidden group">
                {/* Glow Effect */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: project.color }}
                />

                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="p-3 rounded-xl bg-white/5"
                    style={{ color: project.color }}
                  >
                    <Code size={24} />
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.id === 'picoanime' && (
                    <div className="inline-flex items-center space-x-1 text-[10px] font-bold text-accent-cyan uppercase tracking-tighter mb-4 bg-accent-cyan/10 px-2 py-0.5 rounded-full border border-accent-cyan/20">
                       28 Forks &gt; 26 Stars = Community Favorite
                    </div>
                  )}
                  
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-[10px] font-mono text-text-tertiary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center space-x-4 text-xs text-text-tertiary">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    {project.forks && (
                      <div className="flex items-center space-x-1">
                        <GitFork size={14} />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                  
                  {project.apk ? (
                    <a href={project.repo} className="flex items-center space-x-2 text-xs font-bold text-accent-coral hover:underline">
                      <Download size={14} />
                      <span>Download APK</span>
                    </a>
                  ) : (
                    <div className="text-[10px] font-mono text-text-tertiary italic">
                      {project.angle}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects CTA */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <a 
            href="https://github.com/Satyasuranjeet?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-text-secondary hover:text-accent-cyan transition-all group"
          >
            <span className="font-display font-medium text-lg">View All 132 Repositories on GitHub</span>
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
