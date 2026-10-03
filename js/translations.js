window.enTranslations = {
    profile: {
        greeting: "Hi, I'm",
        roles: [
            "Fullstack Developer",
            "Software Engineer",
            "System Architect & Analyst",
            "DevOps & Infrastructure",
            "Cybersecurity (Blue Team)",
            "IoT & AI Integrator"
        ],
        bio: "A Computer Science graduate ready to translate client visions and business needs into secure, scalable, and high-performance digital systems.",
        aboutMe: `<p>A Computer Science graduate from <strong>Pakuan University</strong> with a solid specialization in <strong>Software Engineering</strong> and <strong>System Architecture</strong>. Throughout my academic and professional journey, I have focused on actively designing, engineering, and deploying production-grade digital systems.</p>
            <p>I bring proven experience across the <em>Fullstack Web</em> ecosystem (Laravel, Livewire, TailwindCSS, Alpine.js), efficient <em>Relational Database</em> modeling, automated <em>DevOps (CI/CD, Docker)</em> pipelines, and IoT/AI integration (Computer Vision). My portfolio spans enterprise Academic Information Systems, interactive Geographic Information Systems (GIS), and ML-powered server intrusion monitoring.</p>
            <p>My core commitment is delivering robust, performant technology solutions hardened against cybersecurity vulnerabilities (OWASP Guidelines) that produce measurable value.</p>`,
        location: "Bogor, Indonesia"
    },
    ui: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            hireMe: "Hire Me"
        },
        hero: {
            viewPortfolio: "View Portfolio",
            contactMe: "Contact Me",
            downloadCv: "Download CV"
        },
        about: {
            title: "About Me",
            subtitle: "Background, specialization, and engineering approach."
        },
        skills: {
            title: "Skills & Expertise",
            subtitle: "Technologies, architectures, and tools I have mastered and applied across real-world projects."
        },
        learning: {
            title: "LEARNING PLATFORMS & CERTIFICATIONS"
        },
        projects: {
            title: "Featured Projects",
            subtitle: "A curated selection of featured works and digital systems I have engineered.",
            explore: "Explore Project",
            filterAll: "All Projects",
            filterWeb: "Web & Systems",
            filterIot: "IoT & AI",
            filterSecurity: "Cybersecurity",
            noProjects: "No projects found in this category."
        },
        contact: {
            title: `Get In <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Touch</span>`,
            subtitle: "Have a project in mind, digital system requirements, or collaborative opportunities? Feel free to reach out anytime!",
            talkTitle: "Let's Talk",
            talkDesc: "I'm always open to discussing new projects, software development ideas, or opportunities to contribute to your team.",
            emailLabel: "Email",
            phoneLabel: "Phone / WhatsApp",
            locationLabel: "Location",
            chatWhatsapp: "Chat on WhatsApp"
        },
        modal: {
            liveDemo: "Live Demo",
            sourceCode: "Source Code",
            close: "Close"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    projects: {
        1: {
            title: "Digital Collection - Literature Digitalization Lab Unpak",
            description: "Smart document archiving platform featuring OCR for instant text extraction from scanned documents, ultra-fast search, and production-grade security hardening.",
            fullDescription: `
                <p><strong>Digital Collection</strong> is a smart archiving platform designed specifically for the Literature Digitalization Laboratory of Pakuan University. This system focuses on structured historical literature management built with a Production-Grade Security Architecture.</p>
                <br>
                <p><strong>Key Features & Innovations:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Integrated OCR:</strong> Utilizes AI to read, extract, and index text from document images automatically.</li>
                    <li><strong>Content Management System (CMS):</strong> Dynamic administration panel for managing literature, metadata, and categories.</li>
                    <li><strong>High-Speed Search Engine:</strong> Enables researchers to instantly locate manuscripts and archives with sub-second response times.</li>
                </ul>
                <br>
                <p><strong>Security Implementations (OWASP):</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Brute-Force Prevention:</strong> Adaptive rate limiting and account throttling.</li>
                    <li><strong>RCE Prevention:</strong> Strict MIME-type validation and server-level file upload sanitization.</li>
                    <li><strong>XSS & CSRF Prevention:</strong> Comprehensive input sanitization and secure session encryption.</li>
                </ul>
            `
        },
        2: {
            title: "Smart Dropbox IoT (Smart Waste Sorter)",
            description: "Smart waste sorting bin based on IoT and Computer Vision using Raspberry Pi and YOLOv8 to automatically detect and segregate plastic bottles.",
            fullDescription: `
                <p><strong>Smart Dropbox</strong> is an intelligent waste sorting system based on <strong>Internet of Things (IoT)</strong> and <strong>Computer Vision</strong>. This system is designed to accurately detect and classify whether a disposed item is a recyclable plastic bottle or general waste.</p>
                <br>
                <p><strong>System Architecture & Workflow:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>IoT & Edge Computing:</strong> Employs a Raspberry Pi 3 Model B+ integrated with a dedicated camera module to automatically capture images upon trigger.</li>
                    <li><strong>Cloud AI Backend (VPS):</strong> Backend engineered with <strong>FastAPI</strong> (Python) and deployed using <strong>Docker</strong> containers on a VPS to handle model inference.</li>
                    <li><strong>Computer Vision:</strong> Powered by the <strong>YOLOv8</strong> deep learning model from Ultralytics alongside <strong>OpenCV</strong> to detect plastic containers in milliseconds.</li>
                </ul>
                <br>
                <p><strong>Hardware & 3D Model Integration:</strong></p>
                <p>Includes complete physical casing design for IoT components created using <strong>Tinkercad</strong>, custom-tailored to house sensors, servos, and lenses safely and ergonomically.</p>
            `
        },
        3: {
            title: "SIRESTA: Final Year Academic Management System",
            description: "Comprehensive Academic Information System to digitize the entire administrative workflow for final-year students (from Internships to Thesis).",
            fullDescription: `
                <p><strong>SIRESTA</strong> is an enterprise-scale Academic Information System designed specifically for the Computer Science Department at Pakuan University, fully digitizing administrative workflows from Internship to Graduation.</p>
                <br>
                <p><strong>Integrated Scope:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Internship registration, defense scheduling, and progress tracking.</li>
                    <li>Faculty advisor assignments, requirement checks, and official decree generation.</li>
                    <li>Proposal Seminar (Sempro) and Final Thesis Defense registrations.</li>
                    <li>Centralized archive and thesis completion tracking.</li>
                </ul>
                <br>
                <p><strong>Core Features & Architectural Logic:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Strict Academic Middleware:</strong> A 7-layer automated validation barrier enforcing prerequisite completion before progressing to subsequent stages.</li>
                    <li><strong>Role-Based Access Control (RBAC):</strong> Tailored interfaces for Department Administrators, Faculty Advisors, Examiners, and Students with mass reporting tools.</li>
                    <li><strong>Centralized Document Vault:</strong> Secure upload and audit workflows for formal academic documentation.</li>
                </ul>
            `
        },
        4: {
            title: "Arts & Culture Student Unit (USB) Web Portal",
            description: "Digital platform for the Arts and Culture Student Unit, complete with an art exhibition gallery, cultural news, and an automated CI/CD recruitment system.",
            fullDescription: `
                <p>The official portal for the <strong>Arts and Culture Student Unit (USB)</strong>, serving as a public communication hub, digital art exhibition gallery, and member onboarding system. Highlighted by a modern DevOps delivery lifecycle.</p>
                <br>
                <p><strong>Key Features:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Art & Culture Catalog:</strong> Dynamic showcase for digital art collections, cultural essays, past event archives, and upcoming schedules.</li>
                    <li><strong>Integrated Recruitment:</strong> Online member registration protected by request rate-limiting and anti-spam measures.</li>
                    <li><strong>Filament PHP CMS:</strong> Clean, responsive administrative control panel for effortless non-technical content management.</li>
                </ul>
                <br>
                <p><strong>DevOps & CI/CD Architecture:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Docker Containers:</strong> Built within reproducible isolated environments using <strong>Docker & Docker Compose</strong>.</li>
                    <li><strong>CI/CD Pipelines:</strong> Automated delivery powered by <strong>GitHub Actions</strong> and a self-hosted VM runner, handling code testing, builds, migrations, and cache warmups on push.</li>
                </ul>
            `
        },
        5: {
            title: "Sundaverse (Cultural Heritage GIS System)",
            description: "Enterprise-scale Geographic Information System (GIS) platform for interactive digital mapping, archiving, and preserving cultural heritage sites.",
            fullDescription: `
                <p><strong>Sundaverse</strong> is an enterprise GIS web platform engineered to catalog, map, and digitally preserve historical data and locations of national cultural heritage monuments.</p>
                <br>
                <p><strong>Key Features & Architecture:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Leaflet GIS Engine:</strong> Interactive vector map visualization with coordinate pinpointing tools for researchers and the general public.</li>
                    <li><strong>Livewire 3 & Alpine.js:</strong> Dynamic reactive search and filters operating without full page refreshes for snappy interactions.</li>
                    <li><strong>Filament Admin Console:</strong> Role-based access enabling researchers to securely catalog historical artifacts and high-res imagery.</li>
                </ul>
                <br>
                <p><strong>Security & Performance:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>OWASP Hardening:</strong> Rigorous validation against XSS in geographic payloads and protection against mass-assignment risks.</li>
                    <li><strong>Query Optimization:</strong> Selective column queries that curb excessive data exposure while optimizing server RAM utilization.</li>
                </ul>
            `
        },
        6: {
            title: "Lembur Sawah (Tourism Village Platform)",
            description: "Integrated Tourism Village platform featuring interactive area mapping, tour package reservations, and a local SME e-commerce marketplace.",
            fullDescription: `
                <p><strong>Lembur Sawah</strong> is an integrated digital tourism platform empowering rural communities by promoting local destinations while fostering digital commerce for village artisans.</p>
                <br>
                <p><strong>Core Modules:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Local SME E-Commerce:</strong> Digital storefront connecting village artisans and culinary producers directly to travelers.</li>
                    <li><strong>Tour Packages & Event Agenda:</strong> Interactive booking interfaces and dynamically updated cultural event calendars.</li>
                    <li><strong>Interactive Village Mapping (GIS):</strong> Pinpoint maps guiding visitors across scenic spots, lodgings, and facilities.</li>
                    <li><strong>Admin CMS:</strong> Streamlined management for articles, image carousels, testimonials, and village announcements.</li>
                </ul>
            `
        },
        7: {
            title: "SIMAWA (Student Affairs Information System)",
            description: "Architecture Blueprint (PRD), relational database schema, and UI/UX Prototype for digitizing Student Organizations, financial audits, and scholarships.",
            fullDescription: `
                <p><strong>SIMAWA</strong> is a comprehensive system architecture design (Product Requirements Document & Prototyping) serving as the university's <em>Single Source of Truth</em> for student organization funding, activities, and financial audits.</p>
                <br>
                <p><strong>System Scope:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Proposal & Accountability Workflows:</strong> Standardized digital pipelines for budget approvals and expense auditing.</li>
                    <li><strong>Internal Audit Portal:</strong> Oversight dashboard for university auditors to verify disbursements against supporting receipts.</li>
                    <li><strong>Scholarship & Competition Grants:</strong> Scoring matrices and application portals for student scholarship evaluation.</li>
                </ul>
                <br>
                <p><strong>Software Architecture:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Strict RBAC:</strong> Database architecture isolating 5 discrete roles: Students, Organizations, Evaluators, Admins, and Auditors.</li>
                    <li><strong>TALL Stack Blueprint:</strong> Architecture planned around Tailwind, Alpine, Laravel, and Livewire for optimal development velocity and reliability.</li>
                </ul>
            `
        },
        8: {
            title: "SSHGuard: AI-Driven Server Security Monitoring",
            description: "Real-time VPS security monitoring system detecting SSH brute-force intrusions using Isolation Forest machine learning and statistical Z-Score analysis.",
            fullDescription: `
                <p><strong>SSHGuard</strong> is my undergraduate thesis project—an automated security monitoring system designed to defend Virtual Private Servers (VPS) against real-time SSH brute-force dictionary attacks.</p>
                <br>
                <p><strong>Core Architecture & Technologies:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Hybrid Anomaly Detection:</strong> Combines Z-Score statistical thresholds for extreme traffic spikes with Isolation Forest unsupervised machine learning for subtle attack signatures.</li>
                    <li><strong>Real-time Log Processing:</strong> Continuously streams and parses <code>/var/log/auth.log</code> on Linux servers, extracting temporal features within rolling 1-minute time windows.</li>
                    <li><strong>Flask & Tailwind Dashboard:</strong> Clear graphical interface allowing sysadmins to inspect server threat states (NORMAL, WARNING, CRITICAL) and top attacker IP addresses.</li>
                </ul>
                <br>
                <p><strong>Performance & Empirical Validation:</strong></p>
                <p>Stress-tested against live simulated penetration tests (Hydra over Kali Linux), reaching <strong>99.90% Recall</strong> and <strong>96.81% Accuracy</strong> over 14,158 operational samples.</p>
            `
        }
    }
};
