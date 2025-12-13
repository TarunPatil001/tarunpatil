// Main Components Index - Initializes all components
const Components = {
    // List of all components to initialize
    list: [
        NavigationComponent,
        HeroComponent,
        AboutComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        ProjectsComponent,
        CertificationsComponent,
        ContactComponent
    ],

    // Initialize all components
    initAll: () => {
        Components.list.forEach((component, index) => {
            try {
                if (component && typeof component.init === 'function') {
                    component.init();
                }
            } catch (error) {
                console.error(`Error initializing component ${index}:`, error);
            }
        });

        // Update page title and meta from data
        Components.updateMeta();
        
        // Dispatch event when all components are loaded
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
    },

    // Update page meta information
    updateMeta: () => {
        const { seo, personal } = siteData;
        
        // Update title
        document.title = seo.title;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', seo.description);
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute('content', seo.keywords);
        
        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', seo.title);
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', seo.description);
    },

    // Reinitialize a specific component
    refresh: (componentName) => {
        const component = Components.list.find(c => c.constructor.name === componentName);
        if (component && typeof component.init === 'function') {
            component.init();
        }
    }
};
