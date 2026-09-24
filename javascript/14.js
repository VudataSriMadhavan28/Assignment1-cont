let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let number of numbers) {
    sum = sum + number;
}

let average = sum / numbers.length;

console.log("Sum =", sum);
console.log("Average =", average);