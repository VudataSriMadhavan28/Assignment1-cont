let array1 = [10, 20, 30, 40];
let array2 = [30, 40, 50, 60];

let common = array1.filter(function(value) {
    return array2.includes(value);
});

console.log("Common Elements:", common);