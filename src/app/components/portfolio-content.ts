export type Locale = "es" | "en";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
  honey: string;
};

export type ContactField = keyof Omit<ContactFormValues, "honey">;
export type FieldErrors = Partial<Record<ContactField, string>>;

export const LOCALE_STORAGE_KEY = "portfolio-locale";
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
    title: { es: "Aprendizaje automático: sostenibilidad", en: "Machine Learning: Sustainability" },
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
    title: { es: "Proyecto Electival", en: "Electival Project" },
    description: {
      es: "Aplicación Django para el registro y gestión de cafés, desplegada en Vercel.",
      en: "Django application for coffee registration and management, deployed on Vercel.",
    },
    image: "/images/projects/proyecto-electival.jpg",
    githubUrl: "https://github.com/oskar-ortiz/proyecto-electival",
    demoUrl: "https://github.com/oskar-ortiz/proyecto-electival",
    tech: ["Django", "Python", "Vercel"],
  },
  {
    title: { es: "Arquitectura AWS", en: "AWS Architecture Project" },
    description: {
      es: "Proyecto técnico en TypeScript enfocado en servicios cloud y arquitectura de soluciones en AWS.",
      en: "TypeScript technical project focused on cloud services and solution architecture on AWS.",
    },
    image: "/images/projects/aws-proyecto.jpg",
    githubUrl: "https://github.com/oskar-ortiz/aws_proyecto",
    demoUrl: "https://github.com/oskar-ortiz/aws_proyecto",
    tech: ["TypeScript", "AWS", "Cloud"],
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
    title: { es: "Laboratorio ETL con Scrapy", en: "ETL Scrapy Laboratory" },
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
    title: { es: "Laboratorio Spark", en: "Spark Laboratory" },
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
    title: { es: "Senda Café de Nariño", en: "Senda Café de Nariño" },
    description: {
      es: "Proyecto colaborativo de comercio y experiencia digital alrededor del café de Nariño.",
      en: "Collaborative commerce and digital experience project around coffee from Nariño.",
    },
    image: "/images/projects/senda-cafe.jpg",
    githubUrl: "https://github.com/DieryValencia/Senda-Cafe-de-Narino",
    demoUrl: "https://github.com/DieryValencia/Senda-Cafe-de-Narino",
    tech: ["TypeScript", "Web", "Team Project"],
  },
] as const;

export const testimonials = [
  {
    name: "Maria Gonzalez",
    role: {
      es: "Product Manager",
      en: "Product Manager",
    },
    comment: {
      es: "Oskar es un desarrollador excepcional con gran atención al detalle. Su ética de trabajo es sobresaliente.",
      en: "Oskar is an exceptional developer with great attention to detail. His work ethic is outstanding.",
    },
  },
  {
    name: "Carlos Rodriguez",
    role: {
      es: "Senior Developer",
      en: "Senior Developer",
    },
    comment: {
      es: "Trabajar con Oskar fue un placer. Aporta creatividad y excelencia técnica a cada proyecto.",
      en: "Working with Oskar was a pleasure. He brings creativity and technical excellence to every project.",
    },
  },
  {
    name: "Ana Martinez",
    role: {
      es: "Diseñadora UX",
      en: "UX Designer",
    },
    comment: {
      es: "Oskar tiene excelentes habilidades de colaboración y siempre entrega implementaciones de alta calidad y muy cuidadas.",
      en: "Oskar has excellent collaboration skills and always delivers high-quality, pixel-perfect implementations.",
    },
  },
] as const;

export const experience = [
  {
    year: "2024 - Present",
    title: {
      es: "Estudiante de Ingeniería de Software",
      en: "Software Engineering Student",
    },
    description: {
      es: "Actualmente cursando la carrera de ingeniería de software, con enfoque en desarrollo web moderno y arquitectura de software.",
      en: "Currently pursuing software engineering degree, focusing on modern web development and software architecture.",
    },
  },
  {
    year: "2023",
    title: {
      es: "Curso de Desarrollo Web",
      en: "Web Development Course",
    },
    description: {
      es: "Completó una formación integral en desarrollo web cubriendo tecnologías full stack y buenas prácticas.",
      en: "Completed comprehensive web development training covering full-stack technologies and best practices.",
    },
  },
] as const;

export const copy = {
  es: {
    navigation: {
      about: "Sobre mí",
      skills: "Skills",
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
      role: "Backend · Cloud AWS · DevOps",
      location: "Pasto, Nariño, Colombia · 6.º semestre",
      intro:
        "Estudiante de Ingeniería de Software orientado a backend, arquitecturas distribuidas y automatización. Construyo soluciones con Java, Spring Boot, Python, Docker y AWS, con foco en calidad, seguridad y escalabilidad.",
      primaryAction: "Descargar CV",
      primaryActionLabel: "Descargar hoja de vida de Oskar Ortiz",
      primaryActionPending: "CV disponible por solicitud al correo",
      projectsAction: "Ver proyectos",
      contactAction: "Contacto",
    },
    sections: {
      about: "Sobre mí",
      skills: "Skills & Tecnologías",
      projects: "Proyectos Destacados",
      certifications: "Certificaciones",
      testimonials: "Testimonios",
      experience: "Experiencia Académica y Laboral",
      contact: "Ponte en Contacto",
    },
    about: {
      lead:
        "Oskar es una persona extrovertida y sociable que disfruta colaborar y mantener un ambiente de trabajo positivo. En su tiempo libre le gusta caminar, jugar fútbol, escuchar música y también es músico profesional.",
      body:
        "Le apasiona crear aplicaciones web modernas y aprender nuevas tecnologías continuamente para mantenerse a la vanguardia del desarrollo de software.",
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
      phoneTitle: "Teléfono",
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
      role: "Backend · AWS Cloud · DevOps",
      location: "Pasto, Narino, Colombia · 6th semester",
      intro:
        "Software Engineering student focused on backend systems, distributed architectures, and automation. I build solutions with Java, Spring Boot, Python, Docker, and AWS, with a focus on quality, security, and scalability.",
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
      experience: "Academic & Work Experience",
      contact: "Get In Touch",
    },
    about: {
      lead:
        "Oskar is an extroverted and sociable person who enjoys collaborating and maintaining a positive work environment. In his free time he enjoys walking, playing football, listening to music, and he is also a professional musician.",
      body:
        "He is passionate about building modern web applications and continuously learning new technologies to stay at the forefront of software development.",
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
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message",
      submit: "Send Message",
      submitting: "Sending...",
      emailTitle: "Email",
      phoneTitle: "Phone",
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
