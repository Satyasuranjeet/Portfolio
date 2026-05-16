import React from 'react';
import { motion } from 'motion/react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { Trophy, Code2, Star, GitFork, Activity } from 'lucide-react';
import CountUp from 'react-countup';

export default function GitHubStats() {
  const { repos, loading } = useGitHubRepos('Satyasuranjeet');

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  const languages = Array.from(new Set(repos.map(r => r.language).filter(Boolean)));
  
  // Calculate language distribution (simplified)
  const langCounts: Record<string, number> = {};
  repos.forEach(repo => {
    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
    }
  });
  const topLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const stats = [
    { label: 'Total Stars', value: totalStars, icon: <Star className="text-yellow-500" /> },
    { label: 'Total Forks', value: totalForks, icon: <GitFork className="text-accent-cyan" /> },
    { label: 'Total Repos', value: 132, icon: <Code2 className="text-accent-purple" /> },
    { label: 'Followers', value: 37, icon: <Activity className="text-accent-coral" /> },
  ];

  return (
    <section className="py-32 bg-bg-primary relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,245,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-heading font-extrabold mb-2">By the <span className="text-accent-cyan">Numbers</span></h2>
            <p className="text-text-secondary">Quantifying the impact of 132+ open-source contributions.</p>
          </div>
          <div className="flex items-center space-x-2 bg-accent-amber/10 border border-accent-amber/20 px-4 py-2 rounded-xl text-accent-amber font-mono text-sm">
            <Trophy size={16} />
            <span>GitHub Achievements: Quickdraw, Starstruck, YOLO...</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card text-center flex flex-col items-center space-y-4"
            >
              <div className="p-3 bg-white/5 rounded-full">{stat.icon}</div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  {loading ? '...' : <CountUp end={stat.value} duration={2} enableScrollSpy />}
                </div>
                <div className="text-[10px] text-text-tertiary uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Language & Contribution Chart Visual Simulation */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-card"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Code2 size={20} className="text-accent-cyan" />
              <span>Language Distribution</span>
            </h3>
            <div className="space-y-4">
              {topLangs.map(([lang, count], i) => (
                <div key={lang} className="space-y-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">{lang}</span>
                    <span className="text-text-tertiary">{(count / repos.length * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(count / repos.length * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                      className="h-full bg-accent-cyan shadow-glow-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-card overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Activity size={20} className="text-accent-coral" />
              <span>GitHub Contribution Flow</span>
            </h3>
            <div className="flex items-end gap-1 h-32">
               {/* Simplified Contribution Simulation */}
               {Array.from({ length: 40 }).map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ height: 0 }}
                   whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.02, duration: 0.5 }}
                   className="flex-1 bg-white/5 rounded-t-sm group relative"
                 >
                   <div className="absolute inset-0 bg-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </motion.div>
               ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-text-tertiary font-mono">
              <span>JAN</span>
              <span>MAR</span>
              <span>JUN</span>
              <span>OCT</span>
              <span>DEC</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
