
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

const resumeItemModal = () => {
    const item1Btn = document.querySelector('.resume-item-1');
    const longshoremanModal = document.querySelector('.modal-container');
    let closeBtn = document.querySelector('.close-btn');

    item1Btn.addEventListener('click', () => {
        longshoremanModal.style.display = 'block';
        closeBtn.onclick = function() {
            longshoremanModal.style.display = 'none';
        }
        window.onclick = function(e) {
            if (e.target == longshoremanModal) {
                longshoremanModal.style.display = 'none';
            }
        }
    });
};



document.addEventListener("DOMContentLoaded", () => {
    navSlide();
    resumeItemModal();
});