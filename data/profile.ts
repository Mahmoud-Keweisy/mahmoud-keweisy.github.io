export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  description?: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  expiryDate?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
  image?: string;
}

export interface Social {
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
  youtube?: string;
  telegram?: string;
  instagram?: string;
  tiktok?: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  avatar: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  social: Social;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
  };
}

export const profile: Profile = {
  name: 'Mahmoud Keweisy',
  title: 'Team Leader | English Language Educator | Junior Web Developer | Aspiring EdTech Entrepreneur',
  location: 'Warsaw, Poland',
  email: 'Mahmoudkeweisy@gmail.com',
  phone: '+48 729 403 156',
  summary:
    'Versatile and dedicated English language educator with experience teaching diverse age groups, from preschool children to adult learners, across various educational settings. Currently pursuing a B.Sc. in Computer Science, with hands-on involvement in multidisciplinary projects and strong proficiency in digital tools and educational academic technologies. Certified in TESOL-TEFL and team management, demonstrating proven leadership, communication, and organisational skills. Adept at designing engaging learning experiences, managing classrooms, and integrating technology to enhance outcomes and foster cross-cultural understanding.',
  avatar: '/avatar.jpg',

  experience: [
    {
      company: 'Web Tatweer',
      role: 'Poland Branch Manager',
      start: '2024-01',
      end: 'Present',
      description:
        'Leading the operations and growth strategy for Web Tatweer\'s Poland branch, bridging regional opportunities with global tech expertise. Managing diverse technology projects with a strong focus on efficiency, innovation, and tailored client solutions. Supporting both startups and large enterprises in achieving scalable digital transformation across Europe. Coordinating between international teams and ensuring high-quality project delivery within deadlines and budgets. Enhancing the company\'s presence in the European market through strategic partnerships and local outreach.',
      technologies: ['Operations', 'Project Management', 'Leadership', 'Digital Transformation', 'Strategic Partnerships'],
    },
    {
      company: 'Mini Misie Preschool',
      role: 'English Teacher',
      start: '2024-02',
      end: 'Present',
      description:
        'Plan and deliver dynamic, age-appropriate English lessons for preschool children, using storytelling, music, crafts, and sensory play to create immersive language experiences. Spearheaded the launch of themed English activity programs, including seasonal "English Corners," promoting interactive learning and parent engagement. Developed personalised language development plans, tracking individual student progress and adapting strategies for varied learning styles and needs. Lead organiser of school-wide cultural events and English showcases, fostering children\'s confidence, public speaking skills, and cultural awareness. Actively collaborated with teachers and administration to enhance curriculum design and integrate English language learning across subjects. Utilised modern educational tools (e.g., LiveKid, Canva, puppetry, and interactive apps) to enrich classroom experiences and strengthen communication with families.',
      technologies: ['Early Childhood Education', 'Lesson Planning', 'Curriculum Design', 'LiveKid', 'Canva', 'Parent Engagement', 'Public Speaking'],
    },
    {
      company: 'Brighton Academy',
      role: 'English Teacher',
      start: '2023-10',
      end: '2023-11',
      description:
        'Designed and delivered engaging English language lessons for primary students, focusing on grammar, vocabulary, and reading comprehension, using technology and interactive methods to enhance learning. Assessed students progress regularly through quizzes, presentations, and assignments, providing personalized feedback and support to ensure continuous improvement. Led extracurricular activities and collaborated with other teachers, integrating English into broader educational themes and fostering practical language use in real-world contexts.',
      technologies: ['Primary Education', 'Grammar Instruction', 'Assessment', 'Technology Integration', 'Collaborative Teaching'],
    },
    {
      company: 'Little Academy',
      role: 'English Teacher',
      start: '2023-05',
      end: '2023-09',
      description:
        'Designed and implemented engaging English language programs for preschool children, using songs, games, and storytelling to teach basic vocabulary and conversational skills. Created a nurturing classroom environment that encouraged young learners to explore English through playful and interactive methods. Collaborated with parents and staff to support consistent language development, providing resources and monitoring each child\'s progress.',
      technologies: ['Preschool Education', 'Interactive Learning', 'Parent Collaboration', 'Language Development'],
    },
    {
      company: 'Preply',
      role: 'English Teacher',
      start: '2023-09',
      end: 'Present',
      description:
        'Providing personalized online English instruction to students worldwide, adapting teaching methods to individual learning goals and proficiency levels. Utilizing digital platforms and interactive tools to create engaging virtual learning experiences.',
      technologies: ['Online Teaching', 'Personalized Instruction', 'Digital Platforms', 'ESL/TEFL'],
    },
  ],

  education: [
    {
      school: 'Akademia Ekonomiczno-Humanistyczna w Warszawie',
      degree: 'Bachelor of Science in Computer Science',
      start: '2022-10',
      end: '2026-09',
      description:
        'Relevant Coursework (Cert): Academic Skills, Basics of Programming, Website Development',
    },
    {
      school: 'Arizona State University',
      degree: 'Arizona State University TESOL Professional Certificate',
      start: '2024-01',
      end: '2024-04',
      description:
        'Teaching English as a Second or Foreign Language/ESL Language Instructor',
    },
    {
      school: 'World TESOL Academy',
      degree: 'Accredited Training Course',
      start: '2023-11',
      end: '2023-11',
      description:
        'English Teaching (TESOL/TEFL)',
    },
    {
      school: 'High School, Science Section',
      degree: 'High School Diploma',
      start: '2018',
      end: '2021',
      description: 'Cairo, Egypt',
    },
  ],

  skills: [
    { name: 'Arabic', level: 100, category: 'Languages' },
    { name: 'English', level: 100, category: 'Languages' },
    { name: 'Polish', level: 50, category: 'Languages' },
    { name: 'Lesson Planning', level: 90, category: 'Teaching Skills' },
    { name: 'Early Childhood Education', level: 90, category: 'Teaching Skills' },
    { name: 'Classroom Management', level: 85, category: 'Teaching Skills' },
    { name: 'Individualized Instruction', level: 85, category: 'Teaching Skills' },
    { name: 'Curriculum Design', level: 85, category: 'Teaching Skills' },
    { name: 'Educational Technology', level: 85, category: 'Technical Skills' },
    { name: 'Web Development', level: 75, category: 'Technical Skills' },
    { name: 'HTML/CSS', level: 75, category: 'Technical Skills' },
    { name: 'Programming Fundamentals', level: 70, category: 'Technical Skills' },
    { name: 'Python/Java Basics', level: 65, category: 'Technical Skills' },
    { name: 'Public Speaking', level: 90, category: 'Soft Skills' },
    { name: 'Workshop Facilitation', level: 85, category: 'Soft Skills' },
    { name: 'Negotiation', level: 80, category: 'Soft Skills' },
    { name: 'Professional Communication', level: 90, category: 'Soft Skills' },
    { name: 'Client Communication', level: 85, category: 'Soft Skills' },
  ],

  certifications: [
    { name: 'EF SET English Certificate (C2 Proficient)', issuer: 'EF Standard English Test', date: '2023-12', url: 'https://www.efset.org/cert/DxtkKG' },
    { name: '120-Hour TESOL/TEFL Certificate', issuer: 'International Open Academy', date: '2023-06' },
    { name: 'Team Management', issuer: 'Wrocław learns online', date: '2023-05', url: 'https://navoica.pl/certificates/cf9e937df0d5430ebbd034eb90536396' },
    { name: 'Entrepreneurship for Young Students', issuer: 'University of Silesia', date: '2023-04', url: 'https://navoica.pl/certificates/33ab7ff79d7d4cc8a8740e99e51f0f40' },
  ],

  projects: [
    {
      name: 'Cravelle',
      description:
        'Founded and leading Cravelle, a bespoke services enterprise offering elite language learning, diplomatic consulting, professional translations, international trade facilitation, and digital solutions. Empowering purposeful impact through refined services that blend timeless elegance with modern ambition, serving clients across multiple countries with a focus on excellence, trust, and global reach.',
      technologies: ['Entrepreneurship', 'Business Development', 'International Trade', 'Consulting', 'Language Services', 'Digital Solutions'],
      repo: 'https://github.com/Cravelle/Cravelle-Source.git',
      demo: 'https://cravelle.netlify.app',
      image: '/projects/cravelle.png',
    },
  ],

  social: {
    linkedin: 'https://www.linkedin.com/in/mahmoudkeweisy/',
    github: 'https://github.com/Mahmoud-Keweisy',
    email: 'Mahmoudkeweisy@gmail.com',
  },

  seo: {
    title: 'Mahmoud Keweisy - Digital CV',
    description:
      'Versatile English language educator and Computer Science student based in Warsaw, Poland. Experienced in early childhood education, team leadership, and web development. Certified in TESOL-TEFL with proven expertise in curriculum design and educational technology.',
    keywords: [
      'mahmoud keweisy',
      'english teacher',
      'computer science student',
      'warsaw',
      'poland',
      'web tatweer',
      'tesol',
      'tefl',
      'web development',
      'education',
      'ef set',
      'early childhood education',
      'team leadership',
      'edtech',
      'poland branch manager',
    ],
    canonicalUrl: 'https://mahmoud-keweisy.github.io',
  },
};
