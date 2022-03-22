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
    expect(wordReturner(arrayOfWords2)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// ReferenceError: wordReturner is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// create function called wordReturner
// takes in array and single letter
// create for loop to iterate
// if statement
// check each index for the letter provided
// true, return the word
// false, don't
// return array

// function wordReturner(array,value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].indexOf(value && value.toUpperCase())) {
//             return array[i]
//          }
//     }
// }

// // Expected: ["Apple", "Banana", "Orange"]
// // Received: "Apple"
// // Not returning the rest of the words for some reason..

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
    expect(fullHouse(hand1)).toEqual([5, 5, 5, 3, 3]);
    expect(fullHouse(hand2)).toEqual([5, 5, 3, 3, 4]);
    expect(fullHouse(hand3)).toEqual([5, 5, 5, 5, 4]);
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

function fullHouse(array) {
    let num1 = num
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array.every(num1)) {
            return array[i]
        }
        
    }
}