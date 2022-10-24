import User from "./User.js";

export const now = new Date();

export class Student extends User {
  constructor(admissionYear, courseName, ...props) {
    super(...props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return now.getFullYear - this.admissionYear;
  }
}
