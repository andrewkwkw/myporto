// State Management
let currentLang = localStorage.getItem('portfolio_lang') || 'id';
let currentCategory = 'all';
let roleIntervalId = null;
let roleIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupLanguageSwitcher();
    setupMobileMenu();
    setupContactBindings();
    renderSocials('navbar-socials');
    renderSocials('footer-socials');
    renderSkills();
    renderLearningPlatforms();
    setupProjectFilters();
    setupModalEvents();
    
    // Apply initial language
    applyLanguage(currentLang);
}

// 1. Language Controller
function setupLanguageSwitcher() {
    ['lang-btn-id', 'mobile-lang-btn-id'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                setLanguage('id');
            });
        }
    });

    ['lang-btn-en', 'mobile-lang-btn-en'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                setLanguage('en');
            });
        }
    });
}

function updateLanguageToggleButtons(lang) {
    const pairs = [
        { id: 'lang-btn-id', en: 'lang-btn-en' },
        { id: 'mobile-lang-btn-id', en: 'mobile-lang-btn-en' }
    ];

    pairs.forEach(pair => {
        const idBtn = document.getElementById(pair.id);
        const enBtn = document.getElementById(pair.en);

        if (idBtn && enBtn) {
            if (lang === 'id') {
                idBtn.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-white bg-purple-600 shadow-sm font-bold';
                enBtn.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-zinc-400 hover:text-white font-medium';
            } else {
                idBtn.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-zinc-400 hover:text-white font-medium';
                enBtn.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-white bg-purple-600 shadow-sm font-bold';
            }
        }
    });
}

