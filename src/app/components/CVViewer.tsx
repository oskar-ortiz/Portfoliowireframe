"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import enCV from "@/locales/en/cv.json";
import esCV from "@/locales/es/cv.json";
import styles from "./CVViewer.module.css";

type Locale = "es" | "en";

const translations = {
  es: esCV,
  en: enCV,
} as const;

const CV_LOCALE_STORAGE_KEY = "cv-locale";

export function CVViewer() {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(CV_LOCALE_STORAGE_KEY);

    if (storedLocale === "es" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(CV_LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const handlePrint = () => {
    window.print();
  };

  const copy = translations[locale];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarGroup}>
            <a
              href="/"
              className={styles.toolbarLink}
              aria-label={copy.meta.backToPortfolio}
            >
              <ArrowLeft size={18} aria-hidden="true" />
              {copy.meta.backToPortfolio}
            </a>
          </div>

          <div className={styles.toolbarGroup}>
            <div className={styles.languageSwitch} role="group" aria-label={copy.meta.languageAria}>
              <button
                type="button"
                onClick={() => setLocale("es")}
                aria-label="Cambiar idioma"
                aria-pressed={locale === "es"}
                className={`${styles.languageButton} ${
                  locale === "es" ? styles.languageButtonActive : ""
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-label="Cambiar idioma"
                aria-pressed={locale === "en"}
                className={`${styles.languageButton} ${
                  locale === "en" ? styles.languageButtonActive : ""
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className={`${styles.toolbarButton} ${styles.toolbarButtonPrimary}`}
              aria-label={copy.meta.downloadPdfAria}
            >
              <Download size={18} aria-hidden="true" />
              {copy.meta.downloadPdf}
            </button>
          </div>
        </div>

        <article className={styles.document} aria-label={copy.meta.documentAria}>
          <header className={styles.header}>
            <div>
              <h1 className={styles.name}>{copy.header.name}</h1>
              <p className={styles.role}>{copy.header.role}</p>
              <p className={styles.summary}>{copy.header.summary}</p>
            </div>

            <aside className={styles.contactCard} aria-label={copy.contact.title}>
              <h2 className={styles.contactTitle}>{copy.contact.title}</h2>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>{copy.contact.location}</div>
                <div className={styles.contactItem}>
                  <a href={`mailto:${copy.contact.email}`}>
                    <Mail size={14} aria-hidden="true" /> {copy.contact.email}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a href={`tel:${copy.contact.phone.replace(/\s+/g, "")}`}>
                    <Phone size={14} aria-hidden="true" /> {copy.contact.phone}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a href={copy.contact.github} target="_blank" rel="noopener noreferrer">
                    GitHub: {copy.contact.github.replace("https://", "")}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <a href={copy.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn: {copy.contact.linkedin.replace("https://www.", "")}
                  </a>
                </div>
              </div>
            </aside>
          </header>

          <div className={styles.content}>
            <div className={styles.column}>
              <section className={styles.section} aria-labelledby="cv-skills">
                <h2 id="cv-skills" className={styles.sectionTitle}>
                  {copy.sections.skills}
                </h2>
                {copy.skillDomains.map((group) => (
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
                  {copy.sections.education}
                </h2>
                {copy.education.map((item) => (
                  <div key={item.title} className={styles.entry}>
                    <h3 className={styles.entryTitle}>{item.title}</h3>
                    <p className={styles.entrySubtitle}>{item.subtitle}</p>
                    <p className={styles.entryBody}>{item.description}</p>
                  </div>
                ))}
              </section>

              <section className={styles.section} aria-labelledby="cv-certifications">
                <h2 id="cv-certifications" className={styles.sectionTitle}>
                  {copy.sections.certifications}
                </h2>
                <ul className={styles.plainList}>
                  {copy.certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={styles.section} aria-labelledby="cv-competencies">
                <h2 id="cv-competencies" className={styles.sectionTitle}>
                  {copy.sections.competencies}
                </h2>
                <ul className={styles.plainList}>
                  {copy.competencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className={styles.column}>
              <section className={styles.section} aria-labelledby="cv-profile">
                <h2 id="cv-profile" className={styles.sectionTitle}>
                  {copy.sections.profile}
                </h2>
                <p className={styles.entryBody}>{copy.header.summary}</p>
              </section>

              <section className={styles.section} aria-labelledby="cv-experience">
                <h2 id="cv-experience" className={styles.sectionTitle}>
                  {copy.sections.projects}
                </h2>
                {copy.projectExperience.map((project) => (
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
            <p className={styles.legal}>{copy.legalClause}</p>
          </footer>
        </article>
      </div>
    </main>
  );
}
