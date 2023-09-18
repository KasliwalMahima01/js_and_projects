// Dates

let myDate = new Date()

console.log(typeof myDate); // output - object

// Methods of time and date in String
//console.log(myDate.toString());  output - Thu Sep 14 2023 19:37:13 GMT+0530 (India Standard Time)
//console.log(myDate.toDateString()); output - Thu Sep 14 2023
//console.log(myDate.toLocaleDateString());  output - 14/9/2023
//console.log(myDate.toTimeString());   output - 19:40:03 GMT+0530 (India Standard Time)
//console.log(myDate.toLocaleTimeString());  output - 7:40:03 pm

// type own date example

let createdDate = new Date(2023, 5, 1) // output - Thu Jun 01 2023
// let mycreatedDate = new Date(2023, 5, 01, 14, 00)  output - 1/6/2023, 2:00:00 pm
// let mycreatedDate = new Date("2023-07-29")  29/7/2023
// let mycreatedDate = new Date("08-04-2023")  output -  4/8/2023   
//console.log(createdDate.toDateString()); 

//itsvery useful when we design quiz, polls , hotel booking

let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(createdDate.getTime()); // this method convert the time into second
console.log(Math.floor(Date.now()/1000)); // this method convert the time into mili second
                                               

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // the month start from 0 so + 1 is actual month
console.log(newDate.getDay());

// nowdays this is standard syntax to print
// `${newDate.getMonth() + 1} this isactual month and day is ${newDate.getDay()`} 

console.log(newDate.toLocaleString('default' , {
    weekday:"long",
}))
// this is the way to  customize this method toLocaleString 

