// 1. conversion into number
// this suntax will be used "let valueInnumber = Number(num1)""
// let num = null
// console.log(typeof num);

// let valueInnumber = Number(num)
// console.log(typeof valueInnumber);
// console.log(valueInnumber);


/*In javascript  ab48 this type can be convert into number in javascript but its actually type is NAN  
so when we conert this type in number firstly we have to check that it is number or not */

// "ab48" this type conversion  - type is number but output is nan
// null this type conversion output - is 0
// undefined this type conversion output is nan
//boolean value output for True = 1, False = 0



// 2. conversion into Boolean
// this suntax will be used "let booleanIsLoggedIn = Boolean(isLoggedIn)"
// let isLoggedIn = "baba"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//In boolean conversion value is 1 then output is true
//In boolean conversion value is ""(empty) then output is false 
//In boolean conversion value is "baba" then output is true 



// 3. conversion into String
// this suntax will be used "let stringvar = String(abc)"
let abc = 2017
let stringvar = String(abc)
console.log(stringvar);
console.log(typeof stringvar);


// **********************  operations  ********************************

let value = 3
let negvalue =-value
console.log(negvalue);

//this are common operators which we knw already

// console.log(6+2);
// console.log(6-2);
// console.log(6*2);
// console.log(6**2);
// console.log(6/2);
// console.log(6%2);

let str1 = "MERA"
let str2=  " BABA"
str3 = str1 + str2
console.log(str3);

//conversion of this operators

console.log("1" + 2); //string + number = string
console.log(1+ "2");  //number + string = string

console.log("1" + 2 + 2); //string + number + number =  overall conside as string
console.log(1 + 2 + "2"); //number + number + string = add first both number then string  

console.log(3 + 2 * 2  / 4); //this is very poor method to use operator

console.log(+true); // output will be 1 because boolean uses operation 
console.log(+""); // output will be 0

// let num1, num2, num3 this type of code may not use 
// num1 = num2 = num3 = 2+2

let gamecounter = 100
gamecounter++; //postfix operator return value before increment 
++gamecounter; //prefix operator return value after increment 
console.log(gamecounter);




