const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

let tl1 = gsap.timeline();
tl1.to('.menuSlide', {
    right: 0,
    duration: 0.5
})

tl1.from('.menuSlide p', {
    x: 150,
    duration: 0.7,
    stagger: 0.28,
    opacity: 0
})

tl1.from('.menuSlide i', {
    opacity: 0
})

tl1.pause();

menuIcon.addEventListener('click', () => {
    menuIcon.style.opacity = 0;
    tl1.timeScale(1).play();
})

closeIcon.addEventListener('click', () => {
    menuIcon.style.opacity = 1;
    tl1.timeScale(2).reverse();
})