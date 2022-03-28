// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

describe("secretMessage", () => {
  it("takes in a string and returns a coded message", () => {
    const secretCodeWord1 = "Lackadaisical";
    const secretCodeWord2 = "Gobbledygook";
    const secretCodeWord3 = "Eccentric";

    expect(secretMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(secretMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(secretMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

//   ReferenceError: secretMessage is not defined, buen fracaso

// b) Create the function that makes the test pass.

// (NEW) PSEUDOCODE:
// create function that takes in a string
// create variable that will hold the coded message (empty str)
// create a for loop that will iterate through the string
// use if statement to replace the letters with numbers
  // something like if str[i] == "a" && str[i] == "A" <--- both lower and upper
    // logical or?
  // else if (next condition), etc.
// return [i] if conditions don't trigger
// return the variable I created

const secretMessage = (str) => {
  let codedMessage = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") {
      codedMessage += "4";
    } else if (str[i] == "e" || str[i] == "E") {
      codedMessage += "3";
    } else if (str[i] == "i" || str[i] == "I") {
      codedMessage += "1";
    } else if (str[i] == "o" || str[i] == "O") {
      codedMessage += "0";
    } else {
      codedMessage += str[i];
    }
  }
  return codedMessage;
}

console.log(secretMessage(secretCodeWord1))
console.log(secretMessage(secretCodeWord2))
console.log(secretMessage(secretCodeWord3))


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const letterA = "a";
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("wordReturner", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
    const letterA = "a";
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
    const letterE = "e";

    expect(wordReturner(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"]);
    expect(wordReturner(arrayOfWords2)).toEqual(["Cherry", "Blueberry", "Peach"]);
  });
});

// ReferenceError: wordReturner is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// create function called wordReturner
// takes in array and single letter (2 parameters)
// create a container (newArray)
// create for loop to iterate
// if statement
  // check each index for the letter provided
// true, concat the word to new array
// not sure what to put for else statement (I don't think you always need an 'else'?)
// return new array

function wordReturner(array,value) {
  let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].indexOf(value && value.toUpperCase())) {
             newArray.concat(array[i])
         }
    } return newArray
}

// console.log(wordReturner(arrayOfWords1))
// console.log(wordReturner(arrayOfWords2))

// // Expected: ["Apple", "Banana", "Orange"]
// // Received:  - Array ["Apple", "Banana", "Orange",] + Array []

// I realized that I was using return too soon, which was stopping my function prematurely. I am now able to get the values I'm looking for, but now I'm stuck with an empty array at the end.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
    const hand1 = [5, 5, 5, 3, 3];
    const hand2 = [5, 5, 3, 3, 4];
    const hand3 = [5, 5, 5, 5, 4];
    expect(fullHouse(hand1)).toEqual(true);
    expect(fullHouse(hand2)).toEqual(false);
    expect(fullHouse(hand3)).toEqual(false);
  });
});

// ReferenceError: fullHouse is not defined, good fail

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// create fn named fullHouse
    // takes in array
// check array for 3 of same number && 2 of different number
    // iterate using for loop
    // slice and return true values 

// function fullHouse(array) {
//     let num1 = num
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == array.every(num1)) {
//             return array[i]
//         }
        
//     }
// }

// (NEW) PSEUDOCODE:
// create function named fullHouse that takes in an array
// .sort() the function so it's easier to compare values
  // .sort() goes in ascending order which means we'll have two outcomes:
    // 1) a pair then a three of a kind 
    // OR
    // 2) a three of a kind then a pair
// check the array for one of two outcomes (using iteration, maybe?):
  // either check for the pair first or the three of a kind 
    // something like if (array[0] == array[1]) <--- this is the pair
  // then check for the other set
    // something like if (array[2] == array[3] && array[3] == array[4]) <--- this is the three of a kind
  // BOTH checks must be true to be full house (use logical &&)
    // if either one is false, it's not a full house
// return true or false depending on outcome

function fullHouse(array) {
  array.sort() // <-- makes the array values lowest to highest
  if (array[0] === array[1] === array[2] && array[3] === array[4]){
    let fullHouseResult = true
    return fullHouseResult
  } else if (array[0] === array[1] && array[2] === array[3] === array[4]) {
    let fullHouseResult = true
    return fullHouseResult
  } else {
    let fullHouseResult = false
    return fullHouseResult
  } 
}

// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))


// I got closer with this attempt, but I'm still not sure how to make it work. 