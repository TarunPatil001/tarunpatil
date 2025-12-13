// Certifications Section Component
const CertificationsComponent = {
    renderCertCard: (cert, delay) => {
        return `
        <div class="col-md-4 col-lg-3 reveal-bottom" style="transition-delay: ${delay}s;">
            <div class="cert-card glass-card text-center p-4">
                <div class="cert-img-wrapper mb-3">
                    <img src="${cert.image}" alt="${cert.title}" class="cert-img">
                    <div class="cert-overlay">
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
                <h5>${cert.title}</h5>
                <p class="small text-muted">${cert.issuer}</p>
            </div>
        </div>
        `;
    },

    render: () => {
        const { certifications } = siteData;
        
        return `
        <div class="container">
            <div class="section-title text-center mb-5 reveal-bottom">
                <h2 class="neon-text">Certifications</h2>
            </div>
            <div class="row g-4 justify-content-center">
                ${certifications.map((cert, index) => {
                    const delay = index * 0.1;
                    return CertificationsComponent.renderCertCard(cert, delay);
                }).join('')}
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('certifications');
        if (container) {
            container.innerHTML = CertificationsComponent.render();
        }
    }
};
