import { now } from "./Student.js";

export class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    const arr = [];
    this.students
      .sort((prev, next) => next.admissionYear - prev.admissionYear)
      .map((item, index) => {
        arr[index] = `${item.firstName} ${item.lastName} - ${item.courseName}, ${now.getFullYear() - item.admissionYear}`;
      });

    return arr;
  }
}
