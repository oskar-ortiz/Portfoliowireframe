export type Locale = "es" | "en";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
  honey: string;
};

export type ContactField = keyof Omit<ContactFormValues, "honey">;
export type FieldErrors = Partial<Record<ContactField, string>>;

export const LOCALE_STORAGE_KEY = "portfolio-locale-v2";
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const DEFAULT_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  honey: "",
};

export const navigationIds = [
  "about",
  "skills",
  "projects",
  "certifications",
  "experience",
  "contact",
] as const;

export const certifications = [
  {
    title: { es: "Bootcamp Análisis de Datos Nivel Avanzado", en: "Advanced Data Analysis Bootcamp" },
    issuer: { es: "UTP-AZ · Ministerio TIC", en: "UTP-AZ · Ministry of ICT" },
    detail: { es: "159 horas · 16 de agosto de 2024", en: "159 hours · August 16, 2024" },
    file: "/certificates/bootcamp-analisis-datos.pdf",
  },
  {
    title: { es: "Aprendizaje automático: ejemplos prácticos en sostenibilidad", en: "Machine Learning: Sustainability" },
    issuer: { es: "SkillsBuild", en: "SkillsBuild" },
    detail: { es: "9 h 30 min · 14 de julio de 2026", en: "9 h 30 min · July 14, 2026" },
    file: "/certificates/skillsbuild-machine-learning.pdf",
  },
  {
    title: { es: "Getting Started with Cisco Packet Tracer", en: "Getting Started with Cisco Packet Tracer" },
    issuer: { es: "Networking Academy · Cisco", en: "Networking Academy · Cisco" },
    detail: { es: "4 de agosto de 2026", en: "August 4, 2026" },
    file: "/certificates/cisco-packet-tracer.pdf",
  },
] as const;

export const projects = [
  {
    title: {
      es: "EcoAir Backend — Infraestructura Dockerizada y Microservicios",
      en: "EcoAir Backend — Dockerized Infrastructure & Microservices",
    },
    description: {
      es: "Backend en Spring Boot 3 con Java 17 y PostgreSQL empaquetado en Docker. Despliegue orquestado con Docker Compose detrás de un Nginx Reverse Proxy, aislamiento de redes internas y persistencia de datos.",
      en: "Spring Boot 3 backend with Java 17 and PostgreSQL packaged in Docker. Orchestrated with Docker Compose behind an Nginx Reverse Proxy, with internal network isolation and persistent data storage.",
    },
    image: "/images/projects/proyecto-electival.jpg",
    githubUrl: "https://github.com/oskar-ortiz/ecoair-docker-backend",
    demoUrl: "https://github.com/oskar-ortiz/ecoair-docker-backend",
    tech: ["Java 17", "Spring Boot", "Docker", "Docker Compose", "Nginx", "PostgreSQL"],
  },
  {
    title: { es: "Arquitectura de Soluciones Cloud en AWS", en: "AWS Cloud Solution Architecture" },
    description: {
      es: "Plataforma web de alta disponibilidad diseñada y desplegada en AWS con VPC multi-AZ, subredes públicas y privadas, EC2 detrás de Application Load Balancer con Auto Scaling, RDS MySQL con réplica de lectura, correo asíncrono con Lambda, SES y SQS, y monitoreo con CloudWatch.",
      en: "Highly available web platform designed and deployed on AWS with a multi-AZ VPC, public and private subnets, EC2 behind an Application Load Balancer with Auto Scaling, RDS MySQL with a read replica, asynchronous email with Lambda, SES and SQS, and CloudWatch monitoring.",
    },
    image: "/images/projects/aws-proyecto.jpg",
    githubUrl: "https://github.com/oskar-ortiz/aws_proyecto",
    demoUrl: "https://github.com/oskar-ortiz/aws_proyecto",
    tech: ["Python", "Next.js", "React", "AWS", "PowerShell", "AWS CLI", "Nginx"],
  },
  {
    title: { es: "Hotel Spring Boot V1", en: "Hotel Spring Boot V1" },
    description: {
      es: "Backend empresarial para gestión hotelera construido con Java y Spring Boot.",
      en: "Enterprise hotel management backend built with Java and Spring Boot.",
    },
    image: "/images/projects/hotel-springboot.jpg",
    githubUrl: "https://github.com/oskar-ortiz/HotelSpringBoot_V1",
    demoUrl: "https://github.com/oskar-ortiz/HotelSpringBoot_V1",
    tech: ["Java", "Spring Boot", "REST API"],
  },
  {
    title: { es: "Pipeline ETL para Extracción de Datos", en: "Data Extraction ETL Pipeline" },
    description: {
      es: "Laboratorio de extracción, transformación y procesamiento de datos usando scraping con Python.",
      en: "Laboratory for data extraction, transformation, and processing using Python web scraping.",
    },
    image: "/images/projects/lab-etl-scrapy.jpg",
    githubUrl: "https://github.com/oskar-ortiz/Laboratorio_ETL_SCRAPY",
    demoUrl: "https://github.com/oskar-ortiz/Laboratorio_ETL_SCRAPY",
    tech: ["Python", "Scrapy", "ETL"],
  },
  {
    title: { es: "Procesamiento Distribuido con Apache Spark", en: "Distributed Processing with Apache Spark" },
    description: {
      es: "Exploración de procesamiento distribuido y análisis de datos con Apache Spark y Python.",
      en: "Exploration of distributed processing and data analysis with Apache Spark and Python.",
    },
    image: "/images/projects/lab-spark.jpg",
    githubUrl: "https://github.com/oskar-ortiz/Laboratorio_Spark",
    demoUrl: "https://github.com/oskar-ortiz/Laboratorio_Spark",
    tech: ["Python", "Apache Spark", "Data"],
  },
  {
    title: { es: "Senda Café de Nariño — Plataforma Digital", en: "Senda Café de Nariño — Digital Platform" },
    description: {
      es: "Proyecto colaborativo de comercio y experiencia digital alrededor del café de Nariño.",
      en: "Collaborative commerce and digital experience project around coffee from Nariño.",
    },
    image: "/images/projects/senda-cafe.jpg",
    githubUrl: "https://github.com/DieryValencia/Senda-Caf--de-Nari-o.git",
    demoUrl: "https://github.com/DieryValencia/Senda-Caf--de-Nari-o.git",
    tech: ["TypeScript", "Web", "Team Project"],
  },
] as const;

