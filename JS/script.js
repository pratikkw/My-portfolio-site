"use strict";

// LENIS
const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// --------------------------------

// SWIPPER
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
// --------------------------------

// GSAP ScrollTriger
const carouselCards = document.querySelectorAll(".carousel__card");

carouselCards.forEach((card) => {
  let title = card.querySelector(".fifth--title");
  let para = card.querySelector(".para--fourth");

  gsap.set(card, {
    x: 1000,
    opacity: 0.3,
  });

  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top center",
    },
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 2,
  });
});
// --------------------------------

const preloader = document.querySelector(".preloader");
const preloaderTextOne = document.querySelector(".preloader__text-one");
const preloaderTextTwo = document.querySelector(".preloader__text-two");

const showSite = function () {
  preloader.classList.add("opacity-zero");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
};

window.addEventListener("load", function () {
  setTimeout(() => {
    preloaderTextOne.classList.add("opacity-zero");
    preloaderTextTwo.classList.add("opacity-zero");
    showSite();
  }, 1000);
});
