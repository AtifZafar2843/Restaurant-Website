// Navbar toggle for mobile
const toggle = document.getElementById('navbar-toggle');
const links = document.querySelector('.navbar-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('open'); // This will trigger the hamburger animation
});

// Menu navigation functionality
const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
const menuSections = document.querySelectorAll('.menu-section');

menuNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        menuNavBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        // Show/hide sections based on category
        menuSections.forEach(section => {
            if (category === 'all' || section.id === category) {
                section.style.display = 'block';
                section.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Smooth scroll for navigation links
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

// Add scroll animation for menu items
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

// Observe menu items for animation
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});
