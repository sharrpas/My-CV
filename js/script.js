// Load CV Data from config.json
let cvData = null;

// Load config and initialize
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('config.json');
        cvData = await response.json();
        renderCV();
        initTypingAnimation();
        initScrollNavigation();
    } catch (error) {
        console.error('Error loading config:', error);
        // Fallback to default if config fails
        initTypingAnimation();
        initScrollNavigation();
    }
});

// Render CV from config
function renderCV() {
    if (!cvData) return;
    
    const { personal } = cvData;
    
    // Update page title
    document.getElementById('page-title').textContent = `${personal.name} - CV`;
    
    // Update logo
    if (personal.logoInitial) document.getElementById('logoInitial').textContent = personal.logoInitial;
    if (personal.logo) document.getElementById('logoText').textContent = personal.logo.replace(personal.logoInitial, '');
    
    // Update home section
    document.getElementById('personName').textContent = personal.name;
    document.getElementById('intro').textContent = personal.intro;
    if (personal.profileImage) document.getElementById('profileImage').src = personal.profileImage;
    
    // Update about section
    document.getElementById('aboutName').textContent = personal.name;
    document.getElementById('aboutTitle').textContent = personal.title;
    document.getElementById('aboutText').textContent = personal.about;
    
    // Render navigation
    renderNavigation();
    
    // Render personal info
    renderPersonalInfo();
    
    // Render skills
    renderSkills();
    
    // Render work experience
    renderWorkExperience();
    
    // Render education
    renderEducation();
    
    // Render tools
    renderTools();
    
    // Render projects
    renderProjects();
    
    // Render gallery
    renderGallery();
    
    // Render contact
    renderContact();
}

// Render Navigation
function renderNavigation() {
    const nav = document.getElementById('navigation');
    const navHTML = cvData.navigation.map((item, index) => `
        <li>
            <a href="${item.href}" class="${index === 0 ? 'active' : ''}">
                <i class="fa ${item.icon}"></i>${item.label}
            </a>
        </li>
    `).join('');
    nav.innerHTML = navHTML;
}

// Render Personal Info
function renderPersonalInfo() {
    const container = document.getElementById('personalInfoGrid');
    const { personal } = cvData;
    
    container.innerHTML = `
        <div class="item-info">
            <p>Birthday : <span>${personal.birthday}</span></p>
        </div>
        <div class="item-info">
            <p>Age : <span>${personal.age}</span></p>
        </div>
        <div class="item-info">
            <p>Github : <a href="${personal.github}" style="color: var(--skin-color)">${personal.github.replace('https://', '')}</a></p>
        </div>
        <div class="item-info">
            <p>Email : <a href="mailto:${personal.email}" style="color: var(--skin-color)">${personal.email}</a></p>
        </div>
        <div class="item-info">
            <p>Degree : <span>${personal.degree}</span></p>
        </div>
        <div class="item-info">
            <p>Phone : <a href="tel:${personal.phone}" style="color: var(--skin-color)">${personal.phone}</a></p>
        </div>
        <div class="item-info">
            <p>City : <span>${personal.city}</span></p>
        </div>
    `;
}

