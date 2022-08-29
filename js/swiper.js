var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.6,
  spaceBetween: 16,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false
  },
  speed: 1200,
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 2.5,
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