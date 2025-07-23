// Three.js Scene Setup for Hero Background
let scene, camera, renderer, particles;

function initThreeJS() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('hero-canvas'),
        alpha: true,
        antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create data-focused geometric background
    createDataVisualizationBackground();
    
    // Position camera
    camera.position.z = 5;
    
    // Start animation loop
    animate();
}

// Create data-focused geometric background
function createDataVisualizationBackground() {
    const particleCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Create a more structured, data-like pattern
    for (let i = 0; i < particleCount * 3; i += 3) {
        // Create grid-like positions with some randomness
        const gridX = (Math.floor(Math.random() * 20) - 10) * 2;
        const gridY = (Math.floor(Math.random() * 20) - 10) * 2;
        const gridZ = (Math.floor(Math.random() * 20) - 10) * 2;
        
        positions[i] = gridX + (Math.random() - 0.5) * 0.5;
        positions[i + 1] = gridY + (Math.random() - 0.5) * 0.5;
        positions[i + 2] = gridZ + (Math.random() - 0.5) * 0.5;
        
        // Data-themed colors (blues, cyans, and whites)
        const colorChoice = Math.random();
        const color = new THREE.Color();
        if (colorChoice < 0.4) {
            color.setHSL(0.6, 0.8, 0.7); // Blue
        } else if (colorChoice < 0.7) {
            color.setHSL(0.55, 0.9, 0.8); // Cyan
        } else {
            color.setHSL(0.0, 0.0, 0.9); // White
        }
        
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    // Add connecting lines for data network effect
    createDataConnections();
}

function createDataConnections() {
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];
    
    // Create some connecting lines between nearby points
    for (let i = 0; i < 100; i++) {
        const start = new THREE.Vector3(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
        );
        const end = new THREE.Vector3(
            start.x + (Math.random() - 0.5) * 5,
            start.y + (Math.random() - 0.5) * 5,
            start.z + (Math.random() - 0.5) * 5
        );
        
        linePositions.push(start.x, start.y, start.z);
        linePositions.push(end.x, end.y, end.z);
        
        // Line colors
        const color = new THREE.Color(0x00D4FF);
        lineColors.push(color.r, color.g, color.b);
        lineColors.push(color.r, color.g, color.b);
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particle system
    if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        // Animate particle positions
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.001;
        }
        particles.geometry.attributes.position.needsUpdate = true;
    }
    
    renderer.render(scene, camera);
}

// Handle window resize
function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        }
    });
}

// Skills animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Project card 3D effects
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                rotationX: 5,
                rotationY: 5,
                scale: 1.05,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            gsap.to(card, {
                duration: 0.1,
                rotationX: rotateX,
                rotationY: rotateY,
                ease: "power2.out"
            });
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for sections
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Text animation on scroll
function initTextAnimations() {
    const animatedElements = document.querySelectorAll('.section-title, .hero-title, .about-intro');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(entry.target, 
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
                );
            }
        });
    }, { threshold: 0.3 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
        });
    });
}

// Contact links animation
function initContactAnimations() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                y: -10,
                scale: 1.05,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    });
}

// Loading animation
function initLoadingAnimation() {
    gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
    
    gsap.fromTo('.navbar', 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Three.js scene
    initThreeJS();
    
    // Initialize all interactive features
    initNavigation();
    animateSkills();
    initProjectCards();
    initSmoothScrolling();
    initParallax();
    initTextAnimations();
    initButtonEffects();
    initContactAnimations();
    initLoadingAnimation();
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can be added here
}, 16)); // ~60fps

