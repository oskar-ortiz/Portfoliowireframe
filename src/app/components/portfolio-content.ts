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
  "testimonials",
  "experience",
  "contact",
] as const;

export const projects = [
  {
    title: {
      es: "Plataforma de Streaming KickLite",
      en: "KickLite Streaming Platform",
    },
    description: {
      es: "Una plataforma de streaming inspirada en Kick donde los usuarios pueden ver e interactuar con transmisiones en vivo.",
      en: "A streaming platform inspired by Kick where users can watch and interact with live streams.",
    },
    image:
      "https://www.programme-tv.net/imgre/fit/~1~tel~2023~07~10~d92dc94e-f290-4a92-bfb7-2a28eb06938d.jpeg/1200x600/crop-from/top/quality/80/kick-quelle-est-cette-plateforme-controversee-de-streaming-qui-fait-de-l-ombre-a-twitch.jpg",
    githubUrl: "https://github.com/oskar-ortiz/kicklite-frontend",
    demoUrl: "https://github.com/oskar-ortiz/kicklite-frontend",
    tech: ["React", "Node.js", "WebRTC"],
  },
  {
    title: {
      es: "Aplicación Web de Delivery",
      en: "Food Delivery Web App",
    },
    description: {
      es: "Una plataforma moderna de domicilios donde los usuarios pueden explorar restaurantes y pedir comida en línea.",
      en: "A modern food delivery platform where users can browse restaurants and order food online.",
    },
    image:
      "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzczNjUyNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "https://github.com/oskar-ortiz/-Delivery_de-_Comida",
    demoUrl: "https://github.com/oskar-ortiz/-Delivery_de-_Comida",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: {
      es: "Aplicación Web Reproductor de Música",
      en: "Music Player Web Application",
    },
    description: {
      es: "Un reproductor musical responsive con playlists, controles de reproducción y visualización de audio.",
      en: "A responsive music player with playlists, playback controls, and audio visualization.",
    },
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/oskar-ortiz/music-player-react-ts",
    demoUrl: "https://github.com/oskar-ortiz/music-player-react-ts",
    tech: ["React", "Web Audio API", "CSS"],
  },
  {
    title: {
      es: "Plataforma de Matemáticas y Visualización de Grafos",
      en: "Mathematics and Graph Visualization Platform",
    },
    description: {
      es: "Una aplicación web para resolver problemas matemáticos y visualizar grafos en 3D y 4D.",
      en: "A web application for solving mathematical problems and visualizing graphs in 3D and 4D.",
    },
    image:
      "https://images.unsplash.com/photo-1717501217912-933d2792d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMDNkJTIwZ3JhcGglMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzcyMDEzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "https://github.com/oskar-ortiz",
    demoUrl: "https://github.com/oskar-ortiz",
    tech: ["Python", "Three.js", "TypeScript"],
  },
  {
    title: {
      es: "Reloj Inteligente con Calendario",
      en: "Smart Clock with Calendar",
    },
    description: {
      es: "Una aplicación de reloj digital con integración de calendario y utilidades basadas en el tiempo.",
      en: "A digital clock application with calendar integration and time-based utilities.",
    },
    image:
      "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2xvY2slMjBjYWxlbmRhciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM3MjAxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "https://github.com/oskar-ortiz/Reloj_python",
    demoUrl: "https://github.com/oskar-ortiz/Reloj_python",
    tech: ["JavaScript", "HTML", "CSS"],
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
      role: "Desarrollador Full Stack",
      location: "Pasto, Nariño, Colombia",
      intro:
        "Una persona extrovertida y sociable que disfruta colaborar y mantener un ambiente de trabajo positivo. Apasionado por crear aplicaciones web modernas y aprender nuevas tecnologías de forma constante.",
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
      role: "Full Stack Developer",
      location: "Pasto, Narino, Colombia",
      intro:
        "An extroverted and sociable person who enjoys collaborating and maintaining a positive work environment. Passionate about building modern web applications and continuously learning new technologies.",
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
