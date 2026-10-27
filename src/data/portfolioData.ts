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

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Ayi Muhamad Nasrulloh',
  shortName: 'Ayi Muhamad',
  title: 'Front-End Web Developer',
  email: 'ayi.muhamadd@gmail.com',
  phone: '081949949417',
  whatsappUrl: 'https://wa.me/6281949949417',
  location: 'Tasikmalaya, Indonesia (WIB GMT+7)',
  github: 'https://github.com/AyyMhmd',
  githubUser: 'AyyMhmd',
  linkedin: 'https://www.linkedin.com/in/ayi-muhamad-nasrulloh/',
  cvUrl: '/assets/aistudio/CV_Ayi_Muhamad_Nasrulloh_848cf639.pdf',
  gpa: '3.76',
  campus: 'Sekolah Tinggi Teknologi Cipasung',
  degree: 'S1 Informatika (2022 - 2026)',
  status: 'Available for hire / Magang',
  avatarImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLdOBofummEEVDZtFXNGQwv5ib91ur4uxfh_9C90dqKxqSx2sT5jqUWpF9is7bU4fWmBc5E70yEMc96g8iPs5sMBFalkQNq61J6E6JpOUAOsYGpDnPy5EfaL4tt95DR1j0OsbatkrLXLnqJhGFhC02xEJ7Qt_PweSd_gYieGgWJe56FKrrQ_Vt4sDTTWLPcCkZv_tEksDVKe3d8o5KP3vnoY9Q8j_WIJSMHKZN-u5YVJH0ND_1qAnu'
};

