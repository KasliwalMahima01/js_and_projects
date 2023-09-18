"use strict"; //treat all JS code as newer version

// alert (3+3) - weare using node js not browser (in brower only alert syntax useful )

//code readability should be high
//like every  new code should be on another line that can be easily Readable

/* (A) primitive datatypes (call by value )
   7 types
1. string   - const name ="baba"
2. number   - const score = 172
3. boolean  - const isloggedin = false
4. bigint   - const score  =34567629366n - number ke aage n laga diya toh wo bigint samj jata hai
5. null     - const temp = null
6. undefined  - const email = undefined or const email;
7. symbol - use when we have to show that this is unique 

 symbol example 
const id = Symbol('123')
const anotherid  = Symbol('123')
console.log(id === anotherid); output - false */


 /*  (B) non-primitive datatypes (call by Reference)
   3 types
1. Array
2. Object
3. Function 

1. array example
const cars = ["thar", "ritzs" ,"wagenoar", "BMW"]

2. object example
object must in  curly parenthesis {}
like in for loop , if else , anywhere we use { } this it will be object 

let myobj ={
    name : "mahima",
    age: "22",
}


//3.function example
const Myfunction = function(){
    console.log("mahii");
  
}
console.log(typeof Myfunction); - output will be function 
console.log(typeof myobj)       - output will be object
console.log(typeof cars)        - output will be object*/




//*********************Memory uage ******************/


/* 1. stack memory is use in primitives datatypes
        -- in this we got a copy of a variable / object and it will change 
           in copied variable / object not in original variable.
           so it do not change original value

   2. Heap memory is use in non-primitive or reference datatype
         -- in this got reference variable / object and it will change 
           in original variable / object.
           so it will in change original value */


    // stack example to understand
         
    let myInstaname = "mahii__01"

    let anotherInstaname = myInstaname 
       anotherInstaname ="mkgallery"

    console.log(anotherInstaname);


     // Heap example to understand
    let mahima ={
        email:"mahima.kasliwal1008@gmail.com",
        upi: "mahimakasliwal@ybl"
    }
 
    let mahii =  mahima
     
    mahii.email = "mahii@gmail.com"

    console.log(mahima.email);
    console.log(mahii.email);




