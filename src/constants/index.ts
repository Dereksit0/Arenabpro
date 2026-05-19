import type {
  StatItem,
  PainPoint,
  Feature,
  AcademyLevel,
  Testimonial,
  GalleryImage,
  NavLink,
  SocialLink,
  FooterLink,
  LogoPartner,
  VideoItem,
  Coach,
} from "@/types";

export const SITE_NAME = "Arena B-PRO";
export const SITE_TAGLINE = "Aquí comienza el juego.";
export const SITE_URL = "https://arenabpro.mx";
export const SITE_LOCATION = "San Andrés Cholula, Puebla, México";

export const NAV_LINKS: NavLink[] = [
  { label: "Academia", href: "#academia" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Torneos", href: "#torneos" },
  { label: "Contacto", href: "#contacto" },
];

export const HERO = {
  headline1: "AQUÍ COMIENZA",
  headline2: "EL JUEGO",
  subheadline:
    "La academia de basquetbol de alto rendimiento que Puebla necesitaba. Entrenamiento profesional, formación de carácter, resultados reales.",
  ctaPrimary: "Únete a la Academia",
  ctaSecondary: "Ver instalaciones",
  socialProof: "+200 jugadores formados · Academia con coaches certificados · Puebla, MX",
  imageUrl: "/imgs/banner.jpg",
  imageAlt: "Arena B-PRO — Cancha profesional de basquetbol en Puebla",
};

export const LOGO_PARTNERS: LogoPartner[] = [
  { id: "l1", src: "/imgs/academiatitanes.png", alt: "Academia Titanes" },
  { id: "l2", src: "/imgs/copapueblasport.png", alt: "Copa Puebla Sport" },
  { id: "l3", src: "/imgs/festivalnacional.png", alt: "Festival Nacional" },
  { id: "l4", src: "/imgs/goldenoaxaca.png", alt: "Golden Oaxaca" },
  { id: "l5", src: "/imgs/ochograndes.png", alt: "Ocho Grandes" },
  { id: "l6", src: "/imgs/theultimatebasquetbol.png", alt: "The Ultimate Basquetbol" },
  { id: "l7", src: "/imgs/titansport.png", alt: "Titan Sport" },
  { id: "l8", src: "/imgs/ultimatepremier.png", alt: "Ultimate Premier" },
  { id: "l9", src: "/imgs/winxs.png", alt: "Winxs" },
];

export const CONOCENOS_VIDEOS: VideoItem[] = [
  { id: "v1", src: "/videos/video1.mp4", title: "Arena B-PRO — Conoce nuestras instalaciones" },
  { id: "v2", src: "/videos/video2.mp4", title: "Arena B-PRO — Entrenamiento en acción" },
  { id: "v3", src: "/videos/video3.mp4", title: "Arena B-PRO — Comunidad y valores" },
];

export const CAMPAMENTO_VIDEOS: VideoItem[] = [
  { id: "c1", src: "/videos/camp1.mp4", title: "Testimonio campamento — Participante 1" },
  { id: "c2", src: "/videos/camp2.mp4", title: "Testimonio campamento — Participante 2" },
  { id: "c3", src: "/videos/camp3.mp4", title: "Testimonio campamento — Participante 3" },
  { id: "c4", src: "/videos/camp4.mp4", title: "Testimonio campamento — Participante 4" },
];

export const COACHES: Coach[] = [
  {
    id: "coach1",
    name: "Juan Manuel Solano Cabrera",
    role: "Head Coach",
    imageUrl: "/imgs/img1.jpg",
    trajectory: [
      "Más de 10 años formando jugadores de alto rendimiento",
      "Ex entrenador de selecciones estatales y universitarias",
      "Certificado por la Federación Mexicana de Baloncesto",
      "Metodología basada en disciplina, técnica y mentalidad competitiva",
    ],
  },
  {
    id: "coach2",
    name: "Moisés Flores",
    role: "Preparador Físico",
    imageUrl: "/imgs/img2.jpg",
    trajectory: [
      "Especialista en preparación física para deportes de equipo",
      "Formado en Ciencias del Deporte y Actividad Física",
      "Experiencia con atletas de nivel estatal y nacional",
      "Enfoque en prevención de lesiones y rendimiento máximo",
    ],
  },
  {
    id: "coach3",
    name: "Saúl Martín",
    role: "Profesor de Iniciación al Deporte",
    imageUrl: "/imgs/img3.jpg",
    trajectory: [
      "Pedagogo deportivo especializado en desarrollo motor infantil",
      "Más de 8 años enseñando fundamentos del basquetbol",
      "Metodología lúdica y progresiva para niños de 6 a 12 años",
      "Formador de la base técnica que define la carrera de un jugador",
    ],
  },
];

export const STATS: StatItem[] = [
  { value: "+200", numericValue: 200, label: "Jugadores entrenados", suffix: "+" },
  { value: "3+", numericValue: 3, label: "Años formando talento", suffix: "+" },
  { value: "10+", numericValue: 10, label: "Torneos organizados", suffix: "+" },
  { value: "1", numericValue: 1, label: "Academia certificada en Puebla", suffix: "" },
];

export const PROBLEM_SOLUTION = {
  problemHeadline: "El basquetbol en Puebla merecía algo mejor.",
  problemSubtitle: "Durante años, jugadores y familias se enfrentaron a las mismas barreras:",
  solutionHeadline: "Arena B-PRO nació para cambiar eso.",
  solutionText:
    "Somos la casa del basquetbol poblano: instalaciones profesionales, coaches certificados y una academia que forma jugadores y personas.",
};

export const PAIN_POINTS: PainPoint[] = [
  { id: "pp1", text: "Canchas sin mantenimiento o sin disponibilidad" },
  { id: "pp2", text: "Entrenadores sin metodología formal" },
  { id: "pp3", text: "Sin ambiente competitivo real para jóvenes" },
  { id: "pp4", text: "Ningún espacio que combine deporte, valores y formación" },
];

export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Academia de Alto Rendimiento",
    description:
      "Programa estructurado por niveles (infantil, juvenil, avanzado) con coaches certificados. No solo juegas: aprendes a entrenar como un profesional.",
    iconName: "GraduationCap",
    colSpan: "2",
  },
  {
    id: "f2",
    title: "Instalaciones de Primer Nivel",
    description:
      "Cancha reglamentaria, iluminación profesional, vestidores y área de calentamiento. El espacio que el basquetbol poblano merecía.",
    iconName: "Building2",
  },
  {
    id: "f3",
    title: "Torneos y Ligas",
    description:
      "Competencias internas y abiertas durante todo el año. El escenario para demostrar lo que entrenas.",
    iconName: "Trophy",
  },
  {
    id: "f4",
    title: "Renta de Cancha",
    description:
      "Disponibilidad flexible para equipos, grupos y eventos privados. Reserva en minutos.",
    iconName: "CalendarCheck",
    colSpan: "2",
  },
];

