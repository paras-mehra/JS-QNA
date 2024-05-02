// 1). Reverse a String Word
var str = "Hello World";

var newStr = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});
console.log(newStr);

// 2). How to check if an Object is an Array or Not?

// var a = [];
// var B = {};
// console.log(typeof(a));
// console.log(Array.isArray(a));
// console.log(Array.isArray(B));

// 3). How to Empty an Array in Javascript?

// var arr = [1, 2, 3, 4, 5];
// arr.length = 0;
// console.log(arr);

// 4). How to Check If a Number is an Integer or Not?

// console.log(Number.isInteger(1.0));
// if (15 % 1 === 0) {
//   console.log("Integer");
// } else {
//   console.log("Not!");
// }

// 5). Make this Duplicate arr = [1,2,3,4,5] into [1,2,3,4,5,1,2,3,4,5]

// var arr = [1, 2, 3, 4, 5];
// console.log(arr.concat(arr));

// 6). Make a Function to Reverse a Number

// const reverseKro = (num) => {
//   return Number(num.toString().split("").reverse().join(""));
// };
// console.log(reverseKro(12));

// 7). Write a Function that checks that weather a passed string is polindrome or Not

// const strPalChecker = (str) => {
//   var reversed = str.split("").reverse().join("");
//   return reversed === str;
// };
// console.log(strPalChecker("Pool"));
// console.log(strPalChecker("LooL"));

// 8). Write a function that returns a passed string with Letters in Alphabetical Order

// const strAlphabaticalOrder = (str) => {
//   return str.split("").sort();
// };
// console.log(strAlphabaticalOrder("EDCBA"));

// 9). Write a function that accepts a string as a parameter  and converts the first letter of Each word of the string in Upper Case

// const capitalizeKaro = (str) => {
//   var words = str.split(" ").map((word) => {
//     return word.charAt(0).toUpperCase() + word.substring(1);
//   });
//   return words.join(" ");
// };
// console.log(capitalizeKaro("paras how are you?"));

// 10). Loop an array and add all members of it

// var arr = [1, 2, 3, 4, 10, 45];
// var sum = 0;
// arr.forEach((elem) => {
//   sum = sum + elem;
// });
// console.log(sum);

// 11). An array of numbers and strings, Only add those members which are not Strings

// var arr = ["hehehe", 150, "Hello", 800, "657"];
// var sum = 0;
// arr.forEach((elem) => {
//   if (typeof elem === "number") sum = sum + elem;
// });
// console.log(sum);

// 12). Loop an array of Objects and remove all Objects which don't have gender's value male

// var arr = [
//   { name: "Shivansh", gender: "Male" },
//   { name: "Shivanya", gender: "Female" },
//   { name: "chetan", gender: "Not Specified" },
//   { name: "Chestha", gender: "Female" },
//   { name: "Rohan", gender: "Male" },
// ];

// var newArr = arr.filter((elem) => {
//   return elem.gender === "Male";
// });

// console.log(newArr);

// var count = 0;

// arr.forEach((elem) => {
//   if (elem.gender !== "Male") count++;
// });

// for (var i = 1; i <= count; i++) {
//   for (var a = 0; a < arr.length; a++) {
//     if (arr[a].gender !== "Male") {
//       arr.splice(a, 1);
//     }
//   }
// }
// console.log(arr);

// 13). write a function to clone an Array

// const cloneArr = (arr) => {
//   return [...arr];
// };
// let newArr = cloneArr([1, 2, 3, 4, 5]);
// console.log(newArr);

// 14). Write a function which accepts an argument and returns the type Note: There are six possible values that returns: Object, Boolean, function, Number, string, Undefined

// const typeCheck = (arr) => {
//   return typeof arr;
// };
// console.log(typeCheck([]));
// console.log(typeCheck(20));
// console.log(typeCheck(function () {}));
// console.log(typeCheck("string"));
// console.log(typeCheck(true));
// console.log(typeCheck(undefined));

// 15). Write a function to get the first element of an array, passing a parameter "n" will return the first 'n' elements of the array.

// const retrieve = (arr, n = 0) => {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   } else {
//     console.log(n + " to Elements he Nhi Hai!");
//   }
// };
// retrieve([1, 2, 3, 4, 5], 3);

// 15). Write a function to get the last element of an array, passing a parameter "n" will return last "n" elements of the array.

// const retrieve = (arr, n = 0) => {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[arr.length - 1 - i]);
//     }
//   } else {
//     console.log(n + " to Elements he Nhi Hai!");
//   }
// };
// retrieve([1, 2, 3, 4, 5], 2);

// 16). Write a program to find the most frequent item of an array

// const freq = (arr) => {
//   var freq = {};
//   arr.forEach((elem) => {
//     if (freq.hasOwnProperty(elem)) freq[elem]++;
//     else freq[elem] = 1;
//   });
//   console.log(freq);
//   var ans = Object.keys(freq).reduce((acc, next) => {
//     return freq[acc] > freq[next] ? acc : next;
//   });
//   console.log(ans);
// };
// freq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 4, 7, 29, 4]);

// 17). Write a program to shuffle an array

// const shuffleKro = (arr) => {
//   // Shuffle Area
//   var totalShuffleArea = arr.length;
//   // get a random number
//   while (totalShuffleArea > 0) {
//     totalShuffleArea--;
//     var indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);
//     var temp = arr[totalShuffleArea];
//     arr[totalShuffleArea] = arr[indexToBeExchanged];
//     arr[indexToBeExchanged] = temp;
//   }
//   return arr;
// };
// console.log(shuffleKro([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 18).Write a Program to compute the union of two arrays simple data : console.log(union([1,2,3],[100,2,1,10])); [1,2,3,10,100]

// const union = (arr1, arr2) => {
//   return [...new Set(arr1.concat(arr2))];
// };

// console.log(union([1, 2, 3, 4], [2, 3, 4, 6]));