export const PROJECTS: Project[] = [
  {
    id: 'e-syarat',
    title: 'e-Syarat',
    subtitle: 'Web Pembelajaran Bahasa Isyarat',
    category: 'ai-iot',
    badge: 'Capstone MSIB',
    badgeColor: 'violet',
    version: 'v1.0 Capstone',
    description: 'Membangun aplikasi web pembelajaran Bahasa Isyarat interaktif dengan fitur pelacakan gerakan real-time melalui webcam dan local storage.',
    longDescription: 'e-Syarat merupakan proyek Capstone kolaboratif dalam program MSIB Kampus Merdeka di Dicoding Indonesia. Aplikasi ini menjembatani komunikasi inklusif melalui deteksi gerakan tangan real-time via WebCam, sistem kuis interaktif, modul pembelajaran terstruktur, dan penyimpanan progres offline menggunakan LocalStorage.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfGtN7Kv-K2bYb4FcYkBr3NgxxNMqoG2VKUFKUq0I7mgqZBbrOg0IEd24G91YUxA7q_o56u30ZfwK4mZD-44x-zlrlKcoshYFEyvDuRTULyRQ8u3wibBBJbQRXKZwHZoW-w__dpMP62mcLVLbdA3WVtCI8tu4Q_fzHWXy9tM0WnRFHO3Et1HUeSerHCaruKn8enTZ2xu9Z41FWbT76XKpk8GgJTUrH778RCB6P9zxnsLCjBkoI_Nf',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WebCam Tracking', 'LocalStorage', 'Git/GitHub'],
    features: [
      'Pelacakan gerakan gestur tangan real-time via WebCam API',
      'Katalog modul huruf dan kata dasar Bahasa Isyarat Indonesia (BISINDO)',
      'Kuis interaktif uji kemampuan dengan scoring otomatis',
      'Penyimpanan riwayat dan level progres dengan LocalStorage',
      'Desain antarmuka responsif dan aksesibel untuk berbagai perangkat'
    ],
    liveUrl: 'https://github.com/AyyMhmd',
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true
  },
  {
    id: 'ceritakita',
    title: 'CeritaKita',
    subtitle: 'Web Berbagi Cerita (SPA)',
    category: 'frontend',
    badge: 'Verified SPA',
    badgeColor: 'cyan',
    version: 'v2.1 SPA',
    description: 'Aplikasi web Single Page Application untuk berbagi cerita komunitas dengan integrasi Story API Dicoding dan deployment GitHub Pages.',
    longDescription: 'CeritaKita adalah Single Page Application modern yang dibuat dengan JavaScript murni (ES6+), mengimplementasikan client-side routing kustom, otentikasi JWT token, unggah foto cerita dengan kompresi klien, dan integrasi peta interaktif untuk menampilkan titik lokasi cerita dibagikan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATDC2vAL7mB7p70QYd14TAOS7e__bCRPwhOnuTHjXq_l5qZlwVID4gwNBcufu9-z3jRh-sqx3oH59XJ72Qq0eL8hb3bpKuEw3_GQDYw9tTmKc8X5g80DJ6LB5C4VCpThk3uQy70mVrk7f0cgzN53v4IsIFmyKDNonkqnSPNX04Bvzfm_pMGqTlzo6zOwfyYGY3BZUCy24mfWo1HkbAyNUxc4unnrifzoY4hI1MIzLrPXUrx6z83bxk',
    tags: ['JavaScript', 'Story API', 'SPA', 'Routing Client', 'GitHub Pages'],
    features: [
      'Single Page Application tanpa reload halaman (Hash/History Router)',
      'Registrasi dan Login pengguna dengan token bearer authentication',
      'Feed cerita publik dengan lazy loading dan infinite scroll',
      'Form posting cerita dilengkapi pengambilan foto kamera & berkas',
      'Integrasi pin koordinat lokasi geospasial pada peta'
    ],
    liveUrl: 'https://github.com/AyyMhmd',
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true
  },
  {
    id: 'rapot-digital',
    title: 'Sistem Rapot Digital',
    subtitle: 'SMK Nangkaleah',
    category: 'fullstack',
    badge: 'Production System',
    badgeColor: 'emerald',
    version: 'v1.5 Live',
    description: 'Sistem rapot digital modern berbasis React JS dan Supabase untuk mempermudah guru mengelola nilai serta akses transparan bagi siswa.',
    longDescription: 'Membangun sistem informasi rapot digital untuk sekolah SMK Nangkaleah. Memudahkan para dewan guru dalam menginput nilai akademik, kehadiran, ekstrakurikuler, dan catatan wali kelas, sekaligus menyediakan portal aman bagi siswa dan orang tua untuk mengunduh rekap hasil belajar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-yazb-TRb0vDRrV31fJXgI9gAKXAMciPlXlHtRbj6BFQGvK7pAihYcT-HVegne2YOKOmqcc5PqZizQb33h5ILUxlKmAOIxpoAjVGM3kKExDiUKFqsjCnXNu2A9AMcZ0A4geuNH3hQx7aJ0NJu6bC2fvSngQANsAulcSS7ktKy4zHlxJjhbV4wZz1mM7hrQpSE4S0nAVQc8YjN-0DXS63JTJw0fTOvX8F4fDUYhr54BGfbN-GfsF7s',
    tags: ['React JS', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    features: [
      'Multi-role authentication (Admin, Wali Kelas, Guru Pengampu, Siswa)',
      'Manajemen database terpusat dengan PostgreSQL & Supabase Auth',
      'Kalkulasi nilai otomatis, ranking kelas, dan predikat kelulusan',
      'Ekspor laporan rapor ke format cetak & PDF siap pakai',
      'Kecepatan load tinggi dan ter-hosting optimal di Vercel'
    ],
    liveUrl: 'https://github.com/AyyMhmd',
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true
  },
  {
    id: 'labmis',
    title: 'LabMIS',
    subtitle: 'Sistem Manajemen Laboratorium',
    category: 'fullstack',
    badge: 'Fullstack Enterprise',
    badgeColor: 'violet',
    version: 'v1.0 Enterprise',
    description: 'Platform web untuk mengelola jadwal praktikum mahasiswa, peminjaman ruangan, dan inventaris alat laboratorium terintegrasi.',
    longDescription: 'LabMIS (Laboratory Management Information System) dirancang untuk memodernisasi operasional laboratorium kampus. Menggabungkan arsitektur frontend React Vite yang dinamis dengan backend Python Django REST Framework yang tangguh dan database MySQL.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEhZWoC86D5ZOCFwmR7dJ90t_kCUy9YHcoFRJtKYNsL1kPe1WWztLHsSO26GG44ttPsIHcdxrjfjbR0J1ehPe891pKe74iY6-EixdzQeTrkT6h139WxJYIg0CcohY1ia79-P1Jdj-rj3yWGX43WqUA54yLLFVeFRyJ2ZzZ15n6ShuQRfWdHqw4xr88RLt93YTnnIrPubbsDdicCmyByHMWFvNb1R5ydISImMgebLBz5nBfVSHAbfrj',
    tags: ['React Vite', 'Python Django', 'REST Framework', 'MySQL', 'JWT'],
    features: [
      'Jadwal kalender praktikum interaktif & deteksi bentrok ruangan',
      'Sistem peminjaman alat laboratorium dengan status persetujuan laboran',
      'Audit inventaris peralatan, riwayat servis, dan barcode tracking',
      'RESTful API terstruktur dengan Django REST Framework',
      'Dashboard statistik penggunaan lab per program studi'
    ],
    githubUrl: 'https://github.com/AyyMhmd',
    verified: false
  },
  {
    id: 'chatbot-telegram',
    title: 'Virtual Assistant Bot',
    subtitle: 'Telegram Business Assistant',
    category: 'ai-iot',
    badge: 'Automation Bot',
    badgeColor: 'magenta',
    version: 'v2.0 Bot',
    description: 'Chatbot asisten virtual cerdas di Telegram berbasis Python untuk menjawab pertanyaan pelanggan dan otomasi layanan bisnis 24 jam.',
    longDescription: 'Dikembangkan menggunakan Python dan Telegram Bot API untuk mengotomatisasi interaksi pelanggan, pencatatan pesanan, dan penyampaian informasi produk dengan waktu respons seketika.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNgwr7Ho3T6eY0DzWdU33hjQu1PrcmzEYPtSaggI_13CZrJYq42mOQegsyY-UelsrrelkfIICxKEIu_MucF7J8XA8yYqE89EDb9VoCGk_I9_Is403N_dyraBj5ePzOqyCqcqnssq3qJKWg7_uwfjfFAdJhG4gPQl9NmSY1wSzUs8TDduOaDvOkmgXTw3BvLKftnCUKWw5adSP-4yebhdihELLOBLmA7vtADfiz8YGYmZr5bWd3KN6e',
    tags: ['Python', 'Telegram Bot API', 'Async IO', 'Automation'],
    features: [
      'Respon otomatis pertanyaan umum (FAQ) interaktif',
      'Navigasi menu tombol inline yang user-friendly',
      'Notifikasi pesan masuk langsung ke administrator',
      'Log percakapan dan ringkasan aktivitas harian'
    ],
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true
  },
  {
    id: 'arduino-rfid',
    title: 'Sistem Absensi Tap Card',
    subtitle: 'Hardware IoT Prototype',
    category: 'ai-iot',
    badge: 'Hardware & IoT',
    badgeColor: 'cyan',
    version: 'v1.0 Hardware',
    description: 'Sistem absensi mandiri berbasis mikrokontroler Arduino, pemindai kartu RFID RC522, dan visualisasi status kehadiran pada layar LCD I2C.',
    longDescription: 'Proyek rekayasa perangkat keras yang mengintegrasikan mikrokontroler Arduino Uno, sensor Radio Frequency Identification (RFID), buzzer alarm, dan layar LCD untuk verifikasi identitas fisik secara cepat dan akurat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoPMkq2r8pzE4ISN6MZGM0QbvbwLSrIq7qP5YHFkIDGhJBl0RILGFlSzCMkd8a6H1xo_BmnP_NhGL6ntWh3t-sZqF-jayH3jwW9rmywBxw1dM2zPK3BlviBg-2eC_4Shna0KByKyC-PgtVEAPLeoTpE4z42WeAAlFhE_MN3sDlpXb4gQeebceMCKv3HidC2OIcVlENuXPVcxMjmgCNzzdspZ5biWpxldKXy1MPy3q6F5e8gJ33X1Yh',
    tags: ['Arduino', 'C++', 'RFID RC522', 'I2C LCD', 'Embedded Systems'],
    features: [
      'Pembacaan UID kartu RFID dengan latensi rendah (<200ms)',
      'Tampilan sambutan nama dan status hadir di layar 16x2 LCD',
      'Indikator audio beep konfirmasi dan LED status dwilampu',
      'Ketahanan data dan proteksi scanning kartu ganda'
    ],
    githubUrl: 'https://github.com/AyyMhmd',
    verified: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Front-End Web Developer Intern (Fullstack Web Development)',
    company: 'Dicoding Indonesia',
    location: 'Bandung / Remote (MSIB Kampus Merdeka)',
    period: 'Feb 2025 - Jul 2025',
    type: 'Internship (MSIB)',
    description: [
      'Mengikuti kurikulum intensif Fullstack Web Development berstandar industri dengan fokus teknologi Front-End modern dan arsitektur web terukur.',
      'Mengembangkan aplikasi web responsif dan Single Page Application (SPA) berbasis Vanilla JavaScript, React, dan integrasi Story API.',
      'Berkontribusi aktif sebagai pengembang inti dalam proyek capstone "e-Syarat" (platform pembelajaran Bahasa Isyarat dengan WebCam Tracking).',
      'Mengelola alur kerja tim kolaboratif, code review, manajemen branch, dan CI/CD menggunakan Git dan GitHub.'
    ],
    tags: ['React', 'JavaScript', 'HTML5/CSS3', 'WebCam Tracking', 'REST API', 'Git & GitHub'],
    featured: true
  },
  {
    role: 'Teknisi Komputer',
    company: 'Daya Cipta Mandiri',
    location: 'Tasikmalaya, Indonesia',
    period: 'Jan 2020 - Mar 2020',
    type: 'Professional Experience',
    description: [
      'Mendiagnosis, memperbaiki, dan merawat perangkat keras komputer (PC desktop, laptop, catu daya, dan periferal).',
      'Melakukan instalasi, konfigurasi sistem operasi (Windows/Linux), driver, dan perangkat lunak produktivitas.',
      'Memberikan dukungan teknis dan edukasi langsung kepada klien dalam penanganan kendala komputasi sehari-hari.'
    ],
    tags: ['Hardware Repair', 'Troubleshooting', 'System Config', 'Technical Support']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Fundamental Front-End Web Development',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Web Components', 'ES6 JavaScript', 'AJAX / Fetch API', 'Webpack', 'NPM']
  },
  {
    title: 'Pengembangan Web Intermediate',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Single Page Application (SPA)', 'Clean Architecture', 'API Integration', 'Responsive Design']
  },
  {
    title: 'Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['HTML5 Semantic', 'CSS3 Layouting', 'Flexbox & CSS Grid', 'Responsive Media Queries']
  },
  {
    title: 'Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Data Types & Structures', 'OOP in JS', 'Functional Programming', 'Asynchronous JS (Promise & Async/Await)']
  },
  {
    title: 'Dasar Git dengan GitHub',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    credentialUrl: 'https://www.dicoding.com',
    skills: ['Version Control System', 'Branching & Merging', 'Pull Requests', 'Conflict Resolution']
  }
];

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
    { name: 'Figma', subtitle: 'UI/UX & Wireframing', color: '#ffbad3' }
  ],
  backend: [
    { name: 'PHP', subtitle: 'Server-side Scripting', color: '#8b5cf6' },
    { name: 'Laravel', subtitle: 'MVC Web Framework', color: '#ffb0cd' },
    { name: 'Python', subtitle: 'Scripting & Automation', color: '#06b6d4' },
    { name: 'C++', subtitle: 'Data Structures & Logic', color: '#adc6ff' },
    { name: 'MySQL', subtitle: 'Relational Database', color: '#10b981' },
    { name: 'PostgreSQL', subtitle: 'Structured DB Schemas', color: '#a078ff' },
    { name: 'Supabase', subtitle: 'BaaS & Realtime Database', color: '#10b981' }
  ],
  tools: [
    { name: 'VS Code', subtitle: 'Primary IDE', icon: 'integration_instructions', color: '#06b6d4' },
    { name: 'GitHub', subtitle: 'VCS & CI/CD Collaboration', icon: 'source_environment', color: '#dfe2f1' },
    { name: 'Git', subtitle: 'Version Control', icon: 'account_tree', color: '#ec4899' },
    { name: 'Postman', subtitle: 'API Testing & Endpoint Mocking', icon: 'send_and_archive', color: '#ffb0cd' },
    { name: 'Docker', subtitle: 'Containerization Basics', icon: 'deployed_code', color: '#8b5cf6' },
    { name: 'Vercel / Vite', subtitle: 'Modern Build & Deployment', icon: 'rocket_launch', color: '#10b981' }
  ],
  softSkills: [
    { title: 'Komunikasi & Tim', desc: 'Mampu berkolaborasi aktif, mendengarkan, dan menyampaikan ide secara konstruktif.' },
    { title: 'Cepat Beradaptasi', desc: 'Tanggap mempelajari teknologi, tools, serta budaya kerja baru dengan sigap.' },
    { title: 'Pembelajar Mandiri', desc: 'Proaktif mengeksplorasi dokumentasi teknis dan memecahkan kendala secara independen.' },
    { title: 'Problem Solving', desc: 'Menganalisis akar masalah kode secara sistematis demi menghasilkan solusi efisien.' }
  ]
};

