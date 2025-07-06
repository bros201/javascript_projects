// Global variables
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider if slides exist
    if (slides.length > 0) {
        initializeSlider();
    }
    
    // Initialize mobile navigation
    initializeMobileNav();
    
    // Initialize contact form if it exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        initializeContactForm();
    }
    
    // Initialize gallery lightbox if gallery exists
    if (document.querySelector('.gallery-grid')) {
        initializeLightbox();
    }
});

// Slider Functionality
function initializeSlider() {
    // Auto-advance slider every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Show first slide
    showSlide(0);
}

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle slide index bounds
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function currentSlideSet(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Mobile Navigation
function initializeMobileNav() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Contact Form Validation
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Real-time validation
    nameInput.addEventListener('blur', () => validateName());
    emailInput.addEventListener('blur', () => validateEmail());
    phoneInput.addEventListener('blur', () => validatePhone());
    messageInput.addEventListener('blur', () => validateMessage());
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            // Simulate form submission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            setTimeout(() => {
                // Show success message
                form.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    form.style.display = 'flex';
                    document.getElementById('formSuccess').style.display = 'none';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    clearAllErrors();
                }, 3000);
            }, 1500);
        }
    });
}

function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const name = nameInput.value.trim();
    
    if (name.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters long');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(nameInput, nameError, 'Name can only contain letters and spaces');
        return false;
    } else {
        clearError(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showError(emailInput, emailError, 'Email address is required');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    } else {
        clearError(emailInput, emailError);
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phone = phoneInput.value.trim();
    
    // Phone is optional, but if provided, should be valid
    if (phone && !/^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        showError(phoneInput, phoneError, 'Please enter a valid phone number');
        return false;
    } else {
        clearError(phoneInput, phoneError);
        return true;
    }
}

function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    const message = messageInput.value.trim();
    
    if (message.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters long');
        return false;
    } else if (message.length > 1000) {
        showError(messageInput, messageError, 'Message must be less than 1000 characters');
        return false;
    } else {
        clearError(messageInput, messageError);
        return true;
    }
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    errorMessages.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

// Gallery Lightbox Functionality
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                closeLightbox();
            }
        });
    }
}

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (lightbox && lightboxImage && lightboxCaption) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = caption;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'block';
        
        // Prevent body scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Lazy loading for images (if supported)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll-based animations (optional enhancement)
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

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .destination-card, .gallery-item, .team-member');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with keyboard shortcut
    if (e.altKey && e.key === 'm') {
        const main = document.querySelector('main');
        if (main) {
            main.focus();
            main.scrollIntoView();
        }
    }
});

// Add focus indicators for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.warn(`Elements not found: ${selector}`);
        return [];
    }
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateName,
        validateEmail,
        validatePhone,
        validateMessage,
        showSlide,
        changeSlide,
        currentSlideSet: currentSlideSet,
        openLightbox,
        closeLightbox
    };
}

