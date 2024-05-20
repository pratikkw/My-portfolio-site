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

const preloaderDetail = document.querySelector(".preloader__detail");
const detailImagebox = document.querySelector(".detail__img");
const detailTxtbox = document.querySelector(".detail__txt");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const getCarousel = async function () {
  const result = await fetch("../JSON/project.json");
  const r = await result.json();
  const ourCard = r.filter((item) => {
    return item.projectId == id;
  });
  const [ourCardImg] = ourCard;

  detailImagebox.style.backgroundImage = `url(../../${ourCardImg.projectImg})`;
  detailTxtbox.innerHTML = ourCard
    .map((item) => {
      return `<div class="detail__sub-txt--one grid">
    <h1 class="primary--title">${item.projectName}</h1>
    <p class="para--primary">${item.desc}</p>
  </div>
  <div class="detail__sub-txt--two grid">
    <h2 class="secondary--title">About</h2>
    <p class="para--secondary">${item.about}</p>
  </div>`;
    })
    .join("");
};

const checkMode = function () {
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("darkMode");
  } else if (mode === "light") {
    document.body.classList.remove("darkMode");
  }
};

window.addEventListener("load", function () {
  getCarousel();
  checkMode();
  preloaderDetail.style.display = "none";
});
