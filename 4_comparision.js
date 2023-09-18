console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
//****************** note ***************** */
/* the reason behind the output gives false because an equality check  (==) and 
comparision > < >= <= works differntly */

//comparision convert null to a number treating it as 0.
//thts why this below code (3) null >=0 is true and (1) null > 0 is false

console.log(null > 0);  //1
console.log(null == 0); //2
console.log(null >= 0); //3
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
//above all 6 code is very confusing code for conversion
//must avoid this code


// ==== it strictly check not only values bt also the data type of the variable
console.log("2" === "2");

