// Education Section Component
const EducationComponent = {
    renderEducationCard: (edu) => {
        const gradeIcon = edu.gradeType === 'cgpa' ? 'fas fa-award' : 'fas fa-percent';
        
        return `
        <div class="timeline-card glass-card">
            <div class="timeline-icon education">
                <i class="${edu.icon}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <span class="timeline-date"><i class="fas fa-calendar-alt me-2"></i>${edu.duration}</span>
                    <span class="timeline-badge"><i class="${gradeIcon} me-1"></i>${edu.grade}</span>
                </div>
                <h4 class="timeline-title">${edu.degree}</h4>
                <div class="timeline-institution-info">
                    ${edu.university ? `<p class="timeline-university"><i class="fas fa-graduation-cap me-2"></i>${edu.university}</p>` : ''}
                    <p class="timeline-institution"><i class="fas fa-building me-2"></i>${edu.institution}</p>
                    <p class="timeline-location"><i class="fas fa-map-marker-alt me-2"></i>${edu.location}</p>
                </div>
                <p class="timeline-description">${edu.description}</p>
                <div class="timeline-tags">
                    ${edu.subjects.map(subject => `<span class="timeline-tag">${subject}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
    },

    render: () => {
        const { education } = siteData;
        
        return `
        <div class="container">
            <div class="section-title text-center mb-5 reveal-bottom">
                <span class="section-subtitle"><i class="fas fa-graduation-cap me-2"></i>Academic Background</span>
                <h2 class="neon-text">Education</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10 reveal-bottom">
                    <div class="timeline-modern">
                        ${education.map(edu => EducationComponent.renderEducationCard(edu)).join('')}
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('education');
        if (container) {
            container.innerHTML = EducationComponent.render();
        }
    }
};
