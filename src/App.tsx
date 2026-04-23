/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  ChevronRight,
  Menu,
  X,
  Terminal
} from 'lucide-react';

const projects = [
  {
    title: "EcoSphere AI",
    description: "A sustainable energy monitoring dashboard with real-time analytics.",
    tags: ["Next.js", "TypeScript", "Tailwind", "D3.js"],
    image: "https://picsum.photos/seed/eco/600/400",
    link: "#"
  },
  {
    title: "Nexus Chat",
    description: "End-to-end encrypted messaging platform with collaborative workspaces.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    image: "https://picsum.photos/seed/nexus/600/400",
    link: "#"
  },
  {
    title: "Quantum UI",
    description: "A high-performance component library built for modern web applications.",
    tags: ["TypeScript", "Storybook", "Framer Motion"],
    image: "https://picsum.photos/seed/quantum/600/400",
    link: "#"
  }
];

const skills = [
  { name: "Frontend", icon: <Globe className="w-5 h-5" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: <Cpu className="w-5 h-5" />, items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
  { name: "Tools", icon: <Terminal className="w-5 h-5" />, items: ["Git", "Docker", "AWS", "Vercel"] },
  { name: "Design", icon: <Layers className="w-5 h-5" />, items: ["Figma", "Motion", "UI/UX", "Responsive"] }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-xl tracking-tighter"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span>Web & App Developer<span className="text-indigo-500">Flow</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="glass px-5 py-2 rounded-full text-sm font-semibold glass-hover">
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden glass pt-24 px-6"
          >
            <div className="flex flex-col gap-6 text-center">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-white/80">Available for new projects</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Building digital <br />
                <span className="text-gradient">experiences</span> that matter to you.
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
                I'm a Full Stack Developer specializing in building exceptional digital experiences. 
                Currently focused on creating accessible, human-centered products at the intersection of Design & Code.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 group">
                  View Projects
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="glass px-8 py-4 rounded-2xl font-bold glass-hover">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
                <p className="text-white/60 max-w-md">A comprehensive set of tools and technologies I use to bring ideas to life.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl glass-hover"
                >
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-white/60 max-w-2xl mx-auto">A selection of my recent projects, ranging from web applications to creative experiments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative glass rounded-3xl overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold group/link">
                      View Project 
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass p-12 md:p-20 rounded-[40px] relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <br /> <span className="text-gradient">extraordinary</span>.</h2>
                  <p className="text-white/60 text-lg mb-8 max-w-md">
                    Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
                  </p>
                  <div className="flex gap-4">
                    {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-12 h-12 glass rounded-2xl flex items-center justify-center glass-hover text-white/70 hover:text-white"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/50">Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/50">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/50">Message</label>
                      <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your project..." />
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              {/* Decorative background for contact card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] -z-10" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold tracking-tighter opacity-50">
            <Code2 className="w-5 h-5" />
            <span>DEVFLOW © 2024</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
