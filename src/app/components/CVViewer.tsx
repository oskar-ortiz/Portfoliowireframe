"use client";

import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { cvData } from "./cv-data";
import styles from "./CVViewer.module.css";

export function CVViewer() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarGroup}>
            <a
              href="/"
              className={styles.toolbarLink}
              aria-label="Volver al portafolio principal"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Volver al portafolio
            </a>
          </div>

          <div className={styles.toolbarGroup}>
            <button
              type="button"
              onClick={handlePrint}
              className={`${styles.toolbarButton} ${styles.toolbarButtonPrimary}`}
              aria-label="Descargar CV como PDF"
            >
              <Download size={18} aria-hidden="true" />
              Descargar PDF
            </button>
          </div>
        </div>

        <article className={styles.document} aria-label="Hoja de vida profesional de Oskar Ortiz">
          <header className={styles.header}>
            <div>
              <h1 className={styles.name}>{cvData.name}</h1>
              <p className={styles.role}>{cvData.role}</p>
              <p className={styles.summary}>{cvData.profile}</p>
            </div>

            <aside className={styles.contactCard} aria-label="Información de contacto">
              <h2 className={styles.contactTitle}>Contact Information</h2>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>{cvData.location}</div>
                <div className={styles.contactItem}>
                  <a href={`mailto:${cvData.email}`}>
                    <Mail size={14} aria-hidden="true" /> {cvData.email}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a href={`tel:${cvData.phone.replace(/\s+/g, "")}`}>
                    <Phone size={14} aria-hidden="true" /> {cvData.phone}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a href={cvData.github} target="_blank" rel="noopener noreferrer">
                    GitHub: {cvData.github.replace("https://", "")}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn: {cvData.linkedin.replace("https://www.", "")}
                  </a>
                </div>
              </div>
            </aside>
          </header>

          <div className={styles.content}>
            <div className={styles.column}>
              <section className={styles.section} aria-labelledby="cv-skills">
                <h2 id="cv-skills" className={styles.sectionTitle}>
                  Technical Skills
                </h2>
                {cvData.skillDomains.map((group) => (
                  <div key={group.title} className={styles.skillGroup}>
                    <h3 className={styles.skillGroupTitle}>{group.title}</h3>
                    <ul className={styles.skillList}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className={styles.section} aria-labelledby="cv-education">
                <h2 id="cv-education" className={styles.sectionTitle}>
                  Education
                </h2>
                {cvData.education.map((item) => (
                  <div key={item.title} className={styles.entry}>
                    <h3 className={styles.entryTitle}>{item.title}</h3>
                    <p className={styles.entrySubtitle}>{item.subtitle}</p>
                    <p className={styles.entryBody}>{item.description}</p>
                  </div>
                ))}
              </section>

              <section className={styles.section} aria-labelledby="cv-certifications">
                <h2 id="cv-certifications" className={styles.sectionTitle}>
                  Certifications & Continuous Learning
                </h2>
                <ul className={styles.plainList}>
                  {cvData.certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={styles.section} aria-labelledby="cv-competencies">
                <h2 id="cv-competencies" className={styles.sectionTitle}>
                  Professional Competencies
                </h2>
                <ul className={styles.plainList}>
                  {cvData.competencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className={styles.column}>
              <section className={styles.section} aria-labelledby="cv-profile">
                <h2 id="cv-profile" className={styles.sectionTitle}>
                  Professional Profile
                </h2>
                <p className={styles.entryBody}>{cvData.profile}</p>
              </section>

              <section className={styles.section} aria-labelledby="cv-experience">
                <h2 id="cv-experience" className={styles.sectionTitle}>
                  Project Experience
                </h2>
                {cvData.projectExperience.map((project) => (
                  <div key={project.title} className={styles.entry}>
                    <h3 className={styles.entryTitle}>{project.title}</h3>
                    <p className={styles.entrySubtitle}>{project.subtitle}</p>
                    <ul className={styles.bulletList}>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>
          </div>

          <footer className={styles.footer}>
            <p className={styles.legal}>{cvData.legalClause}</p>
          </footer>
        </article>
      </div>
    </main>
  );
}
