let email = "student@gmail.com";

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (pattern.test(email)) {
    console.log("Valid Email Address");
} else {
    console.log("Invalid Email Address");
}