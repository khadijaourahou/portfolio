export const personalInfo = {
  name: "Khadija Ourahou",
  title: "Engineering Student — Information Security & Technology",
  subtitle: "SIT Cycle · Université Cadi Ayyad, Marrakech",
  github: "https://github.com/khadijaourahou",
  linkedin: "https://linkedin.com/in/khadija-ourahou",
  email: "khad.ourahou@gmail.com",
  location: "Marrakech, Morocco",
  cv: "/cv-khadija-ourahou.pdf",
  bio: "5th-year engineering student specialising in network security, infrastructure, and secure application development. I work across the full stack — from configuring routing protocols and hardening Linux systems to building web applications and automating deployments.",
  available: true,
};

export const education = [
  {
    degree: "Cycle Ingénieur — Sécurité des Informations et Technologie (SIT)",
    school: "Faculté des Sciences et Techniques, Université Cadi Ayyad",
    location: "Marrakech, Morocco",
    period: "2024 — Present",
  },
  {
    degree: "DEUST — MIPC (Maths, Informatique, Physique, Chimie)",
    school: "Faculté des Sciences et Techniques, Université Cadi Ayyad",
    location: "Marrakech, Morocco",
    period: "2021 — 2024",
  },
  {
    degree: "Baccalauréat — Sciences Physiques",
    school: "Morocco",
    location: "",
    period: "2021",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "PHP", "JavaScript", "HTML5", "CSS3", "Bash / Shell"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Laravel", "Spring Boot", "React.js", "JEE", "Bootstrap"],
  },
  {
    category: "Cybersecurity & Pentest",
    items: ["Nmap", "Wazuh (EDR/SOC)", "pfSense", "OpenVPN", "Suricata (IDS/IPS)", "MITRE ATT&CK", "Google Dorking", "WHOIS / DNS Footprinting", "Cryptography (AES · DES · 3DES)"],
  },
  {
    category: "Networking & Systems",
    items: ["GNS3", "Cisco Packet Tracer", "OSPF", "VLANs (802.1Q)", "Windows Server 2019", "Active Directory", "DNS · DHCP", "Linux"],
  },
  {
    category: "AI & Data Science",
    items: ["Machine Learning", "CNN", "pandas"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Git", "GitLab", "GitLab CI/CD", "Android Studio", "XAMPP", "WordPress"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "Tamazight", level: "Native", percent: 100 },
  { name: "French", level: "B1 — Intermediate", percent: 60 },
  { name: "English", level: "B2 — Upper Intermediate", percent: 75 },
];

export const certifications = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    date: "2025",
    link: "https://www.credly.com/badges/e923a723-5af0-4980-8705-5959974e34c3/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "April 2025",
    link: "https://www.credly.com/badges/486b3543-f215-40be-9493-acaad0fe9ee5/public_url",
  },
  {
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    date: "March 2025",
    link: "#",
  },
  {
    title: "Web Development",
    issuer: "Sololearn",
    date: "2024",
    link: "https://www.sololearn.com/certificates/CC-TPYERE8V",
  },
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Network Security Architecture — OpenVPN, pfSense & Suricata",
    description: "Virtualized enterprise security infrastructure with 4 interconnected VMs. Designed a Client-to-Site OpenVPN tunnel (PKI, certificates), hardened an Ubuntu server (sysctl, UFW, PAM, SSH key auth), deployed Suricata IDS/IPS on pfSense with custom detection rules, and validated resilience against simulated Nmap scans and ICMP flood attacks from Kali Linux.",
    tags: ["pfSense", "OpenVPN", "Suricata", "IDS/IPS", "Linux Hardening", "VirtualBox"],
    github: "https://github.com/khadijaourahou/projet-securite-reseau",
    category: "Cybersecurity",
    featured: true,
  },
  {
    id: 2,
    title: "SOC Lab — Wazuh EDR",
    description: "Hands-on SOC Level 1 lab built with Wazuh open-source EDR. Agent deployment, SSH brute-force detection, log aggregation, vulnerability scanning, and compliance auditing against NIST and GDPR frameworks.",
    tags: ["Wazuh", "Linux", "SOC", "SIEM", "MITRE ATT&CK", "OpenVAS"],
    github: "https://github.com/khadijaourahou/cybersecurity-platforms-wazuh-soc-lab",
    category: "Cybersecurity",
    featured: true,
  },
  {
    id: 3,
    title: "Network Simulation — OSPF & VLANs",
    description: "Multi-router topology in GNS3 with 4 Cisco routers running OSPF. Configured inter-VLAN routing, 802.1Q trunking, and validated connectivity via ping and traceroute across segmented networks.",
    tags: ["GNS3", "Cisco IOS", "OSPF", "VLANs", "802.1Q"],
    github: "https://github.com/khadijaourahou/network-simulation-gns3",
    category: "Networking",
    featured: true,
  },
  {
    id: 4,
    title: "Windows Server 2019 Administration",
    description: "Full server administration using PowerShell CLI only — no GUI. Active Directory, DNS zones, DHCP scopes, IIS virtual hosts, NTFS permissions, and group policies on Windows Server 2019 Core.",
    tags: ["Windows Server", "PowerShell", "Active Directory", "DNS", "DHCP", "IIS"],
    github: "https://github.com/khadijaourahou/windows-server-2019-administration",
    category: "Systems",
    featured: true,
  },
  {
    id: 5,
    title: "Encryption Performance Analysis",
    description: "Benchmark comparing AES-128, DES, and 3DES across ECB, CBC, and CFB modes on files from 1 MB to 10 MB. Python and Bash scripts measure execution time and CPU usage with matplotlib visualisation.",
    tags: ["Python", "Bash", "OpenSSL", "Cryptography", "matplotlib"],
    github: "https://github.com/khadijaourahou/encryption-performance-analysis",
    category: "Cybersecurity",
    featured: false,
  },
  {
    id: 6,
    title: "Facial Recognition Attendance System",
    description: "University attendance system built with a microservices architecture. Teachers capture a group photo via a Flutter mobile app; a FastAPI service identifies students using DeepFace, and results appear in real time on a React admin dashboard via WebSocket.",
    tags: ["Flutter", "Spring Boot", "FastAPI", "DeepFace", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/khadijaourahou/projet-absences",
    category: "AI / ML",
    featured: false,
  },
  {
    id: 7,
    title: "KotbiHousing — Student Housing Platform",
    description: "Full-stack platform connecting students and landlords. JWT authentication, dual-role access, advanced filters, rental request management. Multi-stage Docker build and GitLab CI/CD with GitFlow strategy.",
    tags: ["React", "Spring Boot", "Java", "JWT", "Docker", "GitLab CI/CD"],
    github: "https://github.com/khadijaourahou/projet-kotbihousing",
    category: "Web Dev",
    featured: false,
  },
  {
    id: 8,
    title: "Lung Cancer Classification",
    description: "Medical AI system using a CNN achieving ~97% accuracy on CT scan classification. React frontend, Flask API backend, MySQL database. Multilingual medical reports (FR/EN/AR) with electronic signature.",
    tags: ["Python", "TensorFlow", "CNN", "Flask", "React", "MySQL"],
    github: "https://github.com/khadijaourahou/lung-cancer-classification-app",
    category: "AI / ML",
    featured: false,
  },
  {
    id: 9,
    title: "Hospital Management System",
    description: "Laravel web application for clinic management — online appointment booking, symptom-based doctor suggestions, and an admin dashboard with full staff and scheduling management.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/khadijaourahou/hospital-management",
    category: "Web Dev",
    featured: false,
  },
  {
    id: 10,
    title: "HeatlyYum — Nutrition Android App",
    description: "Wellness app with diet assessment, macro calculator, recipe suggestions, water intake tracker, and an integrated nutrition chatbot. Built in Android Studio with Firebase backend.",
    tags: ["Android Studio", "Java", "Kotlin", "Firebase"],
    github: "https://github.com/khadijaourahou/heatlyyum",
    category: "Mobile",
    featured: false,
  },
  {
    id: 10,
    title: "FST Marrakech Website",
    description: "Front-end website for the Faculty of Sciences and Techniques. 20+ pages covering academic programs, departments, research labs, and student resources.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    github: "https://github.com/khadijaourahou/fstg-website",
    category: "Web Dev",
    featured: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "OSPF in Practice: Building a Multi-Area Network in GNS3",
    date: "Jan 2025",
    category: "Networking",
    excerpt: "How OSPF establishes neighbour adjacencies, floods LSAs, and converges after a link failure — with a hands-on walkthrough of a four-router GNS3 topology.",
    readTime: "6 min",
    tags: ["OSPF", "GNS3", "Cisco", "Routing"],
  },
  {
    id: 2,
    title: "AES vs DES: A Benchmark-Driven Comparison",
    date: "Feb 2025",
    category: "Cryptography",
    excerpt: "Real performance data comparing AES-128, DES, and 3DES across ECB, CBC, and CFB modes. Spoiler: DES has no place in modern systems.",
    readTime: "8 min",
    tags: ["AES", "DES", "Cryptography", "Python"],
  },
  {
    id: 3,
    title: "Deploying a SOC with Wazuh — From Zero to Alert",
    date: "Mar 2025",
    category: "Security",
    excerpt: "A practical guide to standing up Wazuh as an open-source EDR. Agent installation, SSH brute-force rules, and a first look at compliance dashboards.",
    readTime: "10 min",
    tags: ["Wazuh", "SOC", "Blue Team", "EDR"],
  },
  {
    id: 4,
    title: "Why Password Hashing Without Salt is Dangerous",
    date: "Apr 2025",
    category: "Security",
    excerpt: "Rainbow tables, preimage attacks, and why bcrypt or Argon2 should replace plain MD5 or SHA-1 for storing credentials in any production system.",
    readTime: "7 min",
    tags: ["Hashing", "bcrypt", "Argon2", "Security"],
  },
];
