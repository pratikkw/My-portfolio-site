"use strict";

const body = document.body;
const preloader = document.querySelector(".preloader");
const preloaderTextOne = document.querySelector(".pre-span-one");
const preloaderTextTwo = document.querySelector(".pre-span-two");

const carousel = document.querySelector(".carousel");

let isDragging = false;
let startX = "";
let startscrollLeft = "";

window.addEventListener("load", function () {
  setTimeout(() => {
    preloaderTextOne.classList.add("preloader--deactive");
    preloaderTextTwo.classList.add("preloader--deactive");
    preloader.classList.add("preloader--deactive");
  }, 1000);

  setTimeout(() => {
    preloader.classList.add("preloader--hide");
    document.documentElement.style.setProperty("--body-scroll-hide", "block");
  }, 2000);
});

// Carousel

const startDragging = function (e) {
  isDragging = true;
  startX = e.pageX;
  startscrollLeft = carousel.scrollLeft;
  carousel.classList.add("carousel--selected");
};

const dragging = function (e) {
  if (!isDragging) return;
  carousel.scrollLeft = startscrollLeft - (e.pageX - startX);
};

const stopDragging = function () {
  isDragging = false;
  carousel.classList.remove("carousel--selected");
};

carousel.addEventListener("mousedown", startDragging);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", stopDragging);
