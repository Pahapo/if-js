import { data } from "../js/array.js";
const cards = document.querySelector(".homes__items");

const cardItems = data
  .map(({ name, city, country, imageUrl }) => {
    return `<div class="homes__item">
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
