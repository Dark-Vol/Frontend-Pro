let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

function createDots() {
  // Очистити всі попередні точки
  dotsContainer.innerHTML = '';

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.onclick = () => currentSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function updateSlider() {
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelector('.prev').style.display = currentIndex === 0 ? 'none' : 'block';
  document.querySelector('.next').style.display = currentIndex === slides.length - 1 ? 'none' : 'block';

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  }
  updateSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
}

function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

createDots();
updateSlider();
