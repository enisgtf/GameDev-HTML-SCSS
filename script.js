const hamburgerButton = document.getElementById("hamburgerMenu")
const navbarMenu = document.getElementById("navbarMenu")


hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active")
    navbarMenu.classList.toggle("active")
})


const subscribeFrom = document.getElementById('subscribe');
form.addEventListener('submit', event => {
    event.preventDefault();
});


/* scroll reveal */

ScrollReveal().reveal('.hero-section', {
    delay: 600,
})

ScrollReveal().reveal('.student-testimonials', {
    delay: 500,
    origin: "left",
    distance: "20px"
})