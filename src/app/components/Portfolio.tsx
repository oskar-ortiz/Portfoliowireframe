"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  Briefcase,
  Calendar,
  Code2,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";
import {
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import profilePhoto from "../../assets/dd46f9bf116f2c66285468845d839373c782ceec.png";

const navigationItems = [
  "About",
  "Skills",
  "Projects",
  "Testimonials",
  "Experience",
  "Contact",
];

const technologies = [
  { name: "CSS", icon: FaCss3Alt, color: "from-[#1572B6] to-[#33A9DC]" },
  { name: "TypeScript", icon: SiTypescript, color: "from-[#3178C6] to-[#235A97]" },
  { name: "React", icon: FaReact, color: "from-[#61DAFB] to-[#00D8FF]" },
  { name: "Next.js", icon: SiNextdotjs, color: "from-zinc-800 to-zinc-950" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-[#06B6D4] to-[#0891B2]" },
  { name: "Node.js", icon: FaNodeJs, color: "from-[#339933] to-[#66BB6A]" },
  { name: "Git", icon: FaGitAlt, color: "from-[#F05032] to-[#DE4C36]" },
  { name: "Python", icon: FaPython, color: "from-[#3776AB] to-[#FFD43B]" },
  { name: "Java", icon: FaJava, color: "from-[#007396] to-[#EA2D2E]" },
  { name: "MongoDB", icon: SiMongodb, color: "from-[#47A248] to-[#4DB33D]" },
  { name: "Postman", icon: SiPostman, color: "from-[#FF6C37] to-[#FF8552]" },
  { name: "AWS Cloud", icon: FaAws, color: "from-[#FF9900] to-[#EC7211]" },
  { name: "DevSecOps", icon: Award, color: "from-violet-600 to-fuchsia-600" },
  { name: "LLM Integration", icon: Sparkles, color: "from-purple-600 to-pink-600" },
];

const projects = [
  {
    title: "KickLite Streaming Platform",
    description:
      "A streaming platform inspired by Kick where users can watch and interact with live streams.",
    image:
      "https://images.unsplash.com/photo-1762340275704-020e669014e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM2OTM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Node.js", "WebRTC"],
  },
  {
    title: "Food Delivery Web App",
    description:
      "A modern food delivery platform where users can browse restaurants and order food online.",
    image:
      "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzczNjUyNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Music Player Web Application",
    description:
      "A responsive music player with playlists, playback controls, and audio visualization.",
    image:
      "https://images.unsplash.com/photo-1762222687051-4c9926eba36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM3MjAxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Web Audio API", "CSS"],
  },
  {
    title: "Mathematics and Graph Visualization Platform",
    description:
      "A web application for solving mathematical problems and visualizing graphs in 3D and 4D.",
    image:
      "https://images.unsplash.com/photo-1717501217912-933d2792d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMDNkJTIwZ3JhcGglMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzcyMDEzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Python", "Three.js", "TypeScript"],
  },
  {
    title: "Smart Clock with Calendar",
    description:
      "A digital clock application with calendar integration and time-based utilities.",
    image:
      "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2xvY2slMjBjYWxlbmRhciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM3MjAxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Product Manager",
    comment:
      "Oskar is an exceptional developer with great attention to detail. His work ethic is outstanding.",
  },
  {
    name: "Carlos Rodriguez",
    role: "Senior Developer",
    comment:
      "Working with Oskar was a pleasure. He brings creativity and technical excellence to every project.",
  },
  {
    name: "Ana Martinez",
    role: "UX Designer",
    comment:
      "Oskar has excellent collaboration skills and always delivers high-quality, pixel-perfect implementations.",
  },
];

const experience = [
  {
    year: "2024 - Present",
    title: "Software Engineering Student",
    description:
      "Currently pursuing software engineering degree, focusing on modern web development and software architecture.",
  },
  {
    year: "2023",
    title: "Web Development Course",
    description:
      "Completed comprehensive web development training covering full-stack technologies and best practices.",
  },
];

