// ═══════════════ Mobile Menu Toggle ═══════════════
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ═══════════════ Theme Toggle (Dark / Light Mode) ═══════════════
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> Light';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme',);
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', );
    }
});

// ═══════════════ Scroll to Top Button ═══════════════
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ═══════════════ Reveal Animations on Scroll ═══════════════
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 80;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ═══════════════ Typing Effect ═══════════════
const typingElement = document.getElementById('typing-text');
const phrases = [
    'fast, responsive websites.',
    'clean user experiences.',
    'secure web applications.',
    'beautiful, functional interfaces.',
    'ideas into reality with code.'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;       // Speed when typing
let deletingSpeed = 40;     // Speed when deleting
let pauseBetween = 2000;    // Pause after a phrase is fully typed

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Deleting characters
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing characters
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine next action
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing — pause, then start deleting
        isDeleting = true;
        setTimeout(typeEffect, pauseBetween);
        return;
    }

    if (isDeleting && charIndex === 0) {
        // Finished deleting — move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 300);
        return;
    }

    // Continue typing or deleting
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

// Start the typing effect once the page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 600); // Small delay before it starts
});

// ═══════════════ Animate Progress Bars on Scroll ═══════════════
const progressFills = document.querySelectorAll('.progress-fill');
let progressAnimated = false;

function animateProgressBars() {
    if (progressAnimated) return;

    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.7; // Trigger when 70% of the section is visible

    if (sectionTop < triggerPoint) {
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth + '%';
        });
        progressAnimated = true;
    }
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// ═══════════════ Preloader ═══════════════
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2200); // Gives the ring animation time to play twice
});