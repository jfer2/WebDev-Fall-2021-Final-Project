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

const numResumeItems = 4;

const resumeItemModal = () => {
    let resumeCard = [];
    let modal = [];
    let modalArea = [];
    let closeBtn = [];


    for (let i = 1; i <= numResumeItems; ++i) {
        resumeCard[i] = document.querySelector(`.resume-item-${i}`);
        modal[i] = document.querySelector(`.modal-container-${i}`);
        modalArea[i] = document.querySelector(`.modal-area-${i}`);
        closeBtn[i] = document.querySelector(`.close-btn-${i}`);

        resumeCard[i].addEventListener('click', () => {
            modal[i].style.display = 'block';
            closeBtn[i].onclick = function() {
                modal[i].style.display = 'none';
            }
            window.onclick = function(e) {
                if (e.target == modal[i]) {
                    modal[i].style.display = 'none';
                }
            }
        });
    }
};

const resumeItemInteraction = () => {

    let resumeCard = [];
    let icon = [];
    let resumeCardTitle = [];

    for (let i = 1; i <= numResumeItems; ++i) {

        resumeCard[i] = document.querySelector(`.resume-item-${i}`);
        icon[i] = document.querySelector(`.resume-icon-${i}`);
        resumeCardTitle[i] = document.querySelector(`.resume-title-${i}`);

        resumeCard[i].addEventListener('mouseover', () => {
            icon[i].classList.toggle('resume-icon-mouseover');
            resumeCardTitle[i].style.color = 'white';
            resumeCardTitle[i].style.transform = 'translateY(-0.5em)';
            resumeCardTitle[i].style.transition = 'transform 0.25s ease-in';
        });

        resumeCard[i].addEventListener('mouseout', () => {
            icon[i].classList.toggle('resume-icon-mouseover');
            resumeCardTitle[i].style.color = 'black';
            resumeCardTitle[i].style.transform = 'translateY(0.5em)';
            resumeCardTitle[i].style.transition = 'transform 0.1ms ease-in';
        });
    }
};



document.addEventListener("DOMContentLoaded", () => {
    navSlide();
    resumeItemInteraction();
    resumeItemModal();
});