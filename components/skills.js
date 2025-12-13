// Skills Section Component
const SkillsComponent = {
    renderSkillCard: (skill, category, delay) => {
        const animationClass = skill.animation || '';
        // Check if icon is an image path or icon class
        const isImagePath = skill.icon.includes('/') || skill.icon.includes('.png') || skill.icon.includes('.svg') || skill.icon.includes('.jpg');
        const iconHtml = isImagePath 
            ? `<img src="${skill.icon}" alt="${skill.name}" class="${animationClass}" style="width: 3rem; height: 3rem; object-fit: contain;">`
            : `<i class="${skill.icon} ${animationClass}" style="font-size: 3rem;"></i>`;
        
        return `
        <div class="col-4 col-md-3 col-lg-2 reveal-bottom skill-item" data-category="${category}" style="transition-delay: ${delay}s;">
            <div class="tech-card glass-card text-center">
                <div class="skill-icon-wrapper">
                    ${iconHtml}
                </div>
                <h5>${skill.name}</h5>
                <span class="skill-tag ${skill.level}">${skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</span>
            </div>
        </div>
        `;
    },

    renderTabs: (categories) => {
        return categories.map((cat, index) => 
            `<button class="skill-tab ${index === 0 ? 'active' : ''}" data-category="${cat.key}">${cat.label}</button>`
        ).join('');
    },

    renderAllSkills: (skills) => {
        let allSkills = '';
        const skillCategories = ['languages', 'frameworks', 'databases', 'tools'];
        
        skillCategories.forEach(category => {
            if (skills[category]) {
                let delay = 0.1;
                skills[category].forEach(skill => {
                    allSkills += SkillsComponent.renderSkillCard(skill, category, delay);
                    delay += 0.05;
                });
            }
        });
        
        return allSkills;
    },

    render: () => {
        const { skills } = siteData;
        const { sectionTitle, sectionSubtitle, sectionDescription, categories } = skills;

        return `
        <div class="container">
            <div class="section-title text-center mb-5 reveal-bottom">
                <span class="section-subtitle">${sectionSubtitle}</span>
                <h2 class="neon-text">${sectionTitle}</h2>
                <p>${sectionDescription}</p>
            </div>
            
            <!-- Skill Categories Tabs -->
            <div class="skill-tabs text-center mb-5 reveal-bottom">
                ${SkillsComponent.renderTabs(categories)}
            </div>
            
            <div class="row g-4 justify-content-center">
                ${SkillsComponent.renderAllSkills(skills)}
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('skills');
        if (container) {
            container.innerHTML = SkillsComponent.render();
            SkillsComponent.initTabs();
        }
    },

    initTabs: () => {
        const tabs = document.querySelectorAll('.skill-tab');
        const skillItems = document.querySelectorAll('.skill-item');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const category = tab.dataset.category;

                skillItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                    } else {
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    }
                });
            });
        });
    }
};
