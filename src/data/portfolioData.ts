export type Language = 'id' | 'en';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'fullstack' | 'ai-iot';
  badge: string;
  badgeColor: 'violet' | 'emerald' | 'magenta' | 'cyan';
  version: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  verified?: boolean;
}

export interface RawProject {
  id: string;
  title: string;
  subtitle: Record<Language, string>;
  category: 'frontend' | 'fullstack' | 'ai-iot';
  badge: Record<Language, string>;
  badgeColor: 'violet' | 'emerald' | 'magenta' | 'cyan';
  version: string;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  image: string;
  tags: string[];
  features: Record<Language, string[]>;
  liveUrl?: string;
  githubUrl?: string;
  verified?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  tags: string[];
  featured?: boolean;
}

export interface RawExperience {
  role: Record<Language, string>;
  company: string;
  location: Record<Language, string>;
  period: string;
  type: Record<Language, string>;
  description: Record<Language, string[]>;
  tags: string[];
  featured?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface RawCertification {
  title: Record<Language, string>;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  bgColor: string;
  textColor: string;
}

export const PERSONAL_INFO = {
  name: 'Ayi Muhamad Nasrulloh',
  shortName: 'Ayi Muhamad',
  title: 'Front-End Web Developer',
  email: 'ayi.muhamadd@gmail.com',
  location: 'Tasikmalaya, Indonesia (WIB GMT+7)',
  github: 'https://github.com/AyyMhmd',
  githubUser: 'AyyMhmd',
  linkedin: 'https://www.linkedin.com/in/ayi-muhamad-nasrulloh/',
  cvUrl: '/assets/aistudio/CV_Ayi_Muhamad_Nasrulloh_848cf639.pdf',
  gpa: '3.76',
  campus: 'Sekolah Tinggi Teknologi Cipasung',
  degree: 'S1 Informatika (2022 - 2026)',
  status: 'Available for hire / Magang',
  avatarImage: '/assets/aistudio/Ayi.jpg',
};

export const RAW_PROJECTS: RawProject[] = [
  {
    id: 'e-syarat',
    title: 'e-Syarat',
    subtitle: {
      id: 'Web Pembelajaran Bahasa Isyarat',
      en: 'Sign Language Learning Web Platform',
    },
    category: 'ai-iot',
    badge: {
      id: 'Capstone MSIB',
      en: 'MSIB Capstone',
    },
    badgeColor: 'violet',
    version: 'v1.0 Capstone',
    description: {
      id: 'Membangun aplikasi web pembelajaran Bahasa Isyarat interaktif dengan fitur pelacakan gerakan real-time melalui webcam dan local storage.',
      en: 'Built an interactive Sign Language learning web application featuring real-time hand gesture tracking via webcam and offline progress storage.',
    },
    longDescription: {
      id: 'e-Syarat merupakan proyek Capstone kolaboratif dalam program MSIB Kampus Merdeka di Dicoding Indonesia. Aplikasi ini menjembatani komunikasi inklusif melalui deteksi gerakan tangan real-time via WebCam, sistem kuis interaktif, modul pembelajaran terstruktur, dan penyimpanan progres offline menggunakan LocalStorage.',
      en: 'e-Syarat is a collaborative Capstone project within the MSIB Kampus Merdeka program at Dicoding Indonesia. The platform bridges inclusive communication through real-time hand gesture tracking via WebCam, interactive quiz evaluations, structured learning modules, and offline progress persistence using LocalStorage.',
    },
    image: '/assets/aistudio/a9aafd16cd-13dccc4c0470c969d844.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WebCam Tracking', 'LocalStorage', 'Git/GitHub'],
    features: {
      id: [
        'Pelacakan gerakan gestur tangan real-time via WebCam API',
        'Katalog modul huruf dan kata dasar Bahasa Isyarat Indonesia (BISINDO)',
        'Kuis interaktif uji kemampuan dengan scoring otomatis',
        'Penyimpanan riwayat dan level progres dengan LocalStorage',
        'Desain antarmuka responsif dan aksesibel untuk berbagai perangkat',
      ],
      en: [
        'Real-time hand gesture tracking via WebCam API and computer vision',
        'Comprehensive Indonesian Sign Language (BISINDO) alphabet & vocabulary catalog',
        'Interactive capability quiz with automated real-time scoring',
        'Progress and level history tracking with browser LocalStorage',
        'Responsive and accessible interface design across desktop and mobile devices',
      ],
    },
    liveUrl: 'https://e-syarat.netlify.app/',
    githubUrl: 'https://github.com/e-Syarat',
    verified: true,
  },
  {
    id: 'ceritakita',
    title: 'CeritaKita',
    subtitle: {
      id: 'Web Berbagi Cerita (SPA)',
      en: 'Community Story Sharing Web (SPA)',
    },
    category: 'frontend',
    badge: {
      id: 'Verified SPA',
      en: 'Verified SPA',
    },
    badgeColor: 'cyan',
    version: 'v2.1 SPA',
    description: {
      id: 'Aplikasi web Single Page Application untuk berbagi cerita komunitas dengan integrasi Story API Dicoding dan deployment GitHub Pages.',
      en: 'A Single Page Application (SPA) for community story sharing featuring Dicoding Story API integration and GitHub Pages deployment.',
    },
    longDescription: {
      id: 'CeritaKita adalah Single Page Application modern yang dibuat dengan JavaScript murni (ES6+), mengimplementasikan client-side routing kustom, otentikasi JWT token, unggah foto cerita dengan kompresi klien, dan integrasi peta interaktif untuk menampilkan titik lokasi cerita dibagikan.',
      en: 'CeritaKita is a modern Single Page Application built with vanilla JavaScript (ES6+), featuring custom client-side routing, JWT bearer token authentication, client-side compressed photo uploading, and interactive map geolocation integration displaying where stories were shared.',
    },
    image: '/assets/aistudio/Gemini_Generated_Image_5y0qs85y0qs85y0q.jpg',
    tags: ['JavaScript', 'Story API', 'SPA', 'Routing Client', 'GitHub Pages'],
    features: {
      id: [
        'Single Page Application tanpa reload halaman (Hash/History Router)',
        'Registrasi dan Login pengguna dengan token bearer authentication',
        'Feed cerita publik dengan lazy loading dan infinite scroll',
        'Form posting cerita dilengkapi pengambilan foto kamera & berkas',
        'Integrasi pin koordinat lokasi geospasial pada peta',
      ],
      en: [
        'Smooth Single Page Application without full page reloads (client-side routing)',
        'User registration and login secured with JWT bearer token authentication',
        'Public story timeline with lazy loading and infinite scrolling',
        'Story creation modal supporting direct camera capture and image compression',
        'Geospatial coordinate pin mapping on interactive Leaflet maps',
      ],
    },
    liveUrl: 'https://github.com/AyyMhmd',
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true,
  },
  {
    id: 'rapot-digital',
    title: 'Sistem Rapot Digital',
    subtitle: {
      id: 'SMK Nangkaleah',
      en: 'SMK Nangkaleah Vocational High School',
    },
    category: 'fullstack',
    badge: {
      id: 'Production System',
      en: 'Production System',
    },
    badgeColor: 'emerald',
    version: 'v1.5 Live',
    description: {
      id: 'Sistem rapot digital modern berbasis React JS dan Supabase untuk mempermudah guru mengelola nilai serta akses transparan bagi siswa.',
      en: 'A modern digital report card system built with React JS and Supabase to streamline grade management for educators and transparency for students.',
    },
    longDescription: {
      id: 'Membangun sistem informasi rapot digital untuk sekolah SMK Nangkaleah. Memudahkan para dewan guru dalam menginput nilai akademik, kehadiran, ekstrakurikuler, dan catatan wali kelas, sekaligus menyediakan portal aman bagi siswa dan orang tua untuk mengunduh rekap hasil belajar.',
      en: 'Engineered a digital academic grading system for SMK Nangkaleah. Enables faculty to manage academic scores, attendance, extracurriculars, and homeroom teacher notes, while providing a secure portal for students and parents to view and export reports.',
    },
    image: '/assets/aistudio/sistem rapot.jpg',
    tags: ['React JS', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    features: {
      id: [
        'Multi-role authentication (Admin, Wali Kelas, Guru Pengampu, Siswa)',
        'Manajemen database terpusat dengan PostgreSQL & Supabase Auth',
        'Kalkulasi nilai otomatis, ranking kelas, dan predikat kelulusan',
        'Ekspor laporan rapor ke format cetak & PDF siap pakai',
        'Kecepatan load tinggi dan ter-hosting optimal di Vercel',
      ],
      en: [
        'Role-based access control (Admin, Homeroom Teacher, Subject Teacher, Student)',
        'Centralized cloud database with PostgreSQL and Supabase Auth',
        'Automated grade weighting, class ranking, and graduation predicate calculations',
        'Instant export of official student report cards to print and PDF formats',
        'Optimized performance and continuous deployment on Vercel',
      ],
    },
    liveUrl: 'https://smknangkaleah-rapot-digital.vercel.app/',
    githubUrl: 'https://github.com/AyyMhmd/SISTEM-RAPOT-DIGITAL.git',
    verified: true,
  },
  {
    id: 'labmis',
    title: 'LabMIS',
    subtitle: {
      id: 'Sistem Manajemen Laboratorium',
      en: 'Laboratory Management Information System',
    },
    category: 'fullstack',
    badge: {
      id: 'Fullstack Enterprise',
      en: 'Fullstack Enterprise',
    },
    badgeColor: 'violet',
    version: 'v1.0 Enterprise',
    description: {
      id: 'Platform web untuk mengelola jadwal praktikum mahasiswa, peminjaman ruangan, dan inventaris alat laboratorium terintegrasi.',
      en: 'Integrated web platform for managing university lab schedules, room reservations, and equipment inventory.',
    },
    longDescription: {
      id: 'LabMIS (Laboratory Management Information System) dirancang untuk memodernisasi operasional laboratorium kampus. Menggabungkan arsitektur frontend React Vite yang dinamis dengan backend Python Django REST Framework yang tangguh dan database MySQL.',
      en: 'LabMIS (Laboratory Management Information System) modernizes university laboratory operations. Combines dynamic React Vite frontend architecture with robust Python Django REST Framework backend and MySQL relational database.',
    },
    image: '/assets/aistudio/labmis.jpg',
    tags: ['React Vite', 'Python Django', 'REST Framework', 'MySQL', 'JWT'],
    features: {
      id: [
        'Jadwal kalender praktikum interaktif & deteksi bentrok ruangan',
        'Sistem peminjaman alat laboratorium dengan status persetujuan laboran',
        'Audit inventaris peralatan, riwayat servis, dan barcode tracking',
        'RESTful API terstruktur dengan Django REST Framework',
        'Dashboard statistik penggunaan lab per program studi',
      ],
      en: [
        'Interactive lab calendar with automated room collision detection',
        'Lab equipment reservation workflow with lab technician approval status',
        'Hardware inventory audit, maintenance history, and barcode tracking',
        'Structured RESTful API endpoints powered by Django REST Framework',
        'Analytics dashboard tracking laboratory utilization by department',
      ],
    },
    githubUrl: 'https://github.com/AyyMhmd/vanny.git',
    verified: false,
  },
  {
    id: 'chatbot-telegram',
    title: 'Virtual Assistant Bot',
    subtitle: {
      id: 'Telegram Business Assistant',
      en: 'Telegram Business Assistant',
    },
    category: 'ai-iot',
    badge: {
      id: 'Automation Bot',
      en: 'Automation Bot',
    },
    badgeColor: 'magenta',
    version: 'v2.0 Bot',
    description: {
      id: 'Chatbot asisten virtual cerdas di Telegram berbasis Python untuk menjawab pertanyaan pelanggan dan otomasi layanan bisnis 24 jam.',
      en: 'Intelligent Telegram virtual assistant bot built with Python for automated 24/7 customer support and business queries.',
    },
    longDescription: {
      id: 'Dikembangkan menggunakan Python dan Telegram Bot API untuk mengotomatisasi interaksi pelanggan, pencatatan pesanan, dan penyampaian informasi produk dengan waktu respons seketika.',
      en: 'Developed using Python and Telegram Bot API to automate customer interactions, record inquiries, and deliver product knowledge with instant response times.',
    },
    image: '/assets/aistudio/virtual asisten.jpg',
    tags: ['Python', 'Telegram Bot API', 'Async IO', 'Automation'],
    features: {
      id: [
        'Respon otomatis pertanyaan umum (FAQ) interaktif',
        'Navigasi menu tombol inline yang user-friendly',
        'Notifikasi pesan masuk langsung ke administrator',
        'Log percakapan dan ringkasan aktivitas harian',
      ],
      en: [
        'Automated interactive FAQ query matching and instant replies',
        'Intuitive inline keyboard menu navigation',
        'Real-time admin notification forwarding for priority inquiries',
        'Session conversation logging and automated daily analytics',
      ],
    },
    githubUrl: 'https://github.com/AyyMhmd/virtual-asisten.git',
    verified: true,
  },
  {
    id: 'arduino-rfid',
    title: 'Sistem Absensi Tap Card',
    subtitle: {
      id: 'Hardware IoT Prototype',
      en: 'Hardware IoT Prototype',
    },
    category: 'ai-iot',
    badge: {
      id: 'Hardware & IoT',
      en: 'Hardware & IoT',
    },
    badgeColor: 'cyan',
    version: 'v1.0 Hardware',
    description: {
      id: 'Sistem absensi mandiri berbasis mikrokontroler Arduino, pemindai kartu RFID RC522, dan visualisasi status kehadiran pada layar LCD I2C.',
      en: 'Standalone contactless attendance system powered by Arduino microcontroller, RFID RC522 scanner, and I2C LCD attendance feedback.',
    },
    longDescription: {
      id: 'Proyek rekayasa perangkat keras yang mengintegrasikan mikrokontroler Arduino Uno, sensor Radio Frequency Identification (RFID), buzzer alarm, dan layar LCD untuk verifikasi identitas fisik secara cepat dan akurat.',
      en: 'Embedded hardware prototype integrating Arduino Uno, Radio Frequency Identification (RFID) sensor, audible feedback buzzer, and LCD display for swift and accurate identity verification.',
    },
    image: '/assets/aistudio/absensi-tapcard.jpg',
    tags: ['Arduino', 'C++', 'RFID RC522', 'I2C LCD', 'Embedded Systems'],
    features: {
      id: [
        'Pembacaan UID kartu RFID dengan latensi rendah (<200ms)',
        'Tampilan sambutan nama dan status hadir di layar 16x2 LCD',
        'Indikator audio beep konfirmasi dan LED status dwilampu',
        'Ketahanan data dan proteksi scanning kartu ganda',
      ],
      en: [
        'High-speed RFID card UID scanning with low latency (<200ms)',
        'Personalized greeting and status display on 16x2 I2C LCD',
        'Dual LED visual status indicators and audible confirmation buzzer',
        'Debounce protection preventing accidental double-scanning',
      ],
    },
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true,
  },
];

export const RAW_EXPERIENCES: RawExperience[] = [
  {
    role: {
      id: 'Front-End Web Developer Intern (Fullstack Web Development)',
      en: 'Front-End Web Developer Intern (Fullstack Web Development)',
    },
    company: 'Dicoding Indonesia',
    location: {
      id: 'Bandung / Remote (MSIB Kampus Merdeka)',
      en: 'Bandung / Remote (MSIB Kampus Merdeka)',
    },
    period: 'Feb 2025 - Jul 2025',
    type: {
      id: 'Magang Industri (MSIB)',
      en: 'Industry Internship (MSIB)',
    },
    description: {
      id: [
        'Mengikuti kurikulum intensif Fullstack Web Development berstandar industri dengan fokus teknologi Front-End modern dan arsitektur web terukur.',
        'Mengembangkan aplikasi web responsif dan Single Page Application (SPA) berbasis Vanilla JavaScript, React, dan integrasi Story API.',
        'Berkontribusi aktif sebagai pengembang inti dalam proyek capstone "e-Syarat" (platform pembelajaran Bahasa Isyarat dengan WebCam Tracking).',
        'Mengelola alur kerja tim kolaboratif, code review, manajemen branch, dan CI/CD menggunakan Git dan GitHub.',
      ],
      en: [
        'Completed rigorous industry-standard Fullstack Web Development curriculum focusing on modern Front-End technologies and scalable web architecture.',
        'Engineered responsive web applications and Single Page Applications (SPA) with Vanilla JavaScript, React, and RESTful Story API integration.',
        'Served as a core developer on the capstone project "e-Syarat" (an interactive Sign Language learning platform with real-time WebCam Tracking).',
        'Led collaborative team workflows, pull request reviews, branch management, and CI/CD pipelines using Git and GitHub.',
      ],
    },
    tags: ['React', 'JavaScript', 'HTML5/CSS3', 'WebCam Tracking', 'REST API', 'Git & GitHub'],
    featured: true,
  },
  {
    role: {
      id: 'Teknisi Komputer & Sistem',
      en: 'Computer Hardware & Systems Technician',
    },
    company: 'Daya Cipta Mandiri',
    location: {
      id: 'Tasikmalaya, Indonesia',
      en: 'Tasikmalaya, Indonesia',
    },
    period: 'Jan 2020 - Mar 2020',
    type: {
      id: 'Pengalaman Profesional',
      en: 'Professional Experience',
    },
    description: {
      id: [
        'Mendiagnosis, memperbaiki, dan merawat perangkat keras komputer (PC desktop, laptop, catu daya, dan periferal).',
        'Melakukan instalasi, konfigurasi sistem operasi (Windows/Linux), driver, dan perangkat lunak produktivitas.',
        'Memberikan dukungan teknis dan edukasi langsung kepada klien dalam penanganan kendala komputasi sehari-hari.',
      ],
      en: [
        'Diagnosed, serviced, and maintained PC workstations, laptops, power units, and peripheral hardware.',
        'Performed operating system installations (Windows & Linux), driver calibrations, and productivity software configurations.',
        'Provided direct technical support and customer advisory for day-to-day computing and networking troubleshooting.',
      ],
    },
    tags: ['Hardware Repair', 'Troubleshooting', 'System Config', 'Technical Support'],
  },
];

export const RAW_CERTIFICATIONS: RawCertification[] = [
  {
    title: {
      id: 'Fundamental Front-End Web Development',
      en: 'Fundamental Front-End Web Development',
    },
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Web Components', 'ES6 JavaScript', 'AJAX / Fetch API', 'Webpack', 'NPM'],
  },
  {
    title: {
      id: 'Pengembangan Web Intermediate',
      en: 'Intermediate Web Development',
    },
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Single Page Application (SPA)', 'Clean Architecture', 'API Integration', 'Responsive Design'],
  },
  {
    title: {
      id: 'Dasar Pemrograman Web',
      en: 'Basic Web Programming',
    },
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['HTML5 Semantic', 'CSS3 Layouting', 'Flexbox & CSS Grid', 'Responsive Media Queries'],
  },
  {
    title: {
      id: 'Dasar Pemrograman JavaScript',
      en: 'Basic JavaScript Programming',
    },
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Data Types & Structures', 'OOP in JS', 'Functional Programming', 'Asynchronous JS (Promise & Async/Await)'],
  },
  {
    title: {
      id: 'Dasar Git dengan GitHub',
      en: 'Basic Git with GitHub',
    },
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Version Control System', 'Branching & Merging', 'Pull Requests', 'Conflict Resolution'],
  },
  {
    title: {
      id: 'Front End Untuk Pemula',
      en: 'Front-End Development for Beginners',
    },
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Browser Object Model (BOM)', 'Document Object Model (DOM)', 'Event Handling', 'Form Validation', 'Penyimpanan Data Web Storage'],
  },
];

export const RAW_SOFT_SKILLS = [
  {
    title: {
      id: 'Komunikasi & Tim',
      en: 'Teamwork & Communication',
    },
    desc: {
      id: 'Mampu berkolaborasi aktif, mendengarkan, dan menyampaikan ide secara konstruktif.',
      en: 'Collaborates effectively in cross-functional teams with active listening and clear technical communication.',
    },
  },
  {
    title: {
      id: 'Cepat Beradaptasi',
      en: 'Fast Adaptability',
    },
    desc: {
      id: 'Tanggap mempelajari teknologi, tools, serta budaya kerja baru dengan sigap.',
      en: 'Quick to embrace emerging technologies, developer tools, and dynamic engineering workflows.',
    },
  },
  {
    title: {
      id: 'Pembelajar Mandiri',
      en: 'Autonomous Learner',
    },
    desc: {
      id: 'Proaktif mengeksplorasi dokumentasi teknis dan memecahkan kendala secara independen.',
      en: 'Proactive in dissecting technical documentation and independently resolving engineering challenges.',
    },
  },
  {
    title: {
      id: 'Problem Solving',
      en: 'Problem Solving',
    },
    desc: {
      id: 'Menganalisis akar masalah kode secara sistematis demi menghasilkan solusi efisien.',
      en: 'Systematically diagnoses root causes to deliver clean, maintainable, and efficient solutions.',
    },
  },
];

export const RAW_TESTIMONIALS = [
  {
    quote: {
      id: 'Ayi merupakan rekan tim yang sangat berdedikasi, detail dalam perancangan UI/UX, dan cepat memecahkan kendala teknis dalam proyek Capstone e-Syarat.',
      en: 'Ayi is an exceptionally dedicated teammate, highly detail-oriented in UI/UX design, and quick at resolving technical bottlenecks in our e-Syarat Capstone project.',
    },
    name: 'Rekan Tim Capstone',
    role: {
      id: 'Dicoding MSIB Cohort',
      en: 'Dicoding MSIB Cohort',
    },
    initial: 'RT',
    bgColor: 'bg-[#8B5CF6]/20',
    textColor: 'text-[#d0bcff]',
  },
  {
    quote: {
      id: 'Sistem rapot digital yang dibangun sangat mempermudah administrasi nilai guru di SMK Nangkaleah. Tampilan bersih dan alur kerja jelas.',
      en: 'The digital report card platform built by Ayi streamlined grading management at SMK Nangkaleah. Clean interface and seamless workflows.',
    },
    name: 'Dewan Guru SMK',
    role: {
      id: 'SMK Nangkaleah',
      en: 'SMK Nangkaleah',
    },
    initial: 'DG',
    bgColor: 'bg-[#10B981]/20',
    textColor: 'text-[#10B981]',
  },
];

// Helper functions to get localized data
export const getLocalizedProjects = (lang: Language): Project[] => {
  return RAW_PROJECTS.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle[lang] || p.subtitle.id,
    category: p.category,
    badge: p.badge[lang] || p.badge.id,
    badgeColor: p.badgeColor,
    version: p.version,
    description: p.description[lang] || p.description.id,
    longDescription: p.longDescription[lang] || p.longDescription.id,
    image: p.image,
    tags: p.tags,
    features: p.features[lang] || p.features.id,
    liveUrl: p.liveUrl,
    githubUrl: p.githubUrl,
    verified: p.verified,
  }));
};

