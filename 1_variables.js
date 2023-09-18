const accountId = 142931
// const cannot be changed because its a constant 
let accountEmail ="merababa.01@gmail.com"
// let can be changed because its a variables 
// in let scope ({}) problem will be solved  
var accountPassword = "2017"
// var keyword = can be changed  
/* prefer not to use var becauseof issue in block scope and funtional scope*/
accountCity = "Mountabu"
/* variable can be assign like this also bt this is very bad method*/
let accountState;
//variable also declare like this bt output comme undefined


accountEmail = "baba@google.com"
accountPassword = "142931"
accountCity = "Madhuban"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])