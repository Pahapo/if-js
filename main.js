// ------------- part 6 ----------------

const sum = (a) => {
  return function (b) {
    return a + b;
  };
};

console.log(sum(5)(2)); // 7

// ------------- part 7 ----------------

const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

const setColor = (event) => {
  for (let i = 0; i < colors.length; i++) {
    if (event.target.style.color === colors[i]) {
      return event.target.style.color === colors[colors.length - 1] ? colors[0] : colors[i];
    }
  }
};

const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");

text1.addEventListener("click", (event) => {
  event.target.style.color = setColor(event);
});
text2.addEventListener("click", (event) => {
  event.target.style.color = setColor(event);
});
text3.addEventListener("click", (event) => {
  event.target.style.color = setColor(event);
});
