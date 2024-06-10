let menuBtn = document.querySelector('.menu-btn');
let dropdownNavbar = document.querySelector('#dropdown-navbar');

menuBtn.onclick = () => {
    dropdownNavbar.classList.toggle('open');
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:100, origin: 'left'});
sr.reveal('.navbar',{delay:200, origin: 'top'});
sr.reveal('.menu-btn',{delay:280, origin: 'right'});

sr.reveal('.home-text span',{delay:320, origin: 'top'});
sr.reveal('.home-text h1',{delay:400, origin: 'left'});
sr.reveal('.home-text p',{delay:480, origin: 'right'});
sr.reveal('.main-btn',{delay:560, origin: 'left'});

sr.reveal('.home-img',{delay:620, origin: 'right'});
sr.reveal('.contact-text h1',{delay:400, origin: 'left'});
sr.reveal('.contact-text p',{delay:480, origin: 'right'});

