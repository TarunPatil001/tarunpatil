// Contact Section Component
const ContactComponent = {
    render: () => {
        const { personal, social, contact } = siteData;
        
        return `
        <div class="container">
            <div class="section-title text-center mb-5 reveal-bottom">
                <span class="section-subtitle">Let's Connect</span>
                <h2 class="neon-text">Get In Touch</h2>
                <p>Looking for a motivated developer? Let’s connect and discuss.</p>
            </div>
            <div class="row g-4">
                <!-- Contact Info Column -->
                <div class="col-lg-5 reveal-left">
                    <div class="contact-info-wrapper">
                        <h3 class="contact-info-title mb-4">${contact.title}</h3>
                        <p class="contact-info-text mb-5">${contact.description}</p>
                        
                        <div class="contact-info-cards">
                            <div class="contact-info-card glass-card">
                                <div class="contact-info-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="contact-info-content">
                                    <span class="contact-info-label">Email</span>
                                    <a href="mailto:${personal.email}" class="contact-info-value">${personal.email}</a>
                                </div>
                            </div>
                            
                            <div class="contact-info-card glass-card">
                                <div class="contact-info-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-info-content">
                                    <span class="contact-info-label">Location</span>
                                    <span class="contact-info-value">${personal.location}</span>
                                </div>
                            </div>
                            
                            <div class="contact-info-card glass-card">
                                <div class="contact-info-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="contact-info-content">
                                    <span class="contact-info-label">Availability</span>
                                    <span class="contact-info-value">${personal.availability}</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Links -->
                        <div class="contact-social mt-5">
                            <span class="contact-social-label">Follow me</span>
                            <div class="contact-social-links">
                                <a href="${social.linkedin}" class="social-btn" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                <a href="${social.github}" class="social-btn" aria-label="GitHub" target="_blank"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Contact Form Column -->
                <div class="col-lg-7 reveal-right">
                    <div class="glass-card p-4 p-md-5 contact-form-wrapper">
                        <form id="contactForm">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name" class="form-label"><i class="fas fa-user me-2"></i>Your Name</label>
                                        <input type="text" class="form-control glass-input" id="name" placeholder="${contact.formFields.namePlaceholder}" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email" class="form-label"><i class="fas fa-envelope me-2"></i>Your Email</label>
                                        <input type="email" class="form-control glass-input" id="email" placeholder="${contact.formFields.emailPlaceholder}" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="subject" class="form-label"><i class="fas fa-tag me-2"></i>Subject</label>
                                        <input type="text" class="form-control glass-input" id="subject" placeholder="${contact.formFields.subjectPlaceholder}" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="message" class="form-label"><i class="fas fa-comment-alt me-2"></i>Message</label>
                                        <textarea class="form-control glass-input" id="message" rows="5" placeholder="${contact.formFields.messagePlaceholder}" required></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-lg btn-neon w-100 contact-submit-btn">
                                        <span class="btn-text">Send Message</span>
                                        <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    init: () => {
        const container = document.getElementById('contact');
        if (container) {
            container.innerHTML = ContactComponent.render();
            ContactComponent.initForm();
        }
    },

    initForm: () => {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                const recipientEmail = siteData.personal.email;
                const mailtoSubject = encodeURIComponent(subject);
                const mailtoBody = encodeURIComponent(`Hi Tarun,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`);
                
                // Open mail app
                window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
            });
        }
    }
};
