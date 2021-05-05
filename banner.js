const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__img');
const rightButton = document.querySelector('.slider-button_right')
const leftButton = document.querySelector('.slider-button_left')
let count = 0;
let width;

function rollSlider() {
  sliderLine.style.transform = `translate(-${count*width}px)`
}

function init() {
  width =slider.offsetWidth;
  sliderLine.style.width =  `${width * images.length}px`;
  images.forEach( item => {
    item.style.width = `${width}px`;
  })
  rightButton.style.left = `${width - rightButton.offsetWidth - slider.clientLeft * 2 - 5}px`;
  rollSlider()
};

init();

window.addEventListener('resize', init);

rightButton.addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

leftButton.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});
