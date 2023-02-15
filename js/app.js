const swiperContainers = document.querySelectorAll(".swiper-container");
const swipers = document.querySelectorAll(".swiper");

function createElement(className) {
  const element = document.createElement("div");
  element.className = className;
  return element;
}

for (let i = 0; i < swiperContainers.length; i++) {
  const slider = swiperContainers[i];

  const prevButton = createElement("swiper-button-prev");
  const nextButton = createElement("swiper-button-next");
  const pagination = createElement("swiper-pagination");
  slider.append(prevButton, nextButton, pagination);

  const swiperEl = slider.querySelector(".swiper");
  const slidePerView = slider.getAttribute("data-per-view");
  const disablePagination = slider.getAttribute("data-disable-pagination");

  // SWIPER
  const swiper = new Swiper(swiperEl, {
    slidesPerView: slidePerView ? Number(slidePerView) : 4,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },

    // pagination
    pagination: {
      el: Boolean(disablePagination)
        ? null
        : slider.querySelector(".swiper-pagination"),
      type: "bullets",
      clickable: true,
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
      // 1400: {
      //   slidesPerView: 4,
      //   spaceBetween: 20,
      // },
    },
  });
}
