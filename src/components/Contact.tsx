import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, Instagram } from 'lucide-react';

const socials = [
  { icon: <Mail />, label: 'Email', value: 'satyajena911sj@gmail.com', href: 'mailto:satyajena911sj@gmail.com' },
  { icon: <Linkedin />, label: 'LinkedIn', value: 'in/satyasuranjeet', href: 'https://linkedin.com/in/satyasuranjeet' },
  { icon: <Github />, label: 'GitHub', value: 'Satyasuranjeet', href: 'https://github.com/Satyasuranjeet' },
  { icon: <Twitter />, label: 'X (Twitter)', value: '@satyasurnjeet', href: 'https://twitter.com/satyasurnjeet' },
  { icon: <Instagram />, label: 'Instagram', value: '@satyasuranjeet', href: 'https://instagram.com/satyasuranjeet' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
                Let's Build <br />
                <span className="text-accent-cyan">Together</span>
              </h2>
              <p className="text-text-secondary text-lg">
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, I'll try 
                my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 glass-card bg-bg-secondary/40 border-accent-cyan/10">
                <div className="p-3 bg-accent-cyan/10 text-accent-cyan rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-text-tertiary uppercase tracking-widest">Location</div>
                  <div className="text-white font-medium">Hyderabad, Telangana, India</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 glass-card bg-bg-secondary/40 border-green-500/10">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl relative">
                   <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                   <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
                  <Send size={24} />
                </div>
                <div>
                  <div className="text-xs text-text-tertiary uppercase tracking-widest">Availability</div>
                  <div className="text-white font-medium">Open to opportunities</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card hover:border-accent-cyan/30 group transition-all"
                >
                  <div className="text-text-secondary group-hover:text-accent-cyan transition-colors mb-2">
                    {social.icon}
                  </div>
                  <div className="text-[10px] text-text-tertiary uppercase tracking-widest">{social.label}</div>
                  <div className="text-xs text-white truncate max-w-full font-mono">{social.value}</div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 glass-card bg-bg-secondary/60 relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-tertiary uppercase">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan/50 text-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-tertiary uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan/50 text-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-text-tertiary uppercase">Subject</label>
                <input 
                  type="text" 
                  placeholder="Collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan/50 text-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-text-tertiary uppercase">Message</label>
                <textarea 
                  rows={4}
                  placeholder="I'd love to work with you on..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan/50 text-white transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-accent-cyan text-bg-primary font-bold rounded-lg flex items-center justify-center space-x-2 shadow-glow-cyan hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
