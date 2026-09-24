let numbers = [10, 20, 10, 30, 20, 10];

let frequency = {};

for (let number of numbers) {
    if (frequency[number]) {
        frequency[number]++;
    } else {
        frequency[number] = 1;
    }
}

console.log(frequency);