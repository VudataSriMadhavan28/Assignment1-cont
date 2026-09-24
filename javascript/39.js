// Spread operator
let numbers1 = [10, 20, 30];
let numbers2 = [40, 50, 60];

let combined = [...numbers1, ...numbers2];

console.log("Combined Array:", combined);

// Rest operator
function add(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log("Sum:", add(10, 20, 30, 40));