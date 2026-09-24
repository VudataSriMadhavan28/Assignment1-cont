let text = "JavaScript is easy to learn";

// Find the word "JavaScript"
let pattern = /JavaScript/;

if (pattern.test(text)) {
    console.log("Pattern found");
} else {
    console.log("Pattern not found");
}

// Find all numbers
let sentence = "I have 2 books and 3 pens";

let numbers = sentence.match(/\d+/g);

console.log("Numbers:", numbers);