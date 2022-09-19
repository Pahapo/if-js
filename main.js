// ------------- part 6 ----------------

palindrome = word => {
    let lastLater = word.length - 1;

    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) !== word.charAt(lastLater))
            return 0;

        lastLater--;

        if (word.length % 2 === 0) {
            if (i === (word.length / 2)) 
                return 1; 
        } else {
            if (i === (word.length / 2) - 0.5) 
                return 1;
        }
    }    
}

result1 = name => console.log(palindrome(name));

result1('шалаш');
result1('анна');

result1('телефон');
result1('часы');


// ------------- part 7 ----------------


min = (a, b) => (a < b ? a : b < a ? b : 'Значения равны!');
max = (a, y) => (a > y ? a : y > a ? y : 'Значения равны!');

result2 = (a, b) => console.log(min(a, b));

result2(2,10);
result2(43,19);
result2(22,22);

result3 = (a, y) => console.log(max(a, y));

result3(2,10);
result3(43,19);
result3(22,22);


// ------------- part 8 ----------------


let arr = [12, 80, 14, 01, 16, 0, 18, 19, 2, 70];

for (let i = 0; i < arr.length; i++) {
    arr[i] += "";

    if ((arr[i]).length === 2) {
        for (let j = 0; j < 2; j++) {
            
            if (arr[i].charAt(0) == 0)
                arr[i] = 'zero' + arr[i].charAt(1);

            if (arr[i].charAt(1) == 0)
                arr[i] = arr[i].charAt(0) + 'zero';             
        }
    }

    if (arr[i] == 0) 
        arr[i] = 'zero';
}

console.log(arr);
