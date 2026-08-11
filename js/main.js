// Inisialisasi dan Render konten dinamis
document.addEventListener('DOMContentLoaded', () => {

    // 1. Render Static Profile Data
    const profile = portfolioData.profile;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-greeting').textContent = profile.greeting;
    document.getElementById('profile-bio').innerHTML = profile.bio;
    
    // Contact bindings
    const contactEmail = document.getElementById('contact-email');
    if(contactEmail) contactEmail.textContent = profile.email;
    const contactPhone = document.getElementById('contact-phone');
    if(contactPhone) contactPhone.textContent = profile.phone;
    const contactLocation = document.getElementById('contact-location');
    if(contactLocation) contactLocation.textContent = profile.location;
    
    const aboutContent = document.getElementById('about-content');
    if (aboutContent && profile.aboutMe) {
        aboutContent.innerHTML = profile.aboutMe;
    }
    
    const profileEmailBtn = document.getElementById('profile-email');
    if (profileEmailBtn) {
        profileEmailBtn.href = `mailto:${profile.email}`;
    }
    
    document.getElementById('footer-copyright').innerHTML = `&copy; ${new Date().getFullYear()} ${profile.name}. All rights reserved.`;

    // 2. Flip Effect untuk Role
    const roleTextSpan = document.getElementById("role-text");
    const roles = profile.roles || ["Web Developer"];
    let roleIndex = 0;

    if (roleTextSpan && roles.length > 0) {
        roleTextSpan.textContent = roles[roleIndex];
        
        setInterval(() => {
            // Animasi flip out (muter ke atas/hilang)
            roleTextSpan.style.transform = 'rotateX(90deg)';
            roleTextSpan.style.opacity = '0';
            
            setTimeout(() => {
                roleIndex = (roleIndex + 1) % roles.length;
                roleTextSpan.textContent = roles[roleIndex];
                
                // Reset posisi ke bawah sebelum flip in
                roleTextSpan.style.transition = 'none';
                roleTextSpan.style.transform = 'rotateX(-90deg)';
                
                // Trigger reflow biar transition 'none' nya jalan dulu
                void roleTextSpan.offsetWidth; 
                
                // Animasi flip in (muter dari bawah ke tengah)
                roleTextSpan.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                roleTextSpan.style.transform = 'rotateX(0deg)';
                roleTextSpan.style.opacity = '1';
            }, 500); // Waktu nunggu flip out selesai
        }, 3000); // Ganti teks setiap 3 detik
    }

    // 3. Render Social Icons
    const renderSocials = (containerId) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = portfolioData.socials.map(social => `
                <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
                   class="text-zinc-400 hover:text-white transition-colors" aria-label="${social.name}">
                    ${social.icon}
                </a>
            `).join('');
        }
    };
    renderSocials('navbar-socials');
    renderSocials('footer-socials');

    // 4. Render Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        portfolioData.skills.forEach((skill, index) => {
            const skillEl = document.createElement('div');
            skillEl.className = 'px-5 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-0.5 cursor-default animate-fade-in-up';
            skillEl.style.animationDelay = `${index * 50}ms`;
            skillEl.textContent = skill;
            skillsContainer.appendChild(skillEl);
        });
    }
    
    // Render Learning Platforms
    const learningContainer = document.getElementById('learning-container');
    if (learningContainer && portfolioData.learningPlatforms) {
        portfolioData.learningPlatforms.forEach((platform, index) => {
            const anchor = document.createElement('a');
            anchor.href = platform.url;
            anchor.target = "_blank";
            anchor.className = "flex flex-col items-center gap-3 group animate-fade-in-up";
            anchor.style.animationDelay = `${index * 100}ms`;
            anchor.innerHTML = `
                <div class="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 rounded-2xl flex items-center justify-center p-3 border border-white/5 shadow-lg group-hover:border-white/20 transition-all">
                    <img src="${platform.image}" alt="${platform.name}" class="w-full h-full object-contain transition-all duration-300 ${platform.invert ? 'invert brightness-0 opacity-80 group-hover:opacity-100' : 'filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'}">
                </div>
                <span class="text-xs sm:text-sm font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">${platform.name}</span>
            `;
            learningContainer.appendChild(anchor);
        });
    }

    // 5. Render Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        const icons = {
            'external-link': `<svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>`,
            'github': `<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>`
        };

        projectsContainer.innerHTML = portfolioData.projects.map((project, index) => {
            const tagsHtml = project.tags.slice(0, 3).map(tag => `
                <span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">${tag}</span>
            `).join('');

            return `
            <div class="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden group hover:border-purple-500/30 transition-all duration-500 animate-fade-in-up cursor-pointer flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:-translate-y-1" onclick="openModal(${project.id})" style="animation-delay: ${index * 100}ms">
                <div class="relative h-48 sm:h-56 overflow-hidden shrink-0 bg-[#050505] p-3 flex items-center justify-center">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 rounded-xl">
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute top-4 right-4 z-20 flex gap-2">${tagsHtml}</div>
                </div>
                <div class="p-6 relative z-20 flex-1 flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 leading-tight">${project.title}</h3>
                    <p class="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">${project.description}</p>
                    <div class="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-purple-400 transition-colors duration-300">
                        Explore Project 
                        <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    // 6. Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalPanel = document.getElementById('modal-panel');
    
    window.openModal = function(projectId) {
        const project = portfolioData.projects.find(p => p.id === projectId);
        if (!project || !modal) return;
        
        // Populate Data
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal-image').alt = project.title;
        document.getElementById('modal-title').textContent = project.title;
        
        // Render full description (bisa HTML jika mau ada paragraf)
        document.getElementById('modal-description').innerHTML = project.fullDescription || project.description;
        
        // Render tags
        document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `
            <span class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">${tag}</span>
        `).join('');
        
        // Render links
        let linksHtml = '';
        if (project.demoLink && project.demoLink !== '#') {
            linksHtml += `<a href="${project.demoLink}" target="_blank" onclick="event.stopPropagation()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white hover:bg-zinc-200 rounded-lg transition-all">Live Demo <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>`;
        }
        if (project.repoLink && project.repoLink !== '#') {
            linksHtml += `<a href="${project.repoLink}" target="_blank" onclick="event.stopPropagation()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-lg transition-all">Source Code <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg></a>`;
        }
        document.getElementById('modal-links').innerHTML = linksHtml;
        
        // Show Modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Animate in
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalPanel.classList.remove('scale-95');
            modalPanel.classList.add('scale-100');
        }, 10);
        
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    function closeModal() {
        if (!modal) return;
        
        // Animate out
        modal.classList.add('opacity-0');
        modalPanel.classList.remove('scale-100');
        modalPanel.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }, 300);
    }

    if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

});
