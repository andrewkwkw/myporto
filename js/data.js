const portfolioData = {
    profile: {
        name: "Andriawan",
        roles: [
            "Software Engineer",
            "System Architect and Analyst",
            "Beginner DevOps",
            "Cybersecurity (Blue Team)",
            "IoT & AI Integrator"
        ],
        bio: "A Computer Science graduate ready to translate client visions and needs into secure, scalable, and elegant digital systems.",
        aboutMe: "<p>A Computer Science graduate from Pakuan University with a strong foundation in <strong>Software Engineering</strong> and <strong>System Architecture</strong>. During my academic journey, I didn't just learn the theory—I directly designed and built various systems from real-world projects I acquired.</p><p>I am experienced in implementing <em>Fullstack Development</em> (Laravel, Livewire, Tailwind), designing efficient <em>Relational Databases</em>, and managing <em>DevOps</em> and IoT infrastructures. My practical experience ranges from building complex Academic Information Systems and integrating digital mapping (GIS) to implementing artificial intelligence (Computer Vision).</p><p>My main focus is delivering functional technology solutions that adhere to cybersecurity standards (OWASP) and create a measurable positive impact.</p>",
        email: "andriawan081003@gmail.com",
        phone: "+62 812-3456-7890",
        location: "Bogor, Indonesia",
        greeting: "Hi, I'm"
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/andrewkwkw",
            icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>`
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/andriawan-s-kom-0b77bb220/",
            icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>`
        }
    ],
    skills: [
        "Laravel", "TailwindCSS", "Alpine.js", "Livewire",
        "FastAPI", "MySQL", "Docker", "Git & GitHub Actions (CI/CD)",
        "Linux Server", "Cybersecurity (Blue Team)", "OWASP Guidelines",
        "Internet of Things", "System Architecture", "Networking", "Google Stich", "Figma"
    ],
    learningPlatforms: [
        {
            name: "TryHackMe",
            url: "https://tryhackme.com/p/andwan",
            image: "https://tryhackme.com/img/favicon.png"
        },
        {
            name: "LetsDefend",
            url: "https://app.letsdefend.io/user/brokolot",
            image: "https://play-lh.googleusercontent.com/C1vCNTX_VjOFLYoGloRtt_AvC3GtPK1NSepbIlgKK93oaODhJBxkKE6Xu7NjZnciqNsq_k4s2G2K2i5QhYDI=w240-h480-rw"
        },
        {
            name: "Introduction to <br> Cybersecurity",
            url: "https://www.credly.com/badges/2d85e9c4-0c29-4792-aeea-3ca2398df7e0",
            image: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/introduction_to_cybersecurity_16.png",
        },
        {
            name: "Networking Basics",
            url: "https://www.credly.com/badges/90a774ee-3607-442f-8855-f2d0f5711acc",
            image: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/ec7b044a-3368-4bc3-8eaf-1872a41780b2.png",
        }
    ],
    projects: [
        {
            id: 1,
            title: "Digital Collection by Lab Digitalisasi Sastra Universitas Pakuan",
            description: "Smart document archiving system equipped with OCR for text extraction on images, rapid search, and robust security protection.",
            fullDescription: `
                <p>Digital Collection is a smart archiving platform designed specifically for the Literature Digitalization Laboratory of Pakuan University. This system focuses not only on advanced document management but is also built with a Production-Grade Security Architecture.</p>
                <br>
                <p><strong>Key Features & Innovations:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>OCR:</strong> Utilizes AI to read and extract text from document images.</li>
                    <li><strong>CMS:</strong> Content Management System for managing related content easily and dynamically.</li>
                </ul>
                <br>
                <p><strong>Security Implementations</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Brute-Force Prevention</strong></li>
                    <li><strong>RCE Prevention</strong></li>
                    <li><strong>XSS Prevention</strong></li>
                </ul>
            `,
            image: "assets/dcs/thumbnail.png",
            tags: ["Laravel", "TailwindCSS", "Alpine.js", "MySQL"],
            demoLink: "https://digitalcollection.unpak.ac.id",
            repoLink: "https://github.com/andrewkwkw/digitalcollections.git"
        },
        {
            id: 2,
            title: "Smart Dropbox IoT",
            description: "Smart waste sorting bin based on IoT and Computer Vision using Raspberry Pi and YOLOv8 to automatically segregate plastic bottles.",
            fullDescription: `
                <p>Smart Dropbox is an intelligent waste sorting system based on <strong>Internet of Things (IoT)</strong> and <strong>Computer Vision</strong>. This system is designed to accurately detect whether a disposed object is a plastic bottle or another item.</p>
                <br>
                <p><strong>System Architecture:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>IoT & Edge Computing:</strong> Uses a Raspberry Pi 3 Model B+ integrated with a Raspberry Pi camera module. It automatically captures an image when an object enters the bin.</li>
                    <li><strong>Cloud AI (VPS):</strong> The backend is built with <strong>FastAPI</strong> (Python) and deployed using <strong>Docker</strong> on a VPS. It receives images from the IoT device for heavy computational processing.</li>
                    <li><strong>Computer Vision:</strong> Relies on the <strong>YOLOv8</strong> artificial intelligence model from Ultralytics combined with <strong>OpenCV</strong> to detect plastic bottles in milliseconds.</li>
                </ul>
                <br>
                <p><strong>Hardware & 3D Model Integration:</strong></p>
                <p>Beyond software, this project also includes the physical design of a protective cover for the IoT components. This 3D design was created using <strong>Tinkercad</strong>, specifically tailored to house sensors, microcontrollers, and cameras aesthetically and functionally.</p>
            `,
            image: "assets/dropbox/thumbnail.jpg",
            tags: ["Python", "FastAPI", "YOLOv8", "Raspberry Pi", "Docker", "Tinkercad", "Ubuntu Server", "ESP32"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 3,
            title: "SIRESTA: Final Year Project Registration System",
            description: "Comprehensive Academic Information System to digitize the entire administrative workflow for final-year students (from Internships to Thesis).",
            fullDescription: `
                <p><strong>SIRESTA</strong> is a large-scale Management Information System designed specifically for the Computer Science Study Program at Pakuan University. This system fully digitizes bureaucratic processes ranging from Field Internships to Thesis graduation.</p>
                <br>
                <p><strong>Integrated System Scope:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Field Internship & Seminar Registration.</li>
                    <li>Submission for Academic Advisors & Final Task Decrees (SK).</li>
                    <li>Registration for Proposal Seminars & Final Defense.</li>
                    <li>Final Thesis Registration & Student Tracking System.</li>
                </ul>
                <br>
                <p><strong>Core Features & Logic:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Strict Academic Middleware:</strong> Implements a 7-layer automated <em>Middleware</em> validation that blocks student access if previous academic requirements are unmet (e.g., cannot register for a Proposal Seminar if the Internship is not passed).</li>
                    <li><strong>Role-Based Access Control (RBAC):</strong> A dedicated panel for Department Admins to verify documents and generate mass reports (Data Export) dynamically.</li>
                    <li><strong>Centralized Document Management:</strong> A secure upload system for legal documents (Approval Letters, Decrees, etc.) that directly integrates with the Admin panel.</li>
                </ul>
            `,
            image: "assets/siresta/thumbnail.png",
            tags: ["Laravel", "TailwindCSS", "MySQL", "Middleware Logic", "RBAC"],
            demoLink: "#",
            repoLink: "https://github.com/andrewkwkw/siresta_ilkom.git"
        },
        {
            id: 4,
            title: "Arts & Culture Student Unit (USB) Web Portal",
            description: "Digital platform for the Arts and Culture Student Unit, complete with an art gallery, cultural news, and an Open Recruitment system.",
            fullDescription: `
                <p>The official website for the <strong>Arts and Culture Unit (USB)</strong> serving as a public information portal, digital art exhibition gallery, and membership management tool. This project highlights the implementation of modern DevOps cycles in its development.</p>
                <br>
                <p><strong>Key Features:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Art & Culture Catalog:</strong> Dynamic modules to publish Artworks, Cultural Articles, Archives, and Unit Projects.</li>
                    <li><strong>Integrated Oprec System:</strong> An online <em>Open Recruitment</em> feature equipped with <em>Rate Limiting / Throttling</em> protection to prevent spam attacks.</li>
                    <li><strong>Filament Admin Panel:</strong> Utilizes the <em>Filament PHP</em> framework as an elegant and powerful <em>Content Management System (CMS)</em> for administrators to manage all web content.</li>
                </ul>
                <br>
                <p><strong>DevOps & CI/CD Architecture:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Dockerized Environment:</strong> Built and run within isolated containers using <strong>Docker & Docker Compose</strong>.</li>
                    <li><strong>Automated Deployment (CI/CD):</strong> Automated deployment pipeline using <strong>GitHub Actions</strong> connected to a <em>Self-Hosted Runner</em> on a Virtual Machine (VM). Every code push automatically triggers pull, build, migrate, and cache optimization processes on the Production server.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel", "Filament PHP", "Docker", "CI/CD", "GitHub Actions"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 5,
            title: "Sundaverse (Cultural Heritage GIS System)",
            description: "An Enterprise-scale Geographic Information System (GIS) platform for interactive mapping and archiving of Cultural Heritage sites.",
            fullDescription: `
                <p><strong>Sundaverse</strong> is a comprehensive digital platform that combines modern web technology with a <strong>Geographic Information System (GIS)</strong>. This platform aims to record, map, and digitally preserve historical data of Cultural Heritage sites.</p>
                <br>
                <p><strong>Key Features & Architecture:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>GIS & Leaflet Integration:</strong> Features an interactive Public Distribution Map and a <em>Click-to-Get-Coordinate</em> tool in the Admin panel, making it easy for researchers to pinpoint cultural site coordinates instantly.</li>
                    <li><strong>Livewire & Alpine.js:</strong> Utilizes <em>Livewire 3</em> for lightning-fast search and filtering experiences (without page reloads), delivering UX on par with Single Page Applications (SPA).</li>
                    <li><strong>Filament Admin Dashboard:</strong> A dedicated panel with <em>Role-Based Access</em> for researchers to securely manage cultural object data.</li>
                </ul>
                <br>
                <p><strong>Security & Performance Focus:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>OWASP Standards:</strong> Hardened with vulnerability mitigation systems, including <em>XSS Injection</em> protection on map inputs and prevention of <em>Mass Assignment</em> exploits.</li>
                    <li><strong>Query Diet (DB Optimization):</strong> Implemented a <em>Selective Select</em> architecture to prevent hidden data leaks (Excessive Data Exposure) while compressing server RAM usage to optimal levels.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel", "Livewire 3", "GIS / Leaflet", "TailwindCSS", "Filament"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 6,
            title: "Lembur Sawah (Tourism Village)",
            description: "An integrated Tourism Village Information System platform featuring interactive mapping, tour package management, and a local SME e-commerce marketplace.",
            fullDescription: `
                <p><strong>Lembur Sawah</strong> is a digital initiative for a Tourism Village presented as a comprehensive website platform. It serves a dual purpose as a spearhead for tourism promotion and a digital economic driver for local SMEs.</p>
                <br>
                <p><strong>Key Features & Modules:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>SME E-Commerce Marketplace:</strong> An integrated digital store system to market local crafts and culinary products directly to tourists online.</li>
                    <li><strong>Tour Package & Agenda Management:</strong> Interactive modules to display detailed Tour Packages and a dynamically managed calendar of cultural events.</li>
                    <li><strong>Interactive Mapping (GIS):</strong> Equipped with a digital map feature to plot tourist attraction locations and supporting facilities within the village area.</li>
                    <li><strong>Dynamic Content Management:</strong> A full CMS architecture allowing village Admins to manage Articles, Galleries, FAQs, and Web Slider settings without developer assistance.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel 11", "E-Commerce", "GIS Mapping", "Tourism System", "Filament"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 7,
            title: "SIMAWA (Student Affairs Information System)",
            description: "Architecture Design (PRD) & UI/UX Prototype for the digitalization of Student Organization administration, Financial Audits, and University Scholarships.",
            fullDescription: `
                <p><strong>SIMAWA</strong> is currently in the <em>Product Requirements Document (PRD)</em> and <em>Prototyping</em> phase. This project is a major initiative to build a <em>Single Source of Truth</em> for all student activities, funding, and reporting at the university level.</p>
                <br>
                <p><strong>System Scope:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Proposal & Accountability Report (LPJ) Management:</strong> A centralized digital workflow for Student Organizations to submit activity proposals and upload Accountability Reports.</li>
                    <li><strong>Internal Audit Module:</strong> An exclusive feature for university <em>Auditors</em> to track the transparency of campus fund usage, comparing disbursed budgets against LPJ evidence.</li>
                    <li><strong>Competition & Scholarship Management:</strong> A portal for students to claim competition appreciation funds and apply for scholarships, complete with a dedicated scoring panel for Judges/Lecturers.</li>
                </ul>
                <br>
                <p><strong>Software Architecture Design:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Role-Based Access Control (RBAC):</strong> A relational database design (ERD) and routing system that strictly separates 5 access doors: Students, Organizations, Judges, Student Affairs Staff (Admin), and Internal Auditors.</li>
                    <li><strong>Modern Tech-Stack Proposal:</strong> Planned to be built using the <em>TALL Stack</em> ecosystem (Tailwind, Alpine, Laravel, Livewire) and <strong>Filament PHP</strong> to accelerate the development of these 5 complex Dashboard variants.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            tags: ["System Architecture", "PRD", "UI/UX Prototype", "Database Design"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 8,
            title: "SSHGuard: AI-Driven Server Security Monitoring System",
            description: "A real-time SSH brute-force detection system for VPS environments, leveraging Isolation Forest and Z-Score for proactive threat mitigation.",
            fullDescription: `
                <p><strong>SSHGuard</strong> is my Final Year Thesis project—an automated security monitoring system designed to protect Virtual Private Servers (VPS) from SSH brute-force attacks in real-time.</p>
                <br>
                <p><strong>Core Architecture & Technologies:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Hybrid Anomaly Detection:</strong> Integrates statistical analysis (Z-Score) to detect extreme volume spikes and an unsupervised machine learning algorithm (Isolation Forest) to isolate multivariate attack patterns.</li>
                    <li><strong>Real-time Log Processing:</strong> Continuously parses <code>/var/log/auth.log</code> to perform temporal feature engineering (failed count, unique user count, invalid user ratio) within a 1-minute time window.</li>
                    <li><strong>Flask & Tailwind Dashboard:</strong> Provides a comprehensive web interface for administrators to monitor server security events, identify top attacker IPs, and view threat severity levels (NORMAL, WARNING, CRITICAL) instantly.</li>
                </ul>
                <br>
                <p><strong>Performance & Evaluation:</strong></p>
                <p>Empirically tested against live penetration testing simulations (Hydra on Kali Linux), the model achieved a <strong>99.90% Recall</strong> and <strong>96.81% Accuracy</strong> across 14,158 operational data samples—proving its exceptional sensitivity in catching dictionary attacks based on a Security-First defense principle.</p>
            `,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Machine Learning", "Scikit-Learn", "Flask", "TailwindCSS", "Cybersecurity", "Linux Server"],
            demoLink: "#",
            repoLink: "#"
        }
    ]
};
