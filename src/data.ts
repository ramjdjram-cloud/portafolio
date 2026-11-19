export const profile: {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photo: string | null;
} = {
  name: "José de Jesús Ramos Ramos",
  initials: "JJRR",
  role: "Ingeniero en Informática · Desarrollador Web (Frontend)",
  location: "Ciudad Guzmán, Jalisco, México",
  email: "ramjdjram@gmail.com",
  phone: "+52 341 112 3003",
  linkedin: "https://www.linkedin.com/in/jose-de-jesus-ramos",
  github: "https://github.com/ramjdjram-cloud",
  photo: "/JJRR.jpg",
};

export const about: string[] = [
  "Hola, soy José de Jesús Ramos. Ingeniero en Informática titulado por el Tecnológico Nacional de México (ITCG), con especialidad en Tecnologías para el Desarrollo de Aplicaciones Web.",
  "Disfruto construir interfaces con React y aprender algo nuevo en cada proyecto. Me motiva el trabajo en equipo y los retos que me sacan de la zona de confort.",
];

export const facts: { label: string; value: string }[] = [
  { label: "Ubicación", value: profile.location },
  { label: "Email", value: profile.email },
  { label: "Inglés", value: "B2 (Duolingo English Test)" },
  { label: "Cédula profesional", value: "15935680" },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
  status: "Terminado" | "En desarrollo";
};

export const projects: Project[] = [
  {
    name: "Pokédex",
    description:
      "Aplicación web para buscar y explorar información de Pokémon, consumiendo la PokeAPI. Interfaz rápida y responsiva.",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "PokeAPI"],
    link: "https://github.com/ramjdjram-cloud/Pokedex",
    status: "Terminado",
  },
  {
    name: "Adopta un Amigo",
    description:
      "Plataforma de adopción de animales con arquitectura cliente-servidor. El servidor controla el estado: una vez adoptada, la mascota se marca como no disponible.",
    tags: ["React", "Node.js", "Express"],
    link: "https://github.com/ramjdjram-cloud/adopta-un-amigo",
    status: "En desarrollo",
  },
  {
    name: "E-commerce",
    description:
      "Proyecto de comercio electrónico con catálogo de productos y lógica de carrito.",
    tags: ["React", "Node.js", "Express"],
    link: "https://github.com/ramjdjram-cloud",
    status: "En desarrollo",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Angular",
    "HTML5",
    "CSS3",
    "Sass",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express", "Middlewares", "CORS", "APIs REST"],
  "Bases de datos": ["SQL", "MySQL", "PostgreSQL"],
  Herramientas: ["Git", "GitHub", "n8n", "Docker", "Python"],
};
