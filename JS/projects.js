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

const showcaseBox = document.querySelector(".showcase__cards");

const getCarousel = async function () {
  const result = await fetch("../JSON/project.json");
  const r = await result.json();

  showcaseBox.innerHTML = r
    .map((item) => {
      return `<li class="carousel__card showcase__card">
      <div class="carousel__img">
        <img src="../${item.projectImg}" alt="" />
      </div>
      <div class="carousel__txt">
        <div class="carousel__sub-txt showcase__sub-txt grid">
          <div class="txt__box-three">
            <h5 class="fifth--title">${item.projectName}</h5>
            <p class="para--fourth">${item.desc}</p>
          </div>

          <div class="carousel__links flex">
          <span class="showcase__date">${item.date}</span>
            <a
              href="https://music-playerx.netlify.app/"
              target="_blank"
              class="carousel__link"
              ><ion-icon
                class="carousel__icon"
                name="link-outline"
              ></ion-icon
            ></a>
            <a
              href="https://github.com/pratikkw/Music-Player"
              target="_blank"
              class="carousel__link"
              ><ion-icon
                class="carousel__icon"
                name="logo-github"
              ></ion-icon
            ></a>
            <a href="#" class="carousel__link"
              ><ion-icon
                class="carousel__icon"
                name="ellipsis-horizontal-outline"
              ></ion-icon
            ></a>
          </div>
        </div>
      </div>
    </li>`;
    })
    .join("");
};

window.addEventListener("load", getCarousel);

// Link Hover
showcaseBox.addEventListener("mouseover", function (e) {
  const targetEle = e.target;

  if (!targetEle.classList.contains("carousel__icon")) return;
  const targetEleTwo = targetEle.closest(".carousel__link");
  const linkBox = targetEle.closest(".carousel__links");
  const child = linkBox.children;

  [...child]
    .filter((item) => {
      return item.classList.contains("carousel__link");
    })
    .forEach((item) => {
      if (item != targetEleTwo) item.style.opacity = "0.15";
    });

  linkBox.addEventListener("mouseout", function (e) {
    [...child].forEach((item) => (item.style.opacity = "1"));
  });
});
// --------------------------------