function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = lang === 'id' ? 'Portofolio - Andriawan' : 'Portfolio - Andriawan';
    updateLanguageToggleButtons(lang);

    const isEn = lang === 'en';
    const profile = portfolioData.profile;
    const enProf = isEn && window.enTranslations ? window.enTranslations.profile : null;
    const enUi = isEn && window.enTranslations ? window.enTranslations.ui : null;

    // Navigation Text
    const navText = isEn && enUi ? enUi.nav : {
        home: "Beranda",
        about: "Tentang",
        skills: "Keahlian",
        projects: "Proyek",
        contact: "Kontak",
        hireMe: "Hubungi Saya"
    };

    const navMapping = {
        'nav-home': navText.home,
        'nav-about': navText.about,
        'nav-skills': navText.skills,
        'nav-projects': navText.projects,
        'nav-contact': navText.contact,
        'nav-hire': navText.hireMe,
        'mobile-nav-home': navText.home,
        'mobile-nav-about': navText.about,
        'mobile-nav-skills': navText.skills,
        'mobile-nav-projects': navText.projects,
        'mobile-nav-contact': navText.contact,
        'mobile-nav-hire': navText.hireMe
    };

    for (const [id, text] of Object.entries(navMapping)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    // Hero Section
    const profileNameEl = document.getElementById('profile-name');
    if (profileNameEl) profileNameEl.textContent = profile.name;

    const profileGreetingEl = document.getElementById('profile-greeting');
    if (profileGreetingEl) profileGreetingEl.textContent = isEn && enProf ? enProf.greeting : profile.greeting;

    const profileBioEl = document.getElementById('profile-bio');
    if (profileBioEl) profileBioEl.textContent = isEn && enProf ? enProf.bio : profile.bio;

    const heroProjectsBtn = document.getElementById('hero-btn-projects');
    if (heroProjectsBtn) heroProjectsBtn.textContent = isEn && enUi ? enUi.hero.viewPortfolio : "Lihat Portofolio";

    const heroContactBtn = document.getElementById('hero-btn-contact');
    if (heroContactBtn) heroContactBtn.textContent = isEn && enUi ? enUi.hero.contactMe : "Hubungi Saya";

    const heroCvBtn = document.getElementById('hero-btn-cv');
    if (heroCvBtn) {
        const cvText = isEn && enUi ? enUi.hero.downloadCv : "Unduh CV";
        heroCvBtn.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-3 3m0 0l-3-3m3 3V4"></path>
            </svg>
            ${cvText}
        `;
    }

    // Roles Animation
    const rolesList = isEn && enProf ? enProf.roles : profile.roles;
    startRoleAnimation(rolesList);

    // About Section
    const aboutTitleEl = document.getElementById('about-title');
    if (aboutTitleEl) {
        aboutTitleEl.innerHTML = `<span class="w-8 h-1 bg-purple-500 rounded-full inline-block mr-2"></span> ${isEn && enUi ? enUi.about.title : "Tentang Saya"}`;
    }

    const aboutSubtitleEl = document.getElementById('about-subtitle');
    if (aboutSubtitleEl) aboutSubtitleEl.textContent = isEn && enUi ? enUi.about.subtitle : "Latar belakang, spesialisasi, dan pendekatan kerja saya.";

    const aboutContentEl = document.getElementById('about-content');
    if (aboutContentEl) aboutContentEl.innerHTML = isEn && enProf ? enProf.aboutMe : profile.aboutMe;

    // Skills Section
    const skillsTitleEl = document.getElementById('skills-title');
    if (skillsTitleEl) skillsTitleEl.textContent = isEn && enUi ? enUi.skills.title : "Keahlian & Kompetensi";

    const skillsSubtitleEl = document.getElementById('skills-subtitle');
    if (skillsSubtitleEl) skillsSubtitleEl.textContent = isEn && enUi ? enUi.skills.subtitle : "Teknologi, arsitektur, dan perangkat kerja yang saya kuasai dan terapkan dalam berbagai proyek nyata.";

    // Learning Platforms Section
    const learningTitleEl = document.getElementById('learning-title');
    if (learningTitleEl) learningTitleEl.textContent = isEn && enUi ? enUi.learning.title : "PLATFORM BELAJAR & SERTIFIKASI";

    // Projects Section
    const projectsTitleEl = document.getElementById('projects-title');
    if (projectsTitleEl) {
        projectsTitleEl.innerHTML = `<span class="w-8 h-1 bg-blue-500 rounded-full inline-block mr-2"></span> ${isEn && enUi ? enUi.projects.title : "Proyek Pilihan"}`;
    }

    const projectsSubtitleEl = document.getElementById('projects-subtitle');
    if (projectsSubtitleEl) projectsSubtitleEl.textContent = isEn && enUi ? enUi.projects.subtitle : "Koleksi proyek unggulan yang telah saya rancang, bangun, dan publikasikan.";

    renderProjectFilterButtons(isEn && enUi ? enUi.projects : null);
    renderProjects(isEn);

    // Contact Section
    const contactTitleEl = document.getElementById('contact-title');
    if (contactTitleEl) {
        contactTitleEl.innerHTML = isEn && enUi ? enUi.contact.title : `Mari <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Terhubung</span>`;
    }

    const contactSubtitleEl = document.getElementById('contact-subtitle');
    if (contactSubtitleEl) contactSubtitleEl.textContent = isEn && enUi ? enUi.contact.subtitle : "Punya ide proyek, kebutuhan sistem digital, atau peluang kerja sama? Silakan hubungi saya kapan saja!";

    const contactTalkTitleEl = document.getElementById('contact-talk-title');
    if (contactTalkTitleEl) contactTalkTitleEl.textContent = isEn && enUi ? enUi.contact.talkTitle : "Mari Berdiskusi";

    const contactTalkDescEl = document.getElementById('contact-talk-desc');
    if (contactTalkDescEl) contactTalkDescEl.textContent = isEn && enUi ? enUi.contact.talkDesc : "Saya selalu terbuka untuk mendiskusikan peluang proyek baru, perancangan arsitektur sistem, maupun kerja sama jangka panjang.";

    const labelEmailEl = document.getElementById('label-email');
    if (labelEmailEl) labelEmailEl.textContent = isEn && enUi ? enUi.contact.emailLabel : "Email";

    const labelPhoneEl = document.getElementById('label-phone');
    if (labelPhoneEl) labelPhoneEl.textContent = isEn && enUi ? enUi.contact.phoneLabel : "Telepon / WhatsApp";

    const labelLocationEl = document.getElementById('label-location');
    if (labelLocationEl) labelLocationEl.textContent = isEn && enUi ? enUi.contact.locationLabel : "Lokasi";

    const contactLocationValEl = document.getElementById('contact-location');
    if (contactLocationValEl) contactLocationValEl.textContent = isEn && enProf ? enProf.location : profile.location;

    const waBtn = document.getElementById('contact-wa-btn');
    if (waBtn) {
        const waText = isEn && enUi ? enUi.contact.chatWhatsapp : "Hubungi via WhatsApp";
        waBtn.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            ${waText}
        `;
    }

    // Footer
    const copyrightEl = document.getElementById('footer-copyright');
    if (copyrightEl) {
        const rightsText = isEn && enUi ? enUi.footer.rights : "Hak cipta dilindungi undang-undang.";
        copyrightEl.innerHTML = `&copy; ${new Date().getFullYear()} ${profile.name}. ${rightsText}`;
    }
}

