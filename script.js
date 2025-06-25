// Navbar toggle for mobile
const toggle = document.getElementById('navbar-toggle');
const links = document.querySelector('.navbar-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('open'); // This will trigger the hamburger animation
});
