// ==========================================
// PORTFOLIO DATA - Edit this file to update your site content
// ==========================================

const siteData = {

    // ==========================================
    // PERSONAL INFORMATION
    // ==========================================
    personal: {
        firstName: "Tarun",
        lastName: "Patil",
        title: "Java Full-Stack Developer",
        email: "tarunpatil001@gmail.com",
        location: "Pune, Maharashtra, India",
        availability: "Open for opportunities",
        status: "Open to Work", // Shows in hero badge
        statusType: "fulltime", // fulltime, freelance, contract
        profileImage: "assets/images/profile-pic.jpg",
        website: "https://tarunpatil.netlify.app/"
    },

    // ==========================================
    // SOCIAL LINKS
    // ==========================================
    social: {
        linkedin: "https://www.linkedin.com/in/tarunpatil001/",
        github: "https://github.com/TarunPatil001",
        email: "mailto:tarunpatil001@gmail.com"
    },

    // ==========================================
    // HERO SECTION
    // ==========================================
    hero: {
        greeting: "Hello, I'm",
        tagline: "Java Full Stack Developer with hands-on experience in building and deploying applications using Java, Spring Boot, React, SQL/NoSQL, Render, Netlify, and Cloudinary.",
        ctaButtons: {
            primary: { text: "Hire Me", link: "#contact", icon: "fas fa-arrow-right" }
        },
        floatingIcons: [
            { icon: "fab fa-java", position: "icon-1" },
            { icon: "fab fa-react", position: "icon-2" },
            { type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", position: "icon-3" },
            { type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", position: "icon-4" }
        ]
    },

    // ==========================================
    // ABOUT SECTION
    // ==========================================
    about: {
        intro: "Passionate <span class='text-gradient'>Java Full-Stack Developer</span> with hands-on experience in building reliable and scalable web applications.",
        description: [
            "With a strong foundation in Java and Data Structures & Algorithms, I enjoy working across backend development and interactive frontend interfaces. I am a disciplined and consistent learner who enjoys solving real-world problems through clean and maintainable code.",
        ],
        highlights: [
            "Java & Spring Boot",
            "JSP & Servlet",
            "Hibernate",
            "MYSQL",
            "ReactJs"
        ]
    },

    // ==========================================
    // SKILLS / TECH STACK
    // ==========================================
    skills: {
        sectionTitle: "Tech Stack",
        sectionSubtitle: "What I Work With",
        sectionDescription: "Technologies I’m proficient in",
        categories: [
            { key: "all", label: "All" },
            { key: "languages", label: "Languages" },
            { key: "frameworks", label: "Frameworks" },
            { key: "databases", label: "Databases" },
            { key: "tools", label: "Tools & Cloud" }
        ],
        languages: [
            { name: "Java", icon: "devicon-java-plain colored", level: "primary" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored", level: "primary" },
            { name: "HTML", icon: "devicon-html5-plain colored", level: "primary" },
            { name: "CSS", icon: "devicon-css3-plain colored", level: "primary" },
        ],
        frameworks: [
            { name: "Spring Boot", icon: "assets/icons/spring-boot.png", level: "primary" },
            { name: "Spring", icon: "devicon-spring-original colored", level: "familiar" },
            { name: "Hibernate", icon: "devicon-hibernate-plain colored", level: "familiar" },
            { name: "ReactJs", icon: "devicon-react-original colored", level: "primary", animation: "spin-slow" },
        ],
        databases: [
            { name: "MySQL", icon: "devicon-mysql-original colored", level: "primary" },
            { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: "familiar" },
        ],
        tools: [
            { name: "Git", icon: "devicon-git-plain colored", level: "primary" },
            { name: "Github", icon: "devicon-github-original", level: "primary" },
            { name: "Render", icon: "assets/icons/render.png", level: "primary" },
            { name: "Cloudinary", icon: "assets/icons/Cloudinary.png", level: "primary" },
            { name: "Netlify", icon: "assets/icons/Netlify.png", level: "primary" },
        ]
    },

    // ==========================================
    // EXPERIENCE
    // ==========================================
    experience: [
        // {
        //     title: "Full Stack Developer",
        //     company: "Tech Company Name",
        //     location: "City, Country",
        //     duration: "2023 - Present",
        //     isCurrent: true,
        //     icon: "fas fa-code",
        //     description: "Developed and maintained scalable web applications using Java Spring Boot and React. Led a team of 3 developers and improved system performance by 40%.",
        //     technologies: ["Java", "Spring Boot", "React", "AWS"]
        // },
    ],

    // ==========================================
    // EDUCATION
    // ==========================================
    education: [
        {
            degree: "Bachelor of Engineering in Computer Engineering",
            university: "Savitribai Phule Pune University (SPPU)",
            institution: "Ajeenkya DY Patil School of Engineering",
            location: "Pune, MH",
            duration: "2021 - 2024",
            grade: "CGPA: 8.2/10",
            gradeType: "cgpa",
            icon: "fas fa-university",
            description: "Built a strong foundation in computer engineering with a focus on software development, problem-solving, and core computer science subjects through academic projects and coursework.",
            subjects: ["OOPs", "Data Structures", "Algorithms", "DBMS", "Operating Systems","Computer Networks"]
        },

        {
            degree: "Diploma in Computer Engineering",
            university: "Maharashtra State Board of Technical Education (MSBTE)",
            institution: "GM Chaudhari Polytechnic",
            location: "Shahada, MH",
            duration: "2019 - 2021",
            grade: "91.66%",
            gradeType: "percentage",
            icon: "fas fa-university",
            description: "Gained strong fundamentals in programming, computer systems, and logical problem-solving through practical-oriented coursework and lab work.",
            subjects: ["Programming Fundamentals", "Computer Networks", "DBMS", "Mathematics"]
        },

        {
            degree: "12th (HSC)",
            university: "Maharashtra State Board of Secondary & Higher Secondary Education (MSBSHSE)",
            institution: "Upadhye College Of Science",
            location: "Nashik, MH",
            duration: "2018 - 2019",
            grade: "60.31%",
            gradeType: "percentage",
            icon: "fas fa-school",
            description: "Completed Higher Secondary education with Physics, Chemistry, and Mathematics, building analytical thinking and academic discipline.",
            subjects: ["Physics", "Chemistry", "Mathematics"]
        },

        {
            degree: "10th",
            university: "Central Board of Secondary Education (CBSE)",
            institution: "Shri Mahavir English Medium School",
            location: "Shahada, MH",
            duration: "2016 - 2017",
            grade: "CGPA: 8.2/9.5",
            gradeType: "cgpa",
            icon: "fas fa-school",
            description: "Completed secondary education with a focus on core subjects, developing discipline, consistency, and foundational academic skills.",
            subjects: ["Mathematics", "Science", "English"]
        }

    ],

    // ==========================================
    // PROJECTS / PORTFOLIO
    // ==========================================
    projects: [
        {
            title: "EduHub",
            subtitle: "Manage academics with ease.",
            description: "Web platform for student management, attendance, courses, and academic records.",
            image: "assets/projects/eduhub.png",
            icon: "fas fa-robot",
            technologies: ["JSP", "Servlet", "JDBC", "MYSQL", "Bootstrap", "Cloudinary", "Render"],
            liveDemo: "https://eduhub-z165.onrender.com/",
            github: "https://github.com/TarunPatil001/EduHub",
            featured: true
        },
        {
            title: "Expense Tracker",
            subtitle: "Financial insights at a glance.",
            description: "Modern web app for tracking expenses and analyzing finances efficiently.",
            image: "assets/projects/dashboard.png",
            icon: "fas fa-shopping-cart",
            technologies: ["React", "React-Router", "Redux-Toolkit", "Tailwind CSS"],
            liveDemo: "https://react-expense-tracker-dashboard.netlify.app/",
            github: "https://github.com/TarunPatil001/expense-tracker-dashboard.git",
            featured: true
        },
        {
            title: "Real Estate Web App",
            subtitle: "Property Listing & Management Platform Multi-Page",
            description: "Dynamic React real estate app with property browsing, filters, details, and responsive design.",
            image: "assets/projects/real-estate-template.png",
            icon: "fas fa-home",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "React-Router"],
            liveDemo: "https://react-template-002-real-estate.netlify.app/",
            github: "https://github.com/TarunPatil001/real-estate-app.git",
            featured: true
        },
        {
            title: "Blog App",
            subtitle: "Modern React Blog Template",
            description: "A modern, responsive blog template built with React and Vite, featuring clean design, smooth animations, and mobile-first performance.",
            image: "assets/projects/blog-template.png",
            icon: "fas fa-blog",
            technologies: ["React", "Bootstrap", "JavaScript", "CSS", "HTML"],
            liveDemo: "https://react-template-001-blog-template.netlify.app/",
            github: "https://github.com/TarunPatil001/blog-app",
            featured: true
        },
        {
            title: "Food Website Template",
            subtitle: "Responsive Web Design Template",
            description: "Responsive food website template with sections: menu, hero, deal of the days and more.",
            image: "assets/projects/food-website-template.jpg",
            icon: "fas fa-utensils",
            technologies: ["HTML", "CSS"],
            liveDemo: "https://03-food-template.netlify.app/",
            github: "https://github.com/TarunPatil001/rwd-template-001-food-template",
            featured: true
        },
        {
            title: "Automobile Services Website Template",
            subtitle: "Responsive Bootstrap 5 Template",
            description: "Responsive automobile services website template.",
            image: "assets/projects/automobile-website-template.jpg",
            icon: "fas fa-car",
            technologies: ["HTML", "CSS", "Bootstrap 5"],
            liveDemo: "https://05-automobile-services-template.netlify.app/",
            github: "https://github.com/TarunPatil001/bs5-template-001-automobile-services-template",
            featured: true
        },
        
    ],

    // ==========================================
    // CERTIFICATIONS
    // ==========================================
    certifications: [
        {
            title: "Certificate of Appreciation",
            issuer: "EY GDS",
            image: "assets/certificates/ey-gds-certificate-of-appreciation.jpg",
            link: "#",
            date: "2023"
        },        
        {
            title: "Certificate of Merit",
            issuer: "EY GDS",
            image: "assets/certificates/ey-gds-certificate-of-merit.jpg",
            link: "#",
            date: "2023"
        },
        {
            title: "Research Publication",
            issuer: "IJSRSET",
            image: "assets/certificates/ijsrset.jpg",
            link: "#",
            date: "2022"
        },
        {
            title: "DSA with Java",
            issuer: "Apna College",
            image: "assets/certificates/dsa-with-java-apna-college.jpg",
            link: "#",
            date: "2023"
        },
    ],

    // ==========================================
    // CONTACT SECTION
    // ==========================================
    contact: {
        title: "Let's talk about your project",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        formFields: {
            namePlaceholder: "John Doe",
            emailPlaceholder: "john@example.com",
            subjectPlaceholder: "Project Inquiry",
            messagePlaceholder: "Tell me about your project..."
        }
    },

    // ==========================================
    // SEO & META DATA
    // ==========================================
    seo: {
        title: "Tarun Patil | Java Full-Stack Developer",
        description: "Tarun Patil - Java Full-Stack Developer specializing in Spring Boot, React, and Cloud Technologies. Building scalable web solutions with expertise in MERN stack and modern web development.",
        keywords: "Java Developer, Full Stack Developer, Spring Boot, React, Web Development, Cloud Computing, Tarun Patil",
        ogImage: "./assets/images/og-image.jpg"
    },

};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
