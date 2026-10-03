const portfolioData = {
    profile: {
        name: "Andriawan",
        email: "andriawan081003@gmail.com",
        phone: "+62 812-9569-1060",
        whatsappUrl: "https://wa.me/6281295691060?text=Halo%20Andriawan,%20saya%20tertarik%20untuk%20berdiskusi%20dengan%20Anda.",
        greeting: "Halo, Saya",
        roles: [
            "Fullstack Developer",
            "Software Engineer",
            "System Architect & Analyst",
            "DevOps & Infrastructure",
            "Cybersecurity (Blue Team)",
            "IoT & AI Integrator"
        ],
        bio: "Lulusan Ilmu Komputer yang berfokus menerjemahkan kebutuhan bisnis menjadi sistem digital yang aman, terukur, dan berkinerja tinggi.",
        aboutMe: `<p>Lulusan S1 Ilmu Komputer dari <strong>Universitas Pakuan</strong> dengan spesialisasi dalam <strong>Software Engineering</strong> dan <strong>System Architecture</strong>. Sepanjang masa studi hingga penanganan proyek profesional, saya terbiasa tidak hanya menguasai teori, melainkan langsung merancang, membangun, dan mengelola sistem perangkat lunak skala produksi.</p>
            <p>Saya berpengalaman dalam ekosistem <em>Fullstack Web</em> (Laravel, Livewire, TailwindCSS, Alpine.js), perancangan <em>Relational Database</em> yang efisien, otomasi alur <em>DevOps (CI/CD, Docker)</em>, serta integrasi teknologi IoT dan kecerdasan buatan (Computer Vision). Portofolio saya mencakup Sistem Informasi Akademik berlogika middleware bertingkat, pemetaan geografis digital (GIS), hingga sistem pemantauan keamanan server berbasis Machine Learning.</p>
            <p>Fokus utama saya adalah menghadirkan solusi teknologi yang kokoh, patuh pada standar keamanan siber (OWASP), dan memberikan dampak positif yang terukur bagi pengguna.</p>`,
        location: "Bogor, Indonesia"
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/andrewkwkw",
            icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>`
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/andriawan-0b77bb220/",
            icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>`
        }
    ],
    skills: [
        "Laravel", "TailwindCSS", "Alpine.js", "Livewire",
        "FastAPI", "MySQL", "Docker", "Git & GitHub Actions (CI/CD)",
        "Linux Server (Ubuntu)", "Cybersecurity (Blue Team)", "OWASP Guidelines",
        "Internet of Things (IoT)", "System Architecture", "Computer Networking", "Figma"
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
            name: "Intro to Cybersecurity",
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
            category: "web",
            title: "Digital Collection - Lab Digitalisasi Sastra Universitas Pakuan",
            description: "Sistem pengarsipan dokumen cerdas yang dilengkapi OCR untuk ekstraksi teks gambar secara otomatis, pencarian cepat, dan arsitektur keamanan tingkat produksi.",
            fullDescription: `
                <p><strong>Digital Collection</strong> adalah platform pengarsipan digital cerdas yang dikembangkan khusus untuk Laboratorium Digitalisasi Sastra Universitas Pakuan. Sistem ini memfasilitasi manajemen naskah sastra bersejarah secara terstruktur dengan fokus tinggi pada integritas data dan keamanan sistem.</p>
                <br>
                <p><strong>Fitur Unggulan & Inovasi:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>OCR Terintegrasi (Optical Character Recognition):</strong> Memanfaatkan AI untuk mengekstraksi dan mengindeks teks dari berkas pindaian gambar naskah kuno secara akurat.</li>
                    <li><strong>Content Management System (CMS):</strong> Panel admin fleksibel untuk mengelola metadata, kategori arsip, dan publikasi kurasi literatur secara dinamis.</li>
                    <li><strong>Mesin Pencarian Berkecepatan Tinggi:</strong> Memudahkan peneliti dan mahasiswa menemukan naskah berdasarkan kata kunci dalam hitungan detik.</li>
                </ul>
                <br>
                <p><strong>Implementasi Keamanan Sistem (OWASP):</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Pencegahan Brute-Force:</strong> Perlindungan pembatasan laju permintaan (rate limiting) dan mekanisme kunci akun otomatis.</li>
                    <li><strong>Pencegahan RCE (Remote Code Execution):</strong> Validasi MIME-type ketat dan sanitasi nama berkas unggahan pada level server.</li>
                    <li><strong>Mitigasi XSS & CSRF:</strong> Sanitasi konten HTML secara menyeluruh serta perlindungan token sesi terenkripsi.</li>
                </ul>
            `,
            image: "assets/dcs/thumbnail.png",
            tags: ["Laravel", "TailwindCSS", "Alpine.js", "MySQL", "OCR", "OWASP"],
            demoLink: "https://digitalcollection.unpak.ac.id",
            repoLink: "https://github.com/andrewkwkw/digitalcollections.git"
        },
        {
            id: 2,
            category: "iot",
            title: "Smart Dropbox IoT (Pemilah Sampah Cerdas)",
            description: "Tempat sampah pemilah otomatis berbasis IoT dan Computer Vision menggunakan Raspberry Pi dan model AI YOLOv8 untuk mendeteksi botol plastik.",
            fullDescription: `
                <p><strong>Smart Dropbox</strong> adalah inovasi tempat sampah cerdas berbasis <strong>Internet of Things (IoT)</strong> dan <strong>Computer Vision</strong>. Perangkat ini dirancang untuk mendeteksi, mengklasifikasi, dan memilah objek buangan secara otomatis begitu sampah dimasukkan ke wadah penerimaan.</p>
                <br>
                <p><strong>Arsitektur Sistem & Alur Kerja:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>IoT & Edge Computing:</strong> Menggunakan Raspberry Pi 3 Model B+ yang terintegrasi dengan modul kamera. Begitu sensor mendeteksi objek masuk, sistem langsung memicu pengambilan gambar beresolusi tinggi.</li>
                    <li><strong>Backend Cloud AI (VPS):</strong> Backend dirancang menggunakan <strong>FastAPI (Python)</strong> dan dikemas dalam container <strong>Docker</strong> pada server VPS untuk memproses inferensi deep learning secara cepat.</li>
                    <li><strong>Computer Vision (YOLOv8):</strong> Mengadopsi arsitektur model <strong>YOLOv8</strong> dari Ultralytics yang dikombinasikan dengan <strong>OpenCV</strong> untuk mendeteksi dan mengklasifikasikan botol plastik dalam hitungan milidetik.</li>
                </ul>
                <br>
                <p><strong>Desain Model 3D & Hardware:</strong></p>
                <p>Selain pengembangan software, proyek ini mencakup perancangan casing fisik pelindung komponen IoT. Model 3D dirancang menggunakan <strong>Tinkercad</strong>, disesuaikan secara presisi untuk menempatkan kamera, mikrokontroler, dan servo pemilah secara aman dan estetis.</p>
            `,
            image: "assets/dropbox/thumbnail.jpg",
            tags: ["Python", "FastAPI", "YOLOv8", "Raspberry Pi", "Docker", "Tinkercad", "OpenCV"],
            demoLink: "https://basade.unpak.ac.id/login",
            repoLink: "#"
        },
        {
            id: 3,
            category: "web",
            title: "SIRESTA: Sistem Registrasi Tugas Akhir Ilkom",
            description: "Sistem Informasi Akademik terintegrasi untuk mendigitalkan seluruh siklus administrasi tugas akhir mahasiswa (dari PKL hingga pendaftaran Skripsi).",
            fullDescription: `
                <p><strong>SIRESTA</strong> adalah Sistem Informasi Manajemen berskala institusi yang dikembangkan khusus untuk Program Studi Ilmu Komputer Universitas Pakuan. Sistem ini mendigitalkan seluruh rantai birokrasi tugas akhir mahasiswa.</p>
                <br>
                <p><strong>Cakupan Sistem Terintegrasi:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li>Pendaftaran dan persetujuan Praktik Kerja Lapangan (PKL) serta seminar hasil.</li>
                    <li>Pengajuan dosen pembimbing skripsi, verifikasi persyaratan, dan pencetakan SK Tugas Akhir.</li>
                    <li>Pendaftaran Seminar Proposal (Sempro) dan Kolokium/Sidang Skripsi.</li>
                    <li>Pusat registrasi tugas akhir, riwayat revisi berkas, dan pelacakan progres kelulusan mahasiswa.</li>
                </ul>
                <br>
                <p><strong>Fitur Unggulan & Logika Sistem:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Strict Academic Middleware:</strong> Mengimplementasikan validasi <em>Middleware</em> 7-tingkat otomatis yang memvalidasi prasyarat akademik (mahasiswa tidak dapat melangkah ke tahap Sempro jika PKL belum disetujui).</li>
                    <li><strong>Role-Based Access Control (RBAC):</strong> Panel khusus untuk Admin Program Studi, Koordinator TA, Dosen, dan Mahasiswa, dilengkapi export rekapitulasi data massal.</li>
                    <li><strong>Manajemen Dokumen Terpusat:</strong> Pengunggahan dan verifikasi berkas legal (Surat Persetujuan, Lembar Pengesahan, SK) secara terstruktur.</li>
                </ul>
            `,
            image: "assets/siresta/thumbnail.png",
            tags: ["Laravel", "TailwindCSS", "MySQL", "Middleware Logic", "RBAC", "PHP"],
            demoLink: "#",
            repoLink: "https://github.com/andrewkwkw/siresta_ilkom.git"
        },
        {
            id: 4,
            category: "web",
            title: "Portal Web Unit Seni Budaya (USB)",
            description: "Platform digital Unit Kegiatan Mahasiswa Seni Budaya lengkap dengan galeri karya seni, warta budaya, dan sistem rekrutmen terotomasi CI/CD.",
            fullDescription: `
                <p>Portal web resmi <strong>Unit Seni Budaya (USB)</strong> yang berfungsi sebagai pusat informasi kegiatan, galeri pameran karya seni digital mahasiswa, dan manajemen keanggotaan. Proyek ini mengedepankan siklus modern DevOps dalam proses pengembangan dan deployment.</p>
                <br>
                <p><strong>Fitur & Modul Utama:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Katalog Seni & Budaya:</strong> Modul dinamis untuk mempublikasikan karya seni rupa, esai budaya, arsip pertunjukan, dan portofolio anggota.</li>
                    <li><strong>Sistem Open Recruitment Terintegrasi:</strong> Pendaftaran anggota baru online yang dilengkapi perlindungan <em>Rate Limiting / Throttling</em> untuk mencegah spam.</li>
                    <li><strong>Filament PHP Admin Panel:</strong> Dashboard CMS elegan yang memudahkan pengurus organisasi mengelola seluruh isi situs tanpa memerlukan keahlian koding.</li>
                </ul>
                <br>
                <p><strong>Arsitektur DevOps & CI/CD:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Dockerized Environment:</strong> Dijalankan dalam container terisolasi menggunakan <strong>Docker & Docker Compose</strong> demi reliabilitas lingkungan rilis.</li>
                    <li><strong>Automated Deployment (CI/CD):</strong> Pipeline otomatis berbasis <strong>GitHub Actions</strong> yang terhubung ke <em>Self-Hosted Runner</em> pada server Virtual Machine (VM). Setiap update branch utama akan memicu pull, build aset, migrasi database, dan optimasi cache di server produksi.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel", "Filament PHP", "Docker", "CI/CD", "GitHub Actions", "TailwindCSS"],
            demoLink: "https://ukmsenibudaya.unpak.ac.id/",
            repoLink: "#"
        },
        {
            id: 5,
            category: "web",
            title: "Sundaverse (Sistem GIS Pemetaan Cagar Budaya)",
            description: "Platform Sistem Informasi Geografis (GIS) interaktif skala enterprise untuk pemetaan digital, pengarsipan, dan pelestarian cagar budaya nusantara.",
            fullDescription: `
                <p><strong>Sundaverse</strong> adalah platform digital inovatif yang mengintegrasikan teknologi web modern dengan <strong>Geographic Information System (GIS)</strong>. Platform ini bertujuan mendokumentasikan, memetakan, dan melestarikan data historis cagar budaya nusantara secara interaktif.</p>
                <br>
                <p><strong>Fitur & Arsitektur Utama:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Integrasi GIS & Leaflet:</strong> Peta interaktif publik dengan layer titik koordinat cagar budaya dan fitur <em>Click-to-Get-Coordinate</em> pada panel admin untuk penentuan titik situs secara akurat.</li>
                    <li><strong>Livewire 3 & Alpine.js:</strong> Navigasi dan penyaringan data instan tanpa refresh halaman (SPA-like experience), menghasilkan interaktivitas pengguna yang mulus.</li>
                    <li><strong>Filament Admin Dashboard:</strong> Dashboard manajemen data berbasis hak akses untuk peneliti dalam mengelola catatan sejarah dan dokumentasi foto.</li>
                </ul>
                <br>
                <p><strong>Keamanan Sistem & Optimasi Database:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Standar OWASP:</strong> Proteksi terhadap serangan <em>XSS Injection</em> pada input koordinat peta dan proteksi eksploitasi <em>Mass Assignment</em>.</li>
                    <li><strong>Query Diet (Optimasi Database):</strong> Menerapkan arsitektur <em>Selective Select</em> untuk mencegah kebocoran data tersembunyi (Excessive Data Exposure) sekaligus menekan beban memori server.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel", "Livewire 3", "GIS / Leaflet", "TailwindCSS", "Filament PHP"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 6,
            category: "web",
            title: "Lembur Sawah (Sistem Informasi Desa Wisata)",
            description: "Platform terpadu desa wisata yang menghadirkan peta wisata interaktif, pengelolaan paket tur edukasi, dan marketplace e-commerce produk UMKM lokal.",
            fullDescription: `
                <p><strong>Lembur Sawah</strong> adalah inisiatif digitalisasi desa wisata yang diwujudkan melalui platform web komprehensif. Platform ini berfungsi ganda: sebagai etalase promosi pariwisata daerah sekaligus pendorong ekonomi digital bagi pelaku UMKM desa.</p>
                <br>
                <p><strong>Modul & Fitur Unggulan:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Marketplace UMKM Lokal:</strong> Sistem katalog dan pesanan produk khas desa untuk memperluas pasar kerajinan dan kuliner lokal secara daring.</li>
                    <li><strong>Manajemen Paket Tur & Agenda:</strong> Penyajian paket wisata edukasi alam dan kalender acara kebudayaan yang terkelola secara dinamis.</li>
                    <li><strong>Peta Wisata Interaktif (GIS):</strong> Peta digital penunjuk lokasi daya tarik wisata, fasilitas umum, dan penginapan di kawasan desa.</li>
                    <li><strong>CMS Berbasis Filament:</strong> Pengelolaan artikel blog, galeri multimedia, dan ulasan pengunjung secara mandiri oleh tim pengelola desa.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel 11", "E-Commerce", "GIS Mapping", "Tourism System", "Filament"],
            demoLink: "https://lembursawah.com/",
            repoLink: "#"
        },
        {
            id: 7,
            category: "web",
            title: "SIMAWA (Sistem Informasi Kemahasiswaan)",
            description: "Perancangan Arsitektur (PRD), permodelan basis data, dan Prototipe UI/UX untuk digitalisasi administrasi Ormawa, audit dana, dan beasiswa.",
            fullDescription: `
                <p><strong>SIMAWA</strong> merupakan cetak biru perancangan arsitektur sistem informasi (Product Requirements Document & Prototyping) berskala enterprise sebagai <em>Single Source of Truth</em> pengelolaan seluruh aktivitas kemahasiswaan, pendanaan ormawa, dan audit keuangan kampus.</p>
                <br>
                <p><strong>Ruang Lingkup Sistem:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Alur Pengajuan Proposal & LPJ:</strong> Alur digital terpusat bagi Organisasi Mahasiswa untuk mengajukan rencana kegiatan, mencairkan anggaran, dan mengunggah Laporan Pertanggungjawaban (LPJ).</li>
                    <li><strong>Modul Audit Keuangan Internal:</strong> Fitur khusus bagi Auditor Perguruan Tinggi untuk memantau transparansi penyerapan anggaran secara akuntabel terhadap bukti transaksi.</li>
                    <li><strong>Pusat Prestasi & Beasiswa:</strong> Pengajuan insentif prestasi perlombaan mahasiswa serta pendaftaran beasiswa dengan panel penilaian berbobot bagi dewan juri/dosen.</li>
                </ul>
                <br>
                <p><strong>Desain Arsitektur Perangkat Lunak:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Role-Based Access Control (RBAC):</strong> Desain skema basis data relasional (ERD) yang mengisolasi 5 pintu gerbang akses: Mahasiswa, Pengurus Ormawa, Juri Penilai, Staf Kemahasiswaan (Admin), dan Auditor Internal.</li>
                    <li><strong>Fondasi Modern TALL Stack:</strong> Direncanakan dibangun menggunakan ekosistem TALL Stack (Tailwind, Alpine, Laravel, Livewire) dan Filament PHP guna memastikan efisiensi dan performa tinggi.</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            tags: ["System Architecture", "PRD", "UI/UX Prototype", "Database Design", "ERD"],
            demoLink: "https://simawa.unpak.ac.id/",
            repoLink: "#"
        },
        {
            id: 8,
            category: "security",
            title: "SSHGuard: Monitoring Keamanan Server Berbasis AI",
            description: "Sistem pemantauan keamanan VPS real-time untuk mendeteksi serangan brute-force SSH menggunakan algoritma Machine Learning Isolation Forest dan Z-Score.",
            fullDescription: `
                <p><strong>SSHGuard</strong> adalah proyek Tugas Akhir Skripsi saya—sebuah sistem otomasi pemantauan keamanan yang dirancang khusus untuk memproteksi Virtual Private Server (VPS) dari serangan brute-force SSH secara seketika (real-time).</p>
                <br>
                <p><strong>Arsitektur & Komponen Utama:</strong></p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Deteksi Anomali Hybrid:</strong> Menggabungkan analisis statistik Z-Score untuk mendeteksi lonjakan volume percobaan login ekstrem dan algoritma machine learning tanpa pengawasan (Isolation Forest) untuk mengisolasi pola serangan multivariat tersembunyi.</li>
                    <li><strong>Pemrosesan Log Real-Time:</strong> Secara berkelanjutan membaca dan membedah berkas <code>/var/log/auth.log</code> pada server Linux, mengekstraksi fitur penting (jumlah percobaan gagal, variasi username unik, rasio user tidak valid) dalam jendela waktu 1 menit.</li>
                    <li><strong>Dashboard Monitoring Flask & Tailwind:</strong> Antarmuka web responsif bagi administrator sistem untuk melihat status ancaman (NORMAL, WARNING, CRITICAL), daftar IP penyerang tertinggi, serta riwayat ancaman.</li>
                </ul>
                <br>
                <p><strong>Evaluasi & Kinerja Model:</strong></p>
                <p>Telah diuji secara empiris melalui simulasi penetration testing langsung (menggunakan Hydra pada Kali Linux). Model mencapai <strong>99.90% Recall</strong> dan <strong>96.81% Akurasi</strong> dari total 14.158 sampel data operasional—membuktikan kepekaan tinggi dalam menangkal serangan berbasis kamus kata sandi sesuai prinsip <em>Defense-in-Depth</em>.</p>
            `,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Machine Learning", "Scikit-Learn", "Flask", "TailwindCSS", "Cybersecurity", "Linux Server"],
            demoLink: "#",
            repoLink: "#"
        }
    ]
};
