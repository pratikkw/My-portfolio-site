"use strict";

const body = document.body;
const preloader = document.querySelector(".preloader");
const preloaderTextOne = document.querySelector(".pre-span-one");
const preloaderTextTwo = document.querySelector(".pre-span-two");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloaderTextOne.classList.add("preloader--deactive");
    preloaderTextTwo.classList.add("preloader--deactive");
    preloader.classList.add("preloader--deactive");
  }, 1000);

  setTimeout(() => {
    preloader.classList.add("preloader--hide");
  }, 2000);
});
