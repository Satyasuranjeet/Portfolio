import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillGroups } from '../data/skills';
import { SiReact, SiNextdotjs, SiFlutter, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiMongodb, SiTensorflow, SiPytorch, SiOpenai, SiDocker, SiJenkins, SiGithubactions, SiLinux, SiGooglecloud, SiAnthropic, SiFastapi, SiGo, SiRedis } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Cloud, Database, Bot, BrainCircuit, Network } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'React.js': <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Flutter': <SiFlutter />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'Tailwind CSS': <SiTailwindcss />,
  'Node.js': <SiNodedotjs />,
  'Express.js': <SiExpress />,
  'Python': <SiPython />,
  'Java': <FaJava />,
  'FastAPI': <SiFastapi />,
  'Go': <SiGo />,
  'PostgreSQL': <SiPostgresql />,
  'MongoDB': <SiMongodb />,
  'Redis': <SiRedis />,
  'RAG': <BrainCircuit />,
  'LangChain': <Network />,
  'LlamaIndex': <Network />,
  'Vector DBs': <Database />,
  'Pinecone': <Database />,
  'TensorFlow': <SiTensorflow />,
  'PyTorch': <SiPytorch />,
  'OpenAI GPT': <SiOpenai />,
  'Amazon Q': <Bot />,
  'Claude': <SiAnthropic />,
  'Gemini AI': <Bot />,
  'Docker': <SiDocker />,
  'Jenkins': <SiJenkins />,
  'GitHub Actions': <SiGithubactions />,
  'Linux': <SiLinux />,
  'AWS (EC2, S3, IAM)': <Cloud />,
  'GCP': <SiGooglecloud />,
  'Azure': <Cloud />,
  'Database': <Database />,
  'AI': <Bot />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillGroups[0].category);

  return (
    <section id="skills" className="py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
          >
            My Tech <span className="text-accent-cyan">Arsenal</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillGroups.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(group.category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === group.category
                  ? 'bg-accent-cyan text-bg-primary shadow-glow-cyan'
                  : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {skillGroups.find(g => g.category === activeTab)?.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 glass-card group hover:border-accent-cyan/50 hover:shadow-glow-cyan transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="text-4xl text-text-secondary group-hover:text-accent-cyan transition-colors">
                    {iconMap[skill.name] || <SiJavascript />}
                  </div>
                  <span className="text-sm font-display font-medium text-text-primary group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
