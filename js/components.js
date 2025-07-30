const profileData = window.apiData?.aboutData;

// For logo and favicon
const settings = window.apiData?.settings || {};
const navbarLogoContainer = document.getElementById("navbar-logo-container");

if (navbarLogoContainer && settings && profileData) {
   navbarLogoContainer.innerHTML = `
    <a href="${settings.rootDirectory}" aria-label="Go to homepage">
      <img src="${settings.logo}" alt="${profileData.fullname || 'Tarun Patil'} Logo" class="img-fluid" loading="lazy">
    </a>
  `;
}

function changeFavicon(src) {
   let link = document.querySelector("link[rel~='icon']");
   if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
   }
   link.href = src;
}

if (settings?.favicon) {
   changeFavicon(settings.favicon);
}

// ---------------------------------------------------------------

// For profile image and info
const container = document.getElementById("profile-image-container");

if (container && profileData) {
   container.innerHTML = `
    <img src="${profileData.profile_img}" 
    alt="${profileData.fullname || "Profile Image"}" 
    class="profile-img" loading="lazy">
    `;
}

const infoContainer = document.getElementById("profile-info-container");

if (infoContainer && profileData) {
   infoContainer.innerHTML = `
    <h1 class="mb-2 user-name">${profileData.fullname || "Your Name"}</h1>
    <p class="mb-0 intro">${profileData.intro || "Your Introduction"}</p>
   `;
}

const achievements = window.apiData?.achievements || [];
const achievementsContainer1 = document.getElementById(
   "certificates-container1"
);

if (achievementsContainer1 && achievements[0]) {
   achievementsContainer1.innerHTML = `
    <div class="item p-0 item2">
    <img src="${achievements[0].imgUrl}" alt="${achievements[0].title}" class="item-img" loading="lazy">
    </div>
    `;
}

const achievementsContainer2 = document.getElementById(
   "certificates-container2"
);

if (achievementsContainer2 && achievements[1]) {
   achievementsContainer2.innerHTML = `
    <div class="item p-0 item2">
      <img src="${achievements[1].imgUrl}" alt="${achievements[1].title}" class="item-img" loading="lazy">
    </div>
  `;
}

const workUpdate = window.apiData?.workUpdate || {};
const workUpdateContainer = document.getElementById("work-update");

if (workUpdateContainer && workUpdate.description) {
   workUpdateContainer.innerHTML = `
    ${workUpdate.description}
  `;
}

const certInfo = window.apiData?.certInfo || {};
const certInfoContainer = document.getElementById("certification-info");

if (certInfoContainer && certInfo) {
   certInfoContainer.innerHTML = `
    <p class="lc-4" id="certification-info">Certified in ${certInfo.title || "Certification Title"
    } from <strong>${certInfo.institution || "Institution Name"}</strong></p>
    <a href="${certInfo.link || "#"}" target="_blank" class="">See more</a>
  `;
}

const projectCounter = document.getElementById("project-counter-count");

if (projectCounter) {
   const count = window.apiData?.projects?.length || 0;
   projectCounter.textContent = count < 10 ? `0${count}` : `${count}`;
}

const successfullProjects = window.apiData?.successfullProjects || {};
const successfullProjectDescription = document.getElementById(
   "successfull-project-description"
);
if (successfullProjectDescription && successfullProjects.description) {
   successfullProjectDescription.innerHTML = `
    ${successfullProjects.description}
  `;
}


// ----------------------------------------------------------

// For about section
const aboutDescription = document.getElementById("about-description");

if (aboutDescription && profileData) {
   aboutDescription.innerHTML = `
    ${profileData.description || "Your About Me Description"}
  `;
}

const socialMediaData = window.apiData?.socialMediaData || [];
const socialIconsContainer = document.getElementById("social-icons-container");

if (socialIconsContainer && socialMediaData.length > 0) {
   socialIconsContainer.innerHTML = socialMediaData
      .map(
         (link) => `
        <a href="${link.url}" target="_blank" class="social-icons bg-light p-2 rounded-circle">
            <img src="${link.logo}" alt="${link.platform}" class="img-fluid" loading="lazy">
        </a>
    `
      )
      .join("");
}

const aboutImg = document.getElementById("about-image-container");

if (aboutImg && profileData) {
   aboutImg.innerHTML = `
    <img src="${profileData.custom_img_for_about}" alt="About Image" class="img-fluid">
  `;
}


// ----------------------------------------------------------

// For skills section
const skillsData = window.apiData?.skills || [];
const skillsContainer = document.getElementById("skills-container");

if (skillsContainer) {
   skillsContainer.innerHTML = skillsData
      .map(
         (skill) => `

      <div class="col">
        <div class="card h-100 text-center border-0 shadow-sm glass-card py-2">
          <div class="card-body d-flex flex-column align-items-center">
            <img src="${skill.logo}" alt="${skill.technology}" class="skills-icon img-fluid" loading="lazy">
            <h6 class="mt-3 mb-0">${skill.technology}</h6>
          </div>
        </div>
      </div>
    `
      )
      .join("");
}