export const TESTIMONIALS = [
  {
    name: 'Dicoding Peer Collaborator',
    role: 'Fullstack MSIB Cohort',
    initial: 'D',
    bgColor: 'bg-primary-container',
    textColor: 'text-on-primary-container',
    quote: 'Ayi memiliki dedikasi luar biasa saat pengerjaan capstone e-Syarat. Logika pemrograman dan eksekusi antarmukanya sangat rapi, bersih, dan solutif bagi pengguna.'
  },
  {
    name: 'Fahri Ramadhan',
    role: 'Rekan Tim Capstone',
    initial: 'F',
    bgColor: 'bg-secondary-container',
    textColor: 'text-white',
    quote: 'Kerja bareng Ayi di proyek web selalu menyenangkan. Komunikasi tim berjalan lancar, tugas integrasi WebCam dan frontend terselesaikan tepat waktu dengan standar tinggi.'
  },
  {
    name: 'SMK Nangkaleah Staff',
    role: 'Pengguna Rapot Digital',
    initial: 'S',
    bgColor: 'bg-surface-container-highest',
    textColor: 'text-terminal-cyan',
    quote: 'Sistem rapot digital yang dikembangkan oleh Ayi sangat membantu proses rekap nilai dewan guru. UI-nya intuitif, cepat, dan tidak membingungkan orang tua murid.'
  },
  {
    name: 'Dosen Pembimbing IT',
    role: 'Sekolah Tinggi Teknologi Cipasung',
    initial: 'P',
    bgColor: 'bg-primary',
    textColor: 'text-on-primary',
    quote: 'Ayi konsisten menunjukkan performa akademis unggul (IPK 3.76) diimbangi dengan portofolio proyek praktis nyata yang berkualitas. Calon developer profesional yang potensial.'
  }
];
