let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 , false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// in boolean 1 => ture, 0 => false
// "" => false
// "jatin" => ture

let someNumber = 79
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)

// ***************** OPERATIONS ****************

let value = 67
let negValue = -value
console.log(negValue);

// ------ basic operation -------

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2**2);
console.log(2%2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 9); // this is the write way to write multiple operation.

console.log(+true);//----
                       //-----> this is not a right way to do conversion.
console.log(+"");//------


let num1, num2, num3 //-------
                            //---> this is not a right way to do conversion.
num1 = num2 = num3 = 2 + 2//--


let gameCounter = 100
++gameCounter;
console.log(gameCounter);