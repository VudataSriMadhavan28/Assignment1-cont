let text = "madam";

let reversed = text.split("").reverse().join("");

if (text === reversed) {
    console.log(text + " is a palindrome");
} else {
    console.log(text + " is not a palindrome");
}