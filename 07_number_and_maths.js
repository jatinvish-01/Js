
const score = 100

const balance = new Number (200) // [to declare specilly] new way to confirm that is number.
console.log(balance); // Output: Number {200}

console.log(balance.toString()); // convet number to string.
console.log(balance.toString().length);// also find the length.

// toFixed() --> us for e-commerce website ex- 0.00, .00, 100.00

console.log(balance.toFixed(2)) // Output: 200.00

// toPecision() - they gives value in form of string.

const otherName = 23.8907
console.log(otherName.toPrecision(3))// Output: 23.9

// toLocaleString() - inhence the representation of the zeros.

const anotherNameOne = 10000000
console.log(anotherNameOne.toLocaleString('en-IN'));// Output: 10,000,000
// ('en-IN') us for indian value.

// Find MAX value MIN value in JavaScript.
Number.MAX_VALUE
7976931348623157e+308 // MAX value in JavaScript.

Number.MIN_VALUE
5e-324 // MIN value in JavaScript.

Number.MAX_SAFE_INTEGER
9007199254740991  //storage of JavaScript.

//-----------------------------Math's---------------------

console.log(Math); // Math are Objects - also run in browser.

// Output: Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// Also maths have much property (u can explore more about math ).

// Same important functions use much.

// Absolute Vale

console.log(Math.abs); // Only (Negative -) value convert into (Positive +) value.

// Round off

console.log(Math.round(5.5)); // They pick the number accourding to the decimal number, (5.2) = 5, (5.8) = 6.
console.log(Math.ceil(5.1)); // They pick greater number. Eg:- (5.1) = 6, (5.9) = 6.

console.log(Math.floor(5.2)); // They pick smaller number. Eg:- (5.2) = 5, (5.9) = 5.

