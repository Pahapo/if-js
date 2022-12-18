const calendarBlockEl = document.querySelector(".calendar__block");

const blockPeopleEl = document.getElementById("people-info__input");
export const peopleInfoEl = document.querySelector(".people__info");
export const childrenLess = document.querySelector(".children-less-js");
export const childrenMore = document.querySelector(".children-more-js");
export const childrenAge = document.querySelector(".child__age");

const lessPeopleEl = document.querySelectorAll(".less-people");
const morePeopleEl = document.querySelectorAll(".more-people");

blockPeopleEl.addEventListener("focus", () => {
  peopleInfoEl.classList.remove("hidden");
  calendarBlockEl.classList.add("hidden");
});

// peopleInfoEl.addEventListener("mouseover", () => {
//   // вопросик, почему работает неправильно?
//   blockPeopleEl.addEventListener("blur", () => {
//     peopleInfoEl.classList.add("hidden");
//   });
// });

// select for children
const selectChildrenEl = `<select name="choice">
                    <option value="0">0 years old</option>
                    <option value="1">1 years old</option>
                    <option value="2">2 years old</option>
                    <option value="3">3 years old</option>
                    <option value="4">4 years old</option>
                    <option value="5">5 years old</option>
                    <option value="6">6 years old</option>
                    <option value="7">7 years old</option>
                    <option value="8" selected>8 years old</option>
                    <option value="9">9 years old</option>
                    <option value="10">10 years old</option>
                    <option value="11">11 years old</option>
                    <option value="12">12 years old</option>
                    <option value="13">13 years old</option>
                    <option value="14">14 years old</option>
                    <option value="15">15 years old</option>
                    <option value="16">16 years old</option>
                    <option value="17">17 years old</option>
                  </select>`;

// decrease the value
lessPeopleEl.forEach((elem) => {
  elem.addEventListener("click", () => {
    let count = elem.nextElementSibling.innerHTML;
    let min = 0;
    elem.contains(childrenLess) ? (min = 0) : (min = 1);

    let editBtn = () => {
      if (count <= min) {
        elem.querySelector("rect").setAttribute("stroke", "#CECECE");
        elem.querySelector("path").setAttribute("fill", "#CECECE");
      } else {
        elem.nextElementSibling.nextElementSibling.querySelector("rect").setAttribute("stroke", "#3077C6");
        elem.nextElementSibling.nextElementSibling.querySelector("path").setAttribute("fill", "#3077C6");

        elem.nextElementSibling.innerHTML = --count;
        if (elem.contains(childrenLess)) {
          if (elem.nextElementSibling.innerHTML <= 0) {
            childrenAge.removeChild(childrenAge.lastElementChild);
            childrenAge.classList.add("hidden");
          } else {
            childrenAge.removeChild(childrenAge.lastElementChild);
          }
        }

        elem.querySelector("rect").setAttribute("stroke", "#3077C6");
        elem.querySelector("path").setAttribute("fill", "#3077C6");

        if (count <= min) editBtn();
      }
    };
    editBtn();
  });
});

// increase value
morePeopleEl.forEach((elem) => {
  elem.addEventListener("click", () => {
    let count = elem.previousElementSibling.innerHTML;
    let max = 0;
    elem.contains(childrenMore) ? (max = 10) : (max = 30);

    let editBtn = () => {
      if (count >= max) {
        elem.querySelector("rect").setAttribute("stroke", "#CECECE");
        elem.querySelector("path").setAttribute("fill", "#CECECE");
      } else {
        elem.previousElementSibling.previousElementSibling.querySelector("rect").setAttribute("stroke", "#3077C6");
        elem.previousElementSibling.previousElementSibling.querySelector("path").setAttribute("fill", "#3077C6");

        elem.previousElementSibling.innerHTML = ++count;
        if (elem.contains(childrenMore) && elem.previousElementSibling.innerHTML >= 1) {
          childrenAge.classList.remove("hidden");
          childrenAge.insertAdjacentHTML("beforeend", selectChildrenEl);
        }

        elem.querySelector("rect").setAttribute("stroke", "#3077C6");
        elem.querySelector("path").setAttribute("fill", "#3077C6");

        if (count >= max) editBtn();
      }
    };
    editBtn();
  });
});
