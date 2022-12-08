const AvHotels = document.querySelector(".av-hotels__items");
const btnSearch = document.querySelector(".search__btn");

btnSearch.addEventListener("click", () => {
  document.querySelector(".av-hotels").style.display = "block";
  document.querySelector(".arrow__down").style.display = "block";
  const value = document.getElementById("country-info__input").value;
  let url = `https://if-student-api.onrender.com/api/hotels?search=${value}`;

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
});

let swiper = new Swiper(".mySwiper", {
  loop: true, // бесконечный слайдер
  spaceBetween: 30,
  slidesPerView: 2, // количество слайдов для показа
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

