// Get the necessary elements from the DOM
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme based on localStorage
function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Set the theme when the page loads
setTheme();

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Typing Animation
const typingTextElement = document.querySelector('.typing-text');
const textsToType = ["Digital Artist", "Character Designer", "Illustrator"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textsToType[textIndex];
    const textToShow = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1);
    typingTextElement.textContent = textToShow;

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textsToType.length;
        setTimeout(type, 500);
    } else {
        charIndex += isDeleting ? -1 : 1;
        setTimeout(type, isDeleting ? 75 : 150);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});