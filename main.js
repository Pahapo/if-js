// ------------- part 6 ----------------

let user = 'John Doe';
console.log(user);

let student = 'Pavel';
console.log(student);

user = student;
console.log(user);

// ------------- part 7 ----------------

let test = 1;
test++;

test += '1';
console.log(test);

test -= 1;
console.log(test);

test = Boolean(test);
console.log(test);

// ------------- part 8 ----------------

let array1 = [2, 3, 5, 8];
let work = 1;

for (let i = 0; i < array1.length; i++) {
    work *= array1[i];
}

console.log(work);

// ------------- part 9 ----------------

let array2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10)
        console.log(array2[i]); 
}

// ------------- part 10 ----------------

let array3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 == 0)
        console.log(array3[i]); 
}
