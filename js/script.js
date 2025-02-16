// 切換手機版選單的顯示
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const cprYear = document.querySelector('.cprYear')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  mainNav.classList.toggle('open');
});

// 幻燈片切換功能
const slides = document.querySelectorAll('.slides img');
const radioButtons = document.querySelectorAll('.slider__bar input[type="radio"]');
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100;
  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset}%)`;
  });

  radioButtons.forEach((btn, i) => {
    btn.checked = i === index;
  });
}

// 自動播放幻燈片
function autoPlay() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

let slideInterval = setInterval(autoPlay, 3000); // 每3秒切換一次

// 點選圓點切換幻燈片
radioButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    clearInterval(slideInterval); // 停止自動播放
    currentIndex = index;
    showSlide(currentIndex);
    slideInterval = setInterval(autoPlay, 3000); // 點選後重新啟動自動播放
  });
});

cprYear.textContent = new Date().getFullYear()