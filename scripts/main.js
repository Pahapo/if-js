import { Students } from "./entities/Students.js";
import { studentsData } from "./studentsData.js";

const logger = (fun) => console.log(fun);

// -------  HOMEWORK 8 (Class) --------
// ------------- part 5 ----------------

const students = new Students(studentsData);
logger(students.getInfo());
