import { calendarBlockEl } from "../js/calendar.js";
import { peopleInfoEl } from "../js/people-info.js";

/* close ADV */
const closeEl = document.querySelector(".close");
const closeMobEl = document.querySelector(".close__mobile");

closeEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});
closeMobEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});

const blockCountryEl = document.querySelector(".country-info__input");

blockCountryEl.addEventListener("focus", () => {
  calendarBlockEl.classList.add("hidden");
  peopleInfoEl.classList.add("hidden");
});

/* fetch API */
/* Home guests loves*/
const cards = document.querySelector(".homes__items");

if (sessionStorage.getItem("cards")) {
  cards.insertAdjacentHTML("afterbegin", sessionStorage.getItem("cards"));
} else {
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

      sessionStorage.setItem("cards", cardItems);
    })
    .catch((err) => console.error(err));
}

/* Destination or hotel name */
const AvHotels = document.querySelector(".av-hotels__items");
const btnSearch1 = document.getElementById("search__btn1");
const btnSearch2 = document.getElementById("search__btn2");

const url = new URL("https://if-student-api.onrender.com/api/hotels");

const viewBlockAvHottels = () => {
  calendarBlockEl.classList.add("hidden");
  peopleInfoEl.classList.add("hidden");

  document.querySelector(".av-hotels").style.display = "block";
  document.querySelector(".arrow__down").style.display = "block";
  const value1 = document.querySelectorAll(".country-info__input")[0].value;
  const value2 = document.querySelectorAll(".country-info__input")[1].value;

  // добавление параметров к домену
  url.searchParams.append("search", value1 + value2);

  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const hotelsItems = data
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
      AvHotels.insertAdjacentHTML("afterbegin", hotelsItems);
    })
    .catch((err) => console.error(err));
};

btnSearch1.addEventListener("click", viewBlockAvHottels);
btnSearch2.addEventListener("click", viewBlockAvHottels);
