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

// Füge dies zu deinem bestehenden JavaScript hinzu
document.querySelector('.gallery-nav.prev').addEventListener('click', function() {
    moveSlide(-1);
});

document.querySelector('.gallery-nav.next').addEventListener('click', function() {
    moveSlide(1);
});

function moveSlide(direction) {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slider img');
    const slideWidth = slider.offsetWidth;
    const currentTransform = getComputedStyle(slider).transform.match(/matrix\((.+)\)/);
    
    let translateX = currentTransform ? parseFloat(currentTransform[1].split(',')[4]) : 0;
    translateX += direction * slideWidth;

    // Begrenzungen, um nicht über den ersten oder letzten Slide hinaus zu gehen
    translateX = Math.max(Math.min(translateX, 0), -(slides.length - 1) * slideWidth);

    slider.style.transform = `translateX(${translateX}px)`;
}

