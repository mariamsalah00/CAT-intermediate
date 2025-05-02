// assignment 1
function getDetails(zName, zAge, zCountry) {
function namePattern(zName) {
    let a = zName.split(" ");
    return `${a[0]} .${a[1][0]}`;
   }
  function ageWithMessage(zAge) {
      let a = parseInt(zAge);
      return ` your Age is ${a}`;
  }
  function countryTwoLetters(zCountry) {
      let a = zCountry.slice(0, 2).toUpperCase();
      return `ur country is ${a}`;
  }
  function fullDetails() {
    return `hello ${namePattern(zName)} , ${ageWithMessage(zAge)} , ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// assignment 2
let itsMe = () =>  `Iam A Normal Function`;
console.log(itsMe());
let urlCreate= (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));
// assignment 3
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// assignment 4
function specialMix(...data) {
    let sum = 0;
      let foundNumber = false;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "number") {
            sum += data[i];
            foundNumber = true;
        }
        else {
            let a = parseInt(data[i]);
            if(!isNaN(a)){
                sum += a;
                foundNumber = true;
            }
        }
        
    }
    return foundNumber ? sum : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings