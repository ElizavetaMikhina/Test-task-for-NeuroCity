class Slider {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.slides = document.querySelectorAll('.slide');
    this.init();
  }

  init() {
    this.showSlide(this.currentIndex);
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.showSlide(this.currentIndex);
    }, 3000);
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = '1';
      } else {
        slide.style.opacity = '0';
      }
    });
  }
}

const slideImages = ['html.png', 'css.png', 'js.png'];
const slider = new Slider(slideImages);


// Переключение слайдов по клику

/*
class Slider {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.slides = document.querySelectorAll('.slide');
    this.init();
  }

  init() {
    this.showSlide(this.currentIndex);

    this.slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(this.currentIndex);
      });
    });
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = '1';
      } else {
        slide.style.opacity = '0';
      }
    });
  }
}

const slideImages = ['html.png', 'css.png', 'js.png'];
const slider = new Slider(slideImages);
*/