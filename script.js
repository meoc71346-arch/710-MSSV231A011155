// Bài 1: Carousel
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;  // Tránh out-of-bound
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  // Tránh out-of-bound
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Tự động chuyển sau 3 giây
setInterval(nextSlide, 3000);