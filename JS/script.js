"use strict";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  breakpoints: {
    1199: {
      slidesPerView: 2.25,
      spaceBetween: 16,
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },

    800: {
      slidesPerView: 2.75,
      spaceBetween: 16,
    },

    700: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },

    500: {
      slidesPerView: 1.75,
      spaceBetween: 16,
      centeredSlides: true,
    },

    300: {
      slidesPerView: 1.25,
      spaceBetween: 16,
      centeredSlides: true,
    },
  },
});
