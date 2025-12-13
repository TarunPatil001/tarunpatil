// About Section Component
const AboutComponent = {
    render: () => {
        const { about } = siteData;
        
        return `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 reveal-bottom">
                    <div class="about-content text-center">
                        <h2 class="neon-text mb-5">About Me</h2>
                        <p class="about-intro lead mb-4">${about.intro}</p>
                        ${about.description.map(para => `<p class="about-text mb-4">${para}</p>`).join('')}
                        <div class="about-skills">
                            ${about.highlights.map(skill => `
                                <span class="skill-tag"><i class="fas fa-check-circle me-2"></i>${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('about');
        if (container) {
            container.innerHTML = AboutComponent.render();
        }
    }
};
