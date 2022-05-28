const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener(
    'click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }
))


const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



const nav_menu = document.querySelector('.nav-menu')
window.addEventListener('scroll', fixMenu)

function fixMenu() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav_menu.classList.add('active2')
    } else {
        nav_menu.classList.remove('active2')
    }
}


// Smooth scrolling 

const links = document.querySelectorAll(".nav-menu li a");
const serv = document.getElementById('servicios-banner');
const contact = document.getElementById('contact-scroll');

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

serv.addEventListener("click", clickHandler);
contact.addEventListener("click", clickHandler);

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

