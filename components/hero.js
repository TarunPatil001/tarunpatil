// Hero Section Component
const HeroComponent = {
    render: () => {
        const { personal, hero, social } = siteData;
        
        return `
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
        
        <!-- Mobile Background Image -->
        <div class="hero-mobile-bg">
            <img src="${personal.profileImage}" alt="" class="hero-mobile-bg-img">
            <div class="hero-mobile-gradient"></div>
        </div>
        
        <div class="container">
            <div class="row align-items-center flex-column-reverse flex-lg-row">
                <div class="col-lg-7 reveal-left hero-content">
                    <div class="d-inline-flex align-items-center mb-3 px-3 py-1 rounded-pill glass-badge">
                        <span class="status-dot pulse me-2"></span>
                        <span class="small text-uppercase letter-spacing-1">${personal.status}</span>
                    </div>
                    <div class="intro-text mb-2">
                        <span class="hello-text">${hero.greeting}</span>
                    </div>
                    <h1 class="name-headline">
                        <span class="first-name">${personal.firstName}</span> <span class="ms-2 last-name">${personal.lastName}</span>
                    </h1>
                    <h2 class="headline gradient-text animated-gradient">${personal.title}</h2>
                    <div class="d-flex align-items-center mb-3 text-muted flex-wrap">
                        <i class="fas fa-map-marker-alt me-2 text-primary"></i>
                        <span>${personal.location.split(',')[0]}</span>
                        <span class="mx-3">|</span>
                        <i class="fas fa-briefcase me-2 text-primary"></i>
                        <span>${personal.availability}</span>
                    </div>
                    <p class="hero-text">${hero.tagline}</p>
                    <div class="hero-cta-wrapper">
                        <!-- Social Links in Hero -->
                        <div class="hero-social">
                            <a href="${social.linkedin}" class="hero-social-link" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a href="${social.github}" class="hero-social-link" aria-label="GitHub" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="${social.email}" class="hero-social-link" aria-label="Email"><i class="fas fa-envelope"></i></a>
                        </div>
                        <div class="hero-btns">
                            <a href="${hero.ctaButtons.primary.link}" class="btn btn-primary btn-lg btn-neon magnetic-btn">
                                <span class="btn-text">${hero.ctaButtons.primary.text}</span>
                                <span class="btn-icon"><i class="${hero.ctaButtons.primary.icon}"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-8 col-sm-10 mx-auto mx-lg-0 mb-4 mb-lg-0 reveal-right">
                    <div class="hero-visual">
                        <div class="profile-image-container">
                            <div class="profile-glow"></div>
                            <img src="${personal.profileImage}" alt="${personal.firstName} ${personal.lastName}" class="profile-img floating">
                        </div>
                        <!-- Floating Tech Icons -->
                        <div class="floating-icons d-none d-lg-block">
                            ${hero.floatingIcons.map(icon => {
                                if (icon.type === 'img') {
                                    return `<div class="floating-icon ${icon.position}"><img src="${icon.src}" alt="" style="width: 32px; height: 32px;"></div>`;
                                }
                                return `<div class="floating-icon ${icon.position}"><i class="${icon.icon}"></i></div>`;
                            }).join('')}
                        </div>
                        <div class="glow-circle"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <span>Scroll Down</span>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('hero');
        if (container) {
            container.innerHTML = HeroComponent.render();
        }
    }
};
