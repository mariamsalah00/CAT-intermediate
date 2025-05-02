// assignment 1
// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
    console.log("00" + num1);
}
// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) {
    console.log("0" + num2 );
}
// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
    console.log( num3 );
}
// assignment 2
let num = 9;
let str = "9";
let str2 = "20";
if (num == str) {
    console.log("{num1} Is The Same Value As {str}");
    if (num !== str) {
        console.log("{num1} Is The Same Value As {str} But Not The Same Type");
    }
}
if (num !== str2) {
    console.log("{num1} Is not Same Value As {str2}");
}
if(str !== str2) {
    console.log("{str} Is not Same Value As {str2}");
}
 if (typeof str == typeof str2) {
        console.log("{num1} Is The Same type As {str2} But Not The Same value");
}
// assignment 3
let numm1 = 10;
let numm2 = 30;
let numm3 = "30";

if (numm3 > numm1 && typeof numm3 !== typeof numm1) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
if (numm3 > numm1 && numm3 == numm2 && typeof numm3 !== typeof numm2) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
if (numm3 !== num1 && typeof numm3 !== typeof numm1) {
     console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}
// assignment 4
{
let a = 15;
let b = 5;
let num3 = 15;
let num4 = 46;
// Condition 1
if (a > b) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2

if (a > b && a < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (a > b && a === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((a + b) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((a + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((a + b+ num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (a + num3) + b === 21) {
  console.log("True");
} else {
  console.log("False");
}

}



