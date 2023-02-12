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
});