// Render Skills
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    const skillsHTML = cvData.skills.map(skill => `
        <div class="skill-badge padd-15">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');
    container.innerHTML = skillsHTML;
}

// Render Work Experience
function renderWorkExperience() {
    const container = document.getElementById('workExperienceTimeline');
    const workHTML = cvData.workExperience.map(job => `
        <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
                <i class="fa fa-calendar"></i>
                ${job.period}
            </h3>
            <h4 class="timeline-title" style="display: flex;align-items: center;">
                ${job.logo ? `<img style="width: 60px;height: 60px;object-fit: contain;margin:0 10px;" src="${job.logo}" alt="${job.company}">` : ''}
                ${job.company}
            </h4>
            <p class="timeline-text">
                ${job.position}
                <br><br>
                ${job.description}
                <br><br>
                Responsibilities:
                <br>
                ${job.responsibilities.map(resp => `- ${resp}<br>`).join('')}
                <div style="display: flex;flex-wrap: wrap;">
                    ${job.technologies.map(tech => `
                        <span style="display: flex;color: var(--text-black-700);margin-right:10px">
                            <span style="color:var(--skin-color)">#</span>${tech}
                        </span>
                    `).join('')}
                </div>
                <a class="btn" href="${job.link}" target="_blank">Any More ...</a>
            </p>
        </div>
    `).join('');
    container.innerHTML = workHTML;
}

// Render Education
function renderEducation() {
    const container = document.getElementById('educationTimeline');
    const eduHTML = cvData.education.map(edu => `
        <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
                <i class="fa fa-calendar"></i>
                ${edu.period}
            </h3>
            <h4 class="timeline-title" style="display: flex;align-items: center;">
                ${edu.logo ? `<img style="width: 60px;height: 60px;object-fit: contain;margin:0 10px;" src="${edu.logo}" alt="${edu.institution}">` : ''}
                ${edu.institution}
            </h4>
            <p class="timeline-text">
                ${edu.degree}
            </p>
        </div>
    `).join('');
    container.innerHTML = eduHTML;
}

// Render Tools
function renderTools() {
    const container = document.getElementById('toolsContainer');
    const toolsHTML = cvData.tools.map(tool => `
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                    <img src="${tool.icon}" style="width: 40px;height:40px" alt="${tool.name}">
                </div>
                <h4>${tool.name}</h4>
                <p>${tool.description}</p>
            </div>
        </div>
    `).join('');
    container.innerHTML = toolsHTML;
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    const projectsHTML = cvData.projects.map(project => `
        <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                    <img src="${project.image}" style="margin: 10px;" alt="${project.name}"/>
                </div>
                <div class="portfolio-item-link">
                    <p>${project.name}</p>
                    <div>
                        ${project.links.map(link => `
                            <a href="${link.url}" target="_blank" class="btn">${link.text}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    container.innerHTML = projectsHTML;
}

// Render Gallery
function renderGallery() {
    const container = document.getElementById('galleryContainer');
    const galleryHTML = cvData.gallery.map(item => `
        <div class="portfolio-item padd-15" onclick="modal('${item.id}')">
            <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                    <img src="${item.image}" id="${item.id}" style="margin: 10px;" alt="Gallery Image"/>
                </div>
                ${item.link ? `
                    <div class="portfolio-item-link">
                        <div>
                            <a href="${item.link}" target="_blank" class="btn">OPEN LINK</a>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    container.innerHTML = galleryHTML;
}

// Render Contact
function renderContact() {
    const container = document.getElementById('contactContainer');
    const { personal } = cvData;
    
    container.innerHTML = `
        <div class="contact-info-item padd-15">
            <div class="icon">
                <i class="fa fa-phone"></i>
            </div>
            <h4>Call Me</h4>
            <p>${personal.phone}</p>
        </div>
        <div class="contact-info-item padd-15">
            <div class="icon">
                <i class="fa fa-map-marker-alt"></i>
            </div>
            <h4>Address</h4>
            <p>${personal.city}</p>
        </div>
        <div class="contact-info-item padd-15">
            <div class="icon">
                <i class="fa fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p>${personal.email}</p>
        </div>
        <div class="contact-info-item padd-15">
            <div class="icon">
                <i class="fab fa-telegram"></i>
            </div>
            <h4>Telegram</h4>
            <p>${personal.telegram}</p>
        </div>
    `;
}

// Initialize Typing Animation
function initTypingAnimation() {
    const strings = cvData ? cvData.personal.typingTitles : ["Web Developer", "BackEnd Developer"];
    new Typed(".typing", {
        loop: true,
        backDelay: 1000,
        strings: strings,
        typeSpeed: 150,
        backSpeed: 100,
    });
}

// Initialize Scroll Navigation
function initScrollNavigation() {
    const navLink = document.querySelectorAll(".aside .nav a");
    
    document.addEventListener("scroll", (e) => {
        if (document.scrollingElement.scrollTop >= 0 && document.scrollingElement.scrollTop < 668) {
            navLink.forEach(e => e.classList.remove("active"));
            navLink[0].classList.add('active');
        } else if (document.scrollingElement.scrollTop >= 668 && document.scrollingElement.scrollTop < 2600) {
            navLink.forEach(e => e.classList.remove("active"));
            navLink[1].classList.add('active');
        } else if (document.scrollingElement.scrollTop >= 2600 && document.scrollingElement.scrollTop < 3400) {
            navLink.forEach(e => e.classList.remove("active"));
            navLink[2].classList.add('active');
        } else if (document.scrollingElement.scrollTop >= 3400 && document.scrollingElement.scrollTop < 4600) {
            navLink.forEach(e => e.classList.remove("active"));
            navLink[3].classList.add('active');
        } else if (document.scrollingElement.scrollTop >= 4600) {
            navLink.forEach(e => e.classList.remove("active"));
            navLink[4].classList.add('active');
        }
    });
}

// Modal function
let open = false;
const modal = (img) => {
    const modal_element = document.getElementById('modal');
    const image_modal = document.getElementById('image_modal');
    
    if (img) {
        const image_element = document.getElementById(img);
        const image_element_value = image_element.attributes.getNamedItem('src').nodeValue;
        image_modal.setAttribute('src', image_element_value);
    }
    
    modal_element.classList.toggle('hide');
}

// PDF Export Function - Using Browser Print Dialog
function exportToPDF() {
    if (!cvData) {
        alert('CV data not loaded yet. Please wait...');
        return;
    }

    console.log('Opening print dialog for PDF export...');
    
    // Get current theme color
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--skin-color').trim() || '#ec1839';
    const printContent = generatePrintHTML(themeColor);
    
    // Open in new window for printing
    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Wait for content to load, then trigger print
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.focus();
            printWindow.print();
        }, 500);
    };
    
    console.log('Print window opened. Use "Save as PDF" in the print dialog.');
}

// Generate Print HTML
function generatePrintHTML(themeColor) {
    const { personal, skills, workExperience, education, tools, projects } = cvData;
    
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
    </head>
    <body>
    <div style="--theme-color: ${themeColor};">
        <!-- Page 1 -->
        <div class="page">
            <!-- Header -->
            <div class="cv-header">
                <h1>${personal.name}</h1>
                <div class="title">${personal.title}</div>
                <div class="contact-row">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${personal.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${personal.phone}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${personal.city}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-github"></i>
                        <span>${personal.github.replace('https://', '')}</span>
                    </div>
                </div>
            </div>
            
            <!-- About -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-user"></i>
                    About Me
                </div>
                <div class="about-text">${personal.about}</div>
            </div>
            
            <!-- Two Columns: Personal Info & Skills -->
            <div class="two-column">
                <!-- Personal Info -->
                <div class="column">
                    <div class="section">
                        <div class="section-title" style="font-size: 12pt;">
                            <i class="fas fa-info-circle"></i>
                            Personal Info
                        </div>
                        <div class="info-grid" style="grid-template-columns: 1fr;">
                            <div class="info-item">
                                <span class="info-label">Birthday:</span>
                                <span class="info-value">${personal.birthday}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Age:</span>
                                <span class="info-value">${personal.age}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">City:</span>
                                <span class="info-value">${personal.city}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Degree:</span>
                                <span class="info-value">${personal.degree}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Skills -->
                <div class="column">
                    <div class="section">
                        <div class="section-title" style="font-size: 12pt;">
                            <i class="fas fa-code"></i>
                            Skills
                        </div>
                        <div class="skills-badges">
                            ${skills.map(skill => `
                                <span class="skill-badge-print">
                                    <i class="${skill.icon}"></i>
                                    ${skill.name}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Work Experience - Full Width (First Job Only) -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-briefcase"></i>
                    Work Experience
                </div>
                ${workExperience.slice(0, 1).map(job => `
                            <div class="timeline-item">
                                <div class="timeline-header">
                                    <div class="timeline-company">
                                        ${job.logo ? `<img src="${job.logo}" alt="${job.company}">` : ''}
                                        <h3>${job.company}</h3>
                                    </div>
                                    <div class="timeline-period">
                                        <i class="fas fa-calendar"></i>
                                        ${job.period}
                                    </div>
                                </div>
                                <div class="timeline-position">${job.position}</div>
                                <div class="timeline-description">${job.description}</div>
                                <ul class="timeline-responsibilities">
                                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                                </ul>
                                <div class="timeline-technologies">
                                    ${job.technologies.map(tech => `<span class="tech-tag"><span class="hash">#</span>${tech}</span>`).join(' ')}
                                </div>
                                <a href="${job.link}" class="timeline-link">${job.link}</a>
                            </div>
                        `).join('')}
            </div>
        </div>
        
        <!-- Page 2 -->
        <div class="page">
            <!-- Work Experience (Continued) -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-briefcase"></i>
                    Work Experience (continued)
                </div>
                ${workExperience.slice(1).map(job => `
                    <div class="timeline-item">
                        <div class="timeline-header">
                            <div class="timeline-company">
                                ${job.logo ? `<img src="${job.logo}" alt="${job.company}">` : ''}
                                <h3>${job.company}</h3>
                            </div>
                            <div class="timeline-period">
                                <i class="fas fa-calendar"></i>
                                ${job.period}
                            </div>
                        </div>
                        <div class="timeline-position">${job.position}</div>
                        <div class="timeline-description">${job.description}</div>
                        <ul class="timeline-responsibilities">
                            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                        <div class="timeline-technologies">
                            ${job.technologies.map(tech => `<span class="tech-tag"><span class="hash">#</span>${tech}</span>`).join(' ')}
                        </div>
                        <a href="${job.link}" class="timeline-link">${job.link}</a>
                    </div>
                `).join('')}
            </div>
            
            <!-- Education -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-graduation-cap"></i>
                    Education
                </div>
                ${education.map(edu => `
                    <div class="timeline-item">
                        <div class="timeline-header">
                            <div class="timeline-company">
                                ${edu.logo ? `<img src="${edu.logo}" alt="${edu.institution}">` : ''}
                                <h3>${edu.institution}</h3>
                            </div>
                            <div class="timeline-period">
                                <i class="fas fa-calendar"></i>
                                ${edu.period}
                            </div>
                        </div>
                        <div class="timeline-position">${edu.degree}</div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Tools -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-tools"></i>
                    Tools & Technologies
                </div>
                <div class="tools-grid">
                    ${tools.map(tool => `
                        <div class="tool-item">
                            ${tool.icon ? `<img src="${tool.icon}" alt="${tool.name}">` : ''}
                            <div class="tool-name">${tool.name}</div>
                            <div class="tool-description">${tool.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <!-- Page 3 -->
        <div class="page">
            <!-- Projects -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-project-diagram"></i>
                    Portfolio Projects
                </div>
                <div class="projects-grid">
                    ${projects.map(project => `
                        <div class="project-item">
                            <img src="${project.image}" alt="${project.name}" class="project-image">
                            <div class="project-info">
                                <div class="project-name">${project.name}</div>
                                <div class="project-links">
                                    ${project.links.map(link => `
                                        <a href="${link.url}" class="project-link">${link.text}</a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Contact -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-envelope"></i>
                    Contact Information
                </div>
                <div class="contact-grid">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <p>${personal.phone}</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <p>${personal.email}</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Location</h4>
                            <p>${personal.city}</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fab fa-telegram"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Telegram</h4>
                            <p>${personal.telegram}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        ${getPrintStyles()}
    </style>
    </body>
    </html>
    `;
}

// Preview Print Layout (for debugging)
function previewPrint() {
    if (!cvData) {
        alert('CV data not loaded yet. Please wait...');
        return;
    }
    
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--skin-color').trim() || '#ec1839';
    const printContent = generatePrintHTML(themeColor);
    
    // Open in new window
    const printWindow = window.open('', 'Print Preview', 'width=900,height=1200');
    printWindow.document.write(printContent);
    printWindow.document.close();
}

// Get Print Styles
function getPrintStyles() {
    return `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @page { size: A4; margin: 0; }
        body { font-family: 'Arial', 'Helvetica', sans-serif; background: white; color: #000; font-size: 11pt; line-height: 1.5; }
        .page { width: 210mm; min-height: 297mm; padding: 15mm; margin: 0 auto; background: white; page-break-after: always; }
        .page:last-child { page-break-after: auto; }
        .cv-header { text-align: center; border-bottom: 3px solid var(--theme-color); padding-bottom: 15px; margin-bottom: 20px; }
        .cv-header h1 { font-size: 28pt; font-weight: 700; color: #000; margin-bottom: 5px; }
        .cv-header .title { font-size: 14pt; color: var(--theme-color); font-weight: 600; margin-bottom: 10px; }
        .cv-header .contact-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; font-size: 9pt; margin-top: 10px; }
        .cv-header .contact-item { display: flex; align-items: center; gap: 5px; }
        .cv-header .contact-item i { color: var(--theme-color); }
        .section { margin-bottom: 20px; page-break-inside: avoid; }
        .section-title { font-size: 16pt; font-weight: 700; color: #000; border-bottom: 2px solid var(--theme-color); padding-bottom: 5px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
        .section-title i { color: var(--theme-color); font-size: 14pt; }
        .two-column { display: flex; gap: 20px; margin-bottom: 20px; }
        .column { flex: 1; }
        .about-text { font-size: 10pt; line-height: 1.6; color: #333; text-align: justify; margin-bottom: 15px; }
        .info-grid { display: grid; grid-template-columns: 1fr; gap: 8px; font-size: 9pt; }
        .info-item { display: flex; padding: 5px 0; border-bottom: 1px solid #e8e8e8; }
        .info-label { font-weight: 600; color: #000; margin-right: 5px; }
        .info-value { color: #333; }
        .info-value a { color: var(--theme-color); text-decoration: none; }
        .skills-badges { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-badge-print { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: white; border: 1.5px solid var(--theme-color); border-radius: 20px; font-size: 9pt; color: #000; font-weight: 500; }
        .skill-badge-print i { color: var(--theme-color); font-size: 10pt; }
        .timeline-item { position: relative; padding-left: 20px; padding-bottom: 15px; border-left: 2px solid var(--theme-color); margin-bottom: 10px; page-break-inside: avoid; }
        .timeline-item:last-child { border-left: 2px solid transparent; padding-bottom: 0; }
        .timeline-item::before { content: ''; position: absolute; left: -6px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--theme-color); border: 2px solid white; box-shadow: 0 0 0 1px var(--theme-color); }
        .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; flex-wrap: wrap; }
        .timeline-company { display: flex; align-items: center; gap: 8px; }
        .timeline-company img { width: 30px; height: 30px; object-fit: contain; }
        .timeline-company h3 { font-size: 12pt; font-weight: 700; color: #000; }
        .timeline-period { font-size: 8pt; color: #666; display: flex; align-items: center; gap: 4px; }
        .timeline-period i { color: var(--theme-color); }
        .timeline-position { font-size: 10pt; color: var(--theme-color); font-weight: 600; margin-bottom: 5px; }
        .timeline-description { font-size: 9pt; color: #333; line-height: 1.5; margin-bottom: 8px; }
        .timeline-responsibilities { list-style: none; margin-bottom: 8px; font-size: 9pt; }
        .timeline-responsibilities li { padding-left: 12px; position: relative; margin-bottom: 3px; color: #333; }
        .timeline-responsibilities li::before { content: '▸'; position: absolute; left: 0; color: var(--theme-color); }
        .timeline-technologies { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 5px; }
        .tech-tag { font-size: 8pt; color: #000; }
        .tech-tag .hash { color: var(--theme-color); }
        .timeline-link { font-size: 8pt; color: var(--theme-color); text-decoration: none; }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .tool-item { border: 1px solid #ddd; padding: 12px; text-align: center; background: white; border-radius: 4px; page-break-inside: avoid; }
        .tool-item img { width: 35px; height: 35px; margin-bottom: 8px; object-fit: contain; }
        .tool-name { font-size: 9pt; font-weight: 600; color: #000; margin-bottom: 5px; }
        .tool-description { font-size: 7pt; color: #555; line-height: 1.3; }
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        .project-item { border: 1px solid #ddd; border-radius: 4px; overflow: hidden; background: white; page-break-inside: avoid; }
        .project-image { width: 100%; height: 100px; object-fit: cover; }
        .project-info { padding: 10px; }
        .project-name { font-size: 10pt; font-weight: 600; color: #000; margin-bottom: 5px; }
        .project-links { display: flex; gap: 8px; flex-wrap: wrap; }
        .project-link { font-size: 8pt; color: var(--theme-color); text-decoration: none; border: 1px solid var(--theme-color); padding: 3px 8px; border-radius: 3px; }
        .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        .contact-item { display: flex; align-items: center; gap: 12px; padding: 10px; border: 1px solid #e8e8e8; border-radius: 4px; }
        .contact-icon { width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; background: var(--theme-color); border-radius: 50%; color: white; font-size: 14pt; flex-shrink: 0; }
        .contact-details h4 { font-size: 10pt; font-weight: 600; color: #000; margin-bottom: 2px; }
        .contact-details p { font-size: 9pt; color: #333; }
        @media print { body { background: white; } .page { margin: 0; box-shadow: none; } }
    `;
}

