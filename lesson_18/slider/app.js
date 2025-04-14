const images = [
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1024/600/400',
  'https://picsum.photos/id/1027/600/400',
  'https://picsum.photos/id/1035/600/400'
];

let currentIndex = 0;
const imgElement = document.getElementById('sliderImage');
const intervalTime = 3000;
let sliderInterval;

function showImage(index) {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[index];
    imgElement.style.opacity = 1;
  }, 200);
}

function startSlider() {
  sliderInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, intervalTime);
}

function resetSlider() {
  clearInterval(sliderInterval);
  startSlider();
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  resetSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  resetSlider();
});

showImage(currentIndex);
startSlider();