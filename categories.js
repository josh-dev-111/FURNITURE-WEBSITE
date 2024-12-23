let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Move the carousel by a given step (previous or next)
function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
    updateCarousel();
}

// Update the carousel to show the correct slide
function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optionally auto-cycle the carousel every 3 seconds
setInterval(() => moveSlide(1), 10000);