export const getLocalizedExperiences = (lang: Language): Experience[] => {
  return RAW_EXPERIENCES.map((e) => ({
    role: e.role[lang] || e.role.id,
    company: e.company,
    location: e.location[lang] || e.location.id,
    period: e.period,
    type: e.type[lang] || e.type.id,
    description: e.description[lang] || e.description.id,
    tags: e.tags,
    featured: e.featured,
  }));
};

export const getLocalizedCertifications = (lang: Language): Certification[] => {
  return RAW_CERTIFICATIONS.map((c) => ({
    title: c.title[lang] || c.title.id,
    issuer: c.issuer,
    date: c.date,
    credentialUrl: c.credentialUrl,
    skills: c.skills,
  }));
};

export const getLocalizedSoftSkills = (lang: Language) => {
  return RAW_SOFT_SKILLS.map((s) => ({
    title: s.title[lang] || s.title.id,
    desc: s.desc[lang] || s.desc.id,
  }));
};

export const getLocalizedTestimonials = (lang: Language): Testimonial[] => {
  return RAW_TESTIMONIALS.map((t) => ({
    quote: t.quote[lang] || t.quote.id,
    name: t.name,
    role: t.role[lang] || t.role.id,
    initial: t.initial,
    bgColor: t.bgColor,
    textColor: t.textColor,
  }));
};

