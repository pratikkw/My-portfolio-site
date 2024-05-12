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
  let links = card.querySelectorAll(".carousel__link");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top center",
      markers: false,
    },

    ease: "sine.out",
  });

  gsap.set(card, {
    x: 1000,
    opacity: 0.3,
  });

  gsap.set(title, {
    y: 100,
    opacity: 0,
  });

  gsap.set(para, {
    y: 150,
    opacity: 0,
  });

  gsap.set(links, {
    x: 150,
    opacity: 0,
  });

  tl.to(card, {
    x: 0,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
  });

  tl.to(
    [title, para],
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
    },
    "-=0.5"
  );

  tl.to(
    links,
    {
      x: 0,
      opacity: 1,
    },
    "-=0.25"
  );
});
// --------------------------------

// SPLIT TYPE
// --------------------------------

const preloader = document.querySelector(".preloader");
const preloaderTextOne = document.querySelector(".preloader__text-one");
const preloaderTextTwo = document.querySelector(".preloader__text-two");
const swiperBox = document.querySelector(".swiper-wrapper");
const bulbBtn = document.querySelector(".bulb");

// Preloader
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
// --------------------------------

// Link Hover
swiperBox.addEventListener("mouseover", function (e) {
  const targetEle = e.target;

  if (!targetEle.classList.contains("carousel__icon")) return;
  const targetEleTwo = targetEle.closest(".carousel__link");
  const linkBox = targetEle.closest(".carousel__links");
  const child = linkBox.children;

  [...child].forEach((item) => {
    if (item != targetEleTwo) item.style.opacity = "0.15";
  });

  linkBox.addEventListener("mouseout", function (e) {
    [...child].forEach((item) => (item.style.opacity = "1"));
  });
});
// --------------------------------

// Dark Mode
const changeTheme = function () {
  document.body.classList.toggle("darkMode");
};

bulbBtn.addEventListener("click", changeTheme);
// --------------------------------
