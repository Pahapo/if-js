import { calendar, getYear, getMonth } from "../js/dataCalendar.js";
import { peopleInfoEl } from "../js/people-info.js";

// const dataCalendar = document.querySelector(".calendar__days");
const blockTravelEl = document.getElementById("travel-info__input");
export const calendarBlockEl = document.querySelector(".calendar__block");

blockTravelEl.addEventListener("focus", () => {
  calendarBlockEl.classList.remove("hidden");
  peopleInfoEl.classList.add("hidden");
});

// calendarBlockEl.addEventListener("mouseover", () => {
//   // вопросик, почему работает неправильно?
//   blockTravelEl.addEventListener("blur", () => {
//     calendarBlockEl.classList.add("hidden");
//   });
// });

const calendarEl = calendar
  .map((item, index) => {
    return `
     <div class="calendar__item">
      <div class="calendar__month">
        <h4>${getMonth(index)} ${getYear(index)}</h4>
      </div>
      <div class="calendar__day-week">
       <p>Mo</p>
       <p>Tu</p>
       <p>We</p>
       <p>Th</p>
       <p>Fr</p>
       <p>Sa</p>
       <p>Su</p>
      </div>  
      ${item.map((item2) => {
        return `
        <div class="calendar__day">
          <p>${item2[0].dayOfMonth}</p>
          <p>${item2[1].dayOfMonth}</p>
          <p>${item2[2].dayOfMonth}</p>
          <p>${item2[3].dayOfMonth}</p>
          <p>${item2[4].dayOfMonth}</p>
          <p>${item2[5].dayOfMonth}</p>
          <p>${item2[6].dayOfMonth}</p>
        </div>`;
      })}
    </div>`;
  })
  .join("");

const dataCalendar = document.querySelector(".calendar__items");
dataCalendar.insertAdjacentHTML("afterbegin", calendarEl);

const selectedDays = document.querySelectorAll(".calendar__days p");

selectedDays.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.style.cssText = "color: #3077C6; font-weight: 500;";
    blockTravelEl.value = event.target.innerHTML;
  });
});

// const notCurrentMonth = document.querySelectorAll(".calendar__day p");
// console.log(notCurrentMonth);
// notCurrentMonth.map((event) => {
//   if (event.notCurrentMonth === true) {
//     event.classList.add("other__month");
//   }
// });
