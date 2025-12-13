// Navigation Component
const NavigationComponent = {
    // Auto-generate navigation items based on sections that have data
    getActiveNavItems: () => {
        const { experience, education, projects, certifications, skills, about } = siteData;
        
        // Define all possible nav items with order, names, and data conditions
        const navConfig = [
            { name: "Home", href: "#hero", hasData: true },
            { name: "About", href: "#about", hasData: about && (about.intro || about.description?.length > 0) },
            { name: "Experience", href: "#experience", hasData: experience && experience.length > 0 },
            { name: "Education", href: "#education", hasData: education && education.length > 0 },
            { name: "Skills", href: "#skills", hasData: skills && (skills.languages?.length > 0 || skills.frameworks?.length > 0 || skills.databases?.length > 0 || skills.tools?.length > 0) },
            { name: "Work", href: "#portfolio", hasData: projects && projects.length > 0 },
            { name: "Certifications", href: "#certifications", hasData: certifications && certifications.length > 0 }
        ];
        
        // Return only items that have data
        return navConfig.filter(item => item.hasData);
    },

    renderDesktopNav: () => {
        const navItems = NavigationComponent.getActiveNavItems();
        
        return `
        <div class="floating-nav glass-panel">
            <ul class="nav-links">
                ${navItems.map((item, index) => `
                    <li class="nav-item ${index === 0 ? 'active' : ''}">
                        <a href="${item.href}" class="nav-link">${item.name}</a>
                    </li>
                `).join('')}
            </ul>
            <a href="#contact" class="btn-book-call magnetic-btn">Contact</a>
        </div>
        `;
    },

    renderMobileNav: () => {
        const navItems = NavigationComponent.getActiveNavItems();
        
        return `
        <div class="mobile-menu-content">
            <span class="close-menu" id="closeMenuBtn">&times;</span>
            ${navItems.map(item => `
                <a href="${item.href}" class="mobile-link">${item.name}</a>
            `).join('')}
            <a href="#contact" class="mobile-link btn-book-call-mobile">Contact</a>
        </div>
        `;
    },

    init: () => {
        const desktopNav = document.getElementById('desktopNav');
        const mobileNav = document.getElementById('mobileMenu');
        
        if (desktopNav) {
            desktopNav.innerHTML = NavigationComponent.renderDesktopNav();
        }
        
        if (mobileNav) {
            mobileNav.innerHTML = NavigationComponent.renderMobileNav();
        }
    }
};
