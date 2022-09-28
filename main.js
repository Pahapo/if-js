const logger = (fun) => console.log(fun);

// ------------- part 6 ----------------

const palindrome = (word) => {
  let lastLater = word.length - 1;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(lastLater)) return 0;

    lastLater--;

    if (word.length % 2 === 0) {
      if (i === word.length / 2) return 1;
    } else {
      if (i === word.length / 2 - 0.5) return 1;
    }
  }
};

logger(palindrome("шалаш"));
logger(palindrome("анна"));

logger(palindrome("телефон"));
logger(palindrome("часы"));

// ------------- part 7 ----------------

const min = (a, b) => (a < b ? a : 0);
const max = (a, y) => (a > y ? a : 0);

logger(min(2, 10));
logger(min(43, 19));
logger(min(22, 22));

logger(max(2, 10));
logger(max(43, 19));
logger(max(22, 22));

// ------------- part 8 ----------------

let arr = [12, 80, 14, 1010, 16, 0, 18, 90, 2, 100];
let str = [];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].toString();

  if (arr[i].includes(0)) {
    str = arr[i].split("");

    for (let j = 0; j < str.length; j++) {
      if (str[j] == 0) {
        str[j] = "zero";
      }
    }
    arr[i] = str.join("");
  } else {
    arr[i] = Number(arr[i]);
  }
}

logger(arr);
