import { hotels } from "../scripts/db.js";
const logger = (fun) => console.log(fun);

// -------  HOMEWORK 6 (Array) ---------
// ------------- part 5 ----------------

export const palindrome = (word) => (word === word.split("").reverse().join("") ? true : false);

logger(palindrome("шалаш"));
logger(palindrome("анна"));
logger(palindrome("телефон");
logger(palindrome("часы");

// ------------- part 6 ----------------

export const search = (str) => {
  const chooseHotels = hotels.filter((item) => item.name === str || item.city === str || item.country === str);
  let result = chooseHotels.reduce((acc, item) => {
    acc += `${item.name}, ${item.city}, ${item.country}  `;
    return acc;
  }, "");
  return result.split("  ").slice(0, -1);
};

logger(search("Virgin Hotel"));
logger(search("Rome"));
logger(search("Germany"));

// ------------- part 7 ----------------
export const uniqueCountries = (someHotels) => {
  const countryCity = {};

  someHotels.forEach((item) => {
    if (countryCity.hasOwnProperty(item.country)) {
      countryCity[item.country].push(item.city);
    } else {
      countryCity[item.country] = [item.city];
    }
  });

  return countryCity;
};

logger(uniqueCountries(hotels));

// ------------ *level UP ---------------

export const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (dayOfWeek > daysInMonth || dayOfWeek >= daysInWeek) return false;
  const arrMonth = [];
  for (let i = 0; i < daysInMonth; i++) {
    arrMonth[i] = i + 1;
  }

  let lastMonth;
  (daysInMonth + dayOfWeek) % daysInWeek == 0 ? (lastMonth = 0) : (lastMonth = daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek));

  const arrCalendarMonth = [...arrMonth.slice(-dayOfWeek), ...arrMonth, ...arrMonth.slice(0, lastMonth)];

  const result = [];

  for (let i = 0, j = 0; i < arrCalendarMonth.length; i = i + daysInWeek, j++) {
    result[j] = [...arrCalendarMonth.slice(i, i + daysInWeek)];
  }

  return result;
};

logger(getCalendarMonth(30, 7, 4));
logger(getCalendarMonth(30, 5, 8));
logger(getCalendarMonth(15, 8, 4));
