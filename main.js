// ------------- part 5 ----------------

const convDate = (date) => {
  const str = String(date);

  const re = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/;

  return str.replace(re, "$<day>.$<month>.$<year>");
};

const date = "2020-11-26";
logger(convDate(date));

// ------------- part 6 ----------------

import { data } from "../scripts/db.js";

const search = (word) => {
  const str = String(word).trim().toLocaleLowerCase();
  let result = "";

  for (let i = 0; i < data.length; i++) {
    for (let value of Object.values(data[i])) {
      let newStr = value.toLocaleLowerCase();
      if (str == newStr) {
        for (let values of Object.values(data[i])) {
          result += `${values}, `;
        }
      }
    }
    result = result.slice(0, -2) + "\n";
  }

  return result == "" ? 0 : result.trim();
};

logger(search("Spain"));
logger(search("Berlin"));
logger(search("King Kong Hostel"));
