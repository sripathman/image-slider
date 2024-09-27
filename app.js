const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pauseBtn = document.querySelector('.pause'); // Add pause button
const playBtn = document.querySelector('.play'); // Add play button

let currentSlideIndex = 0;
let autoSlideInterval;

function showSlide(n) {
  if (slides.length === 0) {
    console.error('No slides found');
    return;
  }

  currentSlideIndex = (n + slides.length) % slides.length;

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[currentSlideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
pauseBtn.addEventListener('click', stopAutoSlide); // Add event listener for pause button
playBtn.addEventListener('click', startAutoSlide); // Add event listener for play button

showSlide(currentSlideIndex);
startAutoSlide(); // Start auto-slide initially
