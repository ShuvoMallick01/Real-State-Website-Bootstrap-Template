const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  // Responsive
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
