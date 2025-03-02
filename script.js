// const buttons = document.querySelectorAll("[data - carousel - button]");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carousel - btn === "next" ? 1 : -1;
//     const projects = button
//       .closest("[data-carousel]")
//       .querySelector("[project-slides]");
//   });
// });

new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  // // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
