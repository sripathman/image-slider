const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');  


let slideIndex = 0;

function showSlide(n)  
 {
  if (slides.length === 0) return; // Prevent infinite loop

  slideIndex = (n + slides.length) % slides.length; 
  // Handle negative and out-of-bounds indices

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(slideIndex  
 + 1);
}

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

showSlide(slideIndex);  


// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);