/*
    Navbar collapse, hamburger menu 
    Source code from: https://github.com/WebDevSimplified/css-tutorials/blob/master/Responsive%20Navbar/script.js
 */

let toggleButton = document.querySelector('.toggle-button');
let navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});