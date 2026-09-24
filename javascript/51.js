let number = 153;
let original = number;
let sum = 0;

let digits = number.toString().length;

while (number > 0) {
    let digit = number % 10;
    sum += digit ** digits;
    number = Math.floor(number / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong number");
} else {
    console.log(original + " is not an Armstrong number");
}