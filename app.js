const navSlide = () => {
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-list');
    let lines = document.querySelectorAll('.line');

    navMenu.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        // for (line of lines) {
        //     line.style.display = 'none';
        // }

        navMenu.classList.toggle('navMenu-active');

        // for (line of lines) {
        //     line.style.display = 'block';
        // }
    });

    nav.addEventListener('click', () => {
        // nav.classList.toggle('nav-active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            if (nav.classList.contains('nav-list') && nav.classList.contains('nav-active')) {
                nav.classList.toggle('nav-active');
            }
            if (navMenu.classList.contains('nav-menu') && navMenu.classList.contains('navMenu-active')) {
                navMenu.classList.toggle('navMenu-active');
            }
        }
    });
};


document.addEventListener("DOMContentLoaded", () => {
    navSlide();
});