// Default export values for backward compatibility
export const PROJECTS: Project[] = getLocalizedProjects('id');
export const EXPERIENCES: Experience[] = getLocalizedExperiences('id');
export const CERTIFICATIONS: Certification[] = getLocalizedCertifications('id');
export const TESTIMONIALS: Testimonial[] = getLocalizedTestimonials('id');

export const SKILLS_DATA = {
  frontend: [
    { name: 'HTML5', subtitle: 'Semantic Markup & Accessibility', color: '#ffb0cd' },
    { name: 'CSS3', subtitle: 'Modern Styling & Flexbox', color: '#06b6d4' },
    { name: 'JavaScript', subtitle: 'ES6+, DOM API & Async', color: '#d0bcff' },
    { name: 'React', subtitle: 'Components, Hooks & State', color: '#10b981' },
    { name: 'Bootstrap', subtitle: 'Responsive Grid Layouts', color: '#ec4899' },
    { name: 'Tailwind CSS', subtitle: 'Utility-first Modern CSS', color: '#8b5cf6' },
    { name: 'SPA', subtitle: 'Single Page Architecture', color: '#adc6ff' },
    { name: 'API Integration', subtitle: 'Fetch, Axios & RESTful', color: '#a078ff' },
    { name: 'Figma', subtitle: 'UI/UX & Wireframing', color: '#ffbad3' },
  ],
  backend: [
    { name: 'PHP', subtitle: 'Server-side Scripting', color: '#8b5cf6' },
    { name: 'Laravel', subtitle: 'MVC Web Framework', color: '#ffb0cd' },
    { name: 'Python', subtitle: 'Scripting & Automation', color: '#06b6d4' },
    { name: 'C++', subtitle: 'Data Structures & Logic', color: '#adc6ff' },
    { name: 'MySQL', subtitle: 'Relational Database', color: '#10b981' },
    { name: 'PostgreSQL', subtitle: 'Structured DB Schemas', color: '#a078ff' },
    { name: 'Supabase', subtitle: 'BaaS & Realtime Database', color: '#10b981' },
  ],
  tools: [
    { name: 'VS Code', subtitle: 'Primary IDE', icon: 'integration_instructions', color: '#06b6d4' },
    { name: 'GitHub', subtitle: 'VCS & CI/CD Collaboration', icon: 'source_environment', color: '#dfe2f1' },
    { name: 'Git', subtitle: 'Version Control', icon: 'account_tree', color: '#ec4899' },
    { name: 'Postman', subtitle: 'API Testing & Endpoint Mocking', icon: 'send_and_archive', color: '#ffb0cd' },
    { name: 'Docker', subtitle: 'Containerization Basics', icon: 'deployed_code', color: '#8b5cf6' },
    { name: 'Vercel / Vite', subtitle: 'Modern Build & Deployment', icon: 'rocket_launch', color: '#10b981' },
  ],
  softSkills: [
    { title: 'Komunikasi & Tim', desc: 'Mampu berkolaborasi aktif, mendengarkan, dan menyampaikan ide secara konstruktif.' },
    { title: 'Cepat Beradaptasi', desc: 'Tanggap mempelajari teknologi, tools, serta budaya kerja baru dengan sigap.' },
    { title: 'Pembelajar Mandiri', desc: 'Proaktif mengeksplorasi dokumentasi teknis dan memecahkan kendala secara independen.' },
    { title: 'Problem Solving', desc: 'Menganalisis akar masalah kode secara sistematis demi menghasilkan solusi efisien.' },
  ],
};
