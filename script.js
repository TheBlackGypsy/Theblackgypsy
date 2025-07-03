// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality
const modalData = {
    'education-modal': {
        title: 'Education & Learning Journey',
        content: `
            <h3>ECPI University - Cyber and Information Science</h3>
            <p>Currently pursuing my second Bachelor's degree with a focus on:</p>
            <ul>
                <li>Network Security and Infrastructure</li>
                <li>Ethical Hacking and Penetration Testing</li>
                <li>Digital Forensics and Incident Response</li>
                <li>Risk Assessment and Management</li>
                <li>Compliance and Regulatory Frameworks</li>
            </ul>
            <p>This comprehensive program combines theoretical knowledge with hands-on practical experience in cybersecurity.</p>
        `
    },
    'skills-modal': {
        title: 'Technical Skills & Programming',
        content: `
            <h3>Programming Languages</h3>
            <ul>
                <li><strong>C Programming:</strong> System-level programming and security tool development</li>
                <li><strong>Python:</strong> Automation, scripting, and cybersecurity applications</li>
                <li><strong>C#:</strong> Windows application development and security tools</li>
            </ul>
            <h3>Cybersecurity Tools</h3>
            <ul>
                <li>Virtual Machine Management (VMware, VirtualBox)</li>
                <li>Linux System Administration</li>
                <li>Network Analysis and Monitoring</li>
                <li>Security Assessment Tools</li>
            </ul>
        `
    },
    'collaboration-modal': {
        title: 'Collaboration Opportunities',
        content: `
            <h3>Looking to Collaborate On:</h3>
            <ul>
                <li><strong>Beginner Coding Projects:</strong> Simple applications and scripts</li>
                <li><strong>Cybersecurity Labs:</strong> Virtual environments for learning</li>
                <li><strong>Open Source Security Tools:</strong> Contributing to community projects</li>
                <li><strong>Educational Content:</strong> Tutorials and learning resources</li>
            </ul>
            <p>I'm passionate about learning and sharing knowledge with fellow students and professionals in the cybersecurity field.</p>
            <p><strong>Contact me</strong> if you have interesting projects or learning opportunities!</p>
        `
    },
    'career-modal': {
        title: 'Career Goals & Aspirations',
        content: `
            <h3>Target Roles:</h3>
            <ul>
                <li><strong>Cybersecurity Analyst:</strong> Monitoring and analyzing security threats</li>
                <li><strong>Penetration Tester:</strong> Ethical hacking and vulnerability assessment</li>
                <li><strong>Security Engineer:</strong> Designing and implementing security solutions</li>
                <li><strong>Incident Response Specialist:</strong> Managing security incidents and breaches</li>
            </ul>
            <h3>Industry Focus:</h3>
            <p>Interested in working with organizations that prioritize security and innovation, particularly in:</p>
            <ul>
                <li>Financial Services</li>
                <li>Healthcare Technology</li>
                <li>Government and Defense</li>
                <li>Technology Startups</li>
            </ul>
        `
    },
    'passion-modal': {
        title: 'Why "The Black Gypsy"?',
        content: `
            <h3>The Story Behind the Name</h3>
            <p>The name "The Black Gypsy" represents my journey through different worlds - music and technology. Like a gypsy, I've traveled through various musical genres and technological landscapes, always learning and adapting.</p>
            
            <h3>Music & Technology Connection</h3>
            <p>Music has taught me:</p>
            <ul>
                <li><strong>Pattern Recognition:</strong> Essential for identifying security threats</li>
                <li><strong>Attention to Detail:</strong> Critical for cybersecurity analysis</li>
                <li><strong>Creative Problem Solving:</strong> Thinking outside the box for security solutions</li>
                <li><strong>Rhythm and Timing:</strong> Understanding the flow of network traffic and system behaviors</li>
            </ul>
            
            <p>Both music and cybersecurity require discipline, practice, and a deep understanding of complex systems.</p>
        `
    },
    'project-modal': {
        title: 'Linux Virtual Machine Projects',
        content: `
            <h3>Current VM Projects:</h3>
            <ul>
                <li><strong>Security Lab Environment:</strong> Multiple Linux distributions for testing</li>
                <li><strong>Network Simulation:</strong> Creating isolated networks for security analysis</li>
                <li><strong>Penetration Testing Lab:</strong> Vulnerable systems for ethical hacking practice</li>
                <li><strong>Forensics Workstation:</strong> Digital forensics tools and techniques</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <ul>
                <li>VMware Workstation / VirtualBox</li>
                <li>Kali Linux, Ubuntu, CentOS</li>
                <li>Docker containers for isolated testing</li>
                <li>Network configuration and monitoring tools</li>
            </ul>
            
            <h3>Learning Objectives:</h3>
            <p>These projects help me understand system administration, network security, and hands-on cybersecurity practices in a safe, controlled environment.</p>
        `
    }
};

