// assignment 1
function sayHello(userName, gender) {
    if (gender === "Male") {
        console.log(`Hello mr ${userName}`)
    }
    else if (gender === "Female") {
        console.log(`Hello ms ${userName}`)
    }
    else {
        console.log(`Hello ${userName}`)
    }
}
sayHello("Osama", "Male");
sayHello("Eman", "Female"); 
sayHello("Sameh"); 
// assignment 2
function calculate(firstNum, secondNum, operation) {
    if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        console.log("missing data");
        return;
    }
    switch (operation) {
        default:
        case "add":
            console.log(firstNum + secondNum);
            break;
        case "subtract":
            console.log(firstNum - secondNum)
            break;
        case "multiply":
            console.log(firstNum * secondNum)
        
    }
}
calculate(20);
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
// assignment 3
function ageInTime(theAge) {
    if (typeof theAge !== "number" || theAge > 100) {
        console.log(`error`);
        return;
    }
    console.log(`In years :${theAge}`);
    console.log(`In Months :${theAge * 12}`)
    console.log(`In weeks :${theAge * 12 * 4}`)
    console.log(`In days:${theAge * 12 * 4 * 7}`)
    console.log(`In hours:${theAge * 12 * 4 * 7 * 24}`)
    console.log(`In minutes:${theAge * 12 * 4 * 7 * 24 * 60}`)
    
    
}
ageInTime(38);
ageInTime(110);
// assignment 4
function checkStatus(a, b, c) {
    let arr = [a, b, c];
    for (let i = 0; i < arr.length; i++) {
        switch (typeof arr[i]) {
            case "number":
                var age = arr[i];
                break;
            case "boolean":
                var hire = arr[i];
                break;
            case "string":
                var name = arr[i];
                break;
        }
    }
     if (hire) {
     hire=  `u r hired`
    }
    else {
         hire=" u r not hired"
    }
   console.log(`hello ${name}, ur age is ${age} ,${hire}`)
}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// assignment 5
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++){
        document.write(`<option>`)
        document.write(`${i}`)
        document.write(`</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2020);
// assignment 6
function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++){
        Math.trunc(numbers[i]);
        if (typeof numbers[i] === "number") {
            result *= Math.trunc(numbers[i]);
        }
        
    }
    console.log(result)
}
multiply(10, 20);
multiply("A", 10, 30);
multiply(100.5, 10, "B");

