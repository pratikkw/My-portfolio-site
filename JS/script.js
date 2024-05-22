"use strict";

const preloaderHome = document.querySelector(".preloader__home");
const preloaderTextOne = document.querySelector(".preloader__text-one");
const preloaderTextTwo = document.querySelector(".preloader__text-two");
const swiperBox = document.querySelector(".swiper-wrapper");
const bulbBtn = document.querySelector(".bulb");
const toggleAudio = new Audio("../audio/on-off-sound.mp3");

// GSAP ScrollTriger
const carouselCardTrigger = function (cards) {
  cards.forEach((card) => {
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
};
// --------------------------------

// GET Carousel
const getCarousel = async function () {
  const result = await fetch("../JSON/project.json");
  const r = await result.json();

  swiperBox.innerHTML = r
    .filter((item) => {
      return item.featureProject == true;
    })
    .map((item) => {
      return `
  <li class="carousel__card swiper-slide" data-projectID="${item.projectID}">
    <div class="carousel__img">
      <img src="../${item.projectImg}" alt="" />
    </div>
    <div class="carousel__txt">
      <div class="carousel__sub-txt grid">
        <div class="txt__box-three">
          <h5 class="fifth--title">${item.projectName}</h5>
          <p class="para--fourth">${item.desc}</p>
        </div>

        <div class="carousel__links flex">
          <a
            href="${item.siteLink}"
            target="_blank"
            class="carousel__link"
            ><ion-icon
              class="carousel__icon"
              name="link-outline"
            ></ion-icon
          ></a>
          <a
            href="${item.gitLink}"
            target="_blank"
            class="carousel__link"
            ><ion-icon
              class="carousel__icon"
              name="logo-github"
            ></ion-icon
          ></a>
          <a href="../HTML/detail.html?id=${item.projectId}" class="carousel__link"
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
    .reverse()
    .join("");

  const carouselCards = document.querySelectorAll(".carousel__card");
  carouselCardTrigger(carouselCards);
};
// --------------------------------

// Preloader
const showSite = function () {
  preloaderHome.classList.add("opacity-zero");

  setTimeout(() => {
    preloaderHome.style.display = "none";
  }, 1000);
};

window.addEventListener("load", function () {
  getCarousel();
  setTimeout(() => {
    preloaderTextOne.classList.add("opacity-zero");
    preloaderTextTwo.classList.add("opacity-zero");
    showSite();
  }, 1000);
});
// --------------------------------

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
  toggleAudio.play();

  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
};

const checkMode = function () {
  if (localStorage.getItem("mode") == "dark") {
    document.body.classList.add("darkMode");
  } else {
    document.body.classList.remove("darkMode");
  }
};
checkMode();

bulbBtn.addEventListener("click", changeTheme);
// --------------------------------

// TEXT Animation
const textOne = new SplitType("#split-type", { types: "lines, words" });
const textTwo = new SplitType("#split-type__two", { types: "lines, words" });
const skills = document.querySelectorAll(".skill");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about__section",
    start: "top center",
    markers: false,
    duration: 1.5,
  },
});

gsap.set(textOne.lines, {
  y: 30,
  opacity: 0,
});

skills.forEach((item) => {
  gsap.set(item, {
    x: 100,
    opacity: 0,
  });
});

gsap.set(textTwo.lines, {
  y: 30,
  opacity: 0,
});

tl.to(textOne.lines, {
  y: 0,
  opacity: 1,
  stagger: 0.25,
  ease: "sine.out",
});

tl.to(skills, {
  x: 0,
  opacity: 1,
  stagger: 0.25,
  ease: "sine.out",
});

tl.to(textTwo.lines, {
  y: 0,
  opacity: 1,
  stagger: 0.25,
  ease: "sine.out",
});
// --------------------------------
