const logger = (fun) => console.log(fun);

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const colors = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  current: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    }
    if (this.current <= this.data.length) {
      this.current = 0;
      return {
        done: false,
        value: this.data[this.current],
      };
    }
  },
};

function setColor(colors) {
  return function (event) {
    event.target.style.color = colors.next().value;

    return event;
  };
}

text1.addEventListener("click", setColor({ ...colors }));
text2.addEventListener("click", setColor({ ...colors }));
text3.addEventListener("click", setColor({ ...colors }));

// ------------ *level UP ---------------

const today = new Date();
const todayDay = today.getDate();
const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), 0).getDay();
const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
const daysInNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0).getDate();

const getCalendarMonth = (checkInDate, checkOutDate) => {
  if (checkInDate < 0 || checkInDate > daysInMonth || checkOutDate < 0 || checkOutDate > daysInMonth) return false;

  const arrPreviousMonth = [];
  for (let i = 0; i < daysInPreviousMonth; i++) {
    arrPreviousMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: true, // день не входит в текущий месяц
      selectedDay: false, // выбранный пользователем день
      currentDay: false, // флаг сегодняшнего дня
    };
  }

  const arrMonth = [];
  for (let i = 0; i < daysInMonth; i++) {
    arrMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: false, // день не входит в текущий месяц
    };
    checkInDate <= i + 1 && checkOutDate >= i + 1 ? (arrMonth[i].selectedDay = true) : (arrMonth[i].selectedDay = false); // выбранный пользователем день
    todayDay === i + 1 ? (arrMonth[i].currentDay = true) : (arrMonth[i].currentDay = false); // флаг сегодняшнего дня
  }

  const arrNextMonth = [];
  for (let i = 0; i < daysInNextMonth; i++) {
    arrNextMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: true, // день не входит в текущий месяц
      selectedDay: false, // выбранный пользователем день
      currentDay: false, // флаг сегодняшнего дня
    };
  }

  let NextMonth;
  (daysInMonth + dayOfWeek) % 7 == 0 ? (NextMonth = 0) : (NextMonth = 7 - ((daysInMonth + dayOfWeek) % 7));

  const previousMonth = [...arrPreviousMonth.slice(-dayOfWeek)];
  previousMonth.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const nextMonth = [...arrNextMonth.slice(0, NextMonth)];
  nextMonth.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const arrCalendarMonth = [...previousMonth, ...arrMonth, ...nextMonth];

  const result = [];

  for (let i = 0, j = 0; i < arrCalendarMonth.length; i = i + 7, j++) {
    result[j] = [...arrCalendarMonth.slice(i, i + 7)];
  }
  return result;
};

logger(getCalendarMonth(9, 25));
logger(getCalendarMonth(5, 9));
logger(getCalendarMonth(4, 4));