// 2. Animated Roles Controller
function startRoleAnimation(roles) {
    if (roleIntervalId) clearInterval(roleIntervalId);

    const roleTextSpan = document.getElementById("role-text");
    const activeRoles = roles || portfolioData.profile.roles || ["Software Engineer"];
    roleIndex = 0;

    if (roleTextSpan && activeRoles.length > 0) {
        roleTextSpan.textContent = activeRoles[roleIndex];

        roleIntervalId = setInterval(() => {
            roleTextSpan.style.transform = 'rotateX(90deg)';
            roleTextSpan.style.opacity = '0';

            setTimeout(() => {
                roleIndex = (roleIndex + 1) % activeRoles.length;
                roleTextSpan.textContent = activeRoles[roleIndex];

                roleTextSpan.style.transition = 'none';
                roleTextSpan.style.transform = 'rotateX(-90deg)';
                void roleTextSpan.offsetWidth;

                roleTextSpan.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                roleTextSpan.style.transform = 'rotateX(0deg)';
                roleTextSpan.style.opacity = '1';
            }, 500);
        }, 3000);
    }
}

// 3. Mobile Navigation Menu
function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileBtn || !mobileMenu) return;

    function toggleMenu() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
            if (closeIcon) closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
            if (closeIcon) closeIcon.classList.remove('hidden');
        }
    }

    mobileBtn.addEventListener('click', toggleMenu);

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
            if (closeIcon) closeIcon.classList.add('hidden');
        });
    });
}

// 4. Contact & Socials Bindings
function setupContactBindings() {
    const profile = portfolioData.profile;
    const emailEl = document.getElementById('contact-email');
    if (emailEl) {
        emailEl.textContent = profile.email;
        emailEl.parentElement.parentElement.href = `mailto:${profile.email}`;
    }

    const phoneEl = document.getElementById('contact-phone');
    if (phoneEl) {
        phoneEl.textContent = profile.phone;
    }

    const waBtn = document.getElementById('contact-wa-btn');
    if (waBtn) {
        waBtn.href = profile.whatsappUrl;
    }
}

function renderSocials(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = portfolioData.socials.map(social => `
            <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
               class="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" aria-label="${social.name}">
                ${social.icon}
            </a>
        `).join('');
    }
}

// 5. Skills Renderer
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        portfolioData.skills.forEach((skill, index) => {
            const skillEl = document.createElement('div');
            skillEl.className = 'px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-0.5 cursor-default animate-fade-in-up';
            skillEl.style.animationDelay = `${index * 30}ms`;
            skillEl.textContent = skill;
            skillsContainer.appendChild(skillEl);
        });
    }
}

// 6. Learning Platforms Renderer
function renderLearningPlatforms() {
    const learningContainer = document.getElementById('learning-container');
    if (learningContainer && portfolioData.learningPlatforms) {
        learningContainer.innerHTML = '';
        portfolioData.learningPlatforms.forEach((platform, index) => {
            const anchor = document.createElement('a');
            anchor.href = platform.url;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
            anchor.className = "flex flex-col items-center gap-3 group animate-fade-in-up";
            anchor.style.animationDelay = `${index * 80}ms`;
            anchor.innerHTML = `
                <div class="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900/80 rounded-2xl flex items-center justify-center p-3 border border-white/5 shadow-lg group-hover:border-purple-500/40 group-hover:scale-105 transition-all">
                    <img src="${platform.image}" alt="${platform.name}" class="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                </div>
                <span class="text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors text-center">${platform.name}</span>
            `;
            learningContainer.appendChild(anchor);
        });
    }
}

// 7. Project Filters & Rendering
function setupProjectFilters() {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-filter]');
        if (!btn) return;
        currentCategory = btn.getAttribute('data-filter');
        const isEn = currentLang === 'en';
        const enUi = isEn && window.enTranslations ? window.enTranslations.ui : null;
        renderProjectFilterButtons(enUi ? enUi.projects : null);
        renderProjects(isEn);
    });
}

