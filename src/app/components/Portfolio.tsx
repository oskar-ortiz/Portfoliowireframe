"use client";

import { Menu, X, Github, Linkedin, Instagram, Mail, Phone, MapPin, Download, ExternalLink, Calendar, User, Briefcase, Code2, Sparkles, Star, Award } from 'lucide-react';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaAws, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostman } from 'react-icons/si';
const profilePhoto = 'https://via.placeholder.com/400';

export function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const technologies = [
    { name: 'CSS', icon: FaCss3Alt, color: 'from-[#1572B6] to-[#33A9DC]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-[#3178C6] to-[#235A97]' },
    { name: 'React', icon: FaReact, color: 'from-[#61DAFB] to-[#00D8FF]' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-zinc-800 to-zinc-950' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-[#06B6D4] to-[#0891B2]' },
    { name: 'Node.js', icon: FaNodeJs, color: 'from-[#339933] to-[#66BB6A]' },
    { name: 'Git', icon: FaGitAlt, color: 'from-[#F05032] to-[#DE4C36]' },
    { name: 'Python', icon: FaPython, color: 'from-[#3776AB] to-[#FFD43B]' },
    { name: 'Java', icon: FaJava, color: 'from-[#007396] to-[#EA2D2E]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-[#47A248] to-[#4DB33D]' },
    { name: 'Postman', icon: SiPostman, color: 'from-[#FF6C37] to-[#FF8552]' },
    { name: 'AWS Cloud', icon: FaAws, color: 'from-[#FF9900] to-[#EC7211]' },
    { name: 'DevSecOps', icon: Award, color: 'from-violet-600 to-fuchsia-600' },
    { name: 'LLM Integration', icon: Sparkles, color: 'from-purple-600 to-pink-600' },
  ];

  const projects = [
    {
      title: 'KickLite Streaming Platform',
      description: 'A streaming platform inspired by Kick where users can watch and interact with live streams.',
      image: 'https://images.unsplash.com/photo-1762340275704-020e669014e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM2OTM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Node.js', 'WebRTC'],
    },
    {
      title: 'Food Delivery Web App',
      description: 'A modern food delivery platform where users can browse restaurants and order food online.',
      image: 'https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzczNjUyNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['Next.js', 'MongoDB', 'Tailwind'],
    },
    {
      title: 'Music Player Web Application',
      description: 'A responsive music player with playlists, playback controls, and audio visualization.',
      image: 'https://images.unsplash.com/photo-1762222687051-4c9926eba36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM3MjAxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Web Audio API', 'CSS'],
    },
    {
      title: 'Mathematics and Graph Visualization Platform',
      description: 'A web application for solving mathematical problems and visualizing graphs in 3D and 4D.',
      image: 'https://images.unsplash.com/photo-1717501217912-933d2792d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMDNkJTIwZ3JhcGglMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzcyMDEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['Python', 'Three.js', 'TypeScript'],
    },
    {
      title: 'Smart Clock with Calendar',
      description: 'A digital clock application with calendar integration and time-based utilities.',
      image: 'https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2xvY2slMjBjYWxlbmRhciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM3MjAxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  const testimonials = [
    {
      name: 'Maria González',
      role: 'Product Manager',
      comment: 'Oskar is an exceptional developer with great attention to detail. His work ethic is outstanding.',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Senior Developer',
      comment: 'Working with Oskar was a pleasure. He brings creativity and technical excellence to every project.',
    },
    {
      name: 'Ana Martínez',
      role: 'UX Designer',
      comment: 'Oskar has excellent collaboration skills and always delivers high-quality, pixel-perfect implementations.',
    },
  ];

  const experience = [
    {
      year: '2024 – Present',
      title: 'Software Engineering Student',
      description: 'Currently pursuing software engineering degree, focusing on modern web development and software architecture.',
    },
    {
      year: '2023',
      title: 'Web Development Course',
      description: 'Completed comprehensive web development training covering full-stack technologies and best practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] pointer-events-none"></div>
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <Code2 size={18} className="text-white" />
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Oskar Ortiz
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {['About', 'Skills', 'Projects', 'Testimonials', 'Experience', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-white/[0.06]">
                <div className="flex flex-col space-y-1">
                  {['About', 'Skills', 'Projects', 'Testimonials', 'Experience', 'Contact'].map((item) => (
                    <a 
                      key={item}
                      href={`#${item.toLowerCase()}`} 
                      className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors rounded-lg" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="relative pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full mb-6 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-zinc-400">Available for work</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  <span className="block text-white mb-2">Oskar Julian</span>
                  <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    Ortiz Ortiz
                  </span>
                </h1>
                
                <p className="text-2xl lg:text-3xl font-medium text-zinc-400 mb-4">
                  Full Stack Developer
                </p>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-zinc-500 mb-8">
                  <MapPin size={18} />
                  <span className="text-sm">Pasto, Nariño, Colombia</span>
                </div>
                
                <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                  An extroverted and sociable person who enjoys collaborating and maintaining a positive work environment. 
                  Passionate about building modern web applications and continuously learning new technologies.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all shadow-lg shadow-white/10 hover:shadow-white/20">
                    <Download size={18} />
                    Download CV
                  </button>
                  <a 
                    href="#projects" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/[0.06] text-white rounded-lg font-medium hover:bg-white/[0.06] transition-all"
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/[0.06] text-white rounded-lg font-medium hover:bg-white/[0.06] transition-all"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 rounded-full opacity-75 blur-2xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={profilePhoto} 
                      alt="Oskar Ortiz - Profile Photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative p-8 lg:p-12 bg-white/[0.02] border border-white/[0.06] rounded-2xl backdrop-blur-sm hover:bg-white/[0.03] hover:border-white/[0.08] transition-all">
                <div className="absolute top-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                    Oskar is an extroverted and sociable person who enjoys collaborating and maintaining a positive work environment. 
                    In his free time he enjoys walking, playing football, listening to music, and he is also a professional musician.
                  </p>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    He is passionate about building modern web applications and continuously learning new technologies to stay at 
                    the forefront of software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Skills & Technologies
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={tech.name}
                    className="group relative p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tech.color} p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <h3 className="font-medium text-sm text-zinc-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-zinc-900/50">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-zinc-400 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] text-white text-sm font-medium rounded-lg hover:bg-white/[0.06] transition-all">
                        <Github size={16} />
                        GitHub
                      </button>
                      <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-all shadow-lg shadow-white/10">
                        <ExternalLink size={16} />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Testimonials
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="relative p-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-zinc-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Academic & Work Experience
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    {index < experience.length - 1 && (
                      <div className="w-[2px] h-full bg-gradient-to-b from-violet-500/50 to-fuchsia-500/50 mt-2 rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
                      <div className="flex items-center gap-2 text-violet-400 mb-3">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.year}</span>
                      </div>
                      <h3 className="font-semibold text-xl text-white mb-3">
                        {exp.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8 lg:p-10 bg-white/[0.02] border border-white/[0.06] rounded-2xl backdrop-blur-sm">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all shadow-lg shadow-white/10"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Email</h3>
                      <a href="mailto:oskarortiz124@gmail.com" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">
                        oskarortiz124@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Phone</h3>
                      <a href="tel:+573225959974" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">
                        +57 3225959974
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Location</h3>
                      <p className="text-sm text-zinc-500">Pasto, Nariño, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-lg text-white mb-1">
                  Oskar Julian Ortiz Ortiz
                </h3>
                <p className="text-sm text-zinc-500">Full Stack Developer</p>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://github.com/oskar-ortiz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/[0.03] border border-white/[0.06] rounded-lg flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.1] transition-all"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/oskar-ortiz-4862233b8/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/[0.03] border border-white/[0.06] rounded-lg flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.1] transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/oskar_ortiz02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/[0.03] border border-white/[0.06] rounded-lg flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.1] transition-all"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/[0.06] mt-8 pt-8 text-center">
              <p className="text-sm text-zinc-600">
                © 2026 Oskar Ortiz. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
