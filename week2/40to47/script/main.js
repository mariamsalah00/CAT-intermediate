// assignment 1    
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// assignment 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
// assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne, arrTwo);
finalArr.sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.indexOf("Google")); // ZERO
// assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.indexOf(needle)); // 1
console.log(haystack.includes(needle)); // 1
console.log(haystack.lastIndexOf(needle)); // 1
// assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2);
allArrs.sort();
allArrs = allArrs.slice(4,7)

console.log(allArrs); // fxy
