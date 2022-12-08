/* fetch API */
const cards = document.querySelector(".homes__items");

fetch("https://if-student-api.onrender.com/api/hotels/popular", {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    const cardItems = data
      .map(({ name, city, country, imageUrl }) => {
        return `<div class="homes__item swiper-slide">
      <img class="homes__img" src="${imageUrl}" />
      <div class="homes__text">
        <h2>${name}</h2>
      </div>
      <div class="homes__location">
        <h2>${city}, ${country}</h2>
      </div>
    </div>`;
      })
      .join("");
    cards.insertAdjacentHTML("afterbegin", cardItems);
  })
  .catch((err) => console.error(err));

/* slider SWIPER */

let swiper = new Swiper(".mySwiper", {
  loop: true, // бесконечный слайдер
  spaceBetween: 30,
  slidesPerView: 2, // количество слайдов для показа
  navigation: {
    nextEl: ".swiper-button-next",
  },
  mousewheel: {
    // прокрутка мышью с помощью колеса
    sensitivity: 1,
  },
});
