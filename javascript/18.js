let fruits = ["Apple", "Banana", "Mango"];

console.log("Original:", fruits);

fruits.push("Orange");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.unshift("Grapes");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

console.log("Length:", fruits.length);

console.log("Using map:");

fruits.map(function(fruit) {
    console.log(fruit);
});