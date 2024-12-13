console.log("Answers to the questions 1");
/*1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/
function calculateDifference(a, b) {
    return a - b;
}
const result = calculateDifference(10, 5);
console.log(result); 


console.log("Answers to the questions 2");
/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not. */
function isOdd(num) {
    return num % 2 !== 0;
}
let res = isOdd(10);
let ress = isOdd(9);
console.log(res);  
console.log(ress);  

console.log("Answers to the questions 3");
/* 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.*/
function findMin(arr) {
    return Math.min(...arr);
}
const numbers = [5, 2, 9,5,0, 7];
const minNumber = findMin(numbers);
console.log(minNumber);


console.log("Answers to the questions 4");
/*4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers. */
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let arr1 = [1, 2, 3, 4, 5, 6]
let arr1_res =filterEvenNumbers(arr1);
let arr2 = [10, 15, 20, 25, 30]
let arr2_res =filterEvenNumbers(arr2);
console.log(arr1_res);  
console.log(arr2_res); 


console.log("Answers to the questions 5");
/*5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order. */
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
let arr3 = [1, 2, 3, 4, 5, 6]
let arr3_res =sortArrayDescending(arr3);
let arr4 = [10, 15, 20, 25, 30]
let arr4_res =sortArrayDescending(arr4);
console.log(arr3_res);  
console.log(arr4_res); 



console.log("Answers to the questions 6");
/*6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased. */
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
let str1 = "Hello World";
let str1_res = lowercaseFirstLetter(str1);
console.log(str1_res);



console.log("Answers to the questions 7");
/*7) Write a function named findAverage that takes an array of numbers and returns the average of all elements. */
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
let arr = [1, 2, 3, 4, 5, 6]
let arr_res =findAverage(arr);
let arr5 = [10, 15, 20, 25, 30]
let arr5_res =findAverage(arr5);
console.log(arr_res);  
console.log(arr5_res);


console.log("Answers to the questions 8");
/*8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.*/
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

let year1 = 2020; 
let year2 = 2023; 
let year3 = 2000; 
let year4 = 1900; 

console.log(isLeapYear(year1));
console.log(isLeapYear(year2));
console.log(isLeapYear(year3));
console.log(isLeapYear(year4));
