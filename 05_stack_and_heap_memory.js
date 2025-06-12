
//  ------------Stack(Primitive) & Heap(Non-Primitive) Memory---------------

let myWebsiteName = "jativihwa.com"

let anotherName = myWebsiteName
anotherName = "hitesh chai aur code"
// in stack original value change nhi hota hai uska copy value change hota hai.
console.log(myWebsiteName)
console.log(anotherName)    //Output: output is not same.

// heap memory

let idOne = {        // in heap memory original value change hota hai.
    email: "jatin@google.com",
    upi: "xyz@abc",
}

let idTwo = idOne
idTwo.email = "happycoding@google.com"

 console.log(idOne.email)
 console.log(idTwo.email)  //Output: output is same.

 // idOne or idTwo they have same reference, that's why output while same. 

// idTwo ka refrence main code(idOne) se hoga, also change the original(idOne) value.

