// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(5 === 8);

// -------------------Null----------------

console.log(null > 0);  //The reason is that an equality check == and comparisons (>, <, >=, <=, ==).work differently.
console.log(null == 0); // Comparisons convert null to a number, treating it as 0.
console.log(null >= 0); // That's why (3) null >= 0 is true and (1) null > 0 is false.


// -------------------Undefined--------------

console.log(undefined > 0);
console.log(undefined == 0); // when calculate undefined with three operator (>, <, ==, <=, >=) always gives value false.
console.log(undefined >= 0);

// === 
console.log("2" === 2); // === also check the datatype of the varibales.
