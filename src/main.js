// main.js - Complete Updated JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Match this with your CSS transition time
        }
    });

    // Initialize particles.js if the element exists
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#8b5cf6"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.3,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#8b5cf6",
                    "opacity": 0.6,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 2.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab",
                        "parallax": {
                            "enable": true,
                            "force": 60,
                            "smooth": 10
                        }
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize Typed.js for hero subtitle
    const typed = new Typed('.typing-text', {
        strings: [
            'solve problems',
            'delight users',
            'push boundaries',
            'create impact',
            'innovate constantly'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|'
    });

    // Initialize Splide.js for testimonials
    if (document.querySelector('#testimonialSlider')) {
        new Splide('#testimonialSlider', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }

// Enhanced smooth scrolling function
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Button event listeners
document.addEventListener('DOMContentLoaded', function() {
    // View Work button
    const viewWorkBtn = document.getElementById('view-work-btn');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(this.getAttribute('href'));
        });
    }

    // Connect button
    const connectBtn = document.getElementById('connect-btn');
    if (connectBtn) {
        connectBtn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(this.getAttribute('href'));
        });
    }

    // Social links are already working with target="_blank"
});

// Fallback for browser compatibility
if (!('scrollBehavior' in document.documentElement.style)) {
    // Load smoothscroll polyfill if needed
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js';
    script.integrity = 'sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
}

    // Projects filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Simulate form submission
                this.reset();
                
                // Show success message
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
                
                Toast.fire({
                    icon: 'success',
                    title: 'Message sent successfully!'
                });
            }
        });
    }

    // GSAP animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });
        
        // Animate project cards
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.5,
                delay: i * 0.1
            });
        });
        
        // Animate skill cards
        gsap.utils.toArray('.skill-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 0.5,
                delay: i * 0.1
            });
        });
    }

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Make sure this is the last line in your file
console.log('Main JavaScript file loaded successfully');