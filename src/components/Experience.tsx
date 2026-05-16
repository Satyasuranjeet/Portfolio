import React from 'react';
import { motion } from 'motion/react';
import { experiences } from '../data/experience';
import { Briefcase, Users, MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
          >
            The <span className="text-accent-purple">Journey</span>
          </motion.h2>
          <p className="text-text-secondary">A chronological look at my professional growth and community impact.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block timeline-line" />

          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-bg-primary border-2 border-accent-purple rounded-full -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-green-500 animate-pulse' : 'bg-accent-purple'}`} />
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className={`p-8 glass-card hover:border-accent-purple/50 transition-all duration-300 relative overflow-hidden group`}>
                    {exp.current && (
                      <div className="absolute top-0 right-0 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border-l border-b border-green-500/20">
                        Now
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent-purple/10 rounded-lg text-accent-purple">
                          {exp.type === 'work' ? <Briefcase size={20} /> : <Users size={20} />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors">{exp.company}</h3>
                          <p className="text-sm text-text-tertiary">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-xs text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.work.map((item, idx) => (
                        <li key={idx} className="text-sm text-text-secondary leading-relaxed flex items-start space-x-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-purple/40 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] font-mono text-text-tertiary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Side (Desktop) */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
