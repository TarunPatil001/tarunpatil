document.addEventListener('DOMContentLoaded', () => {
    
    // --- Initialize All Components ---
    try {
        if (typeof Components !== 'undefined' && typeof siteData !== 'undefined') {
            Components.initAll();
            console.log('✅ All components initialized successfully');
        } else {
            console.error('❌ Components or siteData not loaded');
        }
    } catch (error) {
        console.error('❌ Error initializing components:', error);
    }
    
    // --- Particle Background (Mesh) ---
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) {
        console.warn('⚠️ particles-canvas not found; skipping particle background');
        return;
    }

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles = [];
    let canvasWidth = 0;
    let canvasHeight = 0;
    let resizeTimer = null;

    function resizeCanvas() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;

        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';
        canvas.width = Math.floor(canvasWidth * dpr);
        canvas.height = Math.floor(canvasHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function handleResize() {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
            resizeCanvas();
            initParticles();
            if (prefersReducedMotion) {
                renderParticlesOnce();
            }
        }, 150);
    }

    resizeCanvas();
    window.addEventListener('resize', handleResize);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight;
            this.size = Math.random() * 2 + 0.6;
            this.speedX = prefersReducedMotion ? 0 : (Math.random() * 0.5 - 0.25);
            this.speedY = prefersReducedMotion ? 0 : (Math.random() * 0.5 - 0.25);
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvasWidth) this.x = 0;
            if (this.x < 0) this.x = canvasWidth;
            if (this.y > canvasHeight) this.y = 0;
            if (this.y < 0) this.y = canvasHeight;
        }
        
        draw() {
            ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        const baseCount = Math.min(110, Math.floor((canvasWidth * canvasHeight) / 15000));
        const particleCount = prefersReducedMotion ? Math.min(40, baseCount) : baseCount;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function connectParticles() {
        const maxDistance = 130;
        const maxDistanceSq = maxDistance * maxDistance;
        const maxLinksPerParticle = 6;
        const linkCounts = new Array(particles.length).fill(0);

        for (let i = 0; i < particles.length; i++) {
            if (linkCounts[i] >= maxLinksPerParticle) continue;

            for (let j = i + 1; j < particles.length; j++) {
                if (linkCounts[i] >= maxLinksPerParticle) break;
                if (linkCounts[j] >= maxLinksPerParticle) continue;

                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distanceSq = dx * dx + dy * dy;

                if (distanceSq < maxDistanceSq) {
                    const opacity = (1 - distanceSq / maxDistanceSq) * 0.22;
                    ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();

                    linkCounts[i] += 1;
                    linkCounts[j] += 1;
                }
            }
        }
    }

    function renderParticlesOnce() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach(particle => {
            particle.draw();
        });
        connectParticles();
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        connectParticles();
        requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    if (prefersReducedMotion) {
        renderParticlesOnce();
    } else {
        animateParticles();
    }
    
    // --- Custom Cursor ---
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        follower.style.left = cursorX + 'px';
        follower.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .glass-card, .tech-card, input, textarea, .skill-tab, .social-btn, .hero-social-link, .theme-toggle, .nav-link, .btn, .mobile-menu-btn, .scroll-to-top, .project-card, .close-menu, [role="button"], [onclick]');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            follower.classList.remove('hover');
        });
    });
    
    // Hide cursor on mobile
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        document.body.style.cursor = 'auto';
    }
    
    // --- Magnetic Buttons (Removed) ---
    /*
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
    */
    
    // --- Skill Filter Tabs ---
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            skillItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty links
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100; // Adjusted for floating nav
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Active Link Highlighting ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            const link = li.querySelector('a');
            if (link && link.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Form Validation ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.classList.remove('btn-primary', 'btn-neon');
                submitBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-success');
                    submitBtn.classList.add('btn-primary', 'btn-neon');
                }, 3000);
            }, 1500);
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Animated Counter for Statistics ---
    const counters = document.querySelectorAll('.stat-number');
    let counterAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        });
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('#stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counterAnimated) {
                    animateCounters();
                    counterAnimated = true;
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    // --- Lazy Loading for Images ---
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // --- Enhanced Keyboard Navigation ---
    document.addEventListener('keydown', (e) => {
        // Press 'H' to go to home
        if (e.key === 'h' || e.key === 'H') {
            if (!e.target.matches('input, textarea')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        
        // Press 'C' to focus on contact form
        if (e.key === 'c' || e.key === 'C') {
            if (!e.target.matches('input, textarea')) {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                        document.querySelector('#name')?.focus();
                    }, 500);
                }
            }
        }
    });
    
    // --- Scroll Progress Bar ---
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = progress + '%';
        }
    });
    
    // --- Smooth Parallax Effect ---
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.bg-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
        });
    });
    
    // --- Text Reveal on Scroll ---
    const textElements = document.querySelectorAll('.hero-text, .testimonial-text');
    
    textElements.forEach(el => {
        el.style.backgroundImage = 'linear-gradient(90deg, var(--text-light) 0%, var(--text-muted) 50%, transparent 50%)';
        el.style.backgroundSize = '200% 100%';
        el.style.backgroundPosition = '100% 0';
        el.style.webkitBackgroundClip = 'text';
        el.style.transition = 'background-position 0.8s ease';
    });

    // --- Console Easter Egg ---
    console.log('%c🚀 TARUN PATIL', 'color: #6c63ff; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 0 #bc13fe;');
    console.log('%cJava Full-Stack Developer', 'color: #00d2ff; font-size: 18px; font-style: italic;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #6c63ff;');
    console.log('%c👋 Hello, curious developer!', 'color: #fff; font-size: 14px;');
    console.log('%cLove exploring code? Let\'s connect!', 'color: #00ff88; font-size: 12px;');
    console.log('%c📧 tarun@example.com | 💼 LinkedIn | 🐙 GitHub', 'color: #a0a0a0; font-size: 11px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #6c63ff;');
    console.log('%c⌨️ Keyboard Shortcuts:', 'color: #ff0055; font-size: 12px; font-weight: bold;');
    console.log('%c   H - Go to Home | C - Contact Form', 'color: #a0a0a0; font-size: 10px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #6c63ff;');
    
    // Fun ASCII art
    console.log(`%c
    ████████╗██████╗ 
    ╚══██╔══╝██╔══██╗
       ██║   ██████╔╝
       ██║   ██╔═══╝ 
       ██║   ██║     
       ╚═╝   ╚═╝     
    `, 'color: #6c63ff; font-size: 8px;');

    // --- Image Modal for Certificates ---
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    const certImages = document.querySelectorAll('.cert-img');
    
    if (imageModal && modalImg && captionText) {
        certImages.forEach(img => {
            img.addEventListener('click', function() {
                const wrapper = this.closest('.cert-img-wrapper');
                const certLink = wrapper?.dataset?.link;

                if (certLink && certLink !== '#') {
                    window.open(certLink, '_blank', 'noopener,noreferrer');
                    return;
                }

                imageModal.style.display = "flex";
                imageModal.style.flexDirection = "column";
                imageModal.style.justifyContent = "center";
                imageModal.style.alignItems = "center";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });
        
        const closeImageModal = document.querySelector('.close-image-modal');
        if (closeImageModal) {
            closeImageModal.addEventListener('click', () => {
                imageModal.style.display = "none";
                document.body.style.overflow = ''; // Restore scrolling
            });
        }
        
        // Close modal when clicking outside the image
        window.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = "none";
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    // --- PWA Service Worker Registration ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});
