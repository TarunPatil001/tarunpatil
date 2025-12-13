// Projects/Portfolio Section Component
const ProjectsComponent = {
    renderProjectCard: (project, delay) => {
        return `
        <div class="col-md-6 col-lg-4 reveal-bottom" style="transition-delay: ${delay}s;">
            <div class="project-card glass-card h-100">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <div class="project-icon"><i class="${project.icon}"></i></div>
                    </div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">${project.title}</h4>
                    <h6 class="text-muted mb-3">${project.subtitle}</h6>
                    <p class="card-text">${project.description}</p>
                    <div class="tech-tags mb-4">
                        ${project.technologies.map(tech => `<span class="badge glass-badge">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveDemo}" class="btn btn-sm btn-outline-primary btn-neon" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="${project.github}" class="btn btn-sm btn-outline-light" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    render: () => {
        const { projects } = siteData;
        let delay = 0;
        
        return `
        <div class="container">
            <div class="section-title text-center mb-5 reveal-bottom">
                <h2 class="neon-text">Portfolio</h2>
                <p>Some of my best work</p>
            </div>
            <div class="row g-4">
                ${projects.map((project, index) => {
                    delay = (index % 3) * 0.1;
                    return ProjectsComponent.renderProjectCard(project, delay);
                }).join('')}
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('portfolio');
        if (container) {
            container.innerHTML = ProjectsComponent.render();
        }
    }
};
