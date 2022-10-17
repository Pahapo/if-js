import { obj1, obj2, obj3 } from "../scripts/db2.js";
const logger = (fun) => console.log(fun);

// -------  HOMEWORK 7 (Object) --------
// ------------- part 5 ----------------

export const deepEqual = (object1, object2) => {
  if (
    Object.keys(object1).length === Object.keys(object2).length &&
    Object.keys(object1)
      .sort()
      .every((item, index) => item === Object.keys(object2).sort()[index])
  ) {
    let char = "";

    for (const key in object1) {
      if (typeof object1[key] === "object") char = key;
    }

    for (const key in object2) {
      if (typeof object2[key] === "object") {
        return char === key ? deepEqual(object1[char], object2[char]) : false;
      }
    }

    if (Object.keys(object1).length === Object.keys(object2).length && Object.keys(object1).join("") === Object.keys(object2).join("")) return true;
  }

  return false;
};

logger(deepEqual(obj1, obj2)); // true
logger(deepEqual(obj1, obj3)); // false

// ------------ *level UP ---------------

export const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek, checkInDate, checkOutDate) => {
  if (
    dayOfWeek > daysInMonth ||
    dayOfWeek >= daysInWeek ||
    checkInDate < 0 ||
    checkInDate > daysInMonth ||
    checkOutDate < 0 ||
    checkOutDate > daysInMonth
  )
    return false;

  const arrMonth = [];
  for (let i = 0; i < daysInMonth; i++) {
    arrMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: false, // день не входит в текущий месяц
    };
    checkInDate <= i + 1 && checkOutDate >= i + 1 ? (arrMonth[i].selectedDay = true) : (arrMonth[i].selectedDay = false); // выбранный пользователем день
  }

  let lastMonth;
  (daysInMonth + dayOfWeek) % daysInWeek == 0 ? (lastMonth = 0) : (lastMonth = daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek));

  const previousMonth = JSON.parse(JSON.stringify(arrMonth.slice(-dayOfWeek))); //[...arrMonth.slice(-dayOfWeek)];
  previousMonth.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const nextMonth = JSON.parse(JSON.stringify(arrMonth.slice(0, lastMonth))); //[...arrMonth.slice(0, lastMonth)];
  nextMonth.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const arrCalendarMonth = [...previousMonth, ...arrMonth, ...nextMonth];

  const result = [];

  for (let i = 0, j = 0; i < arrCalendarMonth.length; i = i + daysInWeek, j++) {
    result[j] = [...arrCalendarMonth.slice(i, i + daysInWeek)];
  }
  return result;
};

logger(getCalendarMonth(30, 6, 5, 9, 25));
logger(getCalendarMonth(30, 7, 4, 5, 9));
logger(getCalendarMonth(15, 8, 3, 4, 4));
