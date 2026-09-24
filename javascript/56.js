let numbers = [10, 50, 30, 80, 60];

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Second Largest =", numbers[1]);