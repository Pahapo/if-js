/* sliders SWIPER */

// Available hotels
let swiper1 = new Swiper(".mySwiper1", {
  loop: true, // бесконечный слайдер
  spaceBetween: 30,
  slidesPerView: 2, // количество слайдов для показа
  navigation: {
    prevEl: ".swiper-button-prev1",
    nextEl: ".swiper-button-next1",
  },
  // mousewheel: {
  //   // прокрутка мышью с помощью колеса
  //   sensitivity: 1,
  // },
});

// Homes guests loves
let swiper2 = new Swiper(".mySwiper2", {
  loop: true, // бесконечный слайдер
  spaceBetween: 30,
  slidesPerView: 2, // количество слайдов для показа
  navigation: {
    prevEl: ".swiper-button-prev2",
    nextEl: ".swiper-button-next2",
  },
  // mousewheel: {
  //   // прокрутка мышью с помощью колеса
  //   sensitivity: 1,
  // },
});
