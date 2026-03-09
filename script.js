document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '&#10005;' : '&#9776;';
    });

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
        });
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const domain = new URL(this.href).hostname;
            if (domain === window.location.hostname && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Reveal on scroll (simple)
    const reveal = () => {
        const cards = document.querySelectorAll('.card, .testimonial-card');
        cards.forEach(card => {
            const windowHeight = window.innerHeight;
            const cardTop = card.getBoundingClientRect().top;
            const revealPoint = 150;
            if (cardTop < windowHeight - revealPoint) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal
    document.querySelectorAll('.card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', reveal);
    reveal(); // run once
});