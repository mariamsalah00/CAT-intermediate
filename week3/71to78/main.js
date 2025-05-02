// assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newArray = mix.map(ele => ele).filter(ele => typeof ele === "string").reduce((acc, current) => acc + current)
console.log(newArray)
// assignment 2
let myString = "EElllzzzzzzzeroo";
let newString = myString.split("").filter((ele, index) => myString.indexOf(ele) === index).join("");
console.log(newString);
// assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray2 = myArray.reduce((acc, current) => {
    if (Array.isArray(current)) {
        return [...acc, ...current]
    } else {
        return [...acc, current]
    }
})
// assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]
let newArray3 = numsAndStrings.filter(ele => typeof ele === "number").map(ele => -ele);
console.log(newArray3)
// assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((accumulator, currentElement) => {
  if (currentElement % 2 === 0) {
    return accumulator * currentElement;
  } else {
  
    return accumulator + currentElement;
  }
}, 1); 

console.log(result); 