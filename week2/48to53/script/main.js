// assignment 1
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += 10) { 
    if (i === exclude)
    {
        continue;
    }
    console.log(i);
}
// assignment 2
for (let i = 10; i >= 3; i--) {
    if (i < 10)
    {
        console.log("0" + i)
        
    }
    else
    {
        console.log(i)
    }
}
// assignment 3
for (let i = 1; i <= 6; i++)  {
    console.log(i);
    for (let j = 2; j <6; j++) {
        if (j % 2 === 0) {
            console.log("--" + j);
        }
    }
}
// assignment 4
let index = 10;
for (; ;){
    console.log(index);
    index -= 2;
    if (index < 4) {
        break;
    }
}
// assignment 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let i = 0; i < friends.length; i++){
    if (friends[i].startsWith(letter.toUpperCase())) {
        continue;
    }
    console.log(friends[i]);
}
// assignment 6
let swappedName = "elZerO";
let arr = swappedName.split("");
console.log(arr);
for (let i = 0; i < arr.length; i++){
    if (arr[i]===arr[i].toLowerCase()) {
        arr[i] = arr[i].toUpperCase();
    }
    else {
        arr[i] = arr[i].toLowerCase();
    }
}
console.log(arr.join(""));
// assignment 7
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = 0; i < mix.length; i++) {
    if (typeof mix[i] === "string" || mix[i]===1) {
        continue;
    }
    else {
        console.log(mix[i]);
    }
}