export const ACADEMY_LEVELS: AcademyLevel[] = [
  {
    id: "infantil",
    name: "INFANTIL",
    ageRange: "6 - 12 años",
    description:
      "Fundamentos sólidos, coordinación motriz y amor genuino por el juego. Aquí nace el basquetbolista.",
    iconName: "Star",
  },
  {
    id: "juvenil",
    name: "JUVENIL",
    ageRange: "13 - 17 años",
    description:
      "Técnica avanzada, visión táctica y mentalidad competitiva. Transformamos jugadores en atletas.",
    iconName: "Flame",
  },
  {
    id: "elite",
    name: "ÉLITE",
    ageRange: "18+ años",
    description:
      "Alto rendimiento y preparación para ligas semiprofesionales. Para quienes quieren ir más lejos.",
    iconName: "Zap",
  },
];

export const ACADEMY_DETAIL = {
  headline: "No somos una escuelita de basquetbol.",
  subheadline: "Somos una academia con visión profesional.",
  description:
    "Cada nivel tiene su programa, sus métricas y sus objetivos. Nuestros coaches no improvisan: planifican, evalúan y elevan el nivel de cada jugador con metodología probada.",
  coachName: "Juan Solano",
  coachRole: "Head Coach — ex-UMAD",
  coachImageUrl:
    "https://images.unsplash.com/photo-1618886614638-80e3c103d465?w=400&q=80",
  ctaLabel: "Ver programa completo",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Mi hijo tiene 12 años jugando y en solo 3 meses en Arena B-PRO mejoró más que en los últimos dos años. Los coaches realmente saben lo que hacen y el ambiente es increíble.",
    author: "Carlos Mendoza",
    role: "Padre de jugador juvenil",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "t2",
    quote:
      "Rentamos la cancha cada fin de semana para nuestro equipo. Instalaciones de primer nivel, siempre disponibles y el proceso de reserva es rapidísimo. No cambiamos de lugar.",
    author: "Alejandro Torres",
    role: "Capitán de equipo recreativo",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "t3",
    quote:
      "Estoy en el nivel élite y la competitividad que hay aquí es otra cosa. Los coaches te exigen, te corrigen, te hacen crecer. Desde que entreno aquí, mis números mejoraron brutalmente.",
    author: "Diego Ramírez",
    role: "Jugador Academia Élite, 21 años",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
  },
  {
    id: "t4",
    quote:
      "Lo que más me sorprendió no fue la cancha ni el entrenamiento, sino los valores que le inculcan a mi hijo. Respeto, disciplina, trabajo en equipo. Arena B-PRO es una escuela de vida.",
    author: "Patricia Flores",
    role: "Madre de jugador infantil",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    alt: "Cancha de basquetbol profesional Arena B-PRO",
    className: "col-span-2 row-span-2",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&q=80",
    alt: "Entrenamiento juvenil de basquetbol",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=600&q=80",
    alt: "Jugador en acción durante torneo",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
    alt: "Academia de basquetbol infantil",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=600&q=80",
    alt: "Juego de basquetbol en cancha cubierta",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    alt: "Entrenamiento de alto rendimiento basquetbol",
    className: "col-span-2",
  },
];

export const CTA_BANNER = {
  headline: "TU PRÓXIMO NIVEL EMPIEZA AQUÍ",
  text: "Inscripciones abiertas para el siguiente ciclo. Cupo limitado.",
  ctaPrimary: "Quiero inscribirme",
  ctaSecondary: "Hablar con un coach",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/arenabpro", handle: "@arenabpro" },
  { label: "YouTube", href: "https://youtube.com/@basketpromexico", handle: "@basketpromexico" },
  { label: "TikTok", href: "https://tiktok.com/@arenabpro", handle: "@arenabpro" },
];

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Academia", href: "#academia" },
  { label: "Torneos", href: "#torneos" },
  { label: "Renta de cancha", href: "#instalaciones" },
  { label: "Contacto", href: "#contacto" },
  { label: "Política de privacidad", href: "/privacidad" },
];
