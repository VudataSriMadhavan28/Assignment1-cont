let numbers = [25, 10, 45, 5, 30];

let largest = numbers[0];
let smallest = numbers[0];

for (let number of numbers) {

    if (number > largest) {
        largest = number;
    }

    if (number < smallest) {
        smallest = number;
    }
}

console.log("Largest =", largest);
console.log("Smallest =", smallest);