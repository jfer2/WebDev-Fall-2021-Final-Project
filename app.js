const navSlide = () => {
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-list');

    navMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        const imgElement = document.createElement('img');
        nav.append(imgElement);
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
};


document.addEventListener("DOMContentLoaded", () => {
    navSlide();
});