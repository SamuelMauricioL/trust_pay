// Modern animations and effects for TrustPay landing page

// Create floating particles in hero section
function createParticles() {
    const hero = document.querySelector('.gradient-bg');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);
    
    // Create 50 particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.card-hover, section > div').forEach(el => {
        observer.observe(el);
    });
}

// Counter animation for numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toFixed(target % 1 === 0 ? 0 : 2);
            clearInterval(timer);
        } else {
            element.textContent = start.toFixed(target % 1 === 0 ? 0 : 2);
        }
    }, 16);
}

// Add hover effect to cards with mouse tracking
function initCardMouseTracking() {
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateY(-12px) 
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Smooth scroll with offset for fixed nav
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#demo' || href === '#contact') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // 80px for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add typing effect to hero title
function initTypingEffect() {
    const title = document.querySelector('h1');
    if (!title) return;
    
    const text = title.innerHTML;
    title.innerHTML = '';
    title.style.opacity = '1';
    
    let index = 0;
    const speed = 30;
    
    function type() {
        if (index < text.length) {
            title.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 300);
}

// Add parallax effect to sections
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero content
        const heroContent = document.querySelector('.gradient-bg > div');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // Parallax for floating cards
        document.querySelectorAll('.float').forEach(card => {
            const speed = 0.1;
            const yPos = -(scrolled * speed);
            card.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Add glow effect that follows cursor
function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transition: transform 0.2s ease;
    `;
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = (e.clientX - 150) + 'px';
        glow.style.top = (e.clientY - 150) + 'px';
    });
}

// Animate numbers when they come into view
function initNumberAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                // Find all numbers in the element
                const text = entry.target.textContent;
                const numbers = text.match(/[\d.]+/g);
                
                if (numbers) {
                    numbers.forEach(num => {
                        animateCounter(entry.target, parseFloat(num));
                    });
                }
            }
        });
    }, { threshold: 0.5 });
    
    // Observe elements with numbers
    document.querySelectorAll('.text-4xl, .text-3xl, .text-2xl').forEach(el => {
        if (/\d/.test(el.textContent)) {
            observer.observe(el);
        }
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollAnimations();
    initCardMouseTracking();
    initSmoothScroll();
    // initTypingEffect(); // Uncomment if you want typing effect
    // initParallax(); // Uncomment for parallax (can be heavy on performance)
    initCursorGlow();
    initNumberAnimations();
    
    console.log('🚀 TrustPay animations loaded');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
