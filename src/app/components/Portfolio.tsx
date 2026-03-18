"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BrandMonogram } from "./BrandMonogram";
import {
  Award,
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Star,
  Sun,
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
import { useTheme } from "next-themes";
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
  { name: "CSS", icon: FaCss3Alt, toneClass: "skill-tone-css" },
  { name: "TypeScript", icon: SiTypescript, toneClass: "skill-tone-typescript" },
  { name: "React", icon: FaReact, toneClass: "skill-tone-react" },
  { name: "Next.js", icon: SiNextdotjs, toneClass: "skill-tone-nextjs" },
  { name: "Tailwind CSS", icon: SiTailwindcss, toneClass: "skill-tone-tailwind" },
  { name: "Node.js", icon: FaNodeJs, toneClass: "skill-tone-nodejs" },
  { name: "Git", icon: FaGitAlt, toneClass: "skill-tone-git" },
  { name: "Python", icon: FaPython, toneClass: "skill-tone-python" },
  { name: "Java", icon: FaJava, toneClass: "skill-tone-java" },
  { name: "MongoDB", icon: SiMongodb, toneClass: "skill-tone-mongodb" },
  { name: "Postman", icon: SiPostman, toneClass: "skill-tone-postman" },
  { name: "AWS Cloud", icon: FaAws, toneClass: "skill-tone-aws" },
  { name: "DevSecOps", icon: Award, toneClass: "skill-tone-devsecops" },
  { name: "LLM Integration", icon: Sparkles, toneClass: "skill-tone-llm" },
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
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="portfolio-shell">
      <div className="portfolio-grid-bg"></div>

      <div className="portfolio-overlay">
        <div className="portfolio-glow-left"></div>
        <div className="portfolio-glow-right"></div>
        <div className="portfolio-ambient-panel"></div>
        <div className="portfolio-ambient-arc"></div>
        <div className="portfolio-ambient-pulse"></div>
        <div className="portfolio-glow-core"></div>
        <div className="portfolio-glow-beam"></div>
        <div className="portfolio-glow-orbit"></div>
      </div>

      <div className="relative z-10">
        <nav className="nav-shell">
          <div className="content-shell">
            <div className="nav-row">
              <div className="brand-stack">
                <div className="brand-mark">
                  <BrandMonogram className="h-[22px] w-[22px]" />
                </div>
                <span className="brand-copy">Oskar Ortiz</span>
              </div>

              <div className="nav-tools">
                <div className="desktop-nav">
                  {navigationItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                      {item}
                    </a>
                  ))}
                </div>

                <button
                  type="button"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="theme-toggle"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                  {isDark ? (
                    <Sun className="theme-toggle-icon" />
                  ) : (
                    <Moon className="theme-toggle-icon" />
                  )}
                </button>
              </div>

              <div className="mobile-tools">
                <button
                  type="button"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="theme-toggle"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                  {isDark ? (
                    <Sun className="theme-toggle-icon" />
                  ) : (
                    <Moon className="theme-toggle-icon" />
                  )}
                </button>

                <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
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
                  <span className="status-indicator">
                    <span className="status-indicator-ping"></span>
                    <span className="status-indicator-core"></span>
                  </span>
                  <span className="status-label">Available for work</span>
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-first">Oskar Julian</span>
                  <span className="hero-title-last">Ortiz Ortiz</span>
                </h1>

                <p className="hero-role">Full Stack Developer</p>

                <div className="hero-location">
                  <MapPin size={18} />
                  <span className="hero-location-copy">Pasto, Narino, Colombia</span>
                </div>

                <p className="hero-copy hero-copy-lead">
                  An extroverted and sociable person who enjoys collaborating and maintaining a
                  positive work environment. Passionate about building modern web applications and
                  continuously learning new technologies.
                </p>

                <div className="hero-actions">
                  <button className="hero-primary-action group">
                    <Download size={18} />
                    Download CV
                  </button>
                  <a href="#projects" className="hero-secondary-action">
                    View Projects
                  </a>
                  <a href="#contact" className="hero-secondary-action">
                    Contact
                  </a>
                </div>
              </div>

              <div className="hero-portrait">
                <div className="hero-portrait-halo"></div>
                <div className="hero-portrait-panel"></div>
                <div className="hero-portrait-gridplate"></div>
                <div className="hero-portrait-rings"></div>
                <div className="hero-portrait-spark hero-portrait-spark-primary"></div>
                <div className="hero-portrait-spark hero-portrait-spark-secondary"></div>
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
              <div className="about-card">
                <div className="about-orb-start"></div>
                <div className="about-orb-end"></div>
                <div className="about-body">
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

            <div className="skills-grid">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;

                return (
                  <div key={tech.name} className="skill-card group">
                    <div className="skill-body">
                      <div className={`skill-icon-frame ${tech.toneClass}`}>
                        <IconComponent className="h-full w-full text-white" />
                      </div>
                      <h3 className="skill-name">{tech.name}</h3>
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

            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.title} className="project-card group">
                  <div className="project-image-frame">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay"></div>
                  </div>

                  <div className="project-panel">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-copy">{project.description}</p>

                    <div className="project-chips">
                      {project.tech.map((tech) => (
                        <span key={tech} className="project-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <button className="action-button-secondary project-action">
                        <Github size={16} />
                        GitHub
                      </button>
                      <button className="action-button-primary project-action">
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

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="testimonial-card">
                  <div className="testimonial-head">
                    <div className="avatar-badge">
                      <User size={24} className="icon-white" />
                    </div>
                    <div className="testimonial-copy-block">
                      <h3 className="testimonial-meta">{testimonial.name}</h3>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="testimonial-copy">"{testimonial.comment}"</p>

                  <div className="testimonial-stars">
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

            <div className="experience-list">
              {experience.map((item, index) => (
                <div key={item.year} className="experience-item">
                  <div className="experience-rail">
                    <div className="avatar-badge">
                      <Briefcase size={20} className="icon-white" />
                    </div>
                    {index < experience.length - 1 && <div className="timeline-line"></div>}
                  </div>

                  <div className="experience-panel-wrap">
                    <div className="experience-panel">
                      <div className="experience-meta">
                        <Calendar size={16} />
                        <span className="experience-year">{item.year}</span>
                      </div>
                      <h3 className="experience-title">{item.title}</h3>
                      <p className="experience-copy">{item.description}</p>
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

            <div className="contact-grid">
              <div className="contact-panel">
                <form className="contact-form">
                  <div className="contact-field">
                    <label className="contact-label">Name</label>
                    <input type="text" className="contact-input" placeholder="Your name" />
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Email</label>
                    <input type="email" className="contact-input" placeholder="your@email.com" />
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">Message</label>
                    <textarea
                      className="contact-input resize-none"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>

                  <button type="submit" className="contact-submit">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-stack">
                <div className="contact-card">
                  <div className="contact-row">
                    <div className="contact-icon-box">
                      <Mail size={20} className="icon-white" />
                    </div>
                    <div className="contact-copy">
                      <h3 className="contact-title">Email</h3>
                      <a href="mailto:oskarortiz124@gmail.com" className="contact-link">
                        oskarortiz124@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-row">
                    <div className="contact-icon-box">
                      <Phone size={20} className="icon-white" />
                    </div>
                    <div className="contact-copy">
                      <h3 className="contact-title">Phone</h3>
                      <a href="tel:+573225959974" className="contact-link">
                        +57 3225959974
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-row">
                    <div className="contact-icon-box">
                      <MapPin size={20} className="icon-white" />
                    </div>
                    <div className="contact-copy">
                      <h3 className="contact-title">Location</h3>
                      <p className="contact-text">Pasto, Narino, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-shell">
          <div className="content-shell">
            <div className="footer-row">
              <div className="footer-copy">
                <h3 className="footer-name">Oskar Julian Ortiz Ortiz</h3>
                <p className="footer-role">Full Stack Developer</p>
              </div>

              <div className="footer-socials">
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

            <div className="footer-legal">
              <p className="footer-legal-copy">(c) 2026 Oskar Ortiz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
