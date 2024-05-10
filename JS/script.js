"use strict";

// LENIS
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// --------------------------------

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  speed: 600,

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

// const rev = function () {
//   const slidesIndex = [3, 4, 5, 6];

//   const slideCard = slidesIndex.map((i) => {
//     return swiper.slides[i];
//   });

//   slideCard.forEach((item) => {
//     item
//       .querySelector(".fifth--title")
//       .setAttribute("style", `transform = translate3d(0,-100px,0)`);
//     item
//       .querySelector(".para--fourth")
//       .setAttribute("style", `transform = translate3d(0,-100px,0)`);
//   });
// };

// const initi = function () {
//   let as = swiper.activeIndex;
//   const slidesIndex = [as, as + 1, as + 2];

//   const slideCard = slidesIndex.map((i) => {
//     return swiper.slides[i];
//   });

//   slideCard.forEach((item) => {
//     item
//       .querySelector(".fifth--title")
//       .setAttribute("style", `transform = translate3d(0,0,0)`);
//     item
//       .querySelector(".para--fourth")
//       .setAttribute("style", `transform = translate3d(0,0,0)`);
//   });

//   rev();
// };

// swiper.on("slideChangeTransitionEnd", initi);

// initi();
// rev();