export const experience = [
  {
    year: "jul. 2025 – ene. 2026",
    title: { es: "Backend Developer — Stealth Startup", en: "Backend Developer — Stealth Startup" },
    description: {
      es: "Remoto · Jornada completa · Confidencial. Desarrollé backend para un cliente bajo NDA, construí APIs REST con Java/Spring Boot y Python/FastAPI sobre PostgreSQL, contenericé servicios con Docker y desplegué cargas de trabajo en AWS. Referencia profesional disponible bajo solicitud.",
      en: "Remote · Full-time · Confidential. Built backend systems for an NDA-protected client, maintained REST APIs with Java/Spring Boot and Python/FastAPI on PostgreSQL, containerized services with Docker, and deployed workloads on AWS. Professional reference available upon request.",
    },
  },
  {
    year: "feb. 2026 – actualidad",
    title: { es: "Software Engineer — CuyiElite", en: "Software Engineer — CuyiElite" },
    description: {
      es: "Proyecto independiente · San Juan de Pasto, Colombia. Arquitectura y backend de una plataforma de apoyo a decisiones para productores de cuy, con sincronización offline-first, PostgreSQL con pgvector, clasificador Random Forest y motor RAG con LLM.",
      en: "Independent project · San Juan de Pasto, Colombia. Architecture and backend for a decision-support platform for guinea pig producers, combining offline-first synchronization, PostgreSQL with pgvector, a Random Forest classifier, and an LLM-powered RAG engine.",
    },
  },
  {
    year: "En curso · Graduación estimada: finales de 2027",
    title: { es: "Ingeniería de Software — Universidad Cooperativa de Colombia", en: "Software Engineering — Universidad Cooperativa de Colombia" },
    description: {
      es: "Pasto, Colombia.",
      en: "Pasto, Colombia.",
    },
  },
] as const;

