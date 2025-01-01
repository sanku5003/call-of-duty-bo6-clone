const bg = document.querySelector('.background');
const elements = document.querySelectorAll('.navbar, .menu-d, .main-logo, .order , .story , .trailer , .vault , .game-modes ,.omnimovement,.editions , .latest-news , .imp-info , .copyrights  ' );

let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    const bgscrollPosition = scrollPosition * 0.3;
    bg.style.transform = `translateY(-${bgscrollPosition}px)`;

    const elementsScrollPosition = scrollPosition * 1.5;

    elements.forEach(element => {
        element.style.transform = `translateY(-${elementsScrollPosition}px)`;
    });
});