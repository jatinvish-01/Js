
// 1st method to declare string.
const name = "jatinvish"
const mobNum = 3874298792

console.log(name + mobNum + "ronik");  //this is not way to write string concat.

// 2st method to declare string.

console.log(`Hello my name is ${name} and my mobNum is ${mobNum}`); // modern way to write the string is know as [String Interpulation].
// also use the ToUppercase etc in btw ${__}.
 
// 3st method to declare string.

const gameName = new String ('hitesh-hc-com')
/* Output 

String {'jatinstr'}
0: "j"
1: "a"
2: "t"
3: "i"  // keyvalue pair
4: "n"
5: "s"
6: "t"
7: "r"
length: 8
Prototype: string
*/

// Method to access key value
console.log(gameName[0]);
console.log(gameName[4]);

// Access Prototype.

console.log(gameName.__proto__);
console.log(gameName.length); //.concat(), .charAt(), .ToUpperCase(), .ToLowerCase(), .slice(), .splite(), .trim(), .big(), .small() etc..

// Output: {} empty object--> but they are not empty the right way to see the value (in browser)

// toUpperCase(), charAt(), indexOf()

 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 // Substring()
 
 const newSrting = gameName.substring(-8,4)
 console.log(newSrting);

 // Slice()

 const anotherString = gameName.slice(-5,4)
 console.log(anotherString);

 // Trim()

 const newStringOne = "   jatin   "
 console.log(newStringOne);
 console.log(newStringOne.trim())

 // Replace()

const url = "https://jatin.com/jatin%20vish"
console.log(url.replace('%20', '_'));

// include() - us for searching the value from the string.

console.log(url.includes("jatin")) // Ture
console.log(url.includes("tarush")) // False

// Split() - convert string to Array

console.log(gameName.split('-'))


// AND KEEP PRACTICING WITH Mdn websites 
// Explore all methods of strings & also do work hard. 