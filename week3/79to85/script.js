// assignment1 
// Create Your Object Here
let member = {
    name: 'Elzero',
    age: 38,
    country: 'Egypt',
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
// assignment 2

// Method One
let objMethodOne = {
    property: 'Method One'
}

console.log(objMethodOne.property); // "Method One"

// Method Two

let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three

let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"


// Method Four

function CreateObject(value) {
    this.property = value;
}

let objMethodFour = new CreateObject("Method Four");

console.log(objMethodFour.property); // "Method Four"
// assignment 3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({a}, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// assignment 4
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;
let gameNames = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  let gameName = gameNames[i];
  let game = myFavGames[gameName];
  
  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  if (game.bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
  console.log("#".repeat(20));
}