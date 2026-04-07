"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { PortfolioHeader } from "./PortfolioHeader";
import {
  ContactField,
  copy,
  DEFAULT_FORM_VALUES,
  experience,
  LOCALE_STORAGE_KEY,
  navigationIds,
  projects,
  testimonials,
  validateForm,
} from "./portfolio-content";
import type { FieldErrors, Locale } from "./portfolio-content";
import {
  Award,
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  User,
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

export function Portfolio() {
  const [locale, setLocale] = useState<Locale>("es");
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [, startLocaleTransition] = useTransition();
  const currentCopy = copy[locale];

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

    if (storedLocale === "es" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const navigationItems = navigationIds.map((id) => ({
    id,
    label: currentCopy.navigation[id],
  }));

  const handleLocaleToggle = () => {
    startLocaleTransition(() => {
      setLocale((currentLocale) => (currentLocale === "es" ? "en" : "es"));
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    const rawValue = event.target.value;
    const value =
      name === "email"
        ? rawValue.replace(/\s+/g, "")
        : rawValue.replace(/^\s+/, "");

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (name !== "honey") {
      setFieldErrors((currentErrors) => {
        if (!(name in currentErrors)) {
          return currentErrors;
        }

        const nextErrors = { ...currentErrors };
        delete nextErrors[name as ContactField];
        return nextErrors;
      });
    }

    if (submitState !== "idle") {
      setSubmitState("idle");
      setSubmitMessage("");
    }
  };

  const handleCvClick = () => {
    toast.info(currentCopy.hero.primaryActionPending);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formValues, locale);

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setSubmitState("error");
      setSubmitMessage(currentCopy.contact.feedbackInvalid);
      toast.error(currentCopy.contact.feedbackInvalid);
      return;
    }

    try {
      setSubmitState("submitting");
      setSubmitMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Contact request failed.");
      }

      setFormValues(DEFAULT_FORM_VALUES);
      setFieldErrors({});
      setSubmitState("success");
      setSubmitMessage(currentCopy.contact.feedbackSuccess);
      toast.success(currentCopy.contact.feedbackSuccess);
    } catch {
      setSubmitState("error");
      setSubmitMessage(currentCopy.contact.feedbackError);
      toast.error(currentCopy.contact.feedbackError);
    }
  };

  return (
    <div className="portfolio-shell">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
      >
        {currentCopy.skipToContent}
      </a>

      <div className="portfolio-grid-bg" aria-hidden="true"></div>

      <div className="portfolio-overlay" aria-hidden="true">
        <div className="portfolio-glow-left"></div>
        <div className="portfolio-glow-right"></div>
        <div className="portfolio-ambient-panel"></div>
        <div className="portfolio-ambient-arc"></div>
        <div className="portfolio-ambient-pulse"></div>
        <div className="portfolio-glow-core"></div>
        <div className="portfolio-glow-beam"></div>
        <div className="portfolio-glow-orbit"></div>
      </div>

      <div className="portfolio-content">
        <PortfolioHeader
          navigationItems={navigationItems}
          localeToggleLabel={currentCopy.navigation.localeToggle}
          menuOpenLabel={currentCopy.navigation.menuOpen}
          menuCloseLabel={currentCopy.navigation.menuClose}
          onToggleLocale={handleLocaleToggle}
          themeLightLabel={currentCopy.navigation.themeLight}
          themeDarkLabel={currentCopy.navigation.themeDark}
        />

        <main id="main-content">
          <section id="about" className="hero-section" aria-labelledby="hero-title">
            <div className="content-shell">
              <div className="hero-layout">
                <div className="hero-copy-column">
                  <div className="status-pill">
                    <span className="status-indicator">
                      <span className="status-indicator-ping"></span>
                      <span className="status-indicator-core"></span>
                    </span>
                    <span className="status-label">{currentCopy.hero.status}</span>
                  </div>

                  <h1 id="hero-title" className="hero-title">
                    <span className="hero-title-first">Oskar Julian</span>
                    <span className="hero-title-last">Ortiz Ortiz</span>
                  </h1>

                  <p className="hero-role">{currentCopy.hero.role}</p>

                  <div className="hero-location">
                    <MapPin className="hero-location-icon" aria-hidden="true" />
                    <span className="hero-location-copy">{currentCopy.hero.location}</span>
                  </div>

                  <p className="hero-copy hero-copy-lead">{currentCopy.hero.intro}</p>

                  <div className="hero-actions">
                    <button
                      type="button"
                      className="hero-primary-action group"
                      aria-label={currentCopy.hero.primaryActionLabel}
                      title={currentCopy.hero.primaryActionLabel}
                      onClick={handleCvClick}
                    >
                      <Download className="hero-action-icon" aria-hidden="true" />
                      {currentCopy.hero.primaryAction}
                    </button>
                    <a href="#projects" className="hero-secondary-action">
                      {currentCopy.hero.projectsAction}
                    </a>
                    <a href="#contact" className="hero-secondary-action">
                      {currentCopy.hero.contactAction}
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
                        alt="Portrait of Oskar Ortiz"
                        fill
                        priority
                        placeholder="blur"
                        fetchPriority="high"
                        decoding="async"
                        sizes="(min-width: 1024px) 400px, 288px"
                        className="hero-portrait-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-wrapper" aria-labelledby="about-me-title">
            <div className="section-container">
              <div className="section-header">
                <h2 id="about-me-title" className="section-title">
                  {currentCopy.sections.about}
                </h2>
                <div className="section-divider"></div>
              </div>

              <div className="section-solo-card">
                <div className="about-card">
                  <div className="about-orb-start"></div>
                  <div className="about-orb-end"></div>
                  <div className="about-body">
                    <p className="hero-copy about-copy-lead">{currentCopy.about.lead}</p>
                    <p className="hero-copy">{currentCopy.about.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section-wrapper" aria-labelledby="skills-title">
            <div className="section-container">
              <div className="section-header">
                <h2 id="skills-title" className="section-title">
                  {currentCopy.sections.skills}
                </h2>
                <div className="section-divider"></div>
              </div>

              <div className="skills-grid">
                {technologies.map((tech) => {
                  const IconComponent = tech.icon;

                  return (
                    <div key={tech.name} className="skill-card group">
                      <div className="skill-body">
                        <div className={`skill-icon-frame ${tech.toneClass}`}>
                          <IconComponent className="skill-icon-glyph" aria-hidden="true" />
                        </div>
                        <h3 className="skill-name">{tech.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="projects" className="section-wrapper" aria-labelledby="projects-title">
            <div className="section-container">
              <div className="section-header">
                <h2 id="projects-title" className="section-title">
                  {currentCopy.sections.projects}
                </h2>
                <div className="section-divider"></div>
              </div>

              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.title.en} className="project-card group">
                    <div className="project-image-frame">
                      <Image
                        src={project.image}
                        alt={`Preview of ${project.title[locale]}`}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                        loading="lazy"
                        decoding="async"
                        className="project-image"
                      />
                      <div className="project-overlay"></div>
                    </div>

                    <div className="project-panel">
                      <h3 className="project-title">{project.title[locale]}</h3>
                      <p className="project-copy">{project.description[locale]}</p>

                      <div className="project-chips">
                        {project.tech.map((tech) => (
                          <span key={tech} className="project-chip">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-actions">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button-secondary project-action"
                          aria-label={`${currentCopy.projectActions.githubLabel} ${project.title[locale]}`}
                          title={`${currentCopy.projectActions.githubLabel} ${project.title[locale]}`}
                        >
                          <Github className="project-action-icon" aria-hidden="true" />
                          {currentCopy.projectActions.github}
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button-primary project-action"
                          aria-label={`${currentCopy.projectActions.demoLabel} ${project.title[locale]}`}
                          title={`${currentCopy.projectActions.demoLabel} ${project.title[locale]}`}
                        >
                          <ExternalLink className="project-action-icon" aria-hidden="true" />
                          {currentCopy.projectActions.demo}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            className="section-wrapper"
            aria-labelledby="testimonials-title"
          >
            <div className="section-container">
              <div className="section-header">
                <h2 id="testimonials-title" className="section-title">
                  {currentCopy.sections.testimonials}
                </h2>
                <div className="section-divider"></div>
              </div>

              <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="testimonial-card">
                    <div className="testimonial-head">
                      <div className="avatar-badge">
                        <User className="testimonial-avatar-icon" aria-hidden="true" />
                      </div>
                      <div className="testimonial-copy-block">
                        <h3 className="testimonial-meta">{testimonial.name}</h3>
                        <p className="testimonial-role">{testimonial.role[locale]}</p>
                      </div>
                    </div>

                    <p className="testimonial-copy">"{testimonial.comment[locale]}"</p>

                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="testimonial-star-icon" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="section-wrapper" aria-labelledby="experience-title">
            <div className="section-container">
              <div className="section-header">
                <h2 id="experience-title" className="section-title">
                  {currentCopy.sections.experience}
                </h2>
                <div className="section-divider"></div>
              </div>

              <div className="experience-list">
                {experience.map((item, index) => (
                  <div key={item.year} className="experience-item">
                    <div className="experience-rail">
                      <div className="avatar-badge">
                        <Briefcase className="experience-badge-icon" aria-hidden="true" />
                      </div>
                      {index < experience.length - 1 && <div className="timeline-line"></div>}
                    </div>

                    <div className="experience-panel-wrap">
                      <div className="experience-panel">
                        <div className="experience-meta">
                          <Calendar size={16} aria-hidden="true" />
                          <span className="experience-year">{item.year}</span>
                        </div>
                        <h3 className="experience-title">{item.title[locale]}</h3>
                        <p className="experience-copy">{item.description[locale]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section-wrapper" aria-labelledby="contact-title">
            <div className="section-container">
              <div className="section-header">
                <h2 id="contact-title" className="section-title">
                  {currentCopy.sections.contact}
                </h2>
                <div className="section-divider"></div>
              </div>

              <div className="contact-grid">
                <div className="contact-panel">
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <input
                      type="text"
                      name="honey"
                      value={formValues.honey}
                      onChange={handleInputChange}
                      className="contact-hidden-field"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="contact-field">
                      <label className="contact-label" htmlFor="name">
                        {currentCopy.contact.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder={currentCopy.contact.namePlaceholder}
                        autoComplete="name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      />
                      <p
                        id="name-error"
                        className="contact-field-status"
                        role={fieldErrors.name ? "alert" : undefined}
                      >
                        {fieldErrors.name ?? ""}
                      </p>
                    </div>

                    <div className="contact-field">
                      <label className="contact-label" htmlFor="email">
                        {currentCopy.contact.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder={currentCopy.contact.emailPlaceholder}
                        autoComplete="email"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      />
                      <p
                        id="email-error"
                        className="contact-field-status"
                        role={fieldErrors.email ? "alert" : undefined}
                      >
                        {fieldErrors.email ?? ""}
                      </p>
                    </div>

                    <div className="contact-field contact-field-message">
                      <label className="contact-label" htmlFor="message">
                        {currentCopy.contact.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        className="contact-input contact-textarea"
                        placeholder={currentCopy.contact.messagePlaceholder}
                        rows={5}
                        aria-invalid={Boolean(fieldErrors.message)}
                        aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      />
                      <p
                        id="message-error"
                        className="contact-field-status"
                        role={fieldErrors.message ? "alert" : undefined}
                      >
                        {fieldErrors.message ?? ""}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="contact-submit"
                      disabled={submitState === "submitting"}
                    >
                      {submitState === "submitting"
                        ? currentCopy.contact.submitting
                        : currentCopy.contact.submit}
                    </button>

                    <p
                      className={`contact-feedback contact-feedback-${submitState}`}
                      aria-live="polite"
                    >
                      {submitMessage}
                    </p>
                  </form>
                </div>

                <div className="contact-stack">
                  <div className="contact-card">
                    <div className="contact-row">
                      <div className="contact-icon-box">
                        <Mail className="contact-method-icon" aria-hidden="true" />
                      </div>
                      <div className="contact-copy">
                        <h3 className="contact-title">{currentCopy.contact.emailTitle}</h3>
                        <a href="mailto:oskarortiz124@gmail.com" className="contact-link">
                          oskarortiz124@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-row">
                      <div className="contact-icon-box">
                        <Phone className="contact-method-icon" aria-hidden="true" />
                      </div>
                      <div className="contact-copy">
                        <h3 className="contact-title">{currentCopy.contact.phoneTitle}</h3>
                        <a href="tel:+573225959974" className="contact-link">
                          +57 3225959974
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-row">
                      <div className="contact-icon-box">
                        <MapPin className="contact-method-icon" aria-hidden="true" />
                      </div>
                      <div className="contact-copy">
                        <h3 className="contact-title">{currentCopy.contact.locationTitle}</h3>
                        <p className="contact-text">{currentCopy.hero.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-shell">
          <div className="content-shell">
            <div className="footer-row">
              <div className="footer-copy">
                <h3 className="footer-name">Oskar Julian Ortiz Ortiz</h3>
                <p className="footer-role">{currentCopy.hero.role}</p>
              </div>

              <div className="footer-socials">
                <a
                  href="https://github.com/oskar-ortiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={currentCopy.footer.githubLabel}
                  title={currentCopy.footer.githubLabel}
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oskar-ortiz-4862233b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={currentCopy.footer.linkedinLabel}
                  title={currentCopy.footer.linkedinLabel}
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="mailto:oskarortiz124@gmail.com"
                  className="social-link"
                  aria-label={currentCopy.footer.mailLabel}
                  title={currentCopy.footer.mailLabel}
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="footer-legal">
              <p className="footer-legal-copy">
                (c) 2026 Oskar Ortiz. {currentCopy.footer.rights}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
