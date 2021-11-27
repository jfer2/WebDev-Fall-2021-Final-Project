
const navSlide = () => {
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-list');
    let lines = document.querySelectorAll('.line');


    navMenu.addEventListener('click', () => {
        nav.style.display = 'flex';
        nav.classList.toggle('nav-active');
        navMenu.classList.toggle('navMenu-active');
    });

    nav.addEventListener('click', () => {
        nav.style.display = 'flex';
        navMenu.classList.toggle('navMenu-active');
        nav.classList.toggle('nav-active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            nav.style.display = 'flex';
            if (nav.classList.contains('nav-list') && nav.classList.contains('nav-active')) {
                nav.classList.toggle('nav-active');
            }
            if (navMenu.classList.contains('nav-menu') && navMenu.classList.contains('navMenu-active')) {
                navMenu.classList.toggle('navMenu-active');
            }
        } else {
            nav.style.display = 'none';
        }
    });
};


document.addEventListener("DOMContentLoaded", () => {
    navSlide();
});


