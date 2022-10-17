// ------------- part 6 ----------------

const sum = (a) => {
  return function (b) {
    return a + b;
  };
};

console.log(sum(5)(2)); // 7

// ------------- part 7 ----------------
const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
const texts = document.querySelectorAll(".js-text");

const changeStyle = (event) => {
  const text = event.target;
  for (let i = 0; i < colors.length; i++) {
    if (text.style.color === colors[i]) {
      text.style.color === colors[colors.length - 1] ? (text.style.color = colors[0]) : (text.style.color = colors[i]);
    }
  }
};

texts.forEach((text) => {
  text.addEventListener("click", changeStyle);
});
