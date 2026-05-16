import React from 'react';
import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { ShieldCheck, Code2, Globe } from 'lucide-react';

const stats = [
  { label: 'GitHub Repos', value: 132, suffix: '+' },
  { label: 'Years Exp', value: 2, suffix: '+' },
  { label: 'Companies Worked', value: 4, suffix: '' },
];

const achievements = [
  'Institute Winner - Solving For India Hackathon',
  'Pair Extraordinaire',
  'Pull Shark ×2',
  'Starstruck',
  'YOLO'
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <div className="relative z-10 text-center p-8">
                <Code2 size={120} className="text-accent-cyan mx-auto mb-6 opacity-80" />
                <div className="space-y-2">
                  <div className="h-1 w-20 bg-accent-cyan mx-auto rounded-full" />
                  <div className="h-1 w-32 bg-accent-purple mx-auto rounded-full" />
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-10 p-4 glass-card bg-bg-secondary/80 flex items-center space-x-3"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-tighter">BUILDING @ INFOSYS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
                I build things <br />
                <span className="text-accent-cyan">people actually use.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Full-Stack Web & Flutter Developer | AI/ML & Cloud Solutions Enthusiast. 
                Exploring the digital world by building impactful apps and innovative solutions. 
                Based in Hyderabad, I specialize in translating complex ideas into pixel-perfect, 
                high-performance digital products.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass-card text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-white">
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy />
                  </div>
                  <div className="text-[10px] md:text-xs text-text-tertiary uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-text-secondary flex items-center space-x-2"
                >
                  <ShieldCheck size={12} className="text-accent-cyan" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