export const copy = {
  es: {
    navigation: {
      about: "Acerca de mí",
      skills: "Habilidades",
      projects: "Proyectos",
      certifications: "Certificaciones",
      testimonials: "Testimonios",
      experience: "Experiencia",
      contact: "Contacto",
      localeToggle: "Cambiar a inglés",
      themeLight: "Cambiar a modo claro",
      themeDark: "Cambiar a modo oscuro",
      menuOpen: "Abrir menú de navegación",
      menuClose: "Cerrar menú de navegación",
    },
    skipToContent: "Saltar al contenido principal",
    hero: {
      status: "Disponible para trabajar",
      role: "Backend · Cloud AWS · Applied AI",
      location: "Pasto, Nariño, Colombia",
      intro:
        "Backend engineer focused on data-heavy systems on AWS. Construyo APIs y servicios con Java, Spring Boot, Python y FastAPI, con PostgreSQL, pgvector y Docker.",
      primaryAction: "Descargar CV",
      primaryActionLabel: "Descargar hoja de vida de Oskar Ortiz",
      primaryActionPending: "CV disponible por solicitud al correo",
      projectsAction: "Ver proyectos",
      contactAction: "Contacto",
    },
    sections: {
      about: "Acerca de mí",
      skills: "Habilidades y tecnologías",
      projects: "Proyectos Destacados",
      certifications: "Certificaciones",
      testimonials: "Testimonios",
      experience: "Experiencia",
      contact: "Ponte en Contacto",
    },
    about: {
      lead:
        "Ingeniero de software enfocado en desarrollo backend y arquitectura cloud en AWS. Construyo APIs y servicios con alta carga de datos con Java/Spring Boot y Python/FastAPI, sobre PostgreSQL y contenerizados con Docker.",
      body:
        "En infraestructura diseño VPCs con subredes públicas y privadas, cómputo autoescalable, bases gestionadas con réplica de lectura y pipelines serverless con Lambda, SQS y SES, con observabilidad en CloudWatch. Mi trabajo más reciente es la arquitectura y el backend de CuyiElite, una plataforma desarrollada con el Centro Agropecuario Lope del SENA, que combina sincronización offline-first, PostgreSQL con pgvector, un clasificador Random Forest y un motor RAG con LLM. También construyo pipelines de datos con Python, Pandas y PySpark.",
    },
    certifications: { view: "Ver certificado" },
    projectActions: {
      github: "GitHub",
      demo: "Demo",
      githubLabel: "Abrir repositorio de GitHub de",
      demoLabel: "Abrir demo en vivo de",
    },
    contact: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",
      messagePlaceholder: "Tu mensaje",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      emailTitle: "Correo",
      locationTitle: "Ubicación",
      feedbackSuccess: "Mensaje enviado correctamente.",
      feedbackError: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      feedbackInvalid: "Revisa los campos del formulario antes de enviar.",
      validation: {
        name: "Ingresa tu nombre.",
        email: "Ingresa un correo válido.",
        message: "Escribe un mensaje de al menos 10 caracteres.",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      mailLabel: "Enviar correo a Oskar Ortiz",
      githubLabel: "Perfil de GitHub de Oskar Ortiz",
      linkedinLabel: "Perfil de LinkedIn de Oskar Ortiz",
    },
  },
  en: {
    navigation: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      testimonials: "Testimonials",
      experience: "Experience",
      contact: "Contact",
      localeToggle: "Switch to Spanish",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
    },
    skipToContent: "Skip to main content",
    hero: {
      status: "Available for work",
      role: "Backend · Cloud AWS · Applied AI",
      location: "Pasto, Narino, Colombia",
      intro:
        "Backend engineer focused on data-heavy systems on AWS. I build APIs and services with Java, Spring Boot, Python, and FastAPI, using PostgreSQL, pgvector, and Docker.",
      primaryAction: "Download CV",
      primaryActionLabel: "Download Oskar Ortiz CV",
      primaryActionPending: "CV available by email request",
      projectsAction: "View Projects",
      contactAction: "Contact",
    },
    sections: {
      about: "About Me",
      skills: "Skills & Technologies",
      projects: "Featured Projects",
      certifications: "Certifications",
      testimonials: "Testimonials",
      experience: "Experience",
      contact: "Get In Touch",
    },
    about: {
      lead:
        "Software engineer focused on backend development and cloud architecture on AWS. I build data-intensive APIs and services with Java/Spring Boot and Python/FastAPI, backed by PostgreSQL and containerized with Docker.",
      body:
        "I design VPCs with public and private subnets, autoscaling compute, managed databases with read replicas, and serverless pipelines using Lambda, SQS, and SES, with observability through CloudWatch. My most recent work is the architecture and backend of CuyiElite, a platform developed with Centro Agropecuario Lope del SENA that combines offline-first synchronization, PostgreSQL with pgvector, a Random Forest classifier, and an LLM-powered RAG engine. I also build data pipelines with Python, Pandas, and PySpark.",
    },
    certifications: { view: "View certificate" },
    projectActions: {
      github: "GitHub",
      demo: "Demo",
      githubLabel: "Open GitHub repository for",
      demoLabel: "Open live demo for",
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message",
      submit: "Send Message",
      submitting: "Sending...",
      emailTitle: "Email",
      locationTitle: "Location",
      feedbackSuccess: "Message sent successfully.",
      feedbackError: "The message could not be sent. Please try again.",
      feedbackInvalid: "Please review the form fields before submitting.",
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please write a message with at least 10 characters.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      mailLabel: "Send email to Oskar Ortiz",
      githubLabel: "GitHub profile of Oskar Ortiz",
      linkedinLabel: "LinkedIn profile of Oskar Ortiz",
    },
  },
} as const;

export function validateForm(values: ContactFormValues, locale: Locale): FieldErrors {
  const { validation } = copy[locale].contact;
  const nextErrors: FieldErrors = {};

  if (values.name.trim().length < 2) {
    nextErrors.name = validation.name;
  }

  if (!EMAIL_REGEX.test(values.email.trim())) {
    nextErrors.email = validation.email;
  }

  if (values.message.trim().length < 10) {
    nextErrors.message = validation.message;
  }

  return nextErrors;
}
