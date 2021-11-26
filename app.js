const navSlide = () => {
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-list');
    let lines = document.querySelectorAll('.line');

    navMenu.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        navMenu.classList.toggle('navMenu-active');

    });

    nav.addEventListener('click', () => {
        navMenu.classList.toggle('navMenu-active');
        nav.classList.toggle('nav-active');
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

// const adjustMainContentToWindowHeight = () => {
//     window.addEventListener('resize', () => {
//         if (window.innerHeight <= 768) {
//             console.log(window.innerHeight);
//             document.querySelector('.wrapper').height = window.innerHeight;
//             document.querySelector('.wrapper').style.backgroundColor = 'silver';
//         }
//     });
// };


document.addEventListener("DOMContentLoaded", () => {
    navSlide();
    adjustMainContentToWindowHeight();
});


