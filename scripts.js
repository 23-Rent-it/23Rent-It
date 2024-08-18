document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.gallery-slider');
    const images = document.querySelectorAll('.gallery-slider img');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const nextButton = document.querySelector('.gallery-nav.next');

    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * slider.clientWidth;
        slider.style.transform = `translateX(${offset}px)`;
    } 

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Show the first slide by default
    showSlide(0);
});



