var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 16,
  autoplay: {
    delay: 2400,
    speed: 10000,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
    1400: {
      slidesPerView: 4.5,
      spaceBetween: 24,
    },
    1800: {
      slidesPerView: 5.5,
      spaceBetween: 24,
    }
  }
});