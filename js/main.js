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
    renderProfileData();
    setupContactBindings();
    renderSocials('navbar-socials');
    renderSocials('footer-socials');
    renderSkills();
    renderLearningPlatforms();
    renderProjectFilterButtons();
    renderProjects();
    setupProjectFilters();
    setupModalEvents();
    startRoleAnimation();
}

// 1. Google Translate & Language Switcher
function setupLanguageSwitcher() {
    updateLanguageToggleButtons(currentLang);

    const idButtons = ['lang-btn-id', 'mobile-lang-btn-id'];
    const enButtons = ['lang-btn-en', 'mobile-lang-btn-en'];

    idButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                setLanguage('id');
            });
        }
    });

    enButtons.forEach(id => {
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
    updateLanguageToggleButtons(lang);

    if (lang === 'en') {
        setGoogleTransCookie('/id/en');
        triggerGoogleTranslate('en');
    } else {
        clearGoogleTransCookies();
        setGoogleTransCookie('/id/id');
        // Refresh cleanly to restore original Indonesian text
        window.location.reload();
    }
}

function triggerGoogleTranslate(lang) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
    } else {
        // If Google Translate element isn't ready in DOM yet, reload with cookie
        setTimeout(() => {
            const retrySelect = document.querySelector('.goog-te-combo');
            if (retrySelect) {
                retrySelect.value = lang;
                retrySelect.dispatchEvent(new Event('change'));
            } else {
                window.location.reload();
            }
        }, 300);
    }
}

function setGoogleTransCookie(val) {
    document.cookie = `googtrans=${val}; path=/;`;
    if (window.location.hostname) {
        document.cookie = `googtrans=${val}; domain=${window.location.hostname}; path=/;`;
        const parts = window.location.hostname.split('.');
        if (parts.length > 1) {
            const rootDomain = '.' + parts.slice(-2).join('.');
            document.cookie = `googtrans=${val}; domain=${rootDomain}; path=/;`;
        }
    }
}

function clearGoogleTransCookies() {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (window.location.hostname) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
        const parts = window.location.hostname.split('.');
        if (parts.length > 1) {
            const rootDomain = '.' + parts.slice(-2).join('.');
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${rootDomain}; path=/;`;
        }
    }
}

// 2. Profile Data Rendering
function renderProfileData() {
    const profile = portfolioData.profile;

    const profileNameEl = document.getElementById('profile-name');
    if (profileNameEl) profileNameEl.textContent = profile.name;

    const greetingEl = document.getElementById('profile-greeting');
    if (greetingEl) greetingEl.textContent = profile.greeting;

    const bioEl = document.getElementById('profile-bio');
    if (bioEl) bioEl.textContent = profile.bio;

    const aboutEl = document.getElementById('about-content');
    if (aboutEl) aboutEl.innerHTML = profile.aboutMe;

    const locEl = document.getElementById('contact-location');
    if (locEl) locEl.textContent = profile.location;

    const copyrightEl = document.getElementById('footer-copyright');
    if (copyrightEl) {
        copyrightEl.innerHTML = `&copy; ${new Date().getFullYear()} <span class="notranslate">${profile.name}</span>. Hak cipta dilindungi undang-undang.`;
    }
}

// 3. Animated Roles Controller
function startRoleAnimation() {
    if (roleIntervalId) clearInterval(roleIntervalId);

    const roleTextSpan = document.getElementById("role-text");
    const roles = portfolioData.profile.roles || ["Software Engineer"];
    roleIndex = 0;

    if (roleTextSpan && roles.length > 0) {
        roleTextSpan.textContent = roles[roleIndex];

        roleIntervalId = setInterval(() => {
            roleTextSpan.style.transform = 'rotateX(90deg)';
            roleTextSpan.style.opacity = '0';

            setTimeout(() => {
                roleIndex = (roleIndex + 1) % roles.length;
                roleTextSpan.textContent = roles[roleIndex];

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

// 4. Mobile Menu
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

// 5. Contact & Socials Bindings
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

// 6. Skills Renderer
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        portfolioData.skills.forEach((skill, index) => {
            const skillEl = document.createElement('div');
            skillEl.className = 'px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-0.5 cursor-default animate-fade-in-up notranslate';
            skillEl.style.animationDelay = `${index * 30}ms`;
            skillEl.textContent = skill;
            skillsContainer.appendChild(skillEl);
        });
    }
}

// 7. Learning Platforms Renderer
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
                <span class="text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors text-center notranslate">${platform.name}</span>
            `;
            learningContainer.appendChild(anchor);
        });
    }
}

// 8. Project Filters & Rendering
function setupProjectFilters() {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-filter]');
        if (!btn) return;
        currentCategory = btn.getAttribute('data-filter');
        renderProjectFilterButtons();
        renderProjects();
    });
}

function renderProjectFilterButtons() {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    const filterList = [
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

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    const filtered = currentCategory === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === currentCategory);

    if (filtered.length === 0) {
        projectsContainer.innerHTML = `
            <div class="col-span-full py-12 text-center text-zinc-500 text-sm">
                Tidak ada proyek dalam kategori ini.
            </div>
        `;
        return;
    }

    projectsContainer.innerHTML = filtered.map((project, index) => {
        const tagsHtml = project.tags.slice(0, 3).map(tag => `
            <span class="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300 notranslate">${tag}</span>
        `).join('');

        return `
        <div class="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden group hover:border-purple-500/40 transition-all duration-500 animate-fade-in-up cursor-pointer flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1" onclick="openModal(${project.id})" style="animation-delay: ${index * 60}ms">
            <div class="relative h-48 sm:h-52 overflow-hidden shrink-0 bg-[#080808] p-3 flex items-center justify-center">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 rounded-xl">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute top-4 right-4 z-20 flex gap-2">${tagsHtml}</div>
            </div>
            <div class="p-6 relative z-20 flex-1 flex flex-col">
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-purple-400 transition-colors duration-300 leading-snug">${project.title}</h3>
                <p class="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">${project.description}</p>
                <div class="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-purple-400 transition-colors duration-300">
                    Lihat Detail
                    <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </div>
        </div>`;
    }).join('');
}

// 9. Modal Logic
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

    // Populate Data
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = project.title;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').innerHTML = project.fullDescription || project.description;

    // Tags
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `
        <span class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700 notranslate">${tag}</span>
    `).join('');

    // Links
    let linksHtml = '';
    if (project.demoLink && project.demoLink !== '#') {
        linksHtml += `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg transition-all">Lihat Demo <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>`;
    }
    if (project.repoLink && project.repoLink !== '#') {
        linksHtml += `<a href="${project.repoLink}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-lg transition-all">Kode Sumber <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg></a>`;
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
