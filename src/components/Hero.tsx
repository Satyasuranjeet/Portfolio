import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00d9f5';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Starfield />
      
      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 px-5 py-2 glass-card bg-accent-cyan/5 border-accent-cyan/20 rounded-full text-accent-cyan text-xs font-mono uppercase tracking-[0.3em] backdrop-blur-md"
          >
            Specialist Programmer @ Infosys
          </motion.div>

          <div className="relative mb-12 w-full max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-[2px] bg-accent-cyan" />
              <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest">Digital Architect</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tighter uppercase mb-4 select-none leading-tight"
            >
              Satya Suranjeet <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Jena</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-[1px] w-full bg-gradient-to-r from-white/20 via-white/40 to-transparent origin-left"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl font-display font-medium text-text-secondary h-8 flex items-center justify-center mb-12"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 2000,
                'Flutter Engineer', 2000,
                'AI/ML Enthusiast', 2000,
                'Cloud Architect', 2000,
                'Open Source Builder', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex -space-x-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-bg-primary bg-bg-secondary flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-bg-primary bg-accent-cyan text-bg-primary flex items-center justify-center font-bold text-xs">
                 132+
               </div>
            </div>
            <div className="text-left">
               <div className="text-white font-bold leading-tight">132+ Projects Shipped</div>
               <div className="text-text-tertiary text-xs font-mono">Exploring AI/ML & Cloud Solutions</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-5 mt-16"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-white text-bg-primary font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95">
               <span className="relative z-10">VIEW MY WORK</span>
               <div className="absolute inset-0 bg-accent-cyan transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-white/10 hover:border-accent-cyan text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm">
               LET'S CHAT
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <ChevronDown className="text-accent-cyan" />
      </motion.div>
    </section>
  );
}