function renderProjectFilterButtons(projectsUi) {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    const filterList = projectsUi ? [
        { key: 'all', label: projectsUi.filterAll },
        { key: 'web', label: projectsUi.filterWeb },
        { key: 'iot', label: projectsUi.filterIot },
        { key: 'security', label: projectsUi.filterSecurity }
    ] : [
        { key: 'all', label: 'Semua Proyek' },
        { key: 'web', label: 'Web & Sistem' },
        { key: 'iot', label: 'IoT & AI' },
        { key: 'security', label: 'Keamanan Siber' }
    ];

    filterContainer.innerHTML = filterList.map(item => {
        const isActive = currentCategory === item.key;
        const activeClass = isActive
            ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-semibold'
            : 'bg-zinc-900/60 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white font-medium';

        return `
            <button type="button" data-filter="${item.key}"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm border transition-all duration-200 ${activeClass}">
                ${item.label}
            </button>
        `;
    }).join('');
}

function renderProjects(isEn) {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    const filtered = currentCategory === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === currentCategory);

    const exploreText = isEn ? "Explore Project" : "Lihat Detail";
    const noProjectsText = isEn ? "No projects found in this category." : "Tidak ada proyek dalam kategori ini.";

    if (filtered.length === 0) {
        projectsContainer.innerHTML = `
            <div class="col-span-full py-12 text-center text-zinc-500 text-sm">
                ${noProjectsText}
            </div>
        `;
        return;
    }

    const enProjects = isEn && window.enTranslations ? window.enTranslations.projects : null;

    projectsContainer.innerHTML = filtered.map((project, index) => {
        const enProj = enProjects ? enProjects[project.id] : null;
        const title = enProj ? enProj.title : project.title;
        const description = enProj ? enProj.description : project.description;

        const tagsHtml = project.tags.slice(0, 3).map(tag => `
            <span class="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">${tag}</span>
        `).join('');

        return `
        <div class="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden group hover:border-purple-500/40 transition-all duration-500 animate-fade-in-up cursor-pointer flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1" onclick="openModal(${project.id})" style="animation-delay: ${index * 60}ms">
            <div class="relative h-48 sm:h-52 overflow-hidden shrink-0 bg-[#080808] p-3 flex items-center justify-center">
                <img src="${project.image}" alt="${title}" class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 rounded-xl">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute top-4 right-4 z-20 flex gap-2">${tagsHtml}</div>
            </div>
            <div class="p-6 relative z-20 flex-1 flex flex-col">
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-purple-400 transition-colors duration-300 leading-snug">${title}</h3>
                <p class="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">${description}</p>
                <div class="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-purple-400 transition-colors duration-300">
                    ${exploreText} 
                    <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </div>
        </div>`;
    }).join('');
}

// 8. Modal Logic
function setupModalEvents() {
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close');

    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('project-modal');
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

window.openModal = function(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    const modal = document.getElementById('project-modal');
    const modalPanel = document.getElementById('modal-panel');
    if (!project || !modal) return;

    const isEn = currentLang === 'en';
    const enProj = isEn && window.enTranslations && window.enTranslations.projects ? window.enTranslations.projects[projectId] : null;
    const title = enProj ? enProj.title : project.title;
    const fullDesc = enProj ? enProj.fullDescription : (project.fullDescription || project.description);

    // Populate Data
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = title;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').innerHTML = fullDesc;

    // Tags
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `
        <span class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">${tag}</span>
    `).join('');

    // Links
    const liveDemoText = isEn ? "Live Demo" : "Lihat Demo";
    const sourceCodeText = isEn ? "Source Code" : "Kode Sumber";

    let linksHtml = '';
    if (project.demoLink && project.demoLink !== '#') {
        linksHtml += `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg transition-all">${liveDemoText} <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>`;
    }
    if (project.repoLink && project.repoLink !== '#') {
        linksHtml += `<a href="${project.repoLink}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-lg transition-all">${sourceCodeText} <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg></a>`;
    }
    document.getElementById('modal-links').innerHTML = linksHtml;

    // Show Modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (modalPanel) {
            modalPanel.classList.remove('scale-95');
            modalPanel.classList.add('scale-100');
        }
    }, 10);

    document.body.style.overflow = 'hidden';
};

function closeModal() {
    const modal = document.getElementById('project-modal');
    const modalPanel = document.getElementById('modal-panel');
    if (!modal) return;

    modal.classList.add('opacity-0');
    if (modalPanel) {
        modalPanel.classList.remove('scale-100');
        modalPanel.classList.add('scale-95');
    }

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }, 300);
}
