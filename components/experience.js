// Experience Section Component
const ExperienceComponent = {
    renderExperienceCard: (exp) => {
        return `
        <div class="timeline-card glass-card">
            <div class="timeline-icon">
                <i class="${exp.icon}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <span class="timeline-date"><i class="fas fa-calendar-alt me-2"></i>${exp.duration}</span>
                    ${exp.isCurrent ? '<span class="timeline-status active">Current</span>' : ''}
                </div>
                <h4 class="timeline-title">${exp.title}</h4>
                <p class="timeline-company"><i class="fas fa-building me-2"></i>${exp.company}</p>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-tags">
                    ${exp.technologies.map(tech => `<span class="timeline-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
    },

    render: () => {
        const { experience } = siteData;
        
        // Don't render if no experience data
        if (!experience || experience.length === 0) {
            return '';
        }
        
        return `
        <div class="container">
            <div class="section-title text-center mb-5 reveal-bottom">
                <span class="section-subtitle"><i class="fas fa-briefcase me-2"></i>Career Journey</span>
                <h2 class="neon-text">Experience</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10 reveal-bottom">
                    <div class="timeline-modern">
                        ${experience.map(exp => ExperienceComponent.renderExperienceCard(exp)).join('')}
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('experience');
        if (container) {
            const content = ExperienceComponent.render();
            if (content) {
                container.innerHTML = content;
            } else {
                // Hide section if no data
                container.style.display = 'none';
            }
        }
    }
};