export function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="portfolio-shell">
      <div className="portfolio-grid-bg"></div>

      <div className="portfolio-overlay">
        <div className="portfolio-glow-left"></div>
        <div className="portfolio-glow-right"></div>
      </div>

      <div className="relative z-10">
        <nav className="nav-shell">
          <div className="content-shell">
            <div className="nav-row">
              <div className="brand-stack">
                <div className="brand-mark">
                  <Code2 size={18} className="text-white" />
                </div>
                <span className="brand-copy">Oskar Ortiz</span>
              </div>

              <div className="hidden items-center gap-1 md:flex">
                {navigationItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                ))}
              </div>

              <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="mobile-nav-panel">
                <div className="mobile-nav-list">
                  {navigationItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="mobile-nav-link"
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

        <section id="about" className="hero-section">
          <div className="content-shell">
            <div className="hero-layout">
              <div className="hero-copy-column">
                <div className="status-pill">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-zinc-400">Available for work</span>
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-first">Oskar Julian</span>
                  <span className="hero-title-last">Ortiz Ortiz</span>
                </h1>

                <p className="hero-role">Full Stack Developer</p>

                <div className="hero-location">
                  <MapPin size={18} />
                  <span className="text-sm">Pasto, Narino, Colombia</span>
                </div>

                <p className="hero-copy mb-10">
                  An extroverted and sociable person who enjoys collaborating and maintaining a
                  positive work environment. Passionate about building modern web applications and
                  continuously learning new technologies.
                </p>

                <div className="hero-actions">
                  <button className="btn-primary group">
                    <Download size={18} />
                    Download CV
                  </button>
                  <a href="#projects" className="btn-secondary">
                    View Projects
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Contact
                  </a>
                </div>
              </div>

              <div className="hero-portrait">
                <div className="hero-portrait-halo"></div>
                <div className="hero-portrait-shell">
                  <div className="hero-portrait-aura"></div>
                  <div className="hero-portrait-frame">
                    <Image
                      src={profilePhoto}
                      alt="Oskar Ortiz - Profile Photo"
                      fill
                      priority
                      sizes="(min-width: 1024px) 400px, 288px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <div className="section-divider"></div>
            </div>

            <div className="section-solo-card">
              <div className="glass-card relative p-8 backdrop-blur-sm lg:p-12">
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
                <div className="relative">
                  <p className="hero-copy mb-6">
                    Oskar is an extroverted and sociable person who enjoys collaborating and
                    maintaining a positive work environment. In his free time he enjoys walking,
                    playing football, listening to music, and he is also a professional musician.
                  </p>
                  <p className="hero-copy">
                    He is passionate about building modern web applications and continuously
                    learning new technologies to stay at the forefront of software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Skills & Technologies</h2>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;

                return (
                  <div key={tech.name} className="skill-card group">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className={`skill-icon-frame bg-gradient-to-br ${tech.color}`}>
                        <IconComponent className="h-full w-full text-white" />
                      </div>
                      <h3 className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {projects.map((project) => (
                <div key={project.title} className="project-card group">
                  <div className="project-image-frame">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-violet-300">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="project-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="action-button-secondary flex-1">
                        <Github size={16} />
                        GitHub
                      </button>
                      <button className="action-button-primary flex-1">
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

        <section id="testimonials" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Testimonials</h2>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="glass-card relative p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="avatar-badge">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-zinc-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="leading-relaxed text-zinc-400 italic">"{testimonial.comment}"</p>

                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={14} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Academic & Work Experience</h2>
              <div className="section-divider"></div>
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
              {experience.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="avatar-badge">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    {index < experience.length - 1 && <div className="timeline-line"></div>}
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="glass-card p-6">
                      <div className="mb-3 flex items-center gap-2 text-violet-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{item.year}</span>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="leading-relaxed text-zinc-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="glass-card p-8 backdrop-blur-sm lg:p-10">
                <form className="space-y-6">
                  <div>
                    <label className="contact-label">Name</label>
                    <input type="text" className="contact-input" placeholder="Your name" />
                  </div>

                  <div>
                    <label className="contact-label">Email</label>
                    <input type="email" className="contact-input" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="contact-label">Message</label>
                    <textarea
                      className="contact-input resize-none"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="contact-icon-box">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-white">Email</h3>
                      <a href="mailto:oskarortiz124@gmail.com" className="contact-link">
                        oskarortiz124@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="contact-icon-box">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-white">Phone</h3>
                      <a href="tel:+573225959974" className="contact-link">
                        +57 3225959974
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="contact-icon-box">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-white">Location</h3>
                      <p className="text-sm text-zinc-500">Pasto, Narino, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/[0.06] py-12">
          <div className="content-shell">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="mb-1 text-lg font-semibold text-white">Oskar Julian Ortiz Ortiz</h3>
                <p className="text-sm text-zinc-500">Full Stack Developer</p>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/oskar-ortiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oskar-ortiz-4862233b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/oskar_ortiz02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-8 text-center">
              <p className="text-sm text-zinc-600">(c) 2026 Oskar Ortiz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
