import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-heading font-extrabold text-white mb-2">
              <span className="text-accent-cyan">S</span>SJ
            </div>
            <p className="text-sm text-text-tertiary">
              Specialist Programmer @ Infosys
            </p>
          </div>

          <div className="flex items-center space-x-1 text-sm text-text-tertiary">
            <span>Built with React &</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <Heart size={14} className="text-accent-coral fill-accent-coral" />
            </motion.div>
            <span>by Satya Suranjeet Jena © 2026</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card bg-white/5 hover:bg-white/10 text-accent-cyan group"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