const researchModalData = {
    'zero-trust': {
        title: 'Zero Trust Architecture',
        content: `
            <h3>Overview</h3>
            <p>Zero Trust is a security model based on the principle of "never trust, always verify." It assumes that threats can come from anywhere, both inside and outside the network perimeter.</p>
            
            <h3>Key Principles</h3>
            <ul>
                <li><strong>Verify explicitly:</strong> Always authenticate and authorize based on all available data points</li>
                <li><strong>Use least privilege access:</strong> Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA)</li>
                <li><strong>Assume breach:</strong> Minimize blast radius and segment access</li>
            </ul>
            
            <h3>Implementation Components</h3>
            <ul>
                <li>Identity and access management (IAM)</li>
                <li>Multi-factor authentication (MFA)</li>
                <li>Network segmentation</li>
                <li>Continuous monitoring and analytics</li>
            </ul>
            
            <h3>Research Citation</h3>
            <p><em>Rose, S., Borchert, O., Mitchell, S., & Connelly, S. (2020). Zero Trust Architecture. NIST Special Publication 800-207. National Institute of Standards and Technology.</em></p>
        `
    },
    'ai-security': {
        title: 'AI in Cybersecurity',
        content: `
            <h3>Machine Learning Applications</h3>
            <p>Artificial Intelligence and Machine Learning are transforming cybersecurity by enabling automated threat detection, behavioral analysis, and predictive security measures.</p>
            
            <h3>Key Applications</h3>
            <ul>
                <li><strong>Anomaly Detection:</strong> Identifying unusual patterns in network traffic</li>
                <li><strong>Malware Classification:</strong> Automated identification of malicious software</li>
                <li><strong>Phishing Detection:</strong> Email and web content analysis</li>
                <li><strong>User Behavior Analytics:</strong> Detecting insider threats</li>
            </ul>
            
            <h3>Challenges</h3>
            <ul>
                <li>Adversarial attacks on AI systems</li>
                <li>False positive rates</li>
                <li>Data quality and bias</li>
                <li>Explainability of AI decisions</li>
            </ul>
            
            <h3>Research Citation</h3>
            <p><em>Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press. Applications in cybersecurity have been extensively documented in IEEE Security & Privacy publications.</em></p>
        `
    },
    'cloud-security': {
        title: 'Cloud Security Frameworks',
        content: `
            <h3>Cloud Security Challenges</h3>
            <p>As organizations migrate to cloud environments, new security challenges emerge that require specialized frameworks and approaches.</p>
            
            <h3>CSA Security Guidance</h3>
            <ul>
                <li><strong>Shared Responsibility Model:</strong> Understanding provider vs. customer responsibilities</li>
                <li><strong>Data Protection:</strong> Encryption, key management, and data sovereignty</li>
                <li><strong>Identity and Access Management:</strong> Cloud-native IAM solutions</li>
                <li><strong>Network Security:</strong> Virtual private clouds and micro-segmentation</li>
            </ul>
            
            <h3>Key Frameworks</h3>
            <ul>
                <li>Cloud Controls Matrix (CCM)</li>
                <li>Consensus Assessments Initiative Questionnaire (CAIQ)</li>
                <li>Cloud Security Alliance (CSA) guidance</li>
                <li>ISO 27017 and 27018 standards</li>
            </ul>
            
            <h3>Research Citation</h3>
            <p><em>Cloud Security Alliance. (2023). Security Guidance for Critical Areas of Focus in Cloud Computing v4.0. Available at: https://cloudsecurityalliance.org/</em></p>
        `
    },
    'vulnerability': {
        title: 'Vulnerability Assessment',
        content: `
            <h3>OWASP Top 10 Web Application Security Risks</h3>
            <p>The OWASP Top 10 is a standard awareness document for developers and web application security, representing the most critical security risks to web applications.</p>
            
            <h3>2021 Top 10 Risks</h3>
            <ol>
                <li><strong>Broken Access Control:</strong> Restrictions not properly enforced</li>
                <li><strong>Cryptographic Failures:</strong> Weak or missing encryption</li>
                <li><strong>Injection:</strong> SQL, NoSQL, OS, and LDAP injection</li>
                <li><strong>Insecure Design:</strong> Missing or ineffective control design</li>
                <li><strong>Security Misconfiguration:</strong> Insecure default configurations</li>
            </ol>
            
            <h3>Assessment Methodology</h3>
            <ul>
                <li>Automated vulnerability scanning</li>
                <li>Manual penetration testing</li>
                <li>Code review and static analysis</li>
                <li>Dynamic application security testing (DAST)</li>
            </ul>
            
            <h3>Research Citation</h3>
            <p><em>OWASP Foundation. (2021). OWASP Top 10 - 2021: The Ten Most Critical Web Application Security Risks. Available at: https://owasp.org/www-project-top-ten/</em></p>
        `
    },
    'cryptography': {
        title: 'Post-Quantum Cryptography',
        content: `
            <h3>The Quantum Threat</h3>
            <p>Quantum computers pose a significant threat to current cryptographic systems, particularly those based on integer factorization and discrete logarithm problems.</p>
            
            <h3>Post-Quantum Algorithms</h3>
            <ul>
                <li><strong>Lattice-based:</strong> Learning With Errors (LWE) problems</li>
                <li><strong>Code-based:</strong> Error-correcting codes</li>
                <li><strong>Multivariate:</strong> Multivariate polynomial equations</li>
                <li><strong>Hash-based:</strong> One-way hash functions</li>
                <li><strong>Isogeny-based:</strong> Elliptic curve isogenies</li>
            </ul>
            
            <h3>NIST Standardization</h3>
            <p>NIST is currently standardizing post-quantum cryptographic algorithms to ensure long-term security against quantum attacks.</p>
            
            <h3>Research Citation</h3>
            <p><em>Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549(7671), 188-194. Additional resources available at: https://pqcrypto.org/</em></p>
        `
    },
    'network-security': {
        title: 'Software-Defined Networking Security',
        content: `
            <h3>SDN Security Challenges</h3>
            <p>Software-Defined Networking introduces new security paradigms and challenges that require innovative approaches to network protection.</p>
            
            <h3>Key Security Concerns</h3>
            <ul>
                <li><strong>Controller Security:</strong> Protecting the centralized control plane</li>
                <li><strong>Southbound Interface:</strong> Securing controller-switch communications</li>
                <li><strong>Northbound Interface:</strong> Application-controller security</li>
                <li><strong>Flow Table Security:</strong> Preventing flow rule manipulation</li>
            </ul>
            
            <h3>Security Solutions</h3>
            <ul>
                <li>Distributed controller architectures</li>
                <li>Secure communication protocols (TLS/SSL)</li>
                <li>Flow rule verification mechanisms</li>
                <li>Network function virtualization (NFV) security</li>
            </ul>
            
            <h3>Research Citation</h3>
            <p><em>Kreutz, D., Ramos, F. M., Verissimo, P. E., Rothenberg, C. E., Azodolmolky, S., & Uhlig, S. (2015). Software-defined networking: A comprehensive survey. Proceedings of the IEEE, 103(1), 14-76.</em></p>
        `
    }
};

function showModal(modalId) {
    const overlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    if (modalData[modalId]) {
        modalBody.innerHTML = `
            <h2>${modalData[modalId].title}</h2>
            ${modalData[modalId].content}
        `;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function showResearchModal(researchId) {
    const overlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    if (researchModalData[researchId]) {
        modalBody.innerHTML = `
            <h2>${researchModalData[researchId].title}</h2>
            ${researchModalData[researchId].content}
        `;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Contact form functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:quintinmcfadden@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open with the pre-filled message.');
    
    // Reset form
    this.reset();
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .project-card, .video-card, .research-card, section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
});

// Add hover effects for social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect to clickable elements
document.querySelectorAll('.social-link, .video-card, .btn').forEach(element => {
    element.addEventListener('click', createRipple);
});

// Mobile menu functionality
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});