// ----------------------------------------------------------

// For projects section
const projectsData = window.apiData?.projects || [];
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer && projectsData.length > 0) {
   projectsContainer.innerHTML = projectsData
      .map(
         (project, index) => `
    <div id="project-${index}" class="swiper-slide d-flex flex-column align-items-center text-overlay-card">
      <div class="project-image-container position-relative overflow-hidden mb-3">
        <img src="${project.imgUrl}" alt="${project.title
        }" class="img-fluid w-100 h-100 object-fit-cover" loading="lazy">
        <div class="gradient-overlay d-flex justify-content-center align-items-center">
          <a href="${project.link
        }" target="_blank" class="btn btn-outline-primary btn-project text-decoration-none">
            View Project
          </a>
        </div>
        <div class="text-overlay position-absolute bottom-0 text-white p-3 w-100 d-flex flex-column align-items-center gap-2">
          <a href="${project.link}" target="_blank" class="lc-1">${String(
          index + 1
        ).padStart(2, "0")}. ${project.title}</a>
          <div class="d-flex flex-wrap gap-1 justify-content-center">
          ${project.tech
          .map((tech) => `<span class="badge bg-primary">${tech}</span>`)
          .join("")}
        </div>
        </div>
      </div>
    </div>
  `
      )
      .join("");

   // 🔁 Now initialize Swiper AFTER the HTML is set
   var swiper = new Swiper(".project-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      //   mousewheel: true,
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
         },
      },
   });
}


// ----------------------------------------------------------
// For education section
const educationData = window.apiData?.education || [];
const educationTimeline = document.getElementById("education-timeline");
if (educationTimeline && educationData.length > 0) {
   educationTimeline.innerHTML = educationData
      .map(
         (edu) => `

      <div class="timeline-item">
                                <div class="d-flex align-items-start gap-2 mb-2">
                                    <h4><i class="fa-solid fa-graduation-cap"></i></h4>
                                    <h4>${edu.degree}</h4>
                                </div>
                                <div class="d-flex align-items-start gap-2">
                                    <p><i class="fa-solid fa-school"></i></p>
                                    <p>${edu.institution}${edu.location ? `, ${edu.location}` : ""}</p>
                                </div>
                                <div class="d-flex align-items-start gap-2">
                                    <p><i class="fa-solid fa-building-columns"></i></p>
                                    <p>${edu.university}</p>
                                </div>
                                <div class="d-flex align-items-start gap-2 mb-2">
                                    <p><i class="fa-solid fa-percent"></i></p>
                                    <p>Score: ${edu.grade} ${edu.gradeType}</p>
                                </div>
                                <div class="d-flex align-items-center gap-2 mb-3">
                                    <i class="fa-solid fa-calendar mt-1"></i>
                                    <span>${edu.year}</span>
                                </div>
                            </div>



  `
      )
      .join("");
}

// ----------------------------------------------------------

// For achievements section
const certificatesData = window.apiData?.achievements || [];
const certificatesContainerOrg = document.getElementById("certificates-container-org");

if (certificatesContainerOrg && certificatesData.length > 0) {
   certificatesContainerOrg.innerHTML = certificatesData
      .map(
         (certificate, index) => `


      <div id="certificate-${index}" class="swiper-slide d-flex flex-column align-items-center text-overlay-card">
                                    <div class="certificate-image-container position-relative overflow-hidden mb-3">
                                         ${index < 2 ? `
            <span class="badge bg-warning position-absolute top-0 start-0 z-1 mt-2 ms-2">Overview</span>
          ` : ""}
                                        <img src="${certificate.imgUrl}"
                                            alt="Certificate 1" class="img-fluid w-100 h-100 object-fit-cover" loading="lazy">
                                        <a href="${certificate.link}" target="_blank">
                                            <div class="gradient-overlay"></div>
                                        </a>
                                        <div class="text-overlay position-absolute bottom-0 text-white p-3 w-100">
                                            <a href="${certificate.link}" target="_blank" class="lc-1">${certificate.title}</a>
                                        </div>
                                    </div>
                                </div>
    `
      ).join("");


   // 🔁 Now initialize Swiper AFTER the HTML is set
   var swiper = new Swiper(".achievements-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      //   mousewheel: true,
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
         },
      },
   });

}


// ----------------------------------------------------------

// For footer text
const footerText = document.getElementById("footer-text");

if (footerText && profileData) {
   footerText.innerHTML = `
    © ${new Date().getFullYear()} <span class="fw-bold">${profileData.fullname || "Your Name"}</span>. All Rights Reserved.
  `;
}