// JavaScript file (script.js) for interactivity

// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector('header ol');
    menu.classList.toggle('active');
}

// Adding event listener for links with icons
const exploreButton = document.querySelector('.div a');
exploreButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Explore Mars button clicked!');
});

const watchButton = document.querySelector('main > a');
watchButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Watch videos button clicked!');
});
