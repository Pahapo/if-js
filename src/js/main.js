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
