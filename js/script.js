document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbarSupportedContent .nav-link");
    const sections = document.querySelectorAll('section[id$="-content"]');

    // Function to update active nav item
    function updateActiveNav(activeId) {
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === '#' + activeId) {
                link.parentElement.classList.add('active');
                console.log('Active section:', activeId);
            }
        });
    }

    // Intersection Observer for scroll-based active section
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% from top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveNav(entry.target.id);
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Click-based navigation
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling

            const href = this.getAttribute('href');
            console.log('Nav link clicked:', href);

            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                console.log('Target section found:', targetSection ? 'Yes' : 'No');

                if (targetSection) {
                    // Update active state immediately
                    updateActiveNav(targetId);

                    // Close mobile menu if open first
                    const navbarCollapse = document.getElementById('navbarSupportedContent');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }

                    // Use setTimeout to ensure scroll happens after menu closes
                    setTimeout(() => {
                        // Method 1: Try scrollIntoView first
                        try {
                            const header = document.querySelector('.header');
                            const navbarCollapse = document.getElementById('navbarSupportedContent');

                            // Calculate header height including expanded navbar if open
                            let headerHeight = header ? header.offsetHeight : 80;

                            // If navbar is expanded, get the full expanded height
                            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                                // Add the height of the expanded navbar content
                                headerHeight = header.offsetHeight;
                            }

                            targetSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });

                            // Adjust for header after scrollIntoView
                            setTimeout(() => {
                                const currentScroll = window.pageYOffset;
                                const adjustedPosition = Math.max(0, currentScroll - headerHeight - 20);
                                if (Math.abs(currentScroll - adjustedPosition) > 5) {
                                    window.scrollTo({
                                        top: adjustedPosition,
                                        behavior: 'smooth'
                                    });
                                }
                            }, 100);

                        } catch (error) {
                            console.log('scrollIntoView failed, trying window.scrollTo');

                            // Method 2: Fallback to window.scrollTo
                            const header = document.querySelector('.header');
                            const navbarCollapse = document.getElementById('navbarSupportedContent');

                            // Calculate header height including expanded navbar if open
                            let headerHeight = header ? header.offsetHeight : 80;

                            // If navbar is expanded, get the full expanded height
                            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                                headerHeight = header.offsetHeight;
                            }

                            const targetPosition = targetSection.offsetTop - headerHeight - 20;
                            const finalPosition = Math.max(0, targetPosition);

                            console.log('Header height (with navbar):', headerHeight);
                            console.log('Scrolling to position:', finalPosition);

                            window.scrollTo({
                                top: finalPosition,
                                behavior: 'smooth'
                            });
                        }
                    }, 300); // Increased timeout to ensure menu is fully closed
                }
            }
        }, true); // Use capture phase
    });

    // Set initial active section on page load
    const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
    });

    if (currentSection) {
        updateActiveNav(currentSection.id);
    } else {
        updateActiveNav('overview-content'); // Default to first section
    }
});


document.addEventListener('click', function (event) {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
    var toggle = document.querySelector('.navbar-toggler');
    var isOpen = navbarCollapse.classList.contains('show');
    var clickedInsideNavbar = navbarCollapse.contains(event.target);
    var clickedToggle = toggle.contains(event.target);

    if (isOpen && !clickedInsideNavbar && !clickedToggle) {
        var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});


// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 🔽 Responsive breakpoints (matching Bootstrap breakpoints)
  breakpoints: {
    // Extra small devices (phones, <576px)
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Small devices (landscape phones, ≥576px)
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Medium devices (tablets, ≥768px)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Large devices (desktops, ≥992px)
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // Extra large devices (≥1200px)
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});



// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Construct mailto link
    const mailtoLink = `mailto:tarunpatil001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open mail client
    window.location.href = mailtoLink;